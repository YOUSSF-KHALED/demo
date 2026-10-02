// ES Store — البيانات المشتركة بين كل الصفحات (منتجات، سلة، كوبونات، طلبات، إعدادات)
// الديمو بيحفظ كل حاجة في متصفح الجهاز (localStorage) — مفيش سيرفر لسه.

// المنتجات الافتراضية — لوحة التحكم بتبدأ منها
const DEFAULT_PRODUCTS = {
  'valcanix': {
    name: 'Valcanix Vitamin C Cream',
    sub: 'كريم فيتامين سي للتفتيح',
    category: 'بشرة',
    price: 450,
    oldPrice: 550,
    size: '١٠٠ مل',
    images: ['images/valcanix-model.jpeg', 'images/valcanix-orange.jpeg'],
    description: 'قنبلة التفتيح من ES Store. كريم Valcanix بفيتامين سي بيوحّد لون البشرة ويقلل التصبغات والبقع الداكنة، وبيدي بشرتك نضارة وإشراقة من أول أسبوعين استخدام.',
    benefits: ['تفتيح وتوحيد لون البشرة', 'مقاومة علامات التقدم في السن والتجاعيد', 'تجديد خلايا البشرة', 'ترطيب وتغذية عميقة'],
    ingredients: ['فيتامين سي', 'زيت الأرجان', 'زيت البيو', 'بروتينات الحليب'],
    usage: 'يُستخدم مرتين يومياً صباحاً ومساءً على بشرة نظيفة وجافة. دلّكي كمية صغيرة بحركات دائرية لحد ما يتشرب. يُفضل استخدام واقي شمس في الصباح.',
    rating: 4.9,
    reviews: 128
  },
  'coconut': {
    name: 'Coconut Milk Collagen',
    sub: 'كريم كولاجين لنعومة وتفتيح البشرة',
    category: 'بشرة',
    price: 350,
    size: '١٠٠ جم',
    badge: 'جديد',
    images: ['images/coconut-milk-collagen.jpeg'],
    description: 'ادي بشرتك العناية اللي تستحقها مع Coconut Milk Collagen. كريم غني بحليب جوز الهند والكولاجين بيدي البشرة نعومة ومرونة، وممكن يُستخدم كبديل لكريم الأساس قبل المكياج.',
    benefits: ['توحيد لون البشرة', 'التخلص من آثار حب الشباب', 'تقليل التجاعيد والخطوط الرفيعة', 'حماية البشرة من أشعة الشمس'],
    ingredients: ['حليب جوز الهند', 'كولاجين', 'زيوت طبيعية مغذية'],
    usage: 'يُوضع على الوش والرقبة بعد الغسيل مرة أو مرتين يومياً. ممكن يُستخدم كقاعدة قبل المكياج.',
    rating: 4.8,
    reviews: 64
  },
  'magical-mix': {
    name: 'Magical Mix',
    sub: 'زيت لتطويل وتقوية الشعر',
    category: 'شعر',
    price: 380,
    images: ['images/magical-mix-comb.jpeg', 'images/magical-mix-pink.jpeg'],
    description: 'وحش الإطالة! زيت Magical Mix خلطة زيوت طبيعية بتغذي فروة الراس وبصيلات الشعر، بتساعد على تطويل الشعر وتقويته وبتقلل التساقط، وبتدي شعرك لمعان وحيوية.',
    benefits: ['تطويل الشعر وتسريع نموه', 'تقوية البصيلات وتقليل التساقط', 'لمعان ونعومة من أول استخدام', 'تغذية فروة الراس'],
    ingredients: ['خلطة زيوت طبيعية', 'فيتامين E', 'زيوت مغذية لفروة الراس'],
    usage: 'دلّكي فروة الراس بكمية مناسبة من الزيت ووزعيه على أطراف الشعر. سيبيه ساعتين على الأقل أو طول الليل، وبعدين اغسليه بالشامبو. يُستخدم ٢-٣ مرات في الأسبوع.',
    rating: 4.9,
    reviews: 203
  },
  'stop-hair-loss': {
    name: 'Stop Hair Loss',
    sub: 'سبراي ضد تساقط الشعر',
    category: 'شعر',
    price: 220,
    size: '١٠٠ مل',
    images: ['images/stop-hair-loss.jpeg'],
    imagePosition: 'center 60%',
    description: 'سبراي Stop Hair Loss بيحارب تساقط الشعر من الجذور، بيجدد بصيلات الشعر وينشّط نموها، وبيزود كثافة وسماكة الشعر بشكل ملحوظ.',
    benefits: ['يحارب تساقط الشعر', 'يجدد بصيلات الشعر وينشط نموها', 'يزيد كثافة وسماكة الشعر', 'يقوّي الأطراف ويمنع التقصف'],
    ingredients: ['مستخلصات نباتية منشطة للبصيلات', 'بيوتين', 'زيوت مقوية للشعر'],
    usage: 'رشّي السبراي مباشرة على فروة الراس النضيفة ودلّكيها بأطراف صوابعك لمدة دقيقتين. يُستخدم يومياً بدون شطف.',
    rating: 4.7,
    reviews: 91
  },
  'shea-dax': {
    name: 'Shea Dax',
    sub: 'علاج للشعر الهايش بزبدة الشيا',
    category: 'شعر',
    price: 520,
    images: ['images/shea-dax.jpeg'],
    description: 'Shea Dax علاج الشعر الهايش والمجعد. تركيبة غنية بزبدة الشيا والزيوت الطبيعية بتفرد الشعر وتنعّمه وتسيطر على الهيشان وتديه لمعان طول اليوم.',
    benefits: ['السيطرة على الشعر الهايش', 'ترطيب عميق ونعومة', 'لمعان طبيعي', 'حماية الأطراف من التقصف'],
    ingredients: ['زبدة الشيا', 'زيت الأرجان', 'زيت جوز الهند', 'اللانولين'],
    usage: 'خدي كمية صغيرة ووزعيها على الشعر وهو مبلول أو ناشف، مع التركيز على الأطراف. لا يحتاج شطف.',
    rating: 4.8,
    reviews: 77
  }
};

const DEFAULT_COUPONS = [
  { code: 'WELCOME10', type: 'percent', value: 10, minTotal: 0, expires: '2026-12-31', active: true, uses: 0 },
  { code: 'ES50', type: 'fixed', value: 50, minTotal: 500, expires: '2026-12-31', active: true, uses: 0 }
];

const DEFAULT_SETTINGS = {
  whatsapp: '201000000000',
  shippingFee: 50,
  freeShippingOver: 1000,
  promoText: 'خصم ٢٠٪ على الباكدجات'
};

const CATEGORIES = ['بشرة', 'شعر', 'مكياج', 'جسم'];

const GOVERNORATES = ['القاهرة', 'الجيزة', 'الإسكندرية', 'القليوبية', 'الدقهلية', 'الشرقية', 'الغربية', 'المنوفية', 'البحيرة', 'كفر الشيخ', 'دمياط', 'بورسعيد', 'الإسماعيلية', 'السويس', 'الفيوم', 'بني سويف', 'المنيا', 'أسيوط', 'سوهاج', 'قنا', 'الأقصر', 'أسوان', 'البحر الأحمر', 'مطروح', 'الوادي الجديد', 'شمال سيناء', 'جنوب سيناء'];

const ORDER_STATUSES = { new: 'جديد', confirmed: 'تم التأكيد', shipped: 'في الشحن', delivered: 'تم التوصيل', cancelled: 'ملغي' };

// ---------- أدوات ----------
const toArabicDigits = n => String(n).replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[d]);
const formatPrice = n => toArabicDigits(Math.round(n)) + ' ج.م';
const escapeHtml = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function load(key, fallback) {
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : structuredClone(fallback);
  } catch (e) { return structuredClone(fallback); }
}
function save(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); return true; } catch (e) { return false; }
}

// ---------- المنتجات ----------
function getProducts() {
  return load('es-products', Object.entries(DEFAULT_PRODUCTS).map(([id, p]) => ({ id, active: true, ...p })));
}
const saveProducts = list => save('es-products', list);
const getProduct = id => getProducts().find(p => p.id === id);
const activeProducts = () => getProducts().filter(p => p.active);
const discountPercent = p => p.oldPrice > p.price ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;

function productCardHtml(p) {
  const url = 'product.html?id=' + encodeURIComponent(p.id);
  const badge = p.badge || (discountPercent(p) ? '-' + toArabicDigits(discountPercent(p)) + '٪' : '');
  const pos = p.imagePosition ? ` style="object-position:${p.imagePosition}"` : '';
  return `<div class="card">
    <a href="${url}" class="card-link"><div class="card-img"><img src="${p.images[0] || ''}" alt="${escapeHtml(p.name)}"${pos}>${badge ? `<span class="badge">${escapeHtml(badge)}</span>` : ''}</div></a>
    <h3><a href="${url}">${escapeHtml(p.name)}</a></h3>
    <div class="sub">${escapeHtml(p.sub)}</div>
    <div class="price">${formatPrice(p.price)}${p.oldPrice > p.price ? ` <s>${toArabicDigits(p.oldPrice)}</s>` : ''}</div>
    <button class="add-btn" data-id="${escapeHtml(p.id)}">أضيفي للسلة</button>
  </div>`;
}
function bindAddButtons(root) {
  root.querySelectorAll('.add-btn[data-id]').forEach(btn => btn.addEventListener('click', () => {
    addToCart(btn.dataset.id, 1);
    flashAdded(btn, 'أضيفي للسلة');
  }));
}

// ---------- الإعدادات والكوبونات والطلبات ----------
const getSettings = () => ({ ...DEFAULT_SETTINGS, ...load('es-settings', {}) });
const saveSettings = s => save('es-settings', s);
const getCoupons = () => load('es-coupons', DEFAULT_COUPONS);
const saveCoupons = list => save('es-coupons', list);
const getOrders = () => load('es-orders', []);
const saveOrders = list => save('es-orders', list);

// بيرجع { coupon, discount } أو { error }
function checkCoupon(code, subtotal) {
  code = String(code || '').trim().toUpperCase();
  if (!code) return { error: 'اكتبي كود الخصم' };
  const c = getCoupons().find(x => x.code.toUpperCase() === code);
  if (!c || !c.active) return { error: 'الكود ده مش صحيح' };
  if (c.expires && c.expires < new Date().toISOString().slice(0, 10)) return { error: 'الكود ده انتهى' };
  if (subtotal < (c.minTotal || 0)) return { error: 'الكود ده لطلبات فوق ' + formatPrice(c.minTotal) };
  const raw = c.type === 'percent' ? subtotal * c.value / 100 : c.value;
  return { coupon: c, discount: Math.min(Math.round(raw), subtotal) };
}
const couponLabel = c => c.type === 'percent' ? toArabicDigits(c.value) + '٪' : formatPrice(c.value);

// ---------- السلة ----------
const getCart = () => load('es-cart', { items: [], coupon: null });
const saveCart = cart => { save('es-cart', cart); renderCartCount(); };

function addToCart(id, qty = 1) {
  const cart = getCart();
  const item = cart.items.find(i => i.id === id);
  if (item) item.qty = Math.min(20, item.qty + qty);
  else cart.items.push({ id, qty });
  saveCart(cart);
}
function setCartQty(id, qty) {
  const cart = getCart();
  cart.items = qty > 0
    ? cart.items.map(i => i.id === id ? { ...i, qty: Math.min(20, qty) } : i)
    : cart.items.filter(i => i.id !== id);
  saveCart(cart);
}
const getCartCount = () => getCart().items.reduce((n, i) => n + i.qty, 0);
function renderCartCount() {
  const el = document.getElementById('cart-count');
  if (el) el.textContent = toArabicDigits(getCartCount());
}

// بيحسب الإجمالي — المنتجات المشالة أو المقفولة بتتشال من الحساب
function cartTotals() {
  const cart = getCart();
  const settings = getSettings();
  const lines = cart.items
    .map(i => ({ ...i, product: getProduct(i.id) }))
    .filter(l => l.product && l.product.active);
  const subtotal = lines.reduce((s, l) => s + l.product.price * l.qty, 0);
  let discount = 0, coupon = null, couponError = null;
  if (cart.coupon) {
    const r = checkCoupon(cart.coupon, subtotal);
    if (r.error) couponError = r.error; else { coupon = r.coupon; discount = r.discount; }
  }
  const shipping = !lines.length || subtotal >= settings.freeShippingOver ? 0 : settings.shippingFee;
  return { lines, subtotal, discount, coupon, couponCode: cart.coupon, couponError, shipping, total: subtotal - discount + shipping, settings };
}

function flashAdded(btn, label) {
  btn.textContent = 'اتضافت ✓';
  btn.classList.add('added');
  setTimeout(() => { btn.textContent = label; btn.classList.remove('added'); }, 1500);
}

// ---------- الهيدر والفوتر المشتركين ----------
function renderLayout() {
  const s = getSettings();
  const header = document.getElementById('site-header');
  const footer = document.getElementById('site-footer');
  if (header) header.outerHTML = `
<div class="promo-bar">شحن مجاني فوق ${formatPrice(s.freeShippingOver)}${s.promoText ? ' · ' + escapeHtml(s.promoText) : ''}</div>
<header class="header">
  <div class="container">
    <nav class="nav" id="nav">
      <a href="index.html#categories">الأقسام</a>
      <a href="index.html#best-sellers">الأكثر مبيعاً</a>
      <a href="index.html#concerns">حسب المشكلة</a>
    </nav>
    <button class="icon-btn menu-btn" id="menu-btn" aria-label="القائمة" aria-expanded="false">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
    </button>
    <a href="index.html" class="logo">ES <span>Store</span></a>
    <div class="header-icons">
      <a class="icon-btn" href="index.html#best-sellers" aria-label="بحث">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>
      </a>
      <a class="icon-btn" href="cart.html" aria-label="السلة">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 7h12l-1 13H7L6 7Z"/><path d="M9 7a3 3 0 0 1 6 0"/></svg>
        <span class="cart-count" id="cart-count">٠</span>
      </a>
    </div>
  </div>
</header>`;
  if (footer) footer.outerHTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <h4>ES <span style="color:var(--primary)">Store</span></h4>
        <p>منتجات عناية بالبشرة والشعر بمكونات طبيعية.</p>
        <p>📞 ${toArabicDigits('0' + s.whatsapp.replace(/^20/, ''))} · 📍 القاهرة، مصر</p>
      </div>
      <div>
        <h4>الأقسام</h4>
        <ul>${CATEGORIES.map(c => `<li><a href="index.html#categories">${c}</a></li>`).join('')}</ul>
      </div>
      <div>
        <h4>تواصلي معانا</h4>
        <ul><li><a href="https://wa.me/${s.whatsapp}" target="_blank" rel="noopener">واتساب</a></li><li><a href="https://facebook.com" target="_blank" rel="noopener">فيسبوك</a></li><li><a href="https://instagram.com" target="_blank" rel="noopener">إنستجرام</a></li><li><a href="https://tiktok.com" target="_blank" rel="noopener">تيك توك</a></li></ul>
      </div>
      <div>
        <h4>طرق الدفع</h4>
        <div class="pay"><span>كاش عند الاستلام</span><span>فيزا / ماستركارد</span><span>فودافون كاش</span><span>إنستاباي</span></div>
      </div>
    </div>
    <div class="copy">© ٢٠٢٦ ES Store — جميع الحقوق محفوظة</div>
  </div>
</footer>`;
  const menuBtn = document.getElementById('menu-btn');
  if (menuBtn) menuBtn.onclick = () => {
    const open = document.getElementById('nav').classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open);
  };
  renderCartCount();
}
renderLayout();
// لو السلة اتغيرت من تاب تاني
window.addEventListener('storage', e => { if (e.key === 'es-cart') renderCartCount(); });
