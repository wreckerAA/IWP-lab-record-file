// Complete data for all 118 chemical elements
// The gridRow and gridColumn properties determine their position in the CSS Grid
const elementsData = [
    { name: 'Hydrogen', symbol: 'H', atomicNumber: 1, atomicMass: '1.008', category: 'diatomic-nonmetal', gridRow: 1, gridColumn: 1 },
    { name: 'Helium', symbol: 'He', atomicNumber: 2, atomicMass: '4.0026', category: 'noble-gas', gridRow: 1, gridColumn: 18 },
    { name: 'Lithium', symbol: 'Li', atomicNumber: 3, atomicMass: '6.94', category: 'alkali-metal', gridRow: 2, gridColumn: 1 },
    { name: 'Beryllium', symbol: 'Be', atomicNumber: 4, atomicMass: '9.0122', category: 'alkaline-earth-metal', gridRow: 2, gridColumn: 2 },
    { name: 'Boron', symbol: 'B', atomicNumber: 5, atomicMass: '10.81', category: 'metalloid', gridRow: 2, gridColumn: 13 },
    { name: 'Carbon', symbol: 'C', atomicNumber: 6, atomicMass: '12.011', category: 'polyatomic-nonmetal', gridRow: 2, gridColumn: 14 },
    { name: 'Nitrogen', symbol: 'N', atomicNumber: 7, atomicMass: '14.007', category: 'diatomic-nonmetal', gridRow: 2, gridColumn: 15 },
    { name: 'Oxygen', symbol: 'O', atomicNumber: 8, atomicMass: '15.999', category: 'diatomic-nonmetal', gridRow: 2, gridColumn: 16 },
    { name: 'Fluorine', symbol: 'F', atomicNumber: 9, atomicMass: '18.998', category: 'halogen', gridRow: 2, gridColumn: 17 },
    { name: 'Neon', symbol: 'Ne', atomicNumber: 10, atomicMass: '20.180', category: 'noble-gas', gridRow: 2, gridColumn: 18 },
    { name: 'Sodium', symbol: 'Na', atomicNumber: 11, atomicMass: '22.990', category: 'alkali-metal', gridRow: 3, gridColumn: 1 },
    { name: 'Magnesium', symbol: 'Mg', atomicNumber: 12, atomicMass: '24.305', category: 'alkaline-earth-metal', gridRow: 3, gridColumn: 2 },
    { name: 'Aluminum', symbol: 'Al', atomicNumber: 13, atomicMass: '26.982', category: 'post-transition-metal', gridRow: 3, gridColumn: 13 },
    { name: 'Silicon', symbol: 'Si', atomicNumber: 14, atomicMass: '28.085', category: 'metalloid', gridRow: 3, gridColumn: 14 },
    { name: 'Phosphorus', symbol: 'P', atomicNumber: 15, atomicMass: '30.974', category: 'polyatomic-nonmetal', gridRow: 3, gridColumn: 15 },
    { name: 'Sulfur', symbol: 'S', atomicNumber: 16, atomicMass: '32.06', category: 'polyatomic-nonmetal', gridRow: 3, gridColumn: 16 },
    { name: 'Chlorine', symbol: 'Cl', atomicNumber: 17, atomicMass: '35.45', category: 'halogen', gridRow: 3, gridColumn: 17 },
    { name: 'Argon', symbol: 'Ar', atomicNumber: 18, atomicMass: '39.948', category: 'noble-gas', gridRow: 3, gridColumn: 18 },
    { name: 'Potassium', symbol: 'K', atomicNumber: 19, atomicMass: '39.098', category: 'alkali-metal', gridRow: 4, gridColumn: 1 },
    { name: 'Calcium', symbol: 'Ca', atomicNumber: 20, atomicMass: '40.078', category: 'alkaline-earth-metal', gridRow: 4, gridColumn: 2 },
    { name: 'Scandium', symbol: 'Sc', atomicNumber: 21, atomicMass: '44.956', category: 'transition-metal', gridRow: 4, gridColumn: 3 },
    { name: 'Titanium', symbol: 'Ti', atomicNumber: 22, atomicMass: '47.867', category: 'transition-metal', gridRow: 4, gridColumn: 4 },
    { name: 'Vanadium', symbol: 'V', atomicNumber: 23, atomicMass: '50.942', category: 'transition-metal', gridRow: 4, gridColumn: 5 },
    { name: 'Chromium', symbol: 'Cr', atomicNumber: 24, atomicMass: '51.996', category: 'transition-metal', gridRow: 4, gridColumn: 6 },
    { name: 'Manganese', symbol: 'Mn', atomicNumber: 25, atomicMass: '54.938', category: 'transition-metal', gridRow: 4, gridColumn: 7 },
    { name: 'Iron', symbol: 'Fe', atomicNumber: 26, atomicMass: '55.845', category: 'transition-metal', gridRow: 4, gridColumn: 8 },
    { name: 'Cobalt', symbol: 'Co', atomicNumber: 27, atomicMass: '58.933', category: 'transition-metal', gridRow: 4, gridColumn: 9 },
    { name: 'Nickel', symbol: 'Ni', atomicNumber: 28, atomicMass: '58.693', category: 'transition-metal', gridRow: 4, gridColumn: 10 },
    { name: 'Copper', symbol: 'Cu', atomicNumber: 29, atomicMass: '63.546', category: 'transition-metal', gridRow: 4, gridColumn: 11 },
    { name: 'Zinc', symbol: 'Zn', atomicNumber: 30, atomicMass: '65.38', category: 'transition-metal', gridRow: 4, gridColumn: 12 },
    { name: 'Gallium', symbol: 'Ga', atomicNumber: 31, atomicMass: '69.723', category: 'post-transition-metal', gridRow: 4, gridColumn: 13 },
    { name: 'Germanium', symbol: 'Ge', atomicNumber: 32, atomicMass: '72.630', category: 'metalloid', gridRow: 4, gridColumn: 14 },
    { name: 'Arsenic', symbol: 'As', atomicNumber: 33, atomicMass: '74.922', category: 'metalloid', gridRow: 4, gridColumn: 15 },
    { name: 'Selenium', symbol: 'Se', atomicNumber: 34, atomicMass: '78.971', category: 'polyatomic-nonmetal', gridRow: 4, gridColumn: 16 },
    { name: 'Bromine', symbol: 'Br', atomicNumber: 35, atomicMass: '79.904', category: 'halogen', gridRow: 4, gridColumn: 17 },
    { name: 'Krypton', symbol: 'Kr', atomicNumber: 36, atomicMass: '83.798', category: 'noble-gas', gridRow: 4, gridColumn: 18 },
    { name: 'Rubidium', symbol: 'Rb', atomicNumber: 37, atomicMass: '85.468', category: 'alkali-metal', gridRow: 5, gridColumn: 1 },
    { name: 'Strontium', symbol: 'Sr', atomicNumber: 38, atomicMass: '87.62', category: 'alkaline-earth-metal', gridRow: 5, gridColumn: 2 },
    { name: 'Yttrium', symbol: 'Y', atomicNumber: 39, atomicMass: '88.906', category: 'transition-metal', gridRow: 5, gridColumn: 3 },
    { name: 'Zirconium', symbol: 'Zr', atomicNumber: 40, atomicMass: '91.224', category: 'transition-metal', gridRow: 5, gridColumn: 4 },
    { name: 'Niobium', symbol: 'Nb', atomicNumber: 41, atomicMass: '92.906', category: 'transition-metal', gridRow: 5, gridColumn: 5 },
    { name: 'Molybdenum', symbol: 'Mo', atomicNumber: 42, atomicMass: '95.96', category: 'transition-metal', gridRow: 5, gridColumn: 6 },
    { name: 'Technetium', symbol: 'Tc', atomicNumber: 43, atomicMass: '(98)', category: 'transition-metal', gridRow: 5, gridColumn: 7 },
    { name: 'Ruthenium', symbol: 'Ru', atomicNumber: 44, atomicMass: '101.07', category: 'transition-metal', gridRow: 5, gridColumn: 8 },
    { name: 'Rhodium', symbol: 'Rh', atomicNumber: 45, atomicMass: '102.91', category: 'transition-metal', gridRow: 5, gridColumn: 9 },
    { name: 'Palladium', symbol: 'Pd', atomicNumber: 46, atomicMass: '106.42', category: 'transition-metal', gridRow: 5, gridColumn: 10 },
    { name: 'Silver', symbol: 'Ag', atomicNumber: 47, atomicMass: '107.87', category: 'transition-metal', gridRow: 5, gridColumn: 11 },
    { name: 'Cadmium', symbol: 'Cd', atomicNumber: 48, atomicMass: '112.41', category: 'transition-metal', gridRow: 5, gridColumn: 12 },
    { name: 'Indium', symbol: 'In', atomicNumber: 49, atomicMass: '114.82', category: 'post-transition-metal', gridRow: 5, gridColumn: 13 },
    { name: 'Tin', symbol: 'Sn', atomicNumber: 50, atomicMass: '118.71', category: 'post-transition-metal', gridRow: 5, gridColumn: 14 },
    { name: 'Antimony', symbol: 'Sb', atomicNumber: 51, atomicMass: '121.76', category: 'metalloid', gridRow: 5, gridColumn: 15 },
    { name: 'Tellurium', symbol: 'Te', atomicNumber: 52, atomicMass: '127.60', category: 'metalloid', gridRow: 5, gridColumn: 16 },
    { name: 'Iodine', symbol: 'I', atomicNumber: 53, atomicMass: '126.90', category: 'halogen', gridRow: 5, gridColumn: 17 },
    { name: 'Xenon', symbol: 'Xe', atomicNumber: 54, atomicMass: '131.29', category: 'noble-gas', gridRow: 5, gridColumn: 18 },
    { name: 'Caesium', symbol: 'Cs', atomicNumber: 55, atomicMass: '132.91', category: 'alkali-metal', gridRow: 6, gridColumn: 1 },
    { name: 'Barium', symbol: 'Ba', atomicNumber: 56, atomicMass: '137.33', category: 'alkaline-earth-metal', gridRow: 6, gridColumn: 2 },
    { name: 'Lanthanum', symbol: 'La', atomicNumber: 57, atomicMass: '138.91', category: 'lanthanide', gridRow: 6, gridColumn: 3 },
    { name: 'Cerium', symbol: 'Ce', atomicNumber: 58, atomicMass: '140.12', category: 'lanthanide', gridRow: 9, gridColumn: 4 },
    { name: 'Praseodymium', symbol: 'Pr', atomicNumber: 59, atomicMass: '140.91', category: 'lanthanide', gridRow: 9, gridColumn: 5 },
    { name: 'Neodymium', symbol: 'Nd', atomicNumber: 60, atomicMass: '144.24', category: 'lanthanide', gridRow: 9, gridColumn: 6 },
    { name: 'Promethium', symbol: 'Pm', atomicNumber: 61, atomicMass: '(145)', category: 'lanthanide', gridRow: 9, gridColumn: 7 },
    { name: 'Samarium', symbol: 'Sm', atomicNumber: 62, atomicMass: '150.36', category: 'lanthanide', gridRow: 9, gridColumn: 8 },
    { name: 'Europium', symbol: 'Eu', atomicNumber: 63, atomicMass: '151.96', category: 'lanthanide', gridRow: 9, gridColumn: 9 },
    { name: 'Gadolinium', symbol: 'Gd', atomicNumber: 64, atomicMass: '157.25', category: 'lanthanide', gridRow: 9, gridColumn: 10 },
    { name: 'Terbium', symbol: 'Tb', atomicNumber: 65, atomicMass: '158.93', category: 'lanthanide', gridRow: 9, gridColumn: 11 },
    { name: 'Dysprosium', symbol: 'Dy', atomicNumber: 66, atomicMass: '162.50', category: 'lanthanide', gridRow: 9, gridColumn: 12 },
    { name: 'Holmium', symbol: 'Ho', atomicNumber: 67, atomicMass: '164.93', category: 'lanthanide', gridRow: 9, gridColumn: 13 },
    { name: 'Erbium', symbol: 'Er', atomicNumber: 68, atomicMass: '167.26', category: 'lanthanide', gridRow: 9, gridColumn: 14 },
    { name: 'Thulium', symbol: 'Tm', atomicNumber: 69, atomicMass: '168.93', category: 'lanthanide', gridRow: 9, gridColumn: 15 },
    { name: 'Ytterbium', symbol: 'Yb', atomicNumber: 70, atomicMass: '173.05', category: 'lanthanide', gridRow: 9, gridColumn: 16 },
    { name: 'Lutetium', symbol: 'Lu', atomicNumber: 71, atomicMass: '174.97', category: 'lanthanide', gridRow: 9, gridColumn: 17 },
    { name: 'Hafnium', symbol: 'Hf', atomicNumber: 72, atomicMass: '178.49', category: 'transition-metal', gridRow: 6, gridColumn: 4 },
    { name: 'Tantalum', symbol: 'Ta', atomicNumber: 73, atomicMass: '180.95', category: 'transition-metal', gridRow: 6, gridColumn: 5 },
    { name: 'Tungsten', symbol: 'W', atomicNumber: 74, atomicMass: '183.84', category: 'transition-metal', gridRow: 6, gridColumn: 6 },
    { name: 'Rhenium', symbol: 'Re', atomicNumber: 75, atomicMass: '186.21', category: 'transition-metal', gridRow: 6, gridColumn: 7 },
    { name: 'Osmium', symbol: 'Os', atomicNumber: 76, atomicMass: '190.23', category: 'transition-metal', gridRow: 6, gridColumn: 8 },
    { name: 'Iridium', symbol: 'Ir', atomicNumber: 77, atomicMass: '192.22', category: 'transition-metal', gridRow: 6, gridColumn: 9 },
    { name: 'Platinum', symbol: 'Pt', atomicNumber: 78, atomicMass: '195.08', category: 'transition-metal', gridRow: 6, gridColumn: 10 },
    { name: 'Gold', symbol: 'Au', atomicNumber: 79, atomicMass: '196.97', category: 'transition-metal', gridRow: 6, gridColumn: 11 },
    { name: 'Mercury', symbol: 'Hg', atomicNumber: 80, atomicMass: '200.59', category: 'transition-metal', gridRow: 6, gridColumn: 12 },
    { name: 'Thallium', symbol: 'Tl', atomicNumber: 81, atomicMass: '204.38', category: 'post-transition-metal', gridRow: 6, gridColumn: 13 },
    { name: 'Lead', symbol: 'Pb', atomicNumber: 82, atomicMass: '207.2', category: 'post-transition-metal', gridRow: 6, gridColumn: 14 },
    { name: 'Bismuth', symbol: 'Bi', atomicNumber: 83, atomicMass: '208.98', category: 'post-transition-metal', gridRow: 6, gridColumn: 15 },
    { name: 'Polonium', symbol: 'Po', atomicNumber: 84, atomicMass: '(209)', category: 'post-transition-metal', gridRow: 6, gridColumn: 16 },
    { name: 'Astatine', symbol: 'At', atomicNumber: 85, atomicMass: '(210)', category: 'halogen', gridRow: 6, gridColumn: 17 },
    { name: 'Radon', symbol: 'Rn', atomicNumber: 86, atomicMass: '(222)', category: 'noble-gas', gridRow: 6, gridColumn: 18 },
    { name: 'Francium', symbol: 'Fr', atomicNumber: 87, atomicMass: '(223)', category: 'alkali-metal', gridRow: 7, gridColumn: 1 },
    { name: 'Radium', symbol: 'Ra', atomicNumber: 88, atomicMass: '(226)', category: 'alkaline-earth-metal', gridRow: 7, gridColumn: 2 },
    { name: 'Actinium', symbol: 'Ac', atomicNumber: 89, atomicMass: '(227)', category: 'actinide', gridRow: 7, gridColumn: 3 },
    { name: 'Thorium', symbol: 'Th', atomicNumber: 90, atomicMass: '232.04', category: 'actinide', gridRow: 10, gridColumn: 4 },
    { name: 'Protactinium', symbol: 'Pa', atomicNumber: 91, atomicMass: '231.04', category: 'actinide', gridRow: 10, gridColumn: 5 },
    { name: 'Uranium', symbol: 'U', atomicNumber: 92, atomicMass: '238.03', category: 'actinide', gridRow: 10, gridColumn: 6 },
    { name: 'Neptunium', symbol: 'Np', atomicNumber: 93, atomicMass: '(237)', category: 'actinide', gridRow: 10, gridColumn: 7 },
    { name: 'Plutonium', symbol: 'Pu', atomicNumber: 94, atomicMass: '(244)', category: 'actinide', gridRow: 10, gridColumn: 8 },
    { name: 'Americium', symbol: 'Am', atomicNumber: 95, atomicMass: '(243)', category: 'actinide', gridRow: 10, gridColumn: 9 },
    { name: 'Curium', symbol: 'Cm', atomicNumber: 96, atomicMass: '(247)', category: 'actinide', gridRow: 10, gridColumn: 10 },
    { name: 'Berkelium', symbol: 'Bk', atomicNumber: 97, atomicMass: '(247)', category: 'actinide', gridRow: 10, gridColumn: 11 },
    { name: 'Californium', symbol: 'Cf', atomicNumber: 98, atomicMass: '(251)', category: 'actinide', gridRow: 10, gridColumn: 12 },
    { name: 'Einsteinium', symbol: 'Es', atomicNumber: 99, atomicMass: '(252)', category: 'actinide', gridRow: 10, gridColumn: 13 },
    { name: 'Fermium', symbol: 'Fm', atomicNumber: 100, atomicMass: '(257)', category: 'actinide', gridRow: 10, gridColumn: 14 },
    { name: 'Mendelevium', symbol: 'Md', atomicNumber: 101, atomicMass: '(258)', category: 'actinide', gridRow: 10, gridColumn: 15 },
    { name: 'Nobelium', symbol: 'No', atomicNumber: 102, atomicMass: '(259)', category: 'actinide', gridRow: 10, gridColumn: 16 },
    { name: 'Lawrencium', symbol: 'Lr', atomicNumber: 103, atomicMass: '(262)', category: 'actinide', gridRow: 10, gridColumn: 17 },
    { name: 'Rutherfordium', symbol: 'Rf', atomicNumber: 104, atomicMass: '(267)', category: 'transition-metal', gridRow: 7, gridColumn: 4 },
    { name: 'Dubnium', symbol: 'Db', atomicNumber: 105, atomicMass: '(268)', category: 'transition-metal', gridRow: 7, gridColumn: 5 },
    { name: 'Seaborgium', symbol: 'Sg', atomicNumber: 106, atomicMass: '(271)', category: 'transition-metal', gridRow: 7, gridColumn: 6 },
    { name: 'Bohrium', symbol: 'Bh', atomicNumber: 107, atomicMass: '(272)', category: 'transition-metal', gridRow: 7, gridColumn: 7 },
    { name: 'Hassium', symbol: 'Hs', atomicNumber: 108, atomicMass: '(277)', category: 'transition-metal', gridRow: 7, gridColumn: 8 },
    { name: 'Meitnerium', symbol: 'Mt', atomicNumber: 109, atomicMass: '(276)', category: 'unknown', gridRow: 7, gridColumn: 9 },
    { name: 'Darmstadtium', symbol: 'Ds', atomicNumber: 110, atomicMass: '(281)', category: 'unknown', gridRow: 7, gridColumn: 10 },
    { name: 'Roentgenium', symbol: 'Rg', atomicNumber: 111, atomicMass: '(280)', category: 'unknown', gridRow: 7, gridColumn: 11 },
    { name: 'Copernicium', symbol: 'Cn', atomicNumber: 112, atomicMass: '(285)', category: 'transition-metal', gridRow: 7, gridColumn: 12 },
    { name: 'Nihonium', symbol: 'Nh', atomicNumber: 113, atomicMass: '(284)', category: 'unknown', gridRow: 7, gridColumn: 13 },
    { name: 'Flerovium', symbol: 'Fl', atomicNumber: 114, atomicMass: '(289)', category: 'unknown', gridRow: 7, gridColumn: 14 },
    { name: 'Moscovium', symbol: 'Mc', atomicNumber: 115, atomicMass: '(288)', category: 'unknown', gridRow: 7, gridColumn: 15 },
    { name: 'Livermorium', symbol: 'Lv', atomicNumber: 116, atomicMass: '(293)', category: 'unknown', gridRow: 7, gridColumn: 16 },
    { name: 'Tennessine', symbol: 'Ts', atomicNumber: 117, atomicMass: '(294)', category: 'unknown', gridRow: 7, gridColumn: 17 },
    { name: 'Oganesson', symbol: 'Og', atomicNumber: 118, atomicMass: '(294)', category: 'unknown', gridRow: 7, gridColumn: 18 },
];


// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    const periodicTable = document.getElementById('periodic-table');
    const elementDetails = document.getElementById('element-details');

    // Function to display details of a clicked element
    function showDetails(element) {
        elementDetails.innerHTML = `
            <h2>${element.name} (${element.symbol})</h2>
            <ul>
                <li><strong>Atomic Number:</strong> ${element.atomicNumber}</li>
                <li><strong>Atomic Mass:</strong> ${element.atomicMass}</li>
                <li><strong>Category:</strong> ${element.category.replace(/-/g, ' ')}</li>
            </ul>
        `;
    }

    // Loop through the elements data and create a div for each one
    elementsData.forEach(element => {
        // Create a new div for the element
        const elementDiv = document.createElement('div');
        
        // Add a class for general styling and a specific class for its category
        elementDiv.className = `element ${element.category}`;
        
        // Set the grid position
        elementDiv.style.gridRow = element.gridRow;
        elementDiv.style.gridColumn = element.gridColumn;

        // Add the content (atomic number, symbol, name)
        elementDiv.innerHTML = `
            <div class="atomic-number">${element.atomicNumber}</div>
            <div class="symbol">${element.symbol}</div>
            <div class="name">${element.name}</div>
        `;
        
        // Add a click event listener to show details
        elementDiv.addEventListener('click', () => {
            // Remove 'selected' class from any previously selected element
            const currentlySelected = document.querySelector('.element.selected');
            if (currentlySelected) {
                currentlySelected.classList.remove('selected');
            }
            // Add 'selected' class to the clicked element
            elementDiv.classList.add('selected');
            showDetails(element);
        });
        
        // Append the new element div to the periodic table container
        periodicTable.appendChild(elementDiv);
    });
});