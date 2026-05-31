const HEADER_HTML = `
    <!-- ───── NAVBAR ───── -->
    <nav class="navbar" id="navbar">
        <a href="index.html#home" class="nav-brand">
            <img src="logo.png" alt="Lap Zerin">
            <span>lap.zerin</span>
        </a>

        <ul class="nav-center">
            <li><a href="index.html#home" data-key="home"><i class="fas fa-home"></i> Home</a></li>
            <li><a href="index.html#about" data-key="about"><i class="fas fa-info-circle"></i> About</a></li>
            <li><a href="products.html" data-key="products"><i class="fas fa-shopping-bag"></i> Products</a></li>
            <li><a href="studio.html"><i class="fas fa-magic"></i> Studio</a></li>
            <li><a href="faq.html"><i class="fas fa-question-circle"></i> FAQ</a></li>
            <li><a href="index.html#footer" data-key="contact"><i class="fas fa-envelope"></i> Contact</a></li>
        </ul>

        <div class="nav-right">
            <div class="lang-wrap">
                <button class="lang-toggle lang-circle" onclick="toggleLang()">
                    <img src="https://flagcdn.com/w40/us.png" id="flag-icon" alt="EN">
                </button>
                <div class="lang-panel" id="lang-panel">
                    <a href="javascript:void(0)" onclick="setLanguage('en')"><img src="https://flagcdn.com/w40/us.png" alt="EN"> English</a>
                    <a href="javascript:void(0)" onclick="setLanguage('ar')"><img src="https://flagcdn.com/w40/sa.png" alt="AR"> العربية</a>
                    <a href="javascript:void(0)" onclick="setLanguage('ku')"><img src="https://upload.wikimedia.org/wikipedia/commons/3/35/Flag_of_Kurdistan.svg" alt="KU"> Kurdî (Badini)</a>
                </div>
            </div>
            <a href="cart.html" class="btn btn-outline cart-nav-btn" style="padding: 8px 12px; border-color: var(--white-10);">
                <i class="fas fa-shopping-cart" style="color:var(--gold);"></i>
                <span id="cart-count-badge" class="cart-badge">0</span>
            </a>
            <a href="auth.html" class="btn btn-gold nav-login" data-key="nav_sign_in_up"><i class="fas fa-user-circle"></i> Sign In / Sign Up</a>
        </div>

        <div class="mobile-nav-actions">
            <a href="cart.html" class="btn btn-outline cart-nav-btn mobile-cart-btn" style="padding: 6px 12px; border-color: var(--white-10); border-radius: 5px; margin-right: 15px;">
                <i class="fas fa-shopping-cart" style="color:var(--gold);"></i>
                <span class="cart-badge">0</span>
            </a>
            <button class="hamburger" onclick="openDrawer()"><i class="fas fa-bars"></i></button>
        </div>
    </nav>

    <!-- ───── MOBILE DRAWER ───── -->
    <div class="drawer-overlay" id="drawer-overlay" onclick="closeDrawer()"></div>
    <div class="mobile-drawer" id="mobile-drawer">
        <div class="drawer-head">
            <span>lap.zerin</span>
            <button class="drawer-close" onclick="closeDrawer()"><i class="fas fa-times"></i></button>
        </div>
        <div class="drawer-links">
            <a href="index.html#home" onclick="closeDrawer()" data-key="home"><i class="fas fa-home"></i> Home</a>
            <a href="index.html#about" onclick="closeDrawer()" data-key="about"><i class="fas fa-info-circle"></i> About</a>
            <a href="products.html" onclick="closeDrawer()" data-key="products"><i class="fas fa-shopping-bag"></i> Products</a>
            <a href="studio.html" onclick="closeDrawer()"><i class="fas fa-magic"></i> Studio</a>
            <a href="faq.html" onclick="closeDrawer()"><i class="fas fa-question-circle"></i> FAQ</a>
            <a href="index.html#footer" onclick="closeDrawer()" data-key="contact"><i class="fas fa-envelope"></i> Contact</a>
        </div>
        <div class="drawer-bottom">
            <a href="auth.html" class="btn btn-gold" style="width:100%; justify-content: center; margin-bottom: 15px;"
                data-key="nav_sign_in_up"><i class="fas fa-user-circle"></i> Sign
                In / Sign Up</a>
            <div class="lang-wrap">
                <button class="lang-toggle lang-circle" onclick="toggleLang()">
                    <img src="https://flagcdn.com/w40/us.png" id="flag-icon-m" alt="EN">
                </button>
                <div class="lang-panel" id="lang-panel-m">
                    <a href="javascript:void(0)" onclick="setLanguage('en')"><img src="https://flagcdn.com/w40/us.png"
                            alt="EN"> English</a>
                    <a href="javascript:void(0)" onclick="setLanguage('ar')"><img src="https://flagcdn.com/w40/sa.png"
                            alt="AR"> العربية</a>
                    <a href="javascript:void(0)" onclick="setLanguage('ku')"><img
                            src="https://upload.wikimedia.org/wikipedia/commons/3/35/Flag_of_Kurdistan.svg" alt="KU">
                        Kurdî (Badini)</a>
                </div>
            </div>
        </div>
    </div>

`;

const FOOTER_HTML = `
    <!-- ───── FOOTER ───── -->
    <footer class="footer" id="footer">
        <div class="footer-grid">
            <div>
                <a href="index.html#home" class="nav-brand footer-brand">
                    <img src="logo.png" alt="Logo" style="height:55px;">
                    <span>lap.zerin</span>
                </a>
                <div class="footer-about">
                    <p data-key="footer_desc">Lap Zerin is dedicated to providing premium custom apparel and accessories
                        that elevate your style. Excellence is our standard.</p>
                </div>
            </div>
            <div>
                <h4 data-key="footer_quick">Quick Links</h4>
                <ul class="footer-links">
                    <li><a href="index.html#home" data-key="home"><i class="fas fa-angle-right"></i> Home</a></li>
                    <li><a href="index.html#about" data-key="about"><i class="fas fa-angle-right"></i> About</a></li>
                    <li><a href="products.html" data-key="products"><i class="fas fa-angle-right"></i> Products</a></li>
                    <li><a href="studio.html"><i class="fas fa-angle-right"></i> Studio</a></li>
                    <li><a href="faq.html"><i class="fas fa-angle-right"></i> FAQ</a></li>
                </ul>
            </div>
            <div>
                <h4 data-key="footer_contact">Contact Info</h4>
                <div class="contact-list">
                    <div class="contact-row"><i class="fas fa-phone"></i><span>+964 750 000 0000</span></div>
                    <div class="contact-row"><i class="fas fa-envelope"></i><span>info@lapzerin.com</span></div>
                    <div class="contact-row"><i class="fas fa-location-dot"></i><span>Duhok, Kurdistan</span></div>
                </div>
                <div class="social-row">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-snapchat-ghost"></i></a>
                    <a href="#"><i class="fab fa-whatsapp"></i></a>
                    <a href="#"><i class="fab fa-tiktok"></i></a>
                </div>
            </div>
        </div>
        <div class="footer-bar">
            <p>&copy; 2026 Lap Zerin. All Rights Reserved.</p>
        </div>
    </footer>
`;

const PRODUCT_MODAL_HTML = `
    <!-- ───── PRODUCT OVERVIEW MODAL ───── -->
    <div class="modal-bg" id="product-overview-modal" onclick="if(event.target === this) closeProductModal()">
        <div class="modal-box" style="max-width: 650px; padding: 0; overflow: hidden; display: flex; flex-wrap: wrap; border-radius: 12px;">
            <button class="modal-close" onclick="closeProductModal()" style="position: absolute; top: 12px; right: 12px; z-index: 10; background: rgba(0,0,0,0.5); border: none;"><i class="fas fa-times"></i></button>
            <div style="flex: 1; min-width: 250px; background: #111;">
                <img id="pom-img" src="" alt="Product" style="width: 100%; height: 100%; object-fit: cover; max-height: 300px; display: block;">
            </div>
            <div class="pom-content" style="flex: 1; min-width: 250px; padding: 25px 30px; display: flex; flex-direction: column; justify-content: center;">
                <h2 id="pom-title" style="color: var(--gold); margin-bottom: 10px; font-size: 1.6rem; text-transform: uppercase;">Product</h2>
                <h3 id="pom-price" style="font-size: 1.3rem; margin-bottom: 15px;">$0.00</h3>
                <p style="color: var(--white-60); margin-bottom: 25px; line-height: 1.5; font-size: 0.95rem;">Premium high-quality product. Add to your order today and experience true craftsmanship.</p>
                <button class="btn btn-gold" style="width: 100%; justify-content: center; padding: 12px;" onclick="const t = document.getElementById('pom-title').innerText; const p = parseFloat(document.getElementById('pom-price').innerText.replace('$','')); addToCart(t, p); closeProductModal();">
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
            </div>
        </div>
    </div>
`;

function injectComponents() {
    const headerEl = document.getElementById('lapzerin-header');
    if (headerEl) headerEl.innerHTML = HEADER_HTML;

    const footerEl = document.getElementById('lapzerin-footer');
    if (footerEl) {
        footerEl.innerHTML = FOOTER_HTML;
        // Inject modal at the bottom
        footerEl.insertAdjacentHTML('beforeend', PRODUCT_MODAL_HTML);
    }
}
