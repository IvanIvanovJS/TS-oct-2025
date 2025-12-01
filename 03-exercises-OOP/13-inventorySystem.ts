class Product {
	private static productCount: number = 0;
	readonly id: number;
	public name: string;
	public price: number;

	constructor(name: string, price: number) {
		if (name.length < 1) {
			throw new Error("Name must contain at least 1 character");
		}
		if (price < 1) {
			throw new Error("Price must be positive");
		}
		Product.productCount++;
		this.id = Product.productCount;
		this.name = name;
		this.price = price;
	}

	getDetails(): string {
		return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`;
	}
}

class Inventory {
	private products: Product[] = [];

	addProduct(product: Product): void {
		this.products.push(product);
	}

	listProducts(): string {
		return `Total products created: ${this.products.length}`;
	}
}

const inventory = new Inventory();
const product1 = new Product("Laptop", 1200);
const product2 = new Product("Phone", 800);

inventory.addProduct(product1);
inventory.addProduct(product2);

console.log(inventory.listProducts());
// Product.productCount = 10;
// const product = new Product("", 800);
// const product2 = new Product("Phone", 0);
// product.id = 5;
