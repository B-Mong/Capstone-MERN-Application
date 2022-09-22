const axios = require('axios')
exports.getProducts = async (req, res) =>{
  await axios(process.env.API_URL + '/products')
  .then((response)=>response.json())
  .then((data)=>{res.json(data)})
  .catch((err)=>{console.log('error at products controller: getProducts(): ' + err)})
}

//test data
let testData = [{id:7, title:"Samsung Galaxy Book", description:"Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched", price:1499, discountPercentage:4.15, rating:4.25, stock:50,brand:"Samsung",category:"laptops",thumbnail:"https://dummyjson.com/image/i/products/7/thumbnail.jpg",images:["https://dummyjson.com/image/i/products/7/1.jpg","https://dummyjson.com/image/i/products/7/2.jpg","https://dummyjson.com/image/i/products/7/3.jpg","https://dummyjson.com/image/i/products/7/thumbnail.jpg"]},
{id:8,title:"Microsoft Surface Laptop 4",description:"Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",price:1499, discountPercentage:10.23,rating:4.43,stock:68,brand:"Microsoft Surface",category:"laptops",thumbnail:"https://dummyjson.com/image/i/products/8/thumbnail.jpg",images:["https://dummyjson.com/image/i/products/8/1.jpg","https://dummyjson.com/image/i/products/8/2.jpg","https://dummyjson.com/image/i/products/8/3.jpg","https://dummyjson.com/image/i/products/8/4.jpg","https://dummyjson.com/image/i/products/8/thumbnail.jpg"]},
{id :10, title: "HP Pavilion 15-DK1056WM", description:"HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10", price:1099, discountPercentage:6.18,rating:4.43,stock:89,brand:"HP Pavilion",category:"laptops",thumbnail:"https://dummyjson.com/image/i/products/10/thumbnail.jpeg",images:["https://dummyjson.com/image/i/products/10/1.jpg","https://dummyjson.com/image/i/products/10/2.jpg","https://dummyjson.com/image/i/products/10/3.jpg","https://dummyjson.com/image/i/products/10/thumbnail.jpeg"]}]