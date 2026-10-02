// بيانات المنتجات — مكان واحد لتعديل الأسعار والأوصاف
const PRODUCTS = {
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

const toArabicDigits = n => String(n).replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[d]);
const formatPrice = n => toArabicDigits(n) + ' ج.م';

// السلة — العداد بيتحفظ في المتصفح عشان يفضل بين الصفحات
function getCartCount() {
  try { return +localStorage.getItem('es-cart-count') || 0; } catch (e) { return 0; }
}
function renderCartCount() {
  const el = document.getElementById('cart-count');
  if (el) el.textContent = toArabicDigits(getCartCount());
}
function addToCart(qty = 1) {
  const next = getCartCount() + qty;
  try { localStorage.setItem('es-cart-count', next); } catch (e) { /* التخزين مقفول */ }
  const el = document.getElementById('cart-count');
  if (el) el.textContent = toArabicDigits(next);
}
function flashAdded(btn, label) {
  btn.textContent = 'اتضافت ✓';
  btn.classList.add('added');
  setTimeout(() => { btn.textContent = label; btn.classList.remove('added'); }, 1500);
}
document.addEventListener('DOMContentLoaded', renderCartCount);
