export const articleUi = {
  az: {
    nav: "Faydalı materiallar",
    hubTitle: "Neyropsixologiya haqqında faydalı materiallar",
    hubIntro: "Valideynlər və böyüklər üçün qiymətləndirmə, diqqət, inkişaf və bioakustik korreksiya barədə aydın, mənbələrə əsaslanan izahlar.",
    read: "Oxumaq",
    back: "Bütün materiallar",
    authorLabel: "Materialı hazırlayan",
    author: "Vüsalə Qasımova saytının redaksiyası",
    updatedLabel: "Mənbələr yoxlanılıb",
    updated: "21 avqust 2026",
    sources: "Mənbələr",
    notice: "Bu material ümumi məlumat üçündür və fərdi diaqnostikanı, həkim konsultasiyasını və ya təcili tibbi yardımı əvəz etmir.",
    ctaTitle: "Fərdi vəziyyətinizi müzakirə edin",
    ctaText: "İlkin konsultasiyada müraciətin məqsədini dəqiqləşdirir və uyğun növbəti addımları müzakirə edirik.",
    cta: "Konsultasiya üçün yazıl"
  },
  ru: {
    nav: "Полезные материалы",
    hubTitle: "Полезные материалы о нейропсихологии",
    hubIntro: "Понятные и основанные на источниках материалы для родителей и взрослых: оценка, внимание, развитие и биоакустическая коррекция.",
    read: "Читать",
    back: "Все материалы",
    authorLabel: "Материал подготовлен",
    author: "Редакцией сайта Вусалы Касимовой",
    updatedLabel: "Источники проверены",
    updated: "21 августа 2026",
    sources: "Источники",
    notice: "Материал носит общий информационный характер и не заменяет индивидуальную диагностику, консультацию врача или экстренную помощь.",
    ctaTitle: "Обсудите вашу ситуацию индивидуально",
    ctaText: "На первичной консультации мы уточним запрос и обсудим подходящие следующие шаги.",
    cta: "Записаться на консультацию"
  },
  en: {
    nav: "Resources",
    hubTitle: "Practical neuropsychology resources",
    hubIntro: "Clear, source-based guidance for parents and adults on assessment, attention, development and bioacoustic correction.",
    read: "Read article",
    back: "All resources",
    authorLabel: "Prepared by",
    author: "The Vusala Gasimova website editorial team",
    updatedLabel: "Sources checked",
    updated: "21 August 2026",
    sources: "Sources",
    notice: "This material is for general information and does not replace individual assessment, medical advice or emergency care.",
    ctaTitle: "Discuss your situation individually",
    ctaText: "An initial consultation helps clarify your concerns and identify suitable next steps.",
    cta: "Request a consultation"
  },
  de: {
    nav: "Ratgeber",
    hubTitle: "Praktische Informationen zur Neuropsychologie",
    hubIntro: "Verständliche, quellenbasierte Informationen für Eltern und Erwachsene zu Diagnostik, Aufmerksamkeit, Entwicklung und bioakustischer Korrektur.",
    read: "Artikel lesen",
    back: "Alle Ratgeber",
    authorLabel: "Erstellt von",
    author: "Redaktion der Website von Vüsalə Qasımova",
    updatedLabel: "Quellen geprüft",
    updated: "21. August 2026",
    sources: "Quellen",
    notice: "Dieser Beitrag dient der allgemeinen Information und ersetzt keine individuelle Diagnostik, ärztliche Beratung oder Notfallversorgung.",
    ctaTitle: "Besprechen Sie Ihre Situation persönlich",
    ctaText: "Im Erstgespräch klären wir Ihr Anliegen und besprechen geeignete nächste Schritte.",
    cta: "Erstgespräch anfragen"
  }
};

const sources = {
  cdcDevelopment: { title: "CDC — Developmental Monitoring and Screening", url: "https://www.cdc.gov/act-early/about/developmental-monitoring-and-screening.html" },
  cdcConcerned: { title: "CDC — Concerned About Your Child's Development?", url: "https://www.cdc.gov/act-early/families/concerned.html" },
  aacnEvaluation: { title: "American Academy of Clinical Neuropsychology — What is a Neuropsychological Evaluation?", url: "https://theaacn.org/what-is-a-neuropsychological-evaluation/" },
  cdcAdhd: { title: "CDC — Diagnosing ADHD", url: "https://www.cdc.gov/adhd/diagnosis/index.html" },
  aapAdhd: { title: "American Academy of Pediatrics — ADHD Clinical Practice Guideline", url: "https://publications.aap.org/pediatrics/article/144/4/e20192528/81590/Clinical-Practice-Guideline-for-the-Diagnosis" },
  nindsTbi: { title: "NINDS — Traumatic Brain Injury", url: "https://www.ninds.nih.gov/health-information/disorders/traumatic-brain-injury-tbi" },
  deviceRegistry: { title: "Roszdravnadzor — SINKHRO-S 8K medical device registration documentation", url: "https://elk.roszdravnadzor.gov.ru/public-gateway/med-product/api/v1/files/download-by-path-public?id=8775637&path=med_product%2Fmed_products_new_res_files%2F1721714404.10565-701264.pdf" },
  manufacturerMethod: { title: "SINKOR — SINKHRO-S method and equipment", url: "https://sinhros.ru/" },
  manufacturerSafety: { title: "SINKOR — Indications and contraindications", url: "https://sinhros.ru/metod/pokazaniya/" },
  auditoryFeedback: { title: "PubMed — Comparison of Visual and Auditory Modalities for Upper-Alpha EEG Neurofeedback", url: "https://pubmed.ncbi.nlm.nih.gov/31947205/" }
};

export const articles = [
  {
    slug: "when-child-needs-neuropsychologist",
    sourceKeys: ["cdcDevelopment", "cdcConcerned"],
    az: {
      title: "Uşağa nə vaxt neyropsixoloq konsultasiyası lazım ola bilər?",
      description: "İnkişaf, diqqət, öyrənmə və davranışla bağlı hansı müşahidələrin mütəxəssislə müzakirə edilməli olduğunu izah edən valideyn bələdçisi.",
      lead: "Tək bir əlamət diaqnoz demək deyil. Əsas səbəb gündəlik həyatda davamlı çətinlik, bacarıqların geriləməsi və ya valideynin, müəllimin yaxud həkimin narahatlığıdır.",
      sections: [
        { h: "Diqqət tələb edən müşahidələr", p: ["Uşaq yaşına uyğun bacarıqları mənimsəməkdə çətinlik çəkirsə, əvvəl əldə etdiyi bacarığı itirirsə və ya nitq, oyun, hərəkət, davranış və öyrənmə ilə bağlı davamlı narahatlıq varsa, bunu pediatr və uyğun mütəxəssislə müzakirə etmək məqsədəuyğundur."], bullets: ["təlimatı izləmək və tapşırığı bitirmək çətinliyi", "nitq və ya məktəb bacarıqlarında nəzərəçarpan gecikmə", "yaddaş, planlama və özünüidarə çətinlikləri", "evdə və məktəbdə gündəlik həyata təsir edən davranış dəyişiklikləri", "əvvəl qazanılmış bacarıqların itirilməsi"] },
        { h: "Qiymətləndirmənin məqsədi", p: ["Məqsəd uşağa etiket yapışdırmaq deyil. Qiymətləndirmə güclü tərəfləri, çətinlikləri və əlavə tibbi, loqopedik, psixoloji və ya pedaqoji müayinəyə ehtiyacı dəqiqləşdirməyə kömək edir."] },
        { h: "Nə vaxt gözləməmək lazımdır", p: ["Bacarıqların geriləməsi, qıcolma, kəskin davranış dəyişikliyi, şüurun pozulması və ya travmadan sonrakı yeni əlamətlər olduqda əvvəlcə təcili və ya profil üzrə tibbi yardım tələb oluna bilər."] }
      ]
    },
    ru: {
      title: "Когда ребёнку может понадобиться консультация нейропсихолога",
      description: "Ориентиры для родителей: какие трудности развития, внимания, обучения и поведения стоит обсудить со специалистом.",
      lead: "Один признак сам по себе не означает диагноз. Поводом обратиться обычно становится устойчивая трудность, потеря навыка или беспокойство родителей, учителя либо врача.",
      sections: [
        { h: "Наблюдения, которые стоит обсудить", p: ["Если ребёнку трудно осваивать ожидаемые для возраста навыки, он теряет уже приобретённые умения или трудности заметно мешают повседневной жизни, разумно обсудить это с педиатром и профильным специалистом."], bullets: ["трудно удерживать инструкцию и завершать задание", "заметная задержка речи или школьных навыков", "трудности памяти, планирования и самоконтроля", "поведение мешает жизни дома и обучению", "утрата ранее освоенных навыков"] },
        { h: "Зачем нужна оценка", p: ["Цель не в том, чтобы навесить ярлык. Оценка помогает увидеть сильные стороны, уточнить характер трудностей и понять, нужны ли дополнительные медицинские, логопедические, психологические или педагогические обследования."] },
        { h: "Когда не следует ждать", p: ["При потере навыков, судорогах, резком изменении поведения или сознания, а также новых симптомах после травмы сначала может потребоваться срочная медицинская помощь."] }
      ]
    },
    en: {
      title: "When might a child need a neuropsychology consultation?",
      description: "A parent-friendly guide to developmental, attention, learning and behaviour concerns that may warrant professional discussion.",
      lead: "A single sign does not establish a diagnosis. A consultation is usually considered when a difficulty persists, a skill is lost, or a parent, teacher or clinician is concerned.",
      sections: [
        { h: "Observations worth discussing", p: ["Talk with a paediatrician and an appropriate specialist when expected skills are difficult to acquire, previously gained skills are lost, or challenges clearly affect everyday life."], bullets: ["difficulty holding instructions and finishing tasks", "noticeable language or school-skill delay", "memory, planning or self-regulation difficulties", "behaviour that disrupts home or school life", "loss of a previously acquired skill"] },
        { h: "What assessment is for", p: ["Assessment is not about attaching a label. It helps identify strengths, clarify the nature of a difficulty and decide whether medical, speech-language, psychological or educational assessment is also needed."] },
        { h: "When not to wait", p: ["Loss of skills, seizures, sudden changes in behaviour or consciousness, and new symptoms after an injury may require urgent medical assessment first."] }
      ]
    },
    de: {
      title: "Wann kann eine neuropsychologische Beratung für ein Kind sinnvoll sein?",
      description: "Orientierung für Eltern zu Entwicklung, Aufmerksamkeit, Lernen und Verhalten.",
      lead: "Ein einzelnes Zeichen ist keine Diagnose. Anlass für eine Beratung sind meist anhaltende Schwierigkeiten, ein Verlust von Fähigkeiten oder Sorgen von Eltern, Lehrkräften oder Ärzten.",
      sections: [
        { h: "Beobachtungen, die man ansprechen sollte", p: ["Sprechen Sie mit dem Kinderarzt und einer geeigneten Fachperson, wenn altersgemäße Fähigkeiten schwer erworben werden, bereits erworbene Fähigkeiten verloren gehen oder Schwierigkeiten den Alltag deutlich beeinträchtigen."], bullets: ["Anweisungen behalten und Aufgaben beenden fällt schwer", "auffällige Verzögerung von Sprache oder Schulfertigkeiten", "Schwierigkeiten mit Gedächtnis, Planung oder Selbststeuerung", "Verhalten beeinträchtigt Familie oder Schule", "Verlust bereits erworbener Fähigkeiten"] },
        { h: "Ziel der Abklärung", p: ["Es geht nicht darum, vorschnell ein Etikett zu vergeben. Die Abklärung zeigt Stärken, präzisiert Schwierigkeiten und klärt, ob medizinische, sprachtherapeutische, psychologische oder pädagogische Untersuchungen nötig sind."] },
        { h: "Wann man nicht abwarten sollte", p: ["Bei Fähigkeitsverlust, Krampfanfällen, plötzlicher Verhaltens- oder Bewusstseinsänderung sowie neuen Symptomen nach einer Verletzung ist zuerst eine dringende medizinische Abklärung nötig."] }
      ]
    }
  },
  {
    slug: "how-neuropsychological-assessment-works",
    sourceKeys: ["aacnEvaluation", "cdcDevelopment"],
    az: {
      title: "Neyropsixoloji qiymətləndirmə necə keçir?",
      description: "İlkin söhbətdən nəticələrin izahına qədər neyropsixoloji qiymətləndirmənin mərhələləri.",
      lead: "Qiymətləndirmə bir testdən ibarət deyil. Söhbət, tarixçə, müşahidə və standartlaşdırılmış tapşırıqlar birlikdə şərh olunur.",
      sections: [
        { h: "1. Müraciətin dəqiqləşdirilməsi", p: ["Mütəxəssis inkişaf və sağlamlıq tarixçəsini, gündəlik çətinlikləri, məktəb və ailənin müşahidələrini öyrənir. Əsas sual əvvəlcədən müəyyən edilir: diqqət, yaddaş, öyrənmə, davranış, nitq və ya başqa sahə."] },
        { h: "2. Tapşırıqlar və müşahidə", p: ["Yaşa və müraciətə uyğun tapşırıqlar diqqət, yaddaş, dil, vizual-məkan bacarıqları və icraedici funksiyalar haqqında məlumat verir. Nəticələr uşağın yorğunluğu, motivasiyası və dil təcrübəsi nəzərə alınaraq qiymətləndirilir."] },
        { h: "3. Nəticə və tövsiyələr", p: ["Nəticə güclü və çətin sahələri, əlavə müayinəyə ehtiyacı və gündəlik dəstək üçün praktik addımları izah etməlidir. Neyropsixoloji qiymətləndirmə hər zaman tibbi diaqnoz qoymaq demək deyil."] }
      ]
    },
    ru: {
      title: "Как проходит нейропсихологическая диагностика",
      description: "Основные этапы нейропсихологической оценки: беседа, задания, наблюдение и обсуждение рекомендаций.",
      lead: "Это не один тест и не экзамен. Специалист сопоставляет историю развития, наблюдение и результаты стандартизированных заданий.",
      sections: [
        { h: "1. Уточнение запроса", p: ["Обсуждаются развитие и здоровье, повседневные трудности, наблюдения семьи и школы. Заранее формулируется главный вопрос: внимание, память, обучение, поведение, речь или другая область."] },
        { h: "2. Задания и наблюдение", p: ["Подобранные по возрасту задания дают информацию о внимании, памяти, речи, зрительно-пространственных и исполнительных функциях. При интерпретации учитывают усталость, мотивацию, язык и условия проведения."] },
        { h: "3. Обсуждение результата", p: ["Итог должен объяснять сильные и трудные стороны, необходимость дополнительных обследований и практические шаги для дома или обучения. Нейропсихологическая оценка не всегда равна постановке медицинского диагноза."] }
      ]
    },
    en: {
      title: "What happens during a neuropsychological assessment?",
      description: "The main stages of neuropsychological assessment, from history and tasks to feedback and recommendations.",
      lead: "Assessment is not a single test or an exam. Developmental history, observation and standardised tasks are interpreted together.",
      sections: [
        { h: "1. Clarifying the question", p: ["The clinician reviews development and health, everyday concerns, and observations from family and school. A focused question is agreed, such as attention, memory, learning, behaviour or language."] },
        { h: "2. Tasks and observation", p: ["Age-appropriate tasks provide information about attention, memory, language, visual-spatial and executive functions. Fatigue, motivation, language background and testing conditions matter when results are interpreted."] },
        { h: "3. Feedback and recommendations", p: ["Feedback should explain strengths and difficulties, whether other assessment is needed, and practical next steps. A neuropsychological assessment does not automatically constitute a medical diagnosis."] }
      ]
    },
    de: {
      title: "Wie läuft eine neuropsychologische Diagnostik ab?",
      description: "Die wichtigsten Schritte: Anamnese, Aufgaben, Beobachtung und Besprechung der Empfehlungen.",
      lead: "Die Diagnostik besteht nicht aus einem einzelnen Test. Entwicklungsgeschichte, Beobachtung und standardisierte Aufgaben werden gemeinsam ausgewertet.",
      sections: [
        { h: "1. Fragestellung klären", p: ["Besprochen werden Entwicklung, Gesundheit, Alltagsprobleme sowie Beobachtungen aus Familie und Schule. Daraus entsteht eine konkrete Frage zu Aufmerksamkeit, Gedächtnis, Lernen, Verhalten oder Sprache."] },
        { h: "2. Aufgaben und Beobachtung", p: ["Altersgerechte Aufgaben liefern Hinweise zu Aufmerksamkeit, Gedächtnis, Sprache, visuell-räumlichen und exekutiven Funktionen. Müdigkeit, Motivation, Sprache und Untersuchungsbedingungen werden berücksichtigt."] },
        { h: "3. Rückmeldung und Empfehlungen", p: ["Die Rückmeldung erklärt Stärken und Schwierigkeiten, weiteren Abklärungsbedarf und praktische Schritte. Eine neuropsychologische Untersuchung bedeutet nicht automatisch eine medizinische Diagnose."] }
      ]
    }
  },
  {
    slug: "attention-and-learning-difficulties",
    sourceKeys: ["cdcAdhd", "aapAdhd"],
    az: {
      title: "Diqqət və öyrənmə çətinlikləri: nədən başlamaq lazımdır?",
      description: "Diqqətsizlik və məktəb çətinlikləri zamanı valideynlər üçün ilkin addımlar.",
      lead: "Diqqətsizliyin tək səbəbi DEHB deyil. Yuxu, narahatlıq, görmə və eşitmə, dil və öyrənmə çətinlikləri oxşar görünə bilər.",
      sections: [
        { h: "Müşahidələri konkretləşdirin", p: ["Çətinliyin harada və nə vaxt yarandığını qeyd edin: yalnız bir fəndə, bütün dərslərdə, evdə, məktəbdə və ya yorğunluq zamanı. Müəllimdən konkret nümunələr istəyin."] },
        { h: "Bir testlə kifayətlənməyin", p: ["DEHB üçün tək diaqnostik test yoxdur. Qiymətləndirmə müxtəlif mühitlərdən məlumatı, inkişaf tarixçəsini və oxşar əlamətlər yarada bilən digər səbəblərin yoxlanmasını əhatə edir."] },
        { h: "Faydalı ilk addımlar", p: ["Yuxu rejimini, görmə və eşitməni, tapşırıqların çətinliyini və emosional vəziyyəti nəzərdən keçirin. Məktəb nümunələrini, əvvəlki rəyləri və konkret sualları konsultasiyaya gətirin."] }
      ]
    },
    ru: {
      title: "Трудности внимания и обучения: с чего начать",
      description: "Практические первые шаги, если ребёнку трудно сосредоточиться, учиться или завершать задания.",
      lead: "Невнимательность не всегда означает СДВГ. Похожие проявления могут быть связаны со сном, тревогой, зрением, слухом, языком или трудностями обучения.",
      sections: [
        { h: "Сделайте наблюдения конкретными", p: ["Запишите, где и когда возникает проблема: на одном предмете или везде, дома и в школе, утром или при усталости. Попросите учителя привести примеры заданий и ситуаций."] },
        { h: "Не полагайтесь на один тест", p: ["Одного теста для диагностики СДВГ не существует. Оценка должна учитывать информацию из разных условий, историю развития и другие причины похожих симптомов."] },
        { h: "Полезные первые шаги", p: ["Проверьте режим сна, зрение и слух, соответствие заданий уровню ребёнка и эмоциональное состояние. Соберите школьные работы, предыдущие заключения и список конкретных вопросов."] }
      ]
    },
    en: {
      title: "Attention and learning difficulties: where to start",
      description: "Practical first steps when a child struggles to focus, learn or finish tasks.",
      lead: "Inattention does not always mean ADHD. Sleep, anxiety, vision, hearing, language and learning difficulties can look similar.",
      sections: [
        { h: "Make observations specific", p: ["Note where and when the difficulty appears: in one subject or all tasks, at home and school, early in the day or when tired. Ask the teacher for concrete examples."] },
        { h: "Do not rely on one test", p: ["There is no single diagnostic test for ADHD. Assessment considers information from more than one setting, developmental history and alternative explanations."] },
        { h: "Useful first steps", p: ["Review sleep, vision and hearing, task difficulty and emotional wellbeing. Bring schoolwork, previous reports and a list of focused questions to the consultation."] }
      ]
    },
    de: {
      title: "Aufmerksamkeits- und Lernprobleme: womit beginnen?",
      description: "Praktische erste Schritte, wenn ein Kind sich schwer konzentriert, lernt oder Aufgaben beendet.",
      lead: "Unaufmerksamkeit bedeutet nicht automatisch ADHS. Schlaf, Ängste, Seh- oder Hörprobleme, Sprache und Lernstörungen können ähnlich wirken.",
      sections: [
        { h: "Beobachtungen konkretisieren", p: ["Notieren Sie, wann und wo die Schwierigkeit auftritt: nur in einem Fach oder überall, zu Hause und in der Schule, morgens oder bei Müdigkeit. Bitten Sie Lehrkräfte um konkrete Beispiele."] },
        { h: "Nicht auf einen Test verlassen", p: ["Es gibt keinen einzelnen Test für ADHS. Eine fundierte Abklärung berücksichtigt mehrere Lebensbereiche, die Entwicklungsgeschichte und andere mögliche Ursachen."] },
        { h: "Sinnvolle erste Schritte", p: ["Prüfen Sie Schlaf, Sehen und Hören, den Schwierigkeitsgrad der Aufgaben und die emotionale Situation. Bringen Sie Schulmaterial, frühere Berichte und konkrete Fragen mit."] }
      ]
    }
  },
  {
    slug: "prepare-child-for-first-consultation",
    sourceKeys: ["aacnEvaluation", "cdcConcerned"],
    az: {
      title: "Uşağı ilk neyropsixoloji konsultasiyaya necə hazırlamaq olar?",
      description: "İlk görüşdən əvvəl valideynlər üçün sadə və praktik hazırlıq siyahısı.",
      lead: "Uşağa bunun imtahan olmadığını deyin. Məqsəd onun üçün nəyin asan, nəyin çətin olduğunu anlamaqdır.",
      sections: [
        { h: "Uşağa nə demək olar", p: ["Yaşa uyğun, sakit izah verin: mütəxəssis söhbət edəcək, oyun və tapşırıqlar təklif edəcək. Nəticə və ya mükafat vəd etməyin və düzgün cavab məşq etdirməyin."] },
        { h: "Görüşdən əvvəl", p: ["Mümkün qədər normal yuxu və yemək rejimini qoruyun. Eynək, eşitmə cihazı və gündəlik istifadə olunan vasitələri götürün. Dərman rejimini yalnız həkimin göstərişi ilə dəyişin."] },
        { h: "Özünüzlə nə gətirmək faydalıdır", p: [], bullets: ["əvvəlki tibbi və psixoloji rəylər", "məktəb və ya bağça müşahidələri", "dəftər və yazı nümunələri", "istifadə olunan dərmanların siyahısı", "əsas sualların qısa siyahısı"] }
      ]
    },
    ru: {
      title: "Как подготовить ребёнка к первой консультации",
      description: "Спокойная и практичная подготовка ребёнка и документов к первой нейропсихологической встрече.",
      lead: "Скажите ребёнку, что это не экзамен. Задача встречи — понять, что ему даётся легко, а где нужна поддержка.",
      sections: [
        { h: "Как объяснить встречу", p: ["Используйте простые слова: специалист поговорит, предложит игры и задания. Не обещайте награду за «хороший результат» и не тренируйте заранее правильные ответы."] },
        { h: "Накануне", p: ["Постарайтесь сохранить обычный сон и питание. Возьмите очки, слуховой аппарат и другие регулярно используемые средства. Не меняйте схему лекарств без указания врача."] },
        { h: "Что полезно взять", p: [], bullets: ["предыдущие медицинские и психологические заключения", "характеристику или наблюдения школы", "тетради и примеры письменных работ", "список принимаемых препаратов", "короткий список главных вопросов"] }
      ]
    },
    en: {
      title: "How to prepare a child for a first consultation",
      description: "A calm, practical checklist for preparing a child and relevant documents for a first neuropsychology visit.",
      lead: "Tell your child this is not an exam. The purpose is to understand what feels easy and where support may help.",
      sections: [
        { h: "How to explain the visit", p: ["Use simple language: the specialist will talk, play and offer tasks. Do not promise a reward for a 'good result' or rehearse correct answers."] },
        { h: "Before the appointment", p: ["Keep sleep and meals as normal as possible. Bring glasses, hearing aids and any aids used regularly. Do not change medication unless the prescribing clinician advises it."] },
        { h: "Useful things to bring", p: [], bullets: ["previous medical and psychological reports", "school observations or reports", "notebooks and samples of written work", "a current medication list", "a short list of your main questions"] }
      ]
    },
    de: {
      title: "So bereiten Sie Ihr Kind auf das erste Gespräch vor",
      description: "Eine ruhige, praktische Vorbereitung für Kind, Eltern und Unterlagen.",
      lead: "Erklären Sie, dass es keine Prüfung ist. Ziel ist zu verstehen, was leichtfällt und wo Unterstützung sinnvoll sein kann.",
      sections: [
        { h: "Das Gespräch erklären", p: ["Sagen Sie in einfachen Worten, dass gesprochen, gespielt und Aufgaben ausprobiert werden. Versprechen Sie keine Belohnung für ein 'gutes Ergebnis' und üben Sie keine richtigen Antworten ein."] },
        { h: "Vor dem Termin", p: ["Achten Sie möglichst auf normalen Schlaf und Mahlzeiten. Bringen Sie Brille, Hörgerät und regelmäßig genutzte Hilfsmittel mit. Medikamente nur nach ärztlicher Anweisung verändern."] },
        { h: "Hilfreiche Unterlagen", p: [], bullets: ["frühere medizinische und psychologische Berichte", "Beobachtungen oder Berichte der Schule", "Hefte und Schriftproben", "aktuelle Medikamentenliste", "kurze Liste der wichtigsten Fragen"] }
      ]
    }
  },
  {
    slug: "bac-what-it-is-and-is-not",
    sourceKeys: ["deviceRegistry", "manufacturerMethod", "auditoryFeedback"],
    az: {
      title: "BAK nədir və nə deyil?",
      description: "Bioakustik korreksiyanın iş prinsipi, sərhədləri və konsultasiyadan əvvəl bilinməli məqamlar.",
      lead: "BAK zamanı EEG siqnalları real vaxtda səsə çevrilir. Bu, qeyri-invaziv geribildirim üsuludur, lakin diaqnostika və ya bütün vəziyyətlər üçün sübut edilmiş universal müalicə deyil.",
      sections: [
        { h: "Prosedur zamanı nə baş verir", p: ["Baş dərisinə yerləşdirilən elektrodlar elektrik aktivliyini qeyd edir. Kompüter sistemi bu siqnalları səs şəklində təqdim edir və iştirakçı onları qulaqcıqla dinləyir."] },
        { h: "BAK nəyi əvəz etmir", p: ["Prosedur nevroloji müayinəni, tibbi diaqnostikanı, dərman müalicəsini, psixoterapiyanı, loqopedik və ya xüsusi pedaqoji dəstəyi avtomatik əvəz etmir. Onun rolu fərdi plan daxilində ayrıca qiymətləndirilir."] },
        { h: "Sübutları necə oxumaq lazımdır", p: ["EEG geribildiriminə dair tədqiqatlar mövcuddur, lakin konkret protokollar, iştirakçı qrupları və nəticələr fərqlənir. Kiçik tədqiqat və istehsalçı məlumatı universal nəticə zəmanəti hesab edilə bilməz."] }
      ]
    },
    ru: {
      title: "Что такое БАК и чего от метода не следует ожидать",
      description: "Принцип биоакустической коррекции, её ограничения и вопросы, которые стоит обсудить до курса.",
      lead: "Во время БАК сигналы ЭЭГ преобразуются в звук в реальном времени. Это неинвазивный способ обратной связи, но не диагностика и не доказанное универсальное лечение любых состояний.",
      sections: [
        { h: "Что происходит во время процедуры", p: ["Электроды на поверхности головы регистрируют электрическую активность. Компьютер преобразует сигнал в звук, который человек слушает через наушники."] },
        { h: "Чего БАК не заменяет", p: ["Метод не заменяет неврологическое обследование, медицинскую диагностику, назначенное лечение, психотерапию, занятия с логопедом или специальным педагогом. Его возможная роль рассматривается только в индивидуальном плане."] },
        { h: "Как относиться к данным об эффективности", p: ["Исследования разных видов ЭЭГ-обратной связи существуют, но протоколы, группы пациентов и результаты неоднородны. Небольшое исследование или данные производителя не являются гарантией результата для каждого человека."] }
      ]
    },
    en: {
      title: "What BAC is — and what it is not",
      description: "How bioacoustic correction works, its limits and useful questions before considering a course.",
      lead: "BAC converts EEG signals into sound in real time. It is a non-invasive feedback method, but it is not a diagnostic test or a universally proven treatment for every condition.",
      sections: [
        { h: "What happens during a session", p: ["Scalp electrodes record electrical activity. A computer converts the signal into sound, which the participant hears through headphones."] },
        { h: "What BAC does not replace", p: ["It does not replace neurological examination, medical diagnosis, prescribed treatment, psychotherapy, speech-language therapy or specialist education. Any possible role should be considered within an individual plan."] },
        { h: "How to interpret evidence", p: ["Research on forms of EEG feedback exists, but protocols, participant groups and outcomes vary. A small study or manufacturer information cannot guarantee an individual result."] }
      ]
    },
    de: {
      title: "Was BAK ist – und was nicht",
      description: "Funktionsprinzip, Grenzen und wichtige Fragen vor einer bioakustischen Korrektur.",
      lead: "Bei BAK werden EEG-Signale in Echtzeit in Töne umgewandelt. Das Verfahren ist nicht invasiv, aber weder eine Diagnostik noch eine universell belegte Behandlung für jede Erkrankung.",
      sections: [
        { h: "Ablauf einer Sitzung", p: ["Elektroden auf der Kopfhaut erfassen elektrische Aktivität. Ein Computer wandelt die Signale in Töne um, die über Kopfhörer gehört werden."] },
        { h: "Was BAK nicht ersetzt", p: ["Das Verfahren ersetzt keine neurologische Untersuchung, medizinische Diagnose, verordnete Behandlung, Psychotherapie, Sprachtherapie oder sonderpädagogische Förderung. Die mögliche Rolle wird individuell eingeordnet."] },
        { h: "Evidenz richtig einordnen", p: ["Zu verschiedenen Formen des EEG-Feedbacks gibt es Forschung, doch Protokolle, Gruppen und Ergebnisse unterscheiden sich. Kleine Studien oder Herstellerangaben garantieren kein individuelles Ergebnis."] }
      ]
    }
  },
  {
    slug: "bac-questions-and-contraindications",
    sourceKeys: ["manufacturerSafety", "deviceRegistry"],
    az: {
      title: "BAK-dan əvvəl suallar və əks-göstərişlər",
      description: "Bioakustik korreksiyadan əvvəl sağlamlıq vəziyyəti və təhlükəsizlik barədə nələri bildirmək lazımdır.",
      lead: "BAK qeyri-invaziv olsa da, hər vəziyyətdə avtomatik uyğun deyil. Kəskin xəstəliklər və nevroloji tarixçə əvvəlcədən müzakirə olunmalıdır.",
      sections: [
        { h: "Mütəxəssisə əvvəlcədən bildirin", p: [], bullets: ["epilepsiya və ya qıcolma tarixçəsi", "kəskin infeksiya və yüksək hərarət", "yaxın dövrdə baş travması, insult, infarkt və ya əməliyyat", "kəskin psixi vəziyyət və ya şüur dəyişiklikləri", "qanaxma və ya kəskin nevroloji simptomlar"] },
        { h: "Niyə fərdi qərar vacibdir", p: ["İstehsalçı sənədlərində bir sıra kəskin vəziyyətlər əks-göstəriş, epilepsiya isə ehtiyat tələb edən hal kimi qeyd olunur. Son qərar anamnez, hazırkı vəziyyət və lazım olduqda müalicə edən həkimin rəyi ilə verilməlidir."] },
        { h: "Təcili əlamətlər", p: ["Yeni qıcolma, huşun pozulması, iflic əlaməti, kəskin güclü baş ağrısı və ya travmadan sonra pisləşmə planlı prosedur deyil, təcili tibbi qiymətləndirmə tələb edir."] }
      ]
    },
    ru: {
      title: "Вопросы и противопоказания перед БАК",
      description: "Что сообщить специалисту о здоровье и безопасности до проведения биоакустической коррекции.",
      lead: "Неинвазивность не означает, что метод автоматически подходит всем. Острые состояния и неврологический анамнез необходимо обсудить заранее.",
      sections: [
        { h: "Обязательно сообщите специалисту", p: [], bullets: ["об эпилепсии или судорогах в прошлом", "об острой инфекции и высокой температуре", "о недавней травме головы, инсульте, инфаркте или операции", "об остром психическом состоянии или изменении сознания", "о кровотечении или новых острых неврологических симптомах"] },
        { h: "Почему решение принимается индивидуально", p: ["Документы производителя относят ряд острых состояний к противопоказаниям, а эпилепсию — к ситуациям, требующим особой осторожности. Окончательное решение должно учитывать анамнез, текущее состояние и при необходимости мнение лечащего врача."] },
        { h: "Симптомы, при которых нужна срочная помощь", p: ["Первый приступ судорог, потеря сознания, признаки паралича, внезапная крайне сильная головная боль или ухудшение после травмы требуют не плановой процедуры, а срочной медицинской оценки."] }
      ]
    },
    en: {
      title: "Questions and contraindications before BAC",
      description: "Health and safety information to discuss before bioacoustic correction.",
      lead: "Non-invasive does not mean automatically suitable for everyone. Acute illness and neurological history should be discussed first.",
      sections: [
        { h: "Tell the specialist about", p: [], bullets: ["epilepsy or any previous seizure", "acute infection or high fever", "recent head injury, stroke, heart attack or surgery", "an acute psychiatric state or altered consciousness", "bleeding or new acute neurological symptoms"] },
        { h: "Why an individual decision matters", p: ["Manufacturer documentation lists several acute conditions as contraindications and epilepsy as requiring particular caution. The decision should reflect medical history, current condition and, when needed, the treating clinician's advice."] },
        { h: "Symptoms requiring urgent care", p: ["A first seizure, loss of consciousness, signs of paralysis, a sudden extremely severe headache or deterioration after injury require urgent medical assessment rather than a planned session."] }
      ]
    },
    de: {
      title: "Fragen und Gegenanzeigen vor einer BAK",
      description: "Welche Gesundheits- und Sicherheitsinformationen vor einer bioakustischen Korrektur wichtig sind.",
      lead: "Nicht invasiv bedeutet nicht automatisch für alle geeignet. Akute Erkrankungen und die neurologische Vorgeschichte müssen vorher besprochen werden.",
      sections: [
        { h: "Informieren Sie die Fachperson über", p: [], bullets: ["Epilepsie oder frühere Krampfanfälle", "akute Infektion oder hohes Fieber", "kürzliche Kopfverletzung, Schlaganfall, Herzinfarkt oder Operation", "akuten psychischen Zustand oder Bewusstseinsveränderung", "Blutung oder neue akute neurologische Symptome"] },
        { h: "Warum individuell entschieden wird", p: ["Herstellerunterlagen nennen mehrere akute Zustände als Gegenanzeigen und Epilepsie als besondere Vorsichtssituation. Die Entscheidung berücksichtigt Vorgeschichte, aktuellen Zustand und bei Bedarf die behandelnde Ärztin oder den behandelnden Arzt."] },
        { h: "Wann dringende Hilfe nötig ist", p: ["Ein erster Krampfanfall, Bewusstlosigkeit, Lähmungszeichen, plötzlich stärkster Kopfschmerz oder Verschlechterung nach einer Verletzung erfordern eine dringende medizinische Abklärung statt einer geplanten Sitzung."] }
      ]
    }
  },
  {
    slug: "neuropsychological-support-for-adults",
    sourceKeys: ["aacnEvaluation", "nindsTbi"],
    az: {
      title: "Böyüklər üçün neyropsixoloji dəstək",
      description: "Yaddaş, diqqət və gündəlik funksiyalarla bağlı şikayətlərdə neyropsixoloji qiymətləndirmənin rolu.",
      lead: "Yaddaş və diqqət çətinliklərinin səbəbləri müxtəlifdir. Neyropsixoloji qiymətləndirmə funksional profili dəqiqləşdirə bilər, lakin tibbi müayinəni əvəz etmir.",
      sections: [
        { h: "Hansı hallarda müraciət edilir", p: ["İnsanlar travma və ya insultdan sonra, uzunmüddətli xəstəlik fonunda, işdə səhvlər artdıqda və ya yaxınları yaddaş və davranış dəyişikliyi gördükdə qiymətləndirməyə yönləndirilə bilər."] },
        { h: "Nə qiymətləndirilə bilər", p: ["Diqqət, məlumat emalı sürəti, yaddaş, dil, planlama və problem həlli kimi funksiyalar araşdırıla bilər. Nəticələr gündəlik həyat və iş tələbləri ilə birlikdə şərh olunur."] },
        { h: "Əvvəlcə tibbi qiymətləndirmə tələb edən hallar", p: ["Qəfil başlayan danışıq pozuntusu, bir tərəfdə zəiflik, yeni şüur pozuntusu, kəskin baş ağrısı və ya sürətli pisləşmə zamanı təcili tibbi yardım lazımdır."] }
      ]
    },
    ru: {
      title: "Нейропсихологическая помощь взрослым",
      description: "Когда взрослому может быть полезна оценка памяти, внимания и других когнитивных функций.",
      lead: "Причины трудностей памяти и внимания различны. Нейропсихологическая оценка помогает описать функциональный профиль, но не заменяет медицинское обследование.",
      sections: [
        { h: "С какими запросами обращаются", p: ["Оценка может быть полезна после травмы или инсульта, при хроническом заболевании, росте ошибок в работе либо когда сам человек или близкие замечают изменения памяти, поведения и организации дел."] },
        { h: "Что можно оценить", p: ["Исследуются внимание, скорость обработки информации, память, речь, планирование и решение задач. Результаты интерпретируются с учётом требований повседневной жизни и работы."] },
        { h: "Когда сначала нужна срочная медицина", p: ["Внезапное нарушение речи, слабость с одной стороны, новое нарушение сознания, острая сильная головная боль или быстрое ухудшение требуют срочной медицинской помощи."] }
      ]
    },
    en: {
      title: "Neuropsychological support for adults",
      description: "When assessment of memory, attention and other cognitive functions may help an adult.",
      lead: "Memory and attention difficulties have many possible causes. Neuropsychological assessment can describe a functional profile but does not replace medical evaluation.",
      sections: [
        { h: "Common reasons for referral", p: ["Assessment may be useful after an injury or stroke, alongside chronic illness, when work errors increase, or when the person or family notices changes in memory, behaviour or organisation."] },
        { h: "What may be assessed", p: ["Attention, processing speed, memory, language, planning and problem solving can be examined. Results are interpreted in relation to everyday and occupational demands."] },
        { h: "When urgent medical care comes first", p: ["Sudden speech problems, one-sided weakness, altered consciousness, a severe acute headache or rapid deterioration require urgent medical care."] }
      ]
    },
    de: {
      title: "Neuropsychologische Unterstützung für Erwachsene",
      description: "Wann eine Untersuchung von Gedächtnis, Aufmerksamkeit und weiteren kognitiven Funktionen sinnvoll sein kann.",
      lead: "Gedächtnis- und Aufmerksamkeitsprobleme können viele Ursachen haben. Die neuropsychologische Diagnostik beschreibt ein Funktionsprofil, ersetzt aber keine medizinische Untersuchung.",
      sections: [
        { h: "Häufige Fragestellungen", p: ["Eine Abklärung kann nach Verletzung oder Schlaganfall, bei chronischer Erkrankung, zunehmenden Fehlern im Beruf oder bemerkten Veränderungen von Gedächtnis, Verhalten und Organisation sinnvoll sein."] },
        { h: "Was untersucht werden kann", p: ["Aufmerksamkeit, Verarbeitungsgeschwindigkeit, Gedächtnis, Sprache, Planung und Problemlösen können erfasst werden. Die Auswertung berücksichtigt Alltag und Beruf."] },
        { h: "Wann zuerst dringende Medizin nötig ist", p: ["Plötzliche Sprachstörung, einseitige Schwäche, neue Bewusstseinsstörung, akuter stärkster Kopfschmerz oder rasche Verschlechterung erfordern sofortige medizinische Hilfe."] }
      ]
    }
  }
];

export function articleSources(article) {
  return article.sourceKeys.map((key) => sources[key]);
}
