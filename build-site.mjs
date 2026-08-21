import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const ROOT = path.dirname(new URL(import.meta.url).pathname.replace(/^\/(.:)/, "$1"));
const DOMAIN = "https://drvusalagasimova.com";
const LANGS = ["az", "ru", "en", "de"];
const PAGES = ["home", "bac", "services", "about", "contact", "terms", "privacy", "cookies"];

const source = fs.readFileSync(path.join(ROOT, "script.js"), "utf8");
const contentSource = source.slice(source.indexOf("const site ="), source.indexOf("const links ="));
const sandbox = {};
vm.runInNewContext(`${contentSource}\nglobalThis.__site = site;`, sandbox);
const site = sandbox.__site;

Object.assign(site.az.home, {
  eyebrow: "Bakıda neyropsixoloji dəstək",
  title: "Bakıda neyropsixoloq\nVüsalə Qasımova",
  subtitle: "Uşaqlar və böyüklər üçün fərdi yanaşma",
  text: "Vüsalə Qasımova koqnitiv, inkişaf və emosional çətinliklərlə bağlı uşaqlar və böyüklərlə işləyir. İlkin konsultasiya və qiymətləndirmədən sonra fərdi dəstək planı müzakirə olunur.",
  approachDetailText: "Hər pasiyentin vəziyyəti fərqlidir. İş şəxsi söhbət, anamnez və neyropsixoloji qiymətləndirmə ilə başlayır. Müasir dəstək üsulları kompleks yanaşmanı tamamlaya bilər, lakin tibbi diaqnostikanı və zəruri müalicəni əvəz etmir.",
  integrationText: "Bioakustik korreksiya (BAK) EEG siqnallarının real vaxtda akustik siqnallara çevrildiyi qeyri-invaziv üsuldur. Metodun konkret vəziyyətdə uyğunluğu, məqsədləri və məhdudiyyətləri konsultasiya zamanı fərdi şəkildə qiymətləndirilir.",
  whatText: "Bioakustik korreksiya zamanı EEG məlumatları real vaxtda eşidilə bilən siqnallara çevrilir. Prosedur qeyri-invazivdir. Uyğunluq, mümkün məqsədlər və məhdudiyyətlər seanslardan əvvəl mütəxəssislə müzakirə olunur."
});
Object.assign(site.az.bac, {
  intro: site.az.home.whatText,
  howText: "Sensorlar beynin elektrik aktivliyini qeyd edir və kompüter sistemi EEG məlumatlarını eşidilə bilən siqnallara çevirir. Metod daha geniş dəstək və ya reabilitasiya planının bir hissəsi kimi nəzərdən keçirilə bilər."
});
site.az.bac.faq[1].a = "Dəyişikliklərin vaxtı və dərəcəsi fərdidir. Dinamika razılaşdırılmış kurs zamanı və sonrasında mütəxəssis tərəfindən qiymətləndirilir.";

Object.assign(site.ru.home, {
  eyebrow: "Нейропсихологическая помощь в Баку",
  title: "Нейропсихолог в Баку\nВусала Касимова",
  subtitle: "Индивидуальный подход для детей и взрослых",
  text: "Вусала Касимова работает с детьми и взрослыми по вопросам развития, внимания, памяти, поведения и эмоционального состояния. После первичной консультации и оценки обсуждается индивидуальный план поддержки.",
  approachDetailText: "Каждая ситуация индивидуальна. Работа начинается с беседы, сбора анамнеза и нейропсихологической оценки. Современные поддерживающие методы могут дополнять комплексную помощь, но не заменяют медицинскую диагностику и необходимое лечение.",
  integrationText: "Биоакустическая коррекция (БАК) — неинвазивный метод, при котором сигналы ЭЭГ преобразуются в звук в реальном времени. Цели, возможная польза, ограничения и уместность метода в конкретной ситуации обсуждаются на консультации.",
  whatText: "При биоакустической коррекции данные ЭЭГ преобразуются в слышимые сигналы в реальном времени. Процедура неинвазивна. Возможные цели, ограничения и индивидуальная уместность обсуждаются со специалистом до начала курса."
});
Object.assign(site.ru.bac, {
  intro: site.ru.home.whatText,
  howText: "Датчики регистрируют электрическую активность мозга, а компьютерная система преобразует данные ЭЭГ в слышимые сигналы. Метод может рассматриваться как часть более широкого плана поддержки или реабилитации."
});
site.ru.bac.faq[1].a = "Сроки и выраженность изменений индивидуальны. Динамика оценивается специалистом во время и после согласованного курса.";

Object.assign(site.en.home, {
  eyebrow: "Neuropsychological support in Baku",
  title: "Neuropsychologist in Baku\nVusala Gasimova",
  subtitle: "An individual approach for children and adults",
  text: "Vusala Gasimova works with children and adults on developmental, cognitive, behavioural and emotional concerns. An individual support plan is discussed after an initial consultation and assessment.",
  approachDetailText: "Every situation is different. Work begins with a conversation, relevant history and neuropsychological assessment. Modern supportive methods may complement a broader care plan, but they do not replace medical diagnosis or necessary treatment.",
  integrationText: "Bioacoustic correction (BAC) is a non-invasive method that converts EEG signals into sound in real time. Its goals, possible role, limitations and suitability for an individual situation are discussed during consultation.",
  whatText: "During bioacoustic correction, EEG data is converted into audible signals in real time. The procedure is non-invasive. Possible goals, limitations and individual suitability are discussed before a course begins."
});
Object.assign(site.en.bac, {
  intro: site.en.home.whatText,
  howText: "Sensors record electrical brain activity and a computer system converts the EEG data into audible signals. The method may be considered as one part of a broader support or rehabilitation plan."
});
site.en.bac.faq[1].a = "The timing and degree of change vary. Progress is reviewed by the specialist during and after the agreed course.";

site.az.services.cards[0].d = "Koqnitiv, emosional və davranış funksiyalarının qiymətləndirilməsi fərdi tövsiyələrin hazırlanmasına kömək edir. Qiymətləndirmə diaqnoz qoymaq səlahiyyəti olan həkimin müayinəsini əvəz etmir.";
site.az.services.cards[1].d = "EEG siqnallarının real vaxtda səsə çevrildiyi qeyri-invaziv üsul. Uyğunluq, məqsədlər və məhdudiyyətlər əvvəlcədən fərdi qaydada qiymətləndirilir.";
site.az.services.cards[3].d = "Yalnız peşəkar qiymətləndirmədən, məqsədlərin və mümkün əks-göstərişlərin müzakirəsindən sonra nəzərdən keçirilən dəstək üsulu.";
site.ru.services.cards[0].d = "Оценка когнитивных, эмоциональных и поведенческих функций помогает подготовить индивидуальные рекомендации. Она не заменяет обследование врача, уполномоченного ставить медицинский диагноз.";
site.ru.services.cards[1].d = "Неинвазивный метод преобразования сигналов ЭЭГ в звук в реальном времени. Уместность, цели и ограничения оцениваются индивидуально до начала курса.";
site.ru.services.cards[3].d = "Поддерживающий метод, который рассматривается только после профессиональной оценки, обсуждения целей и возможных противопоказаний.";
site.en.services.cards[0].d = "Assessment of cognitive, emotional and behavioural functions helps inform individual recommendations. It does not replace examination by a clinician authorised to make a medical diagnosis.";
site.en.services.cards[1].d = "A non-invasive method that converts EEG signals into sound in real time. Suitability, goals and limitations are assessed individually before a course begins.";
site.en.services.cards[3].d = "A supportive method considered only after professional assessment and discussion of goals and possible contraindications.";

const pageFile = {
  home: "index.html",
  bac: "bac-therapy.html",
  services: "services.html",
  about: "about.html",
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
    contact: ["Termin bei einer Neuropsychologin in Baku | Kontakt", "Termin bei Vüsalə Qasımova in Baku anfragen. Telefon, WhatsApp, Praxisadresse und Google-Maps-Route."],
    terms: ["Nutzungsbedingungen | Vüsalə Qasımova", "Nutzungsbedingungen für drvusalagasimova.com und wichtige Hinweise zu Gesundheitsinformationen."],
    privacy: ["Datenschutzerklärung | Vüsalə Qasımova", "Informationen zur Verarbeitung von Name, Telefonnummer und Anfrage bei der Terminvereinbarung."],
    cookies: ["Cookie-Richtlinie | Vüsalə Qasımova", "Informationen zu Browserspeicher und Drittanbieterdiensten auf drvusalagasimova.com."]
  }
};

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
const imageUrl = (entry) => `/img/${encodeURI(entry[0])}`;
const lines = (text) => esc(text).replace(/\n/g, "<br>");
const list = (items, cls = "") => `<ul${cls ? ` class="${cls}"` : ""}>${items.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>`;

function schema(lang, page) {
  const graph = [
    { "@type": "WebSite", "@id": `${DOMAIN}/#website`, url: DOMAIN, name: "Vüsalə Qasımova", inLanguage: lang },
    { "@type": "MedicalBusiness", "@id": `${DOMAIN}/#practice`, name: "Vüsalə Qasımova — Neuropsychology", url: fullUrl(lang, "home"), telephone: "+994554770266", image: `${DOMAIN}${imageUrl(images.hero)}`, address: { "@type": "PostalAddress", streetAddress: "Aşıq Molla Cümə 3", addressLocality: "Baku", postalCode: "AZ1075", addressCountry: "AZ" }, areaServed: { "@type": "City", name: "Baku" }, sameAs: ["https://www.instagram.com/neyropsixoloq_qasimova_vusale"] },
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
  <link rel="stylesheet" href="/styles.css">
  <script type="application/ld+json">${schema(lang, page)}</script>
  <script src="/client.js" defer></script>
</head>`;
}

function header(lang, page) {
  const t = site[lang];
  const navPages = ["home", "bac", "services", "about", "contact"];
  return `<body data-static-site="true" data-lang="${lang}" data-page="${page}" data-success="${esc(common[lang].status)}" data-error="${esc(common[lang].error)}">
  <a class="skip-link" href="#main-content">${esc(common[lang].skip)}</a>
  <header class="site-header">
    <div class="container nav-wrap">
      <a class="brand" href="${urlPath(lang, "home")}" aria-label="Vüsalə Qasımova">
        <img src="/img/logo.png" width="210" height="39" alt="Vüsalə Qasımova">
      </a>
      <nav class="main-nav" aria-label="${esc(t.nav.home)}">
        ${navPages.map((item) => `<a href="${urlPath(lang, item)}"${item === page ? ' class="active" aria-current="page"' : ""}>${esc(t.nav[item])}</a>`).join("")}
      </nav>
      <div class="nav-right">
        <nav class="lang-switch" aria-label="Language">
          ${LANGS.map((code) => `<a href="${urlPath(code, page)}" hreflang="${code}" lang="${code}"${code === lang ? ' class="active" aria-current="true"' : ""}>${code.toUpperCase()}</a>`).join("")}
        </nav>
        <button class="btn btn-primary book-appointment-trigger" type="button">${esc(t.nav.book)}</button>
      </div>
    </div>
  </header>`;
}

function footer(lang) {
  const t = site[lang];
  return `<footer class="site-footer">
    <div class="container footer-grid">
      <div><strong>Vüsalə Qasımova</strong><p>${esc(common[lang].info)}</p></div>
      <div class="footer-links-main">
        <a href="${urlPath(lang, "terms")}">${esc(t.footer.terms)}</a>
        <a href="${urlPath(lang, "privacy")}">${esc(t.footer.privacy)}</a>
        <a href="${urlPath(lang, "cookies")}">${esc(t.footer.cookies)}</a>
        <a href="https://www.instagram.com/neyropsixoloq_qasimova_vusale" target="_blank" rel="noopener">Instagram</a>
      </div>
      <p>${esc(t.footer.copy)}</p>
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

function homePage(lang) {
  const t = site[lang];
  const d = t.home;
  return `<main id="main-content" class="home-page">
    <section class="hero"><div class="container hero-grid"><div class="hero-content"><p class="eyebrow">${esc(d.eyebrow)}</p><h1>${lines(d.title)}</h1><p class="hero-subtitle">${esc(d.subtitle || "")}</p><p class="hero-text">${esc(d.text)}</p><div class="hero-actions"><button class="btn btn-primary book-appointment-trigger" type="button">${esc(d.cta)}</button><a class="text-link" href="${urlPath(lang, "services")}">${esc(d.more)} →</a></div></div><div class="hero-photo-wrap"><img src="${imageUrl(images.hero)}" width="573" height="480" alt="Vüsalə Qasımova, neuropsychologist in Baku" fetchpriority="high" decoding="async"></div></div></section>
    ${trustStrip(lang)}
    <section class="section approach-section"><div class="container section-head"><h2>${esc(d.approachTitle)}</h2><p>${esc(d.approachText)}</p></div><div class="container feature-grid"><div class="image-frame large-card"><img src="${imageUrl(images.approach)}" width="572" height="440" alt="${esc(d.approachDetailTitle)}" loading="lazy" decoding="async"></div><div class="feature-copy"><h3>${esc(d.approachDetailTitle)}</h3><p>${esc(d.approachDetailText)}</p></div></div><div class="container feature-grid reverse"><div class="feature-copy"><h3>${esc(d.integrationTitle)}</h3><p>${esc(d.integrationText)}</p><a class="text-link" href="${urlPath(lang, "bac")}">${esc(d.integrationMore)} →</a></div><div class="image-frame large-card"><img src="${imageUrl(images.integration)}" width="572" height="440" alt="${esc(d.integrationTitle)}" loading="lazy" decoding="async"></div></div></section>
    <section class="section what-section"><div class="container section-head"><h2>${esc(d.whatTitle)}</h2><p>${esc(d.whatSubtitle || "")}</p></div><div class="container what-card"><div class="image-frame wide"><img src="${imageUrl(images.bac)}" width="1199" height="416" alt="${esc(d.whatTitle)}" loading="lazy" decoding="async"></div><p>${esc(d.whatText)}</p></div></section>
    <section class="section how-section"><div class="container section-head"><h2>${esc(d.howTitle)}</h2></div><div class="container steps">${d.steps.map((step, index) => `<article class="step"><img class="step-image" src="${imageUrl(images.steps[index])}" width="${images.steps[index][1]}" height="${images.steps[index][2]}" alt="${esc(step.t)}" loading="lazy"><span>${esc(step.t)}</span><p>${esc(step.d)}</p></article>`).join("")}</div></section>
    ${cta(lang)}
  </main>`;
}

function cta(lang) {
  const d = site[lang].home;
  return `<section class="section alt"><div class="container cta-box"><div><h2>${esc(d.transformTitle)}</h2><p>${esc(d.transformText)}</p></div><button class="btn btn-white book-appointment-trigger" type="button">${esc(d.transformCta)}</button></div></section>`;
}

function bacPage(lang) {
  const d = site[lang].bac;
  return `<main id="main-content" class="bac-page"><section class="bac-hero"><img class="bac-hero-bg" src="${imageUrl(images.bac)}" width="1199" height="416" alt="${esc(d.title)}" fetchpriority="high"><div class="container bac-hero-content"><h1>${esc(d.title)}</h1><p>${esc(d.intro)}</p><button class="btn btn-white book-appointment-trigger" type="button">${esc(site[lang].nav.book)}</button></div></section><section class="section"><div class="container section-head"><h2>${esc(d.howTitle)}</h2><p>${esc(d.howText)}</p></div><div class="container steps">${d.steps.map((step, index) => `<article class="step"><img class="step-image" src="${imageUrl(images.steps[index])}" width="${images.steps[index][1]}" height="${images.steps[index][2]}" alt="${esc(step.t)}" loading="lazy"><span>${esc(step.t)}</span><p>${esc(step.d)}</p></article>`).join("")}</div></section><section class="section who-section"><div class="container section-head"><h2>${esc(d.whoTitle)}</h2></div><div class="container two-cols"><article class="card"><h3>${esc(d.childrenTitle)}</h3>${list(d.children)}</article><article class="card"><h3>${esc(d.adultsTitle)}</h3>${list(d.adults)}</article></div></section><section class="section faq-section"><div class="container"><div class="section-head"><h2>${esc(d.faqTitle)}</h2></div><div class="faq-list">${d.faq.map((item, index) => `<article class="faq-item"><h3><button class="faq-q" type="button" aria-expanded="false" aria-controls="faq-${index}">${esc(item.q)}<span aria-hidden="true">＋</span></button></h3><div class="faq-a" id="faq-${index}" hidden><p>${esc(item.a)}</p></div></article>`).join("")}</div></div></section>${cta(lang)}</main>`;
}

function servicesPage(lang) {
  const d = site[lang].services;
  const serviceImages = [images.approach, images.bac, images.psychocorrection, images.integration];
  return `<main id="main-content" class="services-page"><section class="section services-hero"><div class="container section-head"><h1>${esc(d.title)}</h1><p>${esc(d.intro)}</p></div><div class="container services-grid">${d.cards.map((card, index) => `<article class="service-card"><img class="service-photo" src="${imageUrl(serviceImages[index])}" width="${serviceImages[index][1]}" height="${serviceImages[index][2]}" alt="${esc(card.t)}" loading="lazy"><div class="service-copy"><h2>${esc(card.t)}</h2><p>${lines(card.d)}</p></div></article>`).join("")}</div></section>${cta(lang)}</main>`;
}

function aboutPage(lang) {
  const d = site[lang].about;
  const timeline = (items) => `<ul class="timeline-list">${items.map((item) => { const parts = String(item).split("—"); return `<li><span class="year">${esc(parts.shift()?.trim())}</span><span>${esc(parts.join("—").trim())}</span></li>`; }).join("")}</ul>`;
  return `<main id="main-content" class="about-page"><section class="section about-journey"><div class="container section-head"><h1>${esc(d.title)}</h1><p>${esc(d.intro)}</p></div><div class="container about-grid"><div><h2>${esc(d.experienceTitle)}</h2>${timeline(d.experience)}<h2>${esc(d.educationTitle)}</h2>${timeline(d.education)}<img class="education-diploma" src="/img/certificates/diploma.jpg" width="927" height="1280" alt="Diploma of Vüsalə Qasımova" loading="lazy"></div><aside class="stats compact">${d.stats.map((stat) => `<div class="stat"><strong class="num">${esc(stat.n)}</strong><span>${esc(stat.l)}</span></div>`).join("")}</aside></div><div class="container certs-wrap"><h2>${esc(d.certsTitle)}</h2><p>${esc(d.certsIntro || "")}</p><div class="cert-grid">${Array.from({ length: 14 }, (_, index) => `<a class="cert-card" href="/img/certificates/photo_${index + 1}_2026-03-10_02-39-54.jpg" target="_blank" rel="noopener"><img class="cert-image" src="/img/certificates/photo_${index + 1}_2026-03-10_02-39-54.jpg" width="900" height="1200" alt="Certificate ${index + 1} — Vüsalə Qasımova" loading="lazy"></a>`).join("")}</div></div></section>${cta(lang)}</main>`;
}

function contactPage(lang) {
  const d = site[lang].contact;
  return `<main id="main-content" class="contact-page"><section class="section"><div class="container two-cols contact-grid"><div><h1>${esc(d.title)}</h1><p>${esc(d.intro)}</p><address class="contact-details"><p><strong>${esc(d.phone)}</strong> <a href="tel:+994554770266">+994&nbsp;55&nbsp;477&nbsp;02&nbsp;66</a></p><p><strong>${esc(d.address)}</strong> Aşıq Molla Cümə 3, Baku 1075, Azerbaijan</p><p>${esc(d.note)}</p></address><div class="contact-actions"><a class="btn btn-ghost" href="https://wa.me/994554770266" target="_blank" rel="noopener">WhatsApp</a><a class="text-link" href="https://maps.app.goo.gl/SyPMxCkYc1H4ZJ5g7" target="_blank" rel="noopener">${esc(d.openMap)} →</a></div><div class="map-card"><h2>${esc(d.locationTitle)}</h2><div class="map-frame"><iframe src="https://www.google.com/maps?q=A%C5%9F%C4%B1q%20Molla%20C%C3%BCm%C9%99%203,%20Baku%201075,%20Azerbaijan&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="${esc(d.locationTitle)}"></iframe></div></div></div><div class="card contact-form-card"><h2>${esc(site[lang].nav.book)}</h2>${form(lang, "contact")}</div></div></section></main>`;
}

function legalPage(lang, page) {
  const [title, intro, items] = legal[lang][page];
  return `<main id="main-content" class="section policy-page"><article class="container card policy-card"><h1>${esc(title)}</h1><p>${esc(intro)}</p>${list(items)}<p class="policy-updated">2026-08-21</p></article></main>`;
}

function pageBody(lang, page) {
  if (page === "home") return homePage(lang);
  if (page === "bac") return bacPage(lang);
  if (page === "services") return servicesPage(lang);
  if (page === "about") return aboutPage(lang);
  if (page === "contact") return contactPage(lang);
  return legalPage(lang, page);
}

for (const lang of LANGS) {
  for (const page of PAGES) {
    const file = outputPath(lang, page);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, `${head(lang, page)}\n${header(lang, page)}\n${pageBody(lang, page)}\n${footer(lang)}\n`, "utf8");
  }
}

const sitemapUrls = LANGS.flatMap((lang) => PAGES.map((page) => `  <url>\n    <loc>${fullUrl(lang, page)}</loc>\n    ${LANGS.map((code) => `<xhtml:link rel="alternate" hreflang="${code}" href="${fullUrl(code, page)}"/>`).join("\n    ")}\n    <xhtml:link rel="alternate" hreflang="x-default" href="${fullUrl("az", page)}"/>\n  </url>`));
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
  <link rel="stylesheet" href="/styles.css">
</head>
<body><main id="main-content" class="section policy-page"><article class="container card policy-card"><p class="eyebrow">404</p><h1>Səhifə tapılmadı</h1><p>Страница не найдена · Page not found · Seite nicht gefunden</p><div class="hero-actions"><a class="btn btn-primary" href="/">AZ</a><a class="btn btn-ghost" href="/ru/">RU</a><a class="btn btn-ghost" href="/en/">EN</a><a class="btn btn-ghost" href="/de/">DE</a></div></article></main></body>
</html>\n`, "utf8");

console.log(`Generated ${LANGS.length * PAGES.length} localized pages, 404.html, sitemap.xml and robots.txt.`);
