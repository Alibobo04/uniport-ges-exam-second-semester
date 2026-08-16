import { CourseInfo, Question, Flashcard, ChapterSummary, CourseId } from '../types';
import { GES112_PRACTICE_QUESTIONS } from './ges112Questions';
import { GES112_CBT_TEST_QUESTIONS } from './ges112CbtQuestions';
import { GES212_PRACTICE_QUESTIONS } from './ges212Questions';
import { GES212_CBT_TEST_QUESTIONS } from './ges212CbtQuestions';
import { GES300_PRACTICE_QUESTIONS } from './ges300Questions';

export const COURSES: Record<CourseId, CourseInfo> = {
  ges112: {
    id: 'ges112',
    level: '100',
    code: 'GES 112',
    title: 'Nigerian Peoples and Culture',
    subtitle: 'History, Ethno-Cultural Zones, Pre-Colonial Traditions & Nation Building',
    description: 'An in-depth study of historical evolution, socio-cultural systems, archaeological sites (Nok, Ife, Benin, Igbo-Ukwu), colonial impact, and Nigerian cultural dynamics.',
    topicsCovered: [
      'Archaeology & Pre-history (Nok, Igbo-Ukwu, Ife, Benin)',
      'Major Culture Zones of Nigeria & Linguistic Classifications',
      'Pre-colonial Socio-Political Systems (Oyo, Hausa/Fulani, Igbo, Niger Delta)',
      '1914 Amalgamation & Evolution of the Nigerian State',
      'Traditional Economy, Trade Routes & Cultural Values',
      'National Unity, Ethnic Coexistence & Moral Re-orientation'
    ]
  },
  ges212: {
    id: 'ges212',
    level: '200',
    code: 'GES 212.2',
    title: 'Philosophy, Logic and Human Existence',
    subtitle: 'Epistemology, Ethics, Formal Logic, Fallacies & Existential Inquiry',
    description: 'Designed to sharpen critical thinking, analytical reasoning, understanding of philosophical branches (Epistemology, Metaphysics, Ethics, Logic), and identification of logical fallacies.',
    topicsCovered: [
      'Meaning, Scope and Branches of Philosophy',
      'Epistemology: Sources & Theories of Knowledge (Empiricism vs Rationalism)',
      'Metaphysics & Axiology (Ethics & Aesthetics)',
      'Formal vs. Informal Logic & Rules of Inference',
      'Categorical Syllogisms, Validity, Soundness & Truth Tables',
      'Informal Fallacies (Ad Hominem, Strawman, Appeal to Force, etc.)',
      'The Problem of Human Existence, Freedom & Determinism'
    ]
  },
  ges300: {
    id: 'ges300',
    level: '300',
    code: 'GES 300.2',
    title: 'Venture Creation',
    subtitle: 'Entrepreneurship, Feasibility Analysis, Business Planning & Scaling',
    description: 'Empowers students with entrepreneurial mindsets, venture ideation, market research, business plan development, financial bootstrapping, and enterprise management.',
    topicsCovered: [
      'Concept of Entrepreneurship & Intrapreneurship',
      'Opportunity Identification & Environmental Scanning',
      'Feasibility Studies & Business Plan Drafting Architecture',
      'Marketing Strategies & The 4 Ps / 7 Ps of Marketing',
      'Sources of Business Financing (Debt, Equity, Bootstrapping)',
      'Legal Business Structures & Registration',
      'Cash Flow Forecasting, Record Keeping & Risk Management'
    ]
  }
};

export function cleanQuestionText(raw: string): string {
  if (!raw) return '';
  let text = raw.trim();
  // Strip leading question labels like "Question 51\n\n", "Question 51:", "QUESTION 51 -", "Q51.", "Q. 51:"
  text = text.replace(/^(?:question|q)\s*\.?\s*\d+[\s:.-]*\n*/i, '');
  // Strip any redundant leading numbering like "51. " or "51) "
  text = text.replace(/^\d+[\.\)]\s*/, '');
  return text.trim();
}

export function sanitizeQuestion(q: Question): Question {
  return {
    ...q,
    question: cleanQuestionText(q.question),
  };
}

export const WORKBOOK_QUESTIONS: Question[] = [
  // ================= GES 112 WORKBOOK (300 PRACTICE DRILLS) =================
  ...GES112_PRACTICE_QUESTIONS,

  // ================= GES 212.2 WORKBOOK (260 PRACTICE DRILLS) =================
  ...GES212_PRACTICE_QUESTIONS,

  // ================= GES 300.2 WORKBOOK (208 PRACTICE DRILLS) =================
  ...GES300_PRACTICE_QUESTIONS
].map(sanitizeQuestion);

export const PAST_QUESTIONS: Question[] = [
  // ================= GES 112 TIMED QUIZ / CBT EXAM QUESTIONS (100 QUESTIONS) =================
  ...GES112_CBT_TEST_QUESTIONS,

  // ================= GES 212.2 TIMED QUIZ / CBT EXAM QUESTIONS (346 QUESTIONS) =================
  ...GES212_CBT_TEST_QUESTIONS,

  // ================= GES 300.2 PAST CBT QUESTIONS =================
  {
    id: 'ges300_pq_1',
    courseId: 'ges300',
    question: 'An "Intrapreneur" is best defined as:',
    options: ['An entrepreneurial employee who innovates and develops new ventures inside an existing corporation', 'An investor who exclusively purchases government bonds', 'A debtor who defaults on bank loans', 'A trader who buys without inspecting quality'],
    correctAnswer: 0,
    explanation: 'Intrapreneurs apply entrepreneurial drive, innovation, and risk-taking from within the structure of an existing corporate organization.',
    topic: 'Entrepreneurial Mindset',
    year: 'UniPort GES 300.2 CBT Exam',
    source: 'PastQuestion'
  },
  {
    id: 'ges300_pq_2',
    courseId: 'ges300',
    question: 'Which section of a formal Business Plan is written last but positioned first to provide busy investors with a concise snapshot of the entire venture?',
    options: ['Executive Summary', 'Financial Appendix', 'Operations Matrix', 'Risk Disclosure Statement'],
    correctAnswer: 0,
    explanation: 'The Executive Summary synthesizes the problem, solution, market size, business model, financial projections, and funding ask in 1–2 pages at the beginning of the plan.',
    topic: 'Business Plan Components',
    year: 'UniPort GES 300.2 CBT Exam',
    source: 'PastQuestion'
  },
  {
    id: 'ges300_pq_3',
    courseId: 'ges300',
    question: 'What is the "Break-Even Point" (BEP) in financial analysis?',
    options: ['The sales volume where total revenues exactly equal total operating and fixed costs (zero profit, zero loss)', 'The point of maximum corporate tax payment', 'The day when all bank loans become due', 'The total depreciation of all fixed machinery'],
    correctAnswer: 0,
    explanation: 'Break-even point occurs when Total Revenue = Total Costs (Fixed Costs + Variable Costs). Beyond this point, every additional unit sold generates operational profit.',
    topic: 'Financial Planning & Break-Even Analysis',
    year: 'UniPort GES 300.2 CBT Exam',
    source: 'PastQuestion'
  },
  {
    id: 'ges300_pq_4',
    courseId: 'ges300',
    question: 'Financing a new venture through personal savings, sweat equity, and re-invested initial sales revenue without external debt or venture capital is known as:',
    options: ['Bootstrapping', 'Leveraged Buyout', 'Initial Public Offering (IPO)', 'Mezzanine Debt Financing'],
    correctAnswer: 0,
    explanation: 'Bootstrapping means starting and growing a business using only existing personal resources, frugality, and organic operational cash flow.',
    topic: 'Financing & Capital Sources',
    year: 'UniPort GES 300.2 CBT Exam',
    source: 'PastQuestion'
  },
  {
    id: 'ges300_pq_5',
    courseId: 'ges300',
    question: 'In a SWOT Analysis, which components represent INTERNAL organizational factors under the control of the venture team?',
    options: ['Strengths and Weaknesses', 'Opportunities and Threats', 'Suppliers and Customers', 'Taxes and Inflation'],
    correctAnswer: 0,
    explanation: 'Strengths and Weaknesses are internal attributes of the venture (skills, resources, IP, weaknesses), whereas Opportunities and Threats stem from the external environment.',
    topic: 'Strategic Planning & Environmental Scanning',
    year: 'UniPort GES 300.2 CBT Exam',
    source: 'PastQuestion'
  },
  {
    id: 'ges300_pq_6',
    courseId: 'ges300',
    question: 'Under the Nigerian Companies and Allied Matters Act (CAMA 2020), what is a major modern provision regarding single-member private companies?',
    options: ['A single person can now legally incorporate a Private Limited Liability Company (Ltd)', 'All businesses must have at least 50 directors', 'Foreign currency accounts are strictly banned for startups', 'Only state governments can own businesses'],
    correctAnswer: 0,
    explanation: 'CAMA 2020 introduced significant ease-of-doing-business reforms in Nigeria, allowing a single individual to form a private company with full limited liability status.',
    topic: 'Legal Structures & CAC Compliance',
    year: 'UniPort GES 300.2 CBT Exam',
    source: 'PastQuestion'
  }
].map(sanitizeQuestion);

export const FLASHCARDS: Flashcard[] = [
  // ================= GES 112 FLASHCARDS =================
  {
    id: 'fc_112_1',
    courseId: 'ges112',
    term: 'Nok Culture',
    definition: 'Ancient Iron Age civilization in Kaduna State (c. 500 BC – 200 AD) famous for stylized terracotta figurines with hollow eyes, mouths, and flared nostrils.',
    category: 'Archaeology & Heritage',
    keyPoints: ['Dated 500 BC – 200 AD', 'Oldest known terracotta in Sub-Saharan Africa', 'Pioneered early iron smelting in West Africa'],
    example: 'Discovery in 1928 by tin miners near Nok village.'
  },
  {
    id: 'fc_112_2',
    courseId: 'ges112',
    term: '1914 Amalgamation',
    definition: 'The British administrative unification of Northern and Southern Protectorates into modern Nigeria under Governor-General Sir Frederick Lugard.',
    category: 'Colonial History',
    keyPoints: ['Date: January 1, 1914', 'Initiator: Lord Frederick Lugard', 'Economic motive: Subsidize northern deficit with southern customs revenue'],
    example: 'Creation of a single administrative territory called Nigeria.'
  },
  {
    id: 'fc_112_3',
    courseId: 'ges112',
    term: 'Igbo-Ukwu Artifacts',
    definition: '9th-century AD archaeological site in Anambra state showcasing peerless lost-wax (cire perdue) bronze casting with intricate geometric beads and roped pots.',
    category: 'Archaeology & Heritage',
    keyPoints: ['Excavated by Prof. Thurstan Shaw in 1959', '9th Century AD chronology', 'Proves indigenous high metallurgical technology'],
    example: 'Famous roped bronze pot and ceremonial staff heads.'
  },
  {
    id: 'fc_112_4',
    courseId: 'ges112',
    term: 'Oyomesi Council',
    definition: 'The supreme council of seven hereditary chiefs in the Old Oyo Empire led by the Bashorun who served as kingmakers and checks on the Alaafin.',
    category: 'Traditional Governance',
    keyPoints: ['Headed by the Bashorun', 'Could reject an autocratic Alaafin with an empty calabash (symbol of self-sacrifice)', 'Maintained balance of power'],
    example: 'Exemplifies pre-colonial constitutional checks and balances.'
  },
  {
    id: 'fc_112_5',
    courseId: 'ges112',
    term: 'Canoe House System (Wari)',
    definition: 'A flexible socio-political and economic trading unit in pre-colonial Niger Delta city-states (Bonny, Nembe, Kalabari, Opobo) based on maritime trade and military defense.',
    category: 'Niger Delta Studies',
    keyPoints: ['Facilitated Palm Oil and coastal commerce', 'Enabled upward social mobility for skilled individuals', 'Headed by a dynamic House Chief'],
    example: 'Led by prominent merchant kings like King Jaja of Opobo.'
  },

  // ================= GES 212.2 FLASHCARDS =================
  {
    id: 'fc_212_1',
    courseId: 'ges212',
    term: 'Epistemology',
    definition: 'The core branch of philosophy that investigates the nature, origin, justification, conditions, and boundaries of human knowledge.',
    category: 'Core Branches of Philosophy',
    keyPoints: ['Derived from Greek "Episteme" (Knowledge)', 'Examines Rationalism vs Empiricism', 'Analyzes Justified True Belief (JTB)'],
    example: 'Debate: Does knowledge come primarily from reasoning or five senses?'
  },
  {
    id: 'fc_212_2',
    courseId: 'ges212',
    term: 'Argumentum Ad Hominem',
    definition: 'An informal fallacy committed when an argument attacks the opponent’s personal character or background instead of dissecting their claim.',
    category: 'Logical Fallacies',
    keyPoints: ['Latin for "Against the Man"', 'Fallacy of Relevance', 'Diverts focus from logical substance to personal mudslinging'],
    example: '"You cannot trust his economic plan because he dropped out of school."'
  },
  {
    id: 'fc_212_3',
    courseId: 'ges212',
    term: 'Soundness (in Deductive Logic)',
    definition: 'A deductive argument is sound if and only if it is logically valid and all of its constituent premises are factually true.',
    category: 'Formal Logic',
    keyPoints: ['Soundness = Validity + True Premises', 'Guarantees the absolute truth of the conclusion', 'Applies strictly to deductive arguments'],
    example: 'Premise 1: All humans are mortal. Premise 2: Socrates is human. Conclusion: Socrates is mortal.'
  },
  {
    id: 'fc_212_4',
    courseId: 'ges212',
    term: 'Existence Precedes Essence',
    definition: 'The fundamental premise of Sartre’s Existentialism asserting humans first exist, encounter the world, and subsequently define their essence by their decisions.',
    category: 'Existential Philosophy',
    keyPoints: ['Associated with Jean-Paul Sartre & Albert Camus', 'Rejects pre-determined human purpose', 'Emphasizes radical free will and personal responsibility'],
    example: 'You are what you choose to make of yourself through actions.'
  },
  {
    id: 'fc_212_5',
    courseId: 'ges212',
    term: 'Categorical Syllogism',
    definition: 'A deductive argument containing exactly three categorical propositions (Major Premise, Minor Premise, Conclusion) and three terms (Major, Minor, Middle).',
    category: 'Formal Logic',
    keyPoints: ['Formulated by Aristotle', 'Middle term must be distributed at least once', 'Valid forms tested via Venn Diagrams or Rules of Syllogism'],
    example: 'All UniPort students study GES; Joy is a UniPort student; Therefore Joy studies GES.'
  },

  // ================= GES 300.2 FLASHCARDS =================
  {
    id: 'fc_300_1',
    courseId: 'ges300',
    term: 'The 4 Ps of Marketing',
    definition: 'The foundational marketing mix framework consisting of Product, Price, Place (distribution), and Promotion to successfully reach target customers.',
    category: 'Marketing Strategies',
    keyPoints: ['Formulated by E. Jerome McCarthy', 'Product: Features & Benefits', 'Price: Cost & Margins', 'Place: Distribution channels', 'Promotion: Advertising & Public Relations'],
    example: 'Setting an affordable student price for a laundry service on UniPort Choba campus.'
  },
  {
    id: 'fc_300_2',
    courseId: 'ges300',
    term: 'Bootstrapping',
    definition: 'Starting and growing a venture using only personal resources, lean operational expenses, and customer revenue without relying on external bank loans or venture capital.',
    category: 'Venture Financing',
    keyPoints: ['Preserves 100% founder equity', 'Requires extreme financial discipline', 'Lowers financial leverage risk'],
    example: 'Using personal savings and early client deposits to buy the first POS machine.'
  },
  {
    id: 'fc_300_3',
    courseId: 'ges300',
    term: 'Feasibility Study',
    definition: 'A rigorous evaluation of a business idea to determine its market viability, technical capability, financial profitability, and organizational feasibility before launch.',
    category: 'Business Planning',
    keyPoints: ['Assesses market demand and competition', 'Calculates projected ROI and payback period', 'Prevents costly capital misallocation'],
    example: 'Surveying students at Abuja campus before leasing an off-campus hostel printing press.'
  },
  {
    id: 'fc_300_4',
    courseId: 'ges300',
    term: 'Corporate Affairs Commission (CAC)',
    definition: 'The Nigerian statutory body established under CAMA responsible for registering business names, incorporating companies, and regulating business entities in Nigeria.',
    category: 'Legal Regulations',
    keyPoints: ['Administers Companies and Allied Matters Act (CAMA 2020)', 'Issues Certificate of Incorporation and RC/BN numbers', 'Allows online single-director registration'],
    example: 'Registering "Choba Campus Logistics Enterprise" as a Business Name.'
  },
  {
    id: 'fc_300_5',
    courseId: 'ges300',
    term: 'Break-Even Point (BEP)',
    definition: 'The exact sales volume where total sales revenue equals total operating costs (Fixed Costs + Variable Costs), resulting in zero net profit and zero net loss.',
    category: 'Financial Management',
    keyPoints: ['Formula: BEP (units) = Fixed Costs / (Selling Price per unit - Variable Cost per unit)', 'Identifies safety margin', 'Essential for pricing strategy'],
    example: 'If fixed rent is ₦50,000 and contribution margin per bag is ₦1,000, BEP is 50 bags.'
  }
];

export const COURSE_SUMMARIES: Record<CourseId, ChapterSummary[]> = {
  ges112: [
    {
      id: 'sum_112_1',
      chapterNumber: 1,
      title: 'Geographical Environment & Culture Zones of Nigeria',
      summaryBullets: [
        'Nigeria is situated in West Africa between latitudes 4°N and 14°N, characterized by diverse vegetation zones.',
        'The Southern Mangrove & Rainforest Zones receive heavy precipitation and traditionally cultivate root crops like yams, cassava, and oil palm.',
        'The Guinea and Sudan Savanna zones of Middle Belt and North specialize in grain crops (millet, sorghum, maize) and cattle rearing.',
        'Geographical diversity fostered vibrant pre-colonial inter-regional trade (e.g., salt, kolanuts, cattle, dried fish, iron tools).'
      ],
      keyDefinitions: [
        { term: 'Culture Zone', meaning: 'A geographical region sharing similar cultural traits, economic patterns, and environmental adaptations.' },
        { term: 'Ecological Complementarity', meaning: 'The mutual trade exchange between savanna grain producers and forest root crop producers.' }
      ],
      examHotspotTips: [
        'Remember that Kolanut was traded from the southern Yoruba forests to the northern Hausa states, while cattle and leather moved south.',
        'Note the distinction between Guinea Savanna (tall grasses/scattered trees) and Sudan Savanna (shorter grass, cereal belts).'
      ]
    },
    {
      id: 'sum_112_2',
      chapterNumber: 2,
      title: 'Archaeological Centers: Nok, Ife, Benin & Igbo-Ukwu',
      summaryBullets: [
        'Nok Culture (500 BC - 200 AD, Kaduna state): Renowned for stylized terracotta heads and pioneering iron smelting.',
        'Ife Bronzes & Terracottas (11th-15th century AD): Highly naturalistic portraits depicting Oonis of Ife.',
        'Benin Art: Masterful brass castings commemorating the Oba and Queen Mother (Iyoba), heavily pillaged in the 1897 British punitive expedition.',
        'Igbo-Ukwu (9th century AD): Excavated by Thurstan Shaw, proving early lost-wax bronze casting and elaborate beaded burial chambers.'
      ],
      keyDefinitions: [
        { term: 'Lost-Wax (Cire Perdue)', meaning: 'An ancient metallurgical casting technique where molten bronze replaces a wax mold.' },
        { term: 'Terracotta', meaning: 'Baked brownish-red unglazed clay used for historic sculptures.' }
      ],
      examHotspotTips: [
        'CBT question alert: Igbo-Ukwu is dated to the 9th Century AD (earlier than Ife and Benin).',
        'Nok terracotta features distinctive triangular perforated eye pupils and flared nostrils.'
      ]
    },
    {
      id: 'sum_112_3',
      chapterNumber: 3,
      title: 'Pre-Colonial Socio-Political Institutions',
      summaryBullets: [
        'Hausa/Fulani Emirates: Centralized caliphate administration headed by the Emir with officials like Waziri, Madawaki, Galadima, Sarkin Fada.',
        'Old Oyo Empire: Constitutional monarch (Alaafin) checked by the Oyomesi council headed by the Bashorun and religious sanction by the Ogboni.',
        'Igbo Traditional Democracy: Segmentary/acephalous governance with council of elders (Ndichie), age grades, Ozo titleholders, and village assembly.',
        'Niger Delta City-States: Canoe House System (Wari) based on maritime mercantile trade and naval defense.'
      ],
      keyDefinitions: [
        { term: 'Acephalous Society', meaning: 'A decentralized, stateless community functioning through consensual council democracy without a single supreme king.' },
        { term: 'Wari (Canoe House)', meaning: 'A socio-political and commercial maritime organization in Niger Delta city-states.' }
      ],
      examHotspotTips: [
        'Bashorun led the 7 Oyomesi kingmakers who held the power to reject an Alaafin.',
        'The warrant chief system failed in Igbo land because it contradicted their decentralized democratic norms.'
      ]
    }
  ],
  ges212: [
    {
      id: 'sum_212_1',
      chapterNumber: 1,
      title: 'Introduction to Philosophy & Epistemology',
      summaryBullets: [
        'Philosophy originated from the Greek words "Philein" (to love) and "Sophia" (wisdom), signifying critical reflection and pursuit of fundamental truth.',
        'Epistemology investigates the definition, origin, structure, and limits of knowledge.',
        'Rationalism (Descartes, Spinoza, Leibniz) argues reason and innate ideas are the true source of knowledge.',
        'Empiricism (Locke, Berkeley, Hume) claims all knowledge originates from sensory experience (Tabula Rasa).'
      ],
      keyDefinitions: [
        { term: 'Epistemology', meaning: 'The theory of knowledge regarding what distinguishes justified belief from opinion.' },
        { term: 'Tabula Rasa', meaning: 'John Locke’s metaphor of the human mind as a blank slate at birth, written upon by experience.' }
      ],
      examHotspotTips: [
        'Distinguish Descartes (Rationalist - "Cogito Ergo Sum") from John Locke (Empiricist - Tabula Rasa).',
        'The four main branches of philosophy: Epistemology, Metaphysics, Ethics/Axiology, and Logic.'
      ]
    },
    {
      id: 'sum_212_2',
      chapterNumber: 2,
      title: 'Formal Logic, Syllogisms & Truth Tables',
      summaryBullets: [
        'Logic is the systematic study of the principles of valid reasoning and sound inference.',
        'Deductive argument: If premises are true, the conclusion is guaranteed to be true (evaluated by Validity and Soundness).',
        'Inductive argument: Premises provide probabilistic support for the conclusion (evaluated by Strength and Cogency).',
        'Propositional connectors: Conjunction (∧), Disjunction (∨), Negation (~), Conditional (→), Biconditional (↔).'
      ],
      keyDefinitions: [
        { term: 'Validity', meaning: 'A structural property of deductive arguments where true premises logically necessitate a true conclusion.' },
        { term: 'Soundness', meaning: 'When a deductive argument is both formally valid and its premises are factually true.' }
      ],
      examHotspotTips: [
        'Conjunction (P ∧ Q) is only True when BOTH P and Q are True.',
        'Conditional (P → Q) is ONLY False when the antecedent P is True and consequent Q is False.'
      ]
    },
    {
      id: 'sum_212_3',
      chapterNumber: 3,
      title: 'Informal Fallacies & Human Existence',
      summaryBullets: [
        'Fallacies of Relevance introduce irrelevant psychological or emotional premises to mislead reasoning.',
        'Ad Hominem (attacking the person), Ad Populum (bandwagon appeal), Ad Baculum (appeal to force/threat), Ad Misericordiam (appeal to pity).',
        'Petitio Principii (Begging the question / circular reasoning): Assuming the conclusion in the premises.',
        'Human Existence: Existentialism explores freedom, alienation, authentic existence, and responsibility (Sartre: Existence precedes essence).'
      ],
      keyDefinitions: [
        { term: 'Informal Fallacy', meaning: 'An error in reasoning stemming from flaws in content, context, or linguistic ambiguity rather than structural form.' },
        { term: 'Existentialism', meaning: 'A philosophical approach emphasizing individual freedom, choice, and personal responsibility in finding meaning in life.' }
      ],
      examHotspotTips: [
        'Read fallacy questions carefully: If someone is threatened with punishment, it is Ad Baculum. If their character is smeared, it is Ad Hominem.',
        'Sartre insisted that freedom brings unavoidable responsibility.'
      ]
    }
  ],
  ges300: [
    {
      id: 'sum_300_1',
      chapterNumber: 1,
      title: 'Entrepreneurial Mindset & Venture Ideation',
      summaryBullets: [
        'Entrepreneurship is the process of identifying market opportunities, assembling resources, and assuming calculated risks to create economic value.',
        'Joseph Schumpeter emphasized innovation and "Creative Destruction" as the core driver of entrepreneurship.',
        'Intrapreneurship refers to exercising entrepreneurial initiative within an established corporation or institution.',
        'Environmental scanning in Nigeria involves analyzing political, economic, socio-cultural, technological, environmental, and legal (PESTEL) factors.'
      ],
      keyDefinitions: [
        { term: 'Creative Destruction', meaning: 'The process where innovative new products/processes replace outdated, inefficient businesses.' },
        { term: 'Opportunity Recognition', meaning: 'The capacity to perceive unmet consumer needs and convert them into profitable business models.' }
      ],
      examHotspotTips: [
        'Schumpeter = Innovation & Creative Destruction.',
        'Distinguish entrepreneur (starts external venture) from intrapreneur (innovates inside existing company).'
      ]
    },
    {
      id: 'sum_300_2',
      chapterNumber: 2,
      title: 'Feasibility Study & The Business Plan Architecture',
      summaryBullets: [
        'A Feasibility Study determines whether an idea is viable BEFORE significant capital is deployed.',
        'Core pillars of Feasibility: Market Feasibility, Technical/Operational Feasibility, Financial Feasibility, Legal Feasibility.',
        'Business Plan: A formal blueprint outlining the venture’s goals, operational model, marketing mix, and financial forecasts.',
        'Key Sections: Executive Summary (written last, placed first), Market Analysis, Management Team, Marketing Strategy, Financial Plan.'
      ],
      keyDefinitions: [
        { term: 'Executive Summary', meaning: 'A high-impact 1-2 page summary capturing the entire business plan for potential investors.' },
        { term: 'SWOT Analysis', meaning: 'Strategic evaluation of internal Strengths & Weaknesses alongside external Opportunities & Threats.' }
      ],
      examHotspotTips: [
        'Executive Summary is always drafted after completing all other sections of the business plan.',
        'Break-Even Point (BEP) in units = Fixed Costs / Contribution Margin per unit (Price - Variable Cost).'
      ]
    },
    {
      id: 'sum_300_3',
      chapterNumber: 3,
      title: 'Marketing Mix, Financing & CAC Registration in Nigeria',
      summaryBullets: [
        'Marketing Mix (4 Ps): Product (quality, branding), Price (cost-plus, penetration, skimming), Place (distribution), Promotion (advertising, PR).',
        'Capital Sources: Bootstrapping (personal funds), Equity Financing (selling shares/angels), Debt Financing (bank loans/microfinance), Grants (BOI, SMEDAN, Tony Elumelu Foundation).',
        'Legal Forms in Nigeria: Sole Proprietorship (Business Name), Partnership, Private Limited Liability Company (Ltd).',
        'CAMA 2020: Established by Corporate Affairs Commission (CAC); allows single-member private companies and electronic filing.'
      ],
      keyDefinitions: [
        { term: 'Bootstrapping', meaning: 'Building an enterprise using personal savings and lean organic revenues without external loans.' },
        { term: 'CAMA 2020', meaning: 'Companies and Allied Matters Act 2020, the primary corporate legislation regulating Nigerian enterprises.' }
      ],
      examHotspotTips: [
        'Under CAMA 2020, 1 person can now legally form a Private Limited Company in Nigeria.',
        'CAC is the sole authority for business registration in Nigeria.'
      ]
    }
  ]
};
