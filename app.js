// Variables
const cartBtn = document.querySelector('.cart-btn');
const closeCartBtn = document.querySelector(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDom = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDom = document.querySelector(".products-center");

// cart
let cart = [];

// getting the products
class Products{

}
// display products
class UI {
async getProducts(){
 try{
  let result = await fetch("products.json");
  let data = await result.json();

  let products = data.items;
  products = products.map(item =>{
      const { title, price } = item.fields;
      const { id } = item.sys;
      const image = item.fields.image.fields.file.url;

      return {title, price, id,image}
  })
  return products
 } catch (error){
  console.log(error);
 }
}
}

// local storage
class Storage{

}
document.addEventListener("DOMContentLoaded", ()=> {
 const ui = new ui();
 const products = new Products();
})