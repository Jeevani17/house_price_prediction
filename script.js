// Bangalore locations from the model data
const bangaloreLocations = [
    "1st Block Jayanagar",
    "1st Phase JP Nagar", 
    "2nd Phase Judicial Layout",
    "2nd Stage Nagarbhavi",
    "5th Block HBR Layout",
    "5th Phase JP Nagar",
    "6th Phase JP Nagar", 
    "7th Phase JP Nagar",
    "8th Phase JP Nagar",
    "9th Phase JP Nagar",
    "AECS Layout",
    "Abbigere",
    "Akshaya Nagar",
    "Ambalipura",
    "Ambedkar Nagar",
    "Amruthahalli",
    "Anandapura",
    "Ananth Nagar",
    "Anekal",
    "Anjanapura",
    "Ardendale",
    "Arekere",
    "Attibele",
    "BEML Layout",
    "BTM 2nd Stage",
    "BTM Layout",
    "Babusapalaya",
    "Badavala Nagar",
    "Balagere",
    "Banashankari",
    "Banashankari Stage II",
    "Banashankari Stage III",
    "Banashankari Stage V",
    "Banashankari Stage VI",
    "Banaswadi",
    "Banjara Layout",
    "Bannerghatta",
    "Bannerghatta Road",
    "Basavangudi",
    "Basaveshwara Nagar",
    "Battarahalli",
    "Begur",
    "Begur Road",
    "Bellandur",
    "Benson Town",
    "Bharathi Nagar",
    "Bhoganhalli",
    "Billekahalli",
    "Binny Pete",
    "Bisuvanahalli",
    "Bommanahalli",
    "Bommasandra",
    "Bommasandra Industrial Area",
    "Bommenahalli",
    "Brookefield",
    "Budigere",
    "CV Raman Nagar",
    "Chamrajpet",
    "Chandapura",
    "Channasandra",
    "Chikka Tirupathi",
    "Chikkabanavar",
    "Chikkalasandra",
    "Choodasandra",
    "Cooke Town",
    "Cox Town",
    "Cunningham Road",
    "Dasanapura",
    "Dasarahalli",
    "Devanahalli",
    "Devarachikkanahalli",
    "Dodda Nekkundi",
    "Doddaballapur",
    "Doddakallasandra",
    "Doddathoguru",
    "Domlur",
    "Dommasandra",
    "EPIP Zone",
    "Electronic City",
    "Electronic City Phase II",
    "Electronics City Phase 1",
    "Frazer Town",
    "GM Palaya",
    "Garudachar Palya",
    "Giri Nagar",
    "Gollarapalya Hosahalli",
    "Gottigere",
    "Green Glen Layout",
    "Gubbalala",
    "Gunjur",
    "HAL 2nd Stage",
    "HBR Layout",
    "HRBR Layout",
    "HSR Layout",
    "Haralur Road",
    "Harlur",
    "Hebbal",
    "Hebbal Kempapura",
    "Hegde Nagar",
    "Hennur",
    "Hennur Road",
    "Hoodi",
    "Horamavu Agara",
    "Horamavu Banaswadi",
    "Hormavu",
    "Hosa Road",
    "Hosakerehalli",
    "Hoskote",
    "Hosur Road",
    "Hulimavu",
    "ISRO Layout",
    "ITPL",
    "Iblur Village",
    "Indira Nagar",
    "JP Nagar",
    "Jakkur",
    "Jalahalli",
    "Jalahalli East",
    "Jigani",
    "Judicial Layout",
    "KR Puram",
    "Kadubeesanahalli",
    "Kadugodi",
    "Kaggadasapura",
    "Kaggalipura",
    "Kaikondrahalli",
    "Kalena Agrahara",
    "Kalyan Nagar",
    "Kambipura",
    "Kammanahalli",
    "Kammasandra",
    "Kanakapura",
    "Kanakpura Road",
    "Kannamangala",
    "Karuna Nagar",
    "Kasavanhalli",
    "Kasturi Nagar",
    "Kathriguppe",
    "Kaval Byrasandra",
    "Kenchenahalli",
    "Kengeri",
    "Kengeri Satellite Town",
    "Kereguddadahalli",
    "Kodichikkanahalli",
    "Kodigehaali",
    "Kodigehalli",
    "Kodihalli",
    "Kogilu",
    "Konanakunte",
    "Koramangala",
    "Kothannur",
    "Kothanur",
    "Kudlu",
    "Kudlu Gate",
    "Kumaraswami Layout",
    "Kundalahalli",
    "LB Shastri Nagar",
    "Laggere",
    "Lakshminarayana Pura",
    "Lingadheeranahalli",
    "Magadi Road",
    "Mahadevpura",
    "Mahalakshmi Layout",
    "Mallasandra",
    "Malleshpalya",
    "Malleshwaram",
    "Marathahalli",
    "Margondanahalli",
    "Marsur",
    "Mico Layout",
    "Munnekollal",
    "Murugeshpalya",
    "Mysore Road",
    "NGR Layout",
    "NRI Layout",
    "Nagarbhavi",
    "Nagasandra",
    "Nagavara",
    "Nagavarapalya",
    "Narayanapura",
    "Neeladri Nagar",
    "Nehru Nagar",
    "OMBR Layout",
    "Old Airport Road",
    "Old Madras Road",
    "Padmanabhanagar",
    "Pai Layout",
    "Panathur",
    "Parappana Agrahara",
    "Pattandur Agrahara",
    "Poorna Pragna Layout",
    "Prithvi Layout",
    "R.T. Nagar",
    "Rachenahalli",
    "Raja Rajeshwari Nagar",
    "Rajaji Nagar",
    "Rajiv Nagar",
    "Ramagondanahalli",
    "Ramamurthy Nagar",
    "Rayasandra",
    "Sahakara Nagar",
    "Sanjay Nagar",
    "Sarakki Nagar",
    "Sarjapur",
    "Sarjapur Road",
    "Sarjapura - Attibele Road",
    "Sector 2 HSR Layout",
    "Sector 7 HSR Layout",
    "Seegehalli",
    "Shampura",
    "Shivaji Nagar",
    "Singasandra",
    "Somasundara Palya",
    "Sompura",
    "Sonnenahalli",
    "Subramanyapura",
    "Sultan Palaya",
    "TC Palaya",
    "Talaghattapura",
    "Thanisandra",
    "Thigalarapalya",
    "Thubarahalli",
    "Tindlu",
    "Tumkur Road",
    "Ulsoor",
    "Uttarahalli",
    "Varthur",
    "Varthur Road",
    "Vasanthapura",
    "Vidyaranyapura",
    "Vijayanagar",
    "Vishveshwarya Layout",
    "Vishwapriya Layout",
    "Vittasandra",
    "Whitefield",
    "Yelachenahalli",
    "Yelahanka",
    "Yelahanka New Town",
    "Yelenahalli",
    "Yeshwanthpur"
];

// Mock price calculation function with more realistic pricing
function calculateMockPrice(area, bhk, bathrooms, location) {
    // Base price per sq ft varies by location type
    let basePricePerSqft = 3000; // Default base price
    
    // Premium locations get higher base price
    const premiumLocations = ['Koramangala', 'Indiranagar', 'Whitefield', 'Electronic City', 'HSR Layout', 'BTM Layout', 'Jayanagar', 'Malleshwaram', 'Rajajinagar'];
    const midTierLocations = ['Banashankari', 'Basavanagudi', 'JP Nagar', 'Hebbal', 'Marathahalli', 'Bellandur'];
    
    if (premiumLocations.some(loc => location.toLowerCase().includes(loc.toLowerCase()))) {
        basePricePerSqft = 5000;
    } else if (midTierLocations.some(loc => location.toLowerCase().includes(loc.toLowerCase()))) {
        basePricePerSqft = 4000;
    }
    
    // Calculate total price
    const basePrice = area * basePricePerSqft;
    const bhkMultiplier = 1 + (bhk - 1) * 0.1; // 10% increase per additional BHK
    const bathMultiplier = 1 + (bathrooms - 1) * 0.05; // 5% increase per additional bathroom
    
    const totalPrice = basePrice * bhkMultiplier * bathMultiplier;
    const priceInLakhs = totalPrice / 100000; // Convert to lakhs
    
    return Math.round(priceInLakhs * 100) / 100; // Round to 2 decimal places
}

// DOM elements
const form = document.getElementById('priceForm');
const locationSelect = document.getElementById('location');
const resultContainer = document.getElementById('result');
const errorContainer = document.getElementById('error');
const priceDisplay = document.getElementById('priceDisplay');
const errorMessage = document.getElementById('errorMessage');
const submitBtn = form.querySelector('.submit-btn');
const btnText = submitBtn.querySelector('.btn-text');
const loadingSpinner = submitBtn.querySelector('.loading-spinner');

// Utility functions
function getSelectedRadioValue(name) {
    const radio = document.querySelector(`input[name="${name}"]:checked`);
    return radio ? parseInt(radio.value) : null;
}

function showLoading() {
    submitBtn.disabled = true;
    btnText.style.opacity = '0';
    loadingSpinner.style.display = 'block';
}

function hideLoading() {
    submitBtn.disabled = false;
    btnText.style.opacity = '1';
    loadingSpinner.style.display = 'none';
}

function showResult(price) {
    errorContainer.style.display = 'none';
    priceDisplay.textContent = `₹${price} Lakh`;
    resultContainer.style.display = 'block';
}

function showError(message) {
    resultContainer.style.display = 'none';
    errorMessage.textContent = message;
    errorContainer.style.display = 'block';
}

// Initialize the application
function init() {
    console.log('Initializing application...');
    
    // Clear and populate location dropdown
    locationSelect.innerHTML = '';
    
    // Add default option
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.disabled = true;
    defaultOption.selected = true;
    defaultOption.textContent = 'Choose a Location';
    locationSelect.appendChild(defaultOption);
    
    // Add all Bangalore locations
    bangaloreLocations.forEach(location => {
        const option = document.createElement('option');
        option.value = location;
        option.textContent = location;
        locationSelect.appendChild(option);
    });
    
    console.log(`Loaded ${bangaloreLocations.length} locations`);

    // Add form submit handler
    form.addEventListener('submit', handleFormSubmit);
}

// Handle form submission
async function handleFormSubmit(e) {
    e.preventDefault();
    
    console.log('Form submitted');
    
    // Get form values
    const area = parseFloat(document.getElementById('area').value);
    const bhk = getSelectedRadioValue('bhk');
    const bathrooms = getSelectedRadioValue('bathrooms');
    const location = locationSelect.value;

    console.log('Form values:', { area, bhk, bathrooms, location });

    // Validate inputs
    if (!area || area <= 0) {
        showError('Please enter a valid area');
        return;
    }

    if (!bhk) {
        showError('Please select number of bedrooms (BHK)');
        return;
    }

    if (!bathrooms) {
        showError('Please select number of bathrooms');
        return;
    }

    if (!location) {
        showError('Please select a location');
        return;
    }

    // Show loading state
    showLoading();

    try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Calculate mock price
        const estimatedPrice = calculateMockPrice(area, bhk, bathrooms, location);
        
        console.log('Calculated price:', estimatedPrice);
        
        // Show result
        showResult(estimatedPrice);
    } catch (error) {
        console.error('Error calculating price:', error);
        showError('Failed to calculate price. Please try again.');
    } finally {
        hideLoading();
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing app...');
    init();
});

// Also initialize if DOM is already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}