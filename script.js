// =====================================
// AMORAL ZSR RESTAURANT
// Main JavaScript
// =====================================

const navigation = [
  ["Home", "index.html", "home"],
  ["About", "about.html", "about"],
  ["Menu", "menu.html", "menu"],
  ["Gallery", "gallery.html", "gallery"],
  ["Reviews", "reviews.html", "reviews"],
  ["Reservations", "reservation.html", "reservations"],
  ["Location", "location.html", "location"],
  ["Contact", "contact.html", "contact"]
];

const page = document.body.dataset.page || "home";

// =====================================
// HEADER & FOOTER
// =====================================

const headerEl = document.getElementById("header");

if (headerEl) {
  headerEl.innerHTML = `
    <header class="site-header">
      <nav class="navbar">

        <a class="brand" href="index.html">
          <img src="logo.png" alt="Amoral ZSR Logo" class="brand-logo">
          <span class="brand-name">
            AMORAL ZSR
            <small>RESTAURANT</small>
          </span>
        </a>

        <div class="nav-links" id="nav-links">
          ${navigation.map(item => `
            <a href="${item[1]}" class="${page === item[2] ? "active" : ""}">
              ${item[0]}
            </a>
          `).join("")}

          <button class="cart-button" id="open-cart" type="button">
            CART (<span class="cart-count">0</span>)
          </button>
        </div>

        <button class="menu-toggle" id="menu-toggle"
          type="button" aria-label="Open navigation">
          ☰
        </button>

      </nav>
    </header>
  `;
}
const footerEl = document.getElementById("footer");
if (footerEl) {
  footerEl.innerHTML = `
    <footer class="site-footer">
      <div class="footer-grid">
        <div>
          <a class="brand" href="index.html">
            <span class="brand-mark">ZSR</span>
            <span class="brand-name">
              AMORAL ZSR
              <small>RESTAURANT</small>
            </span>
          </a>

          <p style="margin-top:20px;max-width:350px">
            An experience beyond taste. Discover wonderful flavours,
            thoughtful presentation and memorable dining moments.
          </p>
        </div>

        <div>
          <h3>Explore</h3>
          <div class="footer-links">
            <a href="about.html">Our Story</a>
            <a href="menu.html">Our Menu</a>
            <a href="gallery.html">Gallery</a>
            <a href="reviews.html">Reviews</a>
          </div>
        </div>

        <div>
          <h3>Information</h3>
          <div class="footer-links">
            <a href="reservation.html">Reservations</a>
            <a href="location.html">Location</a>
            <a href="contact.html">Contact Us</a>
          </div>
        </div>
      </div>

      <div class="copyright">
        © 2026 AMORAL ZSR RESTAURANT. All Rights Reserved.
      </div>
    </footer>
  `;
}

// =====================================
// MOBILE NAVIGATION
// =====================================

document.getElementById("menu-toggle")?.addEventListener("click", () => {
  document.getElementById("nav-links")?.classList.toggle("show");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("nav-links")?.classList.remove("show");
  });
});

// =====================================
// FOOD MENU DATA
// =====================================

const dishes = [
  {
    id: 1,
    name: "Crispy Veg Spring Rolls",
    category: "Starters",
    price: 180,
    description: "Golden rolls filled with fresh vegetables.",
    image: "https://tse4.mm.bing.net/th/id/OIP.mXDFCHVgsHTG6M_ZmEDJkQHaHa?r=0&w=1024&h=1024&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 2,
    name: "Paneer Tikka",
    category: "Starters",
    price: 240,
    description: "Spiced paneer grilled to perfection.",
    image: "https://thalirtp.com/wp-content/uploads/2022/03/Paneer-Tikka-1.webp"
  },
  {
    id: 3,
    name: "Chicken Lollipop",
    category: "Starters",
    price: 280,
    description: "A flavourful restaurant-style favourite.",
    image: "https://t3.ftcdn.net/jpg/20/00/37/60/360_F_2000376058_EU6iW3opdQSY5fAPaVzXip1HseX5bD1V.jpg"
  },
  {
    id: 4,
    name: "Creamy Alfredo Pasta",
    category: "Main Course",
    price: 320,
    description: "Creamy pasta with herbs and parmesan-style flavour.",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 5,
    name: "Classic Margherita Pizza",
    category: "Main Course",
    price: 350,
    description: "A classic combination of cheese and tomato.",
    image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 6,
    name: "Grilled Chicken",
    category: "Main Course",
    price: 390,
    description: "Seasoned grilled chicken with a rich flavour.",
    image: "https://tse1.mm.bing.net/th/id/OIP.s7nUuHGStmvQhQFBOrBzKQHaHa?r=0&w=1024&h=1024&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 7,
    name: "Classic Hakka Noodles",
    category: "Noodles",
    price: 220,
    description: "Wok-tossed noodles with fresh vegetables.",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 8,
    name: "Schezwan Noodles",
    category: "Noodles",
    price: 250,
    description: "Noodles tossed in a bold Schezwan sauce.",
    image: "https://tse3.mm.bing.net/th/id/OIP.lkE9BbUf055HdlWuA5tz8QHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 9,
    name: "Vegetable Fried Rice",
    category: "Fried Rice",
    price: 210,
    description: "Fluffy rice tossed with seasonal vegetables.",
    image: "https://thewoksoflife.com/wp-content/uploads/2018/11/chinese-sausage-fried-rice-9.jpg"
  },
  {
    id: 10,
    name: "Chicken Fried Rice",
    category: "Fried Rice",
    price: 260,
    description: "A satisfying rice dish with chicken.",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 11,
    name: "Cream of Mushroom Soup",
    category: "Soups",
    price: 160,
    description: "A smooth and comforting mushroom soup.",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 12,
    name: "Sweet Corn Soup",
    category: "Soups",
    price: 140,
    description: "A light soup with sweet corn.",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 13,
    name: "Chocolate Brownie",
    category: "Desserts",
    price: 180,
    description: "A rich chocolate dessert.",
    image: "https://tse2.mm.bing.net/th/id/OIP.1dsPNPzK8AycVmkBK4SzCgHaE7?r=0&w=626&h=417&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 14,
    name: "Classic Cheesecake",
    category: "Desserts",
    price: 220,
    description: "A smooth and creamy dessert slice.",
    image: "https://tse1.mm.bing.net/th/id/OIP.oK0nqMWclIYzDnQj3ANJiAHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 15,
    name: "Fresh Lime Cooler",
    category: "Beverages",
    price: 100,
    description: "A refreshing citrus drink.",
    image: "https://static.vecteezy.com/system/resources/previews/051/738/021/non_2x/delicious-beverage-with-lime-ice-photo.jpg"
  },
  {
    id: 16,
    name: "Cold Coffee",
    category: "Beverages",
    price: 150,
    description: "Chilled coffee with a creamy finish.",
    image: "https://tse2.mm.bing.net/th/id/OIP.JS0kMCN64VlMbHATwMwmMQHaLL?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 17,
    name: "Crispy Corn",
    category: "Starters",
    price: 190,
    description: "Golden sweet corn tossed with herbs and spices.",
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=700"
  },
  {
    id: 18,
    name: "Garlic Bread",
    category: "Starters",
    price: 160,
    description: "Toasted bread with garlic butter and herbs.",
    image: "https://tse1.mm.bing.net/th/id/OIF.grQL5pHX9MPjgX40iryMbQ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 19,
    name: "Cheese Balls",
    category: "Starters",
    price: 220,
    description: "Crispy golden bites with a cheesy centre.",
    image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=700"
  },
  {
    id: 20,
    name: "Chicken 65",
    category: "Starters",
    price: 280,
    description: "Spicy fried chicken with curry leaves.",
    image: "https://tse3.mm.bing.net/th/id/OIP.oTYhQBYoVRxesB14v2JzagHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 21,
    name: "Tandoori Mushroom",
    category: "Starters",
    price: 230,
    description: "Mushrooms marinated with aromatic spices.",
    image: "https://th.bing.com/th/id/OIP.0QSFgF2-u0Tpw5zE7aj2CwHaLH?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 22,
    name: "Tomato Basil Soup",
    category: "Soups",
    price: 150,
    description: "Fresh tomato soup with fragrant basil.",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=700"
  },
  {
    id: 26,
    name: "Paneer Butter Masala",
    category: "Vegetarian Main Course",
    price: 290,
    description: "Paneer cubes in a rich tomato and butter gravy.",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=700"
  },
  {
    id: 27,
    name: "Veg Kadai",
    category: "Vegetarian Main Course",
    price: 250,
    description: "Fresh vegetables cooked with kadai spices.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=700"
  },
  {
    id: 28,
    name: "Dal Makhani",
    category: "Vegetarian Main Course",
    price: 240,
    description: "Slow-cooked black lentils with a creamy finish.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=700"
  },
  {
    id: 30,
    name: "Palak Paneer",
    category: "Vegetarian Main Course",
    price: 270,
    description: "Paneer cooked in a smooth spinach gravy.",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=700"
  },
  {
    id: 31,
    name: "Veg Chettinad Curry",
    category: "Vegetarian Main Course",
    price: 260,
    description: "Vegetables in a traditional spicy curry.",
    image: "https://www.thambiskitchen.co.uk/cdn/shop/files/ChettinadVegCurry.png?v=1699285368&width=1445"
  },
  {
    id: 32,
    name: "Mushroom Masala",
    category: "Vegetarian Main Course",
    price: 260,
    description: "Mushrooms simmered in a rich masala gravy.",
    image: "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?w=700"
  },
  {
    id: 33,
    name: "Butter Naan with Curry",
    category: "Vegetarian Main Course",
    price: 230,
    description: "Soft butter naan served with vegetable curry.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=700"
  },
  {
    id: 34,
    name: "Butter Chicken",
    category: "Non-Vegetarian Main Course",
    price: 350,
    description: "Tender chicken in a buttery tomato gravy.",
    image: "https://www.jocooks.com/wp-content/uploads/2019/07/instant-pot-butter-chicken-1-4.jpg"
  },
  {
    id: 37,
    name: "Chicken Chettinad",
    category: "Non-Vegetarian Main Course",
    price: 340,
    description: "South Indian chicken curry with roasted spices.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=700"
  },
  {
    id: 38,
    name: "Mutton Rogan Josh",
    category: "Non-Vegetarian Main Course",
    price: 430,
    description: "Slow-cooked mutton in an aromatic gravy.",
    image: "https://images.unsplash.com/photo-1545247181-516773cae754?w=700"
  },
  {
    id: 40,
    name: "Grilled Fish",
    category: "Non-Vegetarian Main Course",
    price: 390,
    description: "Seasoned fish grilled and served with herbs.",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=700"
  },
  {
    id: 41,
    name: "Chicken Korma",
    category: "Non-Vegetarian Main Course",
    price: 350,
    description: "Chicken cooked in a mild, creamy sauce.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=700"
  },
  {
    id: 42,
    name: "Prawn Masala",
    category: "Non-Vegetarian Main Course",
    price: 420,
    description: "Juicy prawns cooked in a spiced masala.",
    image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=700"
  },
  {
    id: 43,
    name: "Chicken Roast",
    category: "Non-Vegetarian Main Course",
    price: 370,
    description: "Roasted chicken with a flavourful spice coating.",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=700"
  },
  {
    id: 44,
    name: "Chicken Dum Biryani",
    category: "Biryani & Rice",
    price: 300,
    description: "Fragrant basmati rice layered with spiced chicken.",
    image: "https://tse3.mm.bing.net/th/id/OIP.k9yvwU4Yrucg4HSgtgScoAHaF7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 45,
    name: "Mutton Biryani",
    category: "Biryani & Rice",
    price: 380,
    description: "Aromatic biryani with tender mutton pieces.",
    image: "https://images.news9live.com/wp-content/uploads/2023/09/cropped-Mutton-Yakhni-Pulao.jpeg"
  },
  {
    id: 49,
    name: "Ghee Rice",
    category: "Biryani & Rice",
    price: 190,
    description: "Fragrant rice prepared with aromatic ghee.",
    image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=700"
  },
  {
    id: 53,
    name: "Pesto Pasta",
    category: "Pasta & Italian",
    price: 330,
    description: "Pasta tossed in basil pesto and herbs.",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=700"
  },
  {
    id: 54,
    name: "Mac and Cheese",
    category: "Pasta & Italian",
    price: 290,
    description: "Creamy macaroni with a rich cheese sauce.",
    image: "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?w=700"
  },
  {
    id: 55,
    name: "Lasagna",
    category: "Pasta & Italian",
    price: 360,
    description: "Layered pasta baked with sauce and cheese.",
    image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=700"
  },
  {
    id: 56,
    name: "Mushroom Pasta",
    category: "Pasta & Italian",
    price: 320,
    description: "Pasta with mushrooms in a creamy sauce.",
    image: "https://www.cucinabyelena.com/wp-content/uploads/2025/01/Creamy-Mushroom-Pasta-Recipe-10-1062x1536.jpg"
  },
  {
    id: 57,
    name: "Cheese Ravioli",
    category: "Pasta & Italian",
    price: 350,
    description: "Pasta parcels filled with creamy cheese.",
    image: "https://preppykitchen.com/wp-content/uploads/2024/02/Cheese-Ravioli-Feature.jpeg"
  },
  {
    id: 59,
    name: "Spaghetti Aglio e Olio",
    category: "Pasta & Italian",
    price: 290,
    description: "Spaghetti with garlic, olive oil and herbs.",
    image: "https://theplantbasedschool.com/wp-content/uploads/2025/12/Spaghetti-aglio-e-olio-ready-to-eat-for-a-quick-Mediterranean-style-dinner.jpg"
  },
  {
    id: 61,
    name: "Four Cheese Pizza",
    category: "Pizza",
    price: 420,
    description: "A rich blend of four cheeses on a crisp base.",
    image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=700"
  },
  {
    id: 67,
    name: "Crispy Chicken Burger",
    category: "Burgers & Sandwiches",
    price: 250,
    description: "Crispy chicken with fresh lettuce and sauce.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700"
  },
  {
    id: 70,
    name: "BBQ Chicken Burger",
    category: "Burgers & Sandwiches",
    price: 270,
    description: "Juicy chicken patty with smoky BBQ sauce.",
    image: "https://www.recipesloop.com/wp-content/uploads/2026/04/BBQ-Chicken-Burger-4.jpg"
  },
  {
    id: 71,
    name: "Grilled Cheese Sandwich",
    category: "Burgers & Sandwiches",
    price: 170,
    description: "Toasted bread filled with melted cheese.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=700"
  },
  {
    id: 72,
    name: "Chocolate Lava Cake",
    category: "Desserts",
    price: 220,
    description: "Warm chocolate cake with a soft centre.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700"
  },
  {
    id: 73,
    name: "Tiramisu",
    category: "Desserts",
    price: 260,
    description: "Italian layered dessert with coffee flavour.",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=700"
  },
  {
    id: 75,
    name: "Strawberry Cheesecake",
    category: "Desserts",
    price: 240,
    description: "Creamy cheesecake with strawberry topping.",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=700"
  },
  {
    id: 76,
    name: "Gulab Jamun",
    category: "Desserts",
    price: 130,
    description: "Soft milk dumplings in fragrant sugar syrup.",
    image: "https://tse2.mm.bing.net/th/id/OIP.dluRtowiRWM9gcQXEwIEuAHaG9?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 77,
    name: "Red Velvet Cake",
    category: "Desserts",
    price: 230,
    description: "Soft red velvet sponge with cream frosting.",
    image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=700"
  },
  {
    id: 81,
    name: "Strawberry Smoothie",
    category: "Drinks & Mocktails",
    price: 190,
    description: "Creamy strawberry smoothie.",
    image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=700"
  },
  {
    id: 83,
    name: "Mango Milkshake",
    category: "Drinks & Mocktails",
    price: 180,
    description: "A creamy shake made with mango flavour.",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=700"
  },
  {
    id: 84,
    name: "Virgin Pina Colada",
    category: "Drinks & Mocktails",
    price: 210,
    description: "A tropical pineapple and coconut mocktail.",
    image: "https://celebratingsimply.com/wp-content/uploads/2025/05/Virgin-Pina-Colada.jpg"
  }
];

// =====================================
// CREATE FOOD CARDS & MENU FILTERING
// =====================================

function createFoodCard(dish) {
  return `
    <article class="food-card">
      <img src="${dish.image}" alt="${dish.name}" loading="lazy">
      <div class="food-info">
        <h3>${dish.name}</h3>
        <p>${dish.description}</p>
        <div class="food-bottom">
          <span class="price">₹${dish.price}</span>
          <button type="button" class="add-cart" data-add="${dish.id}">
            + ADD TO CART
          </button>
        </div>
      </div>
    </article>
  `;
}

const featured = document.getElementById("featured-menu");
if (featured) {
  featured.innerHTML = dishes.slice(0, 3).map(createFoodCard).join("");
}

const menuGrid = document.getElementById("menu-grid");
const filterArea = document.getElementById("menu-filters");
const searchInput = document.getElementById("menu-search");

if (menuGrid && filterArea && searchInput) {
  let selectedCategory = "All";

  const categories = [
    "All",
    "Starters",
    "Soups",
    "Main Course",
    "Vegetarian Main Course",
    "Non-Vegetarian Main Course",
    "Biryani & Rice",
    "Pasta & Italian",
    "Pizza",
    "Burgers & Sandwiches",
    "Noodles",
    "Fried Rice",
    "Desserts",
    "Beverages",
    "Drinks & Mocktails"
  ];

  filterArea.innerHTML = categories.map(category => `
    <button type="button" class="filter-btn ${category === "All" ? "active" : ""}" data-category="${category}">
      ${category}
    </button>
  `).join("");

  function displayMenu() {
    const searchTerm = searchInput.value.trim().toLowerCase();

    const filtered = dishes.filter(dish => {
      const matchesCategory = selectedCategory === "All" || dish.category === selectedCategory;
      const matchesSearch =
        dish.name.toLowerCase().includes(searchTerm) ||
        dish.description.toLowerCase().includes(searchTerm);
      return matchesCategory && matchesSearch;
    });

    menuGrid.innerHTML = filtered.length
      ? filtered.map(createFoodCard).join("")
      : "<p>No dishes found. Try another search.</p>";
  }

  filterArea.addEventListener("click", event => {
    const button = event.target.closest("[data-category]");
    if (!button) return;

    selectedCategory = button.dataset.category;
    document.querySelectorAll(".filter-btn").forEach(btn => {
      btn.classList.toggle("active", btn === button);
    });
    displayMenu();
  });

  searchInput.addEventListener("input", displayMenu);
  displayMenu();
}

// =====================================
// CART, CHECKOUT & ORDER SYSTEM
// =====================================

let cart = [];
try {
  cart = JSON.parse(localStorage.getItem("amoralZsrCart")) || [];
} catch {
  cart = [];
}

document.body.insertAdjacentHTML("beforeend", `
  <div class="cart-overlay" id="azsr-cart">
    <div class="cart-panel">
      <button class="cart-close" id="azsr-close-cart" type="button">×</button>
      <h2>Your Shopping Cart</h2>
      <div id="azsr-cart-items"></div>
      <div class="cart-summary">
        <h3>Total: <span id="azsr-cart-total">₹0</span></h3>
        <button id="azsr-checkout" class="order-btn" type="button">PROCEED TO ORDER</button>
        <button id="azsr-clear" class="clear-btn" type="button">CLEAR CART</button>
      </div>
    </div>
  </div>

  <div class="cart-overlay" id="azsr-checkout-window">
    <div class="checkout-box">
      <button class="cart-close" id="azsr-close-checkout" type="button">×</button>
      <h2>Complete Your Order</h2>
      <form id="azsr-order-form">
        <input id="azsr-name" type="text" placeholder="Full Name" required>
        <input id="azsr-phone" type="tel" placeholder="10-digit Phone Number" pattern="[0-9]{10}" required>
        <textarea id="azsr-address" placeholder="Delivery Address" required></textarea>
        <select id="azsr-payment" required>
          <option value="">Choose Payment Method</option>
          <option value="Cash on Delivery">Cash on Delivery</option>
          <option value="Online Payment (Demo)">Online Payment (Demo)</option>
        </select>
        <button class="order-btn" type="submit">PLACE ORDER</button>
      </form>
    </div>
  </div>

  <div class="cart-overlay" id="azsr-success">
    <div class="success-box">
      <div class="success-icon">✓</div>
      <h2>Order Successful!</h2>
      <p>Thank you for choosing AMORAL ZSR.</p>
      <p>Order ID: <strong id="azsr-order-id"></strong></p>
      <h3 id="azsr-success-total"></h3>
      <button class="order-btn" id="azsr-finish" type="button">CONTINUE</button>
    </div>
  </div>
`);

const cartWindow = document.getElementById("azsr-cart");
const checkoutWindow = document.getElementById("azsr-checkout-window");
const successWindow = document.getElementById("azsr-success");

function saveCart() {
  localStorage.setItem("amoralZsrCart", JSON.stringify(cart));
  updateCart();
}

function addToCart(id) {
  const dish = dishes.find(item => item.id === Number(id));
  if (!dish) return;

  const existing = cart.find(item => item.id === dish.id);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...dish, quantity: 1 });
  }

  saveCart();
}

function changeQuantity(id, amount) {
  const item = cart.find(entry => entry.id === Number(id));
  if (!item) return;

  item.quantity += amount;
  if (item.quantity <= 0) {
    cart = cart.filter(entry => entry.id !== Number(id));
  }

  saveCart();
}

function deleteCartItem(id) {
  cart = cart.filter(entry => entry.id !== Number(id));
  saveCart();
}

function clearCart() {
  if (!cart.length) {
    alert("Your cart is already empty.");
    return;
  }
  if (confirm("Are you sure you want to clear your cart?")) {
    cart = [];
    saveCart();
  }
}

function updateCart() {
  const itemsArea = document.getElementById("azsr-cart-items");
  const totalArea = document.getElementById("azsr-cart-total");

  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll(".cart-count").forEach(el => {
    el.textContent = count;
  });

  if (!itemsArea || !totalArea) return;

  if (!cart.length) {
    itemsArea.innerHTML = "<p>Your cart is empty.</p>";
    totalArea.textContent = "₹0";
    return;
  }

  itemsArea.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <p>₹${item.price} each</p>
        <div class="quantity-controls">
          <button type="button" data-cart-action="minus" data-id="${item.id}">−</button>
          <span>${item.quantity}</span>
          <button type="button" data-cart-action="plus" data-id="${item.id}">+</button>
        </div>
      </div>
      <div>
        <strong>₹${item.price * item.quantity}</strong>
        <button type="button" class="delete-item" data-cart-action="delete" data-id="${item.id}">Delete</button>
      </div>
    </div>
  `).join("");

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  totalArea.textContent = "₹" + total;
}

document.addEventListener("click", event => {
  const addButton = event.target.closest("[data-add]");
  if (addButton) {
    event.preventDefault();
    addToCart(addButton.dataset.add);
    addButton.textContent = "ADDED ✓";
    setTimeout(() => {
      addButton.textContent = "+ ADD TO CART";
    }, 1000);
    return;
  }

  const actionButton = event.target.closest("[data-cart-action]");
  if (actionButton) {
    const id = Number(actionButton.dataset.id);
    const action = actionButton.dataset.cartAction;
    if (action === "plus") changeQuantity(id, 1);
    if (action === "minus") changeQuantity(id, -1);
    if (action === "delete") deleteCartItem(id);
  }
});

document.getElementById("open-cart")?.addEventListener("click", () => {
  updateCart();
  cartWindow?.classList.add("open");
});

document.getElementById("azsr-close-cart")?.addEventListener("click", () => {
  cartWindow?.classList.remove("open");
});

document.getElementById("azsr-clear")?.addEventListener("click", clearCart);

document.getElementById("azsr-checkout")?.addEventListener("click", () => {
  if (!cart.length) {
    alert("Please add food to your cart first!");
    return;
  }
  cartWindow?.classList.remove("open");
  checkoutWindow?.classList.add("open");
});

document.getElementById("azsr-close-checkout")?.addEventListener("click", () => {
  checkoutWindow?.classList.remove("open");
});

document.getElementById("azsr-order-form")?.addEventListener("submit", event => {
  event.preventDefault();
  if (!cart.length) {
    alert("Your cart is empty!");
    return;
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const orderId = "AZSR" + Date.now().toString().slice(-7);

  const order = {
    orderId,
    customer: document.getElementById("azsr-name").value.trim(),
    phone: document.getElementById("azsr-phone").value.trim(),
    address: document.getElementById("azsr-address").value.trim(),
    payment: document.getElementById("azsr-payment").value,
    items: cart.map(item => ({ ...item })),
    total,
    date: new Date().toLocaleString()
  };

  let orders = [];
  try {
    orders = JSON.parse(localStorage.getItem("amoralZsrOrders")) || [];
  } catch {
    orders = [];
  }

  orders.push(order);
  localStorage.setItem("amoralZsrOrders", JSON.stringify(orders));

  document.getElementById("azsr-order-id").textContent = orderId;
  document.getElementById("azsr-success-total").textContent = "Order Total: ₹" + total;

  cart = [];
  saveCart();

  event.target.reset();
  checkoutWindow?.classList.remove("open");
  successWindow?.classList.add("open");
});

document.getElementById("azsr-finish")?.addEventListener("click", () => {
  successWindow?.classList.remove("open");
});

[cartWindow, checkoutWindow, successWindow].forEach(windowElement => {
  windowElement?.addEventListener("click", event => {
    if (event.target === windowElement) {
      windowElement.classList.remove("open");
    }
  });
});

updateCart();