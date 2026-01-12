export const content = {
  ar: {
    common: {
      whatsappContactMessage: 'يا كودا، عندي استفسار بخصوص خدماتكم.',
    },
    nav: {
      logo: 'كودا',
      services: 'خدماتنا',
      contact: 'تواصل معنا',
    },
    hero: {
      title: 'شريكك التقني لبناء...',
      titleAccent: 'إمبراطورية ذكية.',
      subtitle:
        'نحن نتولى التفاصيل التقنية المعقدة، لتتفرغ أنت لما تتقنه: إدارة وتنمية تجارتك. حلول ذكية مصممة لتناسب ميزانيتك وأهدافك.',
      ctaDesktop: 'مش عارف أنهي طريق يوفرلك أكتر؟ تعالي نحسبها سوا',
      ctaMobile: 'تعالي نحسبها سوا ونشوف الأوفر لك',
      whatsappMessage:
        'يا كودا، مش عارف أبدأ إزاي (برمجة خاصة ولا منصات جاهزة)؟ تعالي نحسبها سوا.',
    },
    pricing: {
      title: 'اختار خطة نموك',
      monthly: 'شهرياً',
      yearly: 'سنوياً (توفير ٢٠٪)',
      plans: [
        {
          name: 'باقة الصاروخ',
          tagline: 'انطلاقة سريعة',
          icon: 'Rocket',
          badge: 'بداية ذكية',
          priceModel: 'اشتراك شهري بسيط',
          features: [
            'متجر جاهز في 48 ساعة',
            'ربط بوابات الدفع والشحن',
            'استضافة ودومين مجاني',
            'مناسب للمبتدئين',
          ],
          note: 'تطبق عمولات بيع خاصة بمنصات التشغيل',
          buttonText: 'ابدأ الصاروخ',
          buttonStyle: 'outline',
          whatsappMessage: 'يا كودا، مهتم بباقة الصاروخ وعايز أنطلق.',
          highlighted: false,
        },
        {
          name: 'باقة كودا',
          tagline: 'الخيار الذكي',
          icon: 'Diamond',
          badge: 'الأكثر طلباً',
          priceModel: 'اشتراك شهري',
          features: [
            'تصميم واجهة فريد ومبهر',
            'تجربة مستخدم (UX) تضاعف المبيعات',
            'لوحة تحكم خاصة وسهلة',
            'دعم فني وتطوير مستمر',
            'بدون أي عمولات بيع',
          ],
          note: null,
          buttonText: 'اختار التميز',
          buttonStyle: 'solid',
          whatsappMessage: 'يا كودا، مهتم بباقة كودا وعايز أعرف العرض.',
          highlighted: true,
        },
        {
          name: 'باقة الإمبراطور',
          tagline: 'للشركات الكبرى',
          icon: 'Crown',
          badge: 'ملكية كاملة',
          priceModel: 'دفع مرة واحدة (تمليك)',
          features: [
            'ملكية كاملة للسورس كود',
            'تطبيق موبايل (iOS & Android)',
            'سيرفرات خاصة عالية الأداء',
            'فريق برمجة مخصص لك',
          ],
          note: null,
          buttonText: 'ابني إمبراطوريتك',
          buttonStyle: 'outline',
          whatsappMessage:
            'يا كودا، مهتم بباقة الإمبراطور وعايز أبني إمبراطوريتي.',
          highlighted: false,
        },
      ],
    },
    smartTransparency: {
      title: 'قرار تقني أم',
      titleAccent: 'قرار استثماري؟',
      desc: 'نحن لا نبيعك «كود»، بل نوضح لك كيف تؤثر خياراتك التقنية على هوامش ربحك. إليك المسارات المتاحه في السوق المصري:',
      prosLabel: 'المميزات الإستراتيجية',
      investmentLabel: 'طبيعة الاستثمار',
      paths: [
        {
          title: 'باقة الصاروخ: انطلاقة سريعة',
          subtitle: 'المنصات الجاهزة',
          tag: 'بداية ذكية',
          pros: [
            'أسرع انطلاقة في السوق',
            'أقل تكلفة كاش للبدء فوراً',
            'ربط جاهز بخدمات الدفع والشحن',
            'دومين (اسم موقع) خاص ببراندك',
            'لا تحتاج خبرة تقنية نهائياً',
          ],
          cons: [
            'دفع مرن (اشتراك شهري بسيط)',
            'رسوم على كل اوردر (من المنصة)',
            'بيئة عمل مدارة بالكامل (راحة بال)',
          ],
          bestFor: 'مثالي لتجربة السوق واختبار المنتجات بأقل مخاطرة.',
          whatsappMessage: 'يا كودا، مهتم بباقة الصاروخ وعايز أبدأ بأقل تكلفة.',
        },
        {
          title: 'باقة كودا: أفضل قيمة مقابل سعر',
          subtitle: 'الحل المتوازن',
          tag: 'الأكثر طلباً',
          pros: [
            'واجهة مستخدم (UI) احترافية تخطف العين',
            'تجربة شراء (UX) تضاعف المبيعات',
            '0% عمولة (أرباحك ومجهودك لك)',
            'لوحة تحكم (Dashboard) تكشف أرباحك',
            'دومين واستضافة "مجاناً" أول سنة',
            'دعم فني مصري 24/7 في ضهرك',
          ],
          cons: [
            'جودة تتطلب ميزانية متوسطة',
            'تكنولوجيا تتطور معك (تحديثات مستمرة)',
          ],
          bestFor:
            'للبراندات الجامدة التي تبحث عن التميز والاحترافية من أول يوم.',
          whatsappMessage: 'يا كودا، باقة كودا عجباني وعايز أعرف تفاصيل العرض.',
        },
        {
          title: 'باقة الإمبراطور: ملكية كاملة',
          subtitle: 'البرمجة الخاصة',
          tag: 'استثمار للأبد',
          pros: [
            'تمليك 100% (أصل من أصول شركتك)',
            'تطبيقات موبايل (iOS & Android) باسمك',
            'قواعد بيانات معزولة (أعلى درجات الأمان)',
            'تحكم كامل في كل سطر كود',
            'قابلية للتوسع (Scalability) للملايين',
          ],
          cons: [
            'استثمار رأسمالي (Capital Investment)',
            'هندسة معمارية دقيقة (وقت للتطوير)',
            'فريق برمجة مخصص لمشروعك',
          ],
          bestFor:
            'للشركات الكبرى التي تبحث عن الاستقلال التام، الأمان، وتعظيم قيمة الشركة.',
          whatsappMessage:
            'يا كودا، بفكر في باقة الإمبراطور وعايز أمتلك السيستم بالكامل.',
        },
      ],
      ctaTitle: 'مش عارف أنهي طريق يوفرلك أكتر؟',
      ctaAccent: 'تعالي نحسبها سوا.',
      ctaDesc:
        'نحن نكشف لك ما يخفيه الآخرون عن الرسوم والعمولات. سنقوم بتحليل حجم مبيعاتك المتوقع لنخبرك أيهما سيعطيك أعلى صافي ربح.',
      ctaButton: 'احسب أرباحك مع خبير',
      whatsappMessage:
        'يا كودا، عايز مساعدة في حساب التكاليف والمقارنة بين البرمجة الخاصة والمنصات الجاهزة.',
    },
    painPoints: {
      title: 'التجارة كبرت..',
      titleAccent: 'والورقة والقلم',
      titleSuffix: 'مابقوش يأكلوا عيش.',
      points: [
        {
          title: 'الزبون مبيستناش الرد',
          desc: 'كل دقيقة تأخير في الرد = زبون راح للمنافس. السيستم بيبيع للعميل ويحاسبه أوتوماتيك 24 ساعة.',
        },
        {
          title: 'باني بيتك على أرض غيرك',
          desc: 'صفحات السوشيال ميديا ممكن تتقفل في ثانية. موقعك هو ملكك، وداتا عملائك في جيبك أنت بس.',
        },
        {
          title: 'فلوسك سايحة في البضاعة؟',
          desc: 'متبقاش شغال عشان تدفع للموردين وبس. اعرف كسبت كام وصرفت كام بالجنيه بضغطة زرار.',
        },
      ],
    },
    solution: {
      title: 'محلك في جيب العميل..',
      titleAccent: '24 ساعة.',
      desc: "أنت تاجر شاطر، مش خدمة عملاء. ليه تضيع يومك في 'بكام' و 'المقاس ده موجود'؟.. السيستم ده هيعرض بضاعتك ويبيع ويحاسب العميل وأنت بتشرب قهوتك.",
      features: [
        'سريع طيارة',
        'كاش أو فيزا',
        'بيسمع مع الشحن',
        'محدش يعرف يقلدك',
      ],
    },
    trustStats: {
      commission: {
        label: 'عمولة على المبيعات',
        subtext: 'مكسبك كله ليك، مش بنشاركك في تعبك.',
      },
      uptime: {
        label: 'سيستم مبيقعش',
        subtext: 'شغال وقت العروض والضغط العالي.',
      },
      support: {
        label: 'دعم فني في ضهرك',
        subtext: 'فريق كامل بيحل مشاكلك في لحظتها.',
      },
      security: {
        label: 'بياناتك في أمان',
        subtext: 'محدش بيشوف داتا عملائك غيرك.',
      },
    },
    guidance: {
      title: 'تائه وسط مئات الخيارات؟',
      titleAccent: 'نحن نرشدك للطريق.',
      desc: 'بدء مشروعك يتطلب اتخاذ مئات القرارات (شركات الشحن، بوابات الدفع، الاستضافة، المنصات). هناك خيارات لا حصر لها، لكن القليل منها فقط هو ما يناسبك.',
      confusion: 'تشتت الخيارات',
      clarity: 'وضوح مع كودا',
      points: [
        'لا نقوم بالبناء فقط، بل ننصحك بالأفضل لعملك.',
        'نختار لك شركاء الشحن والدفع حسب حجم مبيعاتك.',
        'نضمن لك عدم دفع مبالغ إضافية في ميزات لا تحتاجها.',
        'نتولى التفاصيل التقنية لتتفرغ أنت لإدارة تجارتك.',
      ],
      cta: 'ابدأ التخطيط لمشروعك الآن',
      whatsappMessage:
        'يا كودا، محتاج مساعدة في اختيار أفضل الحلول والشركاء لمشروعي الجديد.',
    },
    faq: {
      title: 'أسئلة',
      titleAccent: 'تساعدك في القرار',
      subtitle:
        'إجابات شفافة وصريحة لأكثر الأسئلة اللي بتوصلنا، عشان تاخد قرارك وأنت مطمن 100%.',
      items: [
        {
          question: 'إزاي أختار الباقة المناسبة لشغلي؟',
          answer:
            'بسيطة! لو لسه بتجرب السوق وعايز أقل تكلفة كاش، ابدأ بـ "الصاروخ". لو عندك براند وعايز شكل احترافي وأرباحك كاملة ليك (بدون عمولات)، "باقة كودا" هي الأنسب. أما لو شركة كبيرة وعايز تمتلك السورس كود والداتا بالكامل، "الإمبراطور" هو استثمارك الصح.',
        },
        {
          question: 'هل بتاخدوا نسبة أو عمولة على مبيعاتي؟',
          answer:
            'في باقات "كودا" و "الإمبراطور": عمولتنا 0%. كل جنيه بتبيعه بيدخل جيبك بالكامل. أما في "باقة الصاروخ"، بيكون فيه رسوم على المبيعات من المنصة اللي عليها المتجر زي (شوبيفاي، ايزي اوردرز).',
        },
        {
          question: 'الدومين (اسم الموقع) والاستضافة.. عليا ولا عليكم؟',
          answer:
            'ماتشلش همهم! عاملينلك عرض أول سنه الدومين هيبقا مجاناً تماماً عشان تركز في البيزنيس بتاعك ومبيعاتك.',
        },
        {
          question: 'إيه اللي يضمن لي إن بياناتي وعملائي في أمان؟',
          answer:
            'في كودا، الخصوصية خط أحمر. بيانات عملائك ملكك أنت بس، ومش بنشاركها مع أي طرف تالت وبتكون متشفرة كلياً بأحدث التكنولوجيا اللي في السوق العالمي.',
        },
        {
          question: 'لو واجهت مشكلة تقنية، مين هيساعدني؟',
          answer:
            'فريق الدعم الفني بتاعنا مصري 100% وموجود معاك 24/7 على واتساب. مش هكلم "بوت" أو حد مش فاهم طبيعة سوقك، إحنا معاك لحظة بلحظة.',
        },
        {
          question: 'هل المتجر بيدعم الدفع بالفيزا والتقسيط وفدافون كاش وفوري؟',
          answer:
            'أكيد! بنربطلك المتجر بأشهر بوابات الدفع في مصر (بيموب، فوري، تاب) وبنساعدك تفعل خدمات التقسيط (فاليو، سهولة) عشان تزود مبيعاتك.',
        },
        {
          question: 'المتجر بياخد وقت قد إيه عشان استلمه؟',
          answer:
            'باقة "الصاروخ" و "كودا" بتستلم متجرك (من 7 ل 10 أيام) عمل. أما باقة "الإمبراطور" بتاخد وقت أطول شوية (من 3 أسابيع لشهر) عشان بنهتم بكل تفصيلة في التصميم والبرمجة الخاصة.',
        },
      ],
    },
    servicesEcosystem: {
      title: 'بنية تحتية',
      titleAccent: 'تفهم السوق المصري',
      desc: 'نحن لا نبني مجرد مواقع، بل نربط تجارتك بأقوى مقدمي الخدمات في مصر لضمان دورة عمل آلية بالكامل من الطلب وحتى التحصيل.',
      points: [
        'توفير في عمولات شركات الدفع والشحن.',
        'أتمتة كاملة لعمليات الشحن وتحديث الحالات.',
        'دعم فني محلي يفهم تحديات السوق.',
        'تقارير ذكية تساعدك في اتخاذ قرارات مالية صحيحة.',
      ],
      features: [
        {
          title: 'الربط اللوجستي المتكامل',
          desc: 'إدارة طلباتك وتتبع الشحنات مباشرة من لوحة تحكم واحدة دون الحاجة للتنقل بين تطبيقات شركات الشحن.',
          partners: ['بوسطة', 'مايلرز', 'أرامكس'],
        },
        {
          title: 'بوابات الدفع المحلية',
          desc: 'تحصيل أموالك بأمان وسرعة. لا نكتفي بالربط، بل نساعدك في اختيار البوابة الأقل عمولة لحجم عملك.',
          partners: ['فوري', 'بيموب', 'إنستاباي'],
        },
        {
          title: 'لوحة تحكم ذكية',
          desc: 'نظام إدارة مخزون ومبيعات متطور يمنحك رؤية كاملة لكل تفاصيل عملك في مكان واحد.',
        },
      ],
      valueTitle: 'نحن لا نثبت برمجيات فقط..',
      valueAccent: 'نحن نحمي هوامش ربحك.',
      valueDesc:
        'اختيار بوابة الدفع الخاطئة قد يكلفك آلاف الجنيهات شهرياً في العمولات الضائعة. نحن نوجهك للأفضل بناءً على أرقامك الحقيقية.',
      cta: 'ناقش خياراتك مع خبير مالي وتقني',
      whatsappMessage:
        'يا كودا، محتاج استشارة بخصوص بوابات الدفع وشركات الشحن عشان أوفر تكاليف.',
    },
    integrations: {
      title: 'متكامل مع خدماتك المفضلة',
    },
    cta: {
      title: 'مش عارف أنهي طريق يوفرلك أكتر؟',
      button: 'تعالي نحسبها سوا الآن',
      desc: 'نحن نكشف لك الأرقام الحقيقية والعمولات الخفية لنضمن لك أعلى صافي ربح.',
      whatsappMessage: 'يا كودا، عايز أحسب التكاليف وأقارن بين الحلول لمشروعي.',
    },
    footer: {
      tagline: 'من دكان... لإمبراطورية',
    },
    leadQuiz: {
      questionLabel: 'سؤال',
      ofLabel: 'من',
      prev: 'السابق',
      next: 'التالي',
      finish: 'شوف الحل المناسب ليك واتساب',
      whatsappMessage: (answers: string[]) =>
        `يا كودا، أنا جاوبت على الأسئلة: ببيع في ${answers[0]}، حجمي ${answers[1]}، ومشكلتي ${answers[2]}. محتاج الحل المناسب.`,
      questions: [
        {
          title: 'بتبيع فين حالياً؟',
          options: ['فيسبوك/انستجرام', 'محل تجاري', 'عندي موقع وعايز أطوره'],
        },
        {
          title: 'متوسط عدد الطلبات اليومي؟',
          options: ['لسه ببدأ', 'من 10 لـ 50', 'أكثر من 50'],
        },
        {
          title: 'إيه أكبر تحدي بيقابلك؟',
          options: ['الرد على الرسايل', 'إدارة المخزون', 'شركات الشحن'],
        },
      ],
    },
  },
  en: {
    common: {
      whatsappContactMessage: 'Ya Koda, 3andy estefsar b-khosos khadamatkom.',
    },
    nav: {
      logo: 'Koda',
      services: 'Services',
      contact: 'Contact Us',
    },
    hero: {
      title: 'Your Tech Partner to Build...',
      titleAccent: 'A Smart Empire.',
      subtitle:
        "E7na bn-handle el 'Technical Details' el mo32ada, w enta rakez fil business bta3ak. Smart solutions ma3mola specifically 3ashan t-fit el budget wel goals bta3tak.",
      ctaDesktop: 'Msh 3aref anhy path a7san? Ta3ala ne7sebha.',
      ctaMobile: 'Yalla Ne7sebha Sawa',
      whatsappMessage:
        'Ya Koda, msh 3aref abda2 ezay (Custom wla Ready-made)? Ta3ala ne7sebha sawa.',
    },
    pricing: {
      title: 'Choose Your Growth Plan',
      monthly: 'Monthly',
      yearly: 'Yearly (Save 20%)',
      plans: [
        {
          name: 'Rocket Package',
          tagline: 'Quick Launch',
          icon: 'Rocket',
          badge: 'Smart Start',
          priceModel: 'Simple Monthly Subscription',
          features: [
            'Ready Store in 48 Hours',
            'Payment & Shipping Integration',
            'Free Hosting & Domain',
            'Perfect for Beginners',
          ],
          note: 'External platform fees apply',
          buttonText: 'Start Rocket',
          buttonStyle: 'outline',
          whatsappMessage: 'Ya Koda, me7tag el Rocket package w 3ayez antaleq.',
          highlighted: false,
        },
        {
          name: 'Koda Package',
          tagline: 'The Smart Choice',
          icon: 'Diamond',
          badge: 'Most Popular',
          priceModel: 'Monthly Subscription',
          features: [
            'Unique & Stunning UI Design',
            'High-Conversion UX',
            'Custom & Easy Dashboard',
            'Continuous Support & Dev',
            '0% Sales Commission',
          ],
          note: null,
          buttonText: 'Choose Excellence',
          buttonStyle: 'solid',
          whatsappMessage:
            'Ya Koda, me7tag el Koda package w 3ayez a3raf el 3ard.',
          highlighted: true,
        },
        {
          name: 'Emperor Package',
          tagline: 'For Large Enterprises',
          icon: 'Crown',
          badge: 'Full Ownership',
          priceModel: 'One-Time Payment',
          features: [
            '100% Source Code Ownership',
            'Mobile App (iOS & Android)',
            'Dedicated High-Perf Servers',
            'Dedicated Dev Team',
          ],
          note: null,
          buttonText: 'Build Your Empire',
          buttonStyle: 'outline',
          whatsappMessage:
            'Ya Koda, me7tag el Emperor package w 3ayez abny el empire bta3ty.',
          highlighted: false,
        },
      ],
    },
    smartTransparency: {
      title: 'Tech Decision wala',
      titleAccent: 'Investment Decision?',
      desc: "E7na msh benbee3 'Code', e7na ben-show you ezay el tech choices bet-impact el Profit Margins. Dol el 2 paths elly odamak:",
      prosLabel: 'Strategic Features',
      investmentLabel: 'Investment Style',
      paths: [
        {
          title: 'Rocket: Quick Launch',
          subtitle: 'Ready-made Platforms',
          tag: 'Smart Start',
          pros: [
            'Asra3 entelaqa fil so2 (within 48 hours)',
            'A2al cost cash lil bedaya fawran',
            'Rabt gahez bi-khedmat el daf3 wel sha7n',
            'Domain (site name) khass b-brandak',
            'Msh me7tag khebra technical neha2yan',
          ],
          cons: [
            'Daf3 maren (Ishtrak shahry baseet)',
            'Resoum nagah ramzya (Pay as you grow)',
            'Environment modara bel kamel (Ra7et bal)',
          ],
          bestFor:
            'Ideal law 3ayez t-test el market w t-test products b-a2al risk.',
          whatsappMessage:
            'Ya Koda, me7tag el Rocket package w 3ayez abda2 b-a2al cost.',
        },
        {
          title: 'Koda: Best Value for Money',
          subtitle: 'Balanced Solution',
          tag: 'Most Popular',
          pros: [
            'UI professional takhtof el 3ein',
            'Buying experience (UX) t-double el sales',
            '0% Commission (Arba7ak w maghoudak leek)',
            'Dashboard takshef arba7ak',
            'Domain w hosting "Majanan" awel sana',
            '24/7 Egyptian Tech Support fe dahrak',
          ],
          cons: [
            'Quality me7taga budget motawasseta',
            'Tech btetawar ma3ak (Periodic updates)',
          ],
          bestFor:
            'Lil brands el gada elly btedawar 3al tamayoz wel professionalism mn awel yom.',
          whatsappMessage:
            'Ya Koda, el Koda package 3agbany w 3ayez a3raf el details.',
        },
        {
          title: 'Empire: Full Ownership',
          subtitle: 'Custom Development',
          tag: 'Investment Forever',
          pros: [
            'Tamleek 100% (Asl mn osoul sharekatak)',
            'Mobile Apps (iOS & Android) b-esmak',
            'Isolated Databases (A3la daragat el aman)',
            'Full control 3ala kol satr code',
            'Scalability lil malayeen',
          ],
          cons: [
            'Capital Investment (Investment ra2smaly)',
            'Architecture da2eeqa (W2t lil development)',
            'Dedicated dev team le mashrou3ak',
          ],
          bestFor:
            'Lil sharekat el kobra elly btedawar 3al independence, el aman, w ta3zeem qeemat el shareka.',
          whatsappMessage:
            'Ya Koda, bfakar fil Emperor package w 3ayez amtelek el system bel kamel.',
        },
      ],
      ctaTitle: 'Lessa msh 3aref anhy awfarlak?',
      ctaAccent: 'Teegy ne7sebha sawa.',
      ctaDesc:
        'E7na han2olak el arqam el 7a2e2eya wel hidden fees illi gherna mabiyo2lhash. Han-analyze el sales volume bta3ak w n2olak anhy tare2 haykasabak aktar.',
      ctaButton: 'Calculate Profits with an Expert',
      whatsappMessage:
        'Ya Koda, 3ayez mosa3da fe 7esab el costs wel moqarna ben el Custom wel Ready-made.',
    },
    painPoints: {
      title: 'Scaling Up...',
      titleAccent: 'Wel Wara2 wel 2alam',
      titleSuffix: 'Maba2osh yaklo 3esh.',
      points: [
        {
          title: 'El Customer mabiyestannash',
          desc: 'Kol de2e2a ta2kheer = zaboon ra7 lil competitor. El System bi-handle el sales 24/7.',
        },
        {
          title: 'Bany betak 3la ard gherak',
          desc: 'Social pages momken tet2efel fe sanya. Mawqe3ak howa melkak, w data 3omala2ak fe gebak enta bas.',
        },
        {
          title: 'Floosak say7a fil stock?',
          desc: 'E3raf kesebt kam w saraft kam bel geneh bi click wa7da.',
        },
      ],
    },
    solution: {
      title: 'Your Store in Their Pocket..',
      titleAccent: '24/7.',
      desc: 'Enta tagher shater, msh customer support. Leh tdaya3 yomak fe "bkam" w "el maqas da mawgod"?.. El System haye3red w ybee3 w ye7aseb w enta bet-chill.',
      features: [
        'Blazing Fast',
        'Cash or Visa',
        'Connected with Shipping',
        'Copycat Proof',
      ],
    },
    trustStats: {
      commission: {
        label: 'Sales Commission',
        subtext: 'Maksabak kolo leek. Msh ben-sharekak fe ta3abak.',
      },
      uptime: {
        label: 'System Uptime',
        subtext: 'Shaghal 24/7 7ata wa2t el offers wel daght.',
      },
      support: {
        label: 'Local Support',
        subtext: 'Team kamel fe dahrak biye7el mashakelak.',
      },
      security: {
        label: 'Data Security',
        subtext: 'M7dsh biyshoof data 3omala2ak gherak.',
      },
    },
    guidance: {
      title: 'Tayeh west 100 Option?',
      titleAccent: 'We Guide You.',
      desc: 'El bedaya feha qrarat kteer (Shipping, Payment, Hosting). E7na banakhtarlek el anasb leek wel budget bta3tak.',
      confusion: 'Choice Overload',
      clarity: 'Clarity with Koda',
      points: [
        'Msh bn-build bas, ben-nase7ak bel afdal lil business.',
        'Benkhtarlek el Shipping/Payment partners 3la 7asab 7agm shoghlak.',
        'Ben-dmanlek enak matdfa3sh zyada fe features msh me7tagha.',
        'Ben-handle el Tech details 3shan enta trkez fil business.',
      ],
      cta: 'Start Planning Your Project',
      whatsappMessage:
        'Ya Koda, me7tag mosa3da fe ekhtyar afdal el 7lol wel partners le mashrou3y.',
    },
    faq: {
      title: 'Questions',
      titleAccent: 'To Help You Decide',
      subtitle:
        'Agweba shafafa w sare7a 3ashan takhod el decision w enta metamen 100%.',
      items: [
        {
          question: 'Ezay akhtar el package el monasba leya?',
          answer:
            'Simple! Law lessa bet-test el market, abda2 b-"Rocket". Law 3andak brand w 3ayez 0% Commission w UI professional, "Koda Package" hya el a7san. Law company kebeera w 3ayez tamleek 100%, "Empire" hya el investment el sa7.',
        },
        {
          question: 'Hal btakhoodo Commission 3ala el sales?',
          answer:
            'Fe baqat "Koda" w "Emperor": 3omolatna 0%. Kol geneh b-tbee3o byed-khol gebak bel kamel. Ama fe "Rocket", bykon fe resoum nagah ramzya (Pay as you grow) lil platform elly 3aleha el store.',
        },
        {
          question: 'El Domain wel Hosting.. 3alaya wala 3alekom?',
          answer:
            'Mat-shel-sh ham-hom! 3amlen-lak 3ard awel sana el domain hayb2a majanan tamaman 3ashan trakez fil business bta3ak w mabe3atak.',
        },
        {
          question: 'Eh elly yedman-ly en bayanaty w 3omala2y fe aman?',
          answer:
            'Fe Koda, el khososya khat a7mar. Bayanat 3omala2ak melkak enta bas, w msh bn-share-ha ma3 ay taraf talt w b-tkon encrypted b-a7das el tech elly fil so2 el 3alamy.',
        },
        {
          question: 'Law wa2et moshkela technical, meen hay-sa3edny?',
          answer:
            'Team el support bta3na Masry 100% w mawgood 24/7 3ala WhatsApp. Msh hat-kalem "Bot", e7na ma3ak la7za b-la7za.',
        },
        {
          question:
            'Hal el store by-support el Visa wel installments w Vodafone Cash w Fawry?',
          answer:
            'Akeed! Ben-rbot el store bi-ash-har payment gateways fe Masr (Paymob, Fawry, Tabby) w bn-sa3dak t-activate installments (ValU, Souhoola) 3ashan t-increase el sales.',
        },
        {
          question: 'El store by-akhod wa2t ad eh 3ashan y-launch?',
          answer:
            'Baqet el "Rocket" w "Koda" btestalemha fe (7 le 10 ayam) 3amal. Ama el "Emperor" b-takhod wa2t aktar shwaya (mn 3 weeks le shahr) 3ashan bn-ehtam b-kol details el design wel custom code.',
        },
      ],
    },
    servicesEcosystem: {
      title: 'Infrastructure',
      titleAccent: 'Fahma el So2 el Masry',
      desc: 'Benrbot el business bta3ak bi aqwa Service Providers fe Masr 3ashan el cycle temshy Auto.',
      points: [
        'Tawfeer fe 3omolat el Payment wel Shipping.',
        'Full Automation lil Shipping cycle.',
        'Local Tech Support fahem el market.',
        'Smart Reports 3ashan takhod Data-Driven decisions.',
      ],
      features: [
        {
          title: 'Integrated Logistics',
          desc: 'Manage el shipments mn nafs el dashboard.',
          partners: ['Bosta', 'Mylerz', 'Aramex'],
        },
        {
          title: 'Local Payment Gateways',
          desc: 'Secure & Fast Collection bi a2al commission.',
          partners: ['Fawry', 'Paymob', 'Instapay'],
        },
        {
          title: 'Smart Dashboard',
          desc: 'Inventory & Sales Management System shamel.',
        },
      ],
      valueTitle: 'Msh bn-rkb Software w khalas..',
      valueAccent: 'E7na bn-protect el margins bta3tak.',
      valueDesc:
        'Ekhtyar Payment Gateway ghalat momken yekhsarak floos kteer fil commissions. E7na han-guide you lil sa7.',
      cta: 'Discuss Options with an Expert',
      whatsappMessage:
        'Ya Koda, me7tag esteshara b-khosos payment gateways w shipping 3ashan awafar costs.',
    },
    integrations: {
      title: 'Integrated with Your Favorites',
    },
    cta: {
      title: 'Lessa msh 3aref anhy awfarlak?',
      button: 'Yalla Ne7sebha Sawa',
      desc: 'E7na hankshflak el arqam el 7a2e2eya wel hidden costs 3ashan t-maximize el profit.',
      whatsappMessage:
        'Ya Koda, 3ayez a7seb el costs w a3mel moqarna le mashrou3y.',
    },
    footer: {
      tagline: 'Mn Dokan... Li Empire',
    },
    leadQuiz: {
      questionLabel: 'So2al',
      ofLabel: 'mn',
      prev: 'Erga3',
      next: 'El Jay',
      finish: 'Shoof el 7al el monaseb (WhatsApp)',
      whatsappMessage: (answers: string[]) =>
        `Ya Koda, I answered the quiz: Selling on ${answers[0]}, Volume ${answers[1]}, Challenge ${answers[2]}.`,
      questions: [
        {
          title: 'Bet-sell feen currently?',
          options: [
            'Facebook/Instagram',
            'Physical Store',
            '3andy site w 3ayez atawaro',
          ],
        },
        {
          title: 'Average Daily Orders?',
          options: ['Lessa babda2', 'Mn 10 li 50', 'Aktar mn 50'],
        },
        {
          title: 'Eh akbar Challenge?',
          options: [
            'El rad 3al rasayel',
            'Inventory Mgmt',
            'Shipping Companies',
          ],
        },
      ],
    },
  },
} as const;

export type ContentType = typeof content.ar | typeof content.en;
