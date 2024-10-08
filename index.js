

const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const option4 = document.getElementById('option4');
const flagImg = document.getElementById('flagImg');
const scoreText = document.getElementById('score');
let correctButton = 0
let score = 0;
let flagNames = {
    "AF": "Afghanistan",
    "AL": "Albania",
    "DZ": "Algeria",
    "AD": "Andorra",
    "AO": "Angola",
    "AG": "Antigua and Barbuda",
    "AR": "Argentina",
    "AM": "Armenia",
    "AU": "Australia",
    "AT": "Austria",
    "AZ": "Azerbaijan",
    "BS": "Bahamas",
    "BH": "Bahrain",
    "BD": "Bangladesh",
    "BB": "Barbados",
    "BY": "Belarus",
    "BE": "Belgium",
    "BZ": "Belize",
    "BJ": "Benin",
    "BT": "Bhutan",
    "BO": "Bolivia",
    "BA": "Bosnia and Herzegovina",
    "BW": "Botswana",
    "BR": "Brazil",
    "BN": "Brunei",
    "BG": "Bulgaria",
    "BF": "Burkina Faso",
    "BI": "Burundi",
    "CV": "Cabo Verde",
    "KH": "Cambodia",
    "CM": "Cameroon",
    "CA": "Canada",
    "CF": "Central African Republic",
    "TD": "Chad",
    "CL": "Chile",
    "CN": "China",
    "CO": "Colombia",
    "KM": "Comoros",
    "CG": "Congo",
    "CD": "Democratic Republic of the Congo",
    "CR": "Costa Rica",
    "CI": "Côte d'Ivoire",
    "HR": "Croatia",
    "CU": "Cuba",
    "CY": "Cyprus",
    "CZ": "Czech Republic",
    "DK": "Denmark",
    "DJ": "Djibouti",
    "DM": "Dominica",
    "DO": "Dominican Republic",
    "EC": "Ecuador",
    "EG": "Egypt",
    "SV": "El Salvador",
    "GQ": "Equatorial Guinea",
    "ER": "Eritrea",
    "EE": "Estonia",
    "SZ": "Eswatini",
    "ET": "Ethiopia",
    "FJ": "Fiji",
    "FI": "Finland",
    "FR": "France",
    "GA": "Gabon",
    "GM": "Gambia",
    "GE": "Georgia",
    "DE": "Germany",
    "GH": "Ghana",
    "GR": "Greece",
    "GD": "Grenada",
    "GT": "Guatemala",
    "GN": "Guinea",
    "GW": "Guinea-Bissau",
    "GY": "Guyana",
    "HT": "Haiti",
    "HN": "Honduras",
    "HU": "Hungary",
    "IS": "Iceland",
    "IN": "India",
    "ID": "Indonesia",
    "IR": "Iran",
    "IQ": "Iraq",
    "IE": "Ireland",
    "IL": "Israel",
    "IT": "Italy",
    "JM": "Jamaica",
    "JP": "Japan",
    "JO": "Jordan",
    "KZ": "Kazakhstan",
    "KE": "Kenya",
    "KI": "Kiribati",
    "KP": "North Korea",
    "KR": "South Korea",
    "KW": "Kuwait",
    "KG": "Kyrgyzstan",
    "LA": "Laos",
    "LV": "Latvia",
    "LB": "Lebanon",
    "LS": "Lesotho",
    "LR": "Liberia",
    "LY": "Libya",
    "LI": "Liechtenstein",
    "LT": "Lithuania",
    "LU": "Luxembourg",
    "MG": "Madagascar",
    "MW": "Malawi",
    "MY": "Malaysia",
    "MV": "Maldives",
    "ML": "Mali",
    "MT": "Malta",
    "MH": "Marshall Islands",
    "MR": "Mauritania",
    "MU": "Mauritius",
    "MX": "Mexico",
    "FM": "Micronesia",
    "MD": "Moldova",
    "MC": "Monaco",
    "MN": "Mongolia",
    "ME": "Montenegro",
    "MA": "Morocco",
    "MZ": "Mozambique",
    "MM": "Myanmar",
    "NA": "Namibia",
    "NR": "Nauru",
    "NP": "Nepal",
    "NL": "Netherlands",
    "NZ": "New Zealand",
    "NI": "Nicaragua",
    "NE": "Niger",
    "NG": "Nigeria",
    "MK": "North Macedonia",
    "NO": "Norway",
    "OM": "Oman",
    "PK": "Pakistan",
    "PW": "Palau",
    "PA": "Panama",
    "PG": "Papua New Guinea",
    "PY": "Paraguay",
    "PE": "Peru",
    "PH": "Philippines",
    "PL": "Poland",
    "PT": "Portugal",
    "QA": "Qatar",
    "RO": "Romania",
    "RU": "Russia",
    "RW": "Rwanda",
    "KN": "Saint Kitts and Nevis",
    "LC": "Saint Lucia",
    "VC": "Saint Vincent and the Grenadines",
    "WS": "Samoa",
    "SM": "San Marino",
    "ST": "Sao Tome and Principe",
    "SA": "Saudi Arabia",
    "SN": "Senegal",
    "RS": "Serbia",
    "SC": "Seychelles",
    "SL": "Sierra Leone",
    "SG": "Singapore",
    "SK": "Slovakia",
    "SI": "Slovenia",
    "SB": "Solomon Islands",
    "SO": "Somalia",
    "ZA": "South Africa",
    "SS": "South Sudan",
    "ES": "Spain",
    "LK": "Sri Lanka",
    "SD": "Sudan",
    "SR": "Suriname",
    "SE": "Sweden",
    "CH": "Switzerland",
    "SY": "Syria",
    "TJ": "Tajikistan",
    "TZ": "Tanzania",
    "TH": "Thailand",
    "TL": "Timor-Leste",
    "TG": "Togo",
    "TO": "Tonga",
    "TT": "Trinidad and Tobago",
    "TN": "Tunisia",
    "TR": "Turkey",
    "TM": "Turkmenistan",
    "TV": "Tuvalu",
    "UG": "Uganda",
    "UA": "Ukraine",
    "AE": "United Arab Emirates",
    "GB": "United Kingdom",
    "US": "United States",
    "UY": "Uruguay",
    "UZ": "Uzbekistan",
    "VU": "Vanuatu",
    "VE": "Venezuela",
    "VN": "Vietnam",
    "YE": "Yemen",
    "ZM": "Zambia",
    "ZW": "Zimbabwe"
}
let currentName = ""
let currentAbbr = ""
const abbrs = Object.keys(flagNames);
let flagNum = JSON.parse(JSON.stringify(abbrs.length))
flagNum--
let revealing = false
let seen = []
let count = JSON.parse(JSON.stringify(abbrs.length))

window.addEventListener("load", newFlag)

option1.addEventListener("click", () => {
    if (currentName != "" && currentAbbr != "" && correctButton != 0 && !revealing) {
        if (correctButton == 1) {
            score++
            newFlag()
        } 
        else {
            revealCorrect()
        }
    }
})
option2.addEventListener("click", () => {
    if (currentName != "" && currentAbbr != "" && correctButton != 0 && !revealing) {
        if (correctButton == 2) {
            score++
            newFlag()
        } 
        else {
            revealCorrect()
        }
    }
})
option3.addEventListener("click", () => {
    if (currentName != "" && currentAbbr != "" && correctButton != 0 && !revealing) {
        if (correctButton == 3) {
            score++
            newFlag()
        } 
        else {
            revealCorrect()
        }
    }
})
option4.addEventListener("click", () => {
    if (currentName != "" && currentAbbr != "" && correctButton != 0 && !revealing) {
        if (correctButton == 4) {
            score++
            newFlag()
        } 
        else {
            revealCorrect()
        }
    }
})


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function newFlag() {
    // pick a new flag
    currentName = flagNames[abbrs[Number(random(0, abbrs.length-1))]]
    for (let abbr in flagNames) {
        if (flagNames[abbr] === currentName) {
            currentAbbr = abbr;
            break;
        }
    }
    if (seen.includes(currentAbbr)) {
        newFlag()
        return
    }
    // set the new picked flag
    flagImg.src = `FLAGS/${currentAbbr.toLowerCase()}.png`

    

    // set button options
    
    correctButton = random(1, 4)


    updateButtonChoices()
    updateScoreText()
    
    seen.push(currentAbbr)

    count--
    if (count === 0) {
        alert(`Game Over! Your final score is ${score} / ${flagNum}`)
        score = 0
        count = flagNum
        seen = []
        updateScoreText()
        newFlag()
    }
    updateScoreText()
}

function updateButtonChoices() {
    let available = abbrs.slice(); // Copy the array of abbreviations
    available.splice(available.indexOf(currentAbbr), 1); // Remove the correct option from available choices

    let buttons = [option1, option2, option3, option4];

    // Assign the correct name to the correct button
    buttons[correctButton - 1].textContent = currentName;

    // Assign random names to the other buttons
    buttons.splice(correctButton - 1, 1);
    for (let i = 0; i < buttons.length; i++) {
        let randomIndex = random(0, available.length - 1);
        buttons[i].textContent = flagNames[available[randomIndex]];
        available.splice(randomIndex, 1); // Remove the used name from the list to avoid duplicates
    }
}


function updateScoreText() {
    scoreText.textContent = `${score} / ${flagNum}`
}

function revealCorrect() {
    let correct = 0
    switch (correctButton) {
        case 1:
            correct = option1
            break;
        case 2:
            correct = option2
            break;
        case 3:
            correct = option3
            break;
        case 4:
            correct = option4
            break;
    }
    revealing = true
    correct.classList.remove('reveal')
    void correct.offsetWidth
    correct.classList.add('reveal')
    setTimeout(function () {
        newFlag()
        revealing = false
    }, 1500);
}