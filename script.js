console.log("Week 8 - JS - Loops (array) - Homework");

// Database
// const menuDatabase = [
// [ "Papadum", 20, "vegetarian",
// "https://www.shutterstock.com/image-photo/deep-fried-khichiya-papad-traditional-260nw-1076490656.jpg",
// ],
// [
// "Pakora", 50, "meat",
// "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/vegetable-pakora-recipe.jpg",
// ],
// [
// "Tandoori Chicken", 60, "meat",
// "https://www.cubesnjuliennes.com/wp-content/uploads/2022/12/Tandoori-Chicken-Recipe.jpg",
// ],
// [
// "Samosa", 50, "vegetarian",
// "https://img.mummum.dk/wp-content/uploads/2022/03/IMG_9814-min.jpg",
// ],
// ];

// Now we need to go back and practice some DOM manipulation with JavaScript.
// The idea is to use the powers of loops and arrays to build our website from a database.
// The pseudocode for this task would look something like:

// a. Only write a <ul> element in your HTML document with an id
// b. Get the <ul> element using getElementById
// c. Use any type of the for loops you think might work to loop through the database (attached in next slide).
// d. In each iteration create a <li> element
// e. Create an <img> element for the product image, and 3 <p> elements for product name, price and category (using createElement).
// f. Attach these 4 elements to the <li> created before
// g. Attach the <li> to the <ul> element
// h. Create a ‘vegetarian’ and ‘meat’ button that filters the products on the page.

// ---------------------------------

const menuDatabase = [
  ["Papadum", 20, "vegetarian",
    "https://www.shutterstock.com/image-photo/deep-fried-khichiya-papad-traditional-260nw-1076490656.jpg",
  ],
  [
    "Pakora", 50, "meat",
    "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/vegetable-pakora-recipe.jpg",
  ],
  [
    "Tandoori Chicken", 60, "meat",
    "https://www.cubesnjuliennes.com/wp-content/uploads/2022/12/Tandoori-Chicken-Recipe.jpg",
  ],
  [
    "Samosa", 50, "vegetarian",
    // The following image link is broken
    // "https://img.mummum.dk/wp-content/uploads/2022/03/IMG_9814-min.jpg",
    "https://www.cookwithnabeela.com/wp-content/uploads/2024/02/AlooSamosa3.webp",
  ]
];

// a. Only write a <ul> element in your HTML document with an id
// b. Get the <ul> element using getElementById
const displayMenuItemsUlElement = document.getElementById('display_menu_items');

// c. Use any type of the for loops you think might work to loop through the database (attached in next slide).

for (const menuItem of menuDatabase) {
  const [menuItemName, menuItemPrice, menuItemCategory, menuItemImage] = menuItem;

  // d. In each iteration create a <li> element

  const menuItemliElement = document.createElement('li');

  // e. Create an <img> element for the product image, and 3 <p> elements for product name, price and category (using createElement).

  const menuItemImageElement = document.createElement('img');
  menuItemImageElement.setAttribute('height', '200px');
  menuItemImageElement.setAttribute('width', '300px');
  menuItemImageElement.setAttribute('alt', 'Dish image');

  const menuItemNamePElement = document.createElement('p');
  const menuItemPricePElement = document.createElement('p');
  const menuItemCategoryPElement = document.createElement('p');

  // f. Attach these 4 elements to the <li> created before

  menuItemliElement.appendChild(menuItemNamePElement);
  menuItemliElement.appendChild(menuItemPricePElement);
  menuItemliElement.appendChild(menuItemCategoryPElement);
  menuItemliElement.appendChild(menuItemImageElement);

  // g. Attach the <li> to the <ul> element

  displayMenuItemsUlElement.appendChild(menuItemliElement);


  console.log(`menuItemName: ${menuItemName} - menuItemPrice: ${menuItemPrice} - menuItemCategory: ${menuItemCategory} - menuItemImage: ${menuItemImage}`);

  menuItemNamePElement.textContent = menuItemName;
  menuItemPricePElement.textContent = menuItemPrice;
  menuItemCategoryPElement.textContent = menuItemCategory;

  menuItemImageElement.src = menuItemImage;
}

// TODO
// h. Create a ‘vegetarian’ and ‘meat’ button that filters the products on the page.
