import Products from "./models/productModel.js";

const staticProducts = [
    // Adidas
    {
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Stan_Smith_Shoes_White_FX5502_01_standard.jpg",
        brand: "Adidas",
        title: "Adidas Stan Smith Classic White",
        rating: 4.5,
        reviews: 12500,
        sellPrice: 3999,
        orders: "50k+",
        mrp: "5999",
        discount: 33,
        category: "adult",
    },
    {
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5d9e4b51a4264ea5857bac2700a44e1b_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg",
        brand: "Adidas",
        title: "Adidas Ultraboost 22 Running Shoes",
        rating: 4.7,
        reviews: 9800,
        sellPrice: 8999,
        orders: "30k+",
        mrp: "14999",
        discount: 40,
        category: "adult",
    },

];

export const seedDatabase = async () => {
    try {
        const count = await Products.countDocuments();
        if (count === 0) {
            await Products.insertMany(staticProducts)
            console.log("Seeder Db  Connected");
        }
    } catch (error) {
        console.log("Error one seeding db", error)
    }
}