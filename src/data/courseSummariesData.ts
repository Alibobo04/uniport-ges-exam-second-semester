import { CourseId, ChapterSummary } from '../types';

export const COURSE_SUMMARIES: Record<CourseId, ChapterSummary[]> = {
  ges112: [
    {
      id: 'sum_112_1',
      chapterNumber: 1,
      title: 'Geographical Environment, Culture Zones & Peoples of Nigeria',
      topicSubtitle: 'Ecological Belts, Inter-regional Trade & Settlement Patterns',
      summaryBullets: [
        'Nigeria is situated in West Africa between latitudes 4°N and 14°N and longitudes 3°E and 15°E, encompassing diverse ecological belts from southern Atlantic coastline to the northern Sahel.',
        'Southern Mangrove Swamp & Tropical Rainforest Belts receive intense rainfall (2,000mm–3,000mm+), characterized by heavy dense timber, oil palm, rubber, and root crop agriculture (yams, cassava, cocoyams).',
        'Middle Belt & Northern Savanna Zones (Guinea, Sudan, Sahel) feature open grasslands and seasonal rainfall, specializing in grain crops (guinea corn/sorghum, millet, maize, cowpeas) and livestock/cattle husbandry.',
        'Ecological Complementarity: Differences in natural endowments fostered vigorous pre-colonial inter-regional trade. Forest societies exchanged palm oil, kolanuts, and dried sea fish for northern cattle, hides/skins, grains, and natron/rock salt.',
        'Major Nigerian Linguistic Families belong predominantly to the Niger-Congo phylum (Kwa, Benue-Congo, Adamawa-Ubangi) alongside Afro-Asiatic (Hausa, Kanuri, Shuwa Arab) in the northeast.'
      ],
      keyDefinitions: [
        { term: 'Culture Zone', meaning: 'A geographical area inhabited by communities sharing similar cultural patterns, socio-economic adaptations, and historical traditions.' },
        { term: 'Ecological Complementarity', meaning: 'Mutual economic interdependence where differing ecological belts exchange regional surplus commodities for mutual sustenance.' },
        { term: 'Mangrove Swamp Forest', meaning: 'The tidal coastal forest zone of the Niger Delta rich in aquatic resources, salt making, and palm oil produce.' },
        { term: 'Sudan Savanna', meaning: 'The northern semi-arid grassland belt renowned for cereal cultivation (millet, sorghum) and pastoralism.' }
      ],
      examHotspotTips: [
        'CBT Hotspot: Kolanuts (Gbanja and Abata) were traded northward from Yoruba forest areas to Hausa states, while cattle, leather, and salt moved southward.',
        'Exam Alert: Know the sequence of vegetation from south to north: Mangrove Swamp → Rainforest → Guinea Savanna → Sudan Savanna → Sahel Savanna.',
        'UniPort Question: Ecological diversity united rather than separated Nigerian groups through pre-colonial trade routes.'
      ],
      keyDatesAndFormulas: [
        { label: 'Geographical Coordinates', detail: 'Latitudes 4°N to 14°N; Longitudes 3°E to 15°E' },
        { label: 'Primary Linguistic Phylum', detail: 'Niger-Congo Family (embraces over 85% of Nigerian indigenous languages)' }
      ],
      cbtPastQuestionHotspots: [
        {
          questionFocus: 'Which forest commodity formed the largest volume of northward internal trade?',
          verifiedAnswer: 'Kolanuts and Palm Oil',
          trapAlert: 'Do not confuse with Groundnuts, which were exported southward from the North.'
        },
        {
          questionFocus: 'What geographical factor primarily determined pre-colonial Nigerian settlement patterns?',
          verifiedAnswer: 'Ecological adaptation and availability of water/fertile soil',
          trapAlert: 'Avoid options claiming religious conquests dictated early prehistoric settlement.'
        }
      ]
    },
    {
      id: 'sum_112_2',
      chapterNumber: 2,
      title: 'Major Pre-Colonial Archaeological Centers & Heritage Sites',
      topicSubtitle: 'Nok, Igbo-Ukwu, Ife, Benin, Daima & Esie Civilizations',
      summaryBullets: [
        'Nok Culture (c. 500 BC – 200 AD, Kaduna State / Middle Belt): Discovered in 1928 by tin miners near Nok village and studied by Bernard Fagg. Features the oldest known terracotta art in Sub-Saharan Africa and early iron smelting furnaces.',
        'Nok Artistic Characteristics: Stylized human and animal terracotta sculptures featuring distinctive pierced triangular/oval eyes, flared nostrils, parted lips, and elaborate coiffures.',
        'Igbo-Ukwu Artifacts (Dated to 9th Century AD, Anambra State): Excavated by Prof. Thurstan Shaw in 1959–1960 at three key sites (Igbo-Isaiah, Igbo-Richard, and Igbo-Jonah). Showcases sophisticated lost-wax (cire perdue) bronze casting, thousands of glass beads, and ritual regalia tied to the Eze Nri.',
        'Ife Art Tradition (11th – 15th Century AD, Osun State): Famous for exquisitely naturalistic terracotta and copper-rich alloy/brass portrait heads representing the Oonis (kings) and royal nobility.',
        'Benin Art Tradition: Renowned for lost-wax cast brass plaques, royal commemorative heads, and ivory carvings honoring the Oba and Queen Mother (Iyoba Idia). Heavily looted during the 1897 British Punitive Expedition.',
        'Other Archaeological Sites: Daima (Lake Chad basin, Borno, early farming/bone harpoons); Esie (Kwara State, largest collection of soapstone figures in Africa); Owo (artistic bridge between Ife and Benin).'
      ],
      keyDefinitions: [
        { term: 'Lost-Wax (Cire Perdue)', meaning: 'A precise metallurgical casting method where molten bronze or brass replaces a carved beeswax model enclosed in a clay mold.' },
        { term: 'Terracotta', meaning: 'Unglazed, baked brownish-red clay used to model ancient figurative sculptures and vessels.' },
        { term: 'Eze Nri', meaning: 'The sacred, priest-king monarch of the Nri kingdom in Igboland associated with the Igbo-Ukwu bronzes.' },
        { term: 'Iyoba', meaning: 'The Queen Mother of Benin, notably immortalized in Queen Idia commemorative ivory masks (FESTAC 77 symbol).' }
      ],
      examHotspotTips: [
        'CBT Hotspot: Igbo-Ukwu is chronologically the EARLIEST bronze/metallurgical tradition in southern Nigeria (9th century AD), predating Ife (11th-15th century) and Benin.',
        'Nok terracotta eyes are pierced/perforated at the pupils, nostrils, and ear holes (essential recognition feature in exam MCQs).',
        'Prof. Thurstan Shaw was the lead archaeologist who scientifically excavated Igbo-Ukwu.'
      ],
      keyDatesAndFormulas: [
        { label: 'Nok Civilization Chronology', detail: 'c. 500 BC – 200 AD (Iron Age / Middle Belt)' },
        { label: 'Igbo-Ukwu Chronology', detail: '9th Century AD (excavated 1959 by Thurstan Shaw)' },
        { label: 'British Punitive Expedition', detail: 'February 1897 (Benin bronzes looted under Admiral Rawson)' }
      ],
      cbtPastQuestionHotspots: [
        {
          questionFocus: 'Which ancient culture produced the oldest known terracotta sculptures in Sub-Saharan Africa?',
          verifiedAnswer: 'Nok Culture (Kaduna State)',
          trapAlert: 'Do not choose Ife or Igbo-Ukwu; Nok is significantly older (500 BC).'
        },
        {
          questionFocus: 'Who was the British archaeologist that excavated the famous Igbo-Ukwu bronze site in 1959?',
          verifiedAnswer: 'Prof. Thurstan Shaw',
          trapAlert: 'Bernard Fagg investigated Nok, while Thurstan Shaw excavated Igbo-Ukwu.'
        }
      ]
    },
    {
      id: 'sum_112_3',
      chapterNumber: 3,
      title: 'Pre-Colonial Socio-Political Systems & Governance Institutions',
      topicSubtitle: 'Hausa/Fulani Emirates, Old Oyo, Igbo Village Democracy & Niger Delta City-States',
      summaryBullets: [
        'Hausa/Fulani Emirates (Centralized Theocracy): Following the 1804 Usman Dan Fodio Jihad, emirates were administered by the Emir as political and spiritual head. Key palace officers: Waziri (Prime Minister), Madawaki (Army Commander), Galadima (City Administrator), Sarkin Fada (Head of Palace Staff), Alkali (Islamic Sharia Judge).',
        'Old Oyo Empire (Constitutional Monarchy): Governed by the Alaafin (King) whose executive authority was checked and balanced by the Oyomesi (council of 7 hereditary kingmakers led by the Bashorun). If an Alaafin became tyrannical, the Oyomesi presented him an empty calabash/parrot eggs, mandating ritual suicide (*Iku*).',
        'Ogboni Cult & Are Ona Kakanfo: The secret Ogboni society mediated between the Alaafin and the Oyomesi. The Are Ona Kakanfo was the supreme field marshal/generalissimo, barred from losing any major war on penalty of exile or death.',
        'Igbo Traditional Governance (Direct Village Democracy / Acephalous): Non-centralized, egalitarian social order. Decisions were made by consensus in the Amala (village assembly), Council of Elders (Ndichie), Age Grades (Ebiri/Uke), Title Societies (Ozo/Nze), and daughters of the lineage (Umuada).',
        'Niger Delta City-States & Canoe House System (*Wari*): Coastal mercantile city-states (Bonny, Nembe, Kalabari, Okrika, Opobo) structured around the Canoe House. Upward social mobility was based on commercial talent and naval defense rather than noble birth alone (e.g., King Jaja of Opobo).'
      ],
      keyDefinitions: [
        { term: 'Acephalous Society', meaning: 'A stateless or decentralized community operating without a single supreme centralized monarch or monarchical hierarchy.' },
        { term: 'Oyomesi', meaning: 'The council of seven principal hereditary kingmakers in the Old Oyo Empire led by the Bashorun.' },
        { term: 'Canoe House (Wari)', meaning: 'A compact socio-political and commercial maritime corporation capable of manning war canoes and trading fleets in the Niger Delta.' },
        { term: 'Alkali', meaning: 'A trained Islamic judge presiding over Sharia courts in pre-colonial and colonial Northern Nigeria.' }
      ],
      examHotspotTips: [
        'CBT Rule: In Old Oyo, the Bashorun headed the Oyomesi kingmakers and held the constitutional power to reject an authoritarian Alaafin.',
        'In traditional Igbo society, political authority was segmentary, diffuse, and democratic—there was no supreme king ruling all Igbo towns ("Igbo enwe eze").',
        'The Canoe House System allowed former enslaved persons of merit to rise to the highest leadership (House Head/King).'
      ],
      keyDatesAndFormulas: [
        { label: 'Sokoto Jihad Proclamation', detail: '1804 (Led by Shehu Usman Dan Fodio)' },
        { label: 'Old Oyo Constitutional Head', detail: 'Alaafin (Monarch) checked by Oyomesi (Bashorun) + Ogboni Cult' }
      ],
      cbtPastQuestionHotspots: [
        {
          questionFocus: 'In the pre-colonial Old Oyo empire, what signified that an Alaafin had lost the confidence of his people?',
          verifiedAnswer: 'Presentation of an empty calabash or parrot’s egg by the Bashorun',
          trapAlert: 'The Alaafin was not impeached through modern parliamentary voting; it was ritual rejection.'
        },
        {
          questionFocus: 'Why did the British policy of Indirect Rule collapse in Eastern Nigeria (Igboland)?',
          verifiedAnswer: 'The imposition of artificial Warrant Chiefs violated the traditional acephalous, council-based democracy',
          trapAlert: 'Do not answer that Igbos lacked laws; they lacked centralized autocrats.'
        }
      ]
    },
    {
      id: 'sum_112_4',
      chapterNumber: 4,
      title: 'Inter-Group Relations, Trade Networks & European Contact',
      topicSubtitle: 'Trans-Saharan Commerce, Atlantic Slave Trade & Legitimate Palm Oil Trade',
      summaryBullets: [
        'Trans-Saharan Trade Routes: Ancient caravan networks crossing the Sahara desert linked the Nigerian Sudan (Kano, Katsina, Borno) to North Africa, Egypt, and the Mediterranean. Commodities moving north: gold, hides/skins, ivory, slaves, ostrich feathers; moving south: rock salt, textiles, horses, glassware, firearms.',
        'Trans-Atlantic Slave Trade (15th–19th Century): Sparked by European demand for plantation labor in the Americas. Coastal Nigerian states acted as middlemen between inland suppliers and European slave ships.',
        'Abolition & Transition to "Legitimate Commerce": The British Abolition Act (1807) and industrialization shifted trade to tropical agricultural raw materials, predominantly Palm Oil and Palm Kernels from the Niger Delta ("Oil Rivers") for lubricating British factory machinery and soap manufacture.',
        'British Mercantile Imperialism: The National African Company, later chartered as the Royal Niger Company (1886) under Sir George Goldie, established commercial monopoly treaties across the Niger basin until its charter was revoked in 1899.',
        'Resistance of Delta Monarchs: Indigenous merchant-kings resisted British trade monopoly, leading to the military overthrow and deportation of King Jaja of Opobo (1887), Nana Olomu of Itsekiri (1894), and Oba Ovonramwen of Benin (1897).'
      ],
      keyDefinitions: [
        { term: 'Trans-Saharan Trade', meaning: 'The long-distance overland camel caravan trade connecting West Africa across the Sahara desert to North Africa and the Mediterranean.' },
        { term: 'Legitimate Commerce', meaning: 'The trade in agricultural raw materials (palm oil, cocoa, groundnuts) that replaced the trans-Atlantic slave trade in the 19th century.' },
        { term: 'Royal Niger Company', meaning: 'The British chartered mercantile corporation led by Sir George Goldie that spearheaded British commercial penetration along the Niger.' },
        { term: 'Oil Rivers', meaning: 'The coastal rivers and creeks of the Niger Delta that formed the global epicenter of the 19th-century palm oil trade.' }
      ],
      examHotspotTips: [
        'CBT Hotspot: The 1807 British Act abolished the slave trade, giving rise to "Legitimate Trade" dominated by Palm Oil.',
        'Sir George Goldie was the key figure behind the Royal Niger Company and British monopoly treaties along the River Niger.',
        'King Jaja of Opobo was exiled to the West Indies (St. Vincent / Barbados) in 1887 for defending free indigenous trade rights.'
      ],
      keyDatesAndFormulas: [
        { label: 'British Abolition of Slave Trade', detail: '1807 (Transition to Legitimate Palm Oil Trade)' },
        { label: 'Royal Niger Company Charter', detail: '1886 – 1899 (Headed by Sir George Dashwood Goldie)' },
        { label: 'Exile of King Jaja of Opobo', detail: '1887 (Deported to West Indies by British Consul Johnston)' }
      ],
      cbtPastQuestionHotspots: [
        {
          questionFocus: 'Which economic commodity replaced the Trans-Atlantic slave trade in the Niger Delta in the 19th century?',
          verifiedAnswer: 'Palm Oil and Palm Kernels (Legitimate Trade)',
          trapAlert: 'Crude petroleum was not discovered until 1956; 19th century was palm oil.'
        },
        {
          questionFocus: 'Who founded the Royal Niger Company that secured British commercial control along the Niger River?',
          verifiedAnswer: 'Sir George Goldie',
          trapAlert: 'Lord Lugard was a colonial administrator/soldier, not the commercial founder of the RNC.'
        }
      ]
    },
    {
      id: 'sum_112_5',
      chapterNumber: 5,
      title: 'Colonial Conquest, 1914 Amalgamation & The Indirect Rule System',
      topicSubtitle: 'Lugardian Administration, Warrant Chiefs & 1929 Aba Women’s War',
      summaryBullets: [
        'Colonial Encroachment: Initiated with the 1861 Annexation of Lagos as a Crown Colony, the 1885 Berlin Conference declaration of the Oil Rivers Protectorate, and the 1900 formal proclamation of the Protectorates of Northern and Southern Nigeria.',
        'The 1914 Amalgamation: On January 1, 1914, Lord Frederick Lugard merged the Northern Nigeria Protectorate and the Colony/Protectorate of Southern Nigeria into the single entity named "Nigeria" (coined by Flora Shaw in 1897).',
        'Motive for Amalgamation: Primarily financial and administrative. The British sought to use the buoyant customs revenues and budgetary surpluses of Southern Nigeria to subsidize the persistent fiscal deficit of the landlocked Northern Protectorate.',
        'Indirect Rule System: British administrative mechanism of governing colonial subjects through their indigenous traditional rulers, institutions, and customary laws under British supervisory control.',
        'Why Indirect Rule Succeeded in the North & West: Strong existing centralized hierarchies (Emirs and Obas) with entrenched tax collection and court machinery.',
        'Failure in the East & 1929 Aba Women’s War: In the egalitarian Igbo society, appointed British "Warrant Chiefs" were corrupt and autocratic. In November 1929, widespread rumors of direct taxation on women sparked the historic Aba Women’s War (*Ogu Umunwanyi*), dismantling the warrant chief system.'
      ],
      keyDefinitions: [
        { term: 'Amalgamation', meaning: 'The administrative merger of the Colony and Protectorates of Northern and Southern Nigeria on January 1, 1914.' },
        { term: 'Indirect Rule', meaning: 'The British colonial policy of administering colonized peoples through their existing traditional rulers and native authorities.' },
        { term: 'Warrant Chief', meaning: 'An artificial chief appointed by British warrant to rule over decentralized communities in pre-colonial Eastern Nigeria.' },
        { term: 'Aba Women’s War (1929)', meaning: 'A historic mass anti-colonial uprising of Southeastern women protesting taxation and autocratic warrant chiefs.' }
      ],
      examHotspotTips: [
        'CBT Rule: Flora Shaw (later Lady Lugard) coined the name "Nigeria" from "Niger-area" in an article for The Times in 1897.',
        'The primary motive for the 1914 amalgamation was economic (subsidizing northern budgetary deficit with southern revenue).',
        'The 1929 Aba Women’s War began at Oloko near Aba when a colonial census taker (Mark Emeruwa) attempted to count women and livestock.'
      ],
      keyDatesAndFormulas: [
        { label: 'Annexation of Lagos', detail: 'August 1861 (Treaty signed by Oba Dosunmu)' },
        { label: 'Proclamation of Northern/Southern Protectorates', detail: 'January 1, 1900' },
        { label: 'Official Amalgamation of Nigeria', detail: 'January 1, 1914 (Governor-General: Sir Frederick Lugard)' },
        { label: 'Aba Women’s War (Ogu Umunwanyi)', detail: 'November – December 1929' }
      ],
      cbtPastQuestionHotspots: [
        {
          questionFocus: 'What was the core economic reason for the 1914 Amalgamation of Nigeria by Lord Lugard?',
          verifiedAnswer: 'To use the financial surplus of the Southern Protectorate to subsidize the Northern budgetary deficit',
          trapAlert: 'It was not done out of altruistic desire to create a unified African democracy.'
        },
        {
          questionFocus: 'Where did the 1929 Aba Women’s War officially begin?',
          verifiedAnswer: 'Oloko (in present-day Abia State)',
          trapAlert: 'The war is named after Aba because of the major protests, but it started in Oloko under Warrant Chief Okugo.'
        }
      ]
    },
    {
      id: 'sum_112_6',
      chapterNumber: 6,
      title: 'Constitutional Evolution, Nationalist Movements & 1960 Independence',
      topicSubtitle: 'Clifford (1922), Richards (1946), Macpherson (1951), Lyttelton (1954) to 1960',
      summaryBullets: [
        '1922 Clifford Constitution: Introduced the first **Elective Principle** in Nigeria, allocating 4 elected legislative seats (3 for Lagos, 1 for Calabar). Led Herbert Macaulay to found Nigeria’s first political party, the Nigerian National Democratic Party (NNDP, 1923).',
        '1946 Richards Constitution: Introduced **Regionalism** by dividing Nigeria into three administrative regions (Northern, Western, and Eastern Regions) and establishing Regional Houses of Assembly.',
        '1951 Macpherson Constitution: Notable for extensive nationwide grassroots consultations from village to regional levels. Created a Central Council of Ministers and semi-autonomous regional legislatures with power to make laws on specific subjects.',
        '1954 Lyttelton Constitution: Established formal **Federalism** in Nigeria. Granted regions full autonomy with their own Premier, regional civil service, and regional judiciary. Lagos was carved out as a Federal Territory.',
        '1960 Independence & 1963 Republican Constitution: On October 1, 1960, Nigeria achieved sovereign independence with Sir Abubakar Tafawa Balewa as Prime Minister and Dr. Nnamdi Azikiwe as Governor-General. On October 1, 1963, Nigeria became a Federal Republic, severing constitutional allegiance to the British Crown.'
      ],
      keyDefinitions: [
        { term: 'Elective Principle', meaning: 'The constitutional right of citizens to elect political representatives, first introduced in Nigeria in 1922.' },
        { term: 'Regionalism', meaning: 'Dividing Nigeria into three geopolitical administrative units (North, West, East) under the 1946 Richards Constitution.' },
        { term: 'Federalism', meaning: 'A constitutional division of sovereign powers between a central national government and autonomous regional/state governments (1954 Lyttelton Constitution).' },
        { term: 'Republican Constitution (1963)', meaning: 'The constitution that made Nigeria a sovereign republic, replacing the British Monarch with a Nigerian President.' }
      ],
      examHotspotTips: [
        'CBT Rule: 1922 Clifford = Elective Principle (4 seats: 3 Lagos, 1 Calabar).',
        '1946 Richards = Introduced Regionalism (3 regions: North, West, East).',
        '1954 Lyttelton = Established Nigerian Federalism and the position of Regional Premier.',
        'Herbert Macaulay is celebrated as the "Father of Nigerian Nationalism".'
      ],
      keyDatesAndFormulas: [
        { label: '1922 Clifford Constitution', detail: 'Elective principle (4 seats) & NNDP formed by Herbert Macaulay' },
        { label: '1946 Richards Constitution', detail: 'Formal Regionalism (Northern, Western, Eastern Regions)' },
        { label: '1954 Lyttelton Constitution', detail: 'Adoption of true Federalism & Regional Autonomy' },
        { label: 'Nigerian Independence', detail: 'October 1, 1960 (Prime Minister: Tafawa Balewa)' },
        { label: 'First Republic Declared', detail: 'October 1, 1963 (President: Dr. Nnamdi Azikiwe)' }
      ],
      cbtPastQuestionHotspots: [
        {
          questionFocus: 'Which colonial constitution first introduced the Elective Principle into Nigerian politics?',
          verifiedAnswer: '1922 Clifford Constitution',
          trapAlert: 'Do not choose Richards (1946) or Macpherson (1951); Clifford was the first in 1922.'
        },
        {
          questionFocus: 'Which constitution established a true federal structure of government in colonial Nigeria?',
          verifiedAnswer: '1954 Lyttelton Constitution',
          trapAlert: 'Richards introduced regionalism, but Lyttelton formally enacted constitutional federalism.'
        }
      ]
    }
  ],
  ges212: [
    {
      id: 'sum_212_1',
      chapterNumber: 1,
      title: 'Meaning, Nature, Scope & Core Branches of Philosophy',
      topicSubtitle: 'Etymology, Critical Reflection & The Quadripartite Divisions',
      summaryBullets: [
        'Etymological Definition: Philosophy is derived from two Greek words: *Philein* (meaning "to love") and *Sophia* (meaning "wisdom"). Literally translated as the "Love of Wisdom". Term traditionally coined by Pythagoras.',
        'Nature of Philosophy: An active, second-order, critical, systematic, and rational inquiry into fundamental questions regarding reality, knowledge, human existence, and morality.',
        'Four Primary Branches of Philosophy:',
        '1. Epistemology: The theory and study of the nature, sources, justification, scope, and limits of knowledge.',
        '2. Metaphysics: The philosophical investigation into the fundamental nature of ultimate reality, being, ontology, the mind-body problem, space-time, and existence.',
        '3. Axiology (Value Theory): Comprises **Ethics** (moral philosophy, good vs. bad, right vs. wrong conduct) and **Aesthetics** (philosophy of art, beauty, and taste).',
        '4. Logic: The normative and systematic study of the principles, laws, and methods of sound reasoning and valid inference.'
      ],
      keyDefinitions: [
        { term: 'Philosophy', meaning: 'From Greek "Philein" (to love) and "Sophia" (wisdom); the systematic, critical pursuit of fundamental truths about reality, mind, and values.' },
        { term: 'Metaphysics', meaning: 'The branch of philosophy investigating the ultimate nature of reality, being (ontology), and existence.' },
        { term: 'Axiology', meaning: 'The philosophical study of value, encompassing moral values (Ethics) and artistic/aesthetic values (Aesthetics).' },
        { term: 'Second-Order Discipline', meaning: 'A reflective discipline that critically examines the foundational concepts, axioms, and methodologies of other first-order fields (e.g., Philosophy of Science, Philosophy of Law).' }
      ],
      examHotspotTips: [
        'CBT Rule: Philosophy is not dogmatic; it is characterized by rigorous skepticism, critical analysis, and logical consistency.',
        'Pythagoras was the first thinker to describe himself as a "philosopher" (lover of wisdom) rather than a "sophist" (wise man).',
        'Distinguish Ethics (moral duty/human conduct) from Aesthetics (nature and perception of beauty/art).'
      ],
      keyDatesAndFormulas: [
        { label: 'Etymological Roots', detail: 'Philein (To Love) + Sophia (Wisdom) = Love of Wisdom' },
        { label: 'Four Classical Branches', detail: 'Epistemology, Metaphysics, Axiology (Ethics/Aesthetics), Logic' }
      ],
      cbtPastQuestionHotspots: [
        {
          questionFocus: 'Which branch of philosophy investigates questions such as "What is the ultimate nature of reality?"',
          verifiedAnswer: 'Metaphysics (Ontology)',
          trapAlert: 'Epistemology studies knowledge, while Metaphysics studies reality and being.'
        },
        {
          questionFocus: 'Why is philosophy described as a "second-order" discipline?',
          verifiedAnswer: 'Because it critically examines and evaluates the assumptions, methods, and principles of other disciplines',
          trapAlert: 'It does not mean it is second in importance; it means meta-level critical reflection.'
        }
      ]
    },
    {
      id: 'sum_212_2',
      chapterNumber: 2,
      title: 'Epistemology & Theories of Knowledge Acquisition',
      topicSubtitle: 'Rationalism vs. Empiricism, Skepticism & Justified True Belief (JTB)',
      summaryBullets: [
        'The Concept of Knowledge: In classical epistemology, propositional knowledge is defined as **Justified True Belief (JTB)** — a subject $S$ knows proposition $P$ if and only if: (1) $P$ is true; (2) $S$ believes $P$; and (3) $S$ is justified in believing $P$.',
        'Rationalism (Epistemic School): Asserts that pure reason, logical deduction, and innate ideas are the ultimate and foundational sources of genuine knowledge, independent of unreliable sensory experience. Champions: René Descartes (*"Cogito Ergo Sum"* — I think, therefore I am), Baruch Spinoza, Gottfried Wilhelm Leibniz.',
        'Empiricism (Epistemic School): Asserts that all human knowledge is derived entirely from sensory perception and empirical observation. Champions: John Locke (*"Tabula Rasa"* — human mind is a blank slate at birth), George Berkeley (*"Esse est percipi"* — to be is to be perceived), David Hume (Sense Impressions and Ideas).',
        'Other Sources of Knowledge: Intuition (immediate non-inferential grasp), Divine Revelation/Faith, and Authoritative Testimony.',
        'Epistemological Skepticism: The philosophical position questioning whether absolute certainty or dogmatic knowledge is attainable by human faculties (Pyrrhonism, Cartesian Methodological Doubt).'
      ],
      keyDefinitions: [
        { term: 'Epistemology', meaning: 'The theory of knowledge regarding what constitutes knowledge, how it is acquired, and how beliefs are justified.' },
        { term: 'Rationalism', meaning: 'The philosophical view that reason and intellect, rather than sense experience, are the primary sources of knowledge.' },
        { term: 'Empiricism', meaning: 'The philosophical doctrine that all concepts, ideas, and knowledge originate solely from sensory experience.' },
        { term: 'Tabula Rasa', meaning: 'John Locke’s metaphor that the human mind begins as a blank slate upon which sensory experience writes.' },
        { term: 'Cogito Ergo Sum', meaning: 'René Descartes’ foundational truth: "I think, therefore I am" (the indubitable proof of the thinker’s existence).' }
      ],
      examHotspotTips: [
        'CBT Rule: Descartes = Rationalist (Method of Doubt & Cogito Ergo Sum).',
        'John Locke = Empiricist (Tabula Rasa / Rejection of Innate Ideas).',
        'David Hume = Radical Empiricist/Skeptic who divided human reasoning into "Relations of Ideas" and "Matters of Fact" (Hume’s Fork).'
      ],
      keyDatesAndFormulas: [
        { label: 'Tripartite Definition of Knowledge (JTB)', detail: 'Knowledge = Truth + Belief + Justification' },
        { label: 'Foundational Epistemic Divide', detail: 'Rationalism (Reason/Innate Ideas) vs. Empiricism (Sense Experience/Tabula Rasa)' }
      ],
      cbtPastQuestionHotspots: [
        {
          questionFocus: 'Which philosopher introduced the concept of the mind as a "Tabula Rasa" (blank slate)?',
          verifiedAnswer: 'John Locke (Empiricism)',
          trapAlert: 'Do not confuse with René Descartes, who argued for innate ideas.'
        },
        {
          questionFocus: 'What three conditions must be satisfied for a claim to qualify as propositional knowledge under the traditional account?',
          verifiedAnswer: 'Justification, Truth, and Belief (JTB)',
          trapAlert: 'Certainty and empirical proof are not the three specific classical tripartite terms.'
        }
      ]
    },
    {
      id: 'sum_212_3',
      chapterNumber: 3,
      title: 'Fundamentals of Formal Logic, Arguments & Syllogistic Reasoning',
      topicSubtitle: 'Deduction vs. Induction, Validity, Soundness & Categorical Syllogisms',
      summaryBullets: [
        'Structure of an Argument: A group of propositions consisting of one or more **Premises** offered as evidential support for a **Conclusion**.',
        'Deductive vs. Inductive Arguments:',
        '• **Deductive Argument**: Claims that the premises provide absolute, conclusive support for the truth of the conclusion. Evaluated by **Validity** (structural truth-preservation) and **Soundness** (Validity + Factual Truth of all premises).',
        '• **Inductive Argument**: Claims that the premises provide probable or likely support for the conclusion. Evaluated by **Strength** and **Cogency** (Strong structure + Factually true premises).',
        'Categorical Propositions (Aristotle’s Square of Opposition):',
        '• **A**: Universal Affirmative ("All S is P") | **E**: Universal Negative ("No S is P")',
        '• **I**: Particular Affirmative ("Some S is P") | **O**: Particular Negative ("Some S is not P")',
        'Categorical Syllogism: A formal deductive argument containing exactly 3 categorical propositions and 3 terms: Major Term (predicate of conclusion), Minor Term (subject of conclusion), and Middle Term (appears in both premises, NEVER in conclusion).'
      ],
      keyDefinitions: [
        { term: 'Validity (Deductive)', meaning: 'A formal structural property where it is impossible for all premises to be true and the conclusion simultaneously false.' },
        { term: 'Soundness', meaning: 'The gold standard of deduction: A deductive argument that is both formally valid AND contains factually true premises.' },
        { term: 'Middle Term', meaning: 'The linking term that appears in both the Major and Minor premises but must never appear in the conclusion.' },
        { term: 'Inductive Cogency', meaning: 'An inductive argument that is logically strong and whose premises are all factually true.' }
      ],
      examHotspotTips: [
        'CBT Rule: Validity is purely structural—a valid deductive argument CAN have false premises and a false conclusion (e.g. "All dogs fly; all cats are dogs; therefore all cats fly" is structurally VALID but UNSOUND).',
        'Soundness = Validity + True Premises.',
        'The Middle Term MUST be distributed at least once in the premises to avoid the Fallacy of the Undistributed Middle.'
      ],
      keyDatesAndFormulas: [
        { label: 'Deductive Soundness Formula', detail: 'Soundness = Logical Validity + Factually True Premises' },
        { label: 'Categorical Propositions', detail: 'A (All S is P), E (No S is P), I (Some S is P), O (Some S is not P)' },
        { label: 'Syllogism Terms Rule', detail: '3 Terms: Major Term (Predicate), Minor Term (Subject), Middle Term (Connector)' }
      ],
      cbtPastQuestionHotspots: [
        {
          questionFocus: 'Can a deductive argument be valid if all its premises are false?',
          verifiedAnswer: 'Yes, because validity depends on the structural relationship between premises and conclusion, not factual truth',
          trapAlert: 'Do not confuse Validity (form) with Soundness (form + fact).'
        },
        {
          questionFocus: 'Which term in a categorical syllogism must never appear in the conclusion?',
          verifiedAnswer: 'The Middle Term',
          trapAlert: 'The Major and Minor terms form the predicate and subject of the conclusion.'
        }
      ]
    },
    {
      id: 'sum_212_4',
      chapterNumber: 4,
      title: 'Symbolic Logic, Truth-Functional Connectives & Truth Tables',
      topicSubtitle: 'Operators, Compound Statements & Tautology / Contradiction Classification',
      summaryBullets: [
        'Symbolic Logic replaces natural language ambiguities with formal symbols, analyzing arguments via truth-functional values (True / False).',
        'The 5 Fundamental Truth-Functional Connectives:',
        '1. **Negation (~ / ¬)**: Flips truth value (~T = F; ~F = T).',
        '2. **Conjunction (∧ / &)**: "P and Q". True **ONLY IF BOTH** conjuncts P and Q are True (T ∧ T = T; all other rows are F).',
        '3. **Disjunction (∨)**: "P or Q" (Inclusive). False **ONLY IF BOTH** disjuncts P and Q are False (F ∨ F = F; all other rows are T).',
        '4. **Conditional / Material Implication (→ / ⊃)**: "If P, then Q". False **ONLY WHEN Antecedent P is True and Consequent Q is False** (T → F = F; all other rows are T!).',
        '5. **Biconditional (↔ / ≡)**: "P if and only if Q". True when **BOTH components share the exact same truth value** (T ↔ T = T; F ↔ F = T; mixed is F).',
        'Statement Classifications via Truth Tables:',
        '• **Tautology**: A statement form that evaluates to **True in every single row** under all truth assignments.',
        '• **Self-Contradiction**: A statement form that evaluates to **False in every single row**.',
        '• **Contingent Statement**: A statement form having **at least one True and at least one False row**.'
      ],
      keyDefinitions: [
        { term: 'Conditional (P → Q)', meaning: 'An implication where P is the antecedent and Q is the consequent; false solely when P is true and Q is false.' },
        { term: 'Conjunction (P ∧ Q)', meaning: 'A compound statement joined by "and"; true exclusively when both component statements are true.' },
        { term: 'Tautology', meaning: 'A logically necessary proposition whose truth table column consists entirely of T values (e.g., P ∨ ~P).' },
        { term: 'Self-Contradiction', meaning: 'A logically impossible proposition whose truth table column consists entirely of F values (e.g., P ∧ ~P).' }
      ],
      examHotspotTips: [
        'CRITICAL CBT Trap: Conditional (P → Q) is TRUE when the antecedent P is False, regardless of whether Q is True or False (F → T = T, F → F = T)!',
        'Conjunction is ONLY True when both are True.',
        'Law of Excluded Middle: (P ∨ ~P) is always a Tautology.'
      ],
      keyDatesAndFormulas: [
        { label: 'Truth Table Combinations Formula', detail: 'Number of Rows = 2^n (where n is number of distinct propositional variables)' },
        { label: 'Conditional Rule', detail: 'P → Q is False ONLY when P = True and Q = False' },
        { label: 'Biconditional Rule', detail: 'P ↔ Q is True when P and Q have identical truth values (T/T or F/F)' }
      ],
      cbtPastQuestionHotspots: [
        {
          questionFocus: 'Under what specific condition is the conditional proposition (P → Q) evaluated as False?',
          verifiedAnswer: 'When the antecedent P is True and the consequent Q is False',
          trapAlert: 'If P is False and Q is True, the conditional is TRUE in classical logic.'
        },
        {
          questionFocus: 'How many rows are required in a truth table containing 3 distinct proposition variables (P, Q, R)?',
          verifiedAnswer: '8 rows (Formula: 2³ = 8)',
          trapAlert: 'Do not multiply 3 × 2 = 6; truth tables scale exponentially (2ⁿ).'
        }
      ]
    },
    {
      id: 'sum_212_5',
      chapterNumber: 5,
      title: 'Formal & Informal Fallacies in Argumentation',
      topicSubtitle: 'Fallacies of Relevance, Presumption, Ambiguity & Defective Reasoning',
      summaryBullets: [
        'Fallacy: A defect or error in reasoning that creates an invalid or deceptive argument.',
        '**Formal Fallacies** (Violations of deductive structure): Affirming the Consequent, Denying the Antecedent, Undistributed Middle.',
        '**Informal Fallacies of Relevance** (Premises are psychologically persuasive but logically irrelevant):',
        '• **Argumentum Ad Hominem**: Attacking the opponent’s personal character, background, or motives instead of their substantive argument (*Abusive, Circumstantial, Tu Quoque/You Too*).',
        '• **Argumentum Ad Baculum**: Appeal to force, threat, coercion, or intimidation to compel agreement.',
        '• **Argumentum Ad Misericordiam**: Appeal to pity, sympathy, or emotional suffering.',
        '• **Argumentum Ad Populum**: Appeal to the masses, popularity, mob emotion, or bandwagon consensus.',
        '• **Argumentum Ad Verecundiam**: Appeal to inappropriate, unqualified, or biased authority.',
        '• **Argumentum Ad Ignorantiam**: Appeal to ignorance (arguing a claim is true because it hasn’t been proven false, or vice versa).',
        '• **Straw Man**: Distorting, exaggerating, or misrepresenting an opponent’s position to make it easy to attack.',
        '• **Red Herring**: Diverting attention away from the original issue to an irrelevant secondary topic.',
        '**Informal Fallacies of Presumption & Ambiguity**:',
        '• **Petitio Principii (Begging the Question)**: Circular reasoning where the conclusion is secretly assumed in one of the premises.',
        '• **Post Hoc Ergo Propter Hoc**: False cause (assuming that because event B followed event A, A caused B).',
        '• **Equivocation**: Shifting between multiple meanings of a key word in an argument.',
        '• **Composition vs. Division**: Composition (attributing properties of parts to the whole); Division (attributing properties of the whole to its individual parts).'
      ],
      keyDefinitions: [
        { term: 'Argumentum Ad Hominem', meaning: 'An informal fallacy where an arguer attacks an opponent personally rather than refuting their argument.' },
        { term: 'Argumentum Ad Baculum', meaning: 'The logical fallacy of appealing to physical force, threats, or intimidation to win an argument.' },
        { term: 'Petitio Principii (Begging the Question)', meaning: 'Circular reasoning where an argument assumes the very proposition it sets out to prove.' },
        { term: 'Fallacy of Composition', meaning: 'Erroneously reasoning that what is true of the parts must also be true of the whole.' }
      ],
      examHotspotTips: [
        'CBT Rule: Look for trigger keywords: Threats/Loss of Job = Ad Baculum; Insults/Hypocrisy = Ad Hominem; Pity/Tears = Ad Misericordiam; Celebrity endorsement outside expertise = Ad Verecundiam.',
        'Post Hoc Ergo Propter Hoc translates to "After this, therefore because of this" (chronological succession ≠ causal link).',
        'Distinguish Composition (Parts → Whole) from Division (Whole → Parts).'
      ],
      keyDatesAndFormulas: [
        { label: 'Fallacies of Relevance', detail: 'Ad Hominem (Person), Ad Baculum (Force), Ad Misericordiam (Pity), Ad Populum (Bandwagon)' },
        { label: 'Fallacies of Ambiguity', detail: 'Equivocation (Word meaning), Amphiboly (Syntax), Composition (Part→Whole), Division (Whole→Part)' }
      ],
      cbtPastQuestionHotspots: [
        {
          questionFocus: 'Identify the fallacy: "If you do not pass this bill, the military will shut down your assembly!"',
          verifiedAnswer: 'Argumentum Ad Baculum (Appeal to Force / Threat)',
          trapAlert: 'The statement uses intimidation rather than logical merits.'
        },
        {
          questionFocus: 'Identify the fallacy: "Every player in the team is a superstar, therefore the team will be unbeatable."',
          verifiedAnswer: 'Fallacy of Composition (Part to Whole)',
          trapAlert: 'Do not confuse with Division; here, traits of individual players are transferred to the whole team.'
        }
      ]
    },
    {
      id: 'sum_212_6',
      chapterNumber: 6,
      title: 'Human Existence, Existentialism, Freedom & Moral Responsibility',
      topicSubtitle: 'Sartre, Camus, Kierkegaard, Determinism vs. Free Will & Meaning of Life',
      summaryBullets: [
        'The Question of Human Existence: Philosophy investigates the nature of human consciousness, self-determination, mortality, morality, and the search for authentic meaning.',
        'Existentialism: A major philosophical movement emphasizing individual freedom, subjectivity, and personal choice over abstract universal systems.',
        'Jean-Paul Sartre & "Existence Precedes Essence": The fundamental dictum of atheistic existentialism. Human beings are not manufactured with a pre-defined essence or purpose; humans first **exist**, encounter the world, and subsequently define their identity, values, and essence through their deliberate choices and actions.',
        'Radical Freedom & "Bad Faith" (*Mauvaise Foi*): Humans have radical free will and are "condemned to be free". When individuals make excuses, blaming circumstances, fate, or society for their choices, they act in **Bad Faith** (inauthentic living).',
        'Albert Camus & The Absurd: The human condition is characterized by the conflict between human desire for inherent cosmic meaning and the cold, silent, meaningless universe ("The Absurd"). Illustrated in *The Myth of Sisyphus*.',
        'Determinism vs. Free Will:',
        '• **Hard Determinism**: All human actions are strictly determined by prior physical/biological causes; free will is an illusion.',
        '• **Libertarian Free Will**: Humans possess genuine agency to choose among alternative possibilities.',
        '• **Compatibilism (Soft Determinism)**: Free will and causal determinism are mutually compatible when actions align with internal desires without external coercion.'
      ],
      keyDefinitions: [
        { term: 'Existence Precedes Essence', meaning: 'Sartre’s principle that human beings exist first and define their purpose and nature through free conscious choices.' },
        { term: 'Bad Faith (Mauvaise Foi)', meaning: 'The inauthentic psychological self-deception of denying one’s radical freedom and blaming external forces for personal actions.' },
        { term: 'The Absurd', meaning: 'Camus’ concept of the inescapable tension between humanity’s search for ultimate purpose and an indifferent universe.' },
        { term: 'Compatibilism', meaning: 'The thesis that free will and determinism can coexist without contradiction.' }
      ],
      examHotspotTips: [
        'CBT Rule: Jean-Paul Sartre is famous for the phrase "Man is condemned to be free" and "Existence precedes essence".',
        'Søren Kierkegaard is regarded as the Father of Christian Existentialism (Leap of Faith).',
        'In existential ethics, human freedom is inseparable from total personal responsibility.'
      ],
      keyDatesAndFormulas: [
        { label: 'Existential Maxim', detail: 'Existence Precedes Essence (Jean-Paul Sartre)' },
        { label: 'Key Existentialist Thinkers', detail: 'Søren Kierkegaard (Theistic), Friedrich Nietzsche, Jean-Paul Sartre, Albert Camus (Absurdism)' }
      ],
      cbtPastQuestionHotspots: [
        {
          questionFocus: 'What did Jean-Paul Sartre mean by the statement "Existence precedes essence"?',
          verifiedAnswer: 'Human beings first exist in the world and only define their nature and purpose through their choices',
          trapAlert: 'It does not mean humans were designed by a divine artisan with a pre-set blueprint.'
        },
        {
          questionFocus: 'In existentialist philosophy, what term describes the act of pretending one has no choice in order to avoid responsibility?',
          verifiedAnswer: 'Bad Faith (Mauvaise Foi)',
          trapAlert: 'Do not confuse Bad Faith with Epistemological Skepticism.'
        }
      ]
    }
  ],
  ges300: [
    {
      id: 'sum_300_1',
      chapterNumber: 1,
      title: 'Concepts, Nature, Theories & Mindset of Entrepreneurship',
      topicSubtitle: 'Schumpeterian Innovation, Intrapreneurship & Behavioral Drivers',
      summaryBullets: [
        'Definition of Entrepreneurship: The purposeful process of identifying commercial opportunities, taking calculated financial and personal risks, mobilizing capital and labor, and establishing an innovative enterprise that delivers economic and social value.',
        'Core Characteristics of Successful Entrepreneurs: Opportunity alertness, high risk tolerance, self-discipline, resilience in adversity, creative problem solving, and visionary leadership.',
        'Classical Theories of Entrepreneurship:',
        '• **Joseph Schumpeter (Innovation Theory)**: The entrepreneur is the premier agent of economic growth who disrupts static equilibrium through **"Creative Destruction"** (introducing new products, new production methods, opening new markets, or discovering new supplies).',
        '• **David McClelland (Psychological Theory)**: High **Need for Achievement (N-Ach)** is the dominant psychological driver compelling entrepreneurs to pursue challenging goals and direct feedback.',
        '• **Frank Knight (Risk-Bearing Theory)**: The entrepreneur bears non-insurable economic **uncertainty** and receives profit as compensation.',
        '• **Israel Kirzner (Alertness Theory)**: The entrepreneur possesses acute alertness to price discrepancies and market imbalances.',
        'Entrepreneur vs. Intrapreneur: An **Entrepreneur** starts an independent venture bearing direct financial risk; an **Intrapreneur** exercises entrepreneurial initiative, innovation, and product development within an established corporation without risking personal capital.'
      ],
      keyDefinitions: [
        { term: 'Entrepreneurship', meaning: 'The process of designing, launching, and running a new business venture by mobilizing resources and assuming calculated risks.' },
        { term: 'Creative Destruction', meaning: 'Joseph Schumpeter’s concept where innovative new products/methods obsolete and replace existing, inefficient business models.' },
        { term: 'Intrapreneurship', meaning: 'Entrepreneurial innovation and new project execution conducted by employees inside an existing organization.' },
        { term: 'Need for Achievement (N-Ach)', meaning: 'David McClelland’s psychological construct defining the innate drive to excel, accomplish difficult tasks, and attain mastery.' }
      ],
      examHotspotTips: [
        'CBT Rule: Joseph Schumpeter = Innovation & "Creative Destruction".',
        'David McClelland = Need for Achievement (N-Ach).',
        'Intrapreneurs innovate INSIDE an existing firm using company resources, whereas entrepreneurs operate EXTERNALLY with personal risk.'
      ],
      keyDatesAndFormulas: [
        { label: 'Schumpeterian Principle', detail: 'Innovation is the catalyst of economic development via Creative Destruction' },
        { label: 'McClelland’s Needs', detail: 'Need for Achievement (N-Ach), Need for Affiliation (N-Aff), Need for Power (N-Pow)' }
      ],
      cbtPastQuestionHotspots: [
        {
          questionFocus: 'Which economist developed the theory of "Creative Destruction" as the hallmark of entrepreneurship?',
          verifiedAnswer: 'Joseph Schumpeter',
          trapAlert: 'Adam Smith and David McClelland did not formulate the creative destruction concept.'
        },
        {
          questionFocus: 'What is the fundamental difference between an entrepreneur and an intrapreneur?',
          verifiedAnswer: 'An entrepreneur bears personal financial risk in an independent venture, while an intrapreneur innovates inside an existing company',
          trapAlert: 'Intrapreneurs are not illegal or black-market entrepreneurs.'
        }
      ]
    },
    {
      id: 'sum_300_2',
      chapterNumber: 2,
      title: 'Opportunity Identification, Ideation & Environmental Scanning',
      topicSubtitle: 'PESTEL Framework, SWOT Matrix & Industry Scanning in Nigeria',
      summaryBullets: [
        'Venture Ideation: The systematic process of generating, developing, and evaluating new business concepts. Sources of business ideas: Consumer pain points, market inefficiencies, demographic shifts, technological advancements, and regulatory changes.',
        'Ideation Techniques: Brainstorming, Problem Inventory Analysis, Focus Groups, Reverse Brainstorming, SCAMPER (Substitute, Combine, Adapt, Modify, Put to other uses, Eliminate, Reverse).',
        '**PESTEL Environmental Scanning Framework** (External Macro-Environment):',
        '• **Political**: Government stability, taxation policies, trade restrictions, tariffs.',
        '• **Economic**: Inflation rates, FX exchange volatility (Naira rate), interest rates, consumer purchasing power.',
        '• **Socio-Cultural**: Demographics, age distribution, cultural norms, consumer lifestyle trends.',
        '• **Technological**: Internet penetration, digital POS/Fintech adoption, automation, AI tools.',
        '• **Environmental**: Climate change, waste management, renewable energy adoption.',
        '• **Legal**: Business registration laws, CAMA 2020, NAFDAC regulations, SON standards, labor laws.',
        '**SWOT Matrix Analysis** (Strategic Evaluation):',
        '• **Internal Factors**: Strengths (proprietary tech, skilled team) & Weaknesses (limited capital, poor brand visibility).',
        '• **External Factors**: Opportunities (untapped market niche, export incentives) & Threats (competitor price cuts, currency devaluation).'
      ],
      keyDefinitions: [
        { term: 'Environmental Scanning', meaning: 'The monitoring and assessment of external macro and internal micro factors affecting a venture’s growth and viability.' },
        { term: 'PESTEL Analysis', meaning: 'A strategic framework examining Political, Economic, Socio-Cultural, Technological, Environmental, and Legal macro drivers.' },
        { term: 'SWOT Analysis', meaning: 'A strategic tool assessing internal Strengths & Weaknesses alongside external Opportunities & Threats.' },
        { term: 'Opportunity Recognition', meaning: 'The cognitive ability of an entrepreneur to perceive unmet consumer demands and build viable commercial solutions.' }
      ],
      examHotspotTips: [
        'CBT Rule: In SWOT, Strengths and Weaknesses are INTERNAL to the organization, while Opportunities and Threats are EXTERNAL.',
        'In Nigeria, high inflation and fluctuating exchange rates are classified as ECONOMIC macro-environmental factors in PESTEL.',
        'SCAMPER is an ideation and product modification technique.'
      ],
      keyDatesAndFormulas: [
        { label: 'PESTEL Dimensions', detail: 'Political, Economic, Socio-Cultural, Technological, Environmental, Legal' },
        { label: 'SWOT Internal vs. External', detail: 'Internal = Strengths & Weaknesses | External = Opportunities & Threats' }
      ],
      cbtPastQuestionHotspots: [
        {
          questionFocus: 'In a SWOT analysis, which two components represent external environmental factors beyond the direct control of the firm?',
          verifiedAnswer: 'Opportunities and Threats',
          trapAlert: 'Strengths and Weaknesses reside strictly within internal organizational control.'
        },
        {
          questionFocus: 'Fluctuations in the foreign exchange rate of the Naira represent which macro-environmental factor under PESTEL?',
          verifiedAnswer: 'Economic Factor',
          trapAlert: 'Do not confuse currency volatility with Legal or Political factors.'
        }
      ]
    },
    {
      id: 'sum_300_3',
      chapterNumber: 3,
      title: 'Feasibility Studies & Business Plan Architecture',
      topicSubtitle: 'Feasibility vs. Business Plan, Core Sections & Project Appraisal',
      summaryBullets: [
        'Feasibility Study vs. Business Plan: A **Feasibility Study** is an investigative pre-launch evaluation answering *"Is this project viable and worth pursuing?"* (Go/No-Go decision). A **Business Plan** is a strategic operational roadmap created AFTER feasibility is confirmed, answering *"How exactly will we execute, manage, and scale the business?"*',
        'Core Dimensions of Feasibility Analysis: Market Feasibility (demand, customer willingness to pay), Technical/Operational Feasibility (raw materials, production capacity, equipment), Financial Feasibility (capital expenditure, ROI, cash flow), Legal & Regulatory Feasibility (compliance, permits).',
        'Architecture of a Professional Business Plan:',
        '1. **Executive Summary**: The high-impact snapshot of the entire venture (vision, value proposition, financial highlights). **Always written LAST but placed FIRST** in the document.',
        '2. **Company & Product Description**: Core mission, unique value proposition (UVP), problem solved.',
        '3. **Market Analysis**: Target market demographics, Total Addressable Market (TAM), competitive landscape.',
        '4. **Operational & Production Plan**: Manufacturing workflow, facility location, supply chain logistics.',
        '5. **Marketing & Sales Strategy**: Pricing model, distribution channels, promotional tactics (4 Ps).',
        '6. **Management Team & Governance**: Organization chart, key personnel qualifications.',
        '7. **Financial Plan**: 3–5 year financial projections (Cash Flow Statement, Income Statement, Balance Sheet, Break-Even Point).'
      ],
      keyDefinitions: [
        { term: 'Feasibility Study', meaning: 'An analytical research investigation assessing whether a prospective business idea is viable across market, technical, and financial metrics before investing capital.' },
        { term: 'Business Plan', meaning: 'A formal written document detailing a venture’s goals, market strategy, operational structure, and financial forecasts.' },
        { term: 'Executive Summary', meaning: 'A concise 1–2 page synthesis capturing the entire business plan, positioned first to pitch investors.' },
        { term: 'Unique Value Proposition (UVP)', meaning: 'The clear statement explaining how a product solves customers’ problems better than competing alternatives.' }
      ],
      examHotspotTips: [
        'CRITICAL CBT Question: The Executive Summary is written LAST after all details are completed, but placed at the very BEGINNING of the business plan.',
        'A feasibility study precedes the drafting of the formal business plan.',
        'Investors prioritize the Executive Summary and Financial Projections when assessing funding proposals.'
      ],
      keyDatesAndFormulas: [
        { label: 'Feasibility vs. Business Plan Sequence', detail: 'Step 1: Feasibility Study (Viability Filter) → Step 2: Business Plan (Execution Roadmap)' },
        { label: 'Executive Summary Placement Rule', detail: 'Written LAST, Placed FIRST (Length: 1–2 pages maximum)' }
      ],
      cbtPastQuestionHotspots: [
        {
          questionFocus: 'At what stage of drafting a business plan should the Executive Summary be written?',
          verifiedAnswer: 'At the very end (last), after all other sections are fully developed',
          trapAlert: 'Even though it appears on page one, it cannot be written first before figures are calculated.'
        },
        {
          questionFocus: 'What is the primary function of a Feasibility Study in enterprise development?',
          verifiedAnswer: 'To evaluate whether a business concept is practical, profitable, and viable before committing capital',
          trapAlert: 'It is not a document primarily designed for daily staff scheduling.'
        }
      ]
    },
    {
      id: 'sum_300_4',
      chapterNumber: 4,
      title: 'Marketing Strategies & The 4 Ps Marketing Mix',
      topicSubtitle: 'Product, Price, Place, Promotion & Pricing Strategies',
      summaryBullets: [
        'The Marketing Mix (The 4 Ps): Formulated by E. Jerome McCarthy, representing the tactical toolkit used by a venture to achieve its marketing objectives in the target market.',
        '**1. Product**: Goods, services, quality, branding, packaging, warranty, customer support. Follows the Product Life Cycle (Introduction → Growth → Maturity → Decline).',
        '**2. Price**: Pricing strategies used to generate revenue and market share:',
        '• **Price Skimming**: Setting a high initial price to capture consumer surplus from early adopters before gradually lowering the price (common in tech/innovations).',
        '• **Penetration Pricing**: Setting a low initial price to rapidly attract market share, build volume, and discourage competitors.',
        '• **Cost-Plus Pricing**: Adding a fixed percentage markup to the total unit cost of production.',
        '• **Psychological Pricing**: Pricing just below round numbers (e.g. ₦4,999 instead of ₦5,000) to create perceived value.',
        '**3. Place (Distribution)**: Channels that move the product from manufacturer to the final consumer (Direct Selling, Wholesalers, Retailers, E-Commerce, Logistics).',
        '**4. Promotion**: Communication mix to generate awareness, persuade buyers, and drive sales: Advertising, Sales Promotions, Personal Selling, Public Relations (PR), and Digital/Influencer Marketing.'
      ],
      keyDefinitions: [
        { term: 'Marketing Mix (4 Ps)', meaning: 'The combination of Product, Price, Place, and Promotion used by a company to satisfy customer needs and achieve commercial targets.' },
        { term: 'Penetration Pricing', meaning: 'An aggressive pricing strategy where an enterprise charges an initially low price to penetrate the market and gain quick market share.' },
        { term: 'Price Skimming', meaning: 'Charging a premium initial price to maximize revenue from price-insensitive early adopters before lowering prices.' },
        { term: 'Product Life Cycle (PLC)', meaning: 'The stages a product passes through from Introduction, to Growth, Maturity, and eventual Decline.' }
      ],
      examHotspotTips: [
        'CBT Rule: E. Jerome McCarthy originated the 4 Ps Marketing Mix classification.',
        'Distinguish Price Skimming (High initial price → Lower over time) from Penetration Pricing (Low initial price → High volume).',
        'Place refers to distribution channels and logistics, not just physical land.'
      ],
      keyDatesAndFormulas: [
        { label: 'The 4 Ps of Marketing', detail: 'Product, Price, Place (Distribution), Promotion' },
        { label: 'Cost-Plus Price Formula', detail: 'Selling Price = Unit Total Cost × (1 + Markup Percentage)' },
        { label: 'Product Life Cycle Stages', detail: 'Introduction → Growth → Maturity → Decline' }
      ],
      cbtPastQuestionHotspots: [
        {
          questionFocus: 'Which pricing strategy involves setting a high introductory price to recover R&D costs from early adopters?',
          verifiedAnswer: 'Price Skimming',
          trapAlert: 'Penetration pricing does the opposite by setting a low introductory price.'
        },
        {
          questionFocus: 'Who originally conceptualized and formulated the 4 Ps Marketing Mix framework?',
          verifiedAnswer: 'E. Jerome McCarthy',
          trapAlert: 'Philip Kotler popularized it, but McCarthy originally created the 4 Ps.'
        }
      ]
    },
    {
      id: 'sum_300_5',
      chapterNumber: 5,
      title: 'Financial Management, Costing & Break-Even Point (BEP) Analysis',
      topicSubtitle: 'Fixed vs. Variable Costs, BEP Formulas, Working Capital & Financing Sources',
      summaryBullets: [
        'Classification of Business Costs:',
        '• **Fixed Costs (FC)**: Operational expenses that remain constant regardless of production output volume (e.g. factory rent, administrative salaries, insurance, depreciation).',
        '• **Variable Costs (VC)**: Expenses that vary directly in proportion to production output (e.g. raw materials, direct packaging, unit shipping).',
        '• **Total Cost (TC)**: $\\text{Fixed Costs} + (\\text{Variable Cost per Unit} \\times \\text{Quantity Produced})$.',
        '**Break-Even Point (BEP) Analysis**: The exact production and sales volume where Total Revenue equals Total Cost, resulting in **zero profit and zero loss**.',
        '• **Contribution Margin per Unit (CM)**: $\\text{Selling Price per Unit (P)} - \\text{Variable Cost per Unit (VC)}$.',
        '• **BEP in Units**: $\\frac{\\text{Total Fixed Costs (FC)}}{\\text{Selling Price per Unit (P)} - \\text{Variable Cost per Unit (VC)}} = \\frac{\\text{FC}}{\\text{CM}}$.',
        '• **BEP in Revenue (₦)**: $\\text{BEP (Units)} \\times \\text{Selling Price (P)} = \\frac{\\text{Fixed Costs}}{\\text{Contribution Margin Ratio}}$.',
        'Working Capital Management: $\\text{Working Capital} = \\text{Current Assets} - \\text{Current Liabilities}$. Essential for daily operational liquidity.',
        'Sources of Entrepreneurial Capital: **Bootstrapping** (personal savings, sweat equity, lean operations), **Equity Financing** (Angel Investors, Venture Capital funds), **Debt Financing** (commercial bank loans, microfinance), **Government Grants/Interventions** (BOI, SMEDAN, Tony Elumelu Foundation, CBN MSME funds).'
      ],
      keyDefinitions: [
        { term: 'Break-Even Point (BEP)', meaning: 'The level of sales activity where total revenues equal total expenses, yielding neither net profit nor net loss.' },
        { term: 'Contribution Margin', meaning: 'The portion of sales revenue per unit remaining after covering variable costs, contributing toward covering fixed costs.' },
        { term: 'Bootstrapping', meaning: 'Financing and growing a startup venture using only personal resources, sweat equity, and customer cash flows without external debt or equity dilution.' },
        { term: 'Working Capital', meaning: 'The financial metric measuring operating liquidity, calculated as Current Assets minus Current Liabilities.' }
      ],
      examHotspotTips: [
        'MUST-KNOW BEP Calculation in CBT: If Fixed Rent = ₦100,000, Selling Price = ₦2,500, Variable Cost = ₦1,500:',
        'CM = ₦2,500 - ₦1,500 = ₦1,000. BEP in Units = ₦100,000 / ₦1,000 = **100 units**.',
        'Bootstrapping protects 100% of founder equity and eliminates debt servicing interest.'
      ],
      keyDatesAndFormulas: [
        { label: 'BEP in Units Formula', detail: 'BEP (Units) = Fixed Costs ÷ (Unit Price - Unit Variable Cost)' },
        { label: 'Contribution Margin Formula', detail: 'CM = Unit Selling Price - Unit Variable Cost' },
        { label: 'Working Capital Formula', detail: 'Working Capital = Current Assets - Current Liabilities' }
      ],
      cbtPastQuestionHotspots: [
        {
          questionFocus: 'A small bakery has monthly fixed costs of ₦60,000. It sells each cake for ₦1,500 with a unit variable cost of ₦900. How many cakes must be sold to break even?',
          verifiedAnswer: '100 cakes (CM = ₦1,500 - ₦900 = ₦600; BEP = ₦60,000 / ₦600 = 100)',
          trapAlert: 'Do not divide Fixed Costs by Selling Price alone without subtracting Variable Cost!'
        },
        {
          questionFocus: 'What method of financing involves launching and expanding a venture solely using personal savings and lean operating revenues without bank loans?',
          verifiedAnswer: 'Bootstrapping',
          trapAlert: 'Venture Capital and Debt financing involve external investors and banks.'
        }
      ]
    },
    {
      id: 'sum_300_6',
      chapterNumber: 6,
      title: 'Forms of Business Organization, CAMA 2020 Reforms & CAC Incorporation',
      topicSubtitle: 'Sole Proprietorship, Partnership, Private Limited (Ltd), CAMA 2020 & Intellectual Property',
      summaryBullets: [
        'Forms of Business Organization in Nigeria:',
        '1. **Sole Proprietorship (Business Name)**: Owned and managed by one individual. Simple and inexpensive to register, but owner has **unlimited personal liability** for all business debts.',
        '2. **Partnership**: 2 to 20 persons co-owning a venture governed by a Partnership Deed. General partners have unlimited joint liability. CAMA 2020 introduces **Limited Liability Partnerships (LLP)**.',
        '3. **Private Limited Liability Company (Ltd)**: A separate legal entity distinct from its owners (*Salomon v. Salomon*). Shareholders enjoy limited liability (losses capped at their invested share capital).',
        '4. **Public Limited Company (Plc)**: Minimum 2 shareholders with shares freely tradable on the Nigerian Exchange Group (NGX).',
        '**Companies and Allied Matters Act (CAMA 2020) & CAC Reforms**:',
        '• The **Corporate Affairs Commission (CAC)** is the statutory body regulating the formation, management, and dissolution of companies in Nigeria.',
        '• **CAMA 2020 Landmark Reforms**: (1) Allows a **single person (1 individual)** to incorporate a Private Limited Liability Company; (2) Eliminates the mandatory common company seal; (3) Facilitates full digital electronic filing and virtual general meetings; (4) Exempts small companies from mandatory annual audits.',
        '**Intellectual Property (IP) Protection in Nigeria**:',
        '• **Patents**: Protects novel industrial/technical inventions for 20 years.',
        '• **Trademarks**: Protects unique brand names, logos, symbols, and slogans registered with the Trade Marks Registry.',
        '• **Copyright**: Automatically protects original literary, musical, artistic, and software works (administered by the Nigerian Copyright Commission - NCC).'
      ],
      keyDefinitions: [
        { term: 'Limited Liability', meaning: 'A legal protection where business owners/shareholders are not personally liable for the debts or liabilities of the company beyond their invested capital.' },
        { term: 'Corporate Affairs Commission (CAC)', meaning: 'The Nigerian statutory agency established under CAMA responsible for registering and regulating companies, business names, and incorporated trustees.' },
        { term: 'CAMA 2020', meaning: 'The Companies and Allied Matters Act 2020, modernizing Nigerian corporate law, permitting single-shareholder companies, and streamlining business registration.' },
        { term: 'Patent', meaning: 'A legal exclusive property right granted to an inventor for a novel technological invention for a statutory duration of 20 years.' }
      ],
      examHotspotTips: [
        'CBT Rule: Under CAMA 2020, ONE individual can legally incorporate a Private Limited Company in Nigeria.',
        'Sole proprietorship has unlimited liability, meaning personal assets can be seized to pay business debts.',
        'Patents in Nigeria are valid for 20 years from the filing date.',
        'CAC operates the digital Company Registration Portal (CRP).'
      ],
      keyDatesAndFormulas: [
        { label: 'CAMA 2020 Key Rule', detail: '1 person can incorporate a Private Limited Liability Company (Ltd)' },
        { label: 'Patent Duration in Nigeria', detail: '20 Years from filing date' },
        { label: 'Statutory Regulatory Agency', detail: 'Corporate Affairs Commission (CAC)' }
      ],
      cbtPastQuestionHotspots: [
        {
          questionFocus: 'Under the landmark provisions of the Companies and Allied Matters Act (CAMA 2020), how many persons are required to incorporate a Private Limited Liability Company in Nigeria?',
          verifiedAnswer: '1 Person (Single-member company)',
          trapAlert: 'Under previous CAMA 1990, minimum was 2 persons; CAMA 2020 reduced it to 1.'
        },
        {
          questionFocus: 'Which government agency is legally responsible for registering companies and business names in Nigeria?',
          verifiedAnswer: 'Corporate Affairs Commission (CAC)',
          trapAlert: 'FIRS handles taxes, NAFDAC handles food/drugs; CAC handles business incorporation.'
        }
      ]
    }
  ]
};
