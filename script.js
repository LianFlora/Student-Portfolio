
const themeBtn = document.getElementById("themeBtn");
const root = document.documentElement; // the <html> tag


themeBtn.addEventListener("click", function () {
  let current = root.getAttribute("data-theme");

  
  if (!current) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      current = "dark";
    } else {
      current = "light";
    }
  }

  const next = current === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);

  try {
    localStorage.setItem("theme", next);
  } catch (e) {
    // ignore
  }
});



const copyBtn = document.getElementById("copyBtn");
const emailText = document.getElementById("emailText");
const copyMsg = document.getElementById("copyMsg");
let copyTimer;

copyBtn.addEventListener("click", function () {
  navigator.clipboard.writeText(emailText.textContent)
    .then(function () {
      copyMsg.textContent = "Email copied!";
      copyBtn.textContent = "Copied ✓";
    })
    .catch(function () {
      copyMsg.textContent = "Select the email and press Ctrl+C.";
    });


  clearTimeout(copyTimer);
  copyTimer = setTimeout(function () {
    copyMsg.textContent = "";
    copyBtn.textContent = "Copy email";
  }, 2000);
});
