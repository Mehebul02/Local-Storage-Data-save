const productNameField = document.getElementById("product-name");
const productQuantityField =document.getElementById("product-quantity");
const productQuantityColor =document.getElementById("product-color");
const addProduct = () => {
  const product = productNameField.value;
  const quantity = productQuantityField.value;
  const color= productQuantityColor.value;
  productNameField.value=''
  productQuantityField.value=''
  productQuantityColor.value=''
  console.log(product,quantity)
  handleSearch(product,quantity)
  getTotalLocalStorage(product,quantity)
};

const handleSearch=(name,number,color)=>{
  const tableData = document.getElementById('table_data');
  const div = document.createElement('div');
  div.innerHTML =` <table class="table">
  <!-- head -->
  <thead>
    <tr>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <!-- row 1 -->
    <tr>
      <th>1</th>
      <td>${name}</td>
      <td>${number}</td>
      <td>${color}</td>
    </tr>
  </tbody>
</table>
</div>`;
tableData.appendChild(div)
};
const getStoredShoppingCart =()=>{
  let cart ={};
  const storCart =localStorage.getItem('cart');
  if(storCart){
   cart= JSON.parse(storCart)
  }
  return cart

}
const getTotalLocalStorage =(product,quantity,color) =>{
  const cart = getStoredShoppingCart();
  cart[product]=quantity,color;
  const cartStringified =JSON.stringify(cart);
  localStorage.setItem('cart',cartStringified);

}