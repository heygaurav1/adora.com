const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'src/data.ts');
let content = fs.readFileSync(dataPath, 'utf8');

// The file has export const PRODUCTS: Product[] = [ ... ];
const startStr = 'export const PRODUCTS: Product[] = [';
const startIndex = content.indexOf(startStr) + startStr.length;
const endStr = '];\n\nexport function getProductsByCategory';
const endIndex = content.indexOf(endStr);

if (startIndex < startStr.length || endIndex === -1) {
    console.log("Could not find PRODUCTS array");
    process.exit(1);
}

const productsStr = content.substring(startIndex, endIndex);

// Using eval to parse the array contents (it's safe since it's just our data)
const jsStr = '[' + productsStr + ']';
let products;
try {
    // We have to mock string data since it's just a JS object
    // Wait, evaluating TS code directly as JS might fail if it uses TS types, but it's just a JS array of objects.
    products = eval(jsStr);
} catch (e) {
    console.log("Failed to eval products", e);
    process.exit(1);
}

const baseCount = products.length; // 9
const targetCount = 80;

while (products.length < targetCount) {
    for (let i = 0; i < baseCount && products.length < targetCount; i++) {
        const p = { ...products[i] };
        p.id = p.id + '-' + products.length; // Ensure unique ID
        products.push(p);
    }
}

// Convert back to string
const newProductsStr = JSON.stringify(products, null, 2);

// Reconstruct file
const newContent = content.substring(0, startIndex) + '\n' + newProductsStr + '\n' + content.substring(endIndex);

fs.writeFileSync(dataPath, newContent, 'utf8');
console.log(`Generated ${products.length} products`);
