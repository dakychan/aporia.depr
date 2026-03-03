function loadeHeader() {
  const currentUser = localStorage.getItem('currentUser');
  const base = CONFIG.basePath || '';
  const authButtons = currentUser 
    ? `<a href="${base}/cabinet/cabinet.html" class="btn btn-ghost"> <span data-lang="btn_cabinet">Cabinet</span></a>`
    : `<a href="${base}/" class="btn btn-ghost" onclick="openModal('signin'); return false;"><i class="fa-solid fa-right-to-bracket"></i> <span data-lang="btn_signin">Sign In</span></a>
       <a href="${base}/" class="btn btn-primary" onclick="openModal('signup'); return false;"><i class="fa-regular fa-user"></i> <span data-lang="btn_signup">Sign Up</span></a>`;

  const headerHTML = `
       <nav>
<a href="${base}/" class="nav-left">
    <div class="logo">
        <span class="client-name"></span>
    </div>
</a>

        <div class="nav-right">
            <div class="nav-links">
                <a href="${base}/" class="active"><i class="fa-solid fa-house"></i> <span data-lang="nav_home">Home</span></a>
                <a href="${base}/product/product.html"><i class="fa-solid fa-box"></i> <span data-lang="nav_products">Products</span></a>
                <a href="${base}/eula/eula.html"><i class="fa-solid fa-scale-balanced"></i> <span data-lang="nav_terms">Eula</span></a>
            </div>
            <div class="lang-switcher">
                <button class="lang-btn active" onclick="setLanguage('en')">EN</button>
                <button class="lang-btn" onclick="setLanguage('ru')">RU</button>
            </div>
            <div class="auth-buttons">
                ${authButtons}
            </div>
        </div>
    </nav>
  `;
  
  const container = document.getElementById('header-container');
  if (container) container.innerHTML = headerHTML;
}

function loadeHeaderProduct() {
  const currentUser = localStorage.getItem('currentUser');
  const base = CONFIG.basePath || '';
  const authButtons = currentUser 
    ? `<a href="${base}/cabinet/cabinet.html" class="btn btn-ghost"> <span data-lang="btn_cabinet">Cabinet</span></a>`
    : `<a href="${base}/" class="btn btn-ghost" onclick="openModal('signin'); return false;"><i class="fa-solid fa-right-to-bracket"></i> <span data-lang="btn_signin">Sign In</span></a>
       <a href="${base}/" class="btn btn-primary" onclick="openModal('signup'); return false;"><i class="fa-regular fa-user"></i> <span data-lang="btn_signup">Sign Up</span></a>`;

  const headerHTML = `
       <nav>
<a href="${base}/" class="nav-left">
    <div class="logo">
        <span class="client-name"></span>
    </div>
</a>

        <div class="nav-right">
            <div class="nav-links">
                <a href="${base}/"><i class="fa-solid fa-house"></i> <span data-lang="nav_home">Home</span></a>
                <a href="${base}/product/product.html" class="active"><i class="fa-solid fa-box"></i> <span data-lang="nav_products">Products</span></a>
                <a href="${base}/eula/eula.html"><i class="fa-solid fa-scale-balanced"></i> <span data-lang="nav_terms">Eula</span></a>
            </div>
            <div class="lang-switcher">
                <button class="lang-btn active" onclick="setLanguage('en')">EN</button>
                <button class="lang-btn" onclick="setLanguage('ru')">RU</button>
            </div>
            <div class="auth-buttons">
                ${authButtons}
            </div>
        </div>
    </nav>
  `;
  
  document.getElementById('header-container-product').innerHTML = headerHTML;
}

function loadeHeaderCabinet() {
  const base = CONFIG.basePath || '';
  const headerHTML = `
       <nav>
<a href="${base}/" class="nav-left">
    <div class="logo">
        <span class="client-name"></span>
    </div>
</a>

        <div class="nav-right">
            <div class="nav-links">
                <a href="${base}/"><i class="fa-solid fa-house"></i> <span data-lang="nav_home">Home</span></a>
                <a href="${base}/product/product.html"><i class="fa-solid fa-box"></i> <span data-lang="nav_products">Products</span></a>
                <a href="${base}/eula/eula.html"><i class="fa-solid fa-scale-balanced"></i> <span data-lang="nav_terms">Eula</span></a>
            </div>
            <div class="lang-switcher">
                <button class="lang-btn active" onclick="setLanguage('en')">EN</button>
                <button class="lang-btn" onclick="setLanguage('ru')">RU</button>
            </div>
            <div class="auth-buttons">
                <a href="#" class="btn btn-ghost" onclick="handleLogout(); return false;"><i class="fa-solid fa-right-to-bracket"></i> <span data-lang="btn_logout">Exit</span></a>
            </div>
        </div>
    </nav>
  `;
  
  document.getElementById('header-container-cabinet').innerHTML = headerHTML;
}

function handleLogout() {
    const base = CONFIG.basePath || '';
    localStorage.removeItem('currentUser');
    document.cookie = 'auth_user=; path=/; max-age=0';
    localStorage.removeItem('user');
    window.location.href = base + '/';
}

function loadeHeaderTerm() {
  const currentUser = localStorage.getItem('currentUser');
  const base = CONFIG.basePath || '';
  const authButtons = currentUser 
    ? `<a href="${base}/cabinet/cabinet.html" class="btn btn-ghost"> <span data-lang="btn_cabinet">Cabinet</span></a>`
    : `<a href="${base}/" class="btn btn-ghost" onclick="openModal('signin'); return false;"><i class="fa-solid fa-right-to-bracket"></i> <span data-lang="btn_signin">Sign In</span></a>`;

  const headerHTML = `
       <nav>
<a href="${base}/" class="nav-left">
    <div class="logo">
        <span class="client-name"></span>
    </div>
</a>

        <div class="nav-right">
            <div class="nav-links">
                <a href="${base}/"><i class="fa-solid fa-house"></i> <span data-lang="nav_home">Home</span></a>
                <a href="${base}/product/product.html"><i class="fa-solid fa-box"></i> <span data-lang="nav_products">Products</span></a>
                <a href="${base}/eula/eula.html" class="active"><i class="fa-solid fa-scale-balanced"></i> <span data-lang="nav_terms">Eula</span></a>
            </div>
            <div class="lang-switcher">
                <button class="lang-btn active" onclick="setLanguage('en')">EN</button>
                <button class="lang-btn" onclick="setLanguage('ru')">RU</button>
            </div>
            <div class="auth-buttons">
                ${authButtons}
            </div>
        </div>
    </nav>
  `;
  
  document.getElementById('header-container-home').innerHTML = headerHTML;
}

document.addEventListener('DOMContentLoaded', loadeHeaderTerm);
document.addEventListener('DOMContentLoaded', loadeHeaderCabinet);
document.addEventListener('DOMContentLoaded', loadeHeader);
document.addEventListener('DOMContentLoaded', loadeHeaderProduct);
