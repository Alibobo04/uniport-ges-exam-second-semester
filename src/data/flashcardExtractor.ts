import { Question, Flashcard, CourseId } from '../types';

/**
 * Normalizes and derives a clean, authoritative Term & Concept title
 * from question text, topic, and correct answer.
 */
function deriveTermFromQuestion(rawQ: string, topic: string, correctOpt: string, courseId: CourseId): string {
  const qLower = rawQ.toLowerCase();
  const optLower = (correctOpt || '').toLowerCase();

  // 1. Quoted term in question
  const quotedMatch = rawQ.match(/["'“‘]([^"'“”‘’]{2,45})["'”’]/);
  if (quotedMatch && quotedMatch[1] && !quotedMatch[1].toLowerCase().includes('which') && !quotedMatch[1].toLowerCase().includes('not')) {
    return cleanTitle(quotedMatch[1]);
  }

  // 2. GES 112 Specific Domain Concept Mapping
  if (courseId === 'ges112') {
    if (qLower.includes('nok') || optLower.includes('nok')) return 'Nok Terracotta Culture';
    if (qLower.includes('igbo-ukwu') || qLower.includes('igbo ukwu') || optLower.includes('igbo-ukwu')) return 'Igbo-Ukwu Bronze Metallurgical Site';
    if (qLower.includes('ife') && (qLower.includes('bronze') || qLower.includes('terracotta') || optLower.includes('ife'))) return 'Ife Bronze & Terracotta Antiquities';
    if (qLower.includes('benin') && (qLower.includes('bronze') || qLower.includes('oba') || optLower.includes('benin'))) return 'Benin Kingdom & Bronze Heritage';
    if (qLower.includes('oyomesi') || optLower.includes('oyomesi')) return 'Oyomesi Kingmakers Council';
    if (qLower.includes('bashorun') || optLower.includes('bashorun')) return 'Bashorun (Prime Minister of Old Oyo)';
    if (qLower.includes('alaafin') || optLower.includes('alaafin')) return 'Alaafin of Oyo';
    if (qLower.includes('amalgamation') || qLower.includes('1914') || optLower.includes('amalgamation') || optLower.includes('lugard')) return '1914 Amalgamation of Nigeria';
    if (qLower.includes('lugard') || optLower.includes('lugard')) return 'Lord Frederick Lugard';
    if (qLower.includes('indirect rule') || optLower.includes('indirect rule')) return 'Indirect Rule System';
    if (qLower.includes('warrant chief') || optLower.includes('warrant chief')) return 'Warrant Chief System';
    if (qLower.includes('aba women') || qLower.includes('1929') || optLower.includes('aba women')) return '1929 Aba Women’s War (Ogu Umunwanyi)';
    if (qLower.includes('canoe house') || qLower.includes('wari') || optLower.includes('canoe house')) return 'Canoe House System (Wari)';
    if (qLower.includes('thurstan shaw') || optLower.includes('thurstan shaw')) return 'Prof. Thurstan Shaw (Archaeology)';
    if (qLower.includes('culture zone') || optLower.includes('culture zone')) return 'Culture Zones of Nigeria';
    if (qLower.includes('trans-saharan') || qLower.includes('trans saharan') || optLower.includes('trans-saharan')) return 'Trans-Saharan Trade Routes';
    if (qLower.includes('clifford') || optLower.includes('clifford')) return 'Clifford Constitution (1922)';
    if (qLower.includes('richards') || optLower.includes('richards')) return 'Richards Constitution (1946)';
    if (qLower.includes('macpherson') || optLower.includes('macpherson')) return 'Macpherson Constitution (1951)';
    if (qLower.includes('lyttelton') || optLower.includes('lyttelton')) return 'Lyttelton Constitution (1954)';
    if (qLower.includes('uzama') || optLower.includes('uzama')) return 'Uzama N’Ihinron (Benin Kingmakers)';
    if (qLower.includes('mai') && (qLower.includes('borno') || qLower.includes('kanem'))) return 'Mai Monarchy (Kanem-Borno)';
    if (qLower.includes('caliphate') || qLower.includes('dan fodio') || qLower.includes('usman')) return 'Sokoto Caliphate & Usman Dan Fodio';
    if (qLower.includes('jaja') || optLower.includes('jaja')) return 'King Jaja of Opobo';
    if (qLower.includes('nana') || optLower.includes('nana')) return 'Chief Nana of Itsekiri';
  }

  // 3. GES 212 Specific Domain Concept Mapping
  if (courseId === 'ges212') {
    if (qLower.includes('ad hominem') || optLower.includes('ad hominem')) return 'Argumentum Ad Hominem (Personal Attack)';
    if (qLower.includes('ad baculum') || optLower.includes('ad baculum')) return 'Argumentum Ad Baculum (Appeal to Force)';
    if (qLower.includes('ad misericordiam') || optLower.includes('ad misericordiam')) return 'Argumentum Ad Misericordiam (Appeal to Pity)';
    if (qLower.includes('ad populum') || optLower.includes('ad populum')) return 'Argumentum Ad Populum (Bandwagon / Appeal to People)';
    if (qLower.includes('ad verecundiam') || optLower.includes('ad verecundiam')) return 'Argumentum Ad Verecundiam (Appeal to Inappropriate Authority)';
    if (qLower.includes('ad ignorantiam') || optLower.includes('ad ignorantiam')) return 'Argumentum Ad Ignorantiam (Appeal to Ignorance)';
    if (qLower.includes('petitio') || qLower.includes('begging the question') || optLower.includes('petitio')) return 'Petitio Principii (Begging the Question)';
    if (qLower.includes('straw man') || qLower.includes('strawman') || optLower.includes('straw man')) return 'Straw Man Fallacy';
    if (qLower.includes('red herring') || optLower.includes('red herring')) return 'Red Herring Fallacy';
    if (qLower.includes('composition') && qLower.includes('fallacy')) return 'Fallacy of Composition';
    if (qLower.includes('division') && qLower.includes('fallacy')) return 'Fallacy of Division';
    if (qLower.includes('post hoc') || optLower.includes('post hoc')) return 'Post Hoc Ergo Propter Hoc (False Cause)';
    if (qLower.includes('equivocation') || optLower.includes('equivocation')) return 'Fallacy of Equivocation';
    if (qLower.includes('amphiboly') || optLower.includes('amphiboly')) return 'Fallacy of Amphiboly';
    if (qLower.includes('syllogism') || optLower.includes('syllogism')) return 'Categorical Syllogism Structure';
    if (qLower.includes('middle term') || optLower.includes('middle term')) return 'The Middle Term (Syllogistic Logic)';
    if (qLower.includes('undistributed middle') || optLower.includes('undistributed middle')) return 'Fallacy of Undistributed Middle';
    if (qLower.includes('validity') && qLower.includes('soundness')) return 'Validity vs. Soundness in Deductive Logic';
    if (qLower.includes('epistemology') || optLower.includes('epistemology')) return 'Epistemology (Theory of Knowledge)';
    if (qLower.includes('metaphysics') || optLower.includes('metaphysics')) return 'Metaphysics (Study of Reality & Being)';
    if (qLower.includes('ethics') || optLower.includes('ethics')) return 'Ethics (Moral Philosophy)';
    if (qLower.includes('axiology') || optLower.includes('axiology')) return 'Axiology (Theory of Values)';
    if (qLower.includes('tabula rasa') || optLower.includes('tabula rasa')) return 'Tabula Rasa (John Locke & Empiricism)';
    if (qLower.includes('empiricism') || optLower.includes('empiricism')) return 'Empiricism (Knowledge from Sense Experience)';
    if (qLower.includes('rationalism') || optLower.includes('rationalism')) return 'Rationalism (Knowledge from Pure Reason)';
    if (qLower.includes('cogito') || qLower.includes('descartes')) return 'Cogito Ergo Sum (René Descartes)';
    if (qLower.includes('modus ponens') || optLower.includes('modus ponens')) return 'Modus Ponens (Affirming the Antecedent)';
    if (qLower.includes('modus tollens') || optLower.includes('modus tollens')) return 'Modus Tollens (Denying the Consequent)';
    if (qLower.includes('law of identity') || optLower.includes('law of identity')) return 'Law of Identity (Fundamental Law of Thought)';
    if (qLower.includes('law of non-contradiction') || qLower.includes('non contradiction')) return 'Law of Non-Contradiction';
    if (qLower.includes('excluded middle') || optLower.includes('excluded middle')) return 'Law of Excluded Middle';
    if (qLower.includes('existentialism') || optLower.includes('existentialism') || qLower.includes('sartre')) return 'Existentialism (Sartre: Existence Precedes Essence)';
    if (qLower.includes('determinism') || optLower.includes('determinism')) return 'Determinism vs. Free Will';
  }

  // 4. GES 300 Specific Domain Concept Mapping
  if (courseId === 'ges300') {
    if (qLower.includes('intrapreneur') || optLower.includes('intrapreneur')) return 'Intrapreneurship (Corporate Innovation)';
    if (qLower.includes('schumpeter') || qLower.includes('creative destruction') || optLower.includes('creative destruction')) return 'Creative Destruction (Joseph Schumpeter)';
    if (qLower.includes('break-even') || qLower.includes('bep') || optLower.includes('break-even')) return 'Break-Even Point (BEP) Analysis';
    if (qLower.includes('bootstrapping') || optLower.includes('bootstrapping')) return 'Bootstrapping (Self-Financing)';
    if (qLower.includes('swot') || optLower.includes('swot')) return 'SWOT Analysis Matrix';
    if (qLower.includes('pestel') || optLower.includes('pestel') || qLower.includes('pest')) return 'PESTEL Environmental Scanning Framework';
    if (qLower.includes('cama') || qLower.includes('2020') || optLower.includes('cama')) return 'CAMA 2020 Corporate Provisions';
    if (qLower.includes('cac') || optLower.includes('cac') || optLower.includes('corporate affairs commission')) return 'Corporate Affairs Commission (CAC)';
    if (qLower.includes('executive summary') || optLower.includes('executive summary')) return 'Executive Summary (Business Plan)';
    if (qLower.includes('feasibility') || optLower.includes('feasibility')) return 'Feasibility Study Evaluation';
    if (qLower.includes('4 ps') || qLower.includes('4ps') || qLower.includes('marketing mix')) return 'The 4 Ps Marketing Mix';
    if (qLower.includes('penetration pricing') || optLower.includes('penetration pricing')) return 'Penetration Pricing Strategy';
    if (qLower.includes('price skimming') || optLower.includes('price skimming')) return 'Price Skimming Strategy';
    if (qLower.includes('venture capital') || optLower.includes('venture capital')) return 'Venture Capital (VC) & Angel Investors';
    if (qLower.includes('working capital') || optLower.includes('working capital')) return 'Working Capital Management';
    if (qLower.includes('cash flow') || optLower.includes('cash flow')) return 'Cash Flow Forecasting';
    if (qLower.includes('contribution margin') || optLower.includes('contribution margin')) return 'Contribution Margin (Unit Profitability)';
    if (qLower.includes('fixed cost') || optLower.includes('fixed cost')) return 'Fixed Costs vs. Variable Costs';
    if (qLower.includes('sole proprietorship') || optLower.includes('sole proprietorship')) return 'Sole Proprietorship Business Structure';
    if (qLower.includes('partnership') || optLower.includes('partnership')) return 'Partnership Enterprise Structure';
    if (qLower.includes('limited liability') || optLower.includes('limited liability')) return 'Private Limited Liability Company (Ltd)';
  }

  // 5. If correct option is concise and meaningful
  if (
    correctOpt &&
    correctOpt.length >= 3 &&
    correctOpt.length <= 40 &&
    !correctOpt.toLowerCase().includes('all of the') &&
    !correctOpt.toLowerCase().includes('none of the') &&
    !correctOpt.toLowerCase().includes('both a and') &&
    !correctOpt.toLowerCase().startsWith('it ') &&
    !correctOpt.toLowerCase().startsWith('to ')
  ) {
    return cleanTitle(correctOpt);
  }

  // 6. Fallback to topic + clean subject
  return cleanTitle(`${topic} Principle`);
}

function cleanTitle(str: string): string {
  if (!str) return 'Core Syllabus Concept';
  let clean = str.replace(/^[•\-\*\d\.\s\(\)]+/, '').trim();
  // Capitalize nicely
  if (clean.length > 0) {
    clean = clean.charAt(0).toUpperCase() + clean.slice(1);
  }
  return clean;
}

/**
 * Converts multiple choice question wording into a clear, engaging
 * Concept Question / Active Recall prompt for the front of the card.
 */
function generateConceptQuestion(term: string, rawQ: string, topic: string, courseId: CourseId): string {
  let qText = rawQ;

  // Clean raw question of multiple-choice artifacts
  qText = qText.replace(/Which of the following best defines/i, 'What is the definition of');
  qText = qText.replace(/Which of the following is/i, 'What is');
  qText = qText.replace(/Which of the following/i, 'What');
  qText = qText.replace(/All of the following are .* except:?/i, `What are the core characteristics of ${term}?`);
  qText = qText.replace(/is best defined as:?/i, 'is defined as what?');
  qText = qText.replace(/refers to:?/i, 'signifies what in this context?');

  if (qText.endsWith(':')) {
    qText = qText.slice(0, -1) + '?';
  }
  if (!qText.endsWith('?')) {
    qText += '?';
  }

  // If question is still too rigid or contains option references
  if (qText.toLowerCase().includes('option') || qText.length < 15) {
    return `What is the core definition, key characteristics, and exam significance of ${term}?`;
  }

  return qText;
}

/**
 * Transforms any Question into a dedicated Term & Concept Flashcard
 */
export function createFlashcardFromQuestion(q: Question, index: number): Flashcard {
  const correctOpt = q.options && q.options[q.correctAnswer] !== undefined
    ? q.options[q.correctAnswer]
    : 'See explanation';

  let rawQ = q.question.trim();
  rawQ = rawQ.replace(/^(?:question|q)\s*\.?\s*\d+[\s:.-]*\n*/i, '');
  rawQ = rawQ.replace(/^\d+[\.\)]\s*/, '').trim();

  // Extract high-yield Term & Concept
  const term = deriveTermFromQuestion(rawQ, q.topic, correctOpt, q.courseId);

  // Generate Concept Question Prompt for the Front
  const conceptQuestion = generateConceptQuestion(term, rawQ, q.topic, q.courseId);

  // Back definition / explanation
  let definition = '';
  if (q.explanation && q.explanation.trim()) {
    definition = q.explanation.trim();
  } else {
    definition = `${correctOpt}. This represents a key exam hotspot in ${q.topic}.`;
  }

  // Hotspot Key Points for the Back
  const keyPoints: string[] = [
    `Core Answer / Principle: ${correctOpt}`,
    `Topic / Unit: ${q.topic}`,
    q.chapter ? `Syllabus Chapter: ${q.chapter}` : (q.source === 'PastQuestion' ? `Exam Reference: ${q.year || 'UniPort Past CBT Exam'}` : 'Source: Workbook Practice Drill'),
  ];

  if (q.hint && q.hint.trim()) {
    keyPoints.push(`Key Hotspot Tip: ${q.hint.trim()}`);
  }

  const category = q.chapter || q.topic || (q.source === 'PastQuestion' ? 'Past CBT Exam' : 'Workbook Practice Drill');

  return {
    id: `fc_${q.source === 'PastQuestion' ? 'pq' : 'wb'}_${q.courseId}_${q.id || index}`,
    courseId: q.courseId,
    term,
    conceptQuestion,
    definition,
    category,
    keyPoints,
    source: q.source,
    topic: q.topic,
    chapter: q.chapter,
    correctAnswerText: correctOpt,
  };
}
