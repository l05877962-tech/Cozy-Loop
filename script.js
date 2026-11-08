const products = [
  { id: "blanket-boucle-cream", section: "soft", name: "بطانية بوكلية كريمية", description: "ملمس بوكلية غيمة، لليالي الشتاء الهادئة.", price: 289, image: "IMG_0204 4.jpg", alt: "بطانية بوكليه كريمية ناعمة", badge: "Best Seller" },
  { id: "blanket-boucle-pink", section: "soft", name: "بطانية بوكلية وردية", description: "وردي ناعم يضيف لمسة حب ودفء.", price: 289, image: "IMG_0204 3.jpg", alt: "بطانية وردية ناعمة على كرسي", badge: "Cozy Favorite" },
  { id: "blanket-crochet-peach", section: "soft", name: "بطانية كروشيه مشمشية", description: "حياكة يدوية بتفاصيل دافئة ومميزة.", price: 325, image: "IMG_0204 2.jpg", alt: "تفاصيل بطانية مشمشية محبوكة", badge: "" },
  { id: "scarf-beige", section: "soft", name: "شال شتوي كريمي", description: "قطعة كلاسيكية ناعمة ترافقك كل يوم.", price: 165, image: "IMG_0204.jpg", alt: "شال شتوي كريمي معلق بعناية", badge: "" },
  { id: "scarf-pink", section: "soft", name: "شال وردي ناعم", description: "دفء خفيف ولون يبهج إطلالتك.", price: 159, image: "IMG_0204 7.jpg", alt: "شال وردي ناعم منسدل", badge: "New" },
  { id: "scarf-burgundy", section: "soft", name: "شال برغندي", description: "لون شتوي غني وملمس محبوك مريح.", price: 169, image: "IMG_0204 6.jpg", alt: "شال شتوي برغندي مطوي", badge: "" },
  { id: "blanket-winter-colors", section: "soft", name: "بطانية ألوان شتوية", description: "مزيج كريمي ووردي يدفّي ركنك المفضل.", price: 310, image: "IMG_0204 5.jpg", alt: "بطانية شتوية ملونة بدرجات كريمية ووردية وبرغندية", badge: "Cozy Favorite" },
  { id: "yarn-cream", section: "diy", kind: "yarn", name: "خيوط Bouclé كريمية", description: "خيوط منفوشة ناعمة لصناعتك القادمة.", price: 48, image: "IMG_0205 4.jpg", alt: "خيوط بوكليه كريمية", badge: "Best Seller" },
  { id: "yarn-pink", section: "diy", kind: "yarn", name: "خيوط Bouclé وردية", description: "لون وردي لطيف ومثالي للقطع الدافئة.", price: 48, image: "IMG_0205 3.jpg", alt: "خيوط بوكليه وردية", badge: "" },
  { id: "yarn-peach", section: "diy", kind: "yarn", name: "خيوط Bouclé مشمشية", description: "خيوط بلون المشمش لتفاصيل محببة.", price: 48, image: "IMG_0205 2.jpg", alt: "خيوط بوكلية بلون المشمش", badge: "" },
  { id: "yarn-burgundy", section: "diy", kind: "yarn", name: "خيوط Bouclé برغندية", description: "درجة عميقة لإبداع شتوي غني.", price: 52, image: "IMG_0205.jpg", alt: "خيوط بوكلية برغندية", badge: "" },
  { id: "crochet-yarn", section: "diy", kind: "yarn", name: "خيوط ملونة", description: "ألوان شتوية متعددة لمشاريعك اليدوية.", price: 35, image: "IMG_0205 7.jpg", alt: "مجموعة خيوط ملونة في وعاء", badge: "" },
  { id: "crochet-hooks", section: "diy", kind: "tools", name: "إبر كروشيه", description: "مجموعة إبر مريحة لمقاسات متعددة.", price: 62, image: "IMG_0205 6.jpg", alt: "مجموعة إبر كروشيه بألوان ومقاسات متنوعة", badge: "" },
  { id: "blanket-tools", section: "diy", kind: "tools", name: "مجموعة أدوات البطانيات", description: "خيوط وإبر وأدوات لمشاريعك الشتوية.", price: 85, image: "IMG_0205 8.jpg", alt: "مجموعة أدوات وخيوط لصنع الشالات والبطانيات", badge: "" },
  { id: "scarf-tools", section: "diy", kind: "tools", name: "مجموعة أدوات الشالات", description: "اختيارات عملية لصناعة شالك الخاص.", price: 72, image: "IMG_0205 8.jpg", alt: "أدوات صناعة الشالات والبطانيات", badge: "" },
  { id: "diy-kit", section: "diy", kind: "kit", name: "طقم DIY جاهز", description: "صندوق هدايا يضم خيوطًا وأدوات لصناعتك.", price: 139, image: "IMG_0205 5.jpg", alt: "صندوق DIY يحتوي على خيوط وأدوات صناعة", badge: "New" },
  { id: "vanilla-candle-small", section: "candles", name: "شمعة Vanilla Cream", description: "رائحة فانيلا كريمية في عبوة صغيرة.", price: 58, image: "IMG_0207 3.jpg", alt: "شمعة Vanilla Cream صغيرة", badge: "" },
  { id: "vanilla-candle-large", section: "candles", name: "Vanilla Cream — كبيرة", description: "أجواء هادئة وناعمة تدوم لحظات أطول.", price: 92, image: "IMG_0206.jpg", alt: "شمعة Vanilla Cream كبيرة", badge: "Cozy Favorite" },
  { id: "cinnamon-candle-small", section: "candles", name: "شمعة Cinnamon Spice", description: "قرفة وتوابل شتوية بعبوة مشمشية.", price: 62, image: "IMG_0207 2.jpg", alt: "شمعة Cinnamon Spice صغيرة", badge: "" },
  { id: "cinnamon-candle-large", section: "candles", name: "Cinnamon Spice — كبيرة", description: "دفء القرفة في حجم يكفي أمسياتك.", price: 98, image: "IMG_0206 2.jpg", alt: "شموع Cinnamon Spice كبيرة", badge: "New" },
  { id: "cozy-scarf-box", section: "gifts", name: "Cozy Scarf Box", description: "شال شتوي، شمعة Vanilla Cream، وبطاقة إهداء.", price: 245, image: "IMG_0209 4.jpg", alt: "بوكس هدية يضم شالًا و شمعة Vanilla Cream", badge: "Gift Favorite" },
  { id: "winter-blanket-box", section: "gifts", name: "Winter Blanket Box", description: "بطانية بوكلية، شمعة Cinnamon Spice، وبطاقة.", price: 385, image: "IMG_0209 3.jpg", alt: "بوكس هدية يضم بطانية وشمعة Cinnamon Spice", badge: "Best Seller" },
  { id: "warm-duo-box", section: "gifts", name: "Warm Duo Box", description: "بطانية وشال مع تغليف هدايا فاخر.", price: 420, image: "IMG_0209 2.jpg", alt: "تغليف هدايا فاخر يضم شالًا وبطانية", badge: "" },
  { id: "diy-gift-box", section: "gifts", name: "DIY Gift Box", description: "خيوط بوكلية، إبر وأدوات، وبطاقة تعليمات.", price: 195, image: "IMG_0209 5.jpg", alt: "بوكس DIY يحتوي على خيوط وإبر وأدوات", badge: "New" },
  { id: "little-warmth-box", section: "gifts", name: "Little Warmth Box", description: "شمعة، شال صغير، وبطاقة إهداء محبة.", price: 175, image: "IMG_0209.jpg", alt: "بوكس هدية يضم قطعة شتوية كريمية وشمعة Vanilla Cream", badge: "" }
];

const numberFormat = new Intl.NumberFormat("ar-SA", { maximumFractionDigits: 0 });
const formatPrice = value => `${numberFormat.format(value)} ر.س`;
const imagePath = file => `images/${file}`;
const gridIds = { soft: "soft-products", diy: "diy-products", candles: "candle-products", gifts: "gift-products" };
let cart = loadCart();
let activeSearch = "";
let toastTimeout;

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem("cozy-loop-cart") || "[]");
    if (!Array.isArray(saved)) return [];
    return saved.filter(item => products.some(product => product.id === item.id) && Number.isInteger(item.quantity) && item.quantity > 0);
  } catch (error) {
    console.warn("تعذّر استعادة السلة المحفوظة:", error);
    return [];
  }
}

function persistCart() {
  try {
    localStorage.setItem("cozy-loop-cart", JSON.stringify(cart));
  } catch (error) {
    console.warn("تعذّر حفظ السلة في هذا المتصفح:", error);
  }
}

function visibleProducts(section) {
  return products.filter(product => {
    if (product.section !== section) return false;
    if (section === "diy") {
      const filter = document.querySelector("#diy-filter")?.value || "all";
      if (filter !== "all" && product.kind !== filter) return false;
    }
    if (activeSearch) {
      const text = `${product.name} ${product.description} ${product.section}`.toLocaleLowerCase("ar");
      if (!text.includes(activeSearch.toLocaleLowerCase("ar"))) return false;
    }
    return true;
  });
}

function renderProduct(product) {
  return `<article class="product-card">
    <div class="product-visual">
      ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}
      <img src="${imagePath(product.image)}" alt="${product.alt}" loading="lazy" decoding="async">
    </div>
    <div class="product-info">
      <h3>${product.name}</h3><p>${product.description}</p>
      <div class="product-buy"><span class="product-price">${formatPrice(product.price)}</span>
        <button class="add-button" type="button" data-add="${product.id}" aria-label="أضيفي ${product.name} إلى السلة">أضيفي للسلة +</button>
      </div>
    </div>
  </article>`;
}

function renderCatalog() {
  Object.entries(gridIds).forEach(([section, id]) => {
    const grid = document.getElementById(id);
    const matches = visibleProducts(section);
    grid.innerHTML = matches.length
      ? matches.map(renderProduct).join("")
      : '<p class="empty-results">ما لقينا منتجات تطابق بحثك. جربي كلمة ثانية ♡</p>';
  });
}

function renderCart() {
  const items = document.querySelector(".cart-items");
  const empty = document.querySelector(".empty-cart");
  const quantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => {
    const product = products.find(candidate => candidate.id === item.id);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);
  document.querySelector(".basket-count").textContent = numberFormat.format(quantity);
  document.querySelector(".summary-quantity").textContent = numberFormat.format(quantity);
  document.querySelector(".summary-price").textContent = formatPrice(total);
  empty.style.display = cart.length ? "none" : "flex";
  items.innerHTML = cart.map(item => {
    const product = products.find(candidate => candidate.id === item.id);
    if (!product) return "";
    return `<article class="cart-row">
      <img src="${imagePath(product.image)}" alt="${product.alt}" loading="lazy">
      <div class="cart-product"><h3>${product.name}</h3><p>${formatPrice(product.price)} للقطعة</p></div>
      <span class="cart-row-price">${formatPrice(product.price * item.quantity)}</span>
      <div class="quantity-control" aria-label="الكمية">
        <button type="button" data-quantity="${product.id}" data-change="decrease" aria-label="تقليل كمية ${product.name}">−</button>
        <span>${numberFormat.format(item.quantity)}</span>
        <button type="button" data-quantity="${product.id}" data-change="increase" aria-label="زيادة كمية ${product.name}">+</button>
      </div>
      <button class="remove-item" type="button" data-remove="${product.id}" aria-label="حذف ${product.name} من السلة">حذف</button>
    </article>`;
  }).join("");
}

function showToast(message) {
  const toast = document.querySelector(".toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function addToCart(id) {
  const product = products.find(item => item.id === id);
  if (!product) return;
  const current = cart.find(item => item.id === id);
  if (current) current.quantity += 1;
  else cart.push({ id, quantity: 1 });
  persistCart();
  renderCart();
  showToast("أضفنا لمسة دفء إلى سلتك! ♡");
}

document.addEventListener("click", event => {
  const addButton = event.target.closest("[data-add]");
  if (addButton) addToCart(addButton.dataset.add);

  const quantityButton = event.target.closest("[data-quantity]");
  if (quantityButton) {
    const item = cart.find(entry => entry.id === quantityButton.dataset.quantity);
    if (item) {
      item.quantity += quantityButton.dataset.change === "increase" ? 1 : -1;
      cart = cart.filter(entry => entry.quantity > 0);
      persistCart();
      renderCart();
    }
  }

  const removeButton = event.target.closest("[data-remove]");
  if (removeButton) {
    cart = cart.filter(item => item.id !== removeButton.dataset.remove);
    persistCart();
    renderCart();
    showToast("أزلنا المنتج من سلتك.");
  }
});

document.querySelector("#diy-filter").addEventListener("change", renderCatalog);
document.querySelector(".search-toggle").addEventListener("click", () => {
  const form = document.querySelector(".search-bar");
  form.hidden = !form.hidden;
  if (!form.hidden) document.querySelector("#site-search").focus();
});
document.querySelector(".search-close").addEventListener("click", () => {
  document.querySelector(".search-bar").hidden = true;
});
document.querySelector(".search-bar").addEventListener("submit", event => {
  event.preventDefault();
  activeSearch = document.querySelector("#site-search").value.trim();
  renderCatalog();
  document.querySelector(".search-bar").hidden = true;
  document.querySelector("#soft-cozy").scrollIntoView({ behavior: "smooth" });
});
document.querySelector("#site-search").addEventListener("input", event => {
  if (!event.target.value.trim()) {
    activeSearch = "";
    renderCatalog();
  }
});
document.querySelector(".checkout-button").addEventListener("click", () => {
  document.querySelector("#soft-cozy").scrollIntoView({ behavior: "smooth" });
  showToast("تسوقك تجريبي — اختاري قطعة دافئة أخرى ♡");
});
document.querySelector(".menu-toggle").addEventListener("click", event => {
  const nav = document.querySelector(".main-nav");
  const isOpen = nav.classList.toggle("is-open");
  event.currentTarget.setAttribute("aria-expanded", String(isOpen));
});
document.querySelectorAll(".main-nav a").forEach(link => link.addEventListener("click", () => {
  document.querySelector(".main-nav").classList.remove("is-open");
  document.querySelector(".menu-toggle").setAttribute("aria-expanded", "false");
}));
document.querySelector("#current-year").textContent = new Date().getFullYear();

renderCatalog();
renderCart();
