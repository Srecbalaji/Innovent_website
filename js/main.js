/**
 * Innovent Creations — Site JavaScript
 * Handles: Navigation, Reveal animations, Portfolio filters, Contact form, Tilt cards
 */

(function () {
  "use strict";

  /* ──────────────────────────────────────
     PAGE LOADER (Seamless Page-Specific Loader)
  ────────────────────────────────────── */
  var PAGE_LOADER_DATA = {
    home: {
      key: "home",
      brand: 'Innovent<span class="page-loader__dot">.</span>',
      title: "Digital Innovation & Creative Studio",
      tagline: "Engineering Next-Gen Digital Products",
      status: "✦ Initializing Digital Experience",
      isLogo: true
    },
    services: {
      key: "services",
      brand: 'Services & Architecture<span class="page-loader__dot">.</span>',
      title: "Full-Spectrum Digital Solutions",
      tagline: "Web Apps · Custom AI · Cloud Platforms · APIs",
      status: "⚡ Architecting Scalable Solutions",
      svg: '<svg class="page-loader__svg-icon" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 3L31 10.5V25.5L18 33L5 25.5V10.5L18 3Z" stroke="#00E5FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 18L31 10.5M18 18V33M18 18L5 10.5" stroke="#8A2BE2" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="18" cy="18" r="3.5" fill="#00E5FF"/></svg>'
    },
    portfolio: {
      key: "portfolio",
      brand: 'Portfolio & Showcase<span class="page-loader__dot">.</span>',
      title: "Selected Works & Case Studies",
      tagline: "Interactive Platforms · Digital Flagships · Creative Work",
      status: "✦ Curating Project Gallery",
      svg: '<svg class="page-loader__svg-icon" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 2L21.5 14.5L34 18L21.5 21.5L18 34L14.5 21.5L2 18L14.5 14.5L18 2Z" stroke="#FF6B35" stroke-width="2" stroke-linejoin="round" fill="rgba(255, 107, 53, 0.15)"/><circle cx="18" cy="18" r="3" fill="#F72585"/><circle cx="28" cy="8" r="1.5" fill="#FF6B35"/><circle cx="8" cy="28" r="1.5" fill="#F72585"/></svg>'
    },
    about: {
      key: "about",
      brand: 'About Innovent<span class="page-loader__dot">.</span>',
      title: "Our Story, Team & Vision",
      tagline: "Visionary Team · Engineering Mastery · Creative Core",
      status: "◈ Loading Our Story & Culture",
      svg: '<svg class="page-loader__svg-icon" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="18" cy="18" rx="14" ry="6" transform="rotate(-30 18 18)" stroke="#10B981" stroke-width="1.8" stroke-linecap="round"/><ellipse cx="18" cy="18" rx="14" ry="6" transform="rotate(30 18 18)" stroke="#21D4C2" stroke-width="1.8" stroke-linecap="round"/><circle cx="18" cy="18" r="4.5" fill="#21D4C2" stroke="#10B981" stroke-width="1.5"/></svg>'
    },
    contact: {
      key: "contact",
      brand: 'Connect & Collaborate<span class="page-loader__dot">.</span>',
      title: "Let’s Build Something Exceptional",
      tagline: "Free Discovery Call · Custom Quotes · Fast Turnaround",
      status: "✉ Establishing Direct Connection",
      svg: '<svg class="page-loader__svg-icon" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 18C4 18 10 16 14 20C18 24 22 32 22 32L32 4L4 18Z" stroke="#FFB703" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="rgba(255, 183, 3, 0.12)"/><path d="M32 4L14 20" stroke="#FF6B35" stroke-width="2" stroke-linecap="round"/><circle cx="32" cy="4" r="2.5" fill="#FFB703"/></svg>'
    },
    privacy: {
      key: "privacy",
      brand: 'Privacy & Trust<span class="page-loader__dot">.</span>',
      title: "Security & Data Governance",
      tagline: "Data Integrity · Privacy Governance · Client Confidentiality",
      status: "🛡 Verifying Security Protocols",
      svg: '<svg class="page-loader__svg-icon" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 3L30 8V17C30 24.5 24.8 30.5 18 33C11.2 30.5 6 24.5 6 17V8L18 3Z" stroke="#38BDF8" stroke-width="2" stroke-linejoin="round" fill="rgba(56, 189, 248, 0.12)"/><path d="M13 18L16.5 21.5L23 15" stroke="#6366F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    },
    terms: {
      key: "terms",
      brand: 'Terms of Service<span class="page-loader__dot">.</span>',
      title: "Agreement & Legal Framework",
      tagline: "Clear Terms · Project Scope · Mutual Transparency",
      status: "⚖ Loading Service Governance",
      svg: '<svg class="page-loader__svg-icon" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 3L30 8V17C30 24.5 24.8 30.5 18 33C11.2 30.5 6 24.5 6 17V8L18 3Z" stroke="#38BDF8" stroke-width="2" stroke-linejoin="round" fill="rgba(56, 189, 248, 0.12)"/><path d="M13 18L16.5 21.5L23 15" stroke="#6366F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    }
  };

  function detectPageKey(path) {
    if (!path) return "home";
    var clean = path.split("?")[0].split("#")[0].toLowerCase();
    if (clean.indexOf("services") !== -1) return "services";
    if (clean.indexOf("portfolio") !== -1) return "portfolio";
    if (clean.indexOf("about") !== -1) return "about";
    if (clean.indexOf("contact") !== -1) return "contact";
    if (clean.indexOf("privacy") !== -1) return "privacy";
    if (clean.indexOf("terms") !== -1) return "terms";
    return "home";
  }

  function updateLoaderForPage(loader, pageKey) {
    var data = PAGE_LOADER_DATA[pageKey] || PAGE_LOADER_DATA.home;
    loader.setAttribute("data-page", data.key);
    var isSubfolder = window.location.pathname.indexOf("/pages/") !== -1;
    var logoPath = isSubfolder ? "../assets/logo.jpeg" : "./assets/logo.jpeg";

    var iconBox = loader.querySelector(".page-loader__icon-box");
    if (iconBox) {
      if (data.isLogo) {
        iconBox.innerHTML =
          '<img src="' + logoPath + '" alt="Innovent" class="page-loader__logo" />' +
          '<span class="page-loader__ring"></span>' +
          '<span class="page-loader__ring-pulse"></span>';
      } else {
        iconBox.innerHTML =
          data.svg +
          '<span class="page-loader__ring"></span>' +
          '<span class="page-loader__ring-pulse"></span>';
      }
    }

    var brandEl = loader.querySelector(".page-loader__brand");
    if (brandEl) brandEl.innerHTML = data.brand;

    var titleEl = loader.querySelector(".page-loader__title");
    if (titleEl) titleEl.textContent = data.title;

    var tagEl = loader.querySelector(".page-loader__tagline");
    if (tagEl) tagEl.textContent = data.tagline;

    var statusTextEl = loader.querySelector(".page-loader__status-text");
    if (statusTextEl) statusTextEl.textContent = data.status;
  }

  function initPageLoader() {
    var loader = document.getElementById("page-loader");
    if (!loader) return;

    var topBar = loader.querySelector(".page-loader__bar");
    if (topBar) topBar.style.width = "40%";

    function dismissLoader() {
      if (!loader || loader.classList.contains("loaded")) return;
      if (topBar) topBar.style.width = "100%";
      setTimeout(function () {
        loader.classList.add("loaded");
        loader.classList.remove("entering");
      }, 140);
    }

    // Dismiss as soon as DOM or window is ready
    if (document.readyState === "complete" || document.readyState === "interactive") {
      setTimeout(dismissLoader, 160);
    } else {
      document.addEventListener("DOMContentLoaded", function () {
        setTimeout(dismissLoader, 160);
      });
      window.addEventListener("load", function () {
        setTimeout(dismissLoader, 160);
      });
    }

    // Safety fallback
    setTimeout(dismissLoader, 350);

    // Bfcache restoration
    window.addEventListener("pageshow", function (event) {
      if (event.persisted) {
        dismissLoader();
      }
    });

    // Seamless navigation transition for internal page links
    document.addEventListener("click", function (e) {
      var link = e.target.closest("a");
      if (!link) return;
      var href = link.getAttribute("href");
      if (!href) return;

      if (
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("javascript:") ||
        link.target === "_blank" ||
        e.ctrlKey || e.metaKey || e.shiftKey
      ) {
        return;
      }

      var isExternal = href.startsWith("http://") || href.startsWith("https://");
      if (isExternal && href.indexOf(window.location.host) === -1) {
        return;
      }

      // Intercept navigation
      e.preventDefault();

      var targetKey = detectPageKey(href);
      updateLoaderForPage(loader, targetKey);

      if (topBar) {
        topBar.style.transition = "width 160ms cubic-bezier(0.16, 1, 0.3, 1)";
        topBar.style.width = "75%";
      }
      loader.classList.remove("loaded");
      loader.classList.add("entering");

      setTimeout(function () {
        window.location.href = href;
      }, 150);
    });
  }

  /* ──────────────────────────────────────
     INIT
  ────────────────────────────────────── */
  initPageLoader();

  document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("js-ready");
    initNav();
    initReveal();
    initPortfolioFilters();
    initContactForm();
    initActiveNav();
    initTiltCards();
    initMarquee();
    setYear();
  });

  /* ──────────────────────────────────────
     YEAR
  ────────────────────────────────────── */
  function setYear() {
    var els = document.querySelectorAll(".js-year");
    var y = new Date().getFullYear();
    els.forEach(function (el) { el.textContent = y; });
  }

  /* ──────────────────────────────────────
     NAVIGATION
  ────────────────────────────────────── */
  function initNav() {
    var nav = document.querySelector(".nav");
    var hamburger = document.querySelector(".nav__hamburger");
    var mobileMenu = document.querySelector(".nav__mobile");
    var mobileLinks = document.querySelectorAll(".nav__mobile-link");

    if (!nav) return;

    // Scroll effect
    function onScroll() {
      if (window.scrollY > 20) {
        nav.classList.add("nav--scrolled");
      } else {
        nav.classList.remove("nav--scrolled");
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Hamburger toggle
    if (hamburger && mobileMenu) {
      hamburger.addEventListener("click", function () {
        var isOpen = hamburger.classList.toggle("open");
        mobileMenu.classList.toggle("open", isOpen);
        hamburger.setAttribute("aria-expanded", String(isOpen));
        document.body.style.overflow = isOpen ? "hidden" : "";
      });

      // Close on link click
      mobileLinks.forEach(function (link) {
        link.addEventListener("click", function () {
          closeMenu();
        });
      });

      // Close on outside click
      document.addEventListener("click", function (e) {
        if (mobileMenu.classList.contains("open") &&
            !nav.contains(e.target) && !mobileMenu.contains(e.target)) {
          closeMenu();
        }
      });

      // Escape key
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && mobileMenu.classList.contains("open")) {
          closeMenu();
        }
      });

      function closeMenu() {
        hamburger.classList.remove("open");
        mobileMenu.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
        hamburger.focus();
      }
    }
  }

  /* ──────────────────────────────────────
     ACTIVE NAV LINK
  ────────────────────────────────────── */
  function initActiveNav() {
    var rawPage = window.location.pathname.split("/").pop() || "index.html";
    var currentPage = rawPage.split(/[?#]/)[0] || "index.html";
    if (currentPage === "" || currentPage === "innovent-site") currentPage = "index.html";

    var navLinks = document.querySelectorAll(".nav__link");
    var mobileLinks = document.querySelectorAll(".nav__mobile-link");

    function setupLinks(links) {
      links.forEach(function (link) {
        var href = link.getAttribute("href") || "";
        var hrefPage = href.split("/").pop().split(/[?#]/)[0];

        if (
          hrefPage === currentPage ||
          (currentPage === "" && hrefPage === "index.html") ||
          (currentPage === "index.html" && hrefPage === "index.html")
        ) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }

        link.addEventListener("click", function () {
          links.forEach(function (l) { l.classList.remove("active"); });
          link.classList.add("active");
        });
      });
    }

    setupLinks(navLinks);
    setupLinks(mobileLinks);
  }

  /* ──────────────────────────────────────
     REVEAL ON SCROLL
  ────────────────────────────────────── */
  function initReveal() {
    var reveals = document.querySelectorAll(".reveal");
    if (!reveals.length) return;

    if (!("IntersectionObserver" in window)) {
      // Fallback: show all immediately
      reveals.forEach(function (el) { el.classList.add("visible"); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -30px 0px" });

    reveals.forEach(function (el) { observer.observe(el); });
  }

  /* ──────────────────────────────────────
     MARQUEE DUPLICATION
  ────────────────────────────────────── */
  function initMarquee() {
    var tracks = document.querySelectorAll(".marquee__track");
    tracks.forEach(function (track) {
      track.innerHTML += track.innerHTML;
    });
  }

  /* ──────────────────────────────────────
     TILT CARDS (service + hero visual)
  ────────────────────────────────────── */
  function initTiltCards() {
    // Only on non-touch devices
    if (window.matchMedia("(hover: none)").matches) return;

    var cards = document.querySelectorAll(".service-card, .portfolio-card, .value-card");
    cards.forEach(function (card) {
      card.addEventListener("mousemove", function (e) {
        var rect = card.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var cx = rect.width / 2;
        var cy = rect.height / 2;
        var rotX = ((y - cy) / cy) * -5;
        var rotY = ((x - cx) / cx) * 5;
        card.style.transform =
          "perspective(800px) rotateX(" + rotX + "deg) rotateY(" + rotY + "deg) translateY(-4px)";
      });

      card.addEventListener("mouseleave", function () {
        card.style.transform = "";
      });
    });
  }

  /* ──────────────────────────────────────
     PORTFOLIO FILTERS
  ────────────────────────────────────── */
  function initPortfolioFilters() {
    var tabs = document.querySelectorAll(".filter-tab");
    var cards = document.querySelectorAll(".portfolio-card");
    var countEl = document.querySelector(".portfolio-count span");
    var emptyEl = document.getElementById("portfolio-empty");

    if (!tabs.length || !cards.length) return;

    // Set initial count
    if (countEl) countEl.textContent = cards.length;

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        var filter = tab.dataset.filter;

        // Update active tab
        tabs.forEach(function (t) {
          t.classList.remove("active");
          t.setAttribute("aria-selected", "false");
        });
        tab.classList.add("active");
        tab.setAttribute("aria-selected", "true");

        // Filter cards
        var visible = 0;
        cards.forEach(function (card) {
          var match = filter === "all" || card.dataset.category === filter;
          if (match) {
            card.style.display = "";
            visible++;
          } else {
            card.style.display = "none";
          }
        });

        // Update count
        if (countEl) countEl.textContent = visible;

        // Empty state
        if (emptyEl) {
          emptyEl.style.display = visible === 0 ? "block" : "none";
        }
      });
    });
  }

  /* ──────────────────────────────────────
     CONTACT FORM
  ────────────────────────────────────── */
  function initContactForm() {
    var form = document.getElementById("contact-form");
    if (!form) return;

    var requiredFields = form.querySelectorAll("[required]");
    var successMsg = document.getElementById("form-success");
    var submitBtn = form.querySelector('[type="submit"]');
    var btnText = submitBtn ? submitBtn.querySelector(".btn-text") : null;

    // Real-time validation on blur / input
    requiredFields.forEach(function (field) {
      field.addEventListener("blur", function () { validateField(field); });
      field.addEventListener("input", function () {
        if (field.classList.contains("error")) validateField(field);
      });
    });

    var phoneInput = form.querySelector("#phone");
    if (phoneInput) {
      phoneInput.addEventListener("blur", function () { validateField(phoneInput); });
      phoneInput.addEventListener("input", function () {
        if (phoneInput.classList.contains("error")) validateField(phoneInput);
      });
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var allValid = true;
      requiredFields.forEach(function (field) {
        if (!validateField(field)) allValid = false;
      });
      if (phoneInput && !validateField(phoneInput)) allValid = false;
      if (!allValid) return;

      // Loading state
      if (submitBtn) submitBtn.disabled = true;
      if (btnText) btnText.textContent = "Sending…";

      // If running directly from disk (file://), use native form submit to bypass browser CORS restrictions
      if (window.location.protocol === "file:") {
        form.submit();
        return;
      }

      var formData = new FormData(form);
      var payload = Object.fromEntries(formData.entries());
      payload._subject = "New Project Enquiry: " + (payload.service || "General") + " from " + (payload.name || "Client");
      payload._template = "table";

      fetch("https://formsubmit.co/ajax/innoventcreations@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      })
      .then(function (response) {
        return response.json().then(function (data) {
          if (response.ok && data.success !== "false" && data.success !== false) {
            showSuccess();
          } else {
            throw new Error(data.message || "Failed to submit enquiry.");
          }
        });
      })
      .catch(function (error) {
        console.error("Enquiry submission error:", error);
        var msg = error.message || "";
        if (msg.toLowerCase().includes("activation") || msg.toLowerCase().includes("activate")) {
          alert("Action Required:\n\nFormSubmit has sent a one-time activation email to innoventcreations@gmail.com.\n\nPlease open your Gmail inbox (check Spam if needed) and click 'Activate Form'. After that, submissions will send automatically!");
        } else if (window.location.protocol === "file:") {
          var confirmed = confirm("Local Browser Notice:\nYou are viewing this file directly from your disk (file://), which blocks background web submissions.\n\nClick OK to open your email client and send this enquiry to innoventcreations@gmail.com directly.");
          if (confirmed) {
            sendViaMailto(payload);
          }
        } else {
          var confirmed = confirm("Could not send automatically (" + msg + ").\n\nClick OK to send via your email client directly to innoventcreations@gmail.com.");
          if (confirmed) {
            sendViaMailto(payload);
          }
        }
      })
      .finally(function () {
        if (submitBtn) submitBtn.disabled = false;
        if (btnText) btnText.textContent = "Send Project Enquiry";
      });
    });

    function sendViaMailto(payload) {
      var subject = encodeURIComponent("Project Enquiry: " + (payload.service || "General") + " - " + (payload.name || ""));
      var body = encodeURIComponent(
        "Name: " + (payload.name || "") + "\n" +
        "Email: " + (payload.email || "") + "\n" +
        "Phone: " + (payload.phone || "N/A") + "\n" +
        "Company: " + (payload.company || "N/A") + "\n" +
        "Service: " + (payload.service || "N/A") + "\n" +
        "Budget: " + (payload.budget || "N/A") + "\n" +
        "Timeline: " + (payload.timeline || "N/A") + "\n\n" +
        "Project Description:\n" + (payload.description || "")
      );
      window.location.href = "mailto:innoventcreations@gmail.com?subject=" + subject + "&body=" + body;
    }

    function showSuccess() {
      form.style.display = "none";
      if (successMsg) {
        successMsg.classList.add("visible");
        successMsg.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }

    function validateField(field) {
      var errorEl = document.getElementById(field.id + "-error");
      var value = field.value.trim();
      var ok = true;
      var msg = "";

      if (field.hasAttribute("required") && !value) {
        ok = false;
        msg = "This field is required.";
      } else if (field.type === "email" && value &&
                 !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        ok = false;
        msg = "Please enter a valid email address.";
      } else if (field.type === "tel" && value &&
                 !/^[0-9+\-\s()]{7,18}$/.test(value)) {
        ok = false;
        msg = "Please enter a valid phone number.";
      }

      field.classList.toggle("error", !ok);
      if (errorEl) {
        errorEl.textContent = msg;
        errorEl.classList.toggle("visible", !ok);
      }
      return ok;
    }
  }

  /* ──────────────────────────────────────
     SMOOTH ANCHOR SCROLL
  ────────────────────────────────────── */
  document.addEventListener("click", function (e) {
    var link = e.target.closest("a[href^='#']");
    if (!link) return;
    var id = link.getAttribute("href");
    if (id === "#") return;
    var target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    var top = target.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top: top, behavior: "smooth" });
  });

  /* ──────────────────────────────────────
     END
  ────────────────────────────────────── */

})();
