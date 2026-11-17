/* Nookab landing page interactions
   - Works without GSAP/Lenis (progressive enhancement)
   - Respects prefers-reduced-motion */
(function () {
    'use strict';

    var doc = document.documentElement;
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    var hasGsap = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';

    doc.classList.add('reveal-ready');

    var $ = function (s, c) { return (c || document).querySelector(s); };
    var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
    var clamp = function (v, a, b) { return Math.min(b, Math.max(a, v)); };

    /* ---------------- theme ---------------- */
    var themeBtn = $('#themeToggle');
    var themeMeta = $('meta[name="theme-color"]');
    function setTheme(t) {
        doc.setAttribute('data-theme', t);
        try { localStorage.setItem('nookab-theme', t); } catch (e) { }
        if (themeMeta) themeMeta.setAttribute('content', t === 'dark' ? '#070a08' : '#f5f0eb');
    }
    if (themeBtn) {
        themeBtn.addEventListener('click', function () {
            setTheme(doc.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
        });
    }

    /* ---------------- smooth scroll (Lenis) ---------------- */
    var lenis = null;
    if (!reduceMotion && typeof window.Lenis !== 'undefined') {
        lenis = new window.Lenis({ duration: 1.15, smoothWheel: true });
        if (hasGsap) {
            lenis.on('scroll', window.ScrollTrigger.update);
            window.gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
            window.gsap.ticker.lagSmoothing(0);
        } else {
            var raf = function (t) { lenis.raf(t); requestAnimationFrame(raf); };
            requestAnimationFrame(raf);
        }
    }

    function scrollToTarget(el) {
        if (lenis) lenis.scrollTo(el, { offset: el.id === 'top' ? 0 : -80 });
        else el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
    }

    $$('a[href^="#"]').forEach(function (a) {
        a.addEventListener('click', function (e) {
            var id = a.getAttribute('href');
            if (id.length < 2) return;
            var el = document.querySelector(id);
            if (!el) return;
            e.preventDefault();
            closeMenu();
            scrollToTarget(el);
            history.replaceState(null, '', id === '#top' ? location.pathname : id);
        });
    });

    /* ---------------- nav ---------------- */
    var nav = $('#nav');
    var menuBtn = $('#menuBtn');
    var navLinks = $('#navLinks');

    function closeMenu() {
        if (!menuBtn) return;
        menuBtn.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('is-open');
        nav.classList.remove('menu-open');
    }
    if (menuBtn) {
        menuBtn.addEventListener('click', function () {
            var open = menuBtn.getAttribute('aria-expanded') !== 'true';
            menuBtn.setAttribute('aria-expanded', String(open));
            navLinks.classList.toggle('is-open', open);
            nav.classList.toggle('menu-open', open);
        });
        document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });
    }

    // highlight the section currently in view
    var navMap = {};
    $$('.nav-links a').forEach(function (a) { navMap[a.getAttribute('href').slice(1)] = a; });
    if ('IntersectionObserver' in window) {
        var secIO = new IntersectionObserver(function (entries) {
            entries.forEach(function (en) {
                var link = navMap[en.target.id];
                if (link) link.classList.toggle('is-current', en.isIntersecting);
            });
        }, { rootMargin: '-45% 0px -50% 0px' });
        Object.keys(navMap).forEach(function (id) { var s = document.getElementById(id); if (s) secIO.observe(s); });
    }

    /* ---------------- phone thickness (3D) ---------------- */
    if (!reduceMotion) {
        $$('.phone-hero, .phone-how, .phone-mode, .phone-tilt-l, .cta-phone').forEach(function (p) {
            var frag = document.createDocumentFragment();
            for (var i = 1; i <= 9; i++) {
                var s = document.createElement('span');
                s.className = 'phone-slice';
                s.style.setProperty('--z', (i * 1.3).toFixed(1));
                frag.appendChild(s);
            }
            p.insertBefore(frag, p.firstChild);
        });
    }

    /* ---------------- hero pointer tilt ---------------- */
    var stage = $('#heroStage');
    var tilt = $('#stageTilt');
    if (stage && tilt && finePointer && !reduceMotion) {
        var hero = $('.hero');
        hero.addEventListener('pointermove', function (e) {
            var r = stage.getBoundingClientRect();
            var x = (e.clientX - (r.left + r.width / 2)) / window.innerWidth;
            var y = (e.clientY - (r.top + r.height / 2)) / window.innerHeight;
            tilt.style.setProperty('--ry', (-18 + x * 22).toFixed(2) + 'deg');
            tilt.style.setProperty('--rx', (8 - y * 14).toFixed(2) + 'deg');
        });
        hero.addEventListener('pointerleave', function () {
            tilt.style.setProperty('--ry', '-18deg');
            tilt.style.setProperty('--rx', '8deg');
        });
    }

    /* ---------------- marquee ---------------- */
    $$('.marquee-track').forEach(function (track) {
        // duplicate content once so translateX(-50%) loops seamlessly
        $$('.mw', track).forEach(function (w) {
            var c = w.cloneNode(true);
            c.setAttribute('aria-hidden', 'true');
            track.appendChild(c);
        });
    });
    var marquees = $$('.marquee');

    /* ---------------- manifesto words ---------------- */
    var manifesto = $('#manifesto');
    var mWords = [];
    var i18n = window.NookabI18n;
    // numbers in website copy follow the page language (e.g. Bengali digits)
    var fmt = function (n) { return i18n ? i18n.num(n) : String(n); };

    // split the manifesto into words so they can light up on scroll;
    // re-run whenever the language changes (the translation replaces the text)
    function splitManifesto() {
        mWords = [];
        if (!manifesto || reduceMotion) return;
        var text = manifesto.textContent.replace(/\s+/g, ' ').trim();
        var hl = i18n ? i18n.t('manifesto.highlight') : 'yours';
        manifesto.textContent = '';
        text.split(' ').forEach(function (word, i, arr) {
            var span = document.createElement('span');
            span.className = 'w' + (word.indexOf(hl) === 0 ? ' hl' : '');
            span.textContent = word;
            manifesto.appendChild(span);
            if (i < arr.length - 1) manifesto.appendChild(document.createTextNode(' '));
            mWords.push(span);
        });
        manifesto.setAttribute('aria-label', text);
    }
    splitManifesto();

    /* ---------------- reveal + one-shot "in view" effects ---------------- */
    function countTo(el, to, from, dur, plain) {
        var show = function (n) { el.textContent = plain ? n : fmt(n); };
        if (reduceMotion) { show(to); return; }
        var start = null;
        function step(t) {
            if (!start) start = t;
            var p = clamp((t - start) / dur, 0, 1);
            var e = 1 - Math.pow(1 - p, 3);
            show(Math.round(from + (to - from) * e));
            if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    }

    $$('#bars i').forEach(function (b, i) { b.style.setProperty('--i', i); });

    var onceHandlers = {
        weekStrip: function () { countTo($('#streakNum'), 3, 0, 1200, true); }, // app UI mock: keep Latin digits
        goalRing: function (el) { el.style.setProperty('--p', 72); countTo($('#goalNum'), 18, 0, 1600, true); },
        airplane: function () { setTimeout(function () { setAir(true); }, 500); },
        keys: function (el) { pressKeys(el); }
    };

    if ('IntersectionObserver' in window) {
        var revealIO = new IntersectionObserver(function (entries) {
            entries.forEach(function (en) {
                if (!en.isIntersecting) return;
                var el = en.target;
                el.classList.add('is-in');
                var key = el.id || (el.classList.contains('keys') ? 'keys' : '');
                if (onceHandlers[key]) onceHandlers[key](el);
                if (el.hasAttribute('data-count')) {
                    var to = +el.getAttribute('data-count');
                    countTo(el, to, to === 0 ? 12 : 0, 1400);
                }
                revealIO.unobserve(el);
            });
        }, { rootMargin: '0px 0px -12% 0px', threshold: 0.05 });

        // stagger siblings in grids
        $$('.bento, .privacy-cards, .faq-list, .numbers-row, .articles-extra').forEach(function (g) {
            $$('[data-reveal]', g).forEach(function (el, i) { el.style.setProperty('--rd', (i % 4) * 0.08 + 's'); });
        });

        $$('[data-reveal], .flip-card, .week, .bars, #goalRing, #airplane, .keys, [data-count]').forEach(function (el) {
            revealIO.observe(el);
        });
    } else {
        doc.classList.remove('reveal-ready');
    }

    /* ---------------- flip cards ---------------- */
    $$('.flip-card').forEach(function (card) {
        card.addEventListener('click', function () {
            card.classList.toggle('is-flipped');
            card.setAttribute('aria-pressed', card.classList.contains('is-flipped'));
            stopCycle();
        });
    });

    /* ---------------- language switcher (German / English) ---------------- */
    var langSwitch = $('.lang-switch');
    var langTabs = $$('.lang-tab');
    var CYCLE_MS = 7000;
    var cycleTimer = null;
    var userPicked = false;

    function showLang(lang, focus) {
        langTabs.forEach(function (t) {
            var on = t.getAttribute('data-lang') === lang;
            t.classList.toggle('is-active', on);
            t.setAttribute('aria-selected', String(on));
            t.tabIndex = on ? 0 : -1;
            if (on && focus) t.focus();
            var panel = document.getElementById(t.getAttribute('aria-controls'));
            panel.hidden = !on;
            panel.classList.toggle('is-active', on);
            if (on) $$('.flip-card', panel).forEach(function (c) { c.classList.remove('is-flipped'); });
        });
        if (langSwitch && langSwitch.classList.contains('is-cycling')) {
            // restart the progress line
            langSwitch.classList.remove('is-cycling');
            void langSwitch.offsetWidth;
            langSwitch.classList.add('is-cycling');
        }
    }

    function stopCycle() {
        userPicked = true;
        clearInterval(cycleTimer);
        cycleTimer = null;
        if (langSwitch) langSwitch.classList.remove('is-cycling');
    }

    function startCycle() {
        if (reduceMotion || userPicked || cycleTimer || !langSwitch) return;
        langSwitch.style.setProperty('--cycle', CYCLE_MS + 'ms');
        langSwitch.classList.add('is-cycling');
        cycleTimer = setInterval(function () {
            var current = $('.lang-tab.is-active').getAttribute('data-lang');
            showLang(current === 'de' ? 'en' : 'de');
        }, CYCLE_MS);
    }

    function pauseCycle() {
        clearInterval(cycleTimer);
        cycleTimer = null;
        if (langSwitch) langSwitch.classList.remove('is-cycling');
    }

    langTabs.forEach(function (t, i) {
        t.addEventListener('click', function () { stopCycle(); showLang(t.getAttribute('data-lang')); });
        t.addEventListener('keydown', function (e) {
            if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
            e.preventDefault();
            stopCycle();
            var next = langTabs[(i + (e.key === 'ArrowRight' ? 1 : langTabs.length - 1)) % langTabs.length];
            showLang(next.getAttribute('data-lang'), true);
        });
    });

    // hero "Learn German / Learn English" pills preselect the language
    $$('[data-lang-link]').forEach(function (a) {
        a.addEventListener('click', function () { stopCycle(); showLang(a.getAttribute('data-lang-link')); });
    });

    var langSection = document.getElementById('languages');
    if (langSection && 'IntersectionObserver' in window) {
        new IntersectionObserver(function (entries) {
            entries.forEach(function (en) { if (en.isIntersecting) startCycle(); else pauseCycle(); });
        }, { threshold: 0.35 }).observe(langSection);
        langSection.addEventListener('pointerenter', pauseCycle);
        langSection.addEventListener('pointerleave', function () { if (!userPicked) startCycle(); });
    }

    /* ---------------- pronunciation tile: alternate German / English words ---------------- */
    var ttsWord = $('#ttsWord');
    if (ttsWord && !reduceMotion) {
        var ttsWords = ['Ausstellung', 'thoroughly', 'Bahnhof', 'serendipity', 'übrigens', 'although'];
        var ttsI = 0;
        setInterval(function () {
            ttsI = (ttsI + 1) % ttsWords.length;
            ttsWord.style.opacity = 0;
            setTimeout(function () { ttsWord.textContent = ttsWords[ttsI]; ttsWord.style.opacity = 1; }, 250);
        }, 2600);
    }

    /* ---------------- keys auto-press ---------------- */
    function pressKeys(wrap) {
        if (reduceMotion) return;
        var keys = $$('kbd', wrap);
        var i = 0;
        setInterval(function () {
            var k = keys[i % keys.length];
            k.classList.add('is-pressed');
            setTimeout(function () { k.classList.remove('is-pressed'); }, 220);
            i++;
        }, 900);
    }

    /* ---------------- spotlight tiles ---------------- */
    if (finePointer) {
        $$('.tile').forEach(function (t) {
            t.addEventListener('pointermove', function (e) {
                var r = t.getBoundingClientRect();
                t.style.setProperty('--mx', (e.clientX - r.left) + 'px');
                t.style.setProperty('--my', (e.clientY - r.top) + 'px');
            });
        });
    }

    /* ---------------- how it works (sticky phone) ---------------- */
    var steps = $$('.how-step');
    var screens = $$('.screen-stack img');
    var dots = $$('.how-dots li');
    function setStep(n) {
        steps.forEach(function (s, i) { s.classList.toggle('is-active', i === n); });
        screens.forEach(function (s, i) { s.classList.toggle('is-active', i === n); });
        dots.forEach(function (d, i) { d.classList.toggle('is-active', i === n); });
    }
    // stacked screens are lazy; start loading all of them as the section approaches
    var howSection = document.getElementById('how');
    if (howSection && 'IntersectionObserver' in window) {
        var preloadIO = new IntersectionObserver(function (entries) {
            if (!entries[0].isIntersecting) return;
            screens.forEach(function (img) { img.loading = 'eager'; });
            preloadIO.disconnect();
        }, { rootMargin: '1200px 0px' });
        preloadIO.observe(howSection);
    }
    if ('IntersectionObserver' in window && steps.length) {
        var stepIO = new IntersectionObserver(function (entries) {
            entries.forEach(function (en) {
                if (en.isIntersecting) setStep(+en.target.getAttribute('data-step'));
            });
        }, { rootMargin: '-48% 0px -48% 0px' });
        steps.forEach(function (s) { stepIO.observe(s); });
    }

    /* ---------------- airplane demo ---------------- */
    var air = $('#airplane');
    var airSwitch = $('#airSwitch');
    function setAir(on) {
        if (!air) return;
        air.classList.toggle('is-on', on);
        airSwitch.setAttribute('aria-checked', String(on));
    }
    if (airSwitch) {
        airSwitch.addEventListener('click', function () {
            setAir(airSwitch.getAttribute('aria-checked') !== 'true');
        });
    }

    /* ---------------- film ---------------- */
    // The YouTube player is only loaded when someone presses play (nothing is
    // requested from YouTube before that). youtube-nocookie = privacy-enhanced mode.
    var YT_ID = 'iPCEq-z2nJI';
    function ytIframe() {
        var f = document.createElement('iframe');
        f.src = 'https://www.youtube-nocookie.com/embed/' + YT_ID + '?autoplay=1&rel=0&modestbranding=1&playsinline=1';
        f.title = 'Nookab — promo film';
        f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
        f.allowFullscreen = true;
        f.referrerPolicy = 'strict-origin-when-cross-origin';
        return f;
    }

    var filmFrame = $('#filmFrame');
    var filmPlay = $('#filmPlay');
    if (filmPlay && filmFrame) {
        filmPlay.addEventListener('click', function () {
            if (!$('iframe', filmFrame)) filmFrame.appendChild(ytIframe());
            filmFrame.classList.add('is-playing');
        });
    }

    var modal = $('#filmModal');
    var modalPlayer = $('#modalPlayer');
    var lastFocus = null;
    function openFilm() {
        if (!modal) return;
        lastFocus = document.activeElement;
        modal.hidden = false;
        if (lenis) lenis.stop();
        $('.modal-close', modal).focus();
        modalPlayer.appendChild(ytIframe());
    }
    function closeFilm() {
        if (!modal || modal.hidden) return;
        modalPlayer.textContent = ''; // removing the iframe stops playback
        modal.hidden = true;
        if (lenis) lenis.start();
        if (lastFocus) lastFocus.focus();
    }
    $$('[data-open-film]').forEach(function (b) { b.addEventListener('click', openFilm); });
    $$('[data-close-film]').forEach(function (b) { b.addEventListener('click', closeFilm); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeFilm(); });

    /* ---------------- scroll-driven effects ---------------- */
    var progressBar = $('.scroll-progress');
    var meter = $('#masteryMeter');
    var meterValue = $('#meterValue');
    var tiers = $$('.tier');
    var parallaxEls = $$('[data-speed]');
    var heroCopy = $('.hero-copy');
    var lastY = window.scrollY;
    var velocity = 0;
    var ticking = false;

    function progressOf(el, startFrac, endFrac) {
        // 0 when el top hits startFrac of viewport, 1 when el top hits endFrac
        var r = el.getBoundingClientRect();
        var vh = window.innerHeight;
        return clamp((vh * startFrac - r.top) / (vh * (startFrac - endFrac)), 0, 1);
    }

    function onScroll() {
        ticking = false;
        var y = window.scrollY;
        var vh = window.innerHeight;
        var max = document.documentElement.scrollHeight - vh;

        if (progressBar) progressBar.style.setProperty('--sp', max > 0 ? (y / max).toFixed(4) : 0);

        // nav state
        if (nav) {
            nav.classList.toggle('is-scrolled', y > 30);
            var menuOpen = navLinks && navLinks.classList.contains('is-open');
            nav.classList.toggle('is-hidden', !menuOpen && y > 600 && y > lastY + 2);
            if (y < lastY - 2) nav.classList.remove('is-hidden');
        }

        if (!reduceMotion) {
            // marquee skew from scroll velocity
            velocity += ((y - lastY) - velocity) * 0.2;
            var skew = clamp(velocity * -0.15, -8, 8).toFixed(2) + 'deg';
            marquees.forEach(function (m) { m.style.setProperty('--skew', skew); });

            // parallax
            parallaxEls.forEach(function (el) {
                var r = el.getBoundingClientRect();
                if (r.bottom < -200 || r.top > vh + 200) return;
                var speed = +el.getAttribute('data-speed');
                var offset = (r.top + r.height / 2 - vh / 2) * speed * -0.35;
                el.style.translate = '0 ' + offset.toFixed(1) + 'px';
            });

            // hero: stage drifts up and copy fades as you scroll away
            if (y < vh * 1.2) {
                var h = y / vh;
                if (stage) stage.style.transform = 'translateY(' + (h * -80).toFixed(1) + 'px) rotateZ(' + (h * -4).toFixed(2) + 'deg)';
                if (heroCopy) {
                    heroCopy.style.opacity = (1 - h * 0.9).toFixed(3);
                    heroCopy.style.transform = 'translateY(' + (h * 60).toFixed(1) + 'px)';
                }
            }

            // manifesto word highlight
            if (mWords.length) {
                var mp = progressOf(manifesto, 0.85, 0.25);
                var lit = mp * (mWords.length + 4);
                mWords.forEach(function (w, i) {
                    w.style.setProperty('--o', clamp(lit - i, 0.14, 1).toFixed(2));
                });
            }

            // film frame grows into place
            if (filmFrame && !hasGsap) {
                var fp = progressOf(filmFrame, 1, 0.3);
                filmFrame.style.transform = 'scale(' + (0.86 + fp * 0.14).toFixed(4) + ')';
            }
        }

        // mastery meter scrubs 0 -> 96 with scroll
        if (meter) {
            var p = reduceMotion ? 96 : Math.round(progressOf(meter, 0.9, 0.3) * 96);
            meter.style.setProperty('--p', p);
            meterValue.textContent = fmt(p);
            var tierIdx = p > 90 ? 2 : p > 40 ? 1 : 0;
            tiers.forEach(function (t, i) { t.classList.toggle('is-current', i === tierIdx); });
        }

        lastY = y;
    }

    function requestTick() {
        if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
    }
    window.addEventListener('scroll', requestTick, { passive: true });
    window.addEventListener('resize', requestTick);
    onScroll();

    // let the skew settle back to 0 when scrolling stops
    if (!reduceMotion) {
        setInterval(function () {
            if (Math.abs(velocity) > 0.05) { velocity *= 0.6; requestTick(); }
        }, 100);
    }

    /* ---------------- GSAP: pinned horizontal practice + film ---------------- */
    if (hasGsap && !reduceMotion) {
        var gsap = window.gsap;
        gsap.registerPlugin(window.ScrollTrigger);
        var mm = gsap.matchMedia();

        mm.add('(min-width: 961px)', function () {
            var pin = $('.practice-pin');
            var track = $('#practiceTrack');
            if (!pin || !track) return;
            pin.classList.add('is-pinned');
            var dist = function () { return track.scrollWidth - window.innerWidth; };

            var tween = gsap.to(track, {
                x: function () { return -dist(); },
                ease: 'none',
                scrollTrigger: {
                    trigger: pin,
                    pin: true,
                    scrub: 0.8,
                    start: 'top top',
                    end: function () { return '+=' + dist(); },
                    invalidateOnRefresh: true
                }
            });

            // phones turn to face you as their panel slides in
            $$('.mode-panel', track).forEach(function (panel) {
                var phone = $('.phone-mode', panel);
                gsap.fromTo(phone,
                    { rotateY: -42, rotateX: 10, y: 60 },
                    {
                        rotateY: -10, rotateX: 4, y: 0, ease: 'none',
                        scrollTrigger: { trigger: panel, containerAnimation: tween, start: 'left right', end: 'center center', scrub: true }
                    });
                gsap.from($('.mode-copy', panel), {
                    opacity: 0, x: 80, ease: 'none',
                    scrollTrigger: { trigger: panel, containerAnimation: tween, start: 'left 85%', end: 'left 35%', scrub: true }
                });
            });

            return function () { pin.classList.remove('is-pinned'); };
        });

        if (filmFrame) {
            gsap.fromTo(filmFrame, { scale: 0.84, rotateX: 14, transformPerspective: 1400 }, {
                scale: 1, rotateX: 0, ease: 'none',
                scrollTrigger: { trigger: filmFrame, start: 'top bottom', end: 'top 25%', scrub: true }
            });
        }

        // CTA phones rise in
        gsap.from('.cta-phone .phone-body', {
            y: 160, opacity: 0, stagger: 0.12, duration: 1.4, ease: 'expo.out',
            scrollTrigger: { trigger: '.cta-card', start: 'top 70%' }
        });

        // refresh after fonts/images settle
        window.addEventListener('load', function () { window.ScrollTrigger.refresh(); });
    }

    /* ---------------- language changes (js/i18n.js) ---------------- */
    function formatCounts() {
        $$('[data-count]').forEach(function (el) { el.textContent = fmt(+el.getAttribute('data-count')); });
    }
    formatCounts();
    document.addEventListener('nookab:lang', function () {
        splitManifesto();
        formatCounts();
        requestTick();
        if (hasGsap) window.ScrollTrigger.refresh();
    });
})();
