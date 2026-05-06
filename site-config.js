(async function () {
  const domain = location.hostname.replace("www.", "");

  const site = {
        "d1": "/23330730517/playarenax.in_d1",
        "d2": "/23330730517/playarenax.in_d2",
        "d3": "/23330730517/playarenax.in_d3",
        "reward": "/23330730517/playarenax.in_reward",
        "inter": "/23330730517/playarenax.in_inter",
        "gtag": "G-8QJCLLREYS",
        "conversion": "AW-17912215979/upnmCNrBq5kcEKq936xD",
        "gam": "AW-17912215979"
    };

  window.AD_CONFIG = site;

  /* ---------------- gtag setup (shared) ---------------- */
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;

  /* ---------------- Load GTM script once (primary ID) ---------------- */
  const gaScript = document.createElement("script");
  gaScript.async = true;
  gaScript.src = "https://www.googletagmanager.com/gtag/js?id=" + site.gam;
  document.head.appendChild(gaScript);

  /* ---------------- Configure both IDs ---------------- */
  gtag("js", new Date());
  gtag("config", site.gam);   // Google Ads
  gtag("config", site.gtag);  // GA4
})();