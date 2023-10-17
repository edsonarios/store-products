# Full Stack Technical Challenge - Store Products

A comprehensive solution for the management and purchase of products online that meets the technical challenge of designing and developing a product catalog.

## Index

- [Introduction](#introduction)
- [Used technology](#used-technology)
- [BackEnd](#backend)
- [FrontEnd](#frontend)
- [Features](#features)
- [Deploy](#deploy)

## Introduction

This project was developed as a solution to the technical challenge of designing and developing a product catalog with specific characteristics, allowing complete product management.

## Used Technology

### Backend
- Node.js: Runtime platform for server-side JavaScript.
- Express: Framework for web applications based on Node.js.
- MongoDB: Document-oriented NoSQL database.

### Frontend
- Angular: Web platform to build SPA applications.
- PrimeNG - UI component library for Angular.

## BackEnd
For init the Back End project
  ```
  cd back/
  npm install
  npm run dev
  http://localhost:3000/api/products
  ```


## FrontEnd
For init the Front End project
  ```
  cd front/
  npm install
  ng serve
  http://localhost:4200
  ```

## Features

### Backend
- **Node.js & Express**: Used as the execution platform for server-side JavaScript.
- **MongoDB**: Document-oriented NoSQL database to store and manage product information.
- **Product CRUD**: It is allowed to create, read, update and delete products.
- **MVC**: The Model, View, Controller design pattern was followed to structure the backend.
- **Change history**: The database maintains a record of the history of price and stock changes for each product.
- **Pagination**: A pagination system was implemented to display products on the frontend in an organized manner.
- **Filters**: An advanced product search was added that allows you to filter by name, price, rating and categories.
- **Unique tags**: A functionality was implemented to list all product tags without repetitions, facilitating categorization and search.

### Frontend
- **Angular & PrimeNG**: Angular was selected as the main framework and PrimeNG as the UI component library.
- **Product listing**: Products are displayed with image, name, SKU and price. Includes a search engine and pagination options.
- **Product View**: The products are presented in a grid format and also in a list. Additionally, pagination was added for friendlier navigation.
- **Product creation**: A new product can be added to the catalog.
- **Images**: Images of the products are integrated from [fakestoreapi.com](https://fakestoreapi.com/).
- **Filters**: Advanced search filters by name, categories, rating and price were implemented.
- **Product Detail**: Each product has a detail view where more information is shown, its addition to the cart is allowed and availability is reflected with a color-based visual indicator system.
- **Shopping Cart**: Functionalities were added such as adding products, item counter, adding prices and exclusive editing for super users.
- **Product Management**: Functionalities were developed to edit products (with image preview), create new products and delete products with a confirmation system.

## Deploy

### Backend
The backend has been deployed in Render.
Backend access URL: https://api-k0et.onrender.com/api/products

### Frontend
The frontend has been deployed in Vercel.
Frontend access URL: https://store-products-red.vercel.app
