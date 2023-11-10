const { app } = require('electron');
const fs = require('fs');
const path = require('path');

const dataDir = path.join(app.getPath('userData'), 'orders');

// Function to ensure the directory for storing orders exists
function ensureDataDirExists() {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
  }
}

// Function to create an order
function createOrder(orderId, orderData) {
  const filePath = path.join(dataDir, `${orderId}.txt`);
  fs.writeFile(filePath, orderData, (err) => {
    if (err) throw err;
    console.log('Order has been created.');
  });
}

// Function to read an order
function readOrder(orderId) {
  const filePath = path.join(dataDir, `${orderId}.txt`);
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Order Data:', data);
  });
}

// Function to update an order
function updateOrder(orderId, newOrderData) {
  const filePath = path.join(dataDir, `${orderId}.txt`);
  fs.writeFile(filePath, newOrderData, (err) => {
    if (err) throw err;
    console.log('Order has been updated.');
  });
}

// Function to delete an order
function deleteOrder(orderId) {
  const filePath = path.join(dataDir, `${orderId}.txt`);
  fs.unlink(filePath, (err) => {
    if (err) throw err;
    console.log('Order has been deleted.');
  });
}

// Call the function to ensure the directory exists
ensureDataDirExists();

// Now you can call the CRUD functions based on your application's requirements
