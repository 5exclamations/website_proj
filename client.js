const WEB3FORMS_ACCESS_KEY = "d1e6672b-1203-42d9-a873-8fb29e168a58";

async function submitForm(payload) {
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ access_key: WEB3FORMS_ACCESS_KEY, ...payload })
    });
    if (!response.ok) return false;
    const data = await response.json();
    return Boolean(data.success);
  } catch {
    return false;
  }
}

const modal = document.getElementById("booking-modal");
const dialog = modal?.querySelector(".booking-dialog");
let lastFocused = null;

function openModal() {
  if (!modal || !dialog) return;
  lastFocused = document.activeElement;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  dialog.focus();
}

function closeModal() {
  if (!modal || modal.hidden) return;
  modal.hidden = true;
  document.body.style.overflow = "";
  if (lastFocused instanceof HTMLElement) lastFocused.focus();
}

document.querySelectorAll(".book-appointment-trigger").forEach((button) => {
  button.addEventListener("click", openModal);
});
modal?.querySelectorAll("[data-close-booking]").forEach((button) => {
  button.addEventListener("click", closeModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
  if (event.key !== "Tab" || !modal || modal.hidden || !dialog) return;
  const focusable = [...dialog.querySelectorAll('button, a[href], input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')];
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

document.querySelectorAll(".faq-q").forEach((button) => {
  button.addEventListener("click", () => {
    const answer = document.getElementById(button.getAttribute("aria-controls"));
    if (!answer) return;
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    answer.hidden = expanded;
  });
});

document.querySelectorAll(".js-contact-form").forEach((form) => {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const status = form.querySelector(".form-status");
    const submitButton = form.querySelector('button[type="submit"]');
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    if (data.get("botcheck")) return;
    if (status) status.textContent = "";
    if (submitButton) submitButton.disabled = true;

    const ok = await submitForm({
      subject: `${form.dataset.formType || "Website"} | ${document.documentElement.lang.toUpperCase()}`,
      from_name: String(data.get("name") || ""),
      name: String(data.get("name") || ""),
      phone: String(data.get("phone") || ""),
      message: String(data.get("message") || ""),
      consent: "yes",
      form_type: form.dataset.formType || "website",
      source_page: window.location.pathname
    });

    if (submitButton) submitButton.disabled = false;
    if (status) {
      status.textContent = ok ? document.body.dataset.success : document.body.dataset.error;
      status.classList.toggle("error", !ok);
    }
    if (ok) form.reset();
  });
});
