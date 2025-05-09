
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



// Enhanced Inventory Data with detailed information
const inventoryData = [
    {
        "id": 1,
        "name": "Toyota Land Cruiser",
        "category": "SUV",
        "price": 15200000,
        "year": 2020,
        "engine": "4.5L V8 Diesel",
        "transmission": "Automatic",
        "fuelType": "Diesel",
        "seating": "7",
        "drive": "4WD",
        "features": ["Leather Seats", "Sunroof", "Navigation System", "Premium Audio", "Third Row Seating"],
        "fuelEconomy": "10.5 L/100km",
        "topSpeed": "210 km/h",
        "acceleration": "7.8 seconds (0-100 km/h)",
        "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
    },
    {
        "id": 2,
        "name": "Range Rover Sport",
        "category": "SUV",
        "price": 12500000,
        "year": 2022,
        "engine": "3.0L TwinPower Petrol",
        "transmission": "Automatic",
        "fuelType": "Petrol",
        "seating": "5",
        "drive": "AWD",
        "features": ["Leather Seats", "Navigation System", "Bluetooth", "Backup Camera"],
        "fuelEconomy": "9.8 L/100km",
        "topSpeed": "220 km/h",
        "acceleration": "6.5 seconds (0-100 km/h)",
        "image": "https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        "id": 3,
        "name": "Mercedes-Benz GLE",
        "category": "SUV",
        "price": 9800000,
        "year": 2021,
        "engine": "3.0L TwinPower Petrol",
        "transmission": "Automatic",
        "fuelType": "Petrol",
        "seating": "5",
        "drive": "AWD",
        "features": ["Leather Seats", "Navigation System", "Bluetooth", "Backup Camera"],
        "fuelEconomy": "9.8 L/100km",
        "topSpeed": "220 km/h",
        "acceleration": "6.5 seconds (0-100 km/h)",
        "image": "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80"
    },
    {
        "id": 4,
        "name": "Porsche 911",
        "category": "Sports Car",
        "price": 18700000,
        "year": 2023,
        "engine": "3.0L TwinPower Petrol",
        "transmission": "Automatic",
        "fuelType": "Petrol",
        "seating": "4",
        "drive": "RWD",
        "features": ["Leather Seats", "Navigation System", "Bluetooth", "Backup Camera"],
        "fuelEconomy": "9.8 L/100km",
        "topSpeed": "220 km/h",
        "acceleration": "6.5 seconds (0-100 km/h)",
        "image": "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        "id": 5,
        "name": "BMW X5",
        "category": "SUV",
        "price": 10900000,
        "year": 2021,
        "engine": "3.0L TwinPower Petrol",
        "transmission": "Automatic",
        "fuelType": "Petrol",
        "seating": "5",
        "drive": "AWD",
        "features": ["Leather Seats", "Navigation System", "Bluetooth", "Backup Camera"],
        "fuelEconomy": "9.8 L/100km",
        "topSpeed": "220 km/h",
        "acceleration": "6.5 seconds (0-100 km/h)",
        "image": "https://images.unsplash.com/photo-1580273916550-e4c0b03e7ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        "id": 6,
        "name": "Toyota Prado",
        "category": "SUV",
        "price": 8700000,
        "year": 2019,
        "engine": "3.0L TwinPower Petrol",
        "transmission": "Automatic",
        "fuelType": "Petrol",
        "seating": "5",
        "drive": "AWD",
        "features": ["Leather Seats", "Navigation System", "Bluetooth", "Backup Camera"],
        "fuelEconomy": "9.8 L/100km",
        "topSpeed": "220 km/h",
        "acceleration": "6.5 seconds (0-100 km/h)",
        "image": "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        "id": 7,
        "name": "Land Rover Defender",
        "category": "SUV",
        "price": 13800000,
        "year": 2022,
        "engine": "3.0L TwinPower Petrol",
        "transmission": "Automatic",
        "fuelType": "Petrol",
        "seating": "5",
        "drive": "AWD",
        "features": ["Leather Seats", "Navigation System", "Bluetooth", "Backup Camera"],
        "fuelEconomy": "9.8 L/100km",
        "topSpeed": "220 km/h",
        "acceleration": "6.5 seconds (0-100 km/h)",
        "image": "https://images.unsplash.com/photo-1624704763134-5619a7a76c5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        "id": 8,
        "name": "Mercedes-Benz C-Class",
        "category": "Sedan",
        "price": 7500000,
        "year": 2020,
        "engine": "3.0L TwinPower Petrol",
        "transmission": "Automatic",
        "fuelType": "Petrol",
        "seating": "5",
        "drive": "RWD",
        "features": ["Leather Seats", "Navigation System", "Bluetooth", "Backup Camera"],
        "fuelEconomy": "9.8 L/100km",
        "topSpeed": "220 km/h",
        "acceleration": "6.5 seconds (0-100 km/h)",
        "image": "https://images.unsplash.com/photo-1616788494707-ec28f08fd05b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        "id": 9,
        "name": "BMW 3 Series",
        "category": "Sedan",
        "price": 6800000,
        "year": 2019,
        "engine": "3.0L TwinPower Petrol",
        "transmission": "Automatic",
        "fuelType": "Petrol",
        "seating": "5",
        "drive": "RWD",
        "features": ["Leather Seats", "Navigation System", "Bluetooth", "Backup Camera"],
        "fuelEconomy": "9.8 L/100km",
        "topSpeed": "220 km/h",
        "acceleration": "6.5 seconds (0-100 km/h)",
        "image": "https://images.unsplash.com/photo-1541899481282-d53b3e38fa9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        "id": 10,
        "name": "Toyota Hilux",
        "category": "Pickup",
        "price": 5200000,
        "year": 2018,
        "engine": "3.0L TwinPower Petrol",
        "transmission": "Automatic",
        "fuelType": "Petrol",
        "seating": "5",
        "drive": "4WD",
        "features": ["Leather Seats", "Navigation System", "Bluetooth", "Backup Camera"],
        "fuelEconomy": "9.8 L/100km",
        "topSpeed": "220 km/h",
        "acceleration": "6.5 seconds (0-100 km/h)",
        "image": "https://images.unsplash.com/photo-1631725995808-41b77f8a1442?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        "id": 11,
        "name": "Audi Q7",
        "category": "SUV",
        "price": 9500000,
        "year": 2021,
        "engine": "3.0L TwinPower Petrol",
        "transmission": "Automatic",
        "fuelType": "Petrol",
        "seating": "7",
        "drive": "AWD",
        "features": ["Leather Seats", "Navigation System", "Bluetooth", "Backup Camera"],
        "fuelEconomy": "9.8 L/100km",
        "topSpeed": "220 km/h",
        "acceleration": "6.5 seconds (0-100 km/h)",
        "image": "https://images.unsplash.com/photo-1592841200219-5ab338b309b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        "id": 12,
        "name": "Lexus LX",
        "category": "SUV",
        "price": 14200000,
        "year": 2022,
        "engine": "3.0L TwinPower Petrol",
        "transmission": "Automatic",
        "fuelType": "Petrol",
        "seating": "7",
        "drive": "AWD",
        "features": ["Leather Seats", "Navigation System", "Bluetooth", "Backup Camera"],
        "fuelEconomy": "9.8 L/100km",
        "topSpeed": "220 km/h",
        "acceleration": "6.5 seconds (0-100 km/h)",
        "image": "https://images.unsplash.com/photo-1631725995808-41b77f8a1442?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        "id": 13,
        "name": "Volvo XC90",
        "category": "SUV",
        "price": 8900000,
        "year": 2020,
        "engine": "3.0L TwinPower Petrol",
        "transmission": "Automatic",
        "fuelType": "Petrol",
        "seating": "7",
        "drive": "AWD",
        "features": ["Leather Seats", "Navigation System", "Bluetooth", "Backup Camera"],
        "fuelEconomy": "9.8 L/100km",
        "topSpeed": "220 km/h",
        "acceleration": "6.5 seconds (0-100 km/h)",
        "image": "https://images.unsplash.com/photo-1633102286587-538c8272b6f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
        "id": 14,
        "name": "Jeep Wrangler",
        "category": "SUV",
        "price": 8500000,
        "year": 2021,
        "engine": "3.0L TwinPower Petrol",
        "transmission": "Automatic",
        "fuelType": "Petrol",
        "seating": "5",
        "drive": "4WD",
        "features": ["Leather Seats", "Navigation System", "Bluetooth", "Backup Camera"],
        "fuelEconomy": "9.8 L/100km",
        "topSpeed": "220 km/h",
        "acceleration": "6.5 seconds (0-100 km/h)",
        "image": "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        "id": 15,
        "name": "Ford Ranger",
        "category": "Pickup",
        "price": 6200000,
        "year": 2019,
        "engine": "3.0L TwinPower Petrol",
        "transmission": "Automatic",
        "fuelType": "Petrol",
        "seating": "5",
        "drive": "4WD",
        "features": ["Leather Seats", "Navigation System", "Bluetooth", "Backup Camera"],
        "fuelEconomy": "9.8 L/100km",
        "topSpeed": "220 km/h",
        "acceleration": "6.5 seconds (0-100 km/h)",
        "image": "https://images.unsplash.com/photo-1631725995808-41b77f8a1442?ixlib=rb-4.0.3&ixid=..."
    },
    {
        "id": 16,
        "name": "Mitsubishi Pajero",
        "category": "SUV",
        "price": 7800000,
        "year": 2018,
        "engine": "3.0L TwinPower Petrol",
        "transmission": "Automatic",
        "fuelType": "Petrol",
        "seating": "7",
        "drive": "AWD",
        "features": ["Leather Seats", "Navigation System", "Bluetooth", "Backup Camera"],
        "fuelEconomy": "9.8 L/100km",
        "topSpeed": "220 km/h",
        "acceleration": "6.5 seconds (0-100 km/h)",
        "image": "https://images.unsplash.com/photo-1631725995808-41b77f8a1442?ixlib=..."
    },
    {
        "id": 17,
        "name": "Nissan Patrol",
        "category": "SUV",
        "price": 11500000,
        "year": 2021,
        "engine": "3.0L TwinPower Petrol",
        "transmission": "Automatic",
        "fuelType": "Petrol",
        "seating": "7",
        "drive": "4WD",
        "features": ["Leather Seats", "Navigation System", "Bluetooth", "Backup Camera"],
        "fuelEconomy": "9.8 L/100km",
        "topSpeed": "220 km/h",
        "acceleration": "6.5 seconds (0-100 km/h)",
        "image": "https://images.unsplash.com/photo-1631725995808-41b77f8a1442?ixlib=..."
    },
    {
        "id": 18,
        "name": "Subaru Forester",
        "category": "SUV",
        "price": 5800000,
        "year": 2020,
        "engine": "3.0L TwinPower Petrol",
        "transmission": "Automatic",
        "fuelType": "Petrol",
        "seating": "5",
        "drive": "AWD",
        "features": ["Leather Seats", "Navigation System", "Bluetooth", "Backup Camera"],
        "fuelEconomy": "9.8 L/100km",
        "topSpeed": "220 km/h",
        "acceleration": "6.5 seconds (0-100 km/h)",
        "image": "https://images.unsplash.com/photo-1631725995808-41b77f8a1442?ixlib=..."
    },
    {
        "id": 19,
        "name": "Honda CR-V",
        "category": "SUV",
        "price": 6500000,
        "year": 2019,
        "engine": "3.0L TwinPower Petrol",
        "transmission": "Automatic",
        "fuelType": "Petrol",
        "seating": "5",
        "drive": "AWD",
        "features": ["Leather Seats", "Navigation System", "Bluetooth", "Backup Camera"],
        "fuelEconomy": "9.8 L/100km",
        "topSpeed": "220 km/h",
        "acceleration": "6.5 seconds (0-100 km/h)",
        "image": "https://images.unsplash.com/photo-1631725995808-41b77f8a1442?ixlib=..."
    },
    {
        "id": 20,
        "name": "Volkswagen Tiguan",
        "category": "SUV",
        "price": 7200000,
        "year": 2020,
        "engine": "3.0L TwinPower Petrol",
        "transmission": "Automatic",
        "fuelType": "Petrol",
        "seating": "5",
        "drive": "AWD",
        "features": ["Leather Seats", "Navigation System", "Bluetooth", "Backup Camera"],
        "fuelEconomy": "9.8 L/100km",
        "topSpeed": "220 km/h",
        "acceleration": "6.5 seconds (0-100 km/h)",
        "image": "https://images.unsplash.com/photo-1631725995808-41b77f8a1442?ixlib=..."
    },
    {
        "id": 21,
        "name": "Toyota RAV4",
        "category": "SUV",
        "price": 6800000,
        "year": 2021,
        "engine": "3.0L TwinPower Petrol",
        "transmission": "Automatic",
        "fuelType": "Petrol",
        "seating": "5",
        "drive": "AWD",
        "features": ["Leather Seats", "Navigation System", "Bluetooth", "Backup Camera"],
        "fuelEconomy": "9.8 L/100km",
        "topSpeed": "220 km/h",
        "acceleration": "6.5 seconds (0-100 km/h)",
        "image": "https://images.unsplash.com/photo-1631725995808-41b77f8a1442?ixlib=..."
    },
    {
        "id": 22,
        "name": "Mazda CX-5",
        "category": "SUV",
        "price": 6200000,
        "year": 2020,
        "engine": "3.0L TwinPower Petrol",
        "transmission": "Automatic",
        "fuelType": "Petrol",
        "seating": "5",
        "drive": "AWD",
        "features": ["Leather Seats", "Navigation System", "Bluetooth", "Backup Camera"],
        "fuelEconomy": "9.8 L/100km",
        "topSpeed": "220 km/h",
        "acceleration": "6.5 seconds (0-100 km/h)",
        "image": "https://images.unsplash.com/photo-1631725995808-41b77f8a1442?ixlib=..."
    },
    {
        "id": 23,
        "name": "Kia Sorento",
        "category": "SUV",
        "price": 5900000,
        "year": 2019,
        "engine": "3.0L TwinPower Petrol",
        "transmission": "Automatic",
        "fuelType": "Petrol",
        "seating": "7",
        "drive": "AWD",
        "features": ["Leather Seats", "Navigation System", "Bluetooth", "Backup Camera"],
        "fuelEconomy": "9.8 L/100km",
        "topSpeed": "220 km/h",
        "acceleration": "6.5 seconds (0-100 km/h)",
        "image": "https://images.unsplash.com/photo-1631725995808-41b77f8a1442?ixlib=..."
    },
    {
        "id": 24,
        "name": "Hyundai Tucson",
        "category": "SUV",
        "price": 5500000,
        "year": 2018,
        "engine": "3.0L TwinPower Petrol",
        "transmission": "Automatic",
        "fuelType": "Petrol",
        "seating": "5",
        "drive": "AWD",
        "features": ["Leather Seats", "Navigation System", "Bluetooth", "Backup Camera"],
        "fuelEconomy": "9.8 L/100km",
        "topSpeed": "220 km/h",
        "acceleration": "6.5 seconds (0-100 km/h)",
        "image": "https://images.unsplash.com/photo-1631725995808-41b77f8a1442?ixlib=..."
    },
    {
        "id": 25,
        "name": "Chevrolet Trailblazer",
        "category": "SUV",
        "price": 7200000,
        "year": 2021,
        "engine": "3.0L TwinPower Petrol",
        "transmission": "Automatic",
        "fuelType": "Petrol",
        "seating": "5",
        "drive": "AWD",
        "features": ["Leather Seats", "Navigation System", "Bluetooth", "Backup Camera"],
        "fuelEconomy": "9.8 L/100km",
        "topSpeed": "220 km/h",
        "acceleration": "6.5 seconds (0-100 km/h)",
        "image": "https://images.unsplash.com/photo-1631725995808-41b77f8a1442?ixlib=..."
    },
    {
        "id": 26,
        "name": "Isuzu D-Max",
        "category": "Pickup",
        "price": 5800000,
        "year": 2020,
        "engine": "3.0L TwinPower Petrol",
        "transmission": "Automatic",
        "fuelType": "Petrol",
        "seating": "5",
        "drive": "4WD",
        "features": ["Leather Seats", "Navigation System", "Bluetooth", "Backup Kamera"],
        "fuelEconomy": "9.8 L/100km",
        "topSpeed": "220 km/h",
        "acceleration": "6.5 seconds (0-100 km/h)",
        "image": "https://images.unsplash.com/photo-1631725995808-41b77f8a1442?ixlib=..."
    },
    {
        "id": 27,
        "name": "Suzuki Vitara",
        "category": "SUV",
        "price": 4800000,
        "year": 2019,
        "engine": "3.0L TwinPower Petrol",
        "transmission": "Automatic",
        "fuelType": "Petrol",
        "seating": "5",
        "drive": "AWD",
        "features": ["Leather Seats", "Navigation System", "Bluetooth", "Backup Camera"],
        "fuelEconomy": "9.8 L/100km",
        "topSpeed": "220 km/h",
        "acceleration": "6.5 seconds (0-100 km/h)",
        "image": "https://images.unsplash.com/photo-1631725995808-41b77f8a1442?ixlib=..."
    },
    {
        "id": 28,
        "name": "Peugeot 3008",
        "category": "SUV",
        "price": 5200000,
        "year": 2020,
        "engine": "3.0L TwinPower Petrol",
        "transmission": "Automatic",
        "fuelType": "Petrol",
        "seating": "5",
        "drive": "AWD",
        "features": ["Leather Seats", "Navigation System", "Bluetooth", "Backup Camera"],
        "fuelEconomy": "9.8 L/100km",
        "topSpeed": "220 km/h",
        "acceleration": "6.5 seconds (0-100 km/h)",
        "image": "https://images.unsplash.com/photo-1631725995808-41b77f8a1442?ixlib=..."
    },
    {
        "id": 29,
        "name": "Renault Duster",
        "category": "SUV",
        "price": 4500000,
        "year": 2018,
        "engine": "3.0L TwinPower Petrol",
        "transmission": "Automatic",
        "fuelType": "Petrol",
        "seating": "5",
        "drive": "AWD",
        "features": ["Leather Seats", "Navigation System", "Bluetooth", "Backup Camera"],
        "fuelEconomy": "9.8 L/100km",
        "topSpeed": "220 km/h",
        "acceleration": "6.5 seconds (0-100 km/h)",
        "image": "https://images.unsplash.com/photo-1631725995808-41b77f8a1442?ixlib=..."
    },
    {
        "id": 30,
        "name": "Toyota Fortuner",
        "category": "SUV",
        "price": 8200000,
        "year": 2021,
        "engine": "3.0L TwinPower Petrol",
        "transmission": "Automatic",
        "fuelType": "Petrol",
        "seating": "7",
        "drive": "AWD",
        "features": ["Leather Seats", "Navigation System", "Bluetooth", "Backup Camera"], "fuelEconomy": "9.8 L/100km",
        "topSpeed": "220 km/h",
        "acceleration": "6.5 seconds (0-100 km/h)",
        "image": "https://images.unsplash.com/photo-1631725995808-41b77f8a1442?ixlib=..."
    }

    // The remaining vehicles would continue here...
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

    return inventoryData.filter(item => {
        // Extract make and model from name
        const [make, ...modelParts] = item.name.split(' ');
        const model = modelParts.join(' ');

        // Filter by make if selected
        if (selectedMake && make !== selectedMake) return false;

        // Filter by model if selected
        if (selectedModel && model !== selectedModel) return false;

        // Filter by price range
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
                        <img src="${item.image}" alt="${item.name}">
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
 * Shows detailed view of a vehicle in a modal
 * @param {number} vehicleId - ID of the vehicle to show
 */
function showVehicleDetails(vehicleId) {
    // Find the vehicle in inventory data
    const vehicle = inventoryData.find(item => item.id === vehicleId);

    if (!vehicle) return;

    // Create modal content
    modalContent.innerHTML = `
                <div class="modal-image">
                    <img src="${vehicle.image}" alt="${vehicle.name}">
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
