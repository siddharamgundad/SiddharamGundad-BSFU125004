// Database of 24 Agri-Waste Materials
const wasteMaterials = [
    { id: 1, name: "Rice Husk", price: "5,500", qty: "120 Tons", loc: "Solapur, MH", img: "1.jpg", info: "High calorific value; used in bio-energy and cement kilns." },
    { id: 2, name: "Wheat Straw", price: "7,200", qty: "45 Tons", loc: "Punjab", img: "2.jpg", info: "Ideal for paper manufacturing and mushroom bedding." },
    { id: 3, name: "Sugarcane Bagasse", price: "4,800", qty: "500 Tons", loc: "Satara, MH", img: "3.jpg", info: "Used for bio-plastics and electricity co-generation." },
    { id: 4, name: "Cotton Stalks", price: "2,400", qty: "30 Tons", loc: "Gujarat", img: "4.jpg", info: "Great for bio-pellets and industrial heating." },
    { id: 5, name: "Corn Stover", price: "3,100", qty: "85 Tons", loc: "Karnataka", img: "5.jpg", info: "Valuable for livestock feed and cellulosic ethanol." },
    { id: 6, name: "Groundnut Shells", price: "8,900", qty: "20 Tons", loc: "Junagadh, GJ", img: "6.jpg", info: "Excellent for fuel briquettes and boiler firing." },
    { id: 7, name: "Coconut Husk", price: "11,500", qty: "15 Tons", loc: "Kerala", img: "7.jpg", info: "Used in coir fiber industry and soil aeration." },
    { id: 8, name: "Banana Stem", price: "1,500", qty: "25 Tons", loc: "Tamil Nadu", img: "8.jpg", info: "Eco-friendly fiber extraction for textiles." },
    { id: 9, name: "Soybean Trash", price: "1,800", qty: "60 Tons", loc: "Indore, MP", img: "9.jpg", info: "Rich organic matter for industrial composting." },
    { id: 10, name: "Mustard Stalk", price: "2,600", qty: "40 Tons", loc: "Rajasthan", img: "10.jpg", info: "Primary fuel source for local power plants." },
    { id: 11, name: "Tobacco Waste", price: "6,000", qty: "5 Tons", loc: "Andhra Pradesh", img: "11.jpg", info: "Source for nicotine sulfate used in pesticides." },
    { id: 12, name: "Coffee Pulp", price: "9,500", qty: "10 Tons", loc: "Coorg, KA", img: "12.jpg", info: "Used in gourmet fertilizers and biogas units." },
    { id: 13, name: "Mango Seed Kernels", price: "4,200", qty: "12 Tons", loc: "Ratnagiri, MH", img: "13.jpg", info: "Extracted for mango butter in cosmetics." },
    { id: 14, name: "Sawdust", price: "5,200", qty: "35 Tons", loc: "Assam", img: "14.jpg", info: "Raw material for furniture boards and pallets." },
    { id: 15, name: "Grape Pomace", price: "1,200", qty: "18 Tons", loc: "Nashik, MH", img: "15.jpg", info: "Used in tartaric acid production." },
    { id: 16, name: "Potato Peels", price: "700", qty: "100 Tons", loc: "Agra, UP", img: "16.jpg", info: "Converted into industrial starch." },
    { id: 17, name: "Orange Peels", price: "3,800", qty: "8 Tons", loc: "Nagpur, MH", img: "17.jpg", info: "Source for pectin and essential oils." },
    { id: 18, name: "Jute Sticks", price: "3,400", qty: "150 Tons", loc: "West Bengal", img: "18.jpg", info: "Used for making charcoal and particle boards." },
    { id: 19, name: "Sunflower Head", price: "4,500", qty: "14 Tons", loc: "Andhra Pradesh", img: "19.jpg", info: "High-protein additive for ruminant feed." },
    { id: 20, name: "Pigeon Pea Stalk", price: "2,100", qty: "55 Tons", loc: "Latur, MH", img: "20.jpg", info: "Standard rural fuel for small-scale boilers." },
    { id: 21, name: "Cashew Shells", price: "13,500", qty: "9 Tons", loc: "Goa", img: "21.jpg", info: "Source of CNSL (Cashew Nut Shell Liquid)." },
    { id: 22, name: "Onion Skins", price: "900", qty: "22 Tons", loc: "Nashik, MH", img: "22.jpg", info: "Used for textile dyes and antioxidants." },
    { id: 23, name: "Chilli Stems", price: "1,300", qty: "6 Tons", loc: "Guntur, AP", img: "23.jpg", info: "Used in organic pest management sprays." },
    { id: 24, name: "Floral Waste", price: "2,500", qty: "2 Tons", loc: "Solapur, MH", img: "24.jpg", info: "Processed into organic incense sticks." }
];

const grid = document.getElementById('market-grid');

// Function to build the marketplace cards
function loadMarketplace() {
    if(!grid) return;
    grid.innerHTML = ''; 

    wasteMaterials.forEach((item, index) => {
        // Correct path: looks inside the "images" folder
        const imgSource = `images/${item.img}`;
        
        grid.innerHTML += `
        <div class="col-md-6 col-lg-3">
            <div class="card h-100 shadow-sm border-0">
                <img src="${imgSource}" 
                     class="card-img-top" 
                     alt="${item.name}"
                     onerror="this.onerror=null; this.src='https://placehold.co/400x300/198754/white?text=${item.name.replace(' ', '+')}';">
                <div class="card-body">
                    <h5 class="card-title fw-bold text-success">${item.name}</h5>
                    <p class="price-badge">₹${item.price} / Ton</p>
                    <div class="small mb-2 text-secondary">
                        <div>📦 Qty: <b>${item.qty}</b></div>
                        <div>📍 Loc: <b>${item.loc}</b></div>
                    </div>
                    <button class="btn btn-success btn-sm w-100 rounded-pill mt-2" onclick="showDetail(${index})">View Full Details</button>
                </div>
            </div>
        </div>`;
    });
}

// Function to show the Detail Modal
function showDetail(id) {
    const item = wasteMaterials[id];
    const modalContent = `
        <div class="modal-header bg-success text-white">
            <h5 class="modal-title fw-bold">${item.name}</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body text-center">
            <img src="images/${item.img}" class="img-fluid rounded mb-3 shadow-sm" onerror="this.src='https://placehold.co/600x400/198754/white?text=${item.name}';">
            <div class="text-start px-3">
                <p><b>Market Value:</b> ₹${item.price} per Ton</p>
                <p><b>Current Inventory:</b> ${item.qty}</p>
                <p><b>Region:</b> ${item.loc}</p>
                <hr>
                <h6>Business Analysis & Reach:</h6>
                <p class="text-muted small">${item.info}</p>
            </div>
        </div>
        <div class="modal-footer">
            <a href="https://wa.me/910000000000" target="_blank" class="btn btn-warning w-100 fw-bold">Contact Local Supplier</a>
        </div>
    `;
    document.getElementById('modal-content-area').innerHTML = modalContent;
    new bootstrap.Modal(document.getElementById('detailModal')).show();
}

// Run the function when the page loads
document.addEventListener('DOMContentLoaded', loadMarketplace);
