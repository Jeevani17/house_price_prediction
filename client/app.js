<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Price Estimator</title>
    <!-- Include jQuery if not already included -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
    <div>
        <h1>Estimate Home Price</h1>
        <label for="uiSqft">Total Square Footage:</label>
        <input type="text" id="uiSqft" placeholder="Enter total sqft"><br><br>

        <label>BHK:</label>
        <input type="radio" name="uiBHK" value="1">1
        <input type="radio" name="uiBHK" value="2">2
        <input type="radio" name="uiBHK" value="3">3
        <input type="radio" name="uiBHK" value="4">4<br><br>

        <label>Bathrooms:</label>
        <input type="radio" name="uiBathrooms" value="1">1
        <input type="radio" name="uiBathrooms" value="2">2
        <input type="radio" name="uiBathrooms" value="3">3
        <input type="radio" name="uiBathrooms" value="4">4<br><br>

        <label for="uiLocations">Select Location:</label>
        <select id="uiLocations">
            <!-- Options will be populated by JavaScript -->
        </select><br><br>

        <button onclick="onClickedEstimatePrice()">Estimate Price</button><br><br>

        <div id="uiEstimatedPrice">
            <!-- Estimated price will be displayed here -->
        </div>
    </div>

    <script>
        function getBathValue() {
            const uiBathrooms = document.getElementsByName("uiBathrooms");
            for (let i = 0; i < uiBathrooms.length; i++) {
                if (uiBathrooms[i].checked) {
                    return i + 1;
                }
            }
            return -1; // Invalid Value
        }

        function getBHKValue() {
            const uiBHK = document.getElementsByName("uiBHK");
            for (let i = 0; i < uiBHK.length; i++) {
                if (uiBHK[i].checked) {
                    return i + 1;
                }
            }
            return -1; // Invalid Value
        }

        function onClickedEstimatePrice() {
            console.log("Estimate price button clicked");
            const sqft = document.getElementById("uiSqft").value;
            const bhk = getBHKValue();
            const bathrooms = getBathValue();
            const location = document.getElementById("uiLocations").value;
            const estPrice = document.getElementById("uiEstimatedPrice");

            const url = "/api/predict_home_price"; // Assuming nginx is being used

            $.post(url, {
                total_sqft: parseFloat(sqft),
                bhk: bhk,
                bath: bathrooms,
                location: location
            }, function(data, status) {
                if (status === 'success') {
                    estPrice.innerHTML = "<h2>" + data.estimated_price.toString() + " Lakh</h2>";
                } else {
                    estPrice.innerHTML = "<h2>Error in fetching data. Please try again later.</h2>";
                }
                console.log(status);
            }).fail(function() {
                estPrice.innerHTML = "<h2>Request failed. Please check the server.</h2>";
            });
        }

        function onPageLoad() {
            console.log("document loaded");
            const url = "/api/get_location_names"; // Assuming nginx is being used
            $.get(url, function(data, status) {
                console.log("got response for get_location_names request");
                if (data) {
                    const locations = data.locations;
                    const uiLocations = document.getElementById("uiLocations");
                    $('#uiLocations').empty();
                    for (let i = 0; i < locations.length; i++) {
                        const opt = new Option(locations[i]);
                        $('#uiLocations').append(opt);
                    }
                }
            }).fail(function() {
                console.error("Failed to load locations.");
            });
        }

        window.onload = onPageLoad;
    </script>
</body>
</html>
