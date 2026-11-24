/* Nookab website translations (English is the source text in index.html).
 * Only copy written for this website is translated. App terms (Flashcards, Quiz,
 * Spelling, Daily Blitz, Quick Sprint, Today's Words, Mastery Boost, Clear Weak
 * Words, Word of the Day, weak words, Learning/Practicing/Mastered, AI Auto-Fill…),
 * app screenshots, mock app UI and vocabulary examples stay as they are.
 *
 * Markup:  data-i18n="key"            -> element innerHTML
 *          data-i18n-<attr>="key"     -> attribute (aria-label, alt, …)
 */
(function () {
    'use strict';

    var STORAGE_KEY = 'nookab-lang';
    var LANGS = {
        en: { html: 'en', code: 'EN' },
        bn: { html: 'bn-BD', code: 'BN', locale: 'bn-BD' },
        de: { html: 'de', code: 'DE', locale: 'de-DE' }
    };
    var ATTRS = ['aria-label', 'alt', 'title'];

    var T = {
        /* =============================== BANGLA =============================== */
        bn: {
            'meta.title': 'Nookab — জার্মান ও ইংরেজি শেখার অফলাইন শব্দখাতা',
            'meta.desc': 'Nookab হলো জার্মান আর ইংরেজি শিখছেন এমন সবার জন্য একটি অফলাইন শব্দখাতা। চলার পথে যে শব্দগুলো পান, সেগুলো জমিয়ে রাখুন, Flashcards, Quiz আর Spelling দিয়ে অনুশীলন করুন, আর শব্দগুলোকে করে নিন একান্ত নিজের। সম্পূর্ণ ফ্রি, কোনো অ্যাকাউন্ট লাগে না।',
            'manifesto.highlight': 'নিজের',
            'air.works': 'চলছে',

            'skip': 'সরাসরি মূল অংশে যান',
            'nav.home': 'Nookab হোম',
            'nav.how': 'যেভাবে কাজ করে',
            'nav.languages': 'ভাষা',
            'nav.practice': 'অনুশীলন',
            'nav.mastery': 'অগ্রগতি',
            'nav.offline': 'অফলাইন',
            'nav.faq': 'প্রশ্নোত্তর',
            'nav.theme': 'থিম বদলান',
            'nav.lang': 'ভাষা বদলান',
            'nav.cta': 'অ্যাপটি নিন',
            'nav.menu': 'মেনু খুলুন',

            'hero.eyebrow': 'Google Play-তে ফ্রি · কোনো অ্যাকাউন্ট লাগে না',
            'hero.t1': 'যেখানে শব্দ হয়ে ওঠে',
            'hero.t2': '<em class="serif">আপনার নিজের।</em>',
            'hero.sub': 'এটি এমন এক অফলাইন শব্দখাতা, যাতে <strong>আগে থেকে বানানো কোনো শব্দতালিকা নেই</strong>। বই, সিরিজ কিংবা আড্ডায় যে শব্দগুলো সত্যিই আপনার সামনে আসে, সেগুলো দিয়েই খাতাটা ভরে তুলুন — তারপর তিনভাবে অনুশীলন করুন, আর দেখুন শব্দগুলো কীভাবে মনে গেঁথে যায়।',
            'hero.learnDe': 'জার্মান শিখুন',
            'hero.learnEn': 'ইংরেজি শিখুন',
            'hero.film': '৯০ সেকেন্ডের ভিডিওটি দেখুন',
            'hero.proof1': 'অ্যাকাউন্ট লাগে না',
            'hero.proof2': 'অফলাইনেও চলে',
            'hero.proof3': 'সব ফিচার ফ্রি',
            'cta.play': 'Google Play থেকে ডাউনলোড করুন',

            'why.eyebrow': 'কেন Nookab',
            'why.text': 'বেশিরভাগ ভোকাবুলারি অ্যাপ আপনার হাতে ধরিয়ে দেয় অন্য কারও বানানো শব্দতালিকা। Nookab শুরু হয় আপনার নিজের তালিকা দিয়ে — আপনার পড়া বই, দেখা সিরিজ আর রোজকার কথাবার্তার শব্দ দিয়ে। যে শব্দই অনুশীলন করুন, সেটা আপনিই বেছে নিয়েছেন।',

            'how.eyebrow': 'যেভাবে কাজ করে',
            'how.title': '<em class="serif">“শব্দটা যেন কী ছিল?”</em> থেকে পুরোপুরি আয়ত্তে।',
            'how.s1.title': 'চোখে পড়া শব্দগুলো জমিয়ে রাখুন',
            'how.s1.text': 'শব্দ আর তার অনুবাদ লিখুন, শব্দের ধরন বেছে নিন — ব্যস, হয়ে গেল। চাইলে যখন খুশি বহুবচন, উদাহরণ বাক্য, সমার্থক শব্দ আর নোট যোগ করুন। <strong>“der Hund”</strong> লিখলেই Nookab নিজে থেকে আর্টিকেলটা আলাদা করে গুছিয়ে রাখে।',
            'how.s1.alt': 'Nookab-এর Add Word স্ক্রিন',
            'how.s2.title': 'খাটুনির কাজটা AI-কে দিন <span class="pill">ঐচ্ছিক</span>',
            'how.s2.text': 'নিজের ফ্রি Gemini কি দিয়ে AI Auto-Fill চালু করুন — এক ট্যাপেই অনুবাদ, ব্যাকরণ আর উদাহরণের পরামর্শ চলে আসবে, আপনি শুধু একবার মিলিয়ে নেবেন। এটি শুরুতে বন্ধ থাকে, আর আপনার শব্দ সরাসরি ফোন থেকে Google-এ যায় — কখনোই আমাদের কাছে নয়।',
            'how.s2.alt': 'Nookab-এর AI Auto-Fill সেটিংস',
            'how.s3.title': 'অল্প সময়ে, ছোট ছোট অনুশীলন',
            'how.s3.text': 'Flashcards, চার অপশনের Quiz, কিংবা স্মৃতি থেকে Spelling। প্রতি সেশনে রাখতে পারেন ৫ থেকে ১০০টি প্রশ্ন, আর চাইলে যেকোনো ক্যাটাগরিতে সীমাবদ্ধ করতে পারেন — ভ্রমণ, খাবার, কাজ কিংবা আপনার বানানো যেকোনো কিছু।',
            'how.s3.alt': 'Nookab-এর অনুশীলন মোড বাছাইয়ের স্ক্রিন',
            'how.s4.title': 'শব্দগুলো হয়ে উঠুক আপনার নিজের',
            'how.s4.text': 'প্রতিটি উত্তরে বদলায় শব্দের mastery স্কোর। ভিন্ন ভিন্ন মোডে, ভিন্ন ভিন্ন দিনে ঠিক উত্তর দিলে শব্দটি জিতে নেয় তার ট্রফি। আর ভুল হলে Nookab শব্দটিকে আবার তাড়াতাড়ি সামনে নিয়ে আসে।',
            'how.s4.alt': 'Nookab-এ আয়ত্ত করা শব্দের তালিকা',
            'how.s5.title': 'দেখুন কতটা পথ পেরিয়ে এলেন',
            'how.s5.text': 'আপনার পরিসংখ্যানে থাকে গত ১৪ দিনের অনুশীলন, শব্দের ধরন আর ক্যাটাগরি অনুযায়ী নির্ভুলতা, সবচেয়ে লম্বা স্ট্রিক, আর যে শব্দগুলো এখনো ভোগাচ্ছে সেগুলোও — তাই পরের বার কী অনুশীলন করবেন, তা পরিষ্কার জানা থাকে।',
            'how.s5.alt': 'Nookab-এর পরিসংখ্যান স্ক্রিন',

            'langs.eyebrow': 'দুটি ভাষা',
            'langs.title': 'জার্মান বা ইংরেজি। <em class="serif">দুটোই আছে শুরু থেকে।</em>',
            'langs.lead': 'শুরুতেই বেছে নিন কোন ভাষা শিখছেন — Nookab সেই অনুযায়ী সাজিয়ে দেবে প্রতিটি শব্দকার্ড, ব্যাকরণের ঘর আর অনুশীলন সেশন।',
            'langs.switch': 'আপনি কোন ভাষা শিখছেন, বেছে নিন',
            'langs.tabDe': 'জার্মান শিখছি',
            'langs.tabEn': 'ইংরেজি শিখছি',
            'langs.de.title': 'লিঙ্গ চিনে নিন <em class="serif">রং দেখেই।</em>',
            'langs.de.lead': '<span class="t-der">der</span> নীল, <span class="t-die">die</span> গোলাপি, <span class="t-das">das</span> সবুজ — প্রতিটি তালিকা, কার্ড আর কুইজে। কিছুদিন পর আর আন্দাজ করতে হয় না। কার্ড উল্টাতে ট্যাপ করুন।',
            'langs.flip.de1': 'der Löffel — অনুবাদ দেখতে কার্ডটি উল্টান',
            'langs.flip.de2': 'die Brücke — অনুবাদ দেখতে কার্ডটি উল্টান',
            'langs.flip.de3': 'das Fenster — অনুবাদ দেখতে কার্ডটি উল্টান',
            'langs.de.m1': '<b>ä ö ü ß, এক ট্যাপেই।</b> কিবোর্ডের ঠিক ওপরেই থাকে বিশেষ অক্ষরের একটি বার।',
            'langs.de.m2': '<b>ক্রিয়াপদের পূর্ণ রূপান্তর।</b> বর্তমান কাল, Präteritum, Perfekt আর haben/sein — সবই থাকে শব্দকার্ডে।',
            'langs.de.m3': '<b>জার্মানে শুনুন।</b> স্পিকারে ট্যাপ করলেই ফোনের জার্মান ভয়েসে শুনতে পাবেন উচ্চারণ।',
            'langs.en.title': 'কঠিন অংশগুলোও <em class="serif">প্রতিটি কার্ডে।</em>',
            'langs.en.lead': 'অনিয়মিত ক্রিয়া, তুলনার রূপ, নিয়ম না মানা বহুবচন — Nookab এগুলো রেখে দেয় শব্দের ঠিক পাশেই, যাতে পুরোটা একবারেই শিখে নিতে পারেন। কার্ড উল্টাতে ট্যাপ করুন।',
            'langs.flip.en1': 'go — রূপগুলো দেখতে কার্ডটি উল্টান',
            'langs.flip.en2': 'good — রূপগুলো দেখতে কার্ডটি উল্টান',
            'langs.flip.en3': 'child — রূপগুলো দেখতে কার্ডটি উল্টান',
            'langs.en.m1': '<b>প্রতিটি ক্রিয়ার তিন রূপ।</b> Past tense আর past participle থাকে কার্ডেই — “went” আর “gone” নিয়ে আর গুলিয়ে ফেলবেন না।',
            'langs.en.m2': '<b>অনুবাদ আপনার ভাষায়।</b> AI Auto-Fill অনুবাদ করতে পারে বাংলা, স্প্যানিশ, পর্তুগিজ, ফরাসি বা জার্মান ভাষায়।',
            'langs.en.m3': '<b>ইংরেজিতে শুনুন।</b> স্পিকারে ট্যাপ করলেই ফোনের ইংরেজি ভয়েসে শুনতে পাবেন উচ্চারণ।',

            'practice.eyebrow': 'অনুশীলন',
            'practice.title': 'প্রতিটি শব্দ,<br><em class="serif">তিনভাবে।</em>',
            'practice.lead': 'প্রথমে চিনুন, তারপর বেছে নিন, শেষে নিজে লিখুন। প্রতিটি মোড আগেরটার চেয়ে একটু কঠিন — আর তাতে পয়েন্টও একটু বেশি।',
            'practice.hint': 'স্ক্রল করতে থাকুন',
            'practice.flash.tag': 'উল্টান। মনে করুন। মনে রাখুন।',
            'practice.flash.text': 'দিক বেছে নিন, কার্ড উল্টান, তারপর নিজের কাছে সৎ থাকুন: <em>Got it</em> নাকি <em>Wrong</em>। কার্ডের পেছনে থাকে আর্টিকেল, বহুবচন, উদাহরণ আর আপনার নোট।',
            'practice.flash.alt': 'die Ausstellung দেখানো Nookab ফ্ল্যাশকার্ড',
            'practice.quiz.tag': 'ঠিকটা বেছে নিন।',
            'practice.quiz.text': 'চারটি অপশন, সবই আপনার নিজের যোগ করা শব্দ থেকে। ঠিক উত্তর সঙ্গে সঙ্গে সবুজ হয়ে ওঠে — তাই বুঝতে পারেন কোন শব্দগুলো মনে থাকছে।',
            'practice.quiz.alt': 'Nookab কুইজ: ইংরেজি শব্দ achieve আর বাংলা অপশন, সঠিক উত্তর দেওয়া',
            'practice.spell.tag': 'স্মৃতি থেকে লিখুন।',
            'practice.spell.text': 'কোনো অপশন নেই, কোনো হিন্ট নেই — পুরোটাই মনে করে লেখা। বড় হাতের-ছোট হাতের অক্ষরের জন্য নম্বর কাটে না, আর জার্মান শিক্ষার্থীরা কিবোর্ডের ঠিক ওপরেই পান ä ö ü ß বার।',
            'practice.spell.alt': 'বিশেষ অক্ষরের বারসহ Nookab-এর Spelling অনুশীলন',

            'mastery.eyebrow': 'অগ্রগতি',
            'mastery.title': 'অগ্রগতি, যা <em class="serif">চোখে দেখা যায়।</em>',
            'mastery.lead': 'প্রতিটি শব্দের থাকে ০ থেকে ১০০ পর্যন্ত একটি স্কোর। ঠিক উত্তরে স্কোর বাড়ে, আর একটি ভুলে কাটা যায় ২০ পয়েন্ট। কোনো ফাঁকিবাজি নেই, কোনো শর্টকাটও নেই।',
            'mastery.weak.title': 'Weak words লুকিয়ে থাকতে পারে না।',
            'mastery.weak.text': 'কোনো শব্দে পরপর দুবার ভুল করলে — কিংবা পাঁচবার রিভিউয়ের পর নির্ভুলতা ৬০%-এর নিচে নামলে — Nookab সেটিকে চিহ্নিত করে রাখে। সেই চিহ্ন মুছতে হলে শব্দটিকে নিজেকে প্রমাণ করতে হয়:',
            'mastery.weak.l1': '<b>পরপর ৫ বার সঠিক</b>আন্দাজে লেগে যাওয়া চলবে না।',
            'mastery.weak.l2': '<b>অন্তত ২ দিন জুড়ে</b>“ঘুম-পরীক্ষা” — একটা রাত পেরিয়েও মনে থাকতে হবে।',
            'mastery.weak.l3': '<b>নির্ভুলতা আবার ৬০%+</b>সবমিলিয়ে, শুধু আজকের হিসাবে নয়।',
            'mastery.weak.alt': 'weak হিসেবে চিহ্নিত একটি শব্দের বিস্তারিত, Nookab-এ',
            'mastery.mix.title': 'সেশন সাজানো হয় সেই শব্দগুলো দিয়ে, যেগুলো আপনি ভুলতে বসেছেন।',
            'mastery.mix.text': 'প্রতিটি অনুশীলন শুরু হয় সবচেয়ে ঝুঁকিতে থাকা শব্দগুলো দিয়ে। এটা শুধু পরামর্শ দেয় — কোনো শব্দ কখনো আটকে রাখে না। যা খুশি, যখন খুশি অনুশীলন করুন।',

            'features.eyebrow': 'আরও যা আছে',
            'features.title': 'ছোট ছোট জিনিস, <em class="serif">বড় পার্থক্য।</em>',
            'features.streak.head': 'স্ট্রিক',
            'features.streak.title': 'অভ্যাস, যা চোখে দেখা যায়।',
            'features.streak.text': 'একটি সেশন শেষ করলে, কিংবা কোনো শব্দ যোগ বা এডিট করলেই দিনটা গোনা হয়। শেষ সাত দিনের হিসাব এক নজরে।',
            'features.goal.head': 'দৈনিক লক্ষ্য',
            'features.goal.text': 'দিনে ১ থেকে ৯৯৯টি শব্দ পর্যন্ত লক্ষ্য ঠিক করে নিন।',
            'features.blitz.title': 'এক ট্যাপে মানানসই অনুশীলন।',
            'features.stats.head': 'পরিসংখ্যান',
            'features.stats.title': 'জানুন আপনি কোথায় দাঁড়িয়ে।',
            'features.stats.text': '১৪ দিনের অনুশীলন, শব্দের ধরন আর ক্যাটাগরি অনুযায়ী নির্ভুলতা, সবচেয়ে কঠিন আর সবচেয়ে বেশি অনুশীলন করা শব্দগুলো।',
            'features.xlsx.head': 'ইমপোর্ট ও এক্সপোর্ট',
            'features.xlsx.title': 'আপনার শব্দ, একটি স্প্রেডশিটে।',
            'features.xlsx.text': 'শব্দ, অগ্রগতি আর অনুশীলনের ইতিহাস — সবকিছু একটি Excel ফাইলে এক্সপোর্ট করুন, আর নতুন ফোনে ফিরিয়ে আনুন। খোলা যায় Excel, Google Sheets আর LibreOffice-এ।',
            'features.keys.head': 'বিশেষ অক্ষর',
            'features.keys.badge': 'শুধু জার্মান',
            'features.keys.aria': 'জার্মান বিশেষ অক্ষর',
            'features.keys.text': 'শুধু জার্মান শিক্ষার্থীদের জন্য — টাইপ করার সময় বারটি থাকে কিবোর্ডের ঠিক ওপরে।',
            'features.tts.head': 'উচ্চারণ',
            'features.tts.text': 'যেকোনো শব্দ শুনুন জার্মান বা ইংরেজিতে, আপনার ফোনের নিজস্ব ভয়েসে।',
            'features.notify.head': 'আলতো রিমাইন্ডার',
            'features.notify.text': 'Word of the Day, স্ট্রিক আর লক্ষ্যের রিমাইন্ডার, সাপ্তাহিক সারাংশ — প্রতিটির জন্য আলাদা সুইচ।',

            'film.eyebrow': 'ভিডিও',
            'film.title': 'Nookab, <em class="serif">৯০ সেকেন্ডে।</em>',
            'film.alt': 'Nookab প্রোমো ভিডিও',
            'film.play': 'Nookab-এর ভিডিওটি চালান',
            'film.label': 'ভিডিও চালান · ১:৩০ · YouTube',

            'offline.eyebrow': 'অফলাইন',
            'offline.title': 'এয়ারপ্লেন মোড? <em class="serif">কোনো সমস্যা নেই।</em>',
            'offline.lead': 'কোনো অ্যাকাউন্ট নেই, সার্ভার নেই, অ্যানালিটিক্সও নেই। আপনার শব্দভান্ডার থাকে আপনার ফোনেই, আর মূল সব ফিচার চলে ইন্টারনেট ছাড়াই।',
            'offline.air.label': 'এয়ারপ্লেন মোড',
            'offline.air.aria': 'এয়ারপ্লেন মোডের ডেমো চালু বা বন্ধ করুন',
            'offline.air.l1': 'শব্দ যোগ ও এডিট',
            'offline.air.l2': 'Flashcards, Quiz, Spelling',
            'offline.air.l3': 'পরিসংখ্যান ও স্ট্রিক',
            'offline.air.l4': 'Excel ইমপোর্ট ও এক্সপোর্ট',
            'offline.air.l5': 'রিমাইন্ডার',
            'offline.c1.title': 'কোনো অ্যাকাউন্ট নেই',
            'offline.c1.text': 'সাইন-আপ নেই, ইমেইল নেই, পাসওয়ার্ডও নেই। অ্যাপ খুলুন আর শব্দ যোগ করা শুরু করুন।',
            'offline.c2.title': 'সব থাকে আপনার ফোনে',
            'offline.c2.text': 'কোনো ক্লাউড কপি নেই, ট্র্যাকিং নেই, আর আপনার শব্দ দিয়ে কখনো AI ট্রেইন করা হয় না।',
            'offline.c3.title': 'যখন খুশি সঙ্গে নিন',
            'offline.c3.text': 'যেকোনো সময় সবকিছু XLSX-এ এক্সপোর্ট করুন — এটি সত্যিকারের স্প্রেডশিট, কোনো তালাবদ্ধ ফরম্যাট নয়।',
            'offline.c4.title': 'অনলাইন, শুধু আপনি চাইলে',
            'offline.c4.text': 'AI Auto-Fill ঐচ্ছিক, আর চলে আপনার নিজের কি দিয়ে। এ ছাড়া আর কোনো কিছুতেই ইন্টারনেট লাগে না।',

            'numbers.aria': 'সংখ্যায় Nookab',
            'numbers.n1': 'অনুশীলন মোড',
            'numbers.n2': 'অ্যাকাউন্টের প্রয়োজন',
            'numbers.cur': '৳',
            'numbers.n3': 'সব ফিচারের দাম',
            'numbers.n4': 'মূল ফিচার অফলাইনে',

            'faq.eyebrow': 'প্রশ্নোত্তর',
            'faq.title': 'প্রশ্ন আছে? <em class="serif">উত্তরও আছে।</em>',
            'faq.lead': 'যা খুঁজছেন তা পাচ্ছেন না? <a href="mailto:contact.nookab@gmail.com">আমাদের ইমেইল করুন</a> — প্রতিটি মেসেজ একজন মানুষই পড়েন।',
            'faq.q1': 'Nookab কী?',
            'faq.a1': 'এটি একটি অফলাইন শব্দখাতা, তাঁদের জন্য যাঁরা বাস্তবে যে শব্দগুলোর মুখোমুখি হন, সেগুলোই অনুশীলন করতে চান। কোনো তৈরি কোর্সের বদলে নিজের পড়া, দেখা আর কথাবার্তা থেকে শব্দ যোগ করুন — তারপর Flashcards, Quiz আর Spelling দিয়ে অনুশীলন করুন।',
            'faq.q2': 'সত্যিই কি ফ্রি?',
            'faq.a2': 'হ্যাঁ। প্রথম দিন থেকেই প্রতিটি অনুশীলন মোড, চার্ট আর সেটিং আপনার জন্য খোলা। কোনো সাবস্ক্রিপশন নেই, ইন-অ্যাপ কেনাকাটা নেই, তালাবদ্ধ কোনো ফিচারও নেই।',
            'faq.q3': 'অফলাইনে কি চলে?',
            'faq.a3': 'হ্যাঁ। শব্দ যোগ করা, সব অনুশীলন মোড, পরিসংখ্যান, স্ট্রিক, রিমাইন্ডার আর Excel ইমপোর্ট-এক্সপোর্ট — সবই এয়ারপ্লেন মোডে চলে। ইন্টারনেট লাগে শুধু ঐচ্ছিক AI Auto-Fill-এর জন্য।',
            'faq.q4': 'কোন কোন ভাষা শেখা যায়?',
            'faq.a4': 'জার্মান অথবা ইংরেজি — শুরুতেই একটি বেছে নেবেন। ইংরেজি শিক্ষার্থীরা ক্রিয়াপদের past tense ও past participle, আর বিশেষণের comparative ও superlative রূপ পান; জার্মান শিক্ষার্থীরা পান রঙে চিহ্নিত আর্টিকেল, বহুবচন, genitive আর পূর্ণ ক্রিয়ারূপ। জার্মান শিক্ষার্থীরা চাইলে অ্যাপের ইন্টারফেসও জার্মানে বদলে নিতে পারেন। AI Auto-Fill অনুবাদ করতে পারে ইংরেজি, জার্মান, বাংলা, স্প্যানিশ, পর্তুগিজ বা ফরাসি ভাষায়।',
            'faq.q5': 'কোন শব্দ অনুশীলন করব, Nookab তা কীভাবে ঠিক করে?',
            'faq.a5': 'প্রতিটি সেশনে weak, learning, practicing আর mastered শব্দ মেশানো থাকে (মোটামুটি ৪০/৩০/২০/১০), আর যে শব্দগুলো ভুলে যাওয়ার সম্ভাবনা সবচেয়ে বেশি, সেগুলো আসে আগে। কড়া নিয়মের spaced-repetition অ্যাপের মতো এটি কখনো কোনো শব্দ অনুশীলনে বাধা দেয় না।',
            'faq.q6': 'AI Auto-Fill কী?',
            'faq.a6': 'একটি ঐচ্ছিক সহকারী, যা শুরুতে বন্ধ থাকে। নিজের ফ্রি Google Gemini API কি দিলে এক ট্যাপেই পেয়ে যাবেন শব্দের অনুবাদ, ব্যাকরণ, উদাহরণ আর আরও অনেক কিছুর পরামর্শ। পাঠানো হয় শুধু আপনার টাইপ করা শব্দটি — সরাসরি আপনার ফোন থেকে Google-এ, কখনোই আমাদের কাছে নয়। তবে পরামর্শগুলো একবার মিলিয়ে নিতে ভুলবেন না।',
            'faq.q7': 'নতুন ফোনে সবকিছু কীভাবে নেব?',
            'faq.a7': 'Settings → Import &amp; Export-এ গিয়ে আপনার শব্দভান্ডার একটি Excel ফাইল হিসেবে এক্সপোর্ট করুন। নতুন ফোনে সেটি ইমপোর্ট করলেই চলে আসবে আপনার শব্দ, অগ্রগতি আর অনুশীলনের ইতিহাস। যেহেতু সবকিছু আপনার ডিভাইসেই থাকে, এই ফাইলটিই আপনার ব্যাকআপ।',
            'faq.q8': 'Nookab কে বানিয়েছেন?',
            'faq.a8': 'জার্মান শিখতে থাকা একজন SQA ইঞ্জিনিয়ার, যিনি নোটখাতা আর ছড়িয়ে-ছিটিয়ে থাকা নানা অ্যাপের ভিড়ে বারবার নতুন শব্দ হারিয়ে ফেলতেন। Nookab-এর প্রতিটি ফিচার সেই পথচলারই কোনো না কোনো সমস্যার সমাধান। অ্যাপটি তৈরি ও প্রকাশ করেছে Hanan Atelier।',

            'cta.title': 'আপনার পরের শব্দটি<br><em class="serif">অপেক্ষা করছে।</em>',
            'cta.text': 'ফ্রিতে Nookab ডাউনলোড করুন, আর আজই যোগ করুন প্রথম যে শব্দটি চোখে পড়ে।',
            'footer.tagline': 'যেখানে শব্দ হয়ে ওঠে আপনার নিজের।',
            'footer.product': 'প্রোডাক্ট',
            'footer.support': 'সহায়তা',
            'footer.legal': 'আইনি তথ্য',
            'footer.langs': 'জার্মান ও ইংরেজি',
            'footer.practice': 'অনুশীলন মোড',
            'footer.features': 'ফিচার',
            'footer.bug': 'বাগ রিপোর্ট বা নতুন ফিচারের অনুরোধ',
            'footer.privacy': 'প্রাইভেসি পলিসি',
            'footer.terms': 'ব্যবহারের শর্তাবলি',
            'footer.copy': '© ২০২৬ Hanan Atelier। ভাষা শিক্ষার্থীদের জন্য যত্ন নিয়ে তৈরি।',
            'footer.tm': 'Android ও Google Play হলো Google LLC-এর ট্রেডমার্ক।',
            'modal.aria': 'Nookab ভিডিও',
            'modal.close': 'বন্ধ করুন'
        },

        /* =============================== GERMAN =============================== */
        de: {
            'meta.title': 'Nookab — Offline-Vokabelheft für Deutsch & Englisch',
            'meta.desc': 'Nookab ist das Offline-Vokabelheft für alle, die Deutsch oder Englisch lernen. Speichere die Wörter, die dir begegnen, übe sie mit Flashcards, Quiz und Spelling und mach sie zu deinen eigenen. Kostenlos und ohne Konto.',
            'manifesto.highlight': 'deiner',
            'air.works': 'läuft',

            'skip': 'Zum Inhalt springen',
            'nav.home': 'Nookab – Startseite',
            'nav.how': "So funktioniert's",
            'nav.languages': 'Sprachen',
            'nav.practice': 'Üben',
            'nav.mastery': 'Fortschritt',
            'nav.offline': 'Offline',
            'nav.faq': 'FAQ',
            'nav.theme': 'Farbschema wechseln',
            'nav.lang': 'Sprache ändern',
            'nav.cta': 'App holen',
            'nav.menu': 'Menü öffnen',

            'hero.eyebrow': 'Kostenlos bei Google Play · Ohne Konto',
            'hero.t1': 'Wo Wörter zu',
            'hero.t2': '<em class="serif">deinen</em> werden.',
            'hero.sub': 'Das Offline-Vokabelheft <strong>ohne vorgefertigte Wortlisten</strong>. Du füllst es mit den Wörtern, die dir wirklich begegnen – in Büchern, Serien und Gesprächen –, übst sie auf drei Arten und merkst, wie sie hängen bleiben.',
            'hero.learnDe': 'Deutsch lernen',
            'hero.learnEn': 'Englisch lernen',
            'hero.film': 'Den 90-Sekunden-Film ansehen',
            'hero.proof1': 'Kein Konto',
            'hero.proof2': 'Funktioniert offline',
            'hero.proof3': 'Alle Funktionen gratis',
            'cta.play': 'Jetzt bei Google Play',

            'why.eyebrow': 'Warum Nookab',
            'why.text': 'Die meisten Vokabel-Apps drücken dir die Wortliste von jemand anderem in die Hand. Nookab beginnt mit deiner – mit den Wörtern aus deinen Büchern, deinen Serien, deinen Gesprächen. Jedes Wort, das du übst, hast du selbst ausgesucht.',

            'how.eyebrow': "So funktioniert's",
            'how.title': 'Von <em class="serif">„Wie hieß das noch gleich?“</em> bis es sitzt.',
            'how.s1.title': 'Sammle die Wörter, die dir begegnen',
            'how.s1.text': 'Wort und Übersetzung eintippen, Wortart wählen, fertig. Plural, Beispielsätze, Synonyme und Notizen ergänzt du, wann immer du magst. Tipp <strong>„der Hund“</strong> ein, und Nookab trägt den Artikel automatisch für dich ein.',
            'how.s1.alt': 'Nookab-Bildschirm „Add Word“',
            'how.s2.title': 'Lass die KI die Fleißarbeit machen <span class="pill">Optional</span>',
            'how.s2.text': 'Aktiviere AI Auto-Fill mit deinem eigenen kostenlosen Gemini-Schlüssel – ein Tipp, und du bekommst Übersetzungen, Grammatik und Beispiele zum Prüfen vorgeschlagen. Standardmäßig ist es aus, und dein Wort geht direkt von deinem Handy an Google – niemals an uns.',
            'how.s2.alt': 'Einstellungen für AI Auto-Fill in Nookab',
            'how.s3.title': 'Üben in kurzen Runden',
            'how.s3.text': 'Flashcards, ein Quiz mit vier Antworten oder Spelling aus dem Gedächtnis. Eine Runde hat 5 bis 100 Fragen und lässt sich auf jede Kategorie eingrenzen – Reisen, Essen, Arbeit oder was auch immer du angelegt hast.',
            'how.s3.alt': 'Auswahl der Übungsmodi in Nookab',
            'how.s4.title': 'Sieh zu, wie sie zu deinen werden',
            'how.s4.text': 'Jede Antwort verändert den Mastery-Wert eines Wortes. Sitzt es über verschiedene Modi und Tage hinweg, verdient es sich seine Trophäe. Liegst du daneben, holt Nookab es früher wieder hervor.',
            'how.s4.alt': 'Liste gemeisterter Wörter in Nookab',
            'how.s5.title': 'Sieh, wie weit du gekommen bist',
            'how.s5.text': 'Deine Statistiken zeigen 14 Tage Aktivität, deine Trefferquote nach Wortart und Kategorie, deine längste Serie und die Wörter, die dir noch zu schaffen machen – so weißt du genau, was du als Nächstes üben solltest.',
            'how.s5.alt': 'Statistik-Bildschirm in Nookab',

            'langs.eyebrow': 'Zwei Sprachen',
            'langs.title': 'Deutsch oder Englisch. <em class="serif">Beides an Bord.</em>',
            'langs.lead': 'Wähle beim Start die Sprache, die du lernst – Nookab richtet jede Wortkarte, jedes Grammatikfeld und jede Übungsrunde danach aus.',
            'langs.switch': 'Wähle die Sprache, die du lernst',
            'langs.tabDe': 'Ich lerne Deutsch',
            'langs.tabEn': 'Ich lerne Englisch',
            'langs.de.title': 'Das Genus auf einen Blick – <em class="serif">in Farbe.</em>',
            'langs.de.lead': '<span class="t-der">der</span> ist blau, <span class="t-die">die</span> ist pink, <span class="t-das">das</span> ist grün – in jeder Liste, auf jeder Karte, in jedem Quiz. Nach einer Weile hörst du auf zu raten. Tippe auf eine Karte, um sie umzudrehen.',
            'langs.flip.de1': 'der Löffel – umdrehen, um die Übersetzung zu sehen',
            'langs.flip.de2': 'die Brücke – umdrehen, um die Übersetzung zu sehen',
            'langs.flip.de3': 'das Fenster – umdrehen, um die Übersetzung zu sehen',
            'langs.de.m1': '<b>ä ö ü ß – nur einen Tipp entfernt.</b> Eine Sonderzeichenleiste sitzt direkt über deiner Tastatur.',
            'langs.de.m2': '<b>Verben, komplett konjugiert.</b> Präsens, Präteritum, Perfekt und haben/sein – direkt auf der Wortkarte.',
            'langs.de.m3': '<b>Hör es auf Deutsch.</b> Ein Tipp auf den Lautsprecher, und die deutsche Stimme deines Handys spricht dir das Wort vor.',
            'langs.en.title': 'Die kniffligen Stellen – <em class="serif">auf jeder Karte.</em>',
            'langs.en.lead': 'Unregelmäßige Verben, Steigerungsformen, Plurale, die sich an keine Regel halten – Nookab hält sie direkt beim Wort bereit, damit du alles auf einmal lernst. Tippe auf eine Karte, um sie umzudrehen.',
            'langs.flip.en1': 'go – umdrehen, um die Formen zu sehen',
            'langs.flip.en2': 'good – umdrehen, um die Formen zu sehen',
            'langs.flip.en3': 'child – umdrehen, um die Formen zu sehen',
            'langs.en.m1': '<b>Jedes Verb, drei Formen.</b> Past Tense und Past Participle stehen direkt auf der Karte – nie wieder „went“ und „gone“ verwechseln.',
            'langs.en.m2': '<b>Übersetzungen in deiner Sprache.</b> AI Auto-Fill übersetzt auch ins Bangla, Spanische, Portugiesische, Französische oder Deutsche.',
            'langs.en.m3': '<b>Hör es auf Englisch.</b> Ein Tipp auf den Lautsprecher, und die englische Stimme deines Handys spricht dir das Wort vor.',

            'practice.eyebrow': 'Üben',
            'practice.title': 'Jedes Wort,<br><em class="serif">auf drei Arten.</em>',
            'practice.lead': 'Erkennen, auswählen, dann selbst schreiben. Jeder Modus ist ein bisschen anspruchsvoller – und bringt ein bisschen mehr.',
            'practice.hint': 'Weiterscrollen',
            'practice.flash.tag': 'Umdrehen. Erinnern. Behalten.',
            'practice.flash.text': 'Wähle die Richtung, dreh die Karte um und sei ehrlich zu dir: <em>Got it</em> oder <em>Wrong</em>. Auf der Rückseite stehen Artikel, Plural, Beispiele und deine Notizen.',
            'practice.flash.alt': 'Nookab-Flashcard mit „die Ausstellung“',
            'practice.quiz.tag': 'Finde die richtige Antwort.',
            'practice.quiz.text': 'Vier Antworten, gebaut ausschließlich aus deinen eigenen Wörtern. Richtige Antworten leuchten sofort grün – so siehst du, was hängen bleibt.',
            'practice.quiz.alt': 'Nookab-Quiz: das englische Wort achieve mit Antworten auf Bangla, richtig beantwortet',
            'practice.spell.tag': 'Aus dem Kopf schreiben.',
            'practice.spell.text': 'Keine Auswahl, keine Hinweise – reines Erinnern. Groß- und Kleinschreibung zählt nicht gegen dich, und wer Deutsch lernt, bekommt eine ä-ö-ü-ß-Leiste direkt über der Tastatur.',
            'practice.spell.alt': 'Spelling-Übung in Nookab mit Sonderzeichenleiste',

            'mastery.eyebrow': 'Fortschritt',
            'mastery.title': 'Fortschritt, den du <em class="serif">wirklich siehst.</em>',
            'mastery.lead': 'Jedes Wort hat einen Wert von 0 bis 100. Richtige Antworten bringen ihn nach oben, eine falsche kostet 20 Punkte. Kein Schönrechnen, keine Abkürzungen.',
            'mastery.weak.title': 'Weak Words können sich nicht verstecken.',
            'mastery.weak.text': 'Verfehlst du ein Wort zweimal hintereinander – oder rutscht deine Trefferquote nach fünf Wiederholungen unter 60 % –, markiert Nookab es. Um die Markierung wieder loszuwerden, muss es sich beweisen:',
            'mastery.weak.l1': '<b>5-mal in Folge richtig</b>Glückstreffer zählen nicht.',
            'mastery.weak.l2': '<b>Über mindestens 2 Tage</b>Der „Schlaftest“ – es muss eine Nacht überstehen.',
            'mastery.weak.l3': '<b>Trefferquote wieder bei 60 %+</b>Insgesamt, nicht nur heute.',
            'mastery.weak.alt': 'Wortdetails in Nookab, als weak markiert',
            'mastery.mix.title': 'Runden, die genau das üben, was du gleich vergessen würdest.',
            'mastery.mix.text': 'Jede Übungsrunde beginnt mit deinen wackeligsten Wörtern. Nookab schlägt vor – es sperrt nie ein Wort weg. Üb, was du willst, wann du willst.',

            'features.eyebrow': 'Noch mehr',
            'features.title': 'Kleine Dinge, die <em class="serif">viel ausmachen.</em>',
            'features.streak.head': 'Streaks',
            'features.streak.title': 'Eine Gewohnheit, die du siehst.',
            'features.streak.text': 'Ein Tag zählt, sobald du eine Runde beendest oder ein Wort hinzufügst oder bearbeitest. Deine letzten sieben Tage auf einen Blick.',
            'features.goal.head': 'Tagesziel',
            'features.goal.text': 'Setz dir ein Ziel zwischen 1 und 999 Wörtern pro Tag.',
            'features.blitz.title': 'Ein Tipp, die passende Übung.',
            'features.stats.head': 'Statistiken',
            'features.stats.title': 'Wisse, wo du stehst.',
            'features.stats.text': '14 Tage Aktivität, Trefferquote nach Wortart und Kategorie, deine schwierigsten und deine meistgeübten Wörter.',
            'features.xlsx.head': 'Import &amp; Export',
            'features.xlsx.title': 'Deine Wörter als Tabelle.',
            'features.xlsx.text': 'Exportiere alles in eine Excel-Datei – Wörter, Fortschritt und Verlauf – und stelle es auf einem neuen Handy wieder her. Öffnet sich in Excel, Google Sheets und LibreOffice.',
            'features.keys.head': 'Sonderzeichen',
            'features.keys.badge': 'Nur Deutsch',
            'features.keys.aria': 'Deutsche Sonderzeichen',
            'features.keys.text': 'Nur für Deutschlernende – die Leiste sitzt beim Tippen direkt über deiner Tastatur.',
            'features.tts.head': 'Aussprache',
            'features.tts.text': 'Hör dir jedes Wort auf Deutsch oder Englisch an – mit den Stimmen deines Handys.',
            'features.notify.head': 'Sanfte Erinnerungen',
            'features.notify.text': 'Word of the Day, Erinnerungen an Streak und Tagesziel, ein Wochenrückblick – jeweils mit eigenem Schalter.',

            'film.eyebrow': 'Der Film',
            'film.title': 'Nookab in <em class="serif">90 Sekunden.</em>',
            'film.alt': 'Nookab-Promovideo',
            'film.play': 'Den Nookab-Film abspielen',
            'film.label': 'Film abspielen · 1:30 · YouTube',

            'offline.eyebrow': 'Offline',
            'offline.title': 'Flugmodus? <em class="serif">Kein Problem.</em>',
            'offline.lead': 'Kein Konto, kein Server, keine Analyse-Tools. Dein Wortschatz lebt auf deinem Handy, und alle Kernfunktionen laufen ohne Internetverbindung.',
            'offline.air.label': 'Flugmodus',
            'offline.air.aria': 'Flugmodus-Demo ein- oder ausschalten',
            'offline.air.l1': 'Wörter hinzufügen &amp; bearbeiten',
            'offline.air.l2': 'Flashcards, Quiz, Spelling',
            'offline.air.l3': 'Statistiken &amp; Streaks',
            'offline.air.l4': 'Excel-Import &amp; -Export',
            'offline.air.l5': 'Erinnerungen',
            'offline.c1.title': 'Kein Konto',
            'offline.c1.text': 'Keine Registrierung, keine E-Mail, kein Passwort. App öffnen und loslegen.',
            'offline.c2.title': 'Bleibt auf deinem Handy',
            'offline.c2.text': 'Keine Cloud-Kopie, kein Tracking – und mit deinen Wörtern wird niemals eine KI trainiert.',
            'offline.c3.title': 'Deins zum Mitnehmen',
            'offline.c3.text': 'Exportiere jederzeit alles als XLSX – eine echte Tabelle, kein abgeschottetes Format.',
            'offline.c4.title': 'Online nur, wenn du willst',
            'offline.c4.text': 'AI Auto-Fill ist optional und nutzt deinen eigenen Schlüssel. Alles andere kommt ohne Verbindung aus.',

            'numbers.aria': 'Nookab in Zahlen',
            'numbers.n1': 'Übungsmodi',
            'numbers.n2': 'Konten nötig',
            'numbers.cur': '€',
            'numbers.n3': 'für alle Funktionen',
            'numbers.n4': 'Kernfunktionen offline',

            'faq.eyebrow': 'FAQ',
            'faq.title': 'Fragen? <em class="serif">Antworten.</em>',
            'faq.lead': 'Dir fehlt etwas? <a href="mailto:contact.nookab@gmail.com">Schreib uns</a> – jede Nachricht liest ein echter Mensch.',
            'faq.q1': 'Was ist Nookab?',
            'faq.a1': 'Ein Offline-Vokabelheft für alle, die genau die Wörter üben wollen, die ihnen wirklich begegnen. Statt eines fertigen Kurses fügst du Wörter aus deinem eigenen Lesen, Schauen und Reden hinzu – und übst sie dann mit Flashcards, Quiz und Spelling.',
            'faq.q2': 'Ist es wirklich kostenlos?',
            'faq.a2': 'Ja. Jeder Übungsmodus, jedes Diagramm und jede Einstellung steht dir vom ersten Tag an offen. Keine Abos, keine In-App-Käufe, keine gesperrten Funktionen.',
            'faq.q3': 'Funktioniert es offline?',
            'faq.a3': 'Ja. Wörter hinzufügen, alle Übungsmodi, Statistiken, Streaks, Erinnerungen sowie Excel-Import und -Export funktionieren im Flugmodus. Nur das optionale AI Auto-Fill braucht Internet.',
            'faq.q4': 'Welche Sprachen kann ich lernen?',
            'faq.a4': 'Deutsch oder Englisch – du entscheidest dich beim Start für eine. Wer Englisch lernt, bekommt bei Verben Past Tense und Past Participle und bei Adjektiven Komparativ und Superlativ; wer Deutsch lernt, bekommt farbcodierte Artikel, Plural, Genitiv und vollständige Konjugationen. Deutschlernende können außerdem die App-Oberfläche auf Deutsch umstellen. AI Auto-Fill übersetzt ins Englische, Deutsche, Bangla, Spanische, Portugiesische oder Französische.',
            'faq.q5': 'Wie entscheidet Nookab, was ich übe?',
            'faq.a5': 'Jede Runde mischt Weak, Learning, Practicing und Mastered Words (etwa 40/30/20/10) – die Wörter, die du am ehesten vergisst, kommen zuerst. Anders als strenge Spaced-Repetition-Apps hindert dich Nookab nie daran, ein beliebiges Wort zu üben.',
            'faq.q6': 'Was ist AI Auto-Fill?',
            'faq.a6': 'Ein optionaler Helfer, der standardmäßig aus ist. Mit deinem eigenen kostenlosen Google-Gemini-API-Schlüssel schlägt dir ein Tipp Übersetzung, Grammatik, Beispiele und mehr vor. Gesendet wird nur das Wort, das du eingetippt hast – direkt von deinem Handy an Google, niemals an uns. Wirf trotzdem immer kurz einen Blick auf die Vorschläge.',
            'faq.q7': 'Wie ziehe ich auf ein neues Handy um?',
            'faq.a7': 'Öffne Settings → Import &amp; Export und exportiere deinen Wortschatz als Excel-Datei. Importiere sie auf dem neuen Handy, und deine Wörter, dein Fortschritt und dein Übungsverlauf ziehen mit um. Da alles auf deinem Gerät liegt, ist diese Datei gleichzeitig dein Backup.',
            'faq.q8': 'Wer steckt hinter Nookab?',
            'faq.a8': 'Ein SQA-Engineer, der Deutsch lernt und neue Wörter immer wieder zwischen Notizbüchern und verstreuten Apps verloren hat. Jede Funktion in Nookab löst ein Problem aus genau dieser Zeit. Entwickelt und veröffentlicht wird Nookab von Hanan Atelier.',

            'cta.title': 'Dein nächstes Wort<br><em class="serif">wartet schon.</em>',
            'cta.text': 'Lade Nookab kostenlos herunter und füge noch heute das erste Wort hinzu, das dir begegnet.',
            'footer.tagline': 'Wo Wörter zu deinen werden.',
            'footer.product': 'Produkt',
            'footer.support': 'Hilfe',
            'footer.legal': 'Rechtliches',
            'footer.langs': 'Deutsch &amp; Englisch',
            'footer.practice': 'Übungsmodi',
            'footer.features': 'Funktionen',
            'footer.bug': 'Fehler melden oder Funktion wünschen',
            'footer.privacy': 'Datenschutzerklärung',
            'footer.terms': 'Nutzungsbedingungen',
            'footer.copy': '© 2026 Hanan Atelier. Mit Sorgfalt für Sprachlernende gemacht.',
            'footer.tm': 'Android und Google Play sind Marken von Google LLC.',
            'modal.aria': 'Nookab-Film',
            'modal.close': 'Schließen'
        }
    };

    /* ------------------------------------------------------------------ */
    var doc = document.documentElement;
    var originals = new Map();      // element -> { html, attrs: {name: value} }
    var metaDesc = document.querySelector('meta[name="description"]');
    var original = {
        'meta.title': document.title,
        'meta.desc': metaDesc ? metaDesc.getAttribute('content') : '',
        'manifesto.highlight': 'yours',
        'air.works': 'works'
    };
    var current = 'en';

    function snapshot() {
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            if (!originals.has(el)) originals.set(el, { html: el.innerHTML, attrs: {} });
        });
        ATTRS.forEach(function (a) {
            document.querySelectorAll('[data-i18n-' + a + ']').forEach(function (el) {
                var o = originals.get(el) || { html: null, attrs: {} };
                if (!(a in o.attrs)) o.attrs[a] = el.getAttribute(a);
                originals.set(el, o);
            });
        });
    }

    function t(key) {
        if (current !== 'en' && T[current] && T[current][key] != null) return T[current][key];
        return original[key];
    }

    function loadBanglaFonts() {
        if (document.getElementById('font-bn')) return;
        var l = document.createElement('link');
        l.id = 'font-bn';
        l.rel = 'stylesheet';
        l.href = 'https://fonts.googleapis.com/css2?family=Anek+Bangla:wght@400..800&family=Hind+Siliguri:wght@400;500;600;700&family=Tiro+Bangla:ital@1&display=swap';
        document.head.appendChild(l);
    }

    function apply(lang) {
        if (!LANGS[lang]) lang = 'en';
        current = lang;
        var dict = T[lang] || {};
        if (lang === 'bn') loadBanglaFonts();

        originals.forEach(function (o, el) {
            var key = el.getAttribute('data-i18n');
            if (key && o.html != null) {
                el.innerHTML = (lang !== 'en' && dict[key] != null) ? dict[key] : o.html;
            }
            Object.keys(o.attrs).forEach(function (a) {
                var k = el.getAttribute('data-i18n-' + a);
                el.setAttribute(a, (lang !== 'en' && dict[k] != null) ? dict[k] : o.attrs[a]);
            });
        });

        document.title = t('meta.title');
        if (metaDesc) metaDesc.setAttribute('content', t('meta.desc'));
        doc.setAttribute('lang', LANGS[lang].html);

        var list = document.querySelector('.airplane-list');
        if (list) list.style.setProperty('--works-label', JSON.stringify(t('air.works')));

        // dropdown state
        var code = document.getElementById('langCode');
        if (code) code.textContent = LANGS[lang].code;
        document.querySelectorAll('[data-set-lang]').forEach(function (b) {
            b.setAttribute('aria-checked', String(b.getAttribute('data-set-lang') === lang));
        });

        doc.classList.remove('i18n-pending');
        document.dispatchEvent(new CustomEvent('nookab:lang', { detail: { lang: lang } }));
    }

    function set(lang) {
        try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { }
        // keep shared links in sync without adding history entries
        try {
            var url = new URL(location.href);
            if (lang === 'en') url.searchParams.delete('lang'); else url.searchParams.set('lang', lang);
            history.replaceState(null, '', url.pathname + url.search + url.hash);
        } catch (e) { }
        apply(lang);
    }

    function initial() {
        var fromUrl = null;
        try { fromUrl = new URL(location.href).searchParams.get('lang'); } catch (e) { }
        if (fromUrl && LANGS[fromUrl]) {
            try { localStorage.setItem(STORAGE_KEY, fromUrl); } catch (e) { }
            return fromUrl;
        }
        var stored = null;
        try { stored = localStorage.getItem(STORAGE_KEY); } catch (e) { }
        return LANGS[stored] ? stored : 'en';
    }

    /* ---------------- language dropdown ---------------- */
    function initMenu() {
        var btn = document.getElementById('langBtn');
        var list = document.getElementById('langList');
        if (!btn || !list) return;
        var items = Array.prototype.slice.call(list.querySelectorAll('[data-set-lang]'));

        function open(focusIdx) {
            list.hidden = false;
            btn.setAttribute('aria-expanded', 'true');
            var i = focusIdx != null ? focusIdx : Math.max(0, items.findIndex(function (b) { return b.getAttribute('aria-checked') === 'true'; }));
            items[i].focus();
        }
        function close(refocus) {
            if (list.hidden) return;
            list.hidden = true;
            btn.setAttribute('aria-expanded', 'false');
            if (refocus) btn.focus();
        }

        btn.addEventListener('click', function () { list.hidden ? open() : close(); });
        btn.addEventListener('keydown', function (e) {
            if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); open(e.key === 'ArrowUp' ? items.length - 1 : 0); }
        });
        items.forEach(function (b, i) {
            b.addEventListener('click', function () { set(b.getAttribute('data-set-lang')); close(true); });
            b.addEventListener('keydown', function (e) {
                if (e.key === 'ArrowDown') { e.preventDefault(); items[(i + 1) % items.length].focus(); }
                else if (e.key === 'ArrowUp') { e.preventDefault(); items[(i - 1 + items.length) % items.length].focus(); }
                else if (e.key === 'Escape') { e.preventDefault(); close(true); }
                else if (e.key === 'Tab') { close(false); }
            });
        });
        document.addEventListener('click', function (e) {
            if (!list.hidden && !document.getElementById('langMenu').contains(e.target)) close(false);
        });
    }

    snapshot();
    initMenu();
    apply(initial());

    window.NookabI18n = {
        set: set,
        get lang() { return current; },
        t: t,
        // numbers in website copy (counters, meter) use the page language's digits
        num: function (n) {
            var loc = LANGS[current].locale;
            return loc ? Number(n).toLocaleString(loc) : String(n);
        }
    };
})();
