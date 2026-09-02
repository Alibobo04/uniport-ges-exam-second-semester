import { CourseInfo, Question, Flashcard, ChapterSummary, CourseId } from '../types';
import { GES112_PRACTICE_QUESTIONS } from './ges112Questions';
import { GES112_CBT_TEST_QUESTIONS } from './ges112CbtQuestions';
import { GES212_PRACTICE_QUESTIONS } from './ges212Questions';
import { GES212_CBT_TEST_QUESTIONS } from './ges212CbtQuestions';
import { GES300_PRACTICE_QUESTIONS } from './ges300Questions';
import { createFlashcardFromQuestion } from './flashcardExtractor';

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

  // ================= GES 300.2 WORKBOOK (300 PRACTICE DRILLS) =================
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

const CORE_CONCEPT_FLASHCARDS: Flashcard[] = [
  // ================= GES 112 FLASHCARDS =================
  {
    id: 'fc_112_1',
    courseId: 'ges112',
    term: 'Nok Culture',
    conceptQuestion: 'What are the defining archaeological characteristics, periodization, and artistic significance of Nok Culture?',
    definition: 'Ancient Iron Age civilization in Kaduna State (c. 500 BC – 200 AD) famous for stylized terracotta figurines with hollow eyes, mouths, and flared nostrils, representing the oldest known terracotta art in Sub-Saharan Africa.',
    category: 'Archaeology & Heritage',
    source: 'Concept',
    topic: 'Archaeology & Pre-history',
    keyPoints: ['Dated c. 500 BC – 200 AD', 'Oldest known terracotta sculptures in Sub-Saharan Africa', 'Pioneered early iron smelting technology in West Africa'],
    example: 'Discovered in 1928 by tin miners near Nok village in Kaduna state.'
  },
  {
    id: 'fc_112_2',
    courseId: 'ges112',
    term: '1914 Amalgamation',
    conceptQuestion: 'What was the 1914 Amalgamation, who was its architect, and what was the British imperial motive?',
    definition: 'The British administrative unification of the Northern and Southern Protectorates into modern Nigeria on January 1, 1914, executed under Governor-General Sir Frederick Lugard primarily to offset the northern administrative deficit using southern customs revenues.',
    category: 'Colonial History',
    source: 'Concept',
    topic: 'Colonial Evolution & Amalgamation',
    keyPoints: ['Date: January 1, 1914', 'Architect: Sir Frederick Lugard', 'Economic Motive: Subsidize northern budget deficits with southern trade surplus'],
    example: 'Marked the political birth of Nigeria as a single geo-political entity.'
  },
  {
    id: 'fc_112_3',
    courseId: 'ges112',
    term: 'Igbo-Ukwu Bronze Artifacts',
    conceptQuestion: 'What did the archaeological discoveries by Thurstan Shaw at Igbo-Ukwu reveal about 9th-century Nigerian metallurgy?',
    definition: '9th-century AD archaeological site in Anambra state excavated by Prof. Thurstan Shaw in 1959, showcasing peerless lost-wax (cire perdue) bronze casting with intricate geometric beads, roped pots, and ceremonial regalia associated with the Eze Nri monarchy.',
    category: 'Archaeology & Heritage',
    source: 'Concept',
    topic: 'Archaeological Centers',
    keyPoints: ['Excavated by Prof. Thurstan Shaw in 1959', 'Dated to 9th Century AD', 'Proves indigenous high-temperature metallurgical mastery independent of external influence'],
    example: 'Famous roped bronze pot and ceremonial staff heads.'
  },
  {
    id: 'fc_112_4',
    courseId: 'ges112',
    term: 'Oyomesi Council',
    conceptQuestion: 'What was the constitutional function and institutional checks exerted by the Oyomesi in Old Oyo?',
    definition: 'The supreme council of seven hereditary noble kingmakers in the Old Oyo Empire led by the Bashorun. They served as a vital constitutional check on the monarch (Alaafin), with the authority to reject an autocratic ruler by presenting an empty calabash.',
    category: 'Traditional Governance',
    source: 'Concept',
    topic: 'Yoruba Political Institutions',
    keyPoints: ['Headed by the Bashorun (Prime Minister)', 'Maintained pre-colonial constitutional balance of power', 'Could mandate an authoritarian Alaafin to commit ritual suicide via an empty calabash'],
    example: 'Classic institutional check-and-balance model in African traditional governance.'
  },
  {
    id: 'fc_112_5',
    courseId: 'ges112',
    term: 'Canoe House System (Wari)',
    conceptQuestion: 'What was the Canoe House System in the Niger Delta and how did it foster commercial and military strength?',
    definition: 'A flexible socio-political and economic trading corporation in pre-colonial Niger Delta coastal city-states (Bonny, Nembe, Kalabari, Opobo) organized around trade canoes, maritime commerce, and military defense, allowing talented individuals upward social mobility regardless of birth status.',
    category: 'Niger Delta Studies',
    source: 'Concept',
    topic: 'Niger Delta Pre-Colonial Society',
    keyPoints: ['Organized for maritime Palm Oil commerce and fleet defense', 'Enabled upward social mobility based on merit and wealth', 'Headed by a dynamic House Chief elected by house members'],
    example: 'Exemplified by King Jaja of Opobo rising from humble beginnings to head the Anna Pepple House.'
  },

  // ================= GES 212.2 FLASHCARDS =================
  {
    id: 'fc_212_1',
    courseId: 'ges212',
    term: 'Epistemology',
    conceptQuestion: 'What is Epistemology and what fundamental philosophical problems does it investigate?',
    definition: 'The core branch of philosophy (from Greek "Episteme" meaning knowledge, and "Logos" meaning study) that investigates the origin, nature, methods, scope, justification, and limits of human knowledge.',
    category: 'Core Branches of Philosophy',
    source: 'Concept',
    topic: 'Epistemology & Sources of Knowledge',
    keyPoints: ['Explores Empiricism (Sense experience) vs. Rationalism (Reason/Innate ideas)', 'Analyzes Justified True Belief (JTB) paradigm', 'Investigates skepticism, certainty, and cognitive validity'],
    example: 'Core Question: "How do we know that our beliefs about the physical world are actually true?"'
  },
  {
    id: 'fc_212_2',
    courseId: 'ges212',
    term: 'Argumentum Ad Hominem',
    conceptQuestion: 'What defines the Argumentum Ad Hominem fallacy and why is it logically defective?',
    definition: 'An informal fallacy of relevance (Latin for "Argument against the Person") committed when an arguer attacks the opponent’s personal character, motives, background, or physical traits instead of addressing and refuting the logical validity of their actual claim.',
    category: 'Logical Fallacies',
    source: 'Concept',
    topic: 'Informal Fallacies',
    keyPoints: ['Abusive Ad Hominem: Direct insult to moral character', 'Circumstantial Ad Hominem: Discrediting an argument based on personal interest/vested stakes', 'Tu Quoque: Hypocrisy rebuttal ("You do it too!")'],
    example: '"You cannot accept Dr. Musa’s economic policy proposal because he has gone through a messy divorce."'
  },
  {
    id: 'fc_212_3',
    courseId: 'ges212',
    term: 'Soundness in Deductive Logic',
    conceptQuestion: 'What is the exact distinction between Validity and Soundness in deductive reasoning?',
    definition: 'In formal deductive logic, an argument is valid if its logical structure guarantees that if the premises were true, the conclusion could not be false. An argument is sound if and only if it is BOTH structurally valid AND all of its constituent premises are factually true in reality.',
    category: 'Formal Logic',
    source: 'Concept',
    topic: 'Deductive Reasoning & Validity',
    keyPoints: ['Soundness = Logical Validity + Factually True Premises', 'An argument can be structurally valid even with false premises, but it will be unsound', 'Soundness guarantees absolute truth of the conclusion'],
    example: 'Sound Argument: "All humans are mortal. Socrates is human. Therefore, Socrates is mortal."'
  },
  {
    id: 'fc_212_4',
    courseId: 'ges212',
    term: 'Existence Precedes Essence',
    conceptQuestion: 'What does the existentialist dictum "Existence precedes essence" mean for human freedom and responsibility?',
    definition: 'The foundational thesis of Atheistic Existentialism (championed by Jean-Paul Sartre) asserting that human beings first exist in the world, encounter themselves, and only then define their nature, values, and purpose through their ongoing conscious choices and actions, rather than being determined by a pre-existing divine template.',
    category: 'Existential Philosophy',
    source: 'Concept',
    topic: 'Human Existence & Existentialism',
    keyPoints: ['Core doctrine of Jean-Paul Sartre and Simone de Beauvoir', 'Humans have radical free will and cannot blame fate or human nature', 'Condemned to be free: Full accountability for all personal choices'],
    example: '"Man is nothing else but what he makes of himself through deliberate action."'
  },
  {
    id: 'fc_212_5',
    courseId: 'ges212',
    term: 'Categorical Syllogism',
    conceptQuestion: 'What constitutes the standard form and term structure of a Categorical Syllogism?',
    definition: 'A formal deductive argument consisting of exactly three categorical propositions (Major Premise, Minor Premise, and Conclusion) containing exactly three terms: Major Term (predicate of conclusion), Minor Term (subject of conclusion), and Middle Term (appears in both premises but never in the conclusion).',
    category: 'Formal Logic',
    source: 'Concept',
    topic: 'Aristotelian Logic',
    keyPoints: ['Formulated by Aristotle in the Organon', 'Middle term must be distributed at least once to avoid Undistributed Middle Fallacy', 'No conclusion follows from two negative or two particular premises'],
    example: 'Major: All mammals breathe air. Minor: All whales are mammals. Conclusion: All whales breathe air.'
  },

  // ================= GES 300.2 FLASHCARDS =================
  {
    id: 'fc_300_1',
    courseId: 'ges300',
    term: 'The 4 Ps Marketing Mix',
    conceptQuestion: 'What are the 4 Ps of Marketing and how do they function together in venture commercialization?',
    definition: 'The foundational operational marketing framework formulated by E. Jerome McCarthy comprising Product (value proposition, branding, packaging), Price (costing, pricing strategy, terms), Place (distribution channels, logistics, retail outlets), and Promotion (advertising, direct selling, digital marketing, public relations).',
    category: 'Marketing Strategies',
    source: 'Concept',
    topic: 'Marketing Mix & Strategies',
    keyPoints: ['Product: Goods or services meeting customer needs', 'Price: Strategy determining revenue margins (e.g. penetration vs skimming)', 'Place: Channel delivering product to the consumer', 'Promotion: Communication raising awareness and driving sales'],
    example: 'Packaging affordable campus-sized detergent (Product) sold near student hostels (Place) with social media promo (Promotion) at ₦500 introductory rate (Price).'
  },
  {
    id: 'fc_300_2',
    courseId: 'ges300',
    term: 'Bootstrapping',
    conceptQuestion: 'What is Bootstrapping in entrepreneurship and what are its core advantages and risks?',
    definition: 'Building and scaling a new enterprise exclusively using personal savings, sweat equity, frugal operations, and reinvested customer sales revenues without relying on external bank debt, angel investors, or venture capital equity dilution.',
    category: 'Venture Financing',
    source: 'Concept',
    topic: 'Financing & Capital Sources',
    keyPoints: ['Retains 100% equity ownership and decision-making control in founder hands', 'Enforces strict cash discipline and lean operational budgeting', 'Eliminates debt servicing pressure during volatile startup phases'],
    example: 'Launching an online UniPort tutorial channel using a personal smartphone and free software before buying professional studio cameras with course fees.'
  },
  {
    id: 'fc_300_3',
    courseId: 'ges300',
    term: 'Feasibility Study vs. Business Plan',
    conceptQuestion: 'How does a Feasibility Study differ from a formal Business Plan in venture creation?',
    definition: 'A Feasibility Study is an investigative analytical assessment conducted BEFORE launching a venture to determine whether the idea is viable across market, technical, operational, legal, and financial dimensions (answers "Should we proceed?"). A Business Plan is an operational roadmap drafted AFTER feasibility is confirmed (answers "How will we execute and scale?").',
    category: 'Business Planning',
    source: 'Concept',
    topic: 'Feasibility & Business Plans',
    keyPoints: ['Feasibility Study = Go/No-Go decision filter', 'Business Plan = Strategic execution manual and investor funding document', 'Feasibility prevents committing capital to flawed business models'],
    example: 'Assessing whether off-campus students will pay for a night-time bike shuttle before buying 5 motorcycles.'
  },
  {
    id: 'fc_300_4',
    courseId: 'ges300',
    term: 'Corporate Affairs Commission (CAC) & CAMA 2020',
    conceptQuestion: 'What is the role of CAC and what key reforms were introduced by CAMA 2020 for Nigerian startups?',
    definition: 'The Corporate Affairs Commission (CAC) is the statutory body regulating the formation and management of companies in Nigeria under CAMA. The Companies and Allied Matters Act (CAMA 2020) revolutionized startup formation by allowing a single individual to incorporate a Private Limited Liability Company (Ltd), eliminating statutory common seals, and enabling full digital incorporation.',
    category: 'Legal Regulations',
    source: 'Concept',
    topic: 'Business Registration & CAMA',
    keyPoints: ['CAMA 2020 allows 1-person Private Limited Liability Companies', 'Eliminates mandatory company seal requirement', 'CAC operates the digital Company Registration Portal (CRP)'],
    example: 'A sole founder registering a software firm as a Limited Liability Company on cac.gov.ng without needing a co-director.'
  },
  {
    id: 'fc_300_5',
    courseId: 'ges300',
    term: 'Break-Even Point (BEP)',
    conceptQuestion: 'What is the Break-Even Point (BEP), what is its mathematical formula, and why is it vital for entrepreneurs?',
    definition: 'The specific operational sales volume where Total Sales Revenue equals Total Operating Costs (Fixed Costs + Variable Costs), resulting in zero net profit and zero net loss. Sales beyond the BEP generate operational profit; sales below represent an operating loss.',
    category: 'Financial Management',
    source: 'Concept',
    topic: 'Costing & Break-Even Analysis',
    keyPoints: ['Formula (Units): Fixed Costs ÷ (Unit Selling Price - Unit Variable Cost)', 'Contribution Margin = Selling Price - Variable Cost per unit', 'Establishes the minimum production target necessary for venture solvency'],
    example: 'If fixed monthly rent & equipment costs are ₦100,000 and contribution margin is ₦2,000 per unit, BEP = 50 units.'
  }
];

export const FLASHCARDS: Flashcard[] = [
  ...CORE_CONCEPT_FLASHCARDS,
  ...WORKBOOK_QUESTIONS.map((q, idx) => createFlashcardFromQuestion(q, idx)),
  ...PAST_QUESTIONS.map((q, idx) => createFlashcardFromQuestion(q, idx)),
];

import { COURSE_SUMMARIES } from './courseSummariesData';
export { COURSE_SUMMARIES };

