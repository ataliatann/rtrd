/* ============================================================
   Run the Red Dot - site script

   >>> THE THINGS YOU USUALLY NEED TO CHANGE <<<

   1. FORMS - each run has its own Google Form. Paste the link
      for each one here. Every "Register for this run" button and
      the four buttons in the Register section pick up these values.

   2. CONTACT_EMAIL - the address the "email the team" link opens.

   The plain "Book a run" / "Register" buttons in the header, menu
   and footer just scroll down to the Tours section, so the person
   can pick a run first. Nothing to configure for those.
   ============================================================ */

var FORMS = {
  sunrise:   "https://forms.gle/6ibkn6nR7TdrWpSA8",
  night:     "https://forms.gle/LYfDtKhBSzsRjcie7"
};

var CONTACT_EMAIL = "hello@example.com"; // TODO: Atalia's real email

/* ------------------------------------------------------------
   Below here you should not need to touch anything.
   ------------------------------------------------------------ */

// Point each run's button at its own form, opening in a new tab.
document.querySelectorAll("[data-form]").forEach(function (el) {
  var url = FORMS[el.getAttribute("data-form")];
  if (url) {
    el.setAttribute("href", url);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  }
});

// Point every "email the team" link at the contact address.
document.querySelectorAll("[data-email]").forEach(function (el) {
  el.setAttribute("href", "mailto:" + CONTACT_EMAIL);
});

// Mobile menu open/close.
var toggle = document.querySelector(".nav-toggle");
var links  = document.getElementById("navLinks");
if (toggle && links) {
  toggle.addEventListener("click", function () {
    var open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  // Close the menu after tapping a link.
  links.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Current year in the footer.
var year = document.getElementById("year");
if (year) { year.textContent = new Date().getFullYear(); }
