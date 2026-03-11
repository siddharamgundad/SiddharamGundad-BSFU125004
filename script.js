const wasteMaterials = [
    { name: "Rice Husk", price: "5,500", qty: "120 Tons", loc: "Solapur, MH", img: "rice", info: "Used for bio-energy and cement production." },
    { name: "Wheat Straw", price: "7,200", qty: "45 Tons", loc: "Punjab", img: "wheat", info: "Ideal for paper industry and mushroom farming." },
    { name: "Sugarcane Bagasse", price: "4,800", qty: "500 Tons", loc: "Satara, MH", img: "sugarcane", info: "Primary raw material for bio-plastics and electricity." },
    { name: "Cotton Stalks", price: "2,400", qty: "30 Tons", loc: "Gujarat", img: "cotton", info: "Used in pellet making and textile waste recycling." },
    { name: "Corn Stover", price: "3,100", qty: "85 Tons", loc: "Karnataka", img: "corn", info: "High value for livestock feed and ethanol." },
    { name: "Groundnut Shells", price: "8,900", qty: "20 Tons", loc: "Junagadh, GJ", img: "peanut", info: "Excellent for briquettes and boiler fuel." },
    { name: "Coconut Husk", price: "11,500", qty: "15 Tons", loc: "Kerala", img: "coconut", info: "Used for coir industry and soil conditioning." },
    { name: "Banana Stem", price: "1,500", qty: "25 Tons", loc: "Tamil Nadu", img: "banana", info: "Fiber extraction for eco-friendly textiles." },
    { name: "Soybean Trash", price: "1,800", qty: "60 Tons", loc: "Indore, MP", img: "soybean", info: "Nutrient-rich for organic composting." },
    { name: "Mustard Stalk", price: "2,600", qty: "40 Tons", loc: "Rajasthan", img: "mustard", info: "Industrial heating and power plants." },
    { name: "Tobacco Waste", price: "6,000", qty: "5 Tons", loc: "Andhra Pradesh", img: "tobacco", info: "Nicotine sulfate extraction for pesticides." },
    { name: "Coffee Pulp", price: "9,500", qty: "10 Tons", loc: "Coorg, KA", img: "coffee", info: "Used in bio-fertilizers and biogas." },
    { name: "Mango Seed Kernels", price: "4,200", qty: "12 Tons", loc: "Ratnagiri, MH", img: "mango", info: "Cosmetic industry for mango butter." },
    { name: "Sawdust", price: "5,200", qty: "35 Tons", loc: "Assam", img: "wood", info: "Furniture board and heating pellets." },
    { name: "Grape Pomace", price: "1,200", qty: "18 Tons", loc: "Nashik, MH", img: "grape", info: "Tartaric acid extraction and animal feed." },
    { name: "Potato Peels", price: "700", qty: "100 Tons", loc: "Agra, UP", img: "potato", info: "Starch production and anaerobic digestion." },
    { name: "Orange Peels", price: "3,800", qty: "8 Tons", loc: "Nagpur, MH", img: "orange", info: "Essential oils and pectin extraction." },
    { name: "Jute Sticks", price: "3,400", qty: "150 Tons", loc: "West Bengal", img: "jute", info: "Charcoal and particle board industry." },
    { name: "Sunflower Head", price: "4,500", qty: "14 Tons", loc: "Andhra Pradesh", img: "sunflower", info: "Rich in fiber for ruminant feed." },
    { name: "Pigeon Pea Stalk", price: "2,100", qty: "55 Tons", loc: "Latur, MH", img: "lentils", info: "Rural fuel and thatch material." },
    { name: "Cashew Shells", price: "13,500", qty: "9 Tons", loc: "Goa", img: "cashew", info: "CNSL Oil extraction for chemicals." },
    { name: "Onion Skins", price: "900", qty: "22 Tons", loc: "Nashik, MH", img: "onion", info: "Natural dyes and antioxidants." },
    { name: "Chilli Stems", price: "1,300", qty: "6 Tons", loc: "Guntur, AP", img: "chilli", info: "Organic pest control sprays." },
    { name: "Floral Waste", price: "2,500", qty: "2 Tons", loc: "Solapur, MH", img: "flower", info: "Incense sticks and natural dyes." }
];

const grid = document.getElementById('market-grid');

wasteMaterials.forEach((item, index) => {
    grid.innerHTML += `
    <div class="col-md-6 col-lg-3">
        <div class="card h-100 shadow-sm">
            <img src="https://source.unsplash.com/featured/?agriculture,${item.img}" class="card-img-top" alt="${item.name}">
            <div class="card-body">
                <h5 class="card-title fw-bold text-success">${item.name}</h5>
                <p class="price-badge">₹${item.price} / Ton</p>
                <p class="mb-1 small"><b>Qty:</b> ${item.qty}</p>
                <p class="location-text mb-3">📍 ${item.loc}</p>
                <button class="btn btn-success btn-sm w-100 rounded-pill" onclick="showDetail(${index})">View Full Details</button>
            </div>
        </div>
    </div>`;
});

function showDetail(id) {
    const item = wasteMaterials[id];
    const modalContent = `
        <div class="modal-header bg-success text-white">
            <h5 class="modal-title">${item.name} - Detailed Reach</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
            <img src="https://source.unsplash.com/featured/?farming,${item.img}" class="img-fluid rounded mb-3">
            <p><b>Market Value:</b> ₹${item.price} per Metric Ton</p>
            <p><b>Total Available:</b> ${item.qty}</p>
            <p><b>Primary Location:</b> ${item.loc}</p>
            <hr>
            <h6>Industrial Reach:</h6>
            <p>${item.info}</p>
        </div>
        <div class="modal-footer">
            <button class="btn btn-warning w-100">Contact Supplier</button>
        </div>
    `;
    document.getElementById('modal-content-area').innerHTML = modalContent;
    new bootstrap.Modal(document.getElementById('detailModal')).show();
}
