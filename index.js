const productNameField = document.getElementById("product-name");
const productQuantityField = document.getElementById("product-quantity");
// const productQuantityColor =document.getElementById("product-color");
const addProduct = () => {
  const product = productNameField.value;
  const quantity = productQuantityField.value;
  productNameField.value = "";
  productQuantityField.value = "";
  console.log(product, quantity);
  displayProduct(product, quantity);
  saveProductLocalStorage(product, quantity);
};

const displayProduct = (name, number) => {
  const tableData = document.getElementById("table_data");
  const div = document.createElement("div");
  div.classList = `overflow-x-auto max-w-[800px] text-white mx-auto bg-stone-500 mt-10 rounded-lg`;
  div.innerHTML = ` <table class="table">
  <!-- head -->
  <tbody>
    <!-- row 1 -->
    <tr>
      <td>${name}</td>
      <td>${number}</td>
    </tr>
  </tbody>
</table>
</div>`;
  tableData.appendChild(div);
};

const getStoredShoppingCart =()=>{
  let cart ={}
  const storedCart =localStorage.getItem('cart');
  if(storedCart){
    cart=JSON.parse(storedCart);
  }
  return cart
}


const saveProductLocalStorage =(product,quantity)=>{
const cart =getStoredShoppingCart();
cart[product]=quantity;
const cartStringified =JSON.stringify(cart)
localStorage.setItem('cart',cartStringified)
};
const displayProductFromLocalStorage =()=>{
  const saveCart =getStoredShoppingCart();
  console.log(saveCart)
  for(const product in saveCart){
    const quantity=saveCart[product]
    console.log(product,quantity);
    displayProduct(product,quantity)
  }
};
displayProductFromLocalStorage()
// const getStoredShoppingCart = () => {
//   let cart = {};
//   const storedCart = localStorage.getItem("cart");
//   if (storedCart) {
//     cart = JSON.parse(storedCart);
//   }
//   return cart;
// };

// const saveProductLocalStorage = (product, quantity) => {
//   const cart = getStoredShoppingCart();
//   cart[product] = quantity;
//   const cartStringified = JSON.stringify(cart);
//   localStorage.setItem("cart", cartStringified);
// };
// const displayProductFromLocalStorage= ()=>{
//   const saveCart =getStoredShoppingCart();
//   console.log(saveCart)
//   for(const product in saveCart){
//     const quantity =saveCart[product]
//     console.log(product,quantity)
//     displayProduct(product,quantity)
//   }

// }
// displayProductFromLocalStorage()
// const getShoppingCart =()=>{
//     let cart ={};
//     const saveCart =localStorage.getItem('cart');
//     if(saveCart){
//         cart=JSON.parse(saveCart);
//     }
//     return cart
// }

// const saveProductLocalStorage =(product,quantity)=>{
// const cart =getShoppingCart();
// cart[product]=quantity;
// const cartStringified =JSON.stringify(cart);
// localStorage.setItem('cart',cartStringified);
// }
// const getDisplayLocalStorageShoppingCart =()=>{
//     const cartSave =getShoppingCart();
//     console.log(cartSave);
//     for(const product in cartSave){
//         const quantity =cartSave[product];
//         console.log(product.quantity);
//         displayProduct(product,quantity)
//     }
// }
// getDisplayLocalStorageShoppingCart()
// const getStoredShoppingCart =()=>{
//   let cart ={};
//   const storCart =localStorage.getItem('cart');
//   if(storCart){
//    cart= JSON.parse(storCart)
//   }
//   return cart

// }
// const getTotalLocalStorage =(product,quantity,color) =>{
//   const cart = getStoredShoppingCart();
//   cart[product]=quantity,color;
//   const cartStringified =JSON.stringify(cart);
//   localStorage.setItem('cart',cartStringified);
// };
// const displayProductFromLocalStorage = ()=>{
//     const getSaveCart =getStoredShoppingCart();
//     console.log(getSaveCart);
//     for (const product in getSaveCart){
//         const quantity =getSaveCart(product);
//         console.log(product,quantity)
//         handleSearch(product,quantity)
//     }
// };
// displayProductFromLocalStorage()
