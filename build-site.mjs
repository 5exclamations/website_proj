import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { care } from "./care-content.mjs";
import { articles, articleSources, articleUi } from "./articles.mjs";

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DOMAIN = "https://drvusalagasimova.com";
// Increment whenever shared CSS or JS changes so GitHub Pages/browser caches
// cannot combine a new document with stale assets after a deployment.
const ASSET_VERSION = "20260912-1";
const LANGS = ["az", "ru", "en", "de"];
const PAGES = ["home", "bac", "services", "about", "articles", "contact", "terms", "privacy", "cookies", "autism", "communication", "behaviour"];

const source = fs.readFileSync(path.join(ROOT, "script.js"), "utf8");
const contentSource = source.slice(source.indexOf("const site ="), source.indexOf("const links ="));
const sandbox = {};
vm.runInNewContext(`${contentSource}\nglobalThis.__site = site;`, sandbox);
const site = sandbox.__site;

const pageFile = {
  autism: "autism-support.html",
  communication: "social-communication.html",
  behaviour: "behavioural-support.html",
  home: "index.html",
  bac: "bac-therapy.html",
  services: "services.html",
  about: "about.html",
  articles: "articles.html",
  contact: "contact.html",
  terms: "terms.html",
  privacy: "privacy.html",
  cookies: "cookies.html"
};

const seo = {
  az: {
    home: ["Bakıda neyropsixoloq Vüsalə Qasımova | Uşaq və böyüklər", "Bakıda uşaqlar və böyüklər üçün neyropsixoloji qiymətləndirmə, korreksiya və fərdi konsultasiya. Vüsalə Qasımova ilə qəbul üçün əlaqə saxlayın."],
    bac: ["Bakıda BAK terapiyası | Bioakustik korreksiya", "Bakıda bioakustik korreksiya: prosedurun gedişi, kimlər üçün uyğun ola biləcəyi, məhdudiyyətlər və konsultasiya məlumatları."],
    services: ["Bakıda neyropsixoloq xidmətləri | Vüsalə Qasımova", "Neyropsixoloji qiymətləndirmə, korreksiya, bioakustik korreksiya və digər dəstək üsulları barədə məlumat."],
    about: ["Neyropsixoloq Vüsalə Qasımova | Təhsil və təcrübə", "Vüsalə Qasımovanın təhsili, 20 ildən artıq iş təcrübəsi, peşəkar inkişafı və sertifikatları."],
    articles: ["Neyropsixologiya haqqında faydalı materiallar | Vüsalə Qasımova", "Uşaqlar və böyüklər üçün neyropsixoloji qiymətləndirmə, diqqət, inkişaf və BAK barədə mənbələrə əsaslanan materiallar."],
    contact: ["Neyropsixoloq qəbulu Bakıda | Əlaqə və ünvan", "Vüsalə Qasımovanın Bakıdakı qəbuluna yazılın. Telefon, WhatsApp, ünvan və Google Maps məlumatları."],
    terms: ["İstifadə şərtləri | Vüsalə Qasımova", "drvusalagasimova.com saytının istifadə şərtləri və tibbi məlumatlarla bağlı vacib qeydlər."],
    privacy: ["Məxfilik siyasəti | Vüsalə Qasımova", "Saytda ad, telefon və müraciət məlumatlarının necə emal edildiyini izah edən məxfilik siyasəti."],
    cookies: ["Cookies siyasəti | Vüsalə Qasımova", "drvusalagasimova.com saytında cookies, lokal yaddaş və üçüncü tərəf xidmətləri haqqında məlumat."]
  },
  ru: {
    home: ["Нейропсихолог в Баку Вусала Касимова | Дети и взрослые", "Нейропсихологическая диагностика, коррекция и индивидуальные консультации для детей и взрослых в Баку. Запись к Вусале Касимовой."],
    bac: ["БАК-терапия в Баку | Биоакустическая коррекция", "Как проходит биоакустическая коррекция в Баку, кому она может подойти, ограничения, противопоказания и запись на консультацию."],
    services: ["Услуги нейропсихолога в Баку | Вусала Касимова", "Нейропсихологическая диагностика и коррекция, БАК-терапия и поддерживающие методы для детей и взрослых."],
    about: ["Нейропсихолог Вусала Касимова | Образование и опыт", "Образование, более 20 лет профессионального опыта, повышение квалификации и сертификаты Вусалы Касимовой."],
    articles: ["Полезные материалы о нейропсихологии | Вусала Касимова", "Материалы для родителей и взрослых о нейропсихологической диагностике, внимании, развитии и БАК-терапии."],
    contact: ["Запись к нейропсихологу в Баку | Контакты и адрес", "Запишитесь к Вусале Касимовой в Баку. Телефон, WhatsApp, адрес кабинета и маршрут в Google Maps."],
    terms: ["Условия использования | Вусала Касимова", "Условия использования сайта drvusalagasimova.com и важные ограничения медицинской информации."],
    privacy: ["Политика конфиденциальности | Вусала Касимова", "Как сайт обрабатывает имя, номер телефона и содержание обращения при записи на консультацию."],
    cookies: ["Политика cookies | Вусала Касимова", "Информация о cookies, локальном хранилище и сторонних сервисах на сайте drvusalagasimova.com."]
  },
  en: {
    home: ["Neuropsychologist in Baku Vusala Gasimova | Children and adults", "Neuropsychological assessment, support and individual consultations for children and adults in Baku. Request an appointment with Vusala Gasimova."],
    bac: ["BAC therapy in Baku | Bioacoustic correction", "Learn how bioacoustic correction sessions work, who may be suitable, important limitations and how to request a consultation in Baku."],
    services: ["Neuropsychology services in Baku | Vusala Gasimova", "Neuropsychological assessment and support, bioacoustic correction and related services for children and adults in Baku."],
    about: ["Neuropsychologist Vusala Gasimova | Education and experience", "Education, more than 20 years of professional experience, continuing development and certificates of Vusala Gasimova."],
    articles: ["Practical neuropsychology resources | Vusala Gasimova", "Source-based guidance for parents and adults on neuropsychological assessment, attention, development and bioacoustic correction."],
    contact: ["Book a neuropsychologist in Baku | Contact and location", "Request an appointment with Vusala Gasimova in Baku. Phone, WhatsApp, clinic address and Google Maps directions."],
    terms: ["Terms of use | Vusala Gasimova", "Terms for using drvusalagasimova.com and important limitations concerning health information on the website."],
    privacy: ["Privacy policy | Vusala Gasimova", "How names, phone numbers and enquiry details are processed when visitors request a consultation."],
    cookies: ["Cookie policy | Vusala Gasimova", "Information about browser storage and third-party services used on drvusalagasimova.com."]
  },
  de: {
    home: ["Neuropsychologin in Baku Vüsalə Qasımova | Kinder und Erwachsene", "Neuropsychologische Einschätzung und individuelle Beratung für Kinder und Erwachsene in Baku. Termin bei Vüsalə Qasımova anfragen."],
    bac: ["BAK-Therapie in Baku | Bioakustische Korrektur", "Ablauf der bioakustischen Korrektur, mögliche Eignung, wichtige Grenzen und Terminvereinbarung in Baku."],
    services: ["Neuropsychologische Leistungen in Baku | Vüsalə Qasımova", "Neuropsychologische Einschätzung und Förderung, bioakustische Korrektur und unterstützende Verfahren in Baku."],
    about: ["Neuropsychologin Vüsalə Qasımova | Ausbildung und Erfahrung", "Ausbildung, mehr als 20 Jahre Berufserfahrung, Fortbildungen und Zertifikate von Vüsalə Qasımova."],
    articles: ["Ratgeber zur Neuropsychologie | Vüsalə Qasımova", "Quellenbasierte Informationen für Eltern und Erwachsene zu Diagnostik, Aufmerksamkeit, Entwicklung und bioakustischer Korrektur."],
    contact: ["Termin bei einer Neuropsychologin in Baku | Kontakt", "Termin bei Vüsalə Qasımova in Baku anfragen. Telefon, WhatsApp, Praxisadresse und Google-Maps-Route."],
    terms: ["Nutzungsbedingungen | Vüsalə Qasımova", "Nutzungsbedingungen für drvusalagasimova.com und wichtige Hinweise zu Gesundheitsinformationen."],
    privacy: ["Datenschutzerklärung | Vüsalə Qasımova", "Informationen zur Verarbeitung von Name, Telefonnummer und Anfrage bei der Terminvereinbarung."],
    cookies: ["Cookie-Richtlinie | Vüsalə Qasımova", "Informationen zu Browserspeicher und Drittanbieterdiensten auf drvusalagasimova.com."]
  }
};

// Keep visible copy, search metadata and FAQ structured data in sync.
for (const lang of LANGS) {
  const c = care[lang];
  seo[lang].home = [({
    az: "Bakıda BAK və neyropsixoloq | Vüsalə Qasımova",
    ru: "БАК и нейропсихолог в Баку | Вусала Касимова",
    en: "BAC and neuropsychology in Baku | Vusala Gasimova",
    de: "BAK und Neuropsychologie in Baku | Vüsalə Qasımova"
  })[lang], c.intro];
  seo[lang].bac = [c.bac.title, c.bac.description];
  seo[lang].services = [`${c.servicesTitle} | Vüsalə Qasımova, Baku`, c.servicesIntro];
  for (const [key, page] of Object.entries(c.pages)) seo[lang][key] = [page.title, page.description];
  site[lang].bac.faq = c.bac.faq.map(([q, a]) => ({ q, a }));
}

const legal = {
  az: {
    terms: ["İstifadə şərtləri", "Bu sayt neyropsixoloji xidmətlər və dəstək üsulları haqqında ümumi məlumat verir.", ["Saytdakı məlumat fərdi diaqnostikanı, həkim konsultasiyasını və ya müalicəni əvəz etmir.", "Qəbul yalnız komandanın təsdiqindən sonra planlaşdırılmış sayılır.", "Nəticələr fərdidir və heç bir üsul üçün zəmanət verilmir.", "Təcili tibbi və ya psixi vəziyyətdə yerli təcili yardım xidmətinə müraciət edin."]],
    privacy: ["Məxfilik siyasəti", "Əlaqə formaları vasitəsilə göndərdiyiniz məlumat yalnız müraciətinizə cavab vermək və qəbulu planlaşdırmaq üçün istifadə olunur.", ["Emal edilə bilən məlumatlar: ad, telefon nömrəsi və müraciətin qısa mətni.", "Formalar Web3Forms xidməti vasitəsilə ötürülür; həssas tibbi məlumatları forma daxilində yazmayın.", "Məlumat satılmır və reklam profilləri yaratmaq üçün istifadə olunmur.", "Məlumatın düzəldilməsi və ya silinməsi üçün saytda göstərilən telefonla əlaqə saxlaya bilərsiniz."]],
    cookies: ["Cookies siyasəti", "Sayt hazırda reklam və davranış analitikası üçün cookies istifadə etmir.", ["Google Maps xəritəsi açıldıqda Google öz texniki məlumatlarını emal edə bilər.", "Dil seçimi ayrıca URL-lərlə işləyir və cookie tələb etmir.", "Brauzerinizdə üçüncü tərəf cookies və sayt məlumatlarını idarə edə bilərsiniz."]]
  },
  ru: {
    terms: ["Условия использования", "Сайт предоставляет общую информацию о нейропсихологических услугах и поддерживающих методах.", ["Материалы сайта не заменяют индивидуальную диагностику, консультацию врача или лечение.", "Запись считается подтверждённой только после ответа команды.", "Результаты индивидуальны; гарантии результата не предоставляются.", "При неотложном медицинском или психическом состоянии обратитесь в местную службу экстренной помощи."]],
    privacy: ["Политика конфиденциальности", "Данные из форм используются только для ответа на обращение и организации консультации.", ["Могут обрабатываться имя, номер телефона и краткий текст обращения.", "Формы передаются через сервис Web3Forms. Не указывайте в форме чувствительные медицинские сведения.", "Данные не продаются и не используются для рекламного профилирования.", "Для исправления или удаления данных свяжитесь по указанному на сайте телефону."]],
    cookies: ["Политика cookies", "Сейчас сайт не использует cookies для рекламы или поведенческой аналитики.", ["При загрузке Google Maps компания Google может обрабатывать технические данные.", "Языковые версии работают на отдельных URL и не требуют cookie.", "Сторонние cookies и данные сайтов можно ограничить в настройках браузера."]]
  },
  en: {
    terms: ["Terms of use", "This website provides general information about neuropsychological services and supportive methods.", ["Website content does not replace individual assessment, medical advice or treatment.", "An appointment is confirmed only after direct confirmation from the team.", "Outcomes are individual and no result is guaranteed.", "For an urgent medical or mental health situation, contact the local emergency service."]],
    privacy: ["Privacy policy", "Information submitted through the forms is used only to respond and coordinate an appointment.", ["Processed information may include your name, phone number and a short enquiry.", "Forms are transmitted through Web3Forms. Do not include sensitive health details in the form.", "Information is not sold or used for advertising profiles.", "To request correction or deletion, contact the phone number shown on the website."]],
    cookies: ["Cookie policy", "The website currently does not use advertising or behavioural analytics cookies.", ["Google may process technical data when the embedded Google Maps view is loaded.", "Language versions use separate URLs and do not require a preference cookie.", "You can restrict third-party cookies and site data in your browser settings."]]
  },
  de: {
    terms: ["Nutzungsbedingungen", "Diese Website bietet allgemeine Informationen zu neuropsychologischen Leistungen und unterstützenden Verfahren.", ["Die Inhalte ersetzen keine individuelle Diagnostik, ärztliche Beratung oder Behandlung.", "Ein Termin gilt erst nach direkter Bestätigung durch das Team als vereinbart.", "Ergebnisse sind individuell; ein Erfolg kann nicht garantiert werden.", "Wenden Sie sich in einem medizinischen oder psychischen Notfall an den örtlichen Rettungsdienst."]],
    privacy: ["Datenschutzerklärung", "Formulardaten werden ausschließlich zur Beantwortung der Anfrage und zur Terminplanung verwendet.", ["Verarbeitet werden können Name, Telefonnummer und eine kurze Anfrage.", "Formulare werden über Web3Forms übertragen. Tragen Sie keine sensiblen Gesundheitsdaten in das Formular ein.", "Daten werden nicht verkauft oder für Werbeprofile verwendet.", "Zur Berichtigung oder Löschung kontaktieren Sie die auf der Website angegebene Telefonnummer."]],
    cookies: ["Cookie-Richtlinie", "Die Website verwendet derzeit keine Cookies für Werbung oder Verhaltensanalyse.", ["Beim Laden der eingebetteten Google-Maps-Karte kann Google technische Daten verarbeiten.", "Die Sprachen werden über getrennte URLs bereitgestellt und benötigen kein Präferenz-Cookie.", "Drittanbieter-Cookies und Website-Daten können Sie im Browser einschränken."]]
  }
};

const common = {
  az: { skip: "Əsas məzmuna keç", trust: "Fərdi yanaşma və aydın kommunikasiya", experience: "20+ il təcrübə", location: "Bakı, Azərbaycan", consult: "İlkin konsultasiya", info: "Saytdakı məlumat diaqnoz və tibbi konsultasiyanı əvəz etmir.", consent: "Məxfilik siyasəti ilə tanış oldum və müraciətimin emalına razıyam.", status: "Müraciət göndərildi. Sizinlə tezliklə əlaqə saxlayacağıq.", error: "Müraciəti göndərmək mümkün olmadı. WhatsApp və ya telefonla əlaqə saxlayın.", close: "Bağla" },
  ru: { skip: "Перейти к содержанию", trust: "Индивидуальный подход и понятная коммуникация", experience: "Более 20 лет опыта", location: "Баку, Азербайджан", consult: "Первичная консультация", info: "Информация на сайте не заменяет диагностику и медицинскую консультацию.", consent: "Я ознакомился(-ась) с политикой конфиденциальности и согласен(-на) на обработку обращения.", status: "Запрос отправлен. Мы свяжемся с вами в ближайшее время.", error: "Не удалось отправить запрос. Свяжитесь через WhatsApp или по телефону.", close: "Закрыть" },
  en: { skip: "Skip to content", trust: "Individual approach and clear communication", experience: "20+ years of experience", location: "Baku, Azerbaijan", consult: "Initial consultation", info: "Website information does not replace diagnosis or medical advice.", consent: "I have read the privacy policy and consent to processing this enquiry.", status: "Your request has been sent. We will contact you shortly.", error: "The request could not be sent. Please contact us by WhatsApp or phone.", close: "Close" },
  de: { skip: "Zum Inhalt springen", trust: "Individuelles Vorgehen und verständliche Kommunikation", experience: "Mehr als 20 Jahre Erfahrung", location: "Baku, Aserbaidschan", consult: "Erstgespräch", info: "Die Informationen ersetzen keine Diagnostik oder ärztliche Beratung.", consent: "Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung dieser Anfrage zu.", status: "Ihre Anfrage wurde gesendet. Wir melden uns in Kürze.", error: "Die Anfrage konnte nicht gesendet werden. Kontaktieren Sie uns per WhatsApp oder Telefon.", close: "Schließen" }
};

const contactInfo = {
  az: { hoursLabel: "İş saatları:", hours: "Bazar ertəsi–cümə, 09:00–18:00", landmarkLabel: "Yaxın metro:", landmark: "Nəriman Nərimanov", accessLabel: "Giriş:", access: "Binada lift var", whatsapp: "Salam! Vüsalə Qasımovanın konsultasiyasına yazılmaq istəyirəm." },
  ru: { hoursLabel: "Часы работы:", hours: "Будни, 09:00–18:00", landmarkLabel: "Ближайшее метро:", landmark: "Нариман Нариманов", accessLabel: "Доступность:", access: "В здании есть лифт", whatsapp: "Здравствуйте! Хочу записаться на консультацию к Вусале Касимовой." },
  en: { hoursLabel: "Opening hours:", hours: "Monday–Friday, 09:00–18:00", landmarkLabel: "Nearest metro:", landmark: "Nariman Narimanov", accessLabel: "Accessibility:", access: "The building has a lift", whatsapp: "Hello! I would like to request a consultation with Vusala Gasimova." },
  de: { hoursLabel: "Sprechzeiten:", hours: "Montag–Freitag, 09:00–18:00", landmarkLabel: "Nächste Metro:", landmark: "Nariman Narimanov", accessLabel: "Barrierearmer Zugang:", access: "Im Gebäude gibt es einen Aufzug", whatsapp: "Guten Tag! Ich möchte ein Erstgespräch bei Vüsalə Qasımova anfragen." }
};

const images = {
  hero: ["optimized/hero.webp", 573, 480],
  approach: ["optimized/approach.webp", 572, 440],
  integration: ["optimized/integration.webp", 572, 440],
  bac: ["optimized/bac-therapy.webp", 1199, 416],
  psychocorrection: ["optimized/psychocorrection.webp", 1200, 800],
  steps: [
    ["Датчики размещаются на голове пациента для мониторинга активности мозга (ЭЭГ)..png", 153, 142],
    ["Эти данные преобразуются в акустические волны - уникальную музыку мозга..png", 169, 149],
    ["Пациент слушает этот звук в режиме реального времени, побуждая мозг к самокоррекции через обратную связь..png", 165, 145]
  ]
};

const esc = (value = "") => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));
const urlPath = (lang, page) => lang === "az" ? (page === "home" ? "/" : `/${pageFile[page]}`) : (page === "home" ? `/${lang}/` : `/${lang}/${pageFile[page]}`);
const fullUrl = (lang, page) => `${DOMAIN}${urlPath(lang, page)}`;
const outputPath = (lang, page) => path.join(ROOT, ...(lang === "az" ? [] : [lang]), pageFile[page]);
const articleUrlPath = (lang, slug) => lang === "az" ? `/articles/${slug}.html` : `/${lang}/articles/${slug}.html`;
const fullArticleUrl = (lang, slug) => `${DOMAIN}${articleUrlPath(lang, slug)}`;
const articleOutputPath = (lang, slug) => path.join(ROOT, ...(lang === "az" ? [] : [lang]), "articles", `${slug}.html`);
const imageUrl = (entry) => `/img/${encodeURI(entry[0])}`;
const lines = (text) => esc(text).replace(/\n/g, "<br>");
const list = (items, cls = "") => `<ul${cls ? ` class="${cls}"` : ""}>${items.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>`;

function schema(lang, page) {
  const graph = [
    { "@type": "WebSite", "@id": `${DOMAIN}/#website`, url: DOMAIN, name: "Vüsalə Qasımova", inLanguage: lang },
    { "@type": "MedicalBusiness", "@id": `${DOMAIN}/#practice`, name: "Vüsalə Qasımova — Neuropsychology", url: fullUrl(lang, "home"), telephone: "+994554770266", image: `${DOMAIN}${imageUrl(images.hero)}`, address: { "@type": "PostalAddress", streetAddress: "Aşıq Molla Cümə 3", addressLocality: "Baku", postalCode: "AZ1075", addressCountry: "AZ" }, areaServed: { "@type": "City", name: "Baku" }, openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" }], amenityFeature: [{ "@type": "LocationFeatureSpecification", name: "Lift", value: true }], hasMap: "https://maps.app.goo.gl/SyPMxCkYc1H4ZJ5g7", sameAs: ["https://www.instagram.com/neyropsixoloq_qasimova_vusale"] },
    { "@type": "Person", "@id": `${DOMAIN}/#vusala`, name: "Vüsalə Qasımova", alternateName: ["Vusala Gasimova", "Вусала Касимова"], jobTitle: lang === "de" ? "Neuropsychologin" : "Neuropsychologist", worksFor: { "@id": `${DOMAIN}/#practice` }, alumniOf: { "@type": "CollegeOrUniversity", name: "Azerbaijan Medical University" } }
  ];
  if (page === "bac") graph.push({ "@type": "FAQPage", mainEntity: site[lang].bac.faq.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) });
  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/<\//g, "<\\/");
}

function head(lang, page) {
  const [title, description] = seo[lang][page];
  const canonical = fullUrl(lang, page);
  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <link rel="canonical" href="${canonical}">
  ${LANGS.map((code) => `<link rel="alternate" hreflang="${code}" href="${fullUrl(code, page)}">`).join("\n  ")}
  <link rel="alternate" hreflang="x-default" href="${fullUrl("az", page)}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Vüsalə Qasımova">
  <meta property="og:locale" content="${lang === "az" ? "az_AZ" : lang === "ru" ? "ru_RU" : lang === "de" ? "de_DE" : "en_US"}">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${DOMAIN}${imageUrl(images.hero)}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="theme-color" content="#f6f8fd">
  <meta name="generator" content="Vusala static multilingual site">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="/styles.css?v=${ASSET_VERSION}">
  <script type="application/ld+json">${schema(lang, page)}</script>
  <script src="/client.js?v=${ASSET_VERSION}" defer></script>
</head>`;
}

function articleHead(lang, article) {
  const data = article[lang];
  const canonical = fullArticleUrl(lang, article.slug);
  const title = data.title.length > 62 ? `${data.title.slice(0, 59).trimEnd()}…` : data.title;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    headline: data.title,
    description: data.description,
    url: canonical,
    inLanguage: lang,
    datePublished: "2026-08-21",
    dateModified: "2026-08-21",
    lastReviewed: "2026-08-21",
    author: { "@type": "Organization", name: articleUi[lang].author },
    reviewedBy: {
      "@type": "Person",
      "@id": `${DOMAIN}/#vusala`,
      name: "Vüsalə Qasımova",
      alternateName: ["Vusala Gasimova", "Вусала Касимова"],
      jobTitle: lang === "az" ? "Neyropsixoloq" : lang === "ru" ? "Нейропсихолог" : lang === "de" ? "Neuropsychologin" : "Neuropsychologist"
    },
    about: { "@type": "MedicalSpecialty", name: "Neuropsychology" },
    isPartOf: { "@id": `${DOMAIN}/#website` },
    citation: articleSources(article).map((source) => source.url)
  };
  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(data.description)}">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <link rel="canonical" href="${canonical}">
  ${LANGS.map((code) => `<link rel="alternate" hreflang="${code}" href="${fullArticleUrl(code, article.slug)}">`).join("\n  ")}
  <link rel="alternate" hreflang="x-default" href="${fullArticleUrl("az", article.slug)}">
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="Vüsalə Qasımova">
  <meta property="og:title" content="${esc(data.title)}">
  <meta property="og:description" content="${esc(data.description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${DOMAIN}${imageUrl(images.hero)}">
  <meta property="article:published_time" content="2026-08-21">
  <meta property="article:modified_time" content="2026-08-21">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="theme-color" content="#f6f8fd">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="/styles.css?v=${ASSET_VERSION}">
  <script type="application/ld+json">${JSON.stringify(articleSchema).replace(/<\//g, "<\\/")}</script>
  <script src="/client.js?v=${ASSET_VERSION}" defer></script>
</head>`;
}

function header(lang, page, articleSlug = "") {
  const t = site[lang];
  const navPages = ["home", "bac", "services", "about", "articles", "contact"];
  const navLabel = (item) => item === "articles" ? articleUi[lang].nav : t.nav[item];
  const languageUrl = (code) => articleSlug ? articleUrlPath(code, articleSlug) : urlPath(code, page);
  return `<body data-static-site="true" data-lang="${lang}" data-page="${page}" data-success="${esc(common[lang].status)}" data-error="${esc(common[lang].error)}">
  <a class="skip-link" href="#main-content">${esc(common[lang].skip)}</a>
  <header class="site-header">
    <div class="container nav-wrap">
      <a class="brand" href="${urlPath(lang, "home")}" aria-label="Vüsalə Qasımova">
        <img src="/img/logo.png" width="210" height="39" alt="Vüsalə Qasımova">
      </a>
      <nav class="main-nav" aria-label="${esc(t.nav.home)}">
        ${navPages.map((item) => `<a href="${urlPath(lang, item)}"${item === page ? ' class="active" aria-current="page"' : ""}>${esc(navLabel(item))}</a>`).join("")}
      </nav>
      <div class="nav-right">
        <nav class="lang-switch" aria-label="Language">
          ${LANGS.map((code) => `<a href="${languageUrl(code)}" hreflang="${code}" lang="${code}"${code === lang ? ' class="active" aria-current="true"' : ""}>${code.toUpperCase()}</a>`).join("")}
        </nav>
        <button class="btn btn-primary book-appointment-trigger" type="button">${esc(t.nav.book)}</button>
      </div>
    </div>
  </header>`;
}

// Studio attribution badge, fetched verbatim from
// https://exclamationdev.com/badge/embed.txt — a single <a> wrapping one inline
// <svg> whose letterforms are vector paths. Do not reformat, re-indent or
// "optimize" it: the viewBox and paths must stay byte-for-byte as delivered.
// It makes no network requests and inherits the footer text colour.
const EXCLAMATION_BADGE = `<a href="https://exclamationdev.com/en/?ref=badge" target="_blank" rel="noopener" aria-label="Developed by EXCLAMATION" style="display:inline-flex;align-items:center;color:inherit;text-decoration:none"><svg xmlns="http://www.w3.org/2000/svg" width="316" height="24" viewBox="0 0 435 33" aria-hidden="true" focusable="false"><title>Developed by EXCLAMATION</title><g><path fill="currentColor" fill-opacity=".62" d="M5.1 23L1.7 23L1.7 9.9L5.1 9.9Q6.3 9.9 7.3 10.3Q8.2 10.8 8.7 11.7Q9.2 12.6 9.2 13.8L9.2 13.8L9.2 19.0Q9.2 20.2 8.7 21.1Q8.2 22.0 7.3 22.5Q6.3 23 5.1 23L5.1 23ZM3.3 11.3L3.3 21.6L5.1 21.6Q6.2 21.6 6.9 20.9Q7.6 20.2 7.6 19.0L7.6 19.0L7.6 13.8Q7.6 12.6 6.9 12.0Q6.2 11.3 5.1 11.3L5.1 11.3L3.3 11.3ZM22.4 23L14.8 23L14.8 9.9L22.4 9.9L22.4 11.3L16.4 11.3L16.4 15.4L21.7 15.4L21.7 16.9L16.4 16.9L16.4 21.5L22.4 21.5L22.4 23ZM32.5 23L30.3 23L26.9 9.9L28.6 9.9L30.8 18.8Q31.0 19.7 31.2 20.5Q31.4 21.3 31.4 21.7L31.4 21.7Q31.5 21.3 31.7 20.5Q31.8 19.7 32.0 18.8L32.0 18.8L34.3 9.9L35.9 9.9L32.5 23ZM48.4 23L40.8 23L40.8 9.9L48.4 9.9L48.4 11.3L42.4 11.3L42.4 15.4L47.7 15.4L47.7 16.9L42.4 16.9L42.4 21.5L48.4 21.5L48.4 23ZM61.6 23L54.1 23L54.1 9.9L55.7 9.9L55.7 21.5L61.6 21.5L61.6 23ZM70.4 23.2L70.4 23.2Q69.2 23.2 68.4 22.7Q67.5 22.3 67.0 21.4Q66.6 20.6 66.6 19.4L66.6 19.4L66.6 13.5Q66.6 12.3 67.0 11.4Q67.5 10.6 68.4 10.1Q69.2 9.7 70.4 9.7L70.4 9.7Q71.6 9.7 72.4 10.1Q73.3 10.6 73.8 11.4Q74.2 12.3 74.2 13.4L74.2 13.4L74.2 19.4Q74.2 20.6 73.8 21.4Q73.3 22.3 72.4 22.7Q71.6 23.2 70.4 23.2ZM70.4 21.7L70.4 21.7Q71.5 21.7 72.0 21.1Q72.6 20.5 72.6 19.4L72.6 19.4L72.6 13.5Q72.6 12.3 72.0 11.7Q71.5 11.1 70.4 11.1L70.4 11.1Q69.4 11.1 68.8 11.7Q68.2 12.3 68.2 13.5L68.2 13.5L68.2 19.4Q68.2 20.5 68.8 21.1Q69.4 21.7 70.4 21.7ZM81.3 23L79.7 23L79.7 9.9L83.9 9.9Q85.1 9.9 86.0 10.3Q86.9 10.8 87.4 11.7Q87.9 12.5 87.9 13.7L87.9 13.7Q87.9 14.9 87.4 15.8Q86.9 16.6 86.0 17.1Q85.1 17.6 83.9 17.6L83.9 17.6L81.3 17.6L81.3 23ZM81.3 11.3L81.3 16.1L83.9 16.1Q84.9 16.1 85.6 15.5Q86.2 14.8 86.2 13.7L86.2 13.7Q86.2 12.6 85.6 12.0Q84.9 11.3 83.9 11.3L83.9 11.3L81.3 11.3ZM100.4 23L92.8 23L92.8 9.9L100.4 9.9L100.4 11.3L94.4 11.3L94.4 15.4L99.7 15.4L99.7 16.9L94.4 16.9L94.4 21.5L100.4 21.5L100.4 23ZM109.1 23L105.7 23L105.7 9.9L109.1 9.9Q110.3 9.9 111.3 10.3Q112.2 10.8 112.7 11.7Q113.2 12.6 113.2 13.8L113.2 13.8L113.2 19.0Q113.2 20.2 112.7 21.1Q112.2 22.0 111.3 22.5Q110.3 23 109.1 23L109.1 23ZM107.3 11.3L107.3 21.6L109.1 21.6Q110.2 21.6 110.9 20.9Q111.6 20.2 111.6 19.0L111.6 19.0L111.6 13.8Q111.6 12.6 110.9 12.0Q110.2 11.3 109.1 11.3L109.1 11.3L107.3 11.3Z M135.7 23L131.7 23L131.7 9.9L135.4 9.9Q137.2 9.9 138.2 10.8Q139.2 11.7 139.2 13.3L139.2 13.3Q139.2 14.2 138.9 14.8Q138.5 15.5 137.8 15.9Q137.1 16.2 136.1 16.2L136.1 16.2L136.1 15.9Q137.2 15.9 137.9 16.3Q138.7 16.7 139.1 17.5Q139.5 18.3 139.5 19.3L139.5 19.3Q139.5 20.5 139.1 21.3Q138.6 22.1 137.7 22.6Q136.9 23 135.7 23L135.7 23ZM133.3 16.9L133.3 21.5L135.5 21.5Q136.6 21.5 137.3 20.9Q137.9 20.3 137.9 19.3L137.9 19.3Q137.9 18.2 137.3 17.5Q136.6 16.9 135.5 16.9L135.5 16.9L133.3 16.9ZM133.3 11.3L133.3 15.5L135.4 15.5Q136.4 15.5 137.0 14.9Q137.6 14.3 137.6 13.4L137.6 13.4Q137.6 12.4 137.0 11.9Q136.4 11.3 135.4 11.3L135.4 11.3L133.3 11.3ZM149.2 23L147.6 23L147.6 18.1L143.6 9.9L145.3 9.9L147.9 15.3Q148.1 15.7 148.3 16.0Q148.4 16.3 148.4 16.5L148.4 16.5Q148.5 16.3 148.6 16.0Q148.7 15.7 148.9 15.3L148.9 15.3L151.5 9.9L153.2 9.9L149.2 18.1L149.2 23Z "/></g><rect x="176" y="1" width="5" height="21" fill="var(--exclamation-accent,#ff4a1e)"/><rect x="176" y="27" width="5" height="5" fill="var(--exclamation-accent,#ff4a1e)"/><g><path fill="currentColor" d="M212.5 25L200.3 25L200.3 6.8L212.4 6.8L212.4 9.8L203.7 9.8L203.7 14.2L211.1 14.2L211.1 16.9L203.7 16.9L203.7 22.0L212.5 22.0L212.5 25ZM222.9 25L218.9 25L224.7 15.7L219.2 6.8L223.2 6.8L227.1 13.2L231.3 6.8L235.2 6.8L229.4 15.8L235.4 25L231.3 25L227.0 18.2L222.9 25ZM250.8 25.4L250.8 25.4Q247.9 25.4 245.8 24.2Q243.7 23.1 242.5 20.9Q241.3 18.8 241.3 15.9L241.3 15.9Q241.3 13.8 242.0 12.1Q242.7 10.4 244.0 9.1Q245.3 7.8 247.0 7.1Q248.7 6.4 250.8 6.4L250.8 6.4Q253.0 6.4 254.5 6.9Q256.0 7.5 257.2 8.5L257.2 8.5L255.4 11.2Q254.6 10.5 253.5 10.1Q252.4 9.7 251.0 9.7L251.0 9.7Q249.6 9.7 248.5 10.1Q247.3 10.5 246.5 11.4Q245.7 12.2 245.3 13.3Q244.8 14.5 244.8 15.9L244.8 15.9Q244.8 17.9 245.6 19.2Q246.4 20.6 247.8 21.4Q249.2 22.1 251.2 22.1L251.2 22.1Q252.5 22.1 253.7 21.7Q255.0 21.3 256.1 20.4L256.1 20.4L257.7 23.3Q256.4 24.3 254.6 24.8Q252.9 25.4 250.8 25.4ZM275.9 25L264.8 25L264.8 6.8L268.2 6.8L268.2 21.9L275.9 21.9L275.9 25ZM284.9 25L281.2 25L288.2 6.8L291.9 6.8L299.1 25L295.3 25L293.7 20.9L286.4 20.9L284.9 25ZM290.0 10.6L287.2 18.0L292.9 18.0L290.0 10.6ZM308.9 25L305.8 25L305.8 6.8L309.0 6.8L316.3 18.7L315.0 18.7L321.9 6.8L325.1 6.8L325.1 25L321.9 25L321.9 11.2L322.5 11.4L316.7 21.2L314.3 21.2L308.3 11.4L308.8 11.2L308.9 25ZM335.6 25L331.9 25L338.8 6.8L342.6 6.8L349.7 25L345.9 25L344.4 20.9L337.1 20.9L335.6 25ZM340.7 10.6L337.9 18.0L343.5 18.0L340.7 10.6ZM363.2 25L359.8 25L359.8 9.9L354.8 9.9L354.8 6.8L368.2 6.8L368.2 9.9L363.2 9.9L363.2 25ZM378.7 25L375.4 25L375.4 6.8L378.7 6.8L378.7 25ZM396.0 25.4L396.0 25.4Q393.9 25.4 392.2 24.7Q390.4 23.9 389.1 22.7Q387.8 21.4 387.1 19.6Q386.4 17.9 386.4 15.9L386.4 15.9Q386.4 13.9 387.1 12.1Q387.8 10.4 389.1 9.1Q390.4 7.8 392.2 7.1Q393.9 6.4 396.0 6.4L396.0 6.4Q398.1 6.4 399.8 7.1Q401.6 7.9 402.9 9.2Q404.2 10.5 404.9 12.2Q405.6 13.9 405.6 15.9L405.6 15.9Q405.6 17.9 404.9 19.6Q404.2 21.4 402.9 22.7Q401.6 23.9 399.8 24.7Q398.1 25.4 396.0 25.4ZM396.0 22.2L396.0 22.2Q397.3 22.2 398.4 21.8Q399.5 21.3 400.3 20.5Q401.2 19.7 401.6 18.5Q402.1 17.3 402.1 15.9L402.1 15.9Q402.1 14.0 401.3 12.6Q400.5 11.2 399.1 10.4Q397.7 9.6 396.0 9.6L396.0 9.6Q394.7 9.6 393.6 10.0Q392.5 10.5 391.7 11.3Q390.9 12.1 390.4 13.3Q389.9 14.5 389.9 15.9L389.9 15.9Q389.9 17.8 390.7 19.2Q391.5 20.6 392.9 21.4Q394.3 22.2 396.0 22.2ZM416.6 25L413.3 25L413.3 6.8L416.6 6.8L425.2 19.3L425.2 6.8L428.5 6.8L428.5 25L425.2 25L416.6 12.3L416.6 25Z "/></g></svg></a>`;

function footer(lang) {
  const t = site[lang];
  return `<footer class="site-footer">
    <div class="container footer-grid">
      <div><strong>Vüsalə Qasımova</strong><p>${esc(common[lang].info)}</p></div>
      <div class="footer-links-main">
        ${["bac", ...Object.keys(care[lang].pages)].map((key) => `<a href="${urlPath(lang, key)}">${esc(key === "bac" ? care[lang].bac.title : care[lang].pages[key].title)}</a>`).join("")}
        <a href="${urlPath(lang, "articles")}">${esc(articleUi[lang].nav)}</a>
        <a href="${urlPath(lang, "terms")}">${esc(t.footer.terms)}</a>
        <a href="${urlPath(lang, "privacy")}">${esc(t.footer.privacy)}</a>
        <a href="${urlPath(lang, "cookies")}">${esc(t.footer.cookies)}</a>
        <a href="https://www.instagram.com/neyropsixoloq_qasimova_vusale" target="_blank" rel="noopener">Instagram</a>
      </div>
      <p class="footer-copy">${esc(t.footer.copy)}<span class="footer-badge">
        <!-- [html-validate-disable-next no-inline-style -- attribution badge, embedded verbatim] -->
        ${EXCLAMATION_BADGE}
      </span></p>
    </div>
  </footer>
  ${bookingDialog(lang)}
</body>
</html>`;
}

function bookingDialog(lang) {
  const t = site[lang];
  return `<div class="booking-modal" id="booking-modal" hidden>
    <div class="booking-backdrop" data-close-booking></div>
    <section class="booking-dialog" role="dialog" aria-modal="true" aria-labelledby="booking-title" tabindex="-1">
      <button class="booking-close" type="button" data-close-booking aria-label="${esc(common[lang].close)}">&times;</button>
      <h2 id="booking-title">${esc(t.nav.book)}</h2>
      <p>${esc(t.contact.intro)}</p>
      ${form(lang, "booking")}
    </section>
  </div>`;
}

function form(lang, type) {
  const t = site[lang];
  const prefix = type === "contact" ? "contact" : type;
  return `<form class="form js-contact-form" data-form-type="${type}" novalidate>
    <label for="${prefix}-name">${esc(t.contact.name)}</label>
    <input id="${prefix}-name" name="name" type="text" autocomplete="name" required maxlength="100">
    <label for="${prefix}-phone">${esc(t.contact.number)}</label>
    <input id="${prefix}-phone" name="phone" type="tel" autocomplete="tel" inputmode="tel" required maxlength="30">
    <label for="${prefix}-message">${esc(t.contact.question)}</label>
    <textarea id="${prefix}-message" name="message" rows="4" required maxlength="1500"></textarea>
    <label class="consent-row"><input id="${prefix}-consent" name="consent" type="checkbox" required> <span>${esc(common[lang].consent)} <a href="${urlPath(lang, "privacy")}">${esc(t.footer.privacy)}</a></span></label>
    <input class="botcheck" type="checkbox" name="botcheck" tabindex="-1" aria-hidden="true">
    <button type="submit" class="btn btn-primary">${esc(t.contact.send)}</button>
    <p class="form-status" role="status" aria-live="polite"></p>
  </form>`;
}

function trustStrip(lang) {
  const c = common[lang];
  return `<section class="trust-strip" aria-label="${esc(c.trust)}"><div class="container trust-grid"><div><strong>${esc(c.experience)}</strong><span>${esc(c.trust)}</span></div><div><strong>${esc(c.location)}</strong><span>Aşıq Molla Cümə 3</span></div><div><strong>${esc(c.consult)}</strong><span><a href="tel:+994554770266">+994&nbsp;55&nbsp;477&nbsp;02&nbsp;66</a></span></div></div></section>`;
}

function bookingButton(lang, label, style = "btn-primary") {
  return `<button class="btn ${style} book-appointment-trigger" type="button">${esc(label || care[lang].book)}</button>`;
}

function supportLinks(lang, includeBac = false) {
  const c = care[lang];
  const entries = [...(includeBac ? [["bac", c.bac]] : []), ...Object.entries(c.pages)];
  return `<div class="care-links">${entries.map(([key, data]) => `<article class="card"><h3><a href="${urlPath(lang, key)}">${esc(data.title)}</a></h3><p>${esc(data.description)}</p></article>`).join("")}</div>`;
}

function planSection(lang) {
  const c = care[lang];
  return `<section class="section alt"><div class="container"><div class="section-head"><h2>${esc(c.planTitle)}</h2><p>${esc(c.planIntro)}</p></div><ol class="care-plan">${c.plan.map(([title, text]) => `<li class="card"><h3>${esc(title)}</h3><p>${esc(text)}</p></li>`).join("")}</ol></div></section>`;
}

function componentsSection(lang) {
  const c = care[lang];
  return `<section class="section"><div class="container"><div class="section-head"><h2>${esc(c.servicesTitle)}</h2><p>${esc(c.servicesIntro)}</p></div><div class="care-components">${c.components.map(([title, text]) => `<article class="card"><h3>${esc(title)}</h3><p>${esc(text)}</p></article>`).join("")}</div>${supportLinks(lang)}</div></section>`;
}

function bacFeature(lang) {
  const c = care[lang];
  return `<section class="section bac-feature"><div class="container feature-grid"><div class="image-frame"><img src="${imageUrl(images.integration)}" width="572" height="440" alt="${esc(c.bac.title)}" loading="lazy"></div><div class="feature-copy"><h2>${esc(c.bac.title)}</h2><p>${esc(c.bac.lead)}</p><div class="hero-actions">${bookingButton(lang, c.suitable)}<a class="text-link" href="${urlPath(lang, "bac")}">${esc(c.learn)} →</a></div></div></div></section>`;
}

function homePage(lang) {
  const c = care[lang];
  return `<main id="main-content" class="home-page"><section class="hero"><div class="container hero-grid"><div class="hero-content"><p class="eyebrow">Vüsalə Qasımova · ${esc(common[lang].experience)} · ${esc(common[lang].location)}</p><h1>${esc(c.positioning)}</h1><p class="hero-text">${esc(c.intro)}</p><div class="hero-actions">${bookingButton(lang)}<a class="btn btn-white" href="${urlPath(lang, "bac")}">${esc(c.learn)}</a></div></div><div class="hero-photo-wrap"><img src="${imageUrl(images.hero)}" width="573" height="480" alt="Vüsalə Qasımova" fetchpriority="high" decoding="async"></div></div></section>${trustStrip(lang)}${bacFeature(lang)}${componentsSection(lang)}${planSection(lang)}${cta(lang)}</main>`;
}

function cta(lang) {
  const c = care[lang];
  return `<section class="section alt"><div class="container cta-box"><div><h2>${esc(c.discuss)}</h2><p>${esc(c.planIntro)}</p></div>${bookingButton(lang, c.book, "btn-white")}</div></section>`;
}

function sourceNote(lang, bac = false) {
  const c = care[lang];
  return `<section class="article-sources"><h2>${esc(c.sources)}</h2><p>${esc(c.sourceNote)}</p><p><a href="https://www.nice.org.uk/guidance/cg170/chapter/recommendations" target="_blank" rel="noopener noreferrer">NICE CG170</a>${bac ? ' · <a href="https://sinhros.ru/" target="_blank" rel="noopener noreferrer">SINKOR / SINKHRO-S</a>' : ""}</p></section>`;
}

function careSections(sections) {
  return sections.map(([title, text], index) => `<section id="topic-${index}"><h2>${esc(title)}</h2><p>${esc(text)}</p></section>`).join("");
}

function careAside(lang, sections, bac = false) {
  const c = care[lang];
  return `<aside class="article-cta care-aside"><img src="${imageUrl(images.hero)}" width="573" height="480" alt="Vüsalə Qasımova" loading="lazy"><h2>Vüsalə Qasımova</h2><p>${esc(common[lang].experience)} · ${esc(common[lang].location)}</p>${bookingButton(lang, bac ? c.suitable : c.discuss)}<nav aria-label="${esc(c.related)}">${sections.map(([title], index) => `<a href="#topic-${index}">${esc(title)}</a>`).join("")}</nav></aside>`;
}

function bacPage(lang) {
  const c = care[lang];
  const d = c.bac;
  return `<main id="main-content" class="bac-page"><section class="bac-hero"><img class="bac-hero-bg" src="${imageUrl(images.bac)}" width="1199" height="416" alt="${esc(d.title)}" fetchpriority="high"><div class="container bac-hero-content"><h1>${esc(d.title)}</h1><p>${esc(d.lead)}</p>${bookingButton(lang, c.suitable, "btn-white")}</div></section><section class="section"><div class="container article-layout"><div class="article-content">${careSections(d.sections)}${sourceNote(lang, true)}</div>${careAside(lang, d.sections, true)}</div></section>${componentsSection(lang)}${planSection(lang)}<section class="section faq-section"><div class="container"><div class="section-head"><h2>${esc(site[lang].bac.faqTitle)}</h2></div><div class="faq-list">${d.faq.map(([q, a], index) => `<article class="faq-item"><h3><button class="faq-q" type="button" aria-expanded="false" aria-controls="faq-${index}">${esc(q)}<span aria-hidden="true">＋</span></button></h3><div class="faq-a" id="faq-${index}" hidden><p>${esc(a)}</p></div></article>`).join("")}</div></div></section>${cta(lang)}</main>`;
}

function servicesPage(lang) {
  const c = care[lang];
  const other = site[lang].services.cards[3];
  return `<main id="main-content" class="services-page"><section class="section"><div class="container section-head"><h1>${esc(c.servicesTitle)}</h1><p>${esc(c.servicesIntro)}</p></div></section>${bacFeature(lang)}${componentsSection(lang)}<section class="section"><div class="container card"><h2>${esc(other.t)}</h2><p>${esc(({az: "Bu prosedur ayrıca peşəkar qiymətləndirmə, məqsədlərin və mümkün əks-göstərişlərin müzakirəsini tələb edir.", ru: "Эта процедура требует отдельной профессиональной оценки, обсуждения целей и возможных противопоказаний.", en: "This procedure requires separate professional assessment and discussion of goals and possible contraindications.", de: "Dieses Verfahren erfordert eine gesonderte fachliche Einschätzung sowie die Besprechung von Zielen und möglichen Kontraindikationen."})[lang])}</p></div></section>${planSection(lang)}${cta(lang)}</main>`;
}

function supportPage(lang, key) {
  const c = care[lang];
  const d = c.pages[key];
  return `<main id="main-content" class="article-page"><section class="section"><header class="container article-header"><p class="eyebrow">Vüsalə Qasımova · ${esc(common[lang].location)}</p><h1>${esc(d.title)}</h1><p class="article-lead">${esc(d.lead)}</p><div class="hero-actions">${bookingButton(lang, c.discuss)}</div></header><div class="container article-layout"><div class="article-content">${careSections(d.sections)}${sourceNote(lang)}</div>${careAside(lang, d.sections)}</div></section><section class="section"><div class="container"><div class="section-head"><h2>${esc(c.related)}</h2></div>${supportLinks(lang, true)}</div></section>${cta(lang)}</main>`;
}

function aboutPage(lang) {
  const d = site[lang].about;
  const timeline = (items) => `<ul class="timeline-list">${items.map((item) => { const parts = String(item).split("—"); return `<li><span class="year">${esc(parts.shift()?.trim())}</span><span>${esc(parts.join("—").trim())}</span></li>`; }).join("")}</ul>`;
  return `<main id="main-content" class="about-page"><section class="section about-journey"><div class="container section-head"><h1>${esc(d.title)}</h1><p>${esc(d.intro)}</p></div><div class="container about-grid"><div><h2>${esc(d.experienceTitle)}</h2>${timeline(d.experience)}<h2>${esc(d.educationTitle)}</h2>${timeline(d.education)}<a class="education-diploma-link" href="/img/certificates/diploma.jpg" target="_blank" rel="noopener"><img class="education-diploma" src="/img/certificates/diploma.jpg" width="1280" height="927" alt="Diploma of Vüsalə Qasımova" loading="lazy"></a></div><aside class="stats compact">${d.stats.map((stat) => `<div class="stat"><strong class="num">${esc(stat.n)}</strong><span>${esc(stat.l)}</span></div>`).join("")}</aside></div><div class="container certs-wrap"><h2>${esc(d.certsTitle)}</h2><p>${esc(d.certsIntro || "")}</p><div class="cert-grid">${Array.from({ length: 14 }, (_, index) => `<a class="cert-card" href="/img/certificates/photo_${index + 1}_2026-03-10_02-39-54.jpg" target="_blank" rel="noopener"><img class="cert-image" src="/img/certificates/photo_${index + 1}_2026-03-10_02-39-54.jpg" width="900" height="1200" alt="Certificate ${index + 1} — Vüsalə Qasımova" loading="lazy"></a>`).join("")}</div></div></section>${cta(lang)}</main>`;
}

function articlesHubPage(lang) {
  const ui = articleUi[lang];
  return `<main id="main-content" class="resources-page"><section class="section resources-hero"><div class="container section-head"><p class="eyebrow">${esc(ui.nav)}</p><h1>${esc(ui.hubTitle)}</h1><p>${esc(ui.hubIntro)}</p></div><div class="container resources-grid">${articles.map((article, index) => { const data = article[lang]; return `<article class="resource-card"><span class="resource-number">${String(index + 1).padStart(2, "0")}</span><h2><a href="${articleUrlPath(lang, article.slug)}">${esc(data.title)}</a></h2><p>${esc(data.description)}</p><a class="text-link" href="${articleUrlPath(lang, article.slug)}">${esc(ui.read)} →</a></article>`; }).join("")}</div></section></main>`;
}

function articlePage(lang, article) {
  const ui = articleUi[lang];
  const data = article[lang];
  const sourcesList = articleSources(article);
  return `<main id="main-content" class="article-page"><article class="section"><header class="container article-header"><a class="article-back" href="${urlPath(lang, "articles")}">← ${esc(ui.back)}</a><p class="eyebrow">${esc(ui.nav)}</p><h1>${esc(data.title)}</h1><p class="article-lead">${esc(data.lead)}</p><dl class="article-meta"><div><dt>${esc(ui.authorLabel)}</dt><dd>${esc(ui.author)}</dd></div><div><dt>${esc(ui.updatedLabel)}</dt><dd><time datetime="2026-08-21">${esc(ui.updated)}</time></dd></div><div><dt>${esc(ui.reviewedLabel)}</dt><dd>${esc(ui.reviewer)} · <time datetime="2026-08-21">${esc(ui.reviewedDate)}</time></dd></div></dl></header><div class="container article-layout"><div class="article-content">${data.sections.map((section) => `<section><h2>${esc(section.h)}</h2>${(section.p || []).map((paragraph) => `<p>${esc(paragraph)}</p>`).join("")}${section.bullets?.length ? list(section.bullets, "article-list") : ""}</section>`).join("")}<div class="article-notice"><p>${esc(ui.notice)}</p></div><section class="article-sources"><h2>${esc(ui.sources)}</h2><ol>${sourcesList.map((source) => `<li><a href="${esc(source.url)}" target="_blank" rel="noopener noreferrer">${esc(source.title)}</a></li>`).join("")}</ol></section></div><aside class="article-cta" aria-label="${esc(ui.ctaTitle)}"><h2>${esc(ui.ctaTitle)}</h2><p>${esc(ui.ctaText)}</p><button class="btn btn-primary book-appointment-trigger" type="button">${esc(ui.cta)}</button></aside></div></article></main>`;
}

function contactPage(lang) {
  const d = site[lang].contact;
  const info = contactInfo[lang];
  const whatsappUrl = `https://wa.me/994554770266?text=${encodeURIComponent(info.whatsapp)}`;
  return `<main id="main-content" class="contact-page"><section class="section"><div class="container two-cols contact-grid"><div><h1>${esc(d.title)}</h1><p>${esc(d.intro)}</p><address class="contact-details"><p><strong>${esc(d.phone)}</strong> <a href="tel:+994554770266">+994&nbsp;55&nbsp;477&nbsp;02&nbsp;66</a></p><p><strong>${esc(d.address)}</strong> Aşıq Molla Cümə 3, Baku 1075, Azerbaijan</p><p><strong>${esc(info.hoursLabel)}</strong> ${esc(info.hours)}</p><p><strong>${esc(info.landmarkLabel)}</strong> ${esc(info.landmark)}</p><p><strong>${esc(info.accessLabel)}</strong> ${esc(info.access)}</p><p>${esc(d.note)}</p></address><div class="contact-actions"><a class="btn btn-primary" href="${whatsappUrl}" target="_blank" rel="noopener">WhatsApp · +994 55 477 02 66</a><a class="text-link" href="https://maps.app.goo.gl/SyPMxCkYc1H4ZJ5g7" target="_blank" rel="noopener">${esc(d.openMap)} →</a></div><div class="map-card"><h2>${esc(d.locationTitle)}</h2><div class="map-frame"><iframe src="https://www.google.com/maps?q=A%C5%9F%C4%B1q%20Molla%20C%C3%BCm%C9%99%203,%20Baku%201075,%20Azerbaijan&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="${esc(d.locationTitle)}"></iframe></div></div></div><div class="card contact-form-card"><h2>${esc(site[lang].nav.book)}</h2>${form(lang, "contact")}</div></div></section></main>`;
}

function legalPage(lang, page) {
  const [title, intro, items] = legal[lang][page];
  return `<main id="main-content" class="section policy-page"><article class="container card policy-card"><h1>${esc(title)}</h1><p>${esc(intro)}</p>${list(items)}<p class="policy-updated">2026-08-21</p></article></main>`;
}

function pageBody(lang, page) {
  if (care[lang].pages[page]) return supportPage(lang, page);
  if (page === "home") return homePage(lang);
  if (page === "bac") return bacPage(lang);
  if (page === "services") return servicesPage(lang);
  if (page === "about") return aboutPage(lang);
  if (page === "articles") return articlesHubPage(lang);
  if (page === "contact") return contactPage(lang);
  return legalPage(lang, page);
}

for (const lang of LANGS) {
  for (const page of PAGES) {
    const file = outputPath(lang, page);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, `${head(lang, page)}\n${header(lang, page)}\n${pageBody(lang, page)}\n${footer(lang)}\n`, "utf8");
  }
  for (const article of articles) {
    const file = articleOutputPath(lang, article.slug);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, `${articleHead(lang, article)}\n${header(lang, "articles", article.slug)}\n${articlePage(lang, article)}\n${footer(lang)}\n`, "utf8");
  }
}

const pageSitemapUrls = LANGS.flatMap((lang) => PAGES.map((page) => `  <url>\n    <loc>${fullUrl(lang, page)}</loc>\n    ${LANGS.map((code) => `<xhtml:link rel="alternate" hreflang="${code}" href="${fullUrl(code, page)}"/>`).join("\n    ")}\n    <xhtml:link rel="alternate" hreflang="x-default" href="${fullUrl("az", page)}"/>\n  </url>`));
const articleSitemapUrls = LANGS.flatMap((lang) => articles.map((article) => `  <url>\n    <loc>${fullArticleUrl(lang, article.slug)}</loc>\n    ${LANGS.map((code) => `<xhtml:link rel="alternate" hreflang="${code}" href="${fullArticleUrl(code, article.slug)}"/>`).join("\n    ")}\n    <xhtml:link rel="alternate" hreflang="x-default" href="${fullArticleUrl("az", article.slug)}"/>\n  </url>`));
const sitemapUrls = [...pageSitemapUrls, ...articleSitemapUrls];
fs.writeFileSync(path.join(ROOT, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${sitemapUrls.join("\n")}\n</urlset>\n`, "utf8");
fs.writeFileSync(path.join(ROOT, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${DOMAIN}/sitemap.xml\n`, "utf8");
fs.writeFileSync(path.join(ROOT, "404.html"), `<!DOCTYPE html>
<html lang="az">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex">
  <title>Səhifə tapılmadı | Vüsalə Qasımova</title>
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="/styles.css?v=${ASSET_VERSION}">
</head>
<body><main id="main-content" class="section policy-page"><article class="container card policy-card"><p class="eyebrow">404</p><h1>Səhifə tapılmadı</h1><p>Страница не найдена · Page not found · Seite nicht gefunden</p><div class="hero-actions"><a class="btn btn-primary" href="/">AZ</a><a class="btn btn-ghost" href="/ru/">RU</a><a class="btn btn-ghost" href="/en/">EN</a><a class="btn btn-ghost" href="/de/">DE</a></div></article></main></body>
</html>\n`, "utf8");

console.log(`Generated ${LANGS.length * (PAGES.length + articles.length)} localized pages, 404.html, sitemap.xml and robots.txt.`);
