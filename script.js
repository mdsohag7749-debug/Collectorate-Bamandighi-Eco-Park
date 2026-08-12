/* =============================================
   LANGUAGE TRANSLATIONS
   ============================================= */
const translations = {
  bn: {
    /* Navbar */
    'nav-home':        'হোম',
    'nav-about':       'পরিচিতি',
    'nav-attractions': 'আকর্ষণ',
    'nav-gallery':     'গ্যালারি',
    'nav-tickets':     'টিকেট',
    'nav-facilities':  'সুবিধা',
    'nav-contact':     'যোগাযোগ',

    /* Hero */
    'badge-text':    'প্রকৃতির স্বর্গ',
    'hero-title':    'কালেক্টরেট<br/><span class="gradient-text">বামনদিঘি ইকো পার্ক</span>',
    'hero-subtitle': 'সবুজ প্রকৃতির মাঝে হারিয়ে যান — পরিবার ও বন্ধুদের সাথে<br/>অবিস্মরণীয় স্মৃতি তৈরি করুন',
    'hbtn1-text':    'টিকেট কিনুন',
    'hbtn2-text':    'আরও জানুন',
    'stat1':         'একর জমি',
    'stat2':         'উদ্বোধন সাল',
    'stat3':         'প্রবেশ উন্মুক্ত',

    /* About */
    'about-tag':   'আমাদের সম্পর্কে',
    'about-title': 'জঙ্গল থেকে গড়ে ওঠা<br/><span class="highlight">স্বপ্নের ইকো পার্ক</span>',
    'about-p1':    'রংপুর জেলার তারাগঞ্জ উপজেলার ইকরচালী ইউনিয়নে রংপুর-সৈয়দপুর মহাসড়কের পাশে অবস্থিত কালেক্টরেট বামনদিঘি ইকো পার্ক। একসময় এই স্থানটি জঙ্গল ও ময়লা-আবর্জনায় ভরা ছিল। ২০২০ সালে জেলা প্রশাসক ও উপজেলা নির্বাহী কর্মকর্তার উদ্যোগে ১৮ লাখ টাকা ব্যয়ে দিঘিটি পুনঃখনন করে একটি দৃষ্টিনন্দন ইকো পার্কে রূপান্তর করা হয়।',
    'about-p2':    '২০২১ সালে সর্বসাধারণের জন্য উন্মুক্ত এই পার্কটি সাড়ে ৫ একর জমির উপর বিস্তৃত। বর্তমানে এটি রংপুর অঞ্চলের অন্যতম জনপ্রিয় পিকনিক স্পট ও পারিবারিক বিনোদনকেন্দ্র। রংপুর শহর থেকে মাত্র ২০ কিলোমিটার দূরে অবস্থিত।',
    'est-label':   'উদ্বোধন',
    'feat1':       'ঐতিহাসিক বামনদিঘি',
    'feat2':       'I Love Rangpur ভাস্কর্য',
    'feat3':       'সোলার লাইটিং ব্যবস্থা',
    'feat4':       'শীতকালীন পরিযায়ী পাখি',

    /* Attractions */
    'attr-tag':    'আকর্ষণ সমূহ',
    'attr-title':  'পার্কের বিশেষ <span class="highlight">আকর্ষণ</span>',
    'attr-desc':   'বামনদিঘি ইকো পার্কে রয়েছে অসংখ্য আকর্ষণীয় স্থান ও কার্যক্রম',
    'attr1-title': 'ঐতিহাসিক বামনদিঘি', 'attr1-desc': 'পার্কের কেন্দ্রবিন্দু এই বিশাল দিঘি। টাইলস বাঁধানো হাঁটার পথ দিঘির চারপাশ ঘিরে রয়েছে। স্বচ্ছ জলে আকাশের প্রতিফলন অপূর্ব দৃশ্য তৈরি করে।',
    'attr2-title': 'I Love Rangpur ভাস্কর্য', 'attr2-desc': 'পার্কের সবচেয়ে আইকনিক স্থাপনা। এই রঙিন ভাস্কর্যের সামনে ছবি তোলা দর্শনার্থীদের কাছে অত্যন্ত জনপ্রিয়। প্রতিদিন অসংখ্য পরিবার এখানে ছবি তোলেন।',
    'attr3-title': 'হাঁটার পথ ও ঘাট', 'attr3-desc': 'দিঘির দুই পাশে দুটি সান বাঁধানো ঘাট রয়েছে। টাইলস বাঁধানো হাঁটার পথ ও বসার বেঞ্চ রয়েছে সারাপার্ক জুড়ে।',
    'attr4-title': 'শিশু বিনোদন এলাকা', 'attr4-desc': 'শিশুদের জন্য স্লাইড, দোলনা ও ব্যালেন্সার সহ আনন্দময় খেলার মাঠ। পরিবারের সাথে সময় কাটানোর আদর্শ জায়গা।',
    'attr5-title': 'সবুজ গেজেবো', 'attr5-desc': 'উত্তর পাড়ে লাল-সবুজ রঙের দৃষ্টিনন্দন গেজেবো (বিশ্রামাগার)। এখানে বসে দিঘির সৌন্দর্য উপভোগ করা যায়।',
    'attr6-title': 'পরিযায়ী পাখি', 'attr6-desc': 'শীতকালে অতিথি পাখিদের অভয়াশ্রম হয়ে ওঠে এই পার্ক। ফলদ বৃক্ষের ছায়ায় প্রকৃতির অপূর্ব দৃশ্য উপভোগ করুন।',

    /* Gallery */
    'gal-tag':   'ফটো গ্যালারি',
    'gal-title': 'পার্কের <span class="highlight">সুন্দর মুহূর্তগুলো</span>',

    /* Tickets */
    'tick-tag':    'প্রবেশ তথ্য',
    'tick-title':  'টিকেট ও <span class="highlight-light">সময়সূচি</span>',
    'tick-desc':   'প্রতিদিন সকাল থেকে সন্ধ্যা পর্যন্ত উন্মুক্ত — প্রবেশ সম্পূর্ণ বিনামূল্যে',
    'pop-badge':   'সময়সূচি',
    'tick1-title': 'প্রবেশ মূল্য',   'tick1-sub': 'সকল বয়সের দর্শনার্থী',
    'tick2-title': 'খোলার সময়',     'tick2-sub': 'প্রতিদিন সকাল থেকে সন্ধ্যা',
    'tick3-title': 'কীভাবে আসবেন',  'tick3-sub': 'রংপুর-সৈয়দপুর মহাসড়ক',
    'tf1-1': '✓ সম্পূর্ণ উন্মুক্ত পার্ক', 'tf1-2': '✓ সকল এলাকায় প্রবেশ', 'tf1-3': '✓ কোনো টিকেট লাগে না',
    'tf2-1': '✓ প্রতিদিন খোলা', 'tf2-2': '✓ শীতকালে বিশেষ পরিবেশ', 'tf2-3': '✓ সোলার লাইট ব্যবস্থা', 'tf2-4': '✓ সিকিউরিটি সার্বক্ষণিক',
    'tf3-1': '✓ তারাগঞ্জ উপজেলা, রংপুর', 'tf3-2': '✓ ইকরচালী ইউনিয়ন', 'tf3-3': '✓ মহাসড়কের পাশেই অবস্থিত', 'tf3-4': '✓ যেকোনো যানবাহনে আসা যায়',
    'tick1-btn': 'দিকনির্দেশনা দেখুন', 'tick2-btn': 'এখনই আসুন', 'tick3-btn': 'Google Maps এ দেখুন',
    'tick-note': '<span>📌</span> এই পার্কে প্রবেশ সম্পূর্ণ বিনামূল্যে — সবার জন্য উন্মুক্ত!',

    /* Facilities */
    'fac-tag':    'সুবিধাসমূহ',
    'fac-title':  'আমাদের <span class="highlight">সুযোগ-সুবিধা</span>',
    'fac1-title': 'টাইলস বাঁধানো হাঁটার পথ',   'fac1-desc': 'দিঘির চারপাশে পাকা হাঁটার পথ',
    'fac2-title': 'বসার বেঞ্চ',                  'fac2-desc': 'পার্কের বিভিন্ন স্থানে বসার ব্যবস্থা',
    'fac3-title': 'সান বাঁধানো ঘাট',             'fac3-desc': 'দিঘির দুই পাশে দুটি সুন্দর ঘাট',
    'fac4-title': 'সোলার লাইটিং',               'fac4-desc': 'নিরাপত্তার জন্য সোলার বাতির ব্যবস্থা',
    'fac5-title': 'সবুজ গেজেবো',                'fac5-desc': 'উত্তর পাড়ে লাল-সবুজ বিশ্রামাগার',
    'fac6-title': 'ফলদ বৃক্ষের সারি',            'fac6-desc': 'পার্ক জুড়ে বিভিন্ন ফলের গাছ',

    /* Contact */
    'con-tag':    'যোগাযোগ করুন',
    'con-title':  'আমাদের সাথে <span class="highlight">যোগাযোগ</span>',
    'ci1-title':  'ঠিকানা',         'ci1-desc':  'ইকরচালী ইউনিয়ন, তারাগঞ্জ উপজেলা,<br/>রংপুর জেলা, বাংলাদেশ',
    'ci2-title':  'অবস্থান',        'ci2-desc':  'রংপুর-সৈয়দপুর মহাসড়কের পাশে<br/>রংপুর শহর থেকে ~২০ কিলোমিটার',
    'ci3-title':  'পরিচালনায়',     'ci3-desc':  'তারাগঞ্জ উপজেলা প্রশাসন<br/>রংপুর জেলা প্রশাসন',
    'ci4-title':  'সময়সূচি',        'ci4-desc':  'সকাল থেকে সন্ধ্যা পর্যন্ত<br/>প্রতিদিন উন্মুক্ত',
    'form-title':   'বার্তা পাঠান',
    'submit-text':  'বার্তা পাঠান',
    'toast-msg':    'বার্তা সফলভাবে পাঠানো হয়েছে!',

    /* Footer */
    'footer-copy':   '© ২০২৬ কালেক্টরেট বামনদিঘি ইকো পার্ক। সর্বস্বত্ব সংরক্ষিত।',
    'footer-slogan': '🌿 প্রকৃতির সাথে থাকুন, পরিবেশ বাঁচান 🌿',
  },
  en: {
    /* Navbar */
    'nav-home':        'Home',
    'nav-about':       'About',
    'nav-attractions': 'Attractions',
    'nav-gallery':     'Gallery',
    'nav-tickets':     'Tickets',
    'nav-facilities':  'Facilities',
    'nav-contact':     'Contact',

    /* Hero */
    'badge-text':    "Nature's Paradise",
    'hero-title':    'Collectorate<br/><span class="gradient-text">Bamandighi Eco Park</span>',
    'hero-subtitle': 'Lose yourself in green nature — create<br/>unforgettable memories with family & friends',
    'hbtn1-text':    'Buy Tickets',
    'hbtn2-text':    'Learn More',
    'stat1':         'Acres of Land',
    'stat2':         'Opened in Year',
    'stat3':         'Free Entry',

    /* About */
    'about-tag':   'About Us',
    'about-title': 'From Jungle<br/><span class="highlight">to Dream Eco Park</span>',
    'about-p1':    'Collectorate Bamandighi Eco Park is located by the Rangpur-Syedpur highway in Ikarchali Union, Taraganj Upazila, Rangpur District. Once an abandoned area full of jungle and garbage, it was transformed in 2020 through the initiative of the District Commissioner and UNO, with an investment of 1.8 million BDT to re-excavate the historic pond.',
    'about-p2':    'Opened to the public in 2021, this park spans 5.4 acres. It is now one of the most popular picnic spots and family recreation centers in the Rangpur region, located just 20 km from Rangpur city.',
    'est-label':   'Opened',
    'feat1':       'Historic Bamandighi Pond',
    'feat2':       'I Love Rangpur Sculpture',
    'feat3':       'Solar Lighting System',
    'feat4':       'Winter Migratory Birds',

    /* Attractions */
    'attr-tag':    'Attractions',
    'attr-title':  'Special <span class="highlight">Attractions</span> of the Park',
    'attr-desc':   'Bamandighi Eco Park offers numerous fascinating spots and activities for visitors',
    'attr1-title': 'Historic Bamandighi Pond', 'attr1-desc': 'The centerpiece of the park — a vast historic pond with tiled walkways surrounding it. The reflection of the sky in the clear water creates a breathtaking view.',
    'attr2-title': 'I Love Rangpur Sculpture', 'attr2-desc': 'The park\'s most iconic landmark. Taking photos in front of this colorful sculpture is extremely popular with visitors. Countless families photograph here daily.',
    'attr3-title': 'Walking Paths & Ghats', 'attr3-desc': 'Two beautifully constructed sun-bathing ghats (steps) on both sides of the pond. Tiled walking paths and sitting benches throughout the park.',
    'attr4-title': "Children's Play Zone", 'attr4-desc': 'Fun-filled playground with slides, swings and balancers for children. The ideal spot for family time together.',
    'attr5-title': 'Green Gazebo', 'attr5-desc': 'A scenic red and green gazebo (rest house) on the north bank. Sit here and enjoy the tranquil beauty of the pond.',
    'attr6-title': 'Migratory Birds', 'attr6-desc': 'In winter, this park becomes a sanctuary for migratory birds. Enjoy nature\'s wonders under the shade of fruit-bearing trees.',

    /* Gallery */
    'gal-tag':   'Photo Gallery',
    'gal-title': '<span class="highlight">Beautiful Moments</span> at the Park',

    /* Tickets */
    'tick-tag':    'Entry Info',
    'tick-title':  'Tickets & <span class="highlight-light">Schedule</span>',
    'tick-desc':   'Open daily from morning to evening — Entry is completely FREE for everyone',
    'pop-badge':   'Schedule',
    'tick1-title': 'Entry Price',   'tick1-sub': 'All ages welcome',
    'tick2-title': 'Opening Hours',   'tick2-sub': 'Daily morning to evening',
    'tick3-title': 'How to Get Here',  'tick3-sub': 'Rangpur-Syedpur Highway',
    'tf1-1': '✓ Completely open park', 'tf1-2': '✓ Access to all areas', 'tf1-3': '✓ No ticket required',
    'tf2-1': '✓ Open every day', 'tf2-2': '✓ Special winter atmosphere', 'tf2-3': '✓ Solar lighting', 'tf2-4': '✓ Round-the-clock security',
    'tf3-1': '✓ Taraganj Upazila, Rangpur', 'tf3-2': '✓ Ikarchali Union', 'tf3-3': '✓ Right beside the highway', 'tf3-4': '✓ Accessible by any vehicle',
    'tick1-btn': 'Get Directions', 'tick2-btn': 'Visit Now', 'tick3-btn': 'View on Google Maps',
    'tick-note': '<span>📌</span> Entry to this park is completely FREE — open for everyone!',

    /* Facilities */
    'fac-tag':    'Facilities',
    'fac-title':  'Our <span class="highlight">Amenities & Facilities</span>',
    'fac1-title': 'Tiled Walking Paths',    'fac1-desc': 'Paved walkways around the pond',
    'fac2-title': 'Sitting Benches',         'fac2-desc': 'Seating arrangements throughout the park',
    'fac3-title': 'Sun-Bathing Ghats',       'fac3-desc': 'Two beautiful ghats on either side of the pond',
    'fac4-title': 'Solar Lighting',          'fac4-desc': 'Solar-powered lights for security',
    'fac5-title': 'Green Gazebo',            'fac5-desc': 'Red-green rest house on the north bank',
    'fac6-title': 'Fruit-Bearing Trees',     'fac6-desc': 'Various fruit trees throughout the park',

    /* Contact */
    'con-tag':    'Contact Us',
    'con-title':  'Get in <span class="highlight">Touch</span>',
    'ci1-title':  'Address',       'ci1-desc':  'Ikarchali Union, Taraganj Upazila,<br/>Rangpur District, Bangladesh',
    'ci2-title':  'Location',      'ci2-desc':  'Beside Rangpur-Syedpur Highway<br/>~20 km from Rangpur city',
    'ci3-title':  'Managed by',    'ci3-desc':  'Taraganj Upazila Administration<br/>Rangpur District Administration',
    'ci4-title':  'Opening Hours', 'ci4-desc':  'Morning to Evening<br/>Open every day',
    'form-title':   'Send a Message',
    'submit-text':  'Send Message',
    'toast-msg':    'Message sent successfully!',

    /* Footer */
    'footer-copy':   '© 2026 Collectorate Bamandighi Eco Park. All Rights Reserved.',
    'footer-slogan': '🌿 Stay with Nature, Save the Environment 🌿',
  }
};

/* =============================================
   STATE
   ============================================= */
let currentLang = 'bn';

/* =============================================
   LANGUAGE TOGGLE
   ============================================= */
function toggleLang() {
  currentLang = (currentLang === 'bn') ? 'en' : 'bn';
  const btn = document.getElementById('lang-toggle');
  btn.textContent = (currentLang === 'bn') ? 'EN' : 'বাং';
  document.documentElement.lang = currentLang;
  applyTranslations();
}

function applyTranslations() {
  const t = translations[currentLang];
  for (const [id, text] of Object.entries(t)) {
    const el = document.getElementById(id);
    if (el) {
      el.innerHTML = text;
    }
  }
  /* Also update placeholders */
  if (currentLang === 'en') {
    document.getElementById('form-name').placeholder    = 'Your Name';
    document.getElementById('form-phone').placeholder   = 'Phone Number';
    document.getElementById('form-email').placeholder   = 'Email Address';
    document.getElementById('form-message').placeholder = 'Write your message...';
    document.getElementById('fsubj-default').textContent = 'Select a subject';
    document.getElementById('fsubj1').textContent = 'Ticket Booking';
    document.getElementById('fsubj2').textContent = 'Picnic Spot Booking';
    document.getElementById('fsubj3').textContent = 'Event Organization';
    document.getElementById('fsubj4').textContent = 'Other';
  } else {
    document.getElementById('form-name').placeholder    = 'আপনার নাম';
    document.getElementById('form-phone').placeholder   = 'ফোন নম্বর';
    document.getElementById('form-email').placeholder   = 'ইমেইল ঠিকানা';
    document.getElementById('form-message').placeholder = 'আপনার বার্তা লিখুন...';
    document.getElementById('fsubj-default').textContent = 'বিষয় নির্বাচন করুন';
    document.getElementById('fsubj1').textContent = 'টিকেট বুকিং';
    document.getElementById('fsubj2').textContent = 'পিকনিক স্পট বুকিং';
    document.getElementById('fsubj3').textContent = 'অনুষ্ঠান আয়োজন';
    document.getElementById('fsubj4').textContent = 'অন্যান্য';
  }
}

/* =============================================
   NAVBAR
   ============================================= */
function toggleMenu() {
  const menu = document.getElementById('nav-menu');
  const hamburger = document.getElementById('hamburger');
  menu.classList.toggle('open');
  hamburger.classList.toggle('active');
}

/* Navbar scroll effect */
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  updateActiveNav();
});

/* Active nav link on scroll */
function updateActiveNav() {
  const sections = ['home', 'about', 'attractions', 'gallery', 'tickets', 'facilities', 'contact'];
  const scrollPos = window.scrollY + 100;
  sections.forEach(id => {
    const section = document.getElementById(id);
    const navLink = document.getElementById(`nav-${id}`);
    if (!section || !navLink) return;
    const top    = section.offsetTop;
    const bottom = top + section.offsetHeight;
    if (scrollPos >= top && scrollPos < bottom) {
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      navLink.classList.add('active');
    }
  });
}

/* Close nav on link click (mobile) */
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('nav-menu').classList.remove('open');
  });
});

/* =============================================
   PRELOADER
   ============================================= */
window.addEventListener('load', () => {
  setTimeout(() => {
    const preloader = document.getElementById('preloader');
    preloader.classList.add('hidden');
  }, 1200);
});

/* =============================================
   PARTICLES
   ============================================= */
function createParticles() {
  const container = document.getElementById('particles');
  const emojis = ['🌿', '🍃', '🌺', '🦋', '🌸', '🍀', '🌻'];
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    p.style.left    = `${Math.random() * 100}%`;
    p.style.top     = `${Math.random() * 100}%`;
    p.style.setProperty('--duration', `${6 + Math.random() * 8}s`);
    p.style.setProperty('--delay',    `${Math.random() * 5}s`);
    p.style.fontSize = `${0.8 + Math.random() * 1.2}rem`;
    container.appendChild(p);
  }
}

/* =============================================
   SCROLL REVEAL
   ============================================= */
function initReveal() {
  const elements = document.querySelectorAll(
    '.about-grid, .attraction-card, .gallery-item, .ticket-card, .facility-item, .contact-item, .contact-form-wrap'
  );
  elements.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  elements.forEach(el => observer.observe(el));
}

/* =============================================
   FORM SUBMISSION
   ============================================= */
function handleFormSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('form-submit');
  btn.disabled = true;
  btn.style.opacity = '0.7';

  setTimeout(() => {
    btn.disabled = false;
    btn.style.opacity = '1';
    document.getElementById('contact-form').reset();
    showToast();
  }, 1200);
}

function showToast() {
  const toast = document.getElementById('success-toast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4000);
}

/* =============================================
   GALLERY LIGHTBOX (Simple)
   ============================================= */
function initGallery() {
  document.querySelectorAll('.gallery-item, .marquee-card').forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (img && img.src) {
        openLightbox(img.src, img.alt);
      }
    });
  });
}

function openLightbox(src, alt) {
  const lb = document.createElement('div');
  lb.style.cssText = `
    position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:9999;
    display:flex;align-items:center;justify-content:center;cursor:pointer;
    backdrop-filter:blur(8px);
  `;
  lb.innerHTML = `
    <img src="${src}" alt="${alt}" style="max-width:90vw;max-height:90vh;border-radius:12px;box-shadow:0 30px 80px rgba(0,0,0,0.5);object-fit:contain;" />
    <button style="position:fixed;top:1.5rem;right:1.5rem;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);color:white;font-size:1.5rem;width:44px;height:44px;border-radius:50%;cursor:pointer;">✕</button>
  `;
  lb.addEventListener('click', () => lb.remove());
  document.body.appendChild(lb);
  document.addEventListener('keydown', function esc(e) {
    if (e.key === 'Escape') { lb.remove(); document.removeEventListener('keydown', esc); }
  });
}

/* =============================================
   COUNTER ANIMATION
   ============================================= */
function animateCounters() {
  const counters = document.querySelectorAll('.stat-num');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const text = el.textContent;
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(el => observer.observe(el));
}

/* =============================================
   MISSING IMAGE HANDLER
   ============================================= */
function handleMissingImg(imgEl, titleText, fileName) {
  const container = imgEl.parentElement;
  imgEl.style.display = 'none';
  
  const placeholder = document.createElement('div');
  placeholder.className = 'img-placeholder-card gallery-ph';
  placeholder.innerHTML = `
    <span class="ph-icon">📸</span>
    <span class="ph-title">${titleText}</span>
    <span class="ph-sub">images/park-photos/${fileName}</span>
  `;
  container.appendChild(placeholder);
}

/* =============================================
   INIT
   ============================================= */
document.addEventListener('DOMContentLoaded', () => {
  createParticles();
  initReveal();
  initGallery();
  animateCounters();
});
