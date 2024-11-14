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

const convertFirstLetterOfStringValueToUpperCase = (string) => {
  let [firstLetter, ...rest] = string;
  let capitalizeFirstLetter = firstLetter.toUpperCase();
  let result = [capitalizeFirstLetter, ...rest].join("");

  return result;
};

// a. Only write a <ul> element in your HTML document with an id
// b. Get the <ul> element using getElementById
const displayMenuItemsUlElement = document.getElementById('display_menu');

const all = 'All Dishes';
const vegetarian = 'vegetarian';
const meat = 'meat';

const allDishes = menuDatabase.map(dish => dish);

const vegetarianDishes = menuDatabase
  .filter(dish => dish[2] === vegetarian)
  .map(dish => dish);

const meatDishes = menuDatabase
  .filter(dish => dish[2] === meat)
  .map(dish => dish);

const createMenuCard = (dish) => {
  // d. In each iteration create a <li> element
  const menuItemList = document.createElement("li");
  menuItemList.classList.add("menu_item_list");

  // e. Create an <img> element for the product image, and 3 <p> elements for product name, price and category (using createElement).
  // f. Attach these 4 elements to the <li> created before
  menuItemList.innerHTML += `
        <img src="${dish[3]}" height="200px" width="300px" alt="${dish[0]}" loading="lazy">
        <p>${dish[0]}</p>
        <p>${dish[1]}</p>
        <p>${dish[2]}</p>
    `;

  return menuItemList;
};

const displayAllDishes = (menu) => {
  displayMenuItemsUlElement.classList.add("fade-out");

  setTimeout(() => {
    displayMenuItemsUlElement.innerHTML = "";

    // c. Use any type of the for loops you think might work to loop through the database (attached in next slide).
    for (const dish of menu) {
      // g. Attach the <li> to the <ul> element
      displayMenuItemsUlElement.appendChild(createMenuCard(dish));
    }

    displayMenuItemsUlElement.offsetHeight;
    displayMenuItemsUlElement.classList.remove("fade-out");
    displayMenuItemsUlElement.classList.add("fade-in");
  }, 500);
};

displayAllDishes(allDishes);

// h. Create a ‘vegetarian’ and ‘meat’ button that filters the products on the page.
const mainElement = document.querySelector('main');

const filterDishCategorySection = document.createElement('section');
filterDishCategorySection.classList.add('filter_dish_category_section');
mainElement.appendChild(filterDishCategorySection);

const allDishesButton = document.createElement('button');
const vegetarianButton = document.createElement('button');
const meatButton = document.createElement('button');

filterDishCategorySection.appendChild(allDishesButton);
filterDishCategorySection.appendChild(vegetarianButton);
filterDishCategorySection.appendChild(meatButton);

allDishesButton.textContent = all;
vegetarianButton.textContent = convertFirstLetterOfStringValueToUpperCase(vegetarian);
meatButton.textContent = convertFirstLetterOfStringValueToUpperCase(meat);

const onClickDisplayAllDishes = () => {
  displayAllDishes(allDishes);
};

const onClickHandlerDisplayVegetarianDishes = () => {
  displayAllDishes(vegetarianDishes);
};

const onClickHandlerDisplayMeatDishes = () => {
  displayAllDishes(meatDishes);
};

allDishesButton.addEventListener("click", () => { onClickDisplayAllDishes(); });
vegetarianButton.addEventListener("click", () => { onClickHandlerDisplayVegetarianDishes(); });
meatButton.addEventListener("click", () => { onClickHandlerDisplayMeatDishes(); });
