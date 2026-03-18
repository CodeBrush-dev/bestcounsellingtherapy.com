// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.bestcounsellingtherapy.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.bestcounsellingtherapy.com/","title_tag":"Evesham counselling & online psychotherapy | Gina Lee","meta_description":"Affordable counselling in Evesham and across the UK online. Professional therapist offering CBT, anxiety and depression counselling, and relationship support."},{"page_url":"https://www.bestcounsellingtherapy.com/aboutmeginalee","title_tag":"Professional therapist Evesham & online help | Gina Lee","meta_description":"Experienced professional therapist in Evesham offering online psychotherapy and counselling UK-wide for anxiety, depression, trauma and relationship issues."},{"page_url":"https://www.bestcounsellingtherapy.com/fees-terms","title_tag":"Affordable counselling fees online & Evesham | Gina Lee","meta_description":"Affordable counselling with clear fees and terms. In-person sessions in Evesham and online psychotherapy across the UK with an experienced accredited therapist."},{"page_url":"https://www.bestcounsellingtherapy.com/information-security-ethics","title_tag":"Online psychotherapy ethics & privacy | Gina Lee","meta_description":"Learn how your data is protected in online psychotherapy and counselling. Confidential, ethical practice from an accredited professional therapist in Evesham."},{"page_url":"https://www.bestcounsellingtherapy.com/need-help-with","title_tag":"Do I need counselling? Affordable help | Gina Lee","meta_description":"Wondering if you need counselling? Get affordable counselling and online psychotherapy to manage anxiety, low self-esteem, stress and relationship problems."},{"page_url":"https://www.bestcounsellingtherapy.com/depression","title_tag":"Depression counselling & anxiety therapy Evesham | Gina","meta_description":"Depression counselling and anxiety therapy in Evesham and online. CBT-based support to manage low mood, worry and panic with a professional accredited therapist."},{"page_url":"https://www.bestcounsellingtherapy.com/relationships","title_tag":"Relationship counselling Evesham & online | Gina Lee","meta_description":"Relationship counselling in Evesham and online for couples and individuals. Work on communication, conflict, intimacy, affairs and separation with support."},{"page_url":"https://www.bestcounsellingtherapy.com/anxiety","title_tag":"Social & anxiety therapy Evesham & online | Gina Lee","meta_description":"Social anxiety and anxiety therapy in Evesham and online. CBT-informed counselling to manage panic, fear of judgement, low self-worth and avoidance behaviours."},{"page_url":"https://www.bestcounsellingtherapy.com/bereavement","title_tag":"Trauma & bereavement counselling Evesham | Gina Lee","meta_description":"Counselling for bereavement, loss and trauma in Evesham and online. Compassionate support to process grief, life changes and emotional pain safely."}],"keywords":["Evesham counselling","online psychotherapy","affordable counselling","anxiety therapy Evesham","depression counselling","relationship counselling Evesham","trauma therapy","CBT therapy Evesham","self-esteem counselling","professional therapist Evesham"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.bestcounsellingtherapy.com/#professionalservice",
  "url": "https://www.bestcounsellingtherapy.com/",
  "name": "Gina Lee Counselling & Psychotherapy",
  "description": "Affordable face-to-face and online counselling and psychotherapy with professionally qualified psychotherapist and counsellor Gina Lee MBACP (Accredited), based in Evesham, Worcestershire and working online across the UK.",
  "image": [
    "https://static.wixstatic.com/media/11062b_f0d5e0c342cc49dca298de0225d2247cf000.jpg/v1/fill/w_288,h_162,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/11062b_f0d5e0c342cc49dca298de0225d2247cf000.jpg",
    "https://static.wixstatic.com/media/61bdcd_13853f7f71174468a8df53d28cc943d7.jpg/v1/fill/w_147,h_98,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/61bdcd_13853f7f71174468a8df53d28cc943d7.jpg",
    "https://static.wixstatic.com/media/61bdcd_ffb72707c0a94b769883e85565e4d672.jpg/v1/fill/w_147,h_110,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/61bdcd_ffb72707c0a94b769883e85565e4d672.jpg",
    "https://static.wixstatic.com/media/61bdcd_7acce83f81c54a558babfb2ef0b5543a.jpg/v1/fill/w_100,h_75,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/61bdcd_7acce83f81c54a558babfb2ef0b5543a.jpg",
    "https://static.wixstatic.com/media/61bdcd_009513ea14074c958c3470c8f74f274d.jpg/v1/fill/w_194,h_84,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/61bdcd_009513ea14074c958c3470c8f74f274d.jpg",
    "https://static.wixstatic.com/media/61bdcd_ac10af08253b44d69ca78f63ab2ebf91.jpg/v1/fill/w_185,h_84,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/61bdcd_ac10af08253b44d69ca78f63ab2ebf91.jpg",
    "https://static.wixstatic.com/media/61bdcd_62d18448d1c24936b715f4c604e2fab3.png/v1/fill/w_185,h_84,al_c,q_85,enc_avif,quality_auto/61bdcd_62d18448d1c24936b715f4c604e2fab3.png",
    "https://static.wixstatic.com/media/61bdcd_c79d34e688c74404808e713ca03f2015~mv2.jpg/v1/fill/w_260,h_371,al_c,lg_1,q_80,enc_avif,quality_auto/2025-08-28.jpg",
    "https://static.wixstatic.com/media/b1cd13f9d4dfb1450bbb325285106177.png/v1/fill/w_30,h_30,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/b1cd13f9d4dfb1450bbb325285106177.png",
    "https://static.wixstatic.com/media/61bdcd_ff1bfa1602cb4a20a33205ab68ec427c.png/v1/fill/w_30,h_30,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/61bdcd_ff1bfa1602cb4a20a33205ab68ec427c.png",
    "https://static.wixstatic.com/media/01113281ebb7dfb57a8dc2a02eb1cb92.png/v1/fill/w_30,h_30,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/01113281ebb7dfb57a8dc2a02eb1cb92.png",
    "https://static.wixstatic.com/media/61bdcd_052fb95e80ab44c4bd51af5c3b788840.jpg/v1/fill/w_2500,h_1875,al_c/61bdcd_052fb95e80ab44c4bd51af5c3b788840.jpg"
  ],
  "telephone": "+44-7947-300-015",
  "email": "mailto:ginaleetherapist@gmail.com",
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Evesham, Worcestershire"
    },
    {
      "@type": "Country",
      "name": "United Kingdom"
    }
  ],
  "priceRange": "£50 - £60",
  "foundingDate": "2014",
  "founder": {
    "@type": "Person",
    "name": "Gina Lee",
    "jobTitle": "Psychotherapist & Counsellor",
    "description": "Gina Lee MBACP (Accredited) is a professionally qualified psychotherapist and counsellor and a Bupa, AXA PPP and Aviva registered mental health and well-being therapist, offering integrative counselling including CBT and humanistic approaches.",
    "url": "https://www.bestcounsellingtherapy.com/aboutmeginalee"
  },
  "sameAs": [],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "opens": "10:00",
      "closes": "20:30",
      "description": "Online counselling practice hours"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Friday",
      "opens": "10:00",
      "closes": "14:00",
      "description": "Face-to-face counselling hours"
    }
  ],
  "makesOffer": [
    {
      "@type": "Offer",
      "name": "Individual Counselling Session",
      "price": "50",
      "priceCurrency": "GBP",
      "description": "50-minute individual counselling and psychotherapy session available face-to-face in Evesham or online across the UK.",
      "availability": "https://schema.org/InStock"
    },
    {
      "@type": "Offer",
      "name": "Couples Counselling Session",
      "price": "60",
      "priceCurrency": "GBP",
      "description": "50-minute couples counselling session for relationship and communication issues, available face-to-face in Evesham or online.",
      "availability": "https://schema.org/InStock"
    }
  ],
  "serviceType": [
    "Counselling",
    "Psychotherapy",
    "Online counselling",
    "Face-to-face counselling",
    "Couples counselling",
    "CBT (Cognitive Behavioural Therapy)",
    "Humanistic counselling"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Counselling and Psychotherapy Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Depression and Anxiety Counselling",
        "itemOffered": {
          "@type": "Service",
          "name": "Depression and Anxiety Counselling",
          "description": "Counselling and psychotherapy to help with depression, low mood, anxiety and related symptoms, using integrative and CBT-informed approaches."
        }
      },
      {
        "@type": "Offer",
        "name": "Relationship and Couples Counselling",
        "itemOffered": {
          "@type": "Service",
          "name": "Relationship Counselling",
          "description": "Counselling for couples and individuals experiencing relationship difficulties, communication issues, affairs, separation, divorce and family changes."
        }
      },
      {
        "@type": "Offer",
        "name": "Social Anxiety Counselling",
        "itemOffered": {
          "@type": "Service",
          "name": "Social Anxiety Counselling",
          "description": "Support for social anxiety, fear of judgement and difficulty in social situations, including tools to manage anxious thoughts and reactions."
        }
      },
      {
        "@type": "Offer",
        "name": "Bereavement and Loss Counselling",
        "itemOffered": {
          "@type": "Service",
          "name": "Bereavement and Loss Counselling",
          "description": "Counselling for grief, bereavement and significant life losses such as relationships, health, work and identity."
        }
      },
      {
        "@type": "Offer",
        "name": "Trauma and Abuse Counselling",
        "itemOffered": {
          "@type": "Service",
          "name": "Trauma and Abuse Counselling",
          "description": "Counselling support for people who have experienced trauma or abuse, helping them process difficult experiences safely."
        }
      },
      {
        "@type": "Offer",
        "name": "Confidence and Self-Esteem Counselling",
        "itemOffered": {
          "@type": "Service",
          "name": "Confidence and Self-Esteem Counselling",
          "description": "Support to develop self-awareness, confidence and self-esteem, and to change unhelpful patterns of self-abandonment and negative thinking."
        }
      }
    ]
  }
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
