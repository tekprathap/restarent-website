// Toggle menu
let menus = document.querySelector("#menus");
let ul_list = document.querySelector('.ul_list');

menus.addEventListener("click", () => {
  ul_list.classList.toggle('showme');
});

// Cart Sidebar Toggle
let ADDCARD = document.querySelector("#ADDCARD");
let cart_sidebaractie = document.querySelector('.cart-sidebar');
let closecard = document.querySelector("#closecard");

ADDCARD.addEventListener('click', () => {
  cart_sidebaractie.classList.add('cartactiv');
});
closecard.addEventListener('click', () => {
  cart_sidebaractie.classList.remove('cartactiv');
});

// Slider Images
const images = [
  'https://opencart.templatetrip.com/OPC07/OPC202_tomato/OPC01/image/cache/catalog/demo/banners/slider-01-1903x950.jpg',
  'https://opencart.templatetrip.com/OPC07/OPC202_tomato/OPC01/image/cache/catalog/demo/banners/slider-02-1903x950.jpg',
  'https://opencart.templatetrip.com/OPC07/OPC202_tomato/OPC01/image/cache/catalog/demo/banners/slider-01-1903x950.jpg'
];

let index = 0;
const slider = document.getElementById('slider');
const lefrslider = document.querySelector('.prev');

function changeBackground() {
  slider.style.backgroundImage = `url('${images[index]}')`;
  index = (index + 1) % images.length;
}
changeBackground();

lefrslider.addEventListener('click', () => {
  index = (index - 1 + images.length) % images.length;
  changeBackground();
});

// Product Items
const restaurantItems = [
  {
    id: 1,
    name: "Veg Burger",
    category: "Fast Food",
    price: 99,
    image: "https://farm8.staticflickr.com/7526/16209855621_825570e2cc_o.jpg",
    rating: 4.5
  },
  {
    id: 2,
    name: "Paneer Pizza",
    category: "Fast Food",
    price: 199,
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Supreme_pizza.jpg",
    rating: 4.7
  },
  {
    id: 3,
    name: "Masala Dosa",
    category: "South Indian",
    price: 89,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV__-3abmbiyCo3JjXlzLESUd_jmvbgQ62Rw&s",
    rating: 4.6
  },
  {
    id: 4,
    name: "Chicken Biryani",
    category: "Main Course",
    price: 229,
    image: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg",
    rating: 4.8
  },
  {
    id: 5,
    name: "Pav Bhaji",
    category: "Street Food",
    price: 120,
    image: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Instant-Pot-Mumbai-Pav-Bhaji-Recipe.jpg",
    rating: 4.4
  },
  {
    id: 6,
    name: "Chole Bhature",
    category: "North Indian",
    price: 130,
    image: "https://cdn.zeptonow.com/production///tr:w-600,ar-100-100,pr-true,f-auto,q-80/web/recipes/chola-bhatura.png",
    rating: 4.6
  },
  {
    id: 7,
    name: "Hakka Noodles",
    category: "Chinese",
    price: 150,
    image: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/06/Spicy-Chicken-Hakka-Noodles-Recipe.jpg",
    rating: 4.3
  },
  {
    id: 8,
    name: "Butter Naan",
    category: "Bread",
    price: 45,
    image: "https://static.vecteezy.com/system/resources/previews/039/002/677/non_2x/ai-generated-indian-naan-bread-with-garlic-butter-on-wooden-table-photo.jpg",
    rating: 4.2
  },
  {
    id: 9,
    name: "paneer butter masala",
    category: "Dessert",
    price: 60,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQRQMKHs5qBBmBwVN6e7UTPlt3PpK2c6T8XA&s",
    rating: 4.9
  },
  {
    id: 10,
    name: "Falooda",
    category: "Dessert",
    price: 110,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmPRGNpJ4IbBVtPawPSD2r2mHDs3lyOfUiWOHEpFY1tN4AQvKeZy2Qwk8OGo5Hy9yGy-4&usqp=CAU",
    rating: 4.7
  }
];


const productGrid = document.querySelector('.product-grid');
const searchInput = document.getElementById('searchInput');

function displayItems(items) {
  productGrid.innerHTML = items.map(item => `
    <div class="menu">
      <div class="menuimage">
        <img src="${item.image}" alt="${item.name}" class="imgSrc">
      </div>
      <div class="detailpriceNegativeMediumSpace">
        <h1 class="menuname">${item.name}</h1>
        <h2 class="menuprice">₹${item.price}</h2>
        <div class="menurating">⭐ ${item.rating} / 5</div>
      </div>
      <button class="imgmenu" data-name="${item.name}" data-price="${item.price}" data-image="${item.image}">
        <i class="fas fa-heart"></i>
      </button>
      <button onclick="myFunction('${item.name}', '${item.image}', ${item.price})">
        <i class="fas fa-eye"></i>
      </button>
    </div>
  `).join('');

  document.querySelectorAll('.imgmenu').forEach(btn => {
    btn.addEventListener('click', cardadd);
  });
}

displayItems(restaurantItems);

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const filteredItems = restaurantItems.filter(item =>
    item.name.toLowerCase().includes(query)
  );
  displayItems(filteredItems);
});

let itemList = [];

function cardadd(event) {
  let button = event.currentTarget;
  let menunameitem = button.getAttribute("data-name");
  let menupriceitem = parseInt(button.getAttribute("data-price"));
  let imgSrc = button.getAttribute("data-image");

  // Check if item is already in cart
  if (itemList.some(item => item.menunameitem === menunameitem)) {
    alert("Product already in cart");
    return;
  }

  itemList.push({
    menunameitem,
    menupriceitem,
    imgSrc,
    quantity: 1
  });

  updatecard();
}

function updatecard() {
  const cartContent = document.querySelector(".cart-items");
  if (!cartContent) return;

  cartContent.innerHTML = itemList.map((item, index) => `
    <div class="cart-item">
      <img src="${item.imgSrc}" alt="${item.menunameitem}" />
      <div class="cart-item-details">
        <div class="cart-item-title">${item.menunameitem}</div>
        <div class="quantity-control">
          <button onclick="updateQty(${index}, -1)">−</button>
          <span>${item.quantity}</span>
          <button onclick="updateQty(${index}, 1)">+</button>
        </div>
      </div>
      <div class="cart-price">₹${item.menupriceitem * item.quantity}</div>
      <button class="cart-remove" onclick="removeItem(${index})">🗑</button>
    </div>
  `).join("");

  updateTotal();
  updateBuyButtonVisibility();
}

function updateQty(index, delta) {
  if (itemList[index].quantity + delta <= 0) {
    return;
  }
  itemList[index].quantity += delta;
  updatecard();
}

function removeItem(index) {
  itemList.splice(index, 1);
  updatecard();
}

function updateTotal() {
  // Calculate total from updated price key and quantity
  const total = itemList.reduce((acc, item) => acc + (item.menupriceitem * item.quantity), 0);

  // Update the total display
  const totalElement = document.querySelector(".cart-total");
  if (totalElement) {
    totalElement.textContent = `Total: ₹${total}`;
  }

  // Update each item's individual total price
  document.querySelectorAll(".cart-price").forEach((element, index) => {
    if (itemList[index]) {
      element.textContent = `₹${itemList[index].menupriceitem * itemList[index].quantity}`;
    }
  });
}



function updateBuyButtonVisibility() {
  const buyButton = document.querySelector(".buy-button");
  if (itemList.length > 0) {
    buyButton.classList.add("visible");
  } else {
    buyButton.classList.remove("visible");
  }
}






// Popup Detail View
function myFunction(name, image, price) {
  const newWindow = window.open("", "_blank");
  if (!newWindow) {
    alert("Popup blocked! Please allow popups for this site.");
    return;
  }

  newWindow.document.write(`
    <html>
    <head>
      <title>${name}</title>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Segoe UI', sans-serif; }
        body { background: #f8f8f8; padding: 20px; }
        .container { display: flex; flex-wrap: wrap; gap: 40px; background: #fff; border-radius: 15px; box-shadow: 0 0 10px rgba(0,0,0,0.1); padding: 20px; }
        .image-section { flex: 1; min-width: 300px; text-align: center; }
        .image-section img { max-width: 100%; border-radius: 10px; }
        .details-section { flex: 1; min-width: 300px; }
        .details-section h1 { font-size: 28px; margin-bottom: 10px; }
        .price { font-size: 24px; color: #333; margin: 5px 0; }
        .stock { color: red; margin-bottom: 10px; }
        .rating span { font-size: 14px; margin-left: 8px; color: #666; }
        .description { margin: 15px 0; color: #555; }
        .quantity-control { display: flex; align-items: center; gap: 10px; margin-bottom: 20px; }
        .quantity-control button { padding: 8px 12px; border: none; border-radius: 6px; background: orange; color: #fff; cursor: pointer; }
        .quantity-control input { width: 50px; padding: 5px; text-align: center; }
        .buy-now { background: orangered; color: white; padding: 10px 20px; border: none; border-radius: 6px; cursor: pointer; }
        .meta p { margin: 5px 0; color: #444; }
        @media (max-width: 768px) { .container { flex-direction: column; } }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="image-section">
          <img src="${image}" alt="${name}" />
        </div>
        <div class="details-section">
          <h1>${name}</h1>
          <p class="price">₹<span id="price-display">${price}</span></p>
          <p class="stock">In Stock</p>
          <div class="rating">⭐⭐⭐⭐⭐ <span>2 REVIEWS</span></div>
          <p class="description">Lorem ipsum dolor sit amet consectetur. Egestas auctor hac nisi nulla scelerisque nunc volutpat diam.</p>
          <div class="quantity-control">
            <button id="decreaseBtn">-</button>
            <input type="number" id="quantityInput" value="1" min="1" />
            <button id="increaseBtn">+</button>
          </div>
          <button class="buy-now" onclick="addToCart()">Buy Now</button>
          <div class="meta">
            <p><strong>SKU:</strong> AU-0987</p>
            <p><strong>Category:</strong> Food</p>
            <p><strong>Tags:</strong> #Food #Special</p>
          </div>
        </div>
      </div>

      <script>
        let quantityInput = document.getElementById('quantityInput');
        let priceDisplay = document.getElementById('price-display');
        const pricePerItem = ${price};

        document.getElementById('increaseBtn').addEventListener('click', () => {
          quantityInput.value = parseInt(quantityInput.value) + 1;
          updatePrice();
        });

        document.getElementById('decreaseBtn').addEventListener('click', () => {
          if (parseInt(quantityInput.value) > 1) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
            updatePrice();
          }
        });

        quantityInput.addEventListener('change', updatePrice);

        function updatePrice() {
          let qty = parseInt(quantityInput.value);
          if (isNaN(qty) || qty < 1) qty = 1;
          quantityInput.value = qty;
          priceDisplay.innerText = pricePerItem * qty;
        }

        function addToCart() {
          const qty = parseInt(quantityInput.value);
          if (window.opener && window.opener.cardadd) {
            const mockEvent = {
              currentTarget: {
                getAttribute: (attr) => {
                  if (attr === 'data-name') return '${name}';
                  if (attr === 'data-price') return '${price}';
                  if (attr === 'data-image') return '${image}';
                }
              }
            };
            for (let i = 0; i < qty; i++) {
              window.opener.cardadd(mockEvent);
            }
            alert('Item(s) added to cart!');
          } else {
            alert('Cannot access parent window!');
          }
        }
      </script>
    </body>
    </html>
  `);

  newWindow.document.close();
}

 