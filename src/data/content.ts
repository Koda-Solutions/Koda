export const content = {
  // ==================== ARABIC VERSION (Formal/Persuasive) ====================
  ar: {
    common: {
      whatsappContactMessage: 'السلام عليكم، عايز أحجز مكاني في الـ Waitlist.',
    },
    nav: { logo: 'كودا', services: 'عن المنصة', contact: 'انضم للنخبة' },

    // --- HERO ---
    hero: {
      title: 'بنسخن عشان نغير...',
      titleAccent: 'قواعد اللعبة.',
      subtitle:
        'التجارة الإلكترونية في مصر كانت حاجة.. ومع كودا هتبقى حاجة تانية خالص. سيستم سابق عصره، ذكاء اصطناعي حقيقي، وتجربة شراء العميل هيدمنها.',
      ctaDesktop: 'انضم لقائمة الانتظار',
      ctaMobile: 'احجز مكانك بدري',
      whatsappMessage:
        'مرحباً كودا، مهتم جداً وعايز أكون من أوائل الناس اللي تجرب السيستم.',
    },

    // --- INTEGRATIONS ---
    integrations: {
      title: 'شركاء النجاح',
      partners: [],
    },

    // --- PAIN POINTS ---
    painPoints: {
      title: 'ليه السوق محتاج',
      titleAccent: 'كودا؟',
      titleSuffix: '',
      points: [
        {
          title: 'مواقع بطيئة',
          desc: 'المواقع التقليدية بتخلي العميل يزهق ويقفل قبل ما يشتري.',
        },
        {
          title: 'مفيش ذكاء اصطناعي',
          desc: 'أغلب المنصات لسه شغالة بتكنولوجيا قديمة مش بتساعدك تبيع أكتر.',
        },
        {
          title: 'تجربة معقدة',
          desc: 'العميل بيحتاج يعمل 100 خطوة عشان يشتري، وده بيضيع أوردرات.',
        },
      ],
    },

    // --- SOLUTION ---
    solution: {
      title: 'كودا هي',
      titleAccent: 'الحل النهائي',
      desc: 'منصة متكاملة بتقدم لك كل اللي محتاجه عشان تبني إمبراطوريتك أونلاين.',
      features: ['سرعة خيالية', 'ذكاء اصطناعي', 'تجربة عالمية', 'دعم 24/7'],
    },

    // --- COMING SOON FEATURES (UPDATED & HYPED 🔥) ---
    comingSoonFeatures: {
      title: 'انتهى وقت الكلام..', // Hype Title
      subtitle:
        'خفينا كل كروتنا. ليه؟ عشان المنافسين ميعرفوش يناموا من القلق. اللي جاي مش مجرد تحديث، دي "إعادة ضبط مصنع" للتجارة الإلكترونية في مصر.',

      // ✅ ده الكلام الجديد للبوكس المقفول
      lockBox: {
        title: 'كل الفيتشرز بقت "سر حربي" 🔒',
        desc: 'عشان اللي جاي هيمسح تاريخ السوق القديم، قررنا نخفي كل أوراقنا ونقفل المطبخ. مش عايزين نحرق المفاجأة، بس نقدر نقولك: "استعد للانبهار".',
        button: 'احجز مكانك في الصف الأول',
      },

      list: [
        // الليستة دي هتفضل زي ما هي عشان الخلفية المعمولة بلور (The blurred background needs content)
        {
          title: 'Shoppable Stories',
          desc: 'البيع بلمسة واحدة من الستوري.',
          icon: 'Smartphone',
        },
        {
          title: 'Voice Search AI',
          desc: 'بحث صوتي بيفهم اللهجة المصرية.',
          icon: 'Mic',
        },
        {
          title: 'Gamification Engine',
          desc: 'تحويل الشراء للعبة ممتعة.',
          icon: 'Dices',
        },
        {
          title: 'AI Smart Sizing',
          desc: 'قياس ذكي لتقليل المرتجعات.',
          icon: 'Ruler',
        },
        {
          title: 'AI Copywriter',
          desc: 'كتابة محتوى أوتوماتيك.',
          icon: 'Sparkles',
        },
        {
          title: 'Dynamic Pricing',
          desc: 'تسعير ديناميكي ذكي.',
          icon: 'TrendingUp',
        },
        {
          title: 'WhatsApp Automation',
          desc: 'أوتوميشن كامل للواتساب.',
          icon: 'MessageCircle',
        },
        {
          title: 'Cyber Dashboard',
          desc: 'لوحة تحكم خيالية.',
          icon: 'Monitor',
        },
        {
          title: 'Instant BNPL',
          desc: 'تقسيط لحظي للعملاء.',
          icon: 'CreditCard',
        },
        {
          title: 'AR Virtual Try-On',
          desc: 'قياس افتراضي (AR).',
          icon: 'Glasses',
        },
        {
          title: 'Influencer Portal',
          desc: 'بوابة خاصة للمشاهير.',
          icon: 'Users',
        },
        {
          title: 'Hyper-Speed Payout',
          desc: 'سحب أرباح لحظي.',
          icon: 'Zap',
        },
      ],
    },

    // --- PRICING ---
    pricing: {
      title: 'خطط الأسعار.. قريباً',
      monthly: 'شهرياً',
      yearly: 'سنوياً',
      plans: [
        {
          id: 'starter',
          level: 1,
          icon: 'Rocket',
          name: 'الباكج الأساسي',
          tagline: 'للبداية القوية',
          pricePlaceholder: 'Locked',
          features: [
            'تصميمات حصرية',
            'دومين مجاني',
            'استضافة سحابية',
            'زيرو عمولة',
          ],
          buttonText: 'قريباً',
          whatsappMessage: '',
        },
        {
          id: 'pro',
          level: 2,
          icon: 'Zap',
          name: 'باكج المحترفين',
          tagline: 'للنمو السريع',
          badge: 'Coming Soon',
          highlighted: true,
          pricePlaceholder: 'Locked',
          features: [
            'كل مميزات الأساسي',
            'ذكاء اصطناعي كامل',
            'أوتوميشن شحن ودفع',
            'تطبيقات تسويق',
          ],
          buttonText: 'قريباً',
          whatsappMessage: '',
        },
        {
          id: 'elite',
          level: 3,
          icon: 'Crown',
          name: 'باكج الإيليت',
          tagline: 'للحيتان',
          pricePlaceholder: 'Locked',
          features: ['برمجة خاصة', 'موبايل أبلكيشن', 'سيرفر خاص', 'مدير حساب'],
          buttonText: 'قريباً',
          whatsappMessage: '',
        },
      ],
    },

    // --- SMART TRANSPARENCY ---
    smartTransparency: {
      title: 'ليه تستنى',
      titleAccent: 'كودا؟',
      desc: 'لأنك تستاهل تكنولوجيا الشركات العالمية بسعر مصري.',
      levels: [
        {
          title: 'السوق الحالي',
          subtitle: 'قديم وممل',
          icon: 'History',
          summary:
            'مواقع شكلها واحد، بطيئة، ومفهاش أي إبداع يخلي العميل يشتري.',
          pros: ['موجود دلوقتي'],
          limitations: ['تكنولوجيا 2010', 'مفيش ذكاء اصطناعي', 'شكلها رخيص'],
          bestFor: 'اللي عايز يقلد المنافسين.',
        },
        {
          title: 'كودا (الجيل الجديد)',
          subtitle: 'ثورة تقنية',
          icon: 'Rocket',
          summary:
            'أول منصة في مصر بتقدم تجربة "Shoppable" كاملة مع ذكاء اصطناعي حقيقي.',
          pros: ['تكنولوجيا 2026', 'سابق السوق بسنين', 'أدوات بيع حصرية'],
          limitations: ['قائمة الانتظار بتتملي بسرعة'],
          bestFor: 'البراندات اللي عايزة تسبق عصرها.',
        },
        {
          title: 'البرمجة الخاصة',
          subtitle: 'غالية ومعقدة',
          icon: 'Code',
          summary: 'حلوة بس هتدفع دم قلبك وهتستنى شهور عشان تستلم.',
          pros: ['ملكية تامة'],
          limitations: ['سعر فلكي', 'وقت طويل', 'صيانة مكلفة'],
          bestFor: 'الشركات المليونيرة.',
        },
      ],
      ctaTitle: 'العدد محدود جداً',
      ctaAccent: 'في المرحلة الأولى',
      ctaDesc: 'سجل اهتمامك دلوقتي عشان نبلغك أول ما نفتح باب الاشتراك.',
      ctaButton: 'سجل اهتمامك',
      whatsappMessage: 'عايز أسجل اهتمامي بمنصة كودا.',
    },

    // --- ECOSYSTEM ---
    servicesEcosystem: {
      title: 'بنية تحتية',
      titleAccent: 'تستحمل الضغط',
      desc: 'مجهزين سيرفرات وانتجريشنز جاهزة عشان تبدأ كبير من أول يوم.',
      points: [
        'سيرفرات سحابية (Cloud) فائقة السرعة.',
        'تشفير بنكي كامل لبيانات العملاء.',
        'دعم فني فاهم بيزنس مش بس كود.',
      ],
      features: [
        {
          title: 'أسطول شحن جاهز',
          desc: 'ربط أوتوماتيك مع أكبر شركات الشحن. الأوردر بيسمع عندهم لحظياً.',
          icon: 'Truck',
          partners: ['Bosta', 'Mylerz', 'Aramex', 'Sprint'],
        },
        {
          title: 'خزنة فلوسك (Payments)',
          desc: 'العميل يدفع بأي طريقة تريحه، وفلوسك توصلك بأمان.',
          icon: 'CreditCard',
          partners: [
            'Visa',
            'Mastercard',
            'Fawry',
            'InstaPay',
            'Vodafone Cash',
            'Valu',
          ],
        },
        {
          title: 'غرفة العمليات (Admin)',
          desc: 'لوحة تحكم بتدير المخزون، المبيعات، والموظفين من مكان واحد.',
          icon: 'LayoutDashboard',
          partners: ['Real-time', 'Analytics', 'Inventory', 'CRM'],
        },
      ],
      valueTitle: 'أمان واستقرار',
      valueAccent: 'بنسبة 99.9%',
      valueDesc: 'بنينا الأساس صح عشان متتعبش قدام.',
      cta: 'اعرف أكتر',
      whatsappMessage: 'تفاصيل البنية التحتية.',
    },

    cta: {
      title: 'مستني إيه؟',
      button: 'احجز مكانك',
      desc: 'الفرصة دي مش هتتكرر.',
      whatsappMessage: 'احجزلي مكان.',
    },

    guidance: {
      confusion: 'تشتت السوق',
      clarity: 'وضوح كودا',
      title: 'مش عارف تبدأ',
      titleAccent: 'منين؟',
      desc: 'السوق مليان تفاصيل بتوه، إحنا هنا عشان نرسم لك الطريق الصح من أول يوم.',
      points: ['خطة عمل واضحة', 'دعم فني بيوجهك', 'أدوات بتسهل عليك كل حاجة'],
      whatsappMessage: 'محتاج مساعدة في تحديد البداية الصح مع كودا.',
      cta: 'ابدأ رحلتك دلوقتي',
    },

    leadQuiz: {
      title: 'اكتشف خطتك المثالية',
      questionLabel: 'سؤال',
      ofLabel: 'من',
      prev: 'السابق',
      next: 'التالي',
      finish: 'إرسال للواتساب',
      questions: [
        {
          id: 'q1',
          title: 'حجم تجارتك الحالي؟',
          options: ['لسه ببدأ', 'متوسط', 'كبير'],
        },
        {
          id: 'q2',
          title: 'إيه أكتر حاجة محتاجها؟',
          options: ['زيادة مبيعات', 'تنظيم شحن ودفع', 'ذكاء اصطناعي'],
        },
      ],
      whatsappMessage: (answers: string[]) =>
        `السلام عليكم كودا، عملت الكويز ودي إجاباتي:\n1. ${answers[0]}\n2. ${answers[1]}`,
    },

    faq: {
      title: 'أسئلة شائعة',
      titleAccent: 'عن كودا',
      subtitle: 'كل اللي محتاج تعرفه عن المنصة اللي هتغير شكل التجارة في مصر.',
      items: [
        {
          question: 'إيه اللي بيميز كودا عن أي منصة تانية؟',
          answer:
            'كودا مش مجرد موقع، ده سيستم متكامل بيستخدم الذكاء الاصطناعي عشان يزود مبيعاتك ويوفرلك تجربة "Shoppable" حقيقية زي البراندات العالمية.',
        },
        {
          question: 'هل السيستم صعب في الاستخدام؟',
          answer:
            'بالعكس، كودا مصممة عشان تكون أسهل حاجة استخدمتها في حياتك. لو بتعرف تستخدم فيسبوك، هتعرف تدير ستورك على كودا.',
        },
      ],
    },

    trustStats: {
      title: 'أرقام تتحدث',
      commission: { label: 'عمولة صفر', subtext: 'مكسبك كله ليك' },
      uptime: { label: 'تشغيل مستمر', subtext: 'موقعك مش هيقع' },
      support: { label: 'دعم فني', subtext: 'معاك في كل خطوة' },
      security: { label: 'أمان تام', subtext: 'بياناتك في حفظ وأمان' },
    },

    footer: { tagline: 'من دكان... لإمبراطورية.' },
  },

  // ==================== FRANCO-ARABIC VERSION (Youthful/Tech) ====================
  en: {
    common: {
      whatsappContactMessage: 'Salam, 3ayez a7gez makany fil waiting list.',
    },
    nav: { logo: 'Koda', services: '3an El Platform', contact: 'A7gez Makank' },

    hero: {
      title: 'Bnsakhan 3ashan nghayar...',
      titleAccent: 'Qwa3ed El Lo3ba.',
      subtitle:
        'El E-commerce fe Masr kan 7aga.. w ma3a Koda hayb2a 7aga tanya khales. System sabe2 3asro, AI 7a2e2y, w shopping experience el customer hayedmenha.',
      ctaDesktop: 'Join Waiting List',
      ctaMobile: 'A7gez Badry',
      whatsappMessage: 'Hello Koda, mohtam gdan w 3ayez akon mn awal el nas.',
    },

    // --- INTEGRATIONS ---
    integrations: {
      title: 'Partners',
      partners: [],
    },

    // --- PAIN POINTS ---
    painPoints: {
      title: 'Leh el so2 me7tag',
      titleAccent: 'Koda?',
      titleSuffix: '',
      points: [
        {
          title: 'Slow Sites',
          desc: 'El sites el 2adeema b-t5aly el customer yez-ha2 w ye2fel.',
        },
        {
          title: 'Mafish AI',
          desc: 'Aghlab el platforms lassa shagala b-tech 2adeema.',
        },
        {
          title: 'Complex UX',
          desc: 'El customer by7tag ye3mel 100 step 3ashan yeshtery.',
        },
      ],
    },

    // --- SOLUTION ---
    solution: {
      title: 'Koda Heya',
      titleAccent: 'El 7al El Neha2y',
      desc: 'Platform kamla b-t2ademlak kol illi me7tago 3ashan tebny empire.',
      features: ['Sor3a', 'AI 7a2e2y', 'Global UX', 'Support 24/7'],
    },

    // --- COMING SOON FEATURES (UPDATED & HYPED 🔥) ---
    comingSoonFeatures: {
      title: 'Entaha Wa2t El Kalam..',
      subtitle:
        'Xafena kol krootna. Leh? 3ashan el competitors may3rafosh ynamo mn el ala2. Elly gay msh update, da "Factory Reset" lil e-commerce fe Masr.',

      // ✅ The New Box Text (Franco)
      lockBox: {
        title: 'Kol El Features Ba2et "Top Secret" 🔒',
        desc: '3ashan elly gay hay-emsa7 taree5 el so2 el adem, qararna ne5fy kol awra2na. Msh 3ayzeen ne7ra2 el surprise, bas ne2dar ne2olak: "Get Ready".',
        button: 'A7gez Makanak Fel First Row',
      },

      list: [
        {
          title: 'Shoppable Stories',
          desc: 'Buy from stories directly.',
          icon: 'Smartphone',
        },
        {
          title: 'Voice Search AI',
          desc: 'AI voice search.',
          icon: 'Mic',
        },
        {
          title: 'Gamification Engine',
          desc: 'Shopping is a game.',
          icon: 'Dices',
        },
        {
          title: 'AI Smart Sizing',
          desc: 'Perfect sizing AI.',
          icon: 'Ruler',
        },
        {
          title: 'AI Copywriter',
          desc: 'Auto descriptions.',
          icon: 'Sparkles',
        },
        {
          title: 'Dynamic Pricing',
          desc: 'Smart pricing.',
          icon: 'TrendingUp',
        },
        {
          title: 'WhatsApp Automation',
          desc: 'Full automation.',
          icon: 'MessageCircle',
        },
        {
          title: 'Cyber Dashboard',
          desc: 'Sci-fi dashboard.',
          icon: 'Monitor',
        },
        {
          title: 'Instant BNPL',
          desc: 'Buy Now Pay Later.',
          icon: 'CreditCard',
        },
        {
          title: 'AR Virtual Try-On',
          desc: 'AR Try-on.',
          icon: 'Glasses',
        },
        {
          title: 'Influencer Portal',
          desc: 'Influencers system.',
          icon: 'Users',
        },
        {
          title: 'Hyper-Speed Payout',
          desc: 'Instant cashout.',
          icon: 'Zap',
        },
      ],
    },

    pricing: {
      title: 'Pricing Plans.. Soon',
      monthly: 'Monthly',
      yearly: 'Yearly',
      plans: [
        {
          id: 'starter',
          level: 1,
          icon: 'Rocket',
          name: 'Starter Pack',
          tagline: 'Lil Bedaya el Qawya',
          pricePlaceholder: 'Locked',
          features: [
            'Exclusive Designs',
            'Free Domain',
            'Cloud Hosting',
            'Zero Commission',
          ],
          buttonText: 'Soon',
          whatsappMessage: '',
        },
        {
          id: 'pro',
          level: 2,
          icon: 'Zap',
          name: 'Pro Pack',
          tagline: 'Lil Growth el Saree3',
          badge: 'Big Surprise',
          highlighted: true,
          pricePlaceholder: 'Locked',
          features: [
            'All Starter Features',
            'Full AI',
            'Auto Shipping/Payment',
            'Marketing Apps',
          ],
          buttonText: 'Soon',
          whatsappMessage: '',
        },
        {
          id: 'elite',
          level: 3,
          icon: 'Crown',
          name: 'Elite Pack',
          tagline: 'Lil 7eetan',
          pricePlaceholder: 'Locked',
          features: [
            'Custom Dev',
            'Mobile App',
            'Private Server',
            'Account Manager',
          ],
          buttonText: 'Soon',
          whatsappMessage: '',
        },
      ],
    },

    smartTransparency: {
      title: 'Leh Testanna',
      titleAccent: 'Koda?',
      desc: 'Li2anak testahl technology el sharikat el global bi se3r masry.',
      levels: [
        {
          title: 'Current Market',
          subtitle: 'Old & Boring',
          icon: 'History',
          summary:
            'Sites shaklaha wa7ed, slow, w mafhash ay ebda3 ykhaly el customer yeshtery.',
          pros: ['Available now'],
          limitations: ['Tech 2010', 'No AI', 'Cheap Look'],
          bestFor: 'Illi 3ayez ye2aled.',
        },
        {
          title: 'Koda (Next Gen)',
          subtitle: 'Tech Revolution',
          icon: 'Rocket',
          summary:
            'Awal platform fe Masr b-t2adem "Shoppable Experience" kamla ma3 Real AI.',
          pros: ['Tech 2026', 'Ahead of market', 'Exclusive Sales Tools'],
          limitations: ['Waiting list full fast'],
          bestFor: 'Brands illi 3ayza tesba2 3asraha.',
        },
        {
          title: 'Custom Dev',
          subtitle: 'Expensive & Complex',
          icon: 'Code',
          summary: '7elwa bas hatdfa3 dam albak w hatstanna shohoor.',
          pros: ['Full Ownership'],
          limitations: ['Huge Price', 'Long Time', 'Maintenance Cost'],
          bestFor: 'Millionaire Companies.',
        },
      ],
      ctaTitle: 'Spots are Limited',
      ctaAccent: 'In Phase 1',
      ctaDesc: 'Saggel ehtemamak dlwa2ty 3ashan neblghak awal ma nefta7.',
      ctaButton: 'Join Waitlist',
      whatsappMessage: '3ayez asaggel ehtemamy bi Koda.',
    },

    servicesEcosystem: {
      title: 'Infrastructure',
      titleAccent: 'Built for Scale',
      desc: 'Servers and integrations ready to start big from day one.',
      points: [
        'Ultra-fast Cloud Servers.',
        'Full bank-grade encryption.',
        'Business-focused technical support.',
      ],
      features: [
        {
          title: 'Logistics Fleet',
          desc: 'Automatic link with major shipping companies.',
          icon: 'Truck',
          partners: ['Bosta', 'Mylerz', 'Aramex', 'Sprint'],
        },
        {
          title: 'Payments Vault',
          desc: 'Customers pay how they want, safely and securely.',
          icon: 'CreditCard',
          partners: [
            'Visa',
            'Mastercard',
            'Fawry',
            'InstaPay',
            'Vodafone Cash',
          ],
        },
        {
          title: 'Admin Dashboard',
          desc: 'Control inventory, sales, and staff from one place.',
          icon: 'LayoutDashboard',
          partners: ['Real-time', 'Analytics', 'Inventory', 'CRM'],
        },
      ],
      valueTitle: 'Security & Stability',
      valueAccent: '99.9% Uptime',
      valueDesc: "We built the foundation right so you don't struggle later.",
      cta: 'Learn More',
      whatsappMessage: 'Infrastructure details.',
    },

    cta: {
      title: 'Mestany eh?',
      button: 'A7gez Makanak',
      desc: 'El forsa di msh hatetkarar.',
      whatsappMessage: 'A7gezly makan.',
    },

    guidance: {
      confusion: 'Market Confusion',
      clarity: 'Koda Clarity',
      title: 'Msh 3aref tebda',
      titleAccent: 'Mneen?',
      desc: 'El so2 malyan tafaseel b-tewah, e7na hna 3ashan nersomlak el tareeq el sa7.',
      points: [
        'Clear action plan',
        'Support by-guidi-k',
        'Tools b-tsahal kol 7aga',
      ],
      whatsappMessage: 'Me7tag mosa3da fe ta7deed el bedaya el sa7 ma3 Koda.',
      cta: 'Ebda re7latak dlwa2ty',
    },

    leadQuiz: {
      title: 'Ektashef khetatak el methalya',
      questionLabel: 'Question',
      ofLabel: 'mn',
      prev: 'Previous',
      next: 'Next',
      finish: 'Send to WhatsApp',
      questions: [
        {
          id: 'q1',
          title: 'Hagm tegartak el 7aly?',
          options: ['Lessa b-bda2', 'Motawaset', 'Kbeer'],
        },
        {
          id: 'q2',
          title: 'Eh aktar 7aga me7tagha?',
          options: ['Zyadet Sales', 'Shipping & Payment', 'AI Tools'],
        },
      ],
      whatsappMessage: (answers: string[]) =>
        `Salam Koda, 3amalt el quiz w di egabaty:\n1. ${answers[0]}\n2. ${answers[1]}`,
    },

    faq: {
      title: 'FAQ',
      titleAccent: '3an Koda',
      subtitle:
        'Kol illi me7tag t3rafo 3an el platform illi hatghayar shakl el e-commerce fe Masr.',
      items: [
        {
          question: 'Eh illi byemayez Koda 3an ay platform tanya?',
          answer:
            'Koda msh mogarad site, da system kamel byesta5dem el AI 3ashan yezawed sales-ak w y2ademlak shoppable experience 7a2e2ya.',
        },
        {
          question: 'Hal el system sa3b fel esta5dam?',
          answer:
            'Bel3aks, Koda met-samema 3ashan tkoun as-hal 7aga esta5demtaha fe 7ayatak.',
        },
      ],
    },

    trustStats: {
      title: 'Stats',
      commission: { label: 'Zero Commission', subtext: 'Maksabak kollo leek' },
      uptime: { label: '99.9% Uptime', subtext: 'Site-ak msh haye2a3' },
      support: { label: 'Technical Support', subtext: 'Ma3ak fe kol khatwa' },
      security: { label: 'Full Security', subtext: 'Data bta3tak fe amman' },
    },

    footer: { tagline: 'Mn Dokan... Li Empratoria.' },
  },
};

// Type export for LanguageContext
export type ContentType = typeof content.ar;
