let cart = [];

function addToCart(productId) {
  const quantity = document.getElementById(`quantity${productId}`).value;
  const product = {
    id: productId,
    quantity: quantity,
    price: getProductPrice(productId)
  };

  cart.push(product);
  updateCart();
}

function updateCart() {
  const cartItemsElement = document.getElementById('cart-items');
  cartItemsElement.innerHTML = '';

  let total = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `製品${item.id} × ${item.quantity} - ¥${item.quantity * item.price}`;
    cartItemsElement.appendChild(li);
    total += item.quantity * item.price;
  });

  document.getElementById('total').textContent = `合計金額: ¥${total}`;
}

function getProductPrice(productId) {
  // 本来は商品IDに基づいて価格を取得する処理を追加する
  switch (productId) {
    case 1:
      return 43900;
    case 2:
      return 928620;
    case 3:
      return 398000;
    default:
      return 0;
  }
}

function checkout() {
  const total = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
  alert(`注文が確定しました。合計金額は¥${total}です。`);
  cart = [];
  updateCart();
}
