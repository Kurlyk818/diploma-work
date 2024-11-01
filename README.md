# About

Fully responsive MERN project (restaurant with order and product management) initialized with Vite, complete with:

- custom designed images 
- easy navigation with react-router-dom
- redux state managemenet 
- functional components
- MongoDB server connection for data
- loading, error, 404 missing pages


![A La Tarantazza main page](https://images2.imgbox.com/8e/89/gj9EAKRf_o.jpg)

# Technologies 

- React (frontend JavaScript library for building user interfaces based on components)
- Node.js (backend JavaScript runtime environment)
- Express.js (backend web application framework for building RESTful APIs with Node.js)
- MongoDB (NoSQL database program)
- CSS (for styling)

# Features

## About Page

- image slider that cycles through banners, featuring the next one every 10 seconds
- banners can be selected through circular buttons and also lateral arrows 

![banner](https://images2.imgbox.com/f1/41/cwdKbO0J_o.jpg)

## Menu

- on hover dropdown menu featuring product types

![menu](https://images2.imgbox.com/8d/46/5NuudE34_o.jpg)

## Products

- product pages with filter by excluding allergen of choice and search by name
- search performed through filtered products, not all, if allergen filter applied
- allergen dropdown list based on products currently displayed on page
- can add to cart from this view if product is in stock
- has button to access view of product details

![products](https://images2.imgbox.com/13/81/zV7lsaoe_o.jpg)

## Product Details

- can see product details
- can add and remove products from cart 
- can only add up to available stock
- can add product to favorites

![product details](https://images2.imgbox.com/72/dc/LBqoCAog_o.jpg)

## Favorites

- favorites page offers a listing of all favorited products
- each has a button to remove them from favorites
- favorites can be sorted by name in ascending or descending order

![favorites](https://images2.imgbox.com/75/8b/WrJFtu3u_o.jpg)

## Admin

- listing of all products with pagination 
- add new product button to make a new product for the database
- update button to change the basic details of existing products
- delete button to remove the product from the database

![admin](https://images2.imgbox.com/7d/90/AcE6P5R4_o.jpg)

### Update

- by clicking update, changing details is available and a save button is displayed 

![add new product](https://images2.imgbox.com/63/3a/iCuuvDXS_o.jpg)

### Add New Product

- can input the details for a new product
- submitting it returns you to the full admin product list with the new product included

![create new product](https://images2.imgbox.com/fc/be/ufoFmfi1_o.jpg)

## Client

- this is a showing of order history

![client - order history](https://images2.imgbox.com/83/05/PZMIquCq_o.jpg)

### Order Details

- selecting to see the details of a specific order 

![order details](https://images2.imgbox.com/51/4e/5I05uNBW_o.jpg)

## Cart

- can view a list of products in cart
- can add, remove products from cart either one by one or a whole batch 
- can view order summary
- variable shipping cost, $20 if products cost is below $100 and free if above
- can add a voucher 
- has a form for client details 
- order now button that places the order
- if products become unavailable while shopping they will be grayed out and shown at the top of the product list

![cart](https://images2.imgbox.com/e9/62/ttmLfd6G_o.jpg)

### Order Completed

![order completed](https://images2.imgbox.com/ad/e5/UBvWKAbg_o.jpg)

## Error, Page Missing

![error message](https://images2.imgbox.com/23/c7/6sa9V5sE_o.jpg)

![page missing](https://images2.imgbox.com/a5/bc/ZhXl2LBV_o.jpg)

## Some Mobile Views

![mobile view 1](https://images2.imgbox.com/65/ee/JeD37sfD_o.jpg)

![mobile view 2](https://images2.imgbox.com/4e/8e/M7ZwXyJ7_o.jpg)

# Setup

## Server side

### Install dependencies

Open the terminal and navigate to the server directory. Once inside, run this command:

```
npm install
```

### Connect to MongoDB

This server runs based on a MongoDB cluster. You need a MongoDB account and available cluster to initialize the database.

Create a .env file in the server directory.

Check out the .env.example file to see how the link to your cluster is recommended to look. Fill out the .env file with this info (can copy paste the example and change the username and password).

### Generate products for restaurant

```
npm run populate
```

### Starting the server

Run the following command in your terminal while inside the server directory:

```
node server
```

To run it with nodemon:

```
npm run dev
```

Your local server should now be running!

## Client side

### Install Dependencies

Open the terminal and navigate to the client directory. Once inside, run this command:

```
npm install
```

### Start client 

From inside the client directory, run this command in the terminal:

```
npm run dev
```

You should see in the terminal that the client has been started at: http://localhost:5173/
You can CTRL + click on the link or copy + paste it in your browser. 

# Credits

- bow icon from flaticon by Nur syifa fauziah
- Quote icon created by Icon Mela - Flaticon
- Heart icon created by Chanut - Flaticon
- LeonardoAi created base product images, image slider banners, error & loading & page missing & order completed images
