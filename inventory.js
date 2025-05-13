// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenuClose = document.querySelector('.mobile-menu-close');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
});

mobileMenuClose.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close mobile menu when clicking on a link
const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Enhanced Inventory Data with detailed information and multiple images
const inventoryData = [
        {
    "id": 1,
    "name": "Toyota Prado TZG",
    "category": "SUV",
    "price": 8499999,
    "year": 2018,
    "engine": "2.8L Diesel",
    "transmission": "Automatic",
    "fuelType": "Diesel",
    "seating": "7",
    "drive": "4WD",
    "features": [
        "Height Control",
        "Sunroof",
        "Leather Seats",
        "Multifunctional Steering Wheel",
        "Antilocking Brake System (ABS)",
        "Xenon Headlights",
        "Headlight Washers",
        "Electric Adjustable Seats",
        "Parking Sensors",
        "Reverse Camera",
        "360° Camera",
        "Daytime Running Lights"
    ],
    "fuelEconomy": "8.0 L/100km",
    "topSpeed": "175 km/h",
    "acceleration": "12.7 seconds (0-100 km/h)",
    "images": [
        "Image assets/Toyota Prado TZG/IMG-20250512-WA0041.jpg",
        "Image assets/Toyota Prado TZG/IMG-20250512-WA0039.jpg",
        "Image assets/Toyota Prado TZG/IMG-20250512-WA0042.jpg",
        "Image assets/Toyota Prado TZG/IMG-20250512-WA0044.jpg",
        "Image assets/Toyota Prado TZG/IMG-20250512-WA0046.jpg",
        "Image assets/Toyota Prado TZG/IMG-20250512-WA0048.jpg"
    ]
},
{
  "id": 2,
  "name": "Mercedes-Benz GLE Coupé",
  "category": "SUV",
  "price": 9600000,
  "year": 2018,
  "engine": "3.0L V6 Turbocharged Diesel",
  "transmission": "9-speed (9G-Tronic) Automatic",
  "fuelType": "Diesel",
  "seating": "5",
  "drive": "AWD",
  "features": [
    "Panoramic Sunroof",
    "Powered Leather Seats",
    "Heated Front Seats",
    "Daytime Running LED Lights",
    "Dual-Zone Climate Control",
    "Multifunction Tilt & Telescopic Steering Wheel",
    "Alloy Rims",
    "Side Mirror Indicators",
    "Push-Start Ignition",
    "Harman Kardon Sound System",
    "Mercedes Distronic Cruise Control"
  ],
  "fuelEconomy": "9.0 L/100 km",               // Combined WLTP :contentReference[oaicite:0]{index=0}
  "topSpeed": "226 km/h",                      // Max speed for GLE 350 d Coupé :contentReference[oaicite:1]{index=1}
  "acceleration": "7.0 seconds (0–100 km/h)",  // WLTP acceleration :contentReference[oaicite:2]{index=2}
  "images": [
    "Image assets/2018 Mercedes benz grand coupe/IMG-20250512-WA0014.jpg",
    "Image assets/2018 Mercedes benz grand coupe/IMG-20250512-WA0015.jpg",
    "Image assets/2018 Mercedes benz grand coupe/IMG-20250512-WA0012.jpg",
    "Image assets/2018 Mercedes benz grand coupe/IMG-20250512-WA0011.jpg",
    "Image assets/2018 Mercedes benz grand coupe/IMG-20250512-WA0023.jpg",
    "Image assets/2018 Mercedes benz grand coupe/IMG-20250512-WA0018.jpg"
  ]
},
{
  "id": 3,
  "name": "Toyota Land Cruiser Prado VX",
  "category": "SUV",
  "price": 7799999,
  "year": 2017,
  "engine": "2.8L Turbocharged Diesel",
  "transmission": "6-speed Automatic",
  "fuelType": "Diesel",
  "seating": "7",
  "drive": "4WD",
  "features": [
    "Fabric Upholstery",
    "Driver & Passenger Power Seats",
    "Push-Start Ignition (SMART START)",
    "Idling Control Button",
    "Illuminated Entry System",
    "Leather-Wrapped Steering Wheel",
    "Tilt & Telescopic Steering Column",
    "Pre-wiring for Audio (6 speakers + antenna)",
    "Power Windows w/ Jam Protection",
    "Fog Lamp Bezels",
    "Sunroof",
    "Intermittent Wipers",
    "Side & Rear Steps",
    "Front & Rear Towing Eyes",
    "L&H Parabola Headlamps",
    "Driver & Passenger Airbags",
    "Anti-Theft Alarm & Immobiliser",
    "Central Door Locking",
    "Child-Lock Rear Doors",
    "Isofix Anchor Points",
    "Vehicle Stability Control",
    "Wireless Smart-Entry Door Locks"
  ],
  "fuelEconomy": "9.2 L/100 km",               // WLTP combined :contentReference[oaicite:3]{index=3}
  "topSpeed": "170 km/h",                      // VX trim :contentReference[oaicite:4]{index=4}
  "acceleration": "10.5 seconds (0–100 km/h)", // Approximate 0–100 km/h :contentReference[oaicite:5]{index=5}
  "images": [
    "Image assets/2017 land cruiser prado vx/IMG-20250512-WA0029.jpg ",
    "Image assets/2017 land cruiser prado vx/IMG-20250512-WA0026.jpg", 
    "Image assets/2017 land cruiser prado vx/IMG-20250512-WA0027.jpg", 
    "Image assets/2017 land cruiser prado vx/IMG-20250512-WA0028.jpg ",
    "Image assets/2017 land cruiser prado vx/IMG-20250512-WA0030.jpg", 
    "Image assets/2017 land cruiser prado vx/IMG-20250512-WA0033.jpg"
  ]
},
{
  "id": 4,
  "name": "Subaru Forester e-Boxer",
  "category": "SUV",
  "price": 6500000,
  "year": 2023,
  "engine": "2.0L Petrol Hybrid",
  "transmission": "Automatic (Paddle Shifters)",
  "fuelType": "Hybrid",
  "seating": "5",
  "drive": "AWD",
  "features": [
    "Half Leather Seats",
    "Heated Seats",
    "Power Adjustable Front Seats",
    "Steering Mounted Paddle Shifts",
    "Halogen Headlights"
  ],
  "fuelEconomy": "8.1 L/100km",         // Combined WLTP 34.9 mpg (imperial) → 282.5/34.9 ≈ 8.1 L/100 km :contentReference[oaicite:0]{index=0}
  "topSpeed": "187 km/h",              // Max speed 116 mph → 116 × 1.609 ≈ 187 km/h :contentReference[oaicite:1]{index=1}
  "acceleration": "12.2 seconds (0–100 km/h)", // 0–62 mph in 12.2 s ≈ 0–100 km/h :contentReference[oaicite:2]{index=2}
  "images": [
    "Image assets/Subaru Forester e boxer/IMG-20250512-WA0003.jpg",
    "Image assets/Subaru Forester e boxer/IMG-20250512-WA0001.jpg",
    "Image assets/Subaru Forester e boxer/IMG-20250512-WA0002.jpg",
    "Image assets/Subaru Forester e boxer/IMG-20250512-WA0006.jpg",
    "Image assets/Subaru Forester e boxer/IMG-20250512-WA0007.jpg",
    "Image assets/Subaru Forester e boxer/IMG-20250512-WA0005.jpg"

  ]
},
{
        "id": 5,
        "name": "Range Rover Sport 3.0 SDV6 HSE",
        "category": "SUV",
        "price": 12999999,
        "year": 2017,
        "engine": "3.0L V6 Bi-Turbo Diesel",
        "transmission": "8-speed Automatic",
        "fuelType": "Diesel",
        "seating": "5",
        "drive": "AWD",
        "features": [
            "Dark Leather Seats",
            "Power Front Seats with Memory",
            "19-Speaker Sound System",
            "Reversing Camera",
            "Mobile Phone Connectivity",
            "Front & Rear Parking Distance Control",
            "Power Boot",
            "Rain Sensing Wipers",
            "Xenon Headlights with LED Signature",
            "Rear LED Lights",
            "Coming/Leaving Home Lights",
            "Keyless Entry and Drive",
            "Start/Stop Button",
            "Automatic Start/Stop System",
            "Multifunction Steering Wheel",
            "Leather Steering Wheel",
            "Power Adjustable Steering Column",
            "Dual Front, Head, and Side Airbags",
            "USB/AUX Socket System",
            "Inbuilt Hard Disk Drive",
            "Ambient Interior Lighting",
            "Dual-Zone Climate Control",
            "Daytime Running LED Lights",
            "Dusk Sensing Headlights",
            "Headlight Washers System"
        ],
        "fuelEconomy": "7.0 L/100km",
        "topSpeed": "209 km/h",
        "acceleration": "7.3 seconds (0–100 km/h)",
        "images": [
            "Image assets/Range Rover sport 3.0 HSE/Front-wide-Angle.jpg",
            "Image assets/Range Rover sport 3.0 HSE/Front.jpg",
            "Image assets/Range Rover sport 3.0 HSE/Front-wide-Angle-left.jpg",
            "Image assets/Range Rover sport 3.0 HSE/Back.jpg",
            "Image assets/Range Rover sport 3.0 HSE/Cock-pit.jpg",
            "Image assets/Range Rover sport 3.0 HSE/Interior.jpg"
        ]
    },
    {
        "id": 6,
        "name": "Nissan X-Trail Hybrid",
        "category": "SUV",
        "price": 2699999,
        "year": 2017,
        "engine": "2.0L Petrol Hybrid",
        "transmission": "Automatic (CVT)",
        "fuelType": "Hybrid",
        "seating": "5",
        "drive": "AWD",
        "features": [
            "Traction Control",
            "Downhill Assist Control (DAC)",
            "Powered Tailgate",
            "Leather Seats",
            "Keyless Entry",
            "Thumb Start Ignition",
            "Heated & Cooled Front Seats",
            "Alloy Rims",
            "Fog Lights",
            "Rear View Camera",
            "Proximity Sensors"
        ],
        "fuelEconomy": "6.7 L/100km",
        "topSpeed": "180 km/h",
        "acceleration": "8.8 seconds (0–100 km/h)",
        "images": [
            "Image assets/Nissan Xtrail Hybrid/front-wide-left.jpg",
            "Image assets/Nissan Xtrail Hybrid/front.jpg",
            "Image assets/Nissan Xtrail Hybrid/Back.jpg",
            "Image assets/Nissan Xtrail Hybrid/front-wide-right.jpg",
            "Image assets/Nissan Xtrail Hybrid/Cockpit.jpg",
            "Image assets/Nissan Xtrail Hybrid/cockpit2.jpg"
        ]
    },
    {
        "id": 7,
        "name": "Toyota Land Cruiser Prado TX",
        "category": "SUV",
        "price": 7599999,
        "year": 2017,
        "engine": "2.8L Turbocharged Diesel",
        "transmission": "6-speed Automatic",
        "fuelType": "Diesel",
        "seating": "7",
        "drive": "4WD",
        "features": [
            "Powered Seats",
            "7 Leather Seats",
            "Cruise Control",
            "Heated Front Seats",
            "Multifunctional Steering Wheel",
            "Rear Camera",
            "LED Daytime Running Lights",
            "3rd Row Seats",
            "Headlight Washers",
            "Multi-Information Display",
            "Lane Departure Alert",
            "Dual Climate Control"
        ],
        "fuelEconomy": "7.2 L/100km",
        "topSpeed": "175 km/h",
        "acceleration": "12.7 seconds (0–100 km/h)",
        "images": [
            "Image assets/Toyota Prado TX/Front-wide-left.jpg",
            "Image assets/Toyota Prado TX/front.jpg",
            "Image assets/Toyota Prado TX/Back.jpg",
            "Image assets/Toyota Prado TX/back-wide-right.jpg",
            "Image assets/Toyota Prado TX/Cockpit.jpg",
            "Image assets/Toyota Prado TX/Boot.jpg"
        ]
    },
    {
            "id": 8,
            "name": "Toyota Hilux Double Cab",
            "category": "Pickup",
            "price": 5800000,
            "year": 2019,
            "engine": "2.4L Turbocharged Diesel",
            "transmission": "6-speed Automatic",
            "fuelType": "Diesel",
            "seating": "5",
            "drive": "4WD",
            "features": [
                "Dark Fabric Seats",
                "Multifunctional Steering Wheel",
                "Power Steering",
                "Remote Central Locking System",
                "Fog Lamps",
                "New Tyres All Round",
                "AM/FM Radio with 10” Screen Display",
                "Reverse Camera"
            ],
            "fuelEconomy": "7.3 L/100km",
            "topSpeed": "170 km/h",
            "acceleration": "12.8 seconds (0–100 km/h)",
            "images": [
                "Image assets/Toyota Hilux Double Cabin/front-wide-right.jpg",
                "Image assets/Toyota Hilux Double Cabin/Front-wide-left.jpg",
                "Image assets/Toyota Hilux Double Cabin/Front.jpg",
                "Image assets/Toyota Hilux Double Cabin/Back-wide-left.jpg",
                "Image assets/Toyota Hilux Double Cabin/Cockpit.jpg",
                "Image assets/Toyota Hilux Double Cabin/Interior.jpg"
            ]
        },
        {
            "id": 9,
            "name": "Toyota Hilux Double Cab",
            "category": "Pickup",
            "price": 5800000,
            "year": 2020,
            "engine": "2.4L Turbocharged Diesel",
            "transmission": "6-speed Automatic",
            "fuelType": "Diesel",
            "seating": "5",
            "drive": "4WD",
            "features": [
                "LED Headlights",
                "Daytime Running Lights",
                "Bluetooth Connectivity",
                "USB/AUX Input",
                "Blind Spot Monitor",
                "Electronic Brake Force Distribution",
                "Power Mirrors",
                "Centralised Door Lock",
                "Side Steps",
                "Reverse Camera",
                "Adaptive Cruise Control",
                "Front & Rear Mudguards",
                "Rear Differential Lock",
                "Keyless Entry and Start",
                "Dual-Zone Climate Control",
                "18-inch Black Alloy Wheels",
                "Lane Departure Warning",
                "Traction Control",
                "Vehicle Stability Control",
                "Privacy Glass"
            ],
            "fuelEconomy": "9.2 L/100km",
            "topSpeed": "170 km/h",
            "acceleration": "12.8 seconds (0–100 km/h)",
            "images": [
                "Image assets/2020 Toyota Hilux Double CAB/Front-wide-right.jpg",
                "Image assets/2020 Toyota Hilux Double CAB/front.jpg",
                "Image assets/2020 Toyota Hilux Double CAB/back.jpg",
                "Image assets/2020 Toyota Hilux Double CAB/back-wide-right.jpg",
                "Image assets/2020 Toyota Hilux Double CAB/Cockpit.jpg",
                "Image assets/2020 Toyota Hilux Double CAB/Interior.jpg",
                "Image assets/2020 Toyota Hilux Double CAB/steering wheel.jpg"
            ]
        },
            {
        "id": 10,
        "name": "Mazda Demio",
        "category": "Hatchback",
        "price": 1100000,
        "year": 2016,
        "engine": "1.3L SKYACTIV-G Petrol",
        "transmission": "6-speed Automatic",
        "fuelType": "Petrol",
        "seating": "5",
        "drive": "FWD",
        "features": [
            "Steering Control Buttons",
            "Antilock Brake System (ABS)",
            "Xenon Headlights",
            "Fog Lights",
            "Rear Spoiler",
            "Dark Fabric Seats"
        ],
        "fuelEconomy": "5.5 L/100km",
        "topSpeed": "180 km/h",
        "acceleration": "10.7 seconds (0–100 km/h)",
        "images": [
            "Image assets/2016 Mazda Demio/front-wide-left.jpg",
            "Image assets/2016 Mazda Demio/Front.jpg",
            "Image assets/2016 Mazda Demio/Back.jpg",
            "Image assets/2016 Mazda Demio/back-wide-left.jpg",
            "Image assets/2016 Mazda Demio/Cockpit.jpg",
            "Image assets/2016 Mazda Demio/cockpit2.jpg"
        ]
    },
    {
                "id": 11,
                "name": "BMW X5 xDrive35i",
                "category": "SUV",
                "price": 1700000,
                "year": 2014,
                "engine": "3.0L Turbocharged Petrol",
                "transmission": "8-speed Automatic",
                "fuelType": "Petrol",
                "seating": "5",
                "drive": "AWD",
                "features": [
                    "Leather Seats",
                    "Alloy Wheels"
                ],
                "fuelEconomy": "8.5 L/100km",
                "topSpeed": "235 km/h",
                "acceleration": "6.5 seconds (0–100 km/h)",
                "images": [
                "Image assets/2014 BMW X5/Front-wide-left.jpg",
                "Image assets/2014 BMW X5/Front.jpg",
                "Image assets/2014 BMW X5/back.jpg",
                "Image assets/2014 BMW X5/Back-wide-left.jpg",
                "Image assets/2014 BMW X5/cockpit.jpg",
                "Image assets/2014 BMW X5/Interior.jpg"
                ]
            },
            {
                "id": 12,
                "name": "Toyota Corolla Fielder Hybrid",
                "category": "Wagon",
                "price": 1850000,
                "year": 2018,
                "engine": "1.5L Petrol Hybrid",
                "transmission": "CVT Automatic",
                "fuelType": "Hybrid",
                "seating": "5",
                "drive": "FWD",
                "features": [
                    "Power Lock",
                    "Central Locking",
                    "Power Steering",
                    "Power Windows",
                    "Bluetooth Car Kit",
                    "Airbags",
                    "Electric Mirrors",
                    "Multi-Function Steering Wheel",
                    "Traction Control",
                    "Push to Start Ignition"
                ],
                "fuelEconomy": "3.3 L/100km",
                "topSpeed": "180 km/h",
                "acceleration": "10.2 seconds (0–100 km/h)",
                "images": [
                    "Image assets/2018 fielder Hybrid/front-wide-right.jpg",
                    "Image assets/2018 fielder Hybrid/front.jpg",
                    "Image assets/2018 fielder Hybrid/back.jpg",
                    "Image assets/2018 fielder Hybrid/back-wide-left.jpg",
                    "Image assets/2018 fielder Hybrid/cockpit.jpg",
                    "Image assets/2018 fielder Hybrid/interior.jpg"
                ]
            },
    {
        "id": 13,
        "name": "Mercedes-Benz GL 350 CDI",
        "category": "SUV",
        "price": 3550000,
        "year": 2011,
        "engine": "3.0L V6 Turbocharged Diesel",
        "transmission": "7-speed Automatic",
        "fuelType": "Diesel",
        "seating": "7",
        "drive": "4WD",
        "features": [
            "Leather Seats",
            "Dual Sunroofs (Front and Rear)",
            "Reverse Camera",
            "Parking Sensors",
            "Headlight Washers",
            "Roof Rails",
            "Multifunctional Steering Wheel",
            "Electric Adjustable Seats",
            "Power Rear Door",
            "Daytime Running Lights"
        ],
        "fuelEconomy": "10.0 L/100km",
        "topSpeed": "225 km/h",
        "acceleration": "7.9 seconds (0–100 km/h)",
        "images": [
            "Image assets/2011 Mercedes/front wide right.jpg",
            "Image assets/2011 Mercedes/front.jpg",
            "Image assets/2011 Mercedes/back.jpg",
            "Image assets/2011 Mercedes/back wide right.jpg",
            "Image assets/2011 Mercedes/cockpit.jpg",
            "Image assets/2011 Mercedes/interior 1.jpg"
        ]
    },
    {
        "id": 14,
        "name": "Nissan Juke",
        "category": "Crossover",
        "price": 900000,
        "year": 2012,
        "engine": "1.5L Petrol",
        "transmission": "Automatic",
        "fuelType": "Petrol",
        "seating": "5",
        "drive": "FWD",
        "features": [
            "Keyless Entry",
            "Rear View Camera",
            "DVD/CD Player",
            "Pre-collision Assist",
            "Fabric Seats",
            "Thumb Start Ignition",
            "Fog Lights"
        ],
        "fuelEconomy": "6.3 L/100km",
        "topSpeed": "170 km/h",
        "acceleration": "11.5 seconds (0–100 km/h)",
        "images": [
            "Image assets/Nissan Juke/front wide left.jpg",
            "Image assets/Nissan Juke/front.jpg",
            "Image assets/Nissan Juke/back.jpg",
            "Image assets/Nissan Juke/back wide right.jpg",
            "Image assets/Nissan Juke/cockpit.jpg",
            "Image assets/Nissan Juke/interior.jpg"
        ]
    },
    {
        "id": 15,
        "name": "Porsche Cayenne GTS",
        "category": "SUV",
        "price": 7499999,
        "year": 2018,
        "engine": "3.6L Twin-Turbocharged V6 Petrol",
        "transmission": "8-speed Automatic",
        "fuelType": "Petrol",
        "seating": "5",
        "drive": "AWD",
        "features": [
            "Powered Front Seats",
            "Premium BOSE Surround Sound System",
            "Sunroof",
            "Paddle Shifters",
            "Cruise Control",
            "Hill Descent Assist",
            "Front and Rear Cameras",
            "Premium Beige Leather Seats",
            "7.2” Touchscreen Infotainment System",
            "Apple CarPlay and Android Auto Integration"
        ],
        "fuelEconomy": "9.2 L/100km",
        "topSpeed": "265 km/h",
        "acceleration": "5.2 seconds (0–100 km/h)",
        "images": [
            "Image assets/porsche cayenne2018/right side.jpg",
            "Image assets/porsche cayenne2018/back.jpg",
            "Image assets/porsche cayenne2018/back wide left.jpg",
            "Image assets/porsche cayenne2018/sunroof.jpg",
            "Image assets/porsche cayenne2018/steering.jpg",
            "Image assets/porsche cayenne2018/interior.jpg",
            "Image assets/porsche cayenne2018/back.jpg"
        ]
    },
    {
        "id": 16,
        "name": "Toyota Voxy",
        "category": "Minivan",
        "price": 2599999,
        "year": 2017,
        "engine": "2.0L Petrol",
        "transmission": "CVT",
        "fuelType": "Petrol",
        "seating": "7",
        "drive": "FWD",
        "features": [
            "Fabric Upholstery",
            "Side Mirror Winkers",
            "Alloy Rims",
            "Multifunctional Steering Wheel Controls",
            "Traction Control",
            "Reverse Camera",
            "FM/DVD Touchscreen Player",
            "Dual Zone Climate Control"
        ],
        "fuelEconomy": "6.3 L/100km",
        "topSpeed": "180 km/h",
        "acceleration": "11.0 seconds (0–100 km/h)",
        "images": [
            "Image assets/2017 toyota voxy/front wide left.jpg",
            "Image assets/2017 toyota voxy/front.jpg",
            "Image assets/2017 toyota voxy/back.jpg",
            "Image assets/2017 toyota voxy/backwide right.jpg",
            "Image assets/2017 toyota voxy/cockpit.jpg",
            "Image assets/2017 toyota voxy/cockpit2.jpg",
            "Image assets/2017 toyota voxy/interior.jpg"
        ]
    },
    {
        "id": 17,
        "name": "Toyota Hilux Double Cab",
        "category": "Pickup",
        "price": 5800000,
        "year": 2018,
        "engine": "2.8L Turbocharged Diesel",
        "transmission": "6-speed Automatic",
        "fuelType": "Diesel",
        "seating": "5",
        "drive": "4WD",
        "features": [
            "Dark Fabric Seats",
            "Multifunctional Steering Wheel",
            "Power Steering",
            "Power Windows",
            "Remote Central Locking System",
            "Fog Lamps",
            "New Tyres All Round",
            "AM/FM Radio with 10” Screen Display",
            "Reverse Camera"
        ],
        "fuelEconomy": "8.5 L/100km",
        "topSpeed": "175 km/h",
        "acceleration": "10.7 seconds (0–100 km/h)",
        "images": [
            "Image assets/2018 Hilux white/front wide right.jpg",
            "Image assets/2018 Hilux white/front.jpg",
            "Image assets/2018 Hilux white/back.jpg",
            "Image assets/2018 Hilux white/back wide right.jpg",
            "Image assets/2018 Hilux white/cockpit.jpg",
            "Image assets/2018 Hilux white/steering.jpg",
            "Image assets/2018 Hilux white/steering.jpg"
        ]
    }


    // Add more vehicles with multiple images as needed...
];

// DOM Elements
const makeFilter = document.getElementById('make-filter');
const modelFilter = document.getElementById('model-filter');
const minPriceFilter = document.getElementById('min-price');
const maxPriceFilter = document.getElementById('max-price');
const resetFiltersBtn = document.getElementById('reset-filters');
const inventoryGrid = document.getElementById('inventory-grid');
const modalOverlay = document.getElementById('modal-overlay');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');
const modalClose = document.getElementById('modal-close');
const searchInput = document.getElementById('search-input');

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Populate make filter
    populateMakeFilter();

    // Display all inventory items initially
    displayInventoryItems(inventoryData);

    // Set up event listeners
    setupEventListeners();
});

/**
 * Populates the make filter dropdown with unique makes from inventory data
 */
function populateMakeFilter() {
    // Get unique makes from inventory data
    const makes = [...new Set(inventoryData.map(item => {
        // Extract make from name (first word)
        return item.name.split(' ')[0];
    }))].sort();

    // Add options to make filter
    makes.forEach(make => {
        const option = document.createElement('option');
        option.value = make;
        option.textContent = make;
        makeFilter.appendChild(option);
    });
}

/**
 * Populates the model filter dropdown based on selected make
 * @param {string} selectedMake - The make to filter models by
 */
function populateModelFilter(selectedMake) {
    // Clear existing options except the first "All Models" option
    modelFilter.innerHTML = '<option value="">All Models</option>';

    if (selectedMake) {
        // Enable model filter
        modelFilter.disabled = false;

        // Get unique models for the selected make
        const models = [...new Set(
            inventoryData
                .filter(item => item.name.startsWith(selectedMake))
                .map(item => {
                    // Extract model from name (everything after make)
                    return item.name.substring(selectedMake.length).trim();
                })
        )].sort();

        // Add options to model filter
        models.forEach(model => {
            const option = document.createElement('option');
            option.value = model;
            option.textContent = model;
            modelFilter.appendChild(option);
        });
    } else {
        // Disable model filter if no make is selected
        modelFilter.disabled = true;
    }
}

// Scroll to Top Button
const scrollTop = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTop.classList.add('active');
    } else {
        scrollTop.classList.remove('active');
    }
});

scrollTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

/**
 * Filters inventory items based on current filter selections
 * @returns {Array} - Filtered array of inventory items
 */
function filterInventory() {
            const selectedMake = makeFilter.value;
            const selectedModel = modelFilter.value;
            const minPrice = parseFloat(minPriceFilter.value) || 0;
            const maxPrice = parseFloat(maxPriceFilter.value) || Infinity;
            const searchTerm = searchInput.value.trim().toLowerCase();

            return inventoryData.filter(item => {
                const [make, ...modelParts] = item.name.split(' ');
                const model = modelParts.join(' ');
                const itemName = item.name.toLowerCase();

                // Search filter
                if (searchTerm && !itemName.includes(searchTerm)) return false;
                
                // Existing filters
                if (selectedMake && make !== selectedMake) return false;
                if (selectedModel && model !== selectedModel) return false;
                if (item.price < minPrice || item.price > maxPrice) return false;

                return true;
            });
        }


/**
 * Displays inventory items in the grid
 * @param {Array} items - Array of inventory items to display
 */
function displayInventoryItems(items) {
    // Clear current inventory grid
    inventoryGrid.innerHTML = '';

    if (items.length === 0) {
        // Show no results message if no items match filters
        const noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.innerHTML = `
                    <div class="no-results-icon">
                        <i class="fas fa-search"></i>
                    </div>
                    <h3 class="no-results-title">No Vehicles Found</h3>
                    <p class="no-results-text">Try adjusting your filters to find what you're looking for.</p>
                    <button id="reset-filters" class="reset-btn">Reset Filters</button>
                `;

        // Add click event to reset button in no results message
        noResults.querySelector('#reset-filters').addEventListener('click', resetFilters);

        inventoryGrid.appendChild(noResults);
        return;
    }

    // Create and append inventory cards for each item
    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'inventory-card';
        card.innerHTML = `
                    <div class="card-image">
                        <img src="${item.images[0]}" alt="${item.name}">
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">${item.name}</h3>
                        <p class="card-subtitle">${item.year} • ${item.category}</p>
                        <p class="card-price">KSh ${item.price.toLocaleString()}</p>
                        <div class="card-specs">
                            <span class="card-spec">
                                <i class="fas fa-gas-pump"></i>
                                ${item.fuelType}
                            </span>
                            <span class="card-spec">
                                <i class="fas fa-users"></i>
                                ${item.seating} Seats
                            </span>
                        </div>
                        <button class="card-btn" data-id="${item.id}">View Details</button>
                    </div>
                `;

        // Add click event to view details button
        const viewBtn = card.querySelector('.card-btn');
        viewBtn.addEventListener('click', () => showVehicleDetails(item.id));

        inventoryGrid.appendChild(card);
    });
}

/**
 * Shows detailed view of a vehicle in a modal with image gallery
 * @param {number} vehicleId - ID of the vehicle to show
 */
function showVehicleDetails(vehicleId) {
    // Find the vehicle in inventory data
    const vehicle = inventoryData.find(item => item.id === vehicleId);

    if (!vehicle) return;

    // Create modal content with image gallery
    modalContent.innerHTML = `
                <div class="gallery-container">
                    <img src="${vehicle.images[0]}" alt="${vehicle.name}" class="gallery-main-image" id="gallery-main-image">
                    <div class="gallery-thumbnails">
                        ${vehicle.images.map((img, index) => `
                            <img src="${img}" alt="Thumbnail ${index + 1}" class="gallery-thumbnail ${index === 0 ? 'active' : ''}" 
                                 data-index="${index}" onclick="changeGalleryImage(${vehicleId}, ${index})">
                        `).join('')}
                    </div>
                    <div class="gallery-nav">
                        <button class="gallery-nav-btn" onclick="navigateGallery(${vehicleId}, -1)">
                            <i class="fas fa-chevron-left"></i>
                        </button>
                        <button class="gallery-nav-btn" onclick="navigateGallery(${vehicleId}, 1)">
                            <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
                <div class="modal-details">
                    <h2>${vehicle.name}</h2>
                    <p class="modal-price">KSh ${vehicle.price.toLocaleString()}</p>
                    
                    <div class="modal-specs">
                        <div class="modal-spec">
                            <i class="fas fa-calendar-alt"></i>
                            <span>Year: ${vehicle.year}</span>
                        </div>
                        <div class="modal-spec">
                            <i class="fas fa-tag"></i>
                            <span>Category: ${vehicle.category}</span>
                        </div>
                        <div class="modal-spec">
                            <i class="fas fa-cogs"></i>
                            <span>Engine: ${vehicle.engine}</span>
                        </div>
                        <div class="modal-spec">
                            <i class="fas fa-tachometer-alt"></i>
                            <span>Transmission: ${vehicle.transmission}</span>
                        </div>
                        <div class="modal-spec">
                            <i class="fas fa-gas-pump"></i>
                            <span>Fuel Type: ${vehicle.fuelType}</span>
                        </div>
                        <div class="modal-spec">
                            <i class="fas fa-users"></i>
                            <span>Seating: ${vehicle.seating}</span>
                        </div>
                        <div class="modal-spec">
                            <i class="fas fa-car"></i>
                            <span>Drive: ${vehicle.drive}</span>
                        </div>
                        <div class="modal-spec">
                            <i class="fas fa-fire"></i>
                            <span>Fuel Economy: ${vehicle.fuelEconomy}</span>
                        </div>
                        <div class="modal-spec">
                            <i class="fas fa-tachometer-alt"></i>
                            <span>Top Speed: ${vehicle.topSpeed}</span>
                        </div>
                        <div class="modal-spec">
                            <i class="fas fa-stopwatch"></i>
                            <span>Acceleration: ${vehicle.acceleration}</span>
                        </div>
                    </div>
                    
                    <div class="modal-features">
                        <h3>Key Features</h3>
                        <div class="features-list">
                            ${vehicle.features.map(feature =>
        `<span class="feature-tag">${feature}</span>`
    ).join('')}
                        </div>
                    </div>
                </div>
            `;

    // Show modal
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

/**
 * Changes the main gallery image when a thumbnail is clicked
 * @param {number} vehicleId - ID of the vehicle
 * @param {number} index - Index of the image to show
 */
function changeGalleryImage(vehicleId, index) {
    const vehicle = inventoryData.find(item => item.id === vehicleId);
    if (!vehicle || !vehicle.images[index]) return;

    // Update main image
    const mainImage = document.getElementById('gallery-main-image');
    mainImage.src = vehicle.images[index];

    // Update active thumbnail
    const thumbnails = document.querySelectorAll('.gallery-thumbnail');
    thumbnails.forEach(thumb => {
        thumb.classList.remove('active');
        if (parseInt(thumb.dataset.index) === index) {
            thumb.classList.add('active');
        }
    });
}

/**
 * Navigates through gallery images using navigation buttons
 * @param {number} vehicleId - ID of the vehicle
 * @param {number} direction - 1 for next, -1 for previous
 */
function navigateGallery(vehicleId, direction) {
    const vehicle = inventoryData.find(item => item.id === vehicleId);
    if (!vehicle) return;

    // Find current active thumbnail
    const activeThumb = document.querySelector('.gallery-thumbnail.active');
    if (!activeThumb) return;

    let currentIndex = parseInt(activeThumb.dataset.index);
    let newIndex = currentIndex + direction;

    // Handle wrap-around for continuous navigation
    if (newIndex < 0) {
        newIndex = vehicle.images.length - 1;
    } else if (newIndex >= vehicle.images.length) {
        newIndex = 0;
    }

    // Change to the new image
    changeGalleryImage(vehicleId, newIndex);
}

/**
 * Hides the vehicle details modal
 */
function hideVehicleDetails() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

/**
 * Resets all filters to their default state
 */
function resetFilters() {
    searchInput.value = '';
    makeFilter.value = '';
    modelFilter.value = '';
    modelFilter.disabled = true;
    minPriceFilter.value = '';
    maxPriceFilter.value = '';

    // Display all inventory items
    displayInventoryItems(inventoryData);
}

/**
 * Sets up event listeners for filters and buttons
 */
function setupEventListeners() {
    searchInput.addEventListener('input', () => { // Added
                const filteredItems = filterInventory();
                displayInventoryItems(filteredItems);
    });
    // Make filter change event
    makeFilter.addEventListener('change', () => {
        populateModelFilter(makeFilter.value);
        const filteredItems = filterInventory();
        displayInventoryItems(filteredItems);
    });

    // Model filter change event
    modelFilter.addEventListener('change', () => {
        const filteredItems = filterInventory();
        displayInventoryItems(filteredItems);
    });

    // Price filters input events
    minPriceFilter.addEventListener('input', () => {
        const filteredItems = filterInventory();
        displayInventoryItems(filteredItems);
    });

    maxPriceFilter.addEventListener('input', () => {
        const filteredItems = filterInventory();
        displayInventoryItems(filteredItems);
    });

    // Reset filters button click event
    resetFiltersBtn.addEventListener('click', resetFilters);

    // Modal close button click event
    modalClose.addEventListener('click', hideVehicleDetails);

    // Close modal when clicking outside of it
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            hideVehicleDetails();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            hideVehicleDetails();
        }
    });
}

// Make gallery functions available globally
window.changeGalleryImage = changeGalleryImage;
window.navigateGallery = navigateGallery;

