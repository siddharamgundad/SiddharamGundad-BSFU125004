const wasteMaterials = [
    { name: "Rice Husk", price: "₹2,500", qty: "50 Tons", loc: "Punjab", use: "Bio-fuel" },
    { name: "Wheat Straw", price: "₹3,200", qty: "30 Tons", loc: "Haryana", use: "Paper Pulp" },
    { name: "Sugarcane Bagasse", price: "₹1,800", qty: "100 Tons", loc: "Maharashtra", use: "Electricity" },
    { name: "Cotton Stalks", price: "₹2,100", qty: "20 Tons", loc: "Gujarat", use: "Pellets" },
    { name: "Corn Stover", price: "₹1,500", qty: "45 Tons", loc: "Karnataka", use: "Animal Feed" },
    { name: "Coconut Shells", price: "₹5,000", qty: "10 Tons", loc: "Kerala", use: "Activated Carbon" },
    { name: "Banana Pseudostem", price: "₹900", qty: "15 Tons", loc: "Tamil Nadu", use: "Textile Fiber" },
    { name: "Soybean Trash", price: "₹1,200", qty: "25 Tons", loc: "Madhya Pradesh", use: "Compost" },
    // Add 16 more items here to reach 24...
];

const grid = document.getElementById('waste-grid');

wasteMaterials.forEach(item => {
    grid.innerHTML += `
        <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title text-success">${item.name}</h5>
                    <p class="price-tag">${item.price} <small class="text-muted">/ton</small></p>
                    <p class="mb-1"><b>Quantity:</b> ${item.qty}</p>
                    <p class="mb-3"><span class="location-badge">📍 ${item.loc}</span></p>
                    <button class="btn btn-outline-success btn-sm w-100">View Details</button>
                </div>
            </div>
        </div>
    `;
});
const wasteMaterials = [
    { 
        name: "Rice Husk", 
        price: "2,500", 
        qty: "50 Tons", 
        loc: "Punjab", 
        image: "assets/images/rice-husk.jpg" // Path to your file
    },
    { 
        name: "Sugarcane Bagasse", 
        price: "1,800", 
        qty: "100 Tons", 
        loc: "Maharashtra", 
        image: "assets/images/sugarcane.jpg" 
    }
];
