// Inventory Management System Project
// This program simulates a store inventory system using classes
class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
   // Calculate total inventory value
    // Calculate total value of this product in stock
    getTotalValue() {
        return this.price * this.quantity;
    }

    // Return formatted product details
    toString() {
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
    }

    // Apply a discount to an array of products
    static applyDiscount(products, discount) {
        products.forEach(product => {
            product.price *= (1 - discount);
        });
    }
}


 //PerishableProduct Class
// Extends Product by adding expiration date
class PerishableProduct extends Product {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }

    // Include expiration date in product description
    toString() {
        return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
    }
}

//Store Class
// Manages inventory of products
class Store {
    constructor() {
        this.inventory = [];
    }
     // Add multiple products including perishable ones
    // Add a product to the inventory
    addProduct(product) {
        this.inventory.push(product);
    }
     // Use reduce to calculate total inventory value
    // Calculate total value of all products in inventory
    getInventoryValue() {
        return this.inventory.reduce((total, product) => {
            return total + product.getTotalValue();
        }, 0);
    }

    // Find a product by name (case-insensitive)
    findProductByName(name) {
        return this.inventory.find(
            product => product.name.toLowerCase() === name.toLowerCase()
        ) || null;
    }
}



// Create store instance for testing
const myStore = new Store();

// Create products (3 regular, 2 perishable)
const apple = new Product("Apple", 2.50, 50);
const bread = new Product("Bread", 3.00, 20);
const rice = new Product("Rice", 10.00, 15);

const milk = new PerishableProduct("Milk", 1.50, 10, "2024-12-31");
const yogurt = new PerishableProduct("Yogurt", 2.00, 25, "2024-11-15");

// Add new product object into inventory
myStore.addProduct(apple);
myStore.addProduct(bread);
myStore.addProduct(rice);
myStore.addProduct(milk);
myStore.addProduct(yogurt);

// Display total inventory value BEFORE discount
console.log("Total Inventory Value BEFORE discount:");
console.log(`$${myStore.getInventoryValue().toFixed(2)}`);

// Apply 15% discount to all inventory items
// Apply 15% discount to all products
Product.applyDiscount(myStore.inventory, 0.15);

// Display total inventory value AFTER discount
console.log("\nTotal Inventory Value AFTER 15% discount:");
console.log(`$${myStore.getInventoryValue().toFixed(2)}`);

// Search for product by name (case insensitive)
console.log("\nSearch Result:");
const foundProduct = myStore.findProductByName("Milk");

// Display results to console output
// Display result of search
if (foundProduct) {
    console.log(foundProduct.toString());
} else {
    console.log("Product not found");
}