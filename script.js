// ==========================================================================
// Stepora - Premium Footwear Interactive JavaScript (Full 22+ Products & Drawers)
// ==========================================================================

// --------------------------------------------------------------------------
// 1. Complete Catalog Data (22 Distinct Shoes Across All Brands & Categories)
// --------------------------------------------------------------------------
const productsData = [
        {
            id: 1,
            name: "Nike Air Zoom Pegasus 40",
            brand: "Nike",
            category: "Running",
            price: 79.99,
            originalPrice: 99.99,
            rating: 4.8,
            reviews: 120,
            badge: "-20%",
            badgeType: "discount",
            image: "images/nike_pegasus.jpg",
            fallbackImg: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&auto=format&fit=crop&q=85",
            colors: ["black", "white", "blue", "orange"],
            selectedColor: "black",
            sizes: [6, 7, 8, 9, 10, 11],
            selectedSize: 8,
            btnStyle: "orange-btn",
            desc: "Engineered for runners seeking responsive cushioning and secure support. Features dual Zoom Air units and React foam for a smooth, springy transition."
        },
        {
            id: 2,
            name: "Adidas Ultraboost 22",
            brand: "Adidas",
            category: "Running",
            price: 94.99,
            originalPrice: 119.99,
            rating: 4.7,
            reviews: 98,
            badge: "New",
            badgeType: "new",
            image: "images/adidas_ultraboost.jpg",
            fallbackImg: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&auto=format&fit=crop&q=85",
            colors: ["black", "blue", "white"],
            selectedColor: "black",
            sizes: [6, 7, 8, 9, 10, 11],
            selectedSize: 9,
            btnStyle: "dark-btn",
            desc: "Feel energized with every step. Made with a responsive BOOST midsole and Linear Energy Push system for continuous energy return and targeted support."
        },
        {
            id: 3,
            name: "Puma RS-X Retro",
            brand: "Puma",
            category: "Casual",
            price: 69.99,
            originalPrice: 82.99,
            rating: 4.6,
            reviews: 75,
            badge: "-15%",
            badgeType: "discount",
            image: "images/puma_rsx.jpg",
            fallbackImg: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&auto=format&fit=crop&q=85",
            colors: ["blue", "cyan", "white"],
            selectedColor: "blue",
            sizes: [6, 7, 8, 9, 10, 11],
            selectedSize: 8,
            btnStyle: "orange-btn",
            desc: "Retro silhouettes reimagined for modern streetwear. Features exaggerated proportions, bold color blocking, and running system cushioning."
        },
        {
            id: 4,
            name: "Woodland Leather Boots",
            brand: "Woodland",
            category: "Boots",
            price: 89.99,
            originalPrice: 109.99,
            rating: 4.9,
            reviews: 203,
            badge: "Bestseller",
            badgeType: "bestseller",
            image: "images/woodland_boots.jpg",
            fallbackImg: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=600&auto=format&fit=crop&q=85",
            colors: ["brown", "tan", "darkgreen", "black"],
            selectedColor: "brown",
            sizes: [6, 7, 8, 9, 10, 11],
            selectedSize: 10,
            btnStyle: "dark-btn",
            desc: "Built rugged for tough terrains and urban trails. Handcrafted with genuine nubuck leather, rust-proof hardware, and deep-groove rubber traction soles."
        },
        {
            id: 5,
            name: "Reebok Floatride Energy",
            brand: "Reebok",
            category: "Running",
            price: 62.99,
            originalPrice: 89.99,
            rating: 4.5,
            reviews: 64,
            badge: "-30%",
            badgeType: "discount",
            image: "images/reebok_floatride.jpg",
            fallbackImg: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?w=600&auto=format&fit=crop&q=85",
            colors: ["black", "grey", "orange"],
            selectedColor: "black",
            sizes: [6, 7, 8, 10, 11],
            selectedSize: 7,
            btnStyle: "orange-btn",
            desc: "Lightweight, breathable, and ultra-fast. Floatride Energy Foam cushioning delivers a lightweight, smooth ride for daily training sessions."
        },
        {
            id: 6,
            name: "New Balance 574 Core",
            brand: "New Balance",
            category: "Sneakers",
            price: 87.99,
            originalPrice: 104.99,
            rating: 4.8,
            reviews: 112,
            badge: "Best Seller",
            badgeType: "bestseller-purple",
            image: "images/new_balance_574.jpg",
            fallbackImg: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&auto=format&fit=crop&q=85",
            colors: ["beige", "grey", "green", "black"],
            selectedColor: "beige",
            sizes: [6, 7, 8, 9, 10, 11],
            selectedSize: 9,
            btnStyle: "dark-btn",
            desc: "The iconic, timeless sneaker. Suede and mesh upper paired with ENCAP midsole cushioning provides all-day support with effortless vintage heritage."
        },
        {
            id: 7,
            name: "Converse Chuck Taylor",
            brand: "Converse",
            category: "Casual",
            price: 54.99,
            originalPrice: 66.99,
            rating: 4.7,
            reviews: 91,
            badge: "-18%",
            badgeType: "discount",
            image: "images/converse_chuck.jpg",
            fallbackImg: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=600&auto=format&fit=crop&q=85",
            colors: ["black", "white", "red"],
            selectedColor: "black",
            sizes: [6, 7, 8, 9, 10, 11],
            selectedSize: 7,
            btnStyle: "orange-btn",
            desc: "The undisputed classic high-top canvas sneaker. Lightweight canvas upper, medial eyelets for airflow, and the classic star ankle patch."
        },
        {
            id: 8,
            name: "Skechers Go Walk 6",
            brand: "Skechers",
            category: "Casual",
            price: 71.99,
            originalPrice: 84.99,
            rating: 4.6,
            reviews: 72,
            badge: "New",
            badgeType: "new",
            image: "images/skechers_gowalk.jpg",
            fallbackImg: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&auto=format&fit=crop&q=85",
            colors: ["pink", "grey", "black"],
            selectedColor: "pink",
            sizes: [6, 7, 8, 9, 10, 11],
            selectedSize: 8,
            btnStyle: "dark-btn",
            desc: "Step in cloud-like comfort. Features lightweight ULTRA GO cushioning, Air-Cooled Goga Mat breathable insole, and high-rebound Comfort Pillar Technology."
        },
        {
            id: 9,
            name: "Nike Air Force 1 '07",
            brand: "Nike",
            category: "Sneakers",
            price: 89.99,
            originalPrice: 110.00,
            rating: 4.9,
            reviews: 340,
            badge: "Bestseller",
            badgeType: "bestseller",
            image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&auto=format&fit=crop&q=85",
            fallbackImg: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&auto=format&fit=crop&q=85",
            colors: ["white", "black"],
            selectedColor: "white",
            sizes: [6, 7, 8, 9, 10, 11],
            selectedSize: 8,
            btnStyle: "orange-btn",
            desc: "The radiance lives on with the b-ball OG. Crisp stitched overlays, bold accents, and the perfect amount of flash to make you shine."
        },
        {
            id: 10,
            name: "Adidas Stan Smith",
            brand: "Adidas",
            category: "Casual",
            price: 64.99,
            originalPrice: 85.00,
            rating: 4.7,
            reviews: 145,
            badge: "-25%",
            badgeType: "discount",
            image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=600&auto=format&fit=crop&q=85",
            fallbackImg: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=600&auto=format&fit=crop&q=85",
            colors: ["white", "green"],
            selectedColor: "white",
            sizes: [6, 7, 8, 9, 10, 11],
            selectedSize: 8,
            btnStyle: "dark-btn",
            desc: "Clean, minimalist, and legendary. Endorsed by tennis champion Stan Smith, this low-profile silhouette goes with literally everything."
        },
        {
            id: 11,
            name: "Jordan 1 Retro High",
            brand: "Nike",
            category: "Sneakers",
            price: 139.99,
            originalPrice: 175.00,
            rating: 5.0,
            reviews: 420,
            badge: "Hot",
            badgeType: "bestseller-purple",
            image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=600&auto=format&fit=crop&q=85",
            fallbackImg: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=600&auto=format&fit=crop&q=85",
            colors: ["red", "black", "white"],
            selectedColor: "red",
            sizes: [7, 8, 9, 10, 11],
            selectedSize: 9,
            btnStyle: "orange-btn",
            desc: "Familiar yet always fresh. The iconic Air Jordan 1 is remastered for today's sneakerhead culture with genuine leather construction."
        },
        {
            id: 12,
            name: "Vans Old Skool Classic",
            brand: "Vans",
            category: "Casual",
            price: 59.99,
            originalPrice: 70.00,
            rating: 4.8,
            reviews: 210,
            badge: "-10%",
            badgeType: "discount",
            image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&auto=format&fit=crop&q=85",
            fallbackImg: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&auto=format&fit=crop&q=85",
            colors: ["black", "white"],
            selectedColor: "black",
            sizes: [6, 7, 8, 9, 10, 11],
            selectedSize: 8,
            btnStyle: "dark-btn",
            desc: "The first to bare the iconic side stripe. Features sturdy suede and canvas uppers, reinforced toecaps, and signature rubber waffle outsoles."
        },
        {
            id: 13,
            name: "Asics Gel-Kayano 29",
            brand: "Asics",
            category: "Sports",
            price: 119.99,
            originalPrice: 160.00,
            rating: 4.9,
            reviews: 135,
            badge: "New",
            badgeType: "new",
            image: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=600&auto=format&fit=crop&q=85",
            fallbackImg: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=600&auto=format&fit=crop&q=85",
            colors: ["blue", "black", "orange"],
            selectedColor: "blue",
            sizes: [6, 7, 8, 9, 10, 11],
            selectedSize: 9,
            btnStyle: "orange-btn",
            desc: "The pinnacle of stability and responsive underfoot comfort. FF BLAST PLUS cushioning keeps the shoe lightweight while producing energetic rebound."
        },
        {
            id: 14,
            name: "Puma Suede Classic",
            brand: "Puma",
            category: "Sneakers",
            price: 58.99,
            originalPrice: 75.00,
            rating: 4.6,
            reviews: 88,
            badge: "-20%",
            badgeType: "discount",
            image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&auto=format&fit=crop&q=85",
            fallbackImg: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&auto=format&fit=crop&q=85",
            colors: ["black", "red", "blue"],
            selectedColor: "black",
            sizes: [6, 7, 8, 9, 10, 11],
            selectedSize: 8,
            btnStyle: "dark-btn",
            desc: "A cornerstone of b-boy and streetwear culture since 1968. Rich velvety suede upper with full lace closure and cushioned midsole."
        },
        {
            id: 15,
            name: "Woodland Formal Oxford",
            brand: "Woodland",
            category: "Formal",
            price: 99.99,
            originalPrice: 130.00,
            rating: 4.7,
            reviews: 79,
            badge: "Premium",
            badgeType: "bestseller",
            image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=600&auto=format&fit=crop&q=85",
            fallbackImg: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=600&auto=format&fit=crop&q=85",
            colors: ["black", "brown"],
            selectedColor: "black",
            sizes: [7, 8, 9, 10, 11],
            selectedSize: 8,
            btnStyle: "dark-btn",
            desc: "Refined formal elegance crafted with premium burnished full-grain leather, padded insoles, and hand-finished sole stitching."
        },
        {
            id: 16,
            name: "Reebok Club C 85",
            brand: "Reebok",
            category: "Casual",
            price: 65.99,
            originalPrice: 85.00,
            rating: 4.7,
            reviews: 104,
            badge: "Bestseller",
            badgeType: "bestseller",
            image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?w=600&auto=format&fit=crop&q=85",
            fallbackImg: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?w=600&auto=format&fit=crop&q=85",
            colors: ["white", "green"],
            selectedColor: "white",
            sizes: [6, 7, 8, 9, 10, 11],
            selectedSize: 8,
            btnStyle: "orange-btn",
            desc: "Clean tennis heritage style. Soft garment leather upper with molded sockliner and durable rubber outsole for timeless everyday luxury."
        },
        {
            id: 17,
            name: "New Balance 327 Vintage",
            brand: "New Balance",
            category: "Sneakers",
            price: 92.99,
            originalPrice: 110.00,
            rating: 4.8,
            reviews: 142,
            badge: "-15%",
            badgeType: "discount",
            image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&auto=format&fit=crop&q=85",
            fallbackImg: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&auto=format&fit=crop&q=85",
            colors: ["grey", "beige", "blue"],
            selectedColor: "grey",
            sizes: [6, 7, 8, 9, 10, 11],
            selectedSize: 8,
            btnStyle: "dark-btn",
            desc: "70s running heritage revitalized. Bold asymmetrical 'N' branding and a trail-inspired studded rubber lug outsole that wraps the heel."
        },
        {
            id: 18,
            name: "Nike ZoomX Vaporfly 3",
            brand: "Nike",
            category: "Sports",
            price: 159.99,
            originalPrice: 250.00,
            rating: 5.0,
            reviews: 260,
            badge: "Elite",
            badgeType: "bestseller-purple",
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=85",
            fallbackImg: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=85",
            colors: ["red", "white"],
            selectedColor: "red",
            sizes: [7, 8, 9, 10, 11],
            selectedSize: 9,
            btnStyle: "orange-btn",
            desc: "Catch 'em if you can. Built for chasers, racers, and elite marathoners who can't turn down the thrill of pursuit. Full-length carbon flyplate."
        },
        {
            id: 19,
            name: "Adidas NMD_R1 Primeblue",
            brand: "Adidas",
            category: "Running",
            price: 98.99,
            originalPrice: 130.00,
            rating: 4.7,
            reviews: 168,
            badge: "-22%",
            badgeType: "discount",
            image: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=600&auto=format&fit=crop&q=85",
            fallbackImg: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=600&auto=format&fit=crop&q=85",
            colors: ["black", "white", "red"],
            selectedColor: "black",
            sizes: [6, 7, 8, 9, 10, 11],
            selectedSize: 8,
            btnStyle: "dark-btn",
            desc: "Pack your bags and hit the pavement. These sneakers take cues from premium 80s racers with energy-returning Boost cushioning."
        },
        {
            id: 20,
            name: "Timberland 6-Inch Boots",
            brand: "Timberland",
            category: "Boots",
            price: 129.99,
            originalPrice: 170.00,
            rating: 4.9,
            reviews: 310,
            badge: "Classic",
            badgeType: "bestseller",
            image: "https://images.unsplash.com/photo-1544441893-675973e31985?w=600&auto=format&fit=crop&q=85",
            fallbackImg: "https://images.unsplash.com/photo-1544441893-675973e31985?w=600&auto=format&fit=crop&q=85",
            colors: ["tan", "black"],
            selectedColor: "tan",
            sizes: [7, 8, 9, 10, 11],
            selectedSize: 9,
            btnStyle: "dark-btn",
            desc: "The original yellow boot that started it all nearly 40 years ago. Waterproof seam-sealed construction and PrimaLoft insulation."
        },
        {
            id: 21,
            name: "Skechers D'Lites Retro",
            brand: "Skechers",
            category: "Casual",
            price: 59.99,
            originalPrice: 75.00,
            rating: 4.6,
            reviews: 82,
            badge: "-15%",
            badgeType: "discount",
            image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=600&auto=format&fit=crop&q=85",
            fallbackImg: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=600&auto=format&fit=crop&q=85",
            colors: ["white", "blue", "pink"],
            selectedColor: "white",
            sizes: [6, 7, 8, 9, 10],
            selectedSize: 7,
            btnStyle: "orange-btn",
            desc: "Chunky 90s aesthetic matched with Air-Cooled Memory Foam cushioned comfort insole and shock-absorbing supportive midsole."
        },
        {
            id: 22,
            name: "On Cloudmonster Road",
            brand: "On",
            category: "Running",
            price: 124.99,
            originalPrice: 169.99,
            rating: 4.9,
            reviews: 195,
            badge: "New",
            badgeType: "new",
            image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&auto=format&fit=crop&q=85",
            fallbackImg: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&auto=format&fit=crop&q=85",
            colors: ["orange", "white", "black"],
            selectedColor: "orange",
            sizes: [7, 8, 9, 10, 11],
            selectedSize: 8,
            btnStyle: "orange-btn",
            desc: "Running never felt like this. Monster CloudTec elements for monster bounce and energy return, paired with a snappy Speedboard."
        }
    ];

// --------------------------------------------------------------------------
// 2. Global State (Cart, Wishlist & Filters)
// --------------------------------------------------------------------------
function loadSavedCart() {
    try {
        const raw = localStorage.getItem('stepora_cart');
        return raw ? JSON.parse(raw) : [];
    } catch(e) { return []; }
}
function saveCartToStorage() {
    try { localStorage.setItem('stepora_cart', JSON.stringify(cartItems)); } catch(e) {}
}

function loadSavedWishlist() {
    try {
        const raw = localStorage.getItem('stepora_wishlist');
        return raw ? JSON.parse(raw) : [];
    } catch(e) { return []; }
}
function saveWishlistToStorage() {
    try { localStorage.setItem('stepora_wishlist', JSON.stringify(wishlistIds)); } catch(e) {}
}

// Cart items state (persistent via localStorage)
let cartItems = loadSavedCart();

// Wishlist items state (persistent via localStorage)
let wishlistIds = loadSavedWishlist();

// Filter state (Price: Low to High by default, showing all products initially)
const filters = {
    categories: [],
    brands: [],
    priceCustomized: false,
    minPrice: 0,
    maxPrice: 300,
    size: null,
    color: null,
    search: '',
    sortBy: 'price-low'
};

let activeModalProd = null;

// --------------------------------------------------------------------------
// 3. Slide-Out Drawers DOM Injection
// --------------------------------------------------------------------------
function ensureDrawersExist() {
    if (!document.getElementById('cartDrawer')) {
        const drawerMarkup = `
            <div class="drawer-backdrop" id="cartDrawerBackdrop"></div>
            <aside class="slide-drawer" id="cartDrawer">
                <div class="drawer-header">
                    <div class="drawer-title-group">
                        <i class='bx bx-shopping-bag drawer-icon'></i>
                        <h3>Shopping Cart (<span id="cartDrawerCount">0</span>)</h3>
                    </div>
                    <button type="button" class="drawer-close-btn" id="cartDrawerCloseBtn" aria-label="Close cart">
                        <i class='bx bx-x'></i>
                    </button>
                </div>
                <div class="drawer-body" id="cartDrawerBody"></div>
                <div class="drawer-footer" id="cartDrawerFooter">
                    <div class="drawer-summary-row">
                        <span>Subtotal:</span>
                        <span class="summary-val" id="cartDrawerSubtotal">$0.00</span>
                    </div>
                    <div class="drawer-summary-row">
                        <span>Shipping:</span>
                        <span class="summary-val free-ship">FREE</span>
                    </div>
                    <div class="drawer-summary-row total-row">
                        <span>Total:</span>
                        <span class="summary-val total-val" id="cartDrawerTotal">$0.00</span>
                    </div>
                    <button type="button" class="drawer-checkout-btn" id="cartCheckoutBtn">
                        Proceed to Checkout <i class='bx bx-right-arrow-alt'></i>
                    </button>
                    <button type="button" class="drawer-continue-btn" id="cartContinueBtn">
                        Continue Shopping
                    </button>
                </div>
            </aside>

            <div class="drawer-backdrop" id="wishlistDrawerBackdrop"></div>
            <aside class="slide-drawer" id="wishlistDrawer">
                <div class="drawer-header">
                    <div class="drawer-title-group">
                        <i class='bx bxs-heart drawer-icon' style="color:#ef4444;"></i>
                        <h3>My Saved Shoes (<span id="wishlistDrawerCount">0</span>)</h3>
                    </div>
                    <button type="button" class="drawer-close-btn" id="wishlistDrawerCloseBtn" aria-label="Close wishlist">
                        <i class='bx bx-x'></i>
                    </button>
                </div>
                <div class="drawer-body" id="wishlistDrawerBody"></div>
                <div class="drawer-footer" id="wishlistDrawerFooter">
                    <button type="button" class="drawer-checkout-btn" id="moveAllWishlistToCartBtn">
                        <i class='bx bx-cart'></i> Move All to Cart
                    </button>
                    <button type="button" class="drawer-continue-btn" id="wishlistContinueBtn">
                        Continue Shopping
                    </button>
                </div>
            </aside>

            <div class="shop-toast" id="shopToast">
                <i class='bx bx-check-circle'></i>
                <span id="toastMessage">Item added to cart!</span>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', drawerMarkup);
    }
}

// --------------------------------------------------------------------------
// 4. Toast Notification
// --------------------------------------------------------------------------
function showToast(msg) {
    const toast = document.getElementById('shopToast');
    const msgEl = document.getElementById('toastMessage');
    if (!toast) return;
    if (msgEl) msgEl.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}

// --------------------------------------------------------------------------
// 5. Cart Management & Drawer Functions (Global)
// --------------------------------------------------------------------------
function updateCartUI() {
    saveCartToStorage();
    const totalCount = cartItems.reduce((acc, item) => acc + item.qty, 0);

    const hBadge = document.getElementById('headerCartBadge');
    if (hBadge) hBadge.textContent = totalCount;

    document.querySelectorAll('.header-icons a, .header-icons .icon-link').forEach(el => {
        if (el.querySelector('.bx-shopping-bag')) {
            const b = el.querySelector('.badge');
            if (b) b.textContent = totalCount;
        }
    });

    const cCount = document.getElementById('cartDrawerCount');
    if (cCount) cCount.textContent = totalCount;

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
    const subtotalEl = document.getElementById('cartDrawerSubtotal');
    const totalEl = document.getElementById('cartDrawerTotal');
    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `$${subtotal.toFixed(2)}`;

    const cartDrawerBody = document.getElementById('cartDrawerBody');
    if (!cartDrawerBody) return;

    if (cartItems.length === 0) {
        cartDrawerBody.innerHTML = `
            <div class="drawer-empty-state">
                <i class='bx bx-shopping-bag'></i>
                <h4>Your Cart is Empty</h4>
                <p>Looks like you haven't added any shoes to your bag yet.</p>
                <button type="button" class="drawer-empty-btn" onclick="closeCartDrawer()">Shop Latest Collection</button>
            </div>
        `;
        const footer = document.getElementById('cartDrawerFooter');
        if (footer) footer.style.display = 'none';
    } else {
        const footer = document.getElementById('cartDrawerFooter');
        if (footer) footer.style.display = 'flex';

        cartDrawerBody.innerHTML = cartItems.map((item, index) => `
            <div class="drawer-item-card">
                <div class="drawer-item-thumb">
                    <img src="${item.image}" alt="${item.name}" onerror="this.src='${item.fallbackImg}';">
                </div>
                <div class="drawer-item-info">
                    <h4 class="drawer-item-title" title="${item.name}">${item.name}</h4>
                    <div class="drawer-item-meta">
                        <span>Size: <strong class="drawer-meta-pill">${item.size}</strong></span>
                        <span>Color: <strong class="drawer-meta-pill" style="text-transform:capitalize;">${item.color}</strong></span>
                    </div>
                    <div class="drawer-item-price-row">
                        <span class="drawer-item-price">$${(item.price * item.qty).toFixed(2)}</span>
                        <div class="drawer-stepper">
                            <button type="button" onclick="changeCartQty(${index}, -1)">-</button>
                            <span>${item.qty}</span>
                            <button type="button" onclick="changeCartQty(${index}, 1)">+</button>
                        </div>
                    </div>
                </div>
                <button type="button" class="drawer-item-remove-btn" title="Remove" onclick="removeCartItem(${index})">
                    <i class='bx bx-trash'></i>
                </button>
            </div>
        `).join('');
    }
}

function openCartDrawer() {
    ensureDrawersExist();
    const wish = document.getElementById('wishlistDrawer');
    const wishBack = document.getElementById('wishlistDrawerBackdrop');
    if (wish) wish.classList.remove('open');
    if (wishBack) wishBack.classList.remove('open');

    const cart = document.getElementById('cartDrawer');
    const cartBack = document.getElementById('cartDrawerBackdrop');
    if (cart) cart.classList.add('open');
    if (cartBack) cartBack.classList.add('open');
    document.body.style.overflow = 'hidden';
    updateCartUI();
}

function closeCartDrawer() {
    const cart = document.getElementById('cartDrawer');
    const cartBack = document.getElementById('cartDrawerBackdrop');
    if (cart) cart.classList.remove('open');
    if (cartBack) cartBack.classList.remove('open');
    document.body.style.overflow = '';
}

function changeCartQty(index, delta) {
    if (!cartItems[index]) return;
    cartItems[index].qty += delta;
    if (cartItems[index].qty <= 0) {
        cartItems.splice(index, 1);
        showToast("Item removed from cart");
    }
    updateCartUI();
}

function removeCartItem(index) {
    if (!cartItems[index]) return;
    const name = cartItems[index].name;
    cartItems.splice(index, 1);
    updateCartUI();
    showToast(`${name} removed from cart`);
}

function addProductToCart(e, id) {
    if (e && e.stopPropagation) e.stopPropagation();
    const prod = productsData.find(p => p.id === id);
    if (!prod) return;

    const existing = cartItems.find(item => item.id === prod.id && item.size === prod.selectedSize);
    if (existing) {
        existing.qty += 1;
    } else {
        cartItems.push({
            id: prod.id,
            name: prod.name,
            brand: prod.brand,
            price: prod.price,
            size: prod.selectedSize,
            color: prod.selectedColor,
            image: prod.image,
            fallbackImg: prod.fallbackImg,
            qty: 1
        });
    }

    if (e && e.currentTarget) {
        const btn = e.currentTarget;
        const origHtml = btn.innerHTML;
        btn.innerHTML = "<i class='bx bx-check'></i> Added!";
        btn.style.backgroundColor = "#10b981";

        setTimeout(() => {
            btn.innerHTML = origHtml;
            btn.style.backgroundColor = "";
            openCartDrawer();
        }, 400);
    } else {
        openCartDrawer();
    }

    updateCartUI();
    showToast(`${prod.name} (Size ${prod.selectedSize}) added to cart!`);
}

// --------------------------------------------------------------------------
// 6. Wishlist Management & Drawer Functions (Global)
// --------------------------------------------------------------------------
function updateWishlistUI() {
    saveWishlistToStorage();
    const count = wishlistIds.length;

    const hBadge = document.getElementById('headerWishlistBadge');
    if (hBadge) hBadge.textContent = count;

    const topCount = document.getElementById('topWishlistCount');
    if (topCount) topCount.textContent = count;

    document.querySelectorAll('.header-icons a, .header-icons .icon-link').forEach(el => {
        if (el.querySelector('.bx-heart')) {
            const b = el.querySelector('.badge');
            if (b) b.textContent = count;
        }
    });

    const wCount = document.getElementById('wishlistDrawerCount');
    if (wCount) wCount.textContent = count;

    const wishlistDrawerBody = document.getElementById('wishlistDrawerBody');
    if (!wishlistDrawerBody) return;

    const wishlistedProducts = productsData.filter(p => wishlistIds.includes(p.id));

    if (wishlistedProducts.length === 0) {
        wishlistDrawerBody.innerHTML = `
            <div class="drawer-empty-state">
                <i class='bx bx-heart' style="color:#ef4444;"></i>
                <h4>Your Wishlist is Empty</h4>
                <p>Tap the heart icon on any shoe to save your favorites here.</p>
                <button type="button" class="drawer-empty-btn" onclick="closeWishlistDrawer()">Explore Shoes</button>
            </div>
        `;
        const footer = document.getElementById('wishlistDrawerFooter');
        if (footer) footer.style.display = 'none';
    } else {
        const footer = document.getElementById('wishlistDrawerFooter');
        if (footer) footer.style.display = 'flex';

        wishlistDrawerBody.innerHTML = wishlistedProducts.map(prod => `
            <div class="drawer-item-card">
                <div class="drawer-item-thumb">
                    <img src="${prod.image}" alt="${prod.name}" onerror="this.src='${prod.fallbackImg}';">
                </div>
                <div class="drawer-item-info">
                    <h4 class="drawer-item-title" title="${prod.name}">${prod.name}</h4>
                    <div class="drawer-item-meta">
                        <span>${prod.brand} • ${prod.category}</span>
                    </div>
                    <div class="drawer-item-price-row">
                        <span class="drawer-item-price">$${prod.price.toFixed(2)}</span>
                        <span class="card-badge ${prod.badgeType}" style="position:static; padding:2px 6px;">${prod.badge}</span>
                    </div>
                    <div class="drawer-item-actions">
                        <button type="button" class="drawer-move-cart-btn" onclick="moveWishlistProdToCart(${prod.id})">
                            <i class='bx bx-cart'></i> Add to Cart
                        </button>
                    </div>
                </div>
                <button type="button" class="drawer-item-remove-btn" title="Remove" onclick="removeWishlistItem(${prod.id})">
                    <i class='bx bx-trash'></i>
                </button>
            </div>
        `).join('');
    }
}

function openWishlistDrawer() {
    ensureDrawersExist();
    const cart = document.getElementById('cartDrawer');
    const cartBack = document.getElementById('cartDrawerBackdrop');
    if (cart) cart.classList.remove('open');
    if (cartBack) cartBack.classList.remove('open');

    const wish = document.getElementById('wishlistDrawer');
    const wishBack = document.getElementById('wishlistDrawerBackdrop');
    if (wish) wish.classList.add('open');
    if (wishBack) wishBack.classList.add('open');
    document.body.style.overflow = 'hidden';
    updateWishlistUI();
}

function closeWishlistDrawer() {
    const wish = document.getElementById('wishlistDrawer');
    const wishBack = document.getElementById('wishlistDrawerBackdrop');
    if (wish) wish.classList.remove('open');
    if (wishBack) wishBack.classList.remove('open');
    document.body.style.overflow = '';
}

function removeWishlistItem(id) {
    wishlistIds = wishlistIds.filter(item => item !== id);
    updateWishlistUI();

    const cardHeart = document.querySelector(`.shop-product-card[data-id="${id}"] .card-wishlist-btn`);
    if (cardHeart) {
        cardHeart.classList.remove('active');
        const icon = cardHeart.querySelector('i');
        if (icon) {
            icon.className = 'bx bx-heart';
            icon.style.color = '';
        }
    }
    showToast("Shoe removed from saved favorites");
}

function moveWishlistProdToCart(id) {
    const prod = productsData.find(p => p.id === id);
    if (!prod) return;

    const existing = cartItems.find(item => item.id === prod.id && item.size === prod.selectedSize);
    if (existing) {
        existing.qty += 1;
    } else {
        cartItems.push({
            id: prod.id,
            name: prod.name,
            brand: prod.brand,
            price: prod.price,
            size: prod.selectedSize,
            color: prod.selectedColor,
            image: prod.image,
            fallbackImg: prod.fallbackImg,
            qty: 1
        });
    }

    wishlistIds = wishlistIds.filter(item => item !== id);
    updateWishlistUI();
    updateCartUI();

    const cardHeart = document.querySelector(`.shop-product-card[data-id="${id}"] .card-wishlist-btn`);
    if (cardHeart) {
        cardHeart.classList.remove('active');
        const icon = cardHeart.querySelector('i');
        if (icon) {
            icon.className = 'bx bx-heart';
            icon.style.color = '';
        }
    }

    showToast(`${prod.name} moved to shopping cart!`);
    openCartDrawer();
}

function toggleCardWishlist(e, id) {
    if (e && e.stopPropagation) e.stopPropagation();
    const prod = productsData.find(p => p.id === id);
    if (!prod) return;

    const isCurrentlyLiked = wishlistIds.includes(id);
    const btn = (e && e.currentTarget) ? e.currentTarget : document.querySelector(`.shop-product-card[data-id="${id}"] .card-wishlist-btn`);
    const icon = btn ? btn.querySelector('i') : null;

    if (!isCurrentlyLiked) {
        wishlistIds.push(id);
        if (btn) btn.classList.add('active');
        if (icon) {
            icon.className = 'bx bxs-heart';
            icon.style.color = '#ef4444';
        }
        updateWishlistUI();
        showToast(`${prod.name} saved to your favorites!`);
    } else {
        wishlistIds = wishlistIds.filter(item => item !== id);
        if (btn) btn.classList.remove('active');
        if (icon) {
            icon.className = 'bx bx-heart';
            icon.style.color = '';
        }
        updateWishlistUI();
        showToast(`${prod.name} removed from favorites`);
    }
}

// --------------------------------------------------------------------------
// 7. Interactive Product Card Helpers (Global)
// --------------------------------------------------------------------------
function selectCardSize(e, id, size) {
    if (e && e.stopPropagation) e.stopPropagation();
    const prod = productsData.find(p => p.id === id);
    if (!prod) return;
    prod.selectedSize = size;
    if (e && e.currentTarget) {
        const card = e.currentTarget.closest('.shop-product-card');
        if (card) {
            card.querySelectorAll('.card-size-btn').forEach(btn => btn.classList.remove('active'));
            e.currentTarget.classList.add('active');
        }
    }
}

function selectCardColor(e, id, color) {
    if (e && e.stopPropagation) e.stopPropagation();
    const prod = productsData.find(p => p.id === id);
    if (!prod) return;
    prod.selectedColor = color;
    if (e && e.currentTarget) {
        const card = e.currentTarget.closest('.shop-product-card');
        if (card) {
            card.querySelectorAll('.dot-swatch').forEach(dot => dot.classList.remove('active'));
            e.currentTarget.classList.add('active');
        }
    }
}

// --------------------------------------------------------------------------
// 8. Quick View Modal (Global)
// --------------------------------------------------------------------------
function openQuickViewModal(id) {
    const prod = productsData.find(p => p.id === id);
    const quickViewModal = document.getElementById('quickViewModal');
    if (!prod || !quickViewModal) return;

    activeModalProd = prod;
    const modalImg = document.getElementById('modalImg');
    const modalBadge = document.getElementById('modalBadge');
    const modalCategory = document.getElementById('modalCategory');
    const modalTitle = document.getElementById('modalTitle');
    const modalRatingText = document.getElementById('modalRatingText');
    const modalCurrentPrice = document.getElementById('modalCurrentPrice');
    const modalOriginalPrice = document.getElementById('modalOriginalPrice');
    const modalDesc = document.getElementById('modalDesc');
    const qtyInput = document.getElementById('qtyInput');

    if (modalImg) modalImg.src = prod.image;
    if (modalBadge) {
        modalBadge.textContent = prod.badge;
        modalBadge.className = `modal-badge ${prod.badgeType}`;
    }
    if (modalCategory) modalCategory.textContent = `${prod.category} Shoes`;
    if (modalTitle) modalTitle.textContent = prod.name;
    if (modalRatingText) modalRatingText.textContent = `${prod.rating} (${prod.reviews} reviews)`;
    if (modalCurrentPrice) modalCurrentPrice.textContent = `$${prod.price.toFixed(2)}`;
    if (modalOriginalPrice) modalOriginalPrice.textContent = `$${prod.originalPrice.toFixed(2)}`;
    if (modalDesc) modalDesc.textContent = prod.desc;
    if (qtyInput) qtyInput.value = 1;

    quickViewModal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeQuickViewModal() {
    const quickViewModal = document.getElementById('quickViewModal');
    if (!quickViewModal) return;
    quickViewModal.classList.remove('open');
    document.body.style.overflow = '';
}

// --------------------------------------------------------------------------
// 9. Mobile Filter & Accordion (Global)
// --------------------------------------------------------------------------
function openMobileFilter() {
    const filterSidebar = document.getElementById('filterSidebar');
    const filterBackdrop = document.getElementById('filterBackdrop');
    if (filterSidebar) filterSidebar.classList.add('open');
    if (filterBackdrop) filterBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeMobileFilter() {
    const filterSidebar = document.getElementById('filterSidebar');
    const filterBackdrop = document.getElementById('filterBackdrop');
    if (filterSidebar) filterSidebar.classList.remove('open');
    if (filterBackdrop) filterBackdrop.classList.remove('open');
    document.body.style.overflow = '';
}

function toggleFilterGroup(titleElement) {
    if (!titleElement) return;
    const group = titleElement.closest('.filter-group');
    if (group) group.classList.toggle('collapsed');
}

// --------------------------------------------------------------------------
// 10. Slider Track & Filters Reset (Global)
// --------------------------------------------------------------------------
function updateSliderTrack() {
    const sliderMin = document.getElementById('sliderMin');
    const sliderMax = document.getElementById('sliderMax');
    const sliderTrack = document.getElementById('sliderTrack');
    if (!sliderMin || !sliderMax || !sliderTrack) return;
    const minVal = parseInt(sliderMin.value) || 0;
    const maxVal = parseInt(sliderMax.value) || 300;
    const minPercent = (minVal / 300) * 100;
    const maxPercent = (maxVal / 300) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #e2e8f0 ${minPercent}%, #f28b50 ${minPercent}%, #f28b50 ${maxPercent}%, #e2e8f0 ${maxPercent}%)`;
}

function resetAllFilters() {
    document.querySelectorAll('input[name="category"]').forEach(cb => cb.checked = false);
    document.querySelectorAll('input[name="brand"]').forEach(cb => cb.checked = false);
    filters.categories = [];
    filters.brands = [];

    filters.priceCustomized = false;
    filters.minPrice = 0;
    filters.maxPrice = 300;

    const sliderMin = document.getElementById('sliderMin');
    const sliderMax = document.getElementById('sliderMax');
    const minPriceInput = document.getElementById('minPriceInput');
    const maxPriceInput = document.getElementById('maxPriceInput');

    if (sliderMin) sliderMin.value = 0;
    if (sliderMax) sliderMax.value = 300;
    if (minPriceInput) minPriceInput.value = 0;
    if (maxPriceInput) maxPriceInput.value = 300;
    updateSliderTrack();

    filters.size = null;
    filters.color = null;
    document.querySelectorAll('.filter-sidebar .size-chip').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.filter-sidebar .color-swatch-circle').forEach(s => s.classList.remove('active'));

    filters.search = '';
    const searchInput = document.getElementById('shopSearchInput');
    if (searchInput) searchInput.value = '';

    renderFilteredProducts();
    showToast('All filters cleared - showing all 22 products');
}

function resetColorFilter() {
    filters.color = null;
    document.querySelectorAll('.filter-sidebar .color-swatch-circle').forEach(s => s.classList.remove('active'));
    renderFilteredProducts();
}

// --------------------------------------------------------------------------
// 11. Render Filtered Products (Global)
// --------------------------------------------------------------------------
function renderFilteredProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    let filtered = productsData.filter(prod => {
        if (filters.categories.length > 0 && !filters.categories.includes(prod.category)) {
            return false;
        }
        if (filters.brands.length > 0 && !filters.brands.includes(prod.brand)) {
            return false;
        }
        if (filters.priceCustomized) {
            if (prod.price < filters.minPrice || prod.price > filters.maxPrice) {
                return false;
            }
        }
        if (filters.search && !prod.name.toLowerCase().includes(filters.search) && !prod.brand.toLowerCase().includes(filters.search)) {
            return false;
        }
        if (filters.size && !prod.sizes.includes(filters.size)) {
            return false;
        }
        if (filters.color && !prod.colors.includes(filters.color)) {
            return false;
        }
        return true;
    });

    // Sorting
    if (filters.sortBy === 'price-low') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === 'price-high') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (filters.sortBy === 'rating') {
        filtered.sort((a, b) => b.rating - a.rating);
    } else if (filters.sortBy === 'newest') {
        filtered.sort((a, b) => b.id - a.id);
    }

    const count = filtered.length;
    const productsCountText = document.getElementById('productsCountText');
    const activeFilterCount = document.getElementById('activeFilterCount');
    const noProductsMessage = document.getElementById('noProductsMessage');

    if (productsCountText) {
        productsCountText.textContent = `Showing 1-${count} of ${count} products`;
    }
    if (activeFilterCount) {
        const activeCount = (filters.categories.length > 0 ? 1 : 0) + 
                            (filters.brands.length > 0 ? 1 : 0) + 
                            (filters.priceCustomized ? 1 : 0) + 
                            (filters.size ? 1 : 0) + 
                            (filters.color ? 1 : 0);
        activeFilterCount.textContent = activeCount;
    }

    if (count === 0) {
        productsGrid.innerHTML = '';
        if (noProductsMessage) noProductsMessage.style.display = 'block';
        return;
    } else {
        if (noProductsMessage) noProductsMessage.style.display = 'none';
    }

    productsGrid.innerHTML = filtered.map(prod => {
        const isLiked = wishlistIds.includes(prod.id);
        return `
        <article class="shop-product-card" data-id="${prod.id}">
            <div class="card-image-box">
                <span class="card-badge ${prod.badgeType}">${prod.badge}</span>
                <button type="button" class="card-wishlist-btn ${isLiked ? 'active' : ''}" aria-label="Wishlist" onclick="toggleCardWishlist(event, ${prod.id})">
                    <i class='bx ${isLiked ? 'bxs-heart' : 'bx-heart'}' ${isLiked ? 'style="color:#ef4444;"' : ''}></i>
                </button>
                <img src="${prod.image}" alt="${prod.name}" class="card-img" onerror="this.src='${prod.fallbackImg}';">
            </div>
            <div class="card-body">
                <h3 class="card-title" title="${prod.name}">${prod.name}</h3>
                <div class="card-rating">
                    <div class="stars">
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star'></i>
                        <i class='bx bxs-star-half'></i>
                    </div>
                    <span class="rating-val">${prod.rating}</span>
                    <span class="reviews-count">(${prod.reviews} reviews)</span>
                </div>
                <div class="card-price-row">
                    <span class="current-price">$${prod.price.toFixed(2)}</span>
                    <span class="original-price">$${prod.originalPrice.toFixed(2)}</span>
                </div>
                <div class="card-colors-row">
                    ${prod.colors.map(col => `
                        <span class="dot-swatch ${col} ${col === prod.selectedColor ? 'active' : ''}" title="${col}" onclick="selectCardColor(event, ${prod.id}, '${col}')"></span>
                    `).join('')}
                </div>
                <div class="card-sizes-row">
                    ${prod.sizes.map(sz => `
                        <button type="button" class="card-size-btn ${sz === prod.selectedSize ? 'active' : ''}" onclick="selectCardSize(event, ${prod.id}, ${sz})">${sz}</button>
                    `).join('')}
                </div>
                <div class="card-actions-row">
                    <button type="button" class="btn-add-cart ${prod.btnStyle}" onclick="addProductToCart(event, ${prod.id})">
                        <i class='bx bx-cart'></i> Add to Cart
                    </button>
                    <button type="button" class="btn-quick-view" title="Quick View" aria-label="Quick View" onclick="openQuickViewModal(${prod.id})">
                        <i class='bx bx-show'></i>
                    </button>
                </div>
            </div>
        </article>
        `;
    }).join('');
}

// --------------------------------------------------------------------------
// 12. Explicitly Assign to Window for Inline HTML Handlers
// --------------------------------------------------------------------------
window.productsData = productsData;
window.ensureDrawersExist = ensureDrawersExist;
window.showToast = showToast;
window.updateCartUI = updateCartUI;
window.openCartDrawer = openCartDrawer;
window.closeCartDrawer = closeCartDrawer;
window.changeCartQty = changeCartQty;
window.removeCartItem = removeCartItem;
window.addProductToCart = addProductToCart;
window.updateWishlistUI = updateWishlistUI;
window.openWishlistDrawer = openWishlistDrawer;
window.closeWishlistDrawer = closeWishlistDrawer;
window.removeWishlistItem = removeWishlistItem;
window.moveWishlistProdToCart = moveWishlistProdToCart;
window.toggleCardWishlist = toggleCardWishlist;
window.selectCardSize = selectCardSize;
window.selectCardColor = selectCardColor;
window.openQuickViewModal = openQuickViewModal;
window.closeQuickViewModal = closeQuickViewModal;
window.openMobileFilter = openMobileFilter;
window.closeMobileFilter = closeMobileFilter;
window.toggleFilterGroup = toggleFilterGroup;
window.updateSliderTrack = updateSliderTrack;
window.resetAllFilters = resetAllFilters;
window.resetColorFilter = resetColorFilter;
window.renderFilteredProducts = renderFilteredProducts;

// --------------------------------------------------------------------------
// 13. DOMContentLoaded Listener & Event Bindings
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    // Auto-inject Slide-Out Drawers if not on the page
    ensureDrawersExist();

    // Drawer button events
    const cartDrawerCloseBtn = document.getElementById('cartDrawerCloseBtn');
    const cartDrawerBackdrop = document.getElementById('cartDrawerBackdrop');
    const cartContinueBtn = document.getElementById('cartContinueBtn');
    const cartCheckoutBtn = document.getElementById('cartCheckoutBtn');

    if (cartDrawerCloseBtn) cartDrawerCloseBtn.addEventListener('click', closeCartDrawer);
    if (cartDrawerBackdrop) cartDrawerBackdrop.addEventListener('click', closeCartDrawer);
    if (cartContinueBtn) cartContinueBtn.addEventListener('click', closeCartDrawer);
    if (cartCheckoutBtn) {
        cartCheckoutBtn.addEventListener('click', () => {
            showToast("Proceeding to checkout with " + cartItems.length + " item(s)!");
        });
    }

    const wishlistDrawerCloseBtn = document.getElementById('wishlistDrawerCloseBtn');
    const wishlistDrawerBackdrop = document.getElementById('wishlistDrawerBackdrop');
    const wishlistContinueBtn = document.getElementById('wishlistContinueBtn');
    const moveAllWishlistToCartBtn = document.getElementById('moveAllWishlistToCartBtn');

    if (wishlistDrawerCloseBtn) wishlistDrawerCloseBtn.addEventListener('click', closeWishlistDrawer);
    if (wishlistDrawerBackdrop) wishlistDrawerBackdrop.addEventListener('click', closeWishlistDrawer);
    if (wishlistContinueBtn) wishlistContinueBtn.addEventListener('click', closeWishlistDrawer);

    if (moveAllWishlistToCartBtn) {
        moveAllWishlistToCartBtn.addEventListener('click', () => {
            const count = wishlistIds.length;
            if (count === 0) return;
            wishlistIds.forEach(id => {
                const prod = productsData.find(p => p.id === id);
                if (prod) {
                    const existing = cartItems.find(item => item.id === prod.id);
                    if (existing) existing.qty += 1;
                    else cartItems.push({
                        id: prod.id,
                        name: prod.name,
                        brand: prod.brand,
                        price: prod.price,
                        size: prod.selectedSize,
                        color: prod.selectedColor,
                        image: prod.image,
                        fallbackImg: prod.fallbackImg,
                        qty: 1
                    });
                }
            });
            wishlistIds = [];
            document.querySelectorAll('.card-wishlist-btn').forEach(btn => {
                btn.classList.remove('active');
                btn.innerHTML = "<i class='bx bx-heart'></i>";
            });
            updateWishlistUI();
            updateCartUI();
            showToast(`Moved all ${count} saved shoes to cart!`);
            openCartDrawer();
        });
    }

    // Header & Topbar Wishlist/Cart Clicks
    const headerCartBtn = document.getElementById('headerCartBtn');
    if (headerCartBtn) {
        headerCartBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openCartDrawer();
        });
    }

    const headerWishlistBtn = document.getElementById('headerWishlistBtn');
    if (headerWishlistBtn) {
        headerWishlistBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openWishlistDrawer();
        });
    }

    const topWishlistBtn = document.getElementById('topWishlistBtn');
    if (topWishlistBtn) {
        topWishlistBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openWishlistDrawer();
        });
    }

    // Global Header Icon bindings
    document.querySelectorAll('.header-icons a, .header-icons .icon-link').forEach(link => {
        if (link.querySelector('.bx-shopping-bag')) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                openCartDrawer();
            });
        } else if (link.querySelector('.bx-heart')) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                openWishlistDrawer();
            });
        }
    });

    // Price Slider Inputs
    const sliderMin = document.getElementById('sliderMin');
    const sliderMax = document.getElementById('sliderMax');
    const minPriceInput = document.getElementById('minPriceInput');
    const maxPriceInput = document.getElementById('maxPriceInput');

    if (sliderMin && sliderMax) {
        sliderMin.addEventListener('input', (e) => {
            let val = parseInt(e.target.value) || 0;
            let maxVal = parseInt(sliderMax.value) || 300;
            if (val > maxVal - 5) {
                val = maxVal - 5;
                sliderMin.value = val;
            }
            if (minPriceInput) minPriceInput.value = val;
            filters.priceCustomized = true;
            filters.minPrice = val;
            updateSliderTrack();
            renderFilteredProducts();
        });

        sliderMax.addEventListener('input', (e) => {
            let val = parseInt(e.target.value) || 300;
            let minVal = parseInt(sliderMin.value) || 0;
            if (val < minVal + 5) {
                val = minVal + 5;
                sliderMax.value = val;
            }
            if (maxPriceInput) maxPriceInput.value = val;
            filters.priceCustomized = true;
            filters.maxPrice = val;
            updateSliderTrack();
            renderFilteredProducts();
        });

        updateSliderTrack();
    }

    if (minPriceInput && maxPriceInput) {
        minPriceInput.addEventListener('change', (e) => {
            let val = Math.max(0, Math.min(parseInt(e.target.value) || 0, filters.maxPrice - 5));
            minPriceInput.value = val;
            if (sliderMin) sliderMin.value = val;
            filters.priceCustomized = true;
            filters.minPrice = val;
            updateSliderTrack();
            renderFilteredProducts();
        });

        maxPriceInput.addEventListener('change', (e) => {
            let val = Math.min(300, Math.max(parseInt(e.target.value) || 300, filters.minPrice + 5));
            maxPriceInput.value = val;
            if (sliderMax) sliderMax.value = val;
            filters.priceCustomized = true;
            filters.maxPrice = val;
            updateSliderTrack();
            renderFilteredProducts();
        });
    }

    // Category Checkboxes
    document.querySelectorAll('input[name="category"]').forEach(cb => {
        cb.addEventListener('change', () => {
            filters.categories = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(el => el.value);
            renderFilteredProducts();
        });
    });

    // Brand Checkboxes
    document.querySelectorAll('input[name="brand"]').forEach(cb => {
        cb.addEventListener('change', () => {
            filters.brands = Array.from(document.querySelectorAll('input[name="brand"]:checked')).map(el => el.value);
            renderFilteredProducts();
        });
    });

    // Show More Brands toggle
    const showMoreBrandsBtn = document.getElementById('showMoreBrandsBtn');
    const extraBrands = document.getElementById('extraBrands');
    if (showMoreBrandsBtn && extraBrands) {
        showMoreBrandsBtn.addEventListener('click', () => {
            if (extraBrands.style.display === 'none') {
                extraBrands.style.display = 'flex';
                extraBrands.style.flexDirection = 'column';
                extraBrands.style.gap = '10px';
                showMoreBrandsBtn.textContent = '- Show Less';
            } else {
                extraBrands.style.display = 'none';
                showMoreBrandsBtn.textContent = '+ Show More Brands';
            }
        });
    }

    // Size Chips Filter
    const sizeChips = document.querySelectorAll('.filter-sidebar .size-chip');
    sizeChips.forEach(chip => {
        chip.addEventListener('click', () => {
            const sz = parseInt(chip.getAttribute('data-size'));
            if (filters.size === sz) {
                filters.size = null;
                chip.classList.remove('active');
            } else {
                sizeChips.forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                filters.size = sz;
            }
            renderFilteredProducts();
        });
    });

    // Color Swatches Filter
    const colorSwatches = document.querySelectorAll('.filter-sidebar .color-swatch-circle');
    colorSwatches.forEach(swatch => {
        swatch.addEventListener('click', () => {
            const col = swatch.getAttribute('data-color');
            if (filters.color === col) {
                filters.color = null;
                swatch.classList.remove('active');
            } else {
                colorSwatches.forEach(s => s.classList.remove('active'));
                swatch.classList.add('active');
                filters.color = col;
            }
            renderFilteredProducts();
        });
    });

    // Search Input Filter
    const shopSearchInput = document.getElementById('shopSearchInput');
    const shopSearchBtn = document.getElementById('shopSearchBtn');
    if (shopSearchInput) {
        shopSearchInput.addEventListener('input', (e) => {
            filters.search = e.target.value.trim().toLowerCase();
            renderFilteredProducts();
        });
    }
    if (shopSearchBtn && shopSearchInput) {
        shopSearchBtn.addEventListener('click', () => {
            filters.search = shopSearchInput.value.trim().toLowerCase();
            renderFilteredProducts();
        });
    }

    // Sort Dropdown
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            filters.sortBy = e.target.value;
            renderFilteredProducts();
        });
    }

    // Clear All Filters Button
    const clearAllFiltersBtn = document.getElementById('clearAllFiltersBtn');
    if (clearAllFiltersBtn) {
        clearAllFiltersBtn.addEventListener('click', resetAllFilters);
    }

    // Grid vs List View Switcher
    const gridViewBtn = document.getElementById('gridViewBtn');
    const listViewBtn = document.getElementById('listViewBtn');
    const productsGrid = document.getElementById('productsGrid');

    if (gridViewBtn && listViewBtn) {
        gridViewBtn.addEventListener('click', () => {
            gridViewBtn.classList.add('active');
            listViewBtn.classList.remove('active');
            if (productsGrid) productsGrid.classList.remove('list-view');
        });

        listViewBtn.addEventListener('click', () => {
            listViewBtn.classList.add('active');
            gridViewBtn.classList.remove('active');
            if (productsGrid) productsGrid.classList.add('list-view');
        });
    }

    // Quick View Modal events
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalOverlay = document.getElementById('modalOverlay');
    const qtyMinusBtn = document.getElementById('qtyMinusBtn');
    const qtyPlusBtn = document.getElementById('qtyPlusBtn');
    const qtyInput = document.getElementById('qtyInput');
    const modalAddToCartBtn = document.getElementById('modalAddToCartBtn');

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeQuickViewModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeQuickViewModal);

    if (qtyMinusBtn && qtyPlusBtn && qtyInput) {
        qtyMinusBtn.addEventListener('click', () => {
            let val = parseInt(qtyInput.value) || 1;
            if (val > 1) qtyInput.value = val - 1;
        });
        qtyPlusBtn.addEventListener('click', () => {
            let val = parseInt(qtyInput.value) || 1;
            if (val < 10) qtyInput.value = val + 1;
        });
    }

    if (modalAddToCartBtn) {
        modalAddToCartBtn.addEventListener('click', () => {
            if (!activeModalProd) return;
            const qty = parseInt(qtyInput.value) || 1;
            const existing = cartItems.find(item => item.id === activeModalProd.id);
            if (existing) {
                existing.qty += qty;
            } else {
                cartItems.push({
                    id: activeModalProd.id,
                    name: activeModalProd.name,
                    brand: activeModalProd.brand,
                    price: activeModalProd.price,
                    size: activeModalProd.selectedSize,
                    color: activeModalProd.selectedColor,
                    image: activeModalProd.image,
                    fallbackImg: activeModalProd.fallbackImg,
                    qty: qty
                });
            }
            updateCartUI();
            showToast(`${qty}x ${activeModalProd.name} added to cart!`);
            closeQuickViewModal();
            openCartDrawer();
        });
    }

    document.querySelectorAll('.modal-size-chips .size-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('.modal-size-chips .size-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            if (activeModalProd) {
                activeModalProd.selectedSize = parseInt(chip.getAttribute('data-size'));
            }
        });
    });

    // Mobile Filter Drawer
    const mobileFilterOpenBtn = document.getElementById('mobileFilterOpenBtn');
    const mobileFilterCloseBtn = document.getElementById('mobileFilterCloseBtn');
    const filterBackdrop = document.getElementById('filterBackdrop');

    if (mobileFilterOpenBtn) mobileFilterOpenBtn.addEventListener('click', openMobileFilter);
    if (mobileFilterCloseBtn) mobileFilterCloseBtn.addEventListener('click', closeMobileFilter);
    if (filterBackdrop) filterBackdrop.addEventListener('click', closeMobileFilter);

    // Back to top
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Newsletter Form
    const footerNewsForm = document.getElementById('footerNewsForm');
    if (footerNewsForm) {
        footerNewsForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = footerNewsForm.querySelector('input');
            if (input && input.value) {
                showToast(`Thank you for subscribing, ${input.value}!`);
                input.value = '';
            }
        });
    }

    // Pagination
    document.querySelectorAll('.shop-pagination .page-num').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.shop-pagination .page-num').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const catalog = document.querySelector('.shop-catalog-section');
            if (catalog) catalog.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Support Featured Product cards on Homepage (.product-card)
    document.querySelectorAll('.product-card').forEach(card => {
        const titleEl = card.querySelector('h3');
        const priceEl = card.querySelector('.price .current, .current-price, .price');
        const imgEl = card.querySelector('img');
        const addBtn = card.querySelector('.btn-add-cart, button.btn-cart');
        const wishBtn = card.querySelector('.wishlist-btn, button.btn-wishlist');

        const title = titleEl ? titleEl.textContent.trim() : 'Premium Footwear';
        let price = 79.99;
        if (priceEl) {
            const raw = priceEl.textContent.replace(/[^0-9.]/g, '');
            if (raw) price = parseFloat(raw) || 79.99;
        }
        const img = imgEl ? imgEl.src : '';

        let matched = productsData.find(p => p.name.toLowerCase() === title.toLowerCase());
        const prodId = matched ? matched.id : (title.length + 50);

        if (addBtn && !addBtn.getAttribute('data-bound')) {
            addBtn.setAttribute('data-bound', 'true');
            addBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const existing = cartItems.find(item => item.id === prodId);
                if (existing) {
                    existing.qty += 1;
                } else {
                    cartItems.push({
                        id: prodId,
                        name: title,
                        brand: matched ? matched.brand : 'Stepora',
                        price: matched ? matched.price : price,
                        size: matched ? matched.selectedSize : 8,
                        color: matched ? matched.selectedColor : 'Black',
                        image: matched ? matched.image : img,
                        fallbackImg: matched ? matched.fallbackImg : img,
                        qty: 1
                    });
                }
                updateCartUI();
                showToast(`${title} added to cart!`);
                openCartDrawer();
            });
        }

        if (wishBtn && !wishBtn.getAttribute('data-bound')) {
            wishBtn.setAttribute('data-bound', 'true');
            if (wishlistIds.includes(prodId)) {
                wishBtn.classList.add('active');
                wishBtn.innerHTML = "<i class='bx bxs-heart' style='color:#ef4444;'></i>";
            }
            wishBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (!wishlistIds.includes(prodId)) {
                    wishlistIds.push(prodId);
                    wishBtn.classList.add('active');
                    wishBtn.innerHTML = "<i class='bx bxs-heart' style='color:#ef4444;'></i>";
                    showToast(`${title} saved to favorites!`);
                } else {
                    wishlistIds = wishlistIds.filter(id => id !== prodId);
                    wishBtn.classList.remove('active');
                    wishBtn.innerHTML = "<i class='bx bx-heart'></i>";
                    showToast(`${title} removed from favorites`);
                }
                updateWishlistUI();
            });
        }
    });

    // Initialize Dynamic Hero Auto-Slider
    initHeroSlider();

    // Initial Startup UI State
    updateCartUI();
    updateWishlistUI();
    renderFilteredProducts();

    // Check URL parameters or hash
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('openCart') === '1' || window.location.hash === '#cart') {
        setTimeout(openCartDrawer, 300);
    } else if (urlParams.get('openWishlist') === '1' || window.location.hash === '#wishlist' || window.location.hash === '#likes') {
        setTimeout(openWishlistDrawer, 300);
    }
});

// --------------------------------------------------------------------------
// 14. Dynamic Auto-Playing Hero Carousel Slider (Global)
// --------------------------------------------------------------------------
const heroSlidesCatalog = [
    {
        subtitle: "<i class='bx bxs-zap'></i> NEW COLLECTION 2026",
        title: "Step Up<br>Your Style",
        desc: "Discover premium footwear for every journey. From casual sneakers to performance shoes, find your perfect pair at Stepora.",
        btnText: "Shop Now <i class='bx bx-right-arrow-alt'></i>",
        btnLink: "/theme_stepora/static/shop.html",
        badge: "Comfort Meets Style",
        img: "/theme_stepora/static/images/hero_slide_1.jpg",
        altImg: "images/hero_slide_1.jpg"
    },
    {
        subtitle: "<i class='bx bxs-hot'></i> TRENDING NOW 2026",
        title: "Engineered For Movement,<br>Designed For Life.",
        desc: "Discover ultra-responsive cushioning, breathable ergonomics, and lightweight agility crafted for every stride of your journey.",
        btnText: "Shop Collection <i class='bx bx-right-arrow-alt'></i>",
        btnLink: "/theme_stepora/static/shop.html?category=Running",
        badge: "Performance Redefined",
        img: "/theme_stepora/static/images/hero_slide_2.jpg",
        altImg: "images/hero_slide_2.jpg"
    },
    {
        subtitle: "<i class='bx bxs-award'></i> ICONIC STREETWEAR",
        title: "Make Every Step<br>A Statement.",
        desc: "Bold proportions, vibrant retro colorways, and timeless street culture aesthetics built to elevate your daily footwear rotation.",
        btnText: "Shop Sneakers <i class='bx bx-right-arrow-alt'></i>",
        btnLink: "/theme_stepora/static/shop.html?category=Casual",
        badge: "Street Culture Icon",
        img: "/theme_stepora/static/images/hero_slide_3.jpg",
        altImg: "images/hero_slide_3.jpg"
    },
    {
        subtitle: "<i class='bx bxs-rocket'></i> PRO ATHLETICS & LUXURY",
        title: "Timeless Elegance,<br>Unrivaled Craft.",
        desc: "Hand-finished genuine full-grain leather oxfords and athletic racers built for confidence, luxury comfort, and enduring speed.",
        btnText: "Gear Up Now <i class='bx bx-right-arrow-alt'></i>",
        btnLink: "/theme_stepora/static/shop.html?category=Sports",
        badge: "Handmade Luxury",
        img: "/theme_stepora/static/images/hero_slide_4.jpg",
        altImg: "images/hero_slide_4.jpg"
    }
];

function initHeroSlider() {
    const slider = document.getElementById('heroSlider') || document.querySelector('.hero');
    if (!slider) return;

    let slides = slider.querySelectorAll('.hero-slide');
    let dots = slider.querySelectorAll('.carousel-dots .dot');
    const prevBtn = slider.querySelector('.nav-btn.prev') || document.getElementById('heroPrevBtn');
    const nextBtn = slider.querySelector('.nav-btn.next') || document.getElementById('heroNextBtn');

    let currentSlide = 0;
    let autoSlideTimer = null;
    const intervalTime = 5000;

    // Mode A: Multi-slide DOM elements (.hero-slide)
    if (slides && slides.length > 1) {
        function goToSlide(index) {
            if (index < 0) {
                currentSlide = slides.length - 1;
            } else if (index >= slides.length) {
                currentSlide = 0;
            } else {
                currentSlide = index;
            }

            slides.forEach((slide, idx) => {
                if (idx === currentSlide) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });

            dots = slider.querySelectorAll('.carousel-dots .dot');
            dots.forEach((dot) => {
                const dotIdx = dot.getAttribute('data-index') !== null 
                    ? parseInt(dot.getAttribute('data-index'))
                    : Array.from(dot.parentNode.children).indexOf(dot);
                if (dotIdx === currentSlide) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        function nextSlide() { goToSlide(currentSlide + 1); }
        function prevSlide() { goToSlide(currentSlide - 1); }
        function startAutoSlide() { stopAutoSlide(); autoSlideTimer = setInterval(nextSlide, intervalTime); }
        function stopAutoSlide() { if (autoSlideTimer) { clearInterval(autoSlideTimer); autoSlideTimer = null; } }

        if (nextBtn) {
            nextBtn.onclick = (e) => { e.preventDefault(); nextSlide(); startAutoSlide(); };
        }
        if (prevBtn) {
            prevBtn.onclick = (e) => { e.preventDefault(); prevSlide(); startAutoSlide(); };
        }

        dots.forEach((dot) => {
            dot.onclick = () => {
                const dotIdx = dot.getAttribute('data-index') !== null 
                    ? parseInt(dot.getAttribute('data-index'))
                    : Array.from(dot.parentNode.children).indexOf(dot);
                goToSlide(dotIdx);
                startAutoSlide();
            };
        });

        slider.onmouseenter = stopAutoSlide;
        slider.onmouseleave = startAutoSlide;

        let touchStartX = 0;
        slider.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; stopAutoSlide(); }, { passive: true });
        slider.addEventListener('touchend', (e) => {
            const touchEndX = e.changedTouches[0].screenX;
            if (Math.abs(touchEndX - touchStartX) > 40) {
                if (touchEndX - touchStartX < 0) nextSlide();
                else prevSlide();
            }
            startAutoSlide();
        }, { passive: true });

        startAutoSlide();
        return;
    }

    // Mode B: Single slide container -> dynamically update content and images!
    const heroContent = slider.querySelector('.hero-content');
    const heroImage = slider.querySelector('.hero-image');
    if (!heroContent || !heroImage) return;

    let dotsContainer = slider.querySelector('.carousel-dots');
    if (!dotsContainer) {
        dotsContainer = document.createElement('div');
        dotsContainer.className = 'carousel-dots';
        heroContent.appendChild(dotsContainer);
    }
    dotsContainer.innerHTML = `
        <span class="dot active" data-index="0" title="Slide 1"></span>
        <span class="dot" data-index="1" title="Slide 2"></span>
        <span class="dot" data-index="2" title="Slide 3"></span>
        <span class="dot" data-index="3" title="Slide 4"></span>
    `;
    dots = dotsContainer.querySelectorAll('.dot');

    const subEl = heroContent.querySelector('.subtitle');
    const h1El = heroContent.querySelector('h1');
    const pEl = heroContent.querySelector('p');
    const btnEl = heroContent.querySelector('.btn-primary');
    const imgEl = heroImage.querySelector('img');
    const badgeEl = heroImage.querySelector('.floating-text') || heroImage.querySelector('.hero-doodle-badge');

    function applySlideData(idx) {
        const data = heroSlidesCatalog[idx];
        if (!data) return;

        if (heroContent) heroContent.style.opacity = '0.4';
        if (heroImage) heroImage.style.opacity = '0.4';

        setTimeout(() => {
            if (subEl) subEl.innerHTML = data.subtitle;
            if (h1El) h1El.innerHTML = data.title;
            if (pEl) pEl.textContent = data.desc;
            if (btnEl) {
                btnEl.innerHTML = data.btnText;
                btnEl.setAttribute('href', data.btnLink);
            }
            if (imgEl) {
                imgEl.src = data.img;
                imgEl.onerror = function() {
                    this.onerror = null;
                    this.src = data.altImg;
                };
            }
            if (badgeEl) {
                const span = badgeEl.querySelector('span') || badgeEl;
                span.textContent = data.badge;
            }

            dots.forEach((dot, dIdx) => {
                if (dIdx === idx) dot.classList.add('active');
                else dot.classList.remove('active');
            });

            if (heroContent) { heroContent.style.transition = 'opacity 0.35s ease'; heroContent.style.opacity = '1'; }
            if (heroImage) { heroImage.style.transition = 'opacity 0.35s ease'; heroImage.style.opacity = '1'; }
        }, 150);
    }

    function goToSingleSlide(index) {
        if (index < 0) currentSlide = heroSlidesCatalog.length - 1;
        else if (index >= heroSlidesCatalog.length) currentSlide = 0;
        else currentSlide = index;

        applySlideData(currentSlide);
    }

    function nextSingleSlide() { goToSingleSlide(currentSlide + 1); }
    function prevSingleSlide() { goToSingleSlide(currentSlide - 1); }
    function startSingleAutoSlide() { stopSingleAutoSlide(); autoSlideTimer = setInterval(nextSingleSlide, intervalTime); }
    function stopSingleAutoSlide() { if (autoSlideTimer) { clearInterval(autoSlideTimer); autoSlideTimer = null; } }

    if (nextBtn) {
        nextBtn.onclick = (e) => { e.preventDefault(); nextSingleSlide(); startSingleAutoSlide(); };
    }
    if (prevBtn) {
        prevBtn.onclick = (e) => { e.preventDefault(); prevSingleSlide(); startSingleAutoSlide(); };
    }

    dots.forEach((dot, dIdx) => {
        dot.onclick = () => {
            goToSingleSlide(dIdx);
            startSingleAutoSlide();
        };
    });

    slider.onmouseenter = stopSingleAutoSlide;
    slider.onmouseleave = startSingleAutoSlide;

    let touchStartX = 0;
    slider.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; stopSingleAutoSlide(); }, { passive: true });
    slider.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        if (Math.abs(touchEndX - touchStartX) > 40) {
            if (touchEndX - touchStartX < 0) nextSingleSlide();
            else prevSingleSlide();
        }
        startSingleAutoSlide();
    }, { passive: true });

    // Set initial slide 0 content immediately
    applySlideData(0);
    startSingleAutoSlide();
}
window.initHeroSlider = initHeroSlider;

// --------------------------------------------------------------------------
// 15. Ensure Category Images (Formal Shoe, etc.) Always Load Reliably
// --------------------------------------------------------------------------
function fixCategoryImages() {
    document.querySelectorAll('.category-card, a[href*="Formal"]').forEach(card => {
        const text = (card.textContent || '').trim();
        if (text.includes('Formal') || (card.getAttribute('href') && card.getAttribute('href').includes('Formal'))) {
            const img = card.querySelector('img');
            if (img) {
                img.src = '/theme_stepora/static/images/category_formal.jpg';
                img.onerror = function() {
                    this.onerror = null;
                    this.src = 'images/category_formal.jpg';
                };
            }
        }
    });
}
window.fixCategoryImages = fixCategoryImages;

// --------------------------------------------------------------------------
// 16. About Us Page Interactive Logic (Counter Animations, Video Modal, Pills)
// --------------------------------------------------------------------------
function initAboutPage() {
    // 1. Interactive Video Modal
    const playBtn = document.getElementById('aboutPlayBtn');
    const modal = document.getElementById('aboutVideoModal');
    const closeBtn = document.getElementById('aboutCloseVideoBtn');
    const videoElem = document.getElementById('aboutVideoElem');

    if (playBtn && modal) {
        playBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('active');
            if (videoElem) {
                videoElem.play().catch(() => {});
            }
        });
    }

    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            if (videoElem) {
                videoElem.pause();
            }
        });
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                if (videoElem) {
                    videoElem.pause();
                }
            }
        });
    }

    // 2. Animated Metric Counters
    const statsSection = document.querySelector('.about-stats-card');
    if (statsSection && 'IntersectionObserver' in window) {
        let hasCounted = false;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasCounted) {
                    hasCounted = true;
                    animateCounters();
                }
            });
        }, { threshold: 0.2 });
        observer.observe(statsSection);
    }

    function animateCounters() {
        document.querySelectorAll('.stat-num[data-target]').forEach(el => {
            const target = parseInt(el.getAttribute('data-target'), 10);
            const prefix = el.getAttribute('data-prefix') || '';
            const suffix = el.getAttribute('data-suffix') || '';
            let current = 0;
            const duration = 1200; // 1.2s
            const stepTime = 20;
            const steps = duration / stepTime;
            const increment = target / steps;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                    el.textContent = `${prefix}${target.toLocaleString()}${suffix}`;
                } else {
                    el.textContent = `${prefix}${Math.floor(current).toLocaleString()}${suffix}`;
                }
            }, stepTime);
        });
    }

    // 3. Interactive Value Pills
    const valuePills = document.querySelectorAll('.value-pill');
    valuePills.forEach(pill => {
        pill.addEventListener('click', () => {
            valuePills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            const pillText = pill.textContent.trim();
            if (typeof showToast === 'function') {
                showToast(`Stepora Core Pillar: ${pillText}`);
            }
        });
    });

    // 4. Update Header Badges for Cart & Wishlist
    if (typeof updateCartUI === 'function') {
        try { updateCartUI(); } catch (e) {}
    }
    if (typeof updateWishlistUI === 'function') {
        try { updateWishlistUI(); } catch (e) {}
    }

    // 5. Back to Top Button
    const bttBtn = document.getElementById('backToTopBtn');
    if (bttBtn) {
        bttBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 6. Newsletter Subscription
    const newsForm = document.getElementById('newsletterForm');
    if (newsForm) {
        newsForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = newsForm.querySelector('input[type="email"]');
            if (input && input.value) {
                if (typeof showToast === 'function') {
                    showToast('🎉 Thank you for subscribing to Stepora updates!');
                } else {
                    alert('🎉 Thank you for subscribing to Stepora updates!');
                }
                input.value = '';
            }
        });
    }
}
window.initAboutPage = initAboutPage;

// --------------------------------------------------------------------------
// 17. Universal Navigation Guard for About Us Links
// --------------------------------------------------------------------------
document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;
    const text = (link.textContent || '').trim().toLowerCase();
    const href = (link.getAttribute('href') || '').trim();

    if (text === 'about' || text === 'about us') {
        if (href === '#' || href === '#about' || href === '' || href === 'javascript:void(0)') {
            e.preventDefault();
            if (window.location.protocol === 'file:') {
                window.location.href = 'about.html';
            } else if (window.location.pathname.includes('/theme_stepora/static/')) {
                window.location.href = '/theme_stepora/static/about.html';
            } else {
                window.location.href = '/aboutus';
            }
        }
    }

    if (text === 'contact' || text === 'contact us') {
        if (href === '#' || href === '#contact' || href === '/#contact' || href.includes('#contact') || href === '' || href === 'javascript:void(0)') {
            e.preventDefault();
            if (window.location.protocol === 'file:') {
                window.location.href = 'contact.html';
            } else if (window.location.pathname.includes('/theme_stepora/static/')) {
                window.location.href = '/theme_stepora/static/contact.html';
            } else {
                window.location.href = '/contactus';
            }
        }
    }
});

// --------------------------------------------------------------------------
// 18. Contact Us Page Interactive Logic (Accordion FAQs & Form Validation)
// --------------------------------------------------------------------------
function initContactPage() {
    // 1. FAQ Accordion Toggle
    const faqButtons = document.querySelectorAll('.faq-question-btn');
    faqButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.faq-item');
            if (!item) return;
            const answerPane = item.querySelector('.faq-answer-pane');
            const isActive = item.classList.contains('active');

            // Close other items if desired
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    const otherPane = otherItem.querySelector('.faq-answer-pane');
                    if (otherPane) otherPane.style.maxHeight = null;
                }
            });

            if (isActive) {
                item.classList.remove('active');
                if (answerPane) answerPane.style.maxHeight = null;
            } else {
                item.classList.add('active');
                if (answerPane) answerPane.style.maxHeight = answerPane.scrollHeight + 'px';
            }
        });
    });

    // Open first FAQ item by default if exists
    const firstFaq = document.querySelector('.faq-item');
    if (firstFaq && !document.querySelector('.faq-item.active')) {
        firstFaq.classList.add('active');
        const firstPane = firstFaq.querySelector('.faq-answer-pane');
        if (firstPane) firstPane.style.maxHeight = firstPane.scrollHeight + 'px';
    }

    // 2. Contact Message Form Validation & Feedback
    const contactForm = document.getElementById('contactMessageForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nameInput = document.getElementById('contactName');
            const emailInput = document.getElementById('contactEmail');
            const phoneInput = document.getElementById('contactPhone');
            const subjectSelect = document.getElementById('contactSubject');
            const messageTextarea = document.getElementById('contactMessage');
            const agreeCheckbox = document.getElementById('contactAgree');

            if (!nameInput || !nameInput.value.trim()) {
                if (typeof showToast === 'function') showToast('⚠️ Please enter your full name.');
                if (nameInput) nameInput.focus();
                return;
            }

            if (!emailInput || !emailInput.value.trim() || !emailInput.value.includes('@')) {
                if (typeof showToast === 'function') showToast('⚠️ Please enter a valid email address.');
                if (emailInput) emailInput.focus();
                return;
            }

            if (subjectSelect && (!subjectSelect.value || subjectSelect.value === '')) {
                if (typeof showToast === 'function') showToast('⚠️ Please select a subject topic.');
                subjectSelect.focus();
                return;
            }

            if (!messageTextarea || !messageTextarea.value.trim()) {
                if (typeof showToast === 'function') showToast('⚠️ Please write your message.');
                if (messageTextarea) messageTextarea.focus();
                return;
            }

            if (agreeCheckbox && !agreeCheckbox.checked) {
                if (typeof showToast === 'function') showToast('⚠️ Please agree to the Terms & Conditions.');
                agreeCheckbox.focus();
                return;
            }

            // Success feedback
            if (typeof showToast === 'function') {
                showToast('🎉 Thank you! Your message has been sent successfully. We will get back to you within 24 hours.');
            } else {
                alert('🎉 Thank you! Your message has been sent successfully. We will get back to you within 24 hours.');
            }

            contactForm.reset();
        });
    }

    // 3. Update Header Badges for Cart & Wishlist
    if (typeof updateCartUI === 'function') {
        try { updateCartUI(); } catch (e) {}
    }
    if (typeof updateWishlistUI === 'function') {
        try { updateWishlistUI(); } catch (e) {}
    }
}
window.initContactPage = initContactPage;

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(initHeroSlider, 50);
    setTimeout(fixCategoryImages, 50);
    setTimeout(initAboutPage, 50);
    setTimeout(initContactPage, 50);
} else {
    document.addEventListener('DOMContentLoaded', () => {
        initHeroSlider();
        fixCategoryImages();
        initAboutPage();
        initContactPage();
    });
}




