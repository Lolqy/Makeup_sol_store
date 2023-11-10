// server.js
const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to handle adding items to favorites
app.post('/add-to-favorite', (req, res) => {
  const itemName = req.body.name;
  fs.appendFile('favorites.txt', itemName + '\n', (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error writing to favorites');
    }
    res.send('Item added to favorites');
  });
});

// Endpoint to handle deleting items from favorites
app.delete('/delete-from-favorite', (req, res) => {
    const itemName = req.body.name;
    const filePath = path.join(__dirname, 'favorites.txt');
  
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error reading favorites');
      }
  
      let favorites = data.split('\n').filter(item => item.trim() !== '');
      favorites = favorites.filter(item => item !== itemName);
  
      fs.writeFile(filePath, favorites.join('\n'), err => {
        if (err) {
          console.error(err);
          return res.status(500).send('Error deleting from favorites');
        }
        res.send('Item deleted from favorites');
      });
    });
  });

// Endpoint to handle reading the contents of the favorites.txt file
app.get('/get-favorites', (req, res) => {
  fs.readFile(path.join(__dirname, 'favorites.txt'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error reading favorites');
    }
    const favorites = data.split('\n').filter(item => item.trim() !== '');
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(favorites));
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


// Endpoint to handle updating the quantity of items in favorites
app.post('/update-favorite-quantity', (req, res) => {
    const itemName = req.body.name;
    const itemQuantity = req.body.quantity;
    const filePath = path.join(__dirname, 'favorites.txt');
  
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error reading favorites');
      }
  
      let favorites = data.split('\n').filter(item => item.trim() !== '');
  
      // Remove the previous entry for the item
      favorites = favorites.filter(item => !item.startsWith(itemName));
  
      // Add the updated entry for the item if the quantity is greater than 0
      if (itemQuantity > 0) {
        favorites.push(`${itemName} x${itemQuantity}`);
      }
  
      fs.writeFile(filePath, favorites.join('\n'), err => {
        if (err) {
          console.error(err);
          return res.status(500).send('Error updating favorites');
        }
        res.send('Item quantity updated in favorites');
      });
    });
  });