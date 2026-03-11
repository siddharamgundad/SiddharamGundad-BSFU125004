// Database of 24 Agri-Waste Materials
const products = [
    { name: "Rice Husk", price: "5,800", qty: "100 Tons", loc: "Solapur, MH", industry: "Bio-fuel" },
    { name: "Wheat Straw", price: "7,000", qty: "40 Tons", loc: "Punjab", industry: "Paper Mills" },
    { name: "Sugarcane Bagasse", price: "4,500", qty: "500 Tons", loc: "Satara, MH", industry: "Power Generation" },
    { name: "Cotton Stalks", price: "2,200", qty: "25 Tons", loc: "Gujarat", industry: "Textile Waste" },
    { name: "Corn Cobs", price: "3,100", qty: "60 Tons", loc: "Karnataka", industry: "Cattle Feed" },
    { name: "Groundnut Shells", price: "8,500", qty: "15 Tons", loc: "Junagadh, GJ", industry: "Briquettes" },
    { name: "Coconut Shells", price: "12,000", qty: "10 Tons", loc: "Kerala", industry: "Activated Carbon" },
    { name: "Banana Pseudostem", price: "1,200", qty: "20 Tons", loc: "Tamil Nadu", industry: "Fiber Production" },
    { name: "Soybean Trash", price: "1,500", qty: "80 Tons", loc: "Madhya Pradesh", industry: "Organic Manure" },
    { name: "Mustard Stalks", price: "2,800", qty: "35 Tons", loc: "Rajasthan", industry: "Industrial Fuel" },
    { name: "Coffee Husk", price: "9,000", qty: "5 Tons", loc: "Coorg, KA", industry: "Fertilizer" },
    { name: "Sunflower Husks", price: "4,200", qty: "12 Tons", loc: "Andhra Pradesh", industry: "Pellets" },
    { name: "Pigeon Pea Stalks", price: "1,900", qty: "50 Tons", loc: "Maharashtra", industry: "Bio-coal" },
    { name: "Cashew Shells", price: "14,000", qty: "8 Tons", loc: "Goa", industry: "CNSL Oil" },
    { name: "Potato Peels", price: "600", qty: "100 Tons", loc: "Uttar Pradesh", industry: "Biogas" },
    { name: "Orange Peels", price: "3,500", qty: "5 Tons", loc: "Nagpur, MH", industry: "Essential Oils" },
    { name: "Tobacco Waste", price: "5,500", qty: "2 Tons", loc: "Andhra Pradesh", industry: "Nicotine Extraction" },
    { name: "Jute Sticks", price: "3,800", qty: "200 Tons", loc: "West Bengal", industry: "Particle Board" },
    { name: "Grape Pomace", price: "1,400", qty: "15 Tons", loc: "Nashik, MH", industry: "Winery Waste" },
    { name: "Mango Seed Kernels", price: "4,000", qty: "10 Tons", loc: "Ratnagiri, MH", industry: "Cosmetics" },
    { name: "Sawdust (Agri-based)", price: "5,000", qty: "30 Tons", loc: "Assam", industry: "Mushroom Bedding" },
    { name: "Dried Flower Waste", price: "2,000", qty: "1 Ton", loc: "Temples, Solapur", industry: "Incense Sticks" },
    { name: "Chilli Stems", price: "1,100", qty: "4 Tons", loc: "Guntur, AP", industry: "Natural Dye" },
    { name: "Onion Skins", price: "800", qty: "20 Tons", loc: "Lasalgaon, MH", industry: "Packaging Material" }
];

const grid = document.getElementById('marketplace-grid');

// Generate the cards automatically
products.forEach(item => {
    const cardHtml = `
        <div class="col-md-4 col-lg-3">
            <div class="card h-100 shadow-sm">
                <img src="https://placehold.co/400x300/1b4332/white?text=${item.name.replace(" ", "+")}" class="card-img-top" alt="${item.name}">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <div class="price-box mb-2">₹${item.price}/Ton</div>
                    <p class="card-text mb-1 small text-muted">Available: <b>${item.qty}</b></p>
                    <p class="card-text mb-1 small text-muted">Use: <b>${item.industry}</b></p>
                    <p class="location-tag mb-3">📍 ${item.loc}</p>
                    <button class="btn btn-success w-100" onclick="alert('Viewing detailed reach for ${item.name}...')">View Details</button>
                </div>
            </div>
        </div>
    `;
    grid.innerHTML += cardHtml;
});
