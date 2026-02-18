//Get html elements
const sidebarEl = document.querySelector(".sidebar");
const overlayEl = document.querySelector(".overlay");
const hamburgerMenuEl = document.querySelector(".hamburger-menu");
const closeBtn = document.querySelector("#close-sidebar");
const productsContainer = document.getElementById("products-container");
const scrollBtn = document.getElementById("scrollTopBtn");

const filterButtons = document.querySelectorAll(".filter li");
const allProductsBtn = document.querySelector(".all-products");
const accessoriesBtn = document.querySelector(".accessories");
const decorationBtn = document.querySelector(".decoration");
const furnitureBtn = document.querySelector(".furniture");

let products;

function toggleSideMenu() {
  sidebarEl.classList.toggle("active");
  overlayEl.classList.toggle("active");
}

//Handle scroll to top button
scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Add event listener to toggle side menu
hamburgerMenuEl.addEventListener("click", toggleSideMenu);
closeBtn.addEventListener("click", toggleSideMenu);
overlayEl.addEventListener("click", toggleSideMenu);

//Handle active state of filter buttons
function setActiveButton(clickedBtn) {
  filterButtons.forEach((btn) => btn.classList.remove("active"));
  clickedBtn.classList.add("active");
}

//add event listeners to filter buttons
allProductsBtn.addEventListener("click", (e) => {
  setActiveButton(e.target);
  renderProducts(products);
});

accessoriesBtn.addEventListener("click", (e) => {
  setActiveButton(e.target);
  renderProducts(products.filter((p) => p.category === "accessories"));
});

decorationBtn.addEventListener("click", (e) => {
  setActiveButton(e.target);
  renderProducts(products.filter((p) => p.category === "decoration"));
});

furnitureBtn.addEventListener("click", (e) => {
  setActiveButton(e.target);
  renderProducts(products.filter((p) => p.category === "furniture"));
});

// Fetch products from json file

async function fetchProducts() {
  try {
    const response = await fetch("./db.json");
    products = await response.json();

    // renderProducts(products);
    renderProducts(products.filter((product) => product.category === "furniture"));
  } catch (error) {
    console.error("Error loading products:", error);
  }
}

function renderProducts(products) {
  productsContainer.innerHTML = "";

  products.forEach((product) => {
    const productCard = `
      <div class="product">
        <div class="product-media">
          <img src="${product.image}" alt="${product.name}" />
          <div class="product-actions">
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-bag-shopping"></i>
          </div>
        </div>
        <div class="info">
          <h4>${product.name}</h4>
          <p class="price">$${product.price}</p>
        </div>
      </div>
    `;
    productsContainer.innerHTML += productCard;
  });
}

fetchProducts();
