const wasteMaterials = [
    { name: "Rice Husk", price: "5,500", qty: "120 Tons", loc: "Solapur, MH", img: "1.jpg", info: "Used for bio-energy." },
    { name: "Wheat Straw", price: "7,200", qty: "45 Tons", loc: "Punjab", img: "2.jpg", info: "Ideal for paper industry." },
    { name: "Sugarcane Bagasse", price: "4,800", qty: "500 Tons", loc: "Satara, MH", img: "3.jpg", info: "Raw material for bio-plastics." },
    { name: "Cotton Stalks", price: "2,400", qty: "30 Tons", loc: "Gujarat", img: "4.jpg", info: "Used in pellet making." },
    { name: "Corn Stover", price: "3,100", qty: "85 Tons", loc: "Karnataka", img: "5.jpg", info: "Livestock feed." },
    { name: "Groundnut Shells", price: "8,900", qty: "20 Tons", loc: "Junagadh, GJ", img: "6.jpg", info: "Excellent boiler fuel." },
    { name: "Coconut Husk", price: "11,500", qty: "15 Tons", loc: "Kerala", img: "7.jpg", info: "Coir industry material." },
    { name: "Banana Stem", price: "1,500", qty: "25 Tons", loc: "Tamil Nadu", img: "8.jpg", info: "Fiber extraction." },
    { name: "Soybean Trash", price: "1,800", qty: "60 Tons", loc: "Indore, MP", img: "9.jpg", info: "Organic composting." },
    { name: "Mustard Stalk", price: "2,600", qty: "40 Tons", loc: "Rajasthan", img: "10.jpg", info: "Industrial heating." },
    { name: "Tobacco Waste", price: "6,000", qty: "5 Tons", loc: "Andhra Pradesh", img: "11.jpg", info: "Pesticide extraction." },
    { name: "Coffee Pulp", price: "9,500", qty: "10 Tons", loc: "Coorg, KA", img: "12.jpg", info: "Bio-fertilizers." },
    { name: "Mango Seed", price: "4,200", qty: "12 Tons", loc: "Ratnagiri, MH", img: "13.jpg", info: "Cosmetic butter." },
    { name: "Sawdust", price: "5,200", qty: "35 Tons", loc: "Assam", img: "14.jpg", info: "Furniture board." },
    { name: "Grape Pomace", price: "1,200", qty: "18 Tons", loc: "Nashik, MH", img: "15.jpg", info: "Winery waste." },
    { name: "Potato Peels", price: "700", qty: "100 Tons", loc: "Agra, UP", img: "16.jpg", info: "Starch production." },
    { name: "Orange Peels", price: "3,800", qty: "8 Tons", loc: "Nagpur, MH", img: "17.jpg", info: "Essential oils." },
    { name: "Jute Sticks", price: "3,400", qty: "150 Tons", loc: "West Bengal", img: "18.jpg", info: "Particle board." },
    { name: "Sunflower Head", price: "4,500", qty: "14 Tons", loc: "Andhra Pradesh", img: "19.jpg", info: "Ruminant feed." },
    { name: "Pigeon Pea Stalk", price: "2,100", qty: "55 Tons", loc: "Latur, MH", img: "20.jpg", info: "Rural fuel." },
    { name: "Cashew Shells", price: "13,500", qty: "9 Tons", loc: "Goa", img: "21.jpg", info: "Chemical extraction." },
    { name: "Onion Skins", price: "900", qty: "22 Tons", loc: "Nashik, MH", img: "22.jpg", info: "Natural dyes." },
    { name: "Chilli Stems", price: "1,300", qty: "6 Tons", loc: "Guntur, AP", img: "23.jpg", info: "Pest control." },
    { name: "Floral Waste", price: "2,500", qty: "2 Tons", loc: "Solapur, MH", img: "24.jpg", info: "Incense sticks." }
];

const grid = document.getElementById('market-grid');
grid.innerHTML = ''; // Clear the loading text

wasteMaterials.forEach((item, index) => {
    grid.innerHTML += `
    <div class="col-md-6 col-lg-3">
        <div class="card h-100 shadow-sm border-0">
            <img src="images/${item.img}" class="card-img-top" alt="${item.name}" onerror="this.src='https://placehold.co/400x300?text=Image+Missing'">
            <div class="card-body">
                <h5 class="card-title fw-bold text-success">${item.name}</h5>
                <p class="price-badge">₹${item.price} / Ton</p>
                <p class="mb-1 small"><b>Qty:</b> ${item.qty}</p>
                <p class="location-text mb-3">📍 ${item.loc}</p>
                <button class="btn btn-success btn-sm w-100 rounded-pill" onclick="showDetail(${index})">View Details</button>
            </div>
        </div>
    </div>`;
});

function showDetail(id) {
    const item = wasteMaterials[id];
    const modalContent = `
        <div class="modal-header bg-success text-white">
            <h5 class="modal-title">${item.name}</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
            <img src="images/${item.img}" class="img-fluid rounded mb-3" onerror="this.src='https://placehold.co/600x400?text=Image+Missing'">
            <p><b>Market Value:</b> ₹${item.price} per Ton</p>
            <p><b>Total Available:</b> ${item.qty}</p>
            <p><b>Location:</b> ${item.loc}</p>
            <hr>
            <h6>Business Information:</h6>
            <p>${item.info}</p>
        </div>
        <div class="modal-footer">
            <button class="btn btn-warning w-100">Send Inquiry to Farmer</button>
        </div>
    `;
    document.getElementById('modal-content-area').innerHTML = modalContent;
    new bootstrap.Modal(document.getElementById('detailModal')).show();
}
