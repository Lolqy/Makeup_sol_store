/*function buttonClicked() {
  var makeup = document.getElementById("makeup_input").value;
  

  fetch( `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${makeup}`)
    .then((response) => response.json())
    .then((data) => {
      // Check if there is at least one item in the response.
      if (data.length > 0) {
        data.forEach(data => {
          var firstItem = data; // Select the first item in the array.

        var brand = firstItem.brand;
        var name = firstItem.name;
        var itemType = firstItem.product_type;
        var img = firstItem.image_link;
        //var tags = firstItem.tag_list;

        document.getElementById("display").innerHTML += `Brand: ${brand} <br> Name: ${name} <br> Type: ${itemType} <br> Image: <img src='${img}'>` ;
      
          
        });
        } else {
        document.getElementById("display").innerHTML = "No items found.";
      }
    });
}*/

// api1.js
/*
function buttonClicked() {
  var makeup = document.getElementById("makeup_input").value;

  fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${makeup}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.length > 0) {
        var displayContainer = document.getElementById("display");
        displayContainer.innerHTML = ""; // Clear previous search results

        var gridContainer = document.createElement("div");
        gridContainer.classList.add("grid-container");

        data.forEach((item) => {
          var brand = item.brand;
          var name = item.name;
          var itemType = item.product_type;
          var img = item.image_link;

          var gridItem = document.createElement("div");
          gridItem.classList.add("grid-item");

          gridItem.innerHTML = `
            <img src='${img}' alt='${name}'>
            <p>Brand: ${brand}</p>
            <p>Name: ${name}</p>
            <p>Type: ${itemType}</p>
            
          `;

          gridContainer.appendChild(gridItem);
        });

        displayContainer.appendChild(gridContainer);
      } else {
        document.getElementById("display").innerHTML = "No items found.";
      }
    });
} */

// api1.js

// api1.js

// api1.js

// api1.js

/*document.addEventListener('DOMContentLoaded', function() {
  const makeupBrand = "maybelline"; // Specify the brand you want to display

  // Function to fetch all products for the "maybelline" brand
  function fetchAllMaybellineProducts() {
    fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${makeupBrand}`)
      .then((response) => response.json())
      .then((data) => displayProducts(data));
  }

  // Function to fetch products based on user input
  document.getElementById("submitBtn").addEventListener("click", function() {
    var type = document.getElementById("type_input").value;

    fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${makeupBrand}&product_type=${type}`)
      .then((response) => response.json())
      .then((data) => displayProducts(data));
  });

  // Function to display products
  function displayProducts(data) {
    var displayContainer = document.getElementById("display");
    displayContainer.innerHTML = ""; // Clear previous search results

    if (data.length > 0) {
      var gridContainer = document.createElement("div");
      gridContainer.classList.add("grid-container");

      data.forEach((item) => {
        var brand = item.brand;
        var name = item.name;
        var itemType = item.product_type;
        var img = item.image_link;

        var gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");

        gridItem.innerHTML = `
          <img src='${img}' alt='${name}'>
          <p>Brand: ${brand}</p>
          <p>Name: ${name}</p>
          <p>Type: ${itemType}</p>
        `;

        gridContainer.appendChild(gridItem);
      });

      displayContainer.appendChild(gridContainer);
    } else {
      displayContainer.innerHTML = "No items found.";
    }
  }

  // Fetch all products for "maybelline" on page load
  fetchAllMaybellineProducts();
}); */

// api1.js
document.addEventListener("DOMContentLoaded", function () {
  const makeupBrand = "maybelline"; // Specify the brand you want to display

  // Function to fetch all products for the "maybelline" brand
  function fetchAllMaybellineProducts() {
    fetch(
      `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${makeupBrand}`
    )
      .then((response) => response.json())
      .then((data) => displayProducts(data));
  }

  // Function to fetch products based on user input
  document.getElementById("submitBtn").addEventListener("click", function () {
    var type = document.getElementById("type_input").value;

    fetch(
      `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${makeupBrand}&product_type=${type}`
    )
      .then((response) => response.json())
      .then((data) => displayProducts(data));
  });

  // Function to display products
  function displayProducts(data) {
    var displayContainer = document.getElementById("display");
    displayContainer.innerHTML = ""; // Clear previous search results

    if (data.length > 0) {
      var gridContainer = document.createElement("div");
      gridContainer.classList.add("grid-container");

      data.forEach((item) => {
        var brand = item.brand;
        var name = item.name;
        var itemType = item.product_type;
        var img = item.image_link;

        var gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");

        gridItem.innerHTML = `
          <div class="grid-item-content">
            <img src='${img}' alt='${name}'>
            <p>Brand: ${brand}</p>
            <p>Name: ${name}</p>
            <p>Type: ${itemType}</p>
            <button onclick="addToFavorites('${name}')" class="add-to-favorite-btn">Add to Favorite</button>
          </div>
        `;

        gridContainer.appendChild(gridItem);
      });

      displayContainer.appendChild(gridContainer);
    } else {
      displayContainer.innerHTML = "No items found.";
    }
  }

  // Fetch all products for "maybelline" on page load
  fetchAllMaybellineProducts();
});

// Function to add the item to favorites
function addToFavorites(name) {
  fetch('http://localhost:3000/add-to-favorite', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then((data) => console.log(data))
    .catch((error) => console.error('Error:', error));
}





