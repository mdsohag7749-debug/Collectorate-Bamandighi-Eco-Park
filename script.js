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
    'nav-tickets':     'দর্শনার্থী',
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
    'gal-desc':  'কালেক্টরেট বামনদিঘি ইকো পার্কের দর্শনার্থীদের তোলা সুন্দর দৃশ্যসমূহ (অটো-স্ক্রলিং অ্যানিমেশন সহ)',

    /* Stat numbers */
    'hstat1': '৫.৪',
    'hstat2': '২০২১',
    'hstat3': 'বিনামূল্যে',

    /* Gallery captions & overlays */
    'cap-hero':  '🌅 বামনদিঘি পার্কের প্রাকৃতিক দৃশ্য',
    'cap1':      '❤️ I Love Rangpur ভাস্কর্য',
    'cap2':      '🏊 ঐতিহাসিক বামনদিঘি',
    'cap3':      '🌿 টাইলস বাঁধানো হাঁটার পথ',
    'cap4':      '🎠 শিশু বিনোদন এলাকা',
    'cap5':      '🏡 লাল-সবুজ গেজেবো',
    'cap6':      '🌞 সান বাঁধানো ঘাট',
    'cap-about': '🌳 সবুজ প্রকৃতি ও বনাঞ্চল',
    'cap-fac':   '🚶‍♂️ পরিবেশ ও হাঁটার রাস্তা',
    'cap7':  '🏞️ বামনদিঘি পার্কের দৃশ্য',
    'cap8':  '🌿 পার্কের প্রাকৃতিক পরিবেশ',
    'cap9':  '📸 দর্শনার্থীদের তোলা ছবি',
    'cap10': '🚪 পার্কের প্রবেশমুখ',
    'cap11': '🌳 পার্কের সবুজ বনানী',
    'cap12': '🏞️ পার্কের মনোরম দৃশ্য',
    'cap13': '📸 দর্শনার্থীদের স্মৃতি',
    'cap14': '🌿 পথ ধরে হাঁটুন',
    'cap15': '🚶 পিকনিকের আনন্দময় মুহূর্ত',
    'cap16': '🌳 প্রকৃতির ছোঁয়া',
    'cap17': '🌅 পার্কে সময় কাটান',
    'gov1': '❤️ I Love Rangpur ভাস্কর্য',
    'gov2': '🏊 ঐতিহাসিক বামনদিঘি',
    'gov3': '🌿 টাইলস বাঁধানো পথ',
    'gov4': '🎠 শিশু বিনোদন এলাকা',
    'gov5': '🏡 লাল-সবুজ গেজেবো',
    'gov6': '🌞 সান বাঁধানো ঘাট',
    'gov7':  '🏞️ বামনদিঘি পার্কের দৃশ্য',
    'gov8':  '🌿 পার্কের প্রাকৃতিক পরিবেশ',
    'gov9':  '📸 দর্শনার্থীদের তোলা ছবি',
    'gov10': '🚪 পার্কের প্রবেশমুখ',
    'gov11': '🌳 পার্কের সবুজ বনানী',
    'gov12': '🏞️ পার্কের মনোরম দৃশ্য',
    'gov13': '📸 দর্শনার্থীদের স্মৃতি',
    'gov14': '🌿 পথ ধরে হাঁটুন',
    'gov15': '🌳 প্রকৃতির ছোঁয়া',
    'gov16': '🌅 পার্কে সময় কাটান',

    /* Gallery guide box */
    'guide-title': 'কালেক্টরেট বামনদিঘি ইকো পার্কের দর্শনার্থীদের রিভিউ ও সরাসরি ম্যাপস লিংক',
    'guide-desc':  'পার্কের শত শত দর্শনার্থীদের রিভিউ, ভিডিও ও ছবি দেখতে নিচের বাটনে ক্লিক করুন:',
    'guide-btn1':  '🗺️ Google Maps Review &amp; Photos',
    'guide-btn2':  '📘 Facebook Public Posts &amp; Photos',

    /* Tickets */
    'tick-tag':    'দর্শনার্থী তথ্য',
    'tick-title':  'দর্শনার্থীদের জন্য <span class="highlight-light">গুরুত্বপূর্ণ তথ্য</span>',
    'tick-desc':   'প্রবেশ সম্পূর্ণ বিনামূল্যে — সকাল ৯টা থেকে সন্ধ্যা ৬টা পর্যন্ত খোলা',
    'pop-badge':   'বিনামূল্যে',
    'tick1-title': 'প্রবেশ মূল্য',   'tick1-sub': 'সকল বয়সের জন্য উন্মুক্ত',
    'tick2-title': 'খোলার সময়',     'tick2-sub': 'প্রতিদিন সকাল থেকে সন্ধ্যা',
    'tick3-title': 'বুকিং ও নিয়মাবলি', 'tick3-sub': 'পিকনিক ও অনুষ্ঠান আয়োজন',
    'tf1-1': '✓ সম্পূর্ণ উন্মুক্ত পার্ক', 'tf1-2': '✓ সকল এলাকায় প্রবেশ', 'tf1-3': '✓ কোনো টিকেট বা ফি লাগে না',
    'tf2-1': '✓ প্রতিদিন খোলা', 'tf2-2': '✓ শীতকালে বিশেষ পরিবেশ', 'tf2-3': '✓ সোলার লাইট ব্যবস্থা', 'tf2-4': '✓ সিকিউরিটি সার্বক্ষণিক',
    'tf3-1': '✓ পিকনিক স্পট বুকিং', 'tf3-2': '✓ অনুষ্ঠান ও সমাবেশ', 'tf3-3': '✓ শৃঙ্খলা ও নিরাপত্তা', 'tf3-4': '✓ পার্ক পরিচ্ছন্ন রাখুন',
    'tick1-btn': 'দিকনির্দেশনা দেখুন', 'tick2-btn': 'আরও জানুন', 'tick3-btn': 'যোগাযোগ করুন',
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

    /* Mobile CTA */
    'cta-dir':     '🗺️ দিকনির্দেশনা',
    'cta-contact': '📨 যোগাযোগ',
  },
  en: {
    /* Navbar */
    'nav-home':        'Home',
    'nav-about':       'About',
    'nav-attractions': 'Attractions',
    'nav-gallery':     'Gallery',
    'nav-tickets':     'Visitors',
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
    'gal-desc':  'Beautiful views of Collectorate Bamandighi Eco Park taken by visitors (with auto-scrolling animation)',

    /* Stat numbers */
    'hstat1': '5.4',
    'hstat2': '2021',
    'hstat3': 'Free',

    /* Gallery captions & overlays */
    'cap-hero':  '🌅 Scenic view of Bamandighi Eco Park',
    'cap1':      '❤️ I Love Rangpur Sculpture',
    'cap2':      '🏊 Historic Bamandighi Pond',
    'cap3':      '🌿 Tiled Walking Path',
    'cap4':      '🎠 Children\'s Play Area',
    'cap5':      '🏡 Red-Green Gazebo',
    'cap6':      '🌞 Sun-Bathing Ghat',
    'cap-about': '🌳 Green Nature & Forest',
    'cap-fac':   '🚶‍♂️ Environment & Walking Trail',
    'cap7':  '🏞️ View of Bamandighi Park',
    'cap8':  '🌿 Natural environment of the park',
    'cap9':  '📸 Photos taken by visitors',
    'cap10': '🚪 Park entrance gate',
    'cap11': '🌳 Green groves of the park',
    'cap12': '🏞️ Pleasant park view',
    'cap13': '📸 Visitors\' memories',
    'cap14': '🌿 Walk along the path',
    'cap15': '🚶 Enjoyable picnic moments',
    'cap16': '🌳 Touch of nature',
    'cap17': '🌅 Spending time at the park',
    'gov1': '❤️ I Love Rangpur Sculpture',
    'gov2': '🏊 Historic Bamandighi Pond',
    'gov3': '🌿 Tiled Walking Path',
    'gov4': '🎠 Children\'s Play Area',
    'gov5': '🏡 Red-Green Gazebo',
    'gov6': '🌞 Sun-Bathing Ghat',
    'gov7':  '🏞️ View of Bamandighi Park',
    'gov8':  '🌿 Natural environment of the park',
    'gov9':  '📸 Photos taken by visitors',
    'gov10': '🚪 Park entrance gate',
    'gov11': '🌳 Green groves of the park',
    'gov12': '🏞️ Pleasant park view',
    'gov13': '📸 Visitors\' memories',
    'gov14': '🌿 Walk along the path',
    'gov15': '🌳 Touch of nature',
    'gov16': '🌅 Spending time at the park',

    /* Gallery guide box */
    'guide-title': 'Visitor Reviews & Direct Maps Links for Collectorate Bamandighi Eco Park',
    'guide-desc':  'Click the buttons below to see hundreds of reviews, videos and photos from park visitors:',
    'guide-btn1':  '🗺️ Google Maps Review &amp; Photos',
    'guide-btn2':  '📘 Facebook Public Posts &amp; Photos',

    /* Tickets */
    'tick-tag':    'Visitor Info',
    'tick-title':  'Essential <span class="highlight-light">Visitor Information</span>',
    'tick-desc':   'Entry is completely FREE — open daily from 9 AM to 6 PM',
    'pop-badge':   'FREE',
    'tick1-title': 'Entry Price',   'tick1-sub': 'Open to all ages',
    'tick2-title': 'Opening Hours',   'tick2-sub': 'Daily morning to evening',
    'tick3-title': 'Booking & Rules',  'tick3-sub': 'Picnics & event arrangements',
    'tf1-1': '✓ Completely open park', 'tf1-2': '✓ Access to all areas', 'tf1-3': '✓ No ticket or fee required',
    'tf2-1': '✓ Open every day', 'tf2-2': '✓ Special winter atmosphere', 'tf2-3': '✓ Solar lighting', 'tf2-4': '✓ Round-the-clock security',
    'tf3-1': '✓ Picnic spot booking', 'tf3-2': '✓ Events & gatherings', 'tf3-3': '✓ Discipline & safety', 'tf3-4': '✓ Keep the park clean',
    'tick1-btn': 'Get Directions', 'tick2-btn': 'Learn More', 'tick3-btn': 'Contact Us',
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

    /* Mobile CTA */
    'cta-dir':     '🗺️ Get Directions',
    'cta-contact': '📨 Contact',
  }
};

/* =============================================
   STATE
   ============================================= */
let currentLang = (() => {
  try { return localStorage.getItem('park-lang') || 'bn'; }
  catch (_) { return 'bn'; }
})();

/* =============================================
   LANGUAGE TOGGLE
   ============================================= */
function toggleLang() {
  currentLang = (currentLang === 'bn') ? 'en' : 'bn';
  try { localStorage.setItem('park-lang', currentLang); } catch (_) { /* ignore */ }
  const btn = document.getElementById('lang-toggle');
  btn.textContent = (currentLang === 'bn') ? 'EN' : 'বাং';
  document.documentElement.lang = currentLang;
  applyTranslations();
  initTypewriter();
}

function applyTranslations() {
  const t = translations[currentLang];

  for (const el of document.querySelectorAll('[data-i18n]')) {
    const key = el.getAttribute('data-i18n');
    if (key && t[key]) el.innerHTML = t[key];
  }

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

/* Navbar scroll effect (throttled via rAF) */
let scrollTicking = false;
window.addEventListener('scroll', () => {
  if (scrollTicking) return;
  scrollTicking = true;
  requestAnimationFrame(() => {
    scrollTicking = false;
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 60);
    updateActiveNav();
    scrollTopBtn.classList.toggle('show', window.scrollY > 500);
    updateScrollUI();
  });
}, { passive: true });

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
    initTypewriter();
  }, 1200);
});

/* =============================================
   PARTICLES
   ============================================= */
function createParticles() {
  if (reducedMotion) return;
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
    '.section-header, .about-grid, .about-image-wrap, .about-content, .attraction-card, .gallery-item, .ticket-card, .facility-item, .facilities-image, .facilities-grid, .contact-item, .contact-form-wrap'
  );
  elements.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const customDelay = (entry.target.dataset && entry.target.dataset.revealDelay) || null;
        const delay = customDelay !== null ? Number(customDelay) : Math.min(i * 70, 600);
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  elements.forEach(el => observer.observe(el));
}

/* =============================================
   FORM SUBMISSION
   ============================================= */
async function handleFormSubmit(e) {
  e.preventDefault();
  
  const name    = document.getElementById('form-name').value.trim();
  const phone   = document.getElementById('form-phone').value.trim();
  const email   = document.getElementById('form-email').value.trim();
  const subject = document.getElementById('form-subject').value ||
                  document.getElementById('form-subject').options[0].textContent;
  const message = document.getElementById('form-message').value.trim();

  // Validation
  if (!name || !message) {
    alert('নাম এবং বার্তা আবশ্যক!');
    return;
  }

  const btn = document.getElementById('form-submit');
  btn.disabled = true;
  btn.style.opacity = '0.7';
  btn.innerHTML = '<span>⏳</span> <span>পাঠানো হচ্ছে...</span>';

  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        subject,
        message
      })
    });

    const result = await response.json();

    if (result.success) {
      // Success
      document.getElementById('contact-form').reset();
      showToast(result.message || 'বার্তা সফলভাবে পাঠানো হয়েছে!');
    } else {
      // Error from server
      alert(result.message || 'বার্তা পাঠাতে ব্যর্থ হয়েছে');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    // Fallback to mailto if API fails
    const subjectLine = `[Bamandighi Eco Park] ${subject}`;
    const body =
      `Name:    ${name}\n` +
      `Phone:   ${phone}\n` +
      `Email:   ${email}\n` +
      `Subject: ${subject}\n\n` +
      `${message}`;

    window.location.href =
      `mailto:info@bamandighiecopark.com` +
      `?subject=${encodeURIComponent(subjectLine)}` +
      `&body=${encodeURIComponent(body)}`;
  } finally {
    btn.disabled = false;
    btn.style.opacity = '1';
    btn.innerHTML = '<span>📨</span> <span id="submit-text">বার্তা পাঠান</span>';
  }
}

function showToast(message) {
  const toast = document.getElementById('success-toast');
  const msgEl = document.getElementById('toast-msg');
  if (message) {
    msgEl.textContent = message;
  }
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
  lb.className = 'lightbox';
  lb.setAttribute('role', 'dialog');
  lb.setAttribute('aria-modal', 'true');
  lb.setAttribute('aria-label', alt || 'Image preview');
  lb.innerHTML = `
    <img src="${src}" alt="${alt || ''}" />
    <button class="lb-close" aria-label="Close">✕</button>
  `;
  const close = () => lb.remove();
  lb.addEventListener('click', close);
  lb.querySelector('.lb-close').addEventListener('click', e => { e.stopPropagation(); close(); });
  const onKey = e => { if (e.key === 'Escape') { close(); document.removeEventListener('keydown', onKey); } };
  document.addEventListener('keydown', onKey);
  document.body.appendChild(lb);
  lb.querySelector('.lb-close').focus();
}

/* =============================================
   COUNTER ANIMATION
   ============================================= */
const BN_DIGITS = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

function toLocalDigits(numStr) {
  if (currentLang !== 'bn') return numStr;
  return String(numStr).replace(/[0-9]/g, d => BN_DIGITS[Number(d)]);
}

function animateCounters() {
  const counters = document.querySelectorAll('.stat-num[data-target]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  counters.forEach(el => observer.observe(el));
}

function animateCounter(el) {
  const target = parseFloat(el.dataset.target);
  const decimals = el.dataset.target.includes('.') ? 1 : 0;
  const duration = 1500;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = toLocalDigits((target * eased).toFixed(decimals));
    if (progress < 1) requestAnimationFrame(tick);
    else el.textContent = toLocalDigits(target.toFixed(decimals));
  }
  requestAnimationFrame(tick);
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
  `;
  container.appendChild(placeholder);
}

/* =============================================
   SCROLL TO TOP
   ============================================= */
const scrollTopBtn = document.getElementById('scroll-top');

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
});

/* =============================================
   INIT
   ============================================= */
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('lang-toggle');
  btn.textContent = (currentLang === 'bn') ? 'EN' : 'বাং';
  document.documentElement.lang = currentLang;
  applyTheme(currentTheme);
  applyTranslations();
  createParticles();
  initReveal();
  initGallery();
  animateCounters();
  setupBlurUp();
  setupMarqueeA11y();
  setupScrollIndicator();
});

/* =============================================
   PREMIUM ENHANCEMENTS (v2)
   ============================================= */
const reducedMotionQ = window.matchMedia('(prefers-reduced-motion: reduce)');
let reducedMotion = reducedMotionQ.matches;
reducedMotionQ.addEventListener('change', e => { reducedMotion = e.matches; });

/* --- DARK MODE --- */
let currentTheme = (() => {
  try { return localStorage.getItem('park-theme') || 'light'; } catch (_) { return 'light'; }
})();

function applyTheme(t) {
  currentTheme = t;
  document.documentElement.setAttribute('data-theme', t);
  try { localStorage.setItem('park-theme', t); } catch (_) { /* ignore */ }
  const icon = document.querySelector('#theme-toggle .theme-icon');
  if (icon) icon.textContent = t === 'dark' ? '☀️' : '🌙';
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.setAttribute('aria-pressed', String(t === 'dark'));
}

function toggleTheme() { applyTheme(currentTheme === 'light' ? 'dark' : 'light'); }

/* --- TYPEWRITER EFFECT --- */
let typeTimer = null;
function initTypewriter() {
  clearTimeout(typeTimer);
  const el = document.getElementById('badge-text');
  if (!el || reducedMotion) return;
  const full = el.textContent.trim();
  if (!full) return;
  el.classList.add('typewriter-cursor');
  el.textContent = '';
  let i = 0;
  (function type() {
    el.textContent = full.slice(0, ++i);
    if (i < full.length) typeTimer = setTimeout(type, 60);
  })();
}

/* --- IMAGE BLUR-UP --- */
function setupBlurUp() {
  document.querySelectorAll('.gallery-item img, .marquee-card img, .about-img, .fac-img').forEach(img => {
    const done = () => img.classList.add('img-fade');
    if (img.complete && img.naturalWidth > 0) done();
    else img.addEventListener('load', done, { once: true });
  });
}

/* --- BUTTON RIPPLE (delegated) --- */
document.addEventListener('pointerdown', (e) => {
  if (reducedMotion) return;
  const btn = e.target.closest('.btn');
  if (!btn) return;
  const rect = btn.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height) * 2;
  const ripple = document.createElement('span');
  ripple.className = 'ripple';
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
  ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
  btn.appendChild(ripple);
  setTimeout(() => ripple.remove(), 650);
});

/* --- SCROLL UI: progress bar, parallax, mobile sticky CTA --- */
const scrollProgressEl = document.getElementById('scroll-progress');
const mobileCtaEl = document.getElementById('mobile-cta');
const heroBgImg = document.getElementById('hero-bg-img');
const footerEl = document.querySelector('.footer');

function updateScrollUI() {
  const st = window.scrollY;
  const dh = document.documentElement.scrollHeight - window.innerHeight;
  if (scrollProgressEl) scrollProgressEl.style.width = (dh > 0 ? (st / dh) * 100 : 0) + '%';

  if (heroBgImg && heroBgImg.style.display !== 'none' && !reducedMotion && st < window.innerHeight * 1.1) {
    heroBgImg.style.setProperty('--py', (st * 0.25) + 'px');
  }

  if (mobileCtaEl) {
    const footerRect = footerEl ? footerEl.getBoundingClientRect() : null;
    const overlappingFooter = footerRect && footerRect.top < window.innerHeight;
    mobileCtaEl.classList.toggle('show', st > window.innerHeight * 0.8 && !overlappingFooter);
  }
}

/* --- SCROLL INDICATOR (hero → about) --- */
function setupScrollIndicator() {
  const si = document.querySelector('.scroll-indicator');
  if (!si) return;
  si.addEventListener('click', () => {
    const about = document.getElementById('about');
    if (about) about.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
  });
  si.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); si.click(); }
  });
}

/* --- MARQUEE KEYBOARD ACCESSIBILITY --- */
function setupMarqueeA11y() {
  document.querySelectorAll('.marquee-card').forEach(card => {
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
  });
}

document.addEventListener('click', (e) => {
  const menu = document.getElementById('nav-menu');
  if (menu.classList.contains('open') &&
      !menu.contains(e.target) &&
      !document.getElementById('hamburger').contains(e.target)) {
    menu.classList.remove('open');
    document.getElementById('hamburger').classList.remove('active');
  }
});
