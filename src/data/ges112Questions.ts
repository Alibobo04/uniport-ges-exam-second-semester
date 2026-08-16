import { Question } from '../types';
import { GES112_PRACTICE_QUESTIONS_PART2 } from './ges112QuestionsPart2';
import { GES112_PRACTICE_QUESTIONS_PART3 } from './ges112QuestionsPart3';

const GES112_PRACTICE_QUESTIONS_PART1: Question[] = [
  // ================= UNIT ONE =================
  // Nigerian History, Culture and Art up to 1800 (Yoruba, Hausa and Igbo Culture, Peoples and Culture of the Ethnic Minority Groups)
  {
    id: 'ges112_q1',
    courseId: 'ges112',
    question: 'Question 1\n\nWhich of the following was the main political system of the Yoruba before 1800?',
    options: [
      'Gerontocracy',
      'Theocratic monarchy',
      'Constitutional monarchy',
      'Feudal system'
    ],
    correctAnswer: 2,
    explanation: 'The Yoruba political system (notably in the Oyo Empire) was a constitutional monarchy where the king (Alaafin) was checked and balanced by the council of kingmakers (Oyo Mesi) and the Ogboni society.',
    topic: 'Unit 1: Yoruba Political System',
    chapter: 'Unit One: Nigerian History, Culture and Art up to 1800',
    hint: 'A monarchy with built-in checks and balances against autocracy.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q2',
    courseId: 'ges112',
    question: 'Question 2\n\nThe spiritual and political head of the Yoruba people in Ife is known as the—',
    options: [
      'Ooni',
      'Alaafin',
      'Oba',
      'Olubadan'
    ],
    correctAnswer: 0,
    explanation: 'The Ooni of Ife is traditionally revered as the spiritual and political head of the Yoruba ancestral home in Ile-Ife.',
    topic: 'Unit 1: Yoruba Monarchy and Sacred Kingship',
    chapter: 'Unit One: Nigerian History, Culture and Art up to 1800',
    hint: 'The paramount spiritual ruler based in Ile-Ife.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q3',
    courseId: 'ges112',
    question: 'Question 3\n\nWhich of the following was the most prominent Yoruba kingdom before 1800?',
    options: [
      'Benin',
      'Ife',
      'Oyo',
      'Ijebu'
    ],
    correctAnswer: 2,
    explanation: 'The Oyo Empire was the most militarily powerful and expansive Yoruba empire before 1800, dominating wide territories across the savanna and forest belts.',
    topic: 'Unit 1: Oyo Empire',
    chapter: 'Unit One: Nigerian History, Culture and Art up to 1800',
    hint: 'The expansive empire with a formidable cavalry.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q4',
    courseId: 'ges112',
    question: 'Question 4\n\nWhat was the title of the king in the Oyo Empire?',
    options: [
      'Obi',
      'Sultan',
      'Obong',
      'Alaafin'
    ],
    correctAnswer: 3,
    explanation: 'The supreme ruler of the Oyo Empire holds the royal title of "Alaafin of Oyo" (Owner of the Palace).',
    topic: 'Unit 1: Royal Titles of Yoruba Rulers',
    chapter: 'Unit One: Nigerian History, Culture and Art up to 1800',
    hint: 'Title borne by the monarch of Oyo.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q5',
    courseId: 'ges112',
    question: 'Question 5\n\nThe Oyo Mesi in Yoruba political structure served as—',
    options: [
      'Military commanders',
      'Priests',
      'Kingmakers and advisers',
      'Tax collectors'
    ],
    correctAnswer: 2,
    explanation: 'The Oyo Mesi was the council of seven supreme noble chiefs and kingmakers, led by the Bashorun, acting as supreme state advisers and constitutional checks on the Alaafin.',
    topic: 'Unit 1: Yoruba Political Institutions',
    chapter: 'Unit One: Nigerian History, Culture and Art up to 1800',
    hint: 'The supreme council that selected and checked the monarch.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q6',
    courseId: 'ges112',
    question: 'Question 6\n\nWhich ethnic group is associated with the Nok culture?',
    options: [
      'Yoruba',
      'Hausa',
      'Igbo',
      'Jukun'
    ],
    correctAnswer: 1,
    explanation: 'The Nok culture flourished in the central Nigerian savanna region (covering modern Kaduna, Plateau, and southern Hausa territory).',
    topic: 'Unit 1: Nok Culture & Northern Civilizations',
    chapter: 'Unit One: Nigerian History, Culture and Art up to 1800',
    hint: 'Central and northern Nigerian savanna belt civilization.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q7',
    courseId: 'ges112',
    question: 'Question 7\n\nNok culture is particularly famous for its—',
    options: [
      'Bronze masks',
      'Terracotta sculptures',
      'Wooden carvings',
      'Wall paintings'
    ],
    correctAnswer: 1,
    explanation: 'Nok culture (dating from approx. 500 BC to 200 AD) is globally celebrated for its distinctive hollow, stylized terracotta (baked clay) human and animal heads.',
    topic: 'Unit 1: Nok Terracotta Art',
    chapter: 'Unit One: Nigerian History, Culture and Art up to 1800',
    hint: 'Earliest baked clay artistic sculptures in Sub-Saharan Africa.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q8',
    courseId: 'ges112',
    question: 'Question 8\n\nWhich of these is a major Igbo festival that predates colonialism?',
    options: [
      'New Yam Festival',
      'Sallah',
      'Argungu',
      'Osun Festival'
    ],
    correctAnswer: 0,
    explanation: 'The New Yam Festival (Iri Ji / Iwa Ji) is an ancient, pan-Igbo cultural harvest celebration honoring the earth goddess (Ala) and ancestor deities before the consumption of newly harvested yams.',
    topic: 'Unit 1: Traditional Igbo Festivals',
    chapter: 'Unit One: Nigerian History, Culture and Art up to 1800',
    hint: 'The harvest celebration marking the arrival of the new yam.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q9',
    courseId: 'ges112',
    question: 'Question 9\n\nThe Igbo traditional political structure before 1800 can best be described as—',
    options: [
      'Centralized monarchy',
      'Federal monarchy',
      'Gerontocracy and acephalous society',
      'Military dictatorship'
    ],
    correctAnswer: 2,
    explanation: 'Pre-colonial Igbo society was predominantly acephalous (decentralized/stateless) and gerontocratic, governed by village assemblies (Oha-na-Eze), council of elders, title holders (Ozo), and age grades.',
    topic: 'Unit 1: Igbo Political Structure',
    chapter: 'Unit One: Nigerian History, Culture and Art up to 1800',
    hint: 'Decentralized, democratic governance guided by elders and assemblies.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q10',
    courseId: 'ges112',
    question: 'Question 10\n\nThe Hausa city-states were known as—',
    options: [
      'Emirates',
      'Oyo towns',
      'Zangons',
      'Bakwai'
    ],
    correctAnswer: 3,
    explanation: 'The historical authentic Hausa states were collectively identified as the "Hausa Bakwai" (the Seven Legitimate Hausa States) and "Banza Bakwai" (the Seven Illegitimate/Bastard States).',
    topic: 'Unit 1: Hausa States',
    chapter: 'Unit One: Nigerian History, Culture and Art up to 1800',
    hint: 'The Hausa term meaning "Seven" (Hausa Bakwai).',
    source: 'Workbook'
  },
  {
    id: 'ges112_q11',
    courseId: 'ges112',
    question: 'Question 11\n\nThe Hausa Bakwai are believed to be—',
    options: [
      'Slave camps',
      'Ancient cities founded by foreign traders',
      'The original seven Hausa states',
      'Islamic shrines'
    ],
    correctAnswer: 2,
    explanation: 'According to the Bayajidda legend, the Hausa Bakwai are the seven original and legitimate Hausa states: Daura, Kano, Rano, Zaria (Zazzau), Katsina, Gobir, and Biram.',
    topic: 'Unit 1: The Hausa Bakwai',
    chapter: 'Unit One: Nigerian History, Culture and Art up to 1800',
    hint: 'The original founding group of seven states in Hausaland.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q12',
    courseId: 'ges112',
    question: 'Question 12\n\nWhich of these states was part of the Hausa Bakwai?',
    options: [
      'Ife',
      'Katsina',
      'Calabar',
      'Aba'
    ],
    correctAnswer: 1,
    explanation: 'Katsina is one of the authentic original seven Hausa Bakwai states, historically serving as a major center of trans-Saharan trade and Islamic learning.',
    topic: 'Unit 1: Hausa City-States',
    chapter: 'Unit One: Nigerian History, Culture and Art up to 1800',
    hint: 'Famous northern trading and scholarly city-state.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q13',
    courseId: 'ges112',
    question: 'Question 13\n\nThe introduction of Islam into the Hausa states was mainly through—',
    options: [
      'Military conquest',
      'Missionaries',
      'Trade and scholarship',
      'Colonization'
    ],
    correctAnswer: 2,
    explanation: 'Islam penetrated Hausaland from the 11th to 14th centuries primarily via peaceful trans-Saharan trade routes, Muslim merchant caravans, and itinerant Wangarawa scholars.',
    topic: 'Unit 1: Spread of Islam in Northern Nigeria',
    chapter: 'Unit One: Nigerian History, Culture and Art up to 1800',
    hint: 'Peaceful commercial routes and scholarly migration across the Sahara.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q14',
    courseId: 'ges112',
    question: 'Question 14\n\nWhich minority group is known for its unique bronze art similar to that of Benin and Ife?',
    options: [
      'Nupe',
      'Ibibio',
      'Jukun',
      'TIV'
    ],
    correctAnswer: 0,
    explanation: 'The Nupe kingdom (Tsoede tradition along the Niger river) is renowned for the famous Tada bronze sculptures, which share exquisite metallurgical mastery with Ife and Benin royal art.',
    topic: 'Unit 1: Minority Ethnic Cultures and Bronze Art',
    chapter: 'Unit One: Nigerian History, Culture and Art up to 1800',
    hint: 'The kingdom along the Niger associated with the Tsoede bronze figures.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q15',
    courseId: 'ges112',
    question: 'Question 15\n\nWhich of these was an ancient kingdom located in what is now Cross River State?',
    options: [
      'Nri',
      'Kanem',
      'Kwararafa',
      'Akwa Akpa (Old Calabar)'
    ],
    correctAnswer: 3,
    explanation: 'Akwa Akpa (known to European traders as Old Calabar) was an ancient Efik city-state and trading kingdom situated along the Cross River.',
    topic: 'Unit 1: Pre-colonial Kingdoms in the South-South',
    chapter: 'Unit One: Nigerian History, Culture and Art up to 1800',
    hint: 'Efik coastal state historically called Old Calabar.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q16',
    courseId: 'ges112',
    question: 'Question 16\n\nWhich of the following ancient Nigerian civilizations is most associated with bronze casting?',
    options: [
      'Nok',
      'Ife',
      'Tiv',
      'Ibadan'
    ],
    correctAnswer: 1,
    explanation: 'Ancient Ile-Ife is internationally celebrated for its naturalistic lost-wax bronze and brass cast portrait heads created between the 12th and 14th centuries.',
    topic: 'Unit 1: Ancient Nigerian Art Traditions',
    chapter: 'Unit One: Nigerian History, Culture and Art up to 1800',
    hint: 'Famous for lifelike lost-wax bronze heads discovered by Leo Frobenius.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q17',
    courseId: 'ges112',
    question: 'Question 17\n\nThe title "Oba" is commonly used by rulers in which region of Nigeria?',
    options: [
      'North',
      'East',
      'South-West',
      'South-South'
    ],
    correctAnswer: 2,
    explanation: 'The royal title "Oba" designates crowned monarchs across South-Western Nigeria among Yoruba kingdoms (and also the Oba of Benin in the South-South). In standard classifications, it is predominantly associated with the South-West.',
    topic: 'Unit 1: Traditional Rulers and Royal Titles',
    chapter: 'Unit One: Nigerian History, Culture and Art up to 1800',
    hint: 'Primary geopolitical zone for Yoruba crowned monarchs.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q18',
    courseId: 'ges112',
    question: 'Question 18\n\nThe Igbo-Ukwu archaeological site is important because it reveals—',
    options: [
      'Evidence of iron smelting',
      'Early Islamic influence',
      'A complex metalworking culture',
      'Slave trading posts'
    ],
    correctAnswer: 2,
    explanation: 'Excavations by Thurstan Shaw at Igbo-Ukwu revealed sophisticated 9th-century bronze castings using the lost-wax method, demonstrating an advanced, indigenous metallurgical culture.',
    topic: 'Unit 1: Igbo-Ukwu Civilization',
    chapter: 'Unit One: Nigerian History, Culture and Art up to 1800',
    hint: '9th century bronze vessels and elaborate metallurgical technology.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q19',
    courseId: 'ges112',
    question: 'Question 19\n\nThe Bini Kingdom is best known for—',
    options: [
      'Rock paintings',
      'Large-scale agriculture',
      'Bronze sculptures and royal court art',
      'Islamic scholarship'
    ],
    correctAnswer: 2,
    explanation: 'The Kingdom of Benin (Bini) produced worldwide acclaimed royal court art, intricate bronze and brass plaques, commemorative heads, and ivory carvings.',
    topic: 'Unit 1: Benin Kingdom and Court Art',
    chapter: 'Unit One: Nigerian History, Culture and Art up to 1800',
    hint: 'Celebrated worldwide for royal court brass/bronze casting and plaques.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q20',
    courseId: 'ges112',
    question: 'Question 20\n\nWhich of these Nigerian ethnic groups practiced a confederal form of government before 1800?',
    options: [
      'Yoruba',
      'Hausa',
      'Igbo',
      'Nupe'
    ],
    correctAnswer: 2,
    explanation: 'Pre-colonial Igbo communities operated as autonomous republican villages linked together in loose village confederations and clan alliances without a single autocratic monarch.',
    topic: 'Unit 1: Pre-colonial Governance Systems',
    chapter: 'Unit One: Nigerian History, Culture and Art up to 1800',
    hint: 'Segmentary and confederal village networks.',
    source: 'Workbook'
  },

  // ================= UNIT TWO =================
  // Nigeria under colonial rule (the advent of colonial rule and colonial administration of Nigeria)
  {
    id: 'ges112_q21',
    courseId: 'ges112',
    question: 'Question 21\n\nWhich European country first established formal colonial rule in Nigeria?',
    options: [
      'Germany',
      'Portugal',
      'Britain',
      'France'
    ],
    correctAnswer: 2,
    explanation: 'Great Britain established formal colonial hegemony over Nigeria beginning with the reduction and annexation of Lagos as a Crown Colony in 1861.',
    topic: 'Unit 2: Advent of Colonial Rule',
    chapter: 'Unit Two: Nigeria under colonial rule',
    hint: 'The British imperial empire.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q22',
    courseId: 'ges112',
    question: 'Question 22\n\nThe annexation of Lagos in 1861 was done through which agreement?',
    options: [
      'Treaty of Egun',
      'Treaty of Berlin',
      'Treaty of Lagos',
      'Treaty of Cession'
    ],
    correctAnswer: 3,
    explanation: 'King Dosunmu of Lagos signed the Treaty of Cession on August 6, 1861, ceding the port and island of Lagos to the British Crown.',
    topic: 'Unit 2: Annexation of Lagos',
    chapter: 'Unit Two: Nigeria under colonial rule',
    hint: 'The document signed by Oba Dosunmu in August 1861.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q23',
    courseId: 'ges112',
    question: 'Question 23\n\nWhich organization was responsible for governing southern Nigeria before formal colonial administration?',
    options: [
      'British Colonial Company',
      'Royal Niger Company',
      'United African Company',
      'British Trading Council'
    ],
    correctAnswer: 1,
    explanation: 'The Royal Niger Company (granted a royal charter in 1886) exercised commercial and administrative control along the Niger and Benue waterways before its charter was revoked in 1899.',
    topic: 'Unit 2: Chartered Companies in Colonial Administration',
    chapter: 'Unit Two: Nigeria under colonial rule',
    hint: 'Chartered British trading company granted administrative power in 1886.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q24',
    courseId: 'ges112',
    question: 'Question 24\n\nThe Royal Niger Company was headed by:',
    options: [
      'Lord Lugard',
      'Sir George Goldie',
      'Hugh Clifford',
      'Macpherson'
    ],
    correctAnswer: 1,
    explanation: 'Sir George Dashwood Taubman Goldie was the British administrator and merchant who founded the National African Company and headed the Royal Niger Company.',
    topic: 'Unit 2: Key Colonial Figures',
    chapter: 'Unit Two: Nigeria under colonial rule',
    hint: 'The founder and head of the Royal Niger Company.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q25',
    courseId: 'ges112',
    question: 'Question 25\n\nThe Berlin Conference of 1884-1885 was important because it:',
    options: [
      'Gave Nigeria independence',
      'Divided Africa among European powers',
      'United African states',
      'Introduced colonial taxes'
    ],
    correctAnswer: 1,
    explanation: 'The Berlin West Africa Conference (1884-1885) established the doctrine of effective occupation and partitioned the African continent among European imperialist powers.',
    topic: 'Unit 2: Scramble for Africa & Berlin Conference',
    chapter: 'Unit Two: Nigeria under colonial rule',
    hint: 'The European partition and scramble for the African continent.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q26',
    courseId: 'ges112',
    question: 'Question 26\n\nBritish conquest of Northern Nigeria was completed by:',
    options: [
      '1890',
      '1900',
      '1903',
      '1914'
    ],
    correctAnswer: 2,
    explanation: 'The British military pacification of Northern Nigeria was finalized in 1903 following the capture of Kano and the defeat of Sultan Attahiru of the Sokoto Caliphate.',
    topic: 'Unit 2: Colonial Conquest of Northern Nigeria',
    chapter: 'Unit Two: Nigeria under colonial rule',
    hint: 'The year Sokoto and Kano fell to British forces.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q27',
    courseId: 'ges112',
    question: 'Question 27\n\nThe amalgamation of the Northern and Southern Protectorates of Nigeria took place in:',
    options: [
      '1906',
      '1914',
      '1922',
      '1931'
    ],
    correctAnswer: 1,
    explanation: 'On January 1, 1914, Lord Frederick Lugard merged the Northern Nigeria Protectorate and Southern Nigeria Protectorate into a single colonial unit.',
    topic: 'Unit 2: The 1914 Amalgamation',
    chapter: 'Unit Two: Nigeria under colonial rule',
    hint: 'The landmark year Nigeria was created as a unified geographic entity.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q28',
    courseId: 'ges112',
    question: 'Question 28\n\nThe main reason for the amalgamation of Nigeria in 1914 was to:',
    options: [
      'Give independence',
      'Increase British settlers',
      'Ensure administrative efficiency',
      'Promote democracy'
    ],
    correctAnswer: 2,
    explanation: 'Amalgamation was primarily driven by economic and administrative convenience—specifically using the customs revenue surplus of the South to subsidize the budget deficits of the North.',
    topic: 'Unit 2: Reasons for Amalgamation',
    chapter: 'Unit Two: Nigeria under colonial rule',
    hint: 'Financial and administrative convenience for British imperial rule.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q29',
    courseId: 'ges112',
    question: 'Question 29\n\nThe person who amalgamated Nigeria in 1914 was:',
    options: [
      'Hugh Clifford',
      'Sir George Goldie',
      'Lord Lugard',
      'Macpherson'
    ],
    correctAnswer: 2,
    explanation: 'Sir (later Lord) Frederick Lugard was appointed Governor-General tasked with implementing the amalgamation of Nigeria in 1914.',
    topic: 'Unit 2: Colonial Governors',
    chapter: 'Unit Two: Nigeria under colonial rule',
    hint: 'The first Governor-General of unified colonial Nigeria.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q30',
    courseId: 'ges112',
    question: 'Question 30\n\nThe first capital of colonial Nigeria was:',
    options: [
      'Calabar',
      'Lagos',
      'Kaduna',
      'Lokoja'
    ],
    correctAnswer: 0,
    explanation: 'Calabar served as the first administrative capital of the Oil Rivers / Niger Coast Protectorate and Southern Nigeria before Lagos became the unified federal capital.',
    topic: 'Unit 2: Colonial Capitals',
    chapter: 'Unit Two: Nigeria under colonial rule',
    hint: 'Historic coastal city that was early capital of the Southern Protectorate.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q31',
    courseId: 'ges112',
    question: 'Question 31\n\nThe system of administration introduced by Lord Lugard was known as:',
    options: [
      'Direct rule',
      'Indirect rule',
      'Military rule',
      'Traditional rule'
    ],
    correctAnswer: 1,
    explanation: 'Indirect Rule was the colonial administrative system where the British ruled indigenous populations through their existing traditional rulers and institutions (Emirs, Obas, Chiefs).',
    topic: 'Unit 2: The Indirect Rule System',
    chapter: 'Unit Two: Nigeria under colonial rule',
    hint: 'Governing the colonized population through local traditional rulers.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q32',
    courseId: 'ges112',
    question: 'Question 32\n\nWhich part of Nigeria most effectively accepted indirect rule?',
    options: [
      'Western Nigeria',
      'Eastern Nigeria',
      'Northern Nigeria',
      'Lagos'
    ],
    correctAnswer: 2,
    explanation: 'Northern Nigeria most effectively accommodated indirect rule because of its highly centralized, hierarchical feudal Emirate system with established taxation and judicial courts.',
    topic: 'Unit 2: Application of Indirect Rule',
    chapter: 'Unit Two: Nigeria under colonial rule',
    hint: 'The region with pre-existing centralized Islamic Emirate structures.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q33',
    courseId: 'ges112',
    question: 'Question 33\n\nA major challenge to indirect rule in Eastern Nigeria was:',
    options: [
      'Existence of powerful emirs',
      'Lack of centralized authority',
      'Support for colonialism',
      'Too many Europeans'
    ],
    correctAnswer: 1,
    explanation: 'In Eastern Nigeria, the acephalous (decentralized) structure of Igbo societies lacked kings, leading to widespread resistance when the British imposed artificial "Warrant Chiefs".',
    topic: 'Unit 2: Failure of Indirect Rule in Eastern Nigeria',
    chapter: 'Unit Two: Nigeria under colonial rule',
    hint: 'The absence of centralized monarchs or autocrats.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q34',
    courseId: 'ges112',
    question: 'Question 34\n\nUnder colonial rule, the highest British official in Nigeria was the:',
    options: [
      'High Commissioner',
      'Governor-General',
      'Resident',
      'District Officer'
    ],
    correctAnswer: 1,
    explanation: 'The Governor-General (later Governor) was the supreme representative of the British monarch and head of the colonial executive in Nigeria.',
    topic: 'Unit 2: Colonial Administrative Hierarchy',
    chapter: 'Unit Two: Nigeria under colonial rule',
    hint: 'Supreme head representing the Crown.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q35',
    courseId: 'ges112',
    question: 'Question 35\n\nThe British used traditional rulers in governance primarily to:',
    options: [
      'Educate the masses',
      'Train British administrators',
      'Reduce administrative costs',
      'Enforce independence'
    ],
    correctAnswer: 2,
    explanation: 'Using traditional rulers saved Britain enormous financial costs and manpower shortages, as a handful of British officials could govern millions of subjects cheaply.',
    topic: 'Unit 2: Motives for Indirect Rule',
    chapter: 'Unit Two: Nigeria under colonial rule',
    hint: 'Overcoming shortages of British personnel and cutting governance expenses.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q36',
    courseId: 'ges112',
    question: 'Question 36\n\nWhich of these was a feature of colonial rule in Nigeria?',
    options: [
      'Sovereign independence',
      'Exploitation of resources',
      'Equal political representation',
      'True federalism'
    ],
    correctAnswer: 1,
    explanation: 'Colonial economic policy focused on the extraction and exploitation of agricultural produce and mineral raw materials to supply British metropolitan factories.',
    topic: 'Unit 2: Characteristics of Colonial Rule',
    chapter: 'Unit Two: Nigeria under colonial rule',
    hint: 'Economic extraction of cash crops and mineral wealth.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q37',
    courseId: 'ges112',
    question: 'Question 37\n\nThe first Nigerian constitution under colonial rule was the:',
    options: [
      'Clifford Constitution',
      'Richards Constitution',
      'Macpherson Constitution',
      'Lyttleton Constitution'
    ],
    correctAnswer: 0,
    explanation: 'The Clifford Constitution of 1922 was the first formal colonial constitution for Nigeria, replacing the 1914 Nigerian Council.',
    topic: 'Unit 2: Constitutional Development',
    chapter: 'Unit Two: Nigeria under colonial rule',
    hint: 'The 1922 constitution named after Governor Hugh Clifford.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q38',
    courseId: 'ges112',
    question: 'Question 38\n\nThe Clifford Constitution was introduced in:',
    options: [
      '1914',
      '1922',
      '1946',
      '1951'
    ],
    correctAnswer: 1,
    explanation: 'The Clifford Constitution was enacted in 1922 by Governor Sir Hugh Clifford.',
    topic: 'Unit 2: Clifford Constitution',
    chapter: 'Unit Two: Nigeria under colonial rule',
    hint: 'The landmark year 1922.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q39',
    courseId: 'ges112',
    question: 'Question 39\n\nWhich constitution introduced regionalism in Nigeria?',
    options: [
      'Clifford Constitution',
      'Richards Constitution',
      'Macpherson Constitution',
      'Lyttleton Constitution'
    ],
    correctAnswer: 1,
    explanation: 'The Richards Constitution of 1946 formally divided Nigeria into three administrative regions: Northern, Western, and Eastern Regions.',
    topic: 'Unit 2: Regionalism in Constitutional History',
    chapter: 'Unit Two: Nigeria under colonial rule',
    hint: 'The 1946 constitution that created three regional councils.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q40',
    courseId: 'ges112',
    question: 'Question 40\n\nThe Legislative Council introduced under colonial rule primarily served the:',
    options: [
      'Northern protectorate',
      'Entire country equally',
      'Colony and Protectorate of Southern Nigeria',
      'Traditional rulers only'
    ],
    correctAnswer: 2,
    explanation: 'Under the 1922 Clifford Constitution, the Legislative Council had jurisdiction only over the Colony of Lagos and the Southern Protectorate; the North was excluded and governed by proclamation.',
    topic: 'Unit 2: Legislative Councils under Colonialism',
    chapter: 'Unit Two: Nigeria under colonial rule',
    hint: 'Limited jurisdiction excluding the Northern Protectorate.',
    source: 'Workbook'
  },

  // ================= UNIT THREE =================
  // Evolution of Nigeria as a Political Unit (Amalgamation of Nigeria (1914), formation of political parties, nationalist movement, and the struggle for independence)
  {
    id: 'ges112_q41',
    courseId: 'ges112',
    question: 'Question 41\n\nWho was the Governor-General that carried out the amalgamation of Northern and Southern Nigeria in 1914?',
    options: [
      'Lord Lugard',
      'Sir Arthur Richards',
      'Sir Hugh Clifford',
      'Harold Macmillan'
    ],
    correctAnswer: 0,
    explanation: 'Sir Frederick Lugard was the colonial Governor-General who executed the 1914 amalgamation of Nigeria.',
    topic: 'Unit 3: 1914 Amalgamation',
    chapter: 'Unit Three: Evolution of Nigeria as a Political Unit',
    hint: 'The architect of the 1914 amalgamation.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q42',
    courseId: 'ges112',
    question: 'Question 42\n\nWhat was the main reason for the amalgamation of Nigeria in 1914?',
    options: [
      'To promote religious unity',
      'To improve local industries',
      'To reduce administrative cost and improve efficiency',
      'To introduce democracy'
    ],
    correctAnswer: 2,
    explanation: 'The British amalgamated the territories to balance the colonial budget by using revenue from the prosperous South to subsidize the landlocked North.',
    topic: 'Unit 3: Reasons for Amalgamation',
    chapter: 'Unit Three: Evolution of Nigeria as a Political Unit',
    hint: 'Fiscal balance and administrative cost reduction.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q43',
    courseId: 'ges112',
    question: 'Question 43\n\nWhat system of administration did Lord Lugard introduce in Nigeria?',
    options: [
      'Parliamentary system',
      'Indirect Rule',
      'Federal system',
      'Direct Rule'
    ],
    correctAnswer: 1,
    explanation: 'Lord Lugard instituted the Indirect Rule system, relying on native authorities, customary laws, and traditional rulers.',
    topic: 'Unit 3: Colonial Administration',
    chapter: 'Unit Three: Evolution of Nigeria as a Political Unit',
    hint: 'Ruling through native authorities and traditional rulers.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q44',
    courseId: 'ges112',
    question: 'Question 44\n\nWhich of the following was the first political party in Nigeria?',
    options: [
      'Action Group (AG)',
      'Northern People\'s Congress (NPC)',
      'National Council of Nigeria and the Cameroons (NCNC)',
      'Nigerian National Democratic Party (NNDP)'
    ],
    correctAnswer: 3,
    explanation: 'The Nigerian National Democratic Party (NNDP), founded in 1923 by Herbert Macaulay, was Nigeria\'s first political party.',
    topic: 'Unit 3: First Nigerian Political Party',
    chapter: 'Unit Three: Evolution of Nigeria as a Political Unit',
    hint: 'Founded by Herbert Macaulay in 1923.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q45',
    courseId: 'ges112',
    question: 'Question 45\n\nWho founded the Nigerian National Democratic Party (NNDP)?',
    options: [
      'Nnamdi Azikiwe',
      'Herbert Macaulay',
      'Obafemi Awolowo',
      'Ahmadu Bello'
    ],
    correctAnswer: 1,
    explanation: 'Herbert Macaulay founded the NNDP in 1923 to contest seats in the newly created Legislative Council under the Clifford Constitution.',
    topic: 'Unit 3: Nationalist Leaders',
    chapter: 'Unit Three: Evolution of Nigeria as a Political Unit',
    hint: 'Known as the Father of Nigerian Nationalism.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q46',
    courseId: 'ges112',
    question: 'Question 46\n\nIn what year was the NNDP founded?',
    options: [
      '1923',
      '1944',
      '1951',
      '1960'
    ],
    correctAnswer: 0,
    explanation: 'The NNDP was formally established in 1923 following the introduction of the elective principle.',
    topic: 'Unit 3: Formation of Political Parties',
    chapter: 'Unit Three: Evolution of Nigeria as a Political Unit',
    hint: 'One year after the 1922 Clifford Constitution.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q47',
    courseId: 'ges112',
    question: 'Question 47\n\nWhich of these personalities was known as the "Father of Nigerian Nationalism"?',
    options: [
      'Nnamdi Azikiwe',
      'Ahmadu Bello',
      'Herbert Macaulay',
      'Tafawa Balewa'
    ],
    correctAnswer: 2,
    explanation: 'Herbert Samuel Heelas Macaulay is widely honored as the "Father of Nigerian Nationalism" for his pioneering anti-colonial agitation.',
    topic: 'Unit 3: Pioneers of Nigerian Nationalism',
    chapter: 'Unit Three: Evolution of Nigeria as a Political Unit',
    hint: 'Civil engineer and founder of the NNDP.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q48',
    courseId: 'ges112',
    question: 'Question 48\n\nThe Clifford Constitution of 1922 introduced what major political reform?',
    options: [
      'Federalism',
      'Adult suffrage',
      'Legislative Council with elected African representatives',
      'Self-government'
    ],
    correctAnswer: 2,
    explanation: 'The Clifford Constitution introduced the "elective principle", creating 4 elected seats (3 for Lagos, 1 for Calabar) in the Legislative Council.',
    topic: 'Unit 3: Elective Principle',
    chapter: 'Unit Three: Evolution of Nigeria as a Political Unit',
    hint: 'The introduction of elected African representatives for Lagos and Calabar.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q49',
    courseId: 'ges112',
    question: 'Question 49\n\nThe Zikist Movement was associated with which Nigerian nationalist?',
    options: [
      'Herbert Macaulay',
      'Nnamdi Azikiwe',
      'Obafemi Awolowo',
      'Tafawa Balewa'
    ],
    correctAnswer: 1,
    explanation: 'The radical, militant youth wing known as the Zikist Movement was formed in 1946 inspired by Dr. Nnamdi Azikiwe\'s nationalist philosophy.',
    topic: 'Unit 3: Radical Nationalist Movements',
    chapter: 'Unit Three: Evolution of Nigeria as a Political Unit',
    hint: 'Named after "Zik" (Nnamdi Azikiwe).',
    source: 'Workbook'
  },
  {
    id: 'ges112_q50',
    courseId: 'ges112',
    question: 'Question 50\n\nWhich political party was founded by Obafemi Awolowo?',
    options: [
      'NCNC',
      'NPC',
      'AG',
      'NNDP'
    ],
    correctAnswer: 2,
    explanation: 'Chief Obafemi Awolowo founded the Action Group (AG) in 1951 from the Yoruba cultural association Egbe Omo Oduduwa.',
    topic: 'Unit 3: Action Group',
    chapter: 'Unit Three: Evolution of Nigeria as a Political Unit',
    hint: 'The Action Group (AG).',
    source: 'Workbook'
  },
  {
    id: 'ges112_q51',
    courseId: 'ges112',
    question: 'Question 51\n\nWhich Nigerian nationalist was also the editor of the West African Pilot?',
    options: [
      'Nnamdi Azikiwe',
      'Ahmadu Bello',
      'Anthony Enahoro',
      'Ernest Ikoli'
    ],
    correctAnswer: 0,
    explanation: 'Dr. Nnamdi Azikiwe founded and edited the influential nationalist newspaper "West African Pilot" in 1937.',
    topic: 'Unit 3: Nationalist Press',
    chapter: 'Unit Three: Evolution of Nigeria as a Political Unit',
    hint: 'Dr. Nnamdi Azikiwe\'s legendary newspaper.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q52',
    courseId: 'ges112',
    question: 'Question 52\n\nThe NCNC was co-founded by Nnamdi Azikiwe and who else?',
    options: [
      'Obafemi Awolowo',
      'Tafawa Balewa',
      'Herbert Macaulay',
      'Ernest Ikoli'
    ],
    correctAnswer: 2,
    explanation: 'The National Council of Nigeria and the Cameroons (NCNC) was formed in 1944 with Herbert Macaulay as President and Nnamdi Azikiwe as General Secretary.',
    topic: 'Unit 3: Formation of NCNC',
    chapter: 'Unit Three: Evolution of Nigeria as a Political Unit',
    hint: 'Herbert Macaulay was its first President.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q53',
    courseId: 'ges112',
    question: 'Question 53\n\nWhen was Nigeria granted independence?',
    options: [
      'October 1, 1954',
      'October 1, 1960',
      'January 15, 1966',
      'May 29, 1999'
    ],
    correctAnswer: 1,
    explanation: 'Nigeria gained its sovereign independence from Great Britain on October 1, 1960.',
    topic: 'Unit 3: Independence Day',
    chapter: 'Unit Three: Evolution of Nigeria as a Political Unit',
    hint: 'October 1, 1960.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q54',
    courseId: 'ges112',
    question: 'Question 54\n\nWho was the first Prime Minister of independent Nigeria?',
    options: [
      'Nnamdi Azikiwe',
      'Tafawa Balewa',
      'Obafemi Awolowo',
      'Ahmadu Bello'
    ],
    correctAnswer: 1,
    explanation: 'Sir Abubakar Tafawa Balewa was independent Nigeria\'s first and only federal Prime Minister (Head of Government) from 1957 to 1966.',
    topic: 'Unit 3: First Republic Leadership',
    chapter: 'Unit Three: Evolution of Nigeria as a Political Unit',
    hint: 'Sir Abubakar Tafawa Balewa.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q55',
    courseId: 'ges112',
    question: 'Question 55\n\nWhich constitution introduced a federal system of government in Nigeria?',
    options: [
      'Clifford Constitution',
      'Macpherson Constitution',
      'Lyttleton Constitution',
      'Richards Constitution'
    ],
    correctAnswer: 2,
    explanation: 'The Lyttleton Constitution of 1954 formally established a true federal structure for Nigeria with autonomous regional governments.',
    topic: 'Unit 3: Introduction of Federalism',
    chapter: 'Unit Three: Evolution of Nigeria as a Political Unit',
    hint: 'The 1954 constitution.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q56',
    courseId: 'ges112',
    question: 'Question 56\n\nWhich of the following political parties was dominant in Northern Nigeria during the First Republic?',
    options: [
      'NCNC',
      'NPC',
      'AG',
      'NNDP'
    ],
    correctAnswer: 1,
    explanation: 'The Northern People\'s Congress (NPC), led by Sir Ahmadu Bello, was the dominant political party in Northern Nigeria.',
    topic: 'Unit 3: First Republic Parties',
    chapter: 'Unit Three: Evolution of Nigeria as a Political Unit',
    hint: 'Northern People\'s Congress.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q57',
    courseId: 'ges112',
    question: 'Question 57\n\nThe Richards Constitution of 1946 was important because it:',
    options: [
      'Introduced regional governments',
      'Granted Nigeria independence',
      'Introduced universal suffrage',
      'Abolished indirect rule'
    ],
    correctAnswer: 0,
    explanation: 'The Richards Constitution created Regional Houses of Assembly in the North, West, and East, establishing regional governance.',
    topic: 'Unit 3: Richards Constitution',
    chapter: 'Unit Three: Evolution of Nigeria as a Political Unit',
    hint: 'Establishment of regional councils/governments.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q58',
    courseId: 'ges112',
    question: 'Question 58\n\nWhich of these nationalists moved the motion for Nigeria\'s independence?',
    options: [
      'Obafemi Awolowo',
      'Nnamdi Azikiwe',
      'Herbert Macaulay',
      'Anthony Enahoro'
    ],
    correctAnswer: 3,
    explanation: 'Chief Anthony Enahoro moved the historic self-government motion in the House of Representatives in 1953 demanding independence in 1956.',
    topic: 'Unit 3: Self-Government Motion',
    chapter: 'Unit Three: Evolution of Nigeria as a Political Unit',
    hint: 'Chief Anthony Enahoro in 1953.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q59',
    courseId: 'ges112',
    question: 'Question 59\n\nIn which year was the Action Group (AG) formed?',
    options: [
      '1944',
      '1951',
      '1959',
      '1963'
    ],
    correctAnswer: 1,
    explanation: 'The Action Group was publicly inaugurated in Owo, Western Nigeria, in 1951.',
    topic: 'Unit 3: Formation of Action Group',
    chapter: 'Unit Three: Evolution of Nigeria as a Political Unit',
    hint: 'Formed in 1951 by Obafemi Awolowo.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q60',
    courseId: 'ges112',
    question: 'Question 60\n\nWhich of the following colonial policies united Nigeria under one administration?',
    options: [
      'Clifford Constitution',
      'Amalgamation of 1914',
      'Lyttleton Constitution',
      'Independence Constitution'
    ],
    correctAnswer: 1,
    explanation: 'The 1914 Amalgamation joined the previously distinct protectorates of Northern and Southern Nigeria into one country under a unified administration.',
    topic: 'Unit 3: Evolution of Nigeria',
    chapter: 'Unit Three: Evolution of Nigeria as a Political Unit',
    hint: 'The historic 1914 unification.',
    source: 'Workbook'
  },

  // ================= UNIT FOUR =================
  // Nigeria and the Challenges of Nation Building (military intervention in Nigerian politics and the Nigerian Civil War)
  {
    id: 'ges112_q61',
    courseId: 'ges112',
    question: 'Question 61\n\nWhen did the first military coup in Nigeria take place?',
    options: [
      '1960',
      '1963',
      '1966',
      '1975'
    ],
    correctAnswer: 2,
    explanation: 'Nigeria\'s first military coup occurred on January 15, 1966, led by Major Chukwuma Kaduna Nzeogwu.',
    topic: 'Unit 4: First Military Coup',
    chapter: 'Unit Four: Nigeria and the Challenges of Nation Building',
    hint: 'January 15, 1966.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q62',
    courseId: 'ges112',
    question: 'Question 62\n\nWho was Nigeria\'s first military Head of State?',
    options: [
      'Yakubu Gowon',
      'Chukwuemeka Ojukwu',
      'Murtala Mohammed',
      'Aguiyi Ironsi'
    ],
    correctAnswer: 3,
    explanation: 'Major General Johnson Thomas Umunnakwe Aguiyi-Ironsi became Nigeria\'s first military Head of State on January 16, 1966.',
    topic: 'Unit 4: Military Heads of State',
    chapter: 'Unit Four: Nigeria and the Challenges of Nation Building',
    hint: 'Major General J.T.U. Aguiyi-Ironsi.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q63',
    courseId: 'ges112',
    question: 'Question 63\n\nThe 1966 coup was primarily led by which ethnic group?',
    options: [
      'Yoruba',
      'Hausa',
      'Igbo',
      'Fulani'
    ],
    correctAnswer: 2,
    explanation: 'The January 15, 1966 coup was primarily executed by young military officers (the "Young Majors") of predominantly Igbo origin.',
    topic: 'Unit 4: January 1966 Coup',
    chapter: 'Unit Four: Nigeria and the Challenges of Nation Building',
    hint: 'The ethnicity of most of the young plotting majors.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q64',
    courseId: 'ges112',
    question: 'Question 64\n\nWhich of the following is a consequence of military rule in Nigeria?',
    options: [
      'Frequent elections',
      'Stable democracy',
      'Suppression of civil liberties',
      'Independent judiciary'
    ],
    correctAnswer: 2,
    explanation: 'Military regimes in Nigeria were characterized by rule by decrees, suspension of constitutional rights, detention without trial, and suppression of civil liberties.',
    topic: 'Unit 4: Effects of Military Rule',
    chapter: 'Unit Four: Nigeria and the Challenges of Nation Building',
    hint: 'Erosion of fundamental human rights and civil liberties.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q65',
    courseId: 'ges112',
    question: 'Question 65\n\nWho succeeded General Aguiyi Ironsi after the July 1966 counter-coup?',
    options: [
      'Olusegun Obasanjo',
      'Yakubu Gowon',
      'Murtala Mohammed',
      'Ibrahim Babangida'
    ],
    correctAnswer: 1,
    explanation: 'Following the July 29, 1966 counter-coup, Lieutenant Colonel (later General) Yakubu Gowon assumed power as Head of State.',
    topic: 'Unit 4: July 1966 Counter-Coup',
    chapter: 'Unit Four: Nigeria and the Challenges of Nation Building',
    hint: 'Lt. Col. Yakubu Gowon.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q66',
    courseId: 'ges112',
    question: 'Question 66\n\nWhich military regime created the most states in Nigeria?',
    options: [
      'General Babangida',
      'General Abacha',
      'General Gowon',
      'General Murtala Mohammed'
    ],
    correctAnswer: 0,
    explanation: 'General Ibrahim Babangida created 11 states in total (2 states in 1987: Katsina and Akwa Ibom; 9 states in 1991), the highest by any single regime.',
    topic: 'Unit 4: State Creation in Nigeria',
    chapter: 'Unit Four: Nigeria and the Challenges of Nation Building',
    hint: 'Created 2 states in 1987 and 9 states in 1991.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q67',
    courseId: 'ges112',
    question: 'Question 67\n\nOne major reason for military intervention in Nigerian politics was:',
    options: [
      'Academic excellence',
      'Political instability and corruption',
      'Religious tolerance',
      'Economic prosperity'
    ],
    correctAnswer: 1,
    explanation: 'Military coups were justified by mutineers on grounds of rampant political corruption, election rigging, ethnic rivalry, and national political crises.',
    topic: 'Unit 4: Causes of Military Intervention',
    chapter: 'Unit Four: Nigeria and the Challenges of Nation Building',
    hint: 'Political crisis, electoral fraud, and widespread corruption.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q68',
    courseId: 'ges112',
    question: 'Question 68\n\nWhat year did the military hand over power to a civilian government in Nigeria for the second time?',
    options: [
      '1979',
      '1999',
      '1983',
      '1993'
    ],
    correctAnswer: 1,
    explanation: 'The military handed over power for the second time on May 29, 1999, ushering in the Fourth Republic (the first handover was in 1979 by Obasanjo to Shagari).',
    topic: 'Unit 4: Transition to Civilian Rule',
    chapter: 'Unit Four: Nigeria and the Challenges of Nation Building',
    hint: 'The start of Nigeria\'s current Fourth Republic in 1999.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q69',
    courseId: 'ges112',
    question: 'Question 69\n\nWhich of the following is NOT a feature of military government?',
    options: [
      'Decrees and edicts',
      'Rule by force',
      'Separation of powers',
      'Suspension of the constitution'
    ],
    correctAnswer: 2,
    explanation: 'Military governments fuse executive and legislative powers into the supreme ruling military council, abolishing the constitutional separation of powers.',
    topic: 'Unit 4: Features of Military Government',
    chapter: 'Unit Four: Nigeria and the Challenges of Nation Building',
    hint: 'Separation of powers is absent under military autocracies.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q70',
    courseId: 'ges112',
    question: 'Question 70\n\nMilitary rule in Nigeria encouraged:',
    options: [
      'Multiparty democracy',
      'Federal character principle',
      'Centralized decision-making',
      'Transparency and accountability'
    ],
    correctAnswer: 2,
    explanation: 'The hierarchical command structure of the military led to extreme fiscal and political centralism (unitary federalism) in governance.',
    topic: 'Unit 4: Centralization under Military Rule',
    chapter: 'Unit Four: Nigeria and the Challenges of Nation Building',
    hint: 'Hierarchical, top-down unified command structure.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q71',
    courseId: 'ges112',
    question: 'Question 71\n\nWhat was the main cause of the Nigerian Civil War?',
    options: [
      'Religious crisis',
      'Secession of Biafra',
      'Foreign invasion',
      'Trade disputes'
    ],
    correctAnswer: 1,
    explanation: 'The declaration of the independent Republic of Biafra and secession of Eastern Nigeria led by Lt. Col. Ojukwu triggered the Nigerian Civil War.',
    topic: 'Unit 4: Causes of Nigerian Civil War',
    chapter: 'Unit Four: Nigeria and the Challenges of Nation Building',
    hint: 'The declaration and attempted secession of the Republic of Biafra.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q72',
    courseId: 'ges112',
    question: 'Question 72\n\nWho was the leader of Biafra during the Nigerian Civil War?',
    options: [
      'Nnamdi Azikiwe',
      'Emeka Anyaoku',
      'Odumegwu Ojukwu',
      'Chinua Achebe'
    ],
    correctAnswer: 2,
    explanation: 'Lieutenant Colonel Chukwuemeka Odumegwu Ojukwu served as the Head of State and military leader of the Republic of Biafra (1967–1970).',
    topic: 'Unit 4: Biafran Leadership',
    chapter: 'Unit Four: Nigeria and the Challenges of Nation Building',
    hint: 'Lt. Col. Chukwuemeka Odumegwu Ojukwu.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q73',
    courseId: 'ges112',
    question: 'Question 73\n\nThe Nigerian Civil War officially began in:',
    options: [
      'May 1966',
      'July 1966',
      'January 1967',
      'July 1967'
    ],
    correctAnswer: 3,
    explanation: 'Military hostilities began on July 6, 1967, when federal troops launched an assault on Gakem in northern Biafra.',
    topic: 'Unit 4: Outbreak of Civil War',
    chapter: 'Unit Four: Nigeria and the Challenges of Nation Building',
    hint: 'July 1967.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q74',
    courseId: 'ges112',
    question: 'Question 74\n\nWhich slogan was used by the Nigerian government during the civil war?',
    options: [
      '\"One Nigeria!\"',
      '\"Unity is Strength\"',
      '\"To keep Nigeria one is a task that must be done\"',
      '\"Federalism forever\"'
    ],
    correctAnswer: 2,
    explanation: 'The federal military government coined the famous war mobilization slogan: "To keep Nigeria one is a task that must be done" (matching Gowon\'s acronym).',
    topic: 'Unit 4: Civil War Propaganda and Slogans',
    chapter: 'Unit Four: Nigeria and the Challenges of Nation Building',
    hint: 'Famous federal slogan rhyming with GOWON.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q75',
    courseId: 'ges112',
    question: 'Question 75\n\nWhich country supported Biafra during the civil war?',
    options: [
      'Ghana',
      'United States',
      'France',
      'Soviet Union'
    ],
    correctAnswer: 2,
    explanation: 'France covertly supplied military aid, arms, and diplomatic backing to the breakaway Republic of Biafra.',
    topic: 'Unit 4: International Politics of Civil War',
    chapter: 'Unit Four: Nigeria and the Challenges of Nation Building',
    hint: 'Major European power that supported Biafra.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q76',
    courseId: 'ges112',
    question: 'Question 76\n\nOne major humanitarian crisis during the Nigerian Civil War was:',
    options: [
      'Flood disaster',
      'Famine in Biafra',
      'Earthquake in the East',
      'Oil spillage'
    ],
    correctAnswer: 1,
    explanation: 'The federal blockade of Biafra caused catastrophic malnutrition (kwashiorkor) and famine, leading to the deaths of an estimated 1 to 2 million civilians.',
    topic: 'Unit 4: Humanitarian Impact of Civil War',
    chapter: 'Unit Four: Nigeria and the Challenges of Nation Building',
    hint: 'Widespread starvation and kwashiorkor among children.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q77',
    courseId: 'ges112',
    question: 'Question 77\n\nThe Nigerian Civil War ended in:',
    options: [
      '1970',
      '1972',
      '1969',
      '1971'
    ],
    correctAnswer: 0,
    explanation: 'The civil war ended on January 15, 1970, when General Philip Effiong formally surrendered to federal authorities in Lagos.',
    topic: 'Unit 4: End of the Civil War',
    chapter: 'Unit Four: Nigeria and the Challenges of Nation Building',
    hint: 'January 1970.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q78',
    courseId: 'ges112',
    question: 'Question 78\n\nThe policy of \"No victor, no vanquished\" was declared by:',
    options: [
      'Olusegun Obasanjo',
      'Yakubu Gowon',
      'Aguiyi Ironsi',
      'Murtala Mohammed'
    ],
    correctAnswer: 1,
    explanation: 'General Yakubu Gowon declared the post-war reconciliation policy of "No victor, no vanquished" accompanied by the 3Rs (Reconciliation, Reconstruction, and Rehabilitation).',
    topic: 'Unit 4: Post-War Reconciliation',
    chapter: 'Unit Four: Nigeria and the Challenges of Nation Building',
    hint: 'General Yakubu Gowon\'s 1970 declaration.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q79',
    courseId: 'ges112',
    question: 'Question 79\n\nThe immediate cause of the civil war was:',
    options: [
      'Creation of more states',
      'Refusal to implement Aburi Accord',
      'Religious violence',
      'Boundary disputes'
    ],
    correctAnswer: 1,
    explanation: 'Disagreements over the interpretation and implementation of the Aburi Accord (reached in Ghana in January 1967) led directly to the declaration of Biafra and outbreak of war.',
    topic: 'Unit 4: The Aburi Accord',
    chapter: 'Unit Four: Nigeria and the Challenges of Nation Building',
    hint: 'The breakdown of the Ghana summit agreements between Gowon and Ojukwu.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q80',
    courseId: 'ges112',
    question: 'Question 80\n\nA major impact of the Nigerian Civil War was:',
    options: [
      'Total disintegration of Nigeria',
      'End of federalism',
      'Massive loss of lives and property',
      'Emergence of new political parties'
    ],
    correctAnswer: 2,
    explanation: 'The war resulted in immense destruction of infrastructure, economic disruption, and the loss of between one to two million lives.',
    topic: 'Unit 4: Consequences of Civil War',
    chapter: 'Unit Four: Nigeria and the Challenges of Nation Building',
    hint: 'Severe casualties, destruction, and economic devastation.',
    source: 'Workbook'
  },

  // ================= UNIT FIVE =================
  // Concept of trade and economics of self-reliance (indigenous trade and market system, indigenous apprenticeship system among Nigerian people, and the relationship between trade, skill acquisition, and self-reliance)
  {
    id: 'ges112_q81',
    courseId: 'ges112',
    question: 'Question 81\n\nWhat is the primary feature of indigenous trade in Nigeria?',
    options: [
      'Dependence on online payment systems',
      'Use of sophisticated retail chains',
      'Use of traditional market days and barter system',
      'Reliance on foreign exchange'
    ],
    correctAnswer: 2,
    explanation: 'Traditional Nigerian trade historically relied on cyclical market days (e.g., 4-day or 8-day market intervals) and barter systems or indigenous commodity currencies.',
    topic: 'Unit 5: Features of Indigenous Trade',
    chapter: 'Unit Five: Concept of trade and economics of self-reliance',
    hint: 'Periodic market intervals and barter / commodity exchange.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q82',
    courseId: 'ges112',
    question: 'Question 82\n\nWhich of the following best describes a traditional market in Nigeria?',
    options: [
      'Only operates during weekends',
      'Operates using modern supermarkets',
      'Is based on community gathering and periodic market days',
      'Requires international trade licenses'
    ],
    correctAnswer: 2,
    explanation: 'Traditional markets function as community meeting centers organized around structured periodic market day cycles.',
    topic: 'Unit 5: Traditional Market System',
    chapter: 'Unit Five: Concept of trade and economics of self-reliance',
    hint: 'Community gathering and rotational periodic market days.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q83',
    courseId: 'ges112',
    question: 'Question 83\n\nIn the pre-colonial Nigerian market system, trade was mainly conducted through:',
    options: [
      'E-commerce platforms',
      'Cryptocurrency',
      'Barter and later cowries',
      'Credit cards'
    ],
    correctAnswer: 2,
    explanation: 'Pre-colonial trade initially relied on silent trade/barter and subsequently adopted commodity currencies such as cowry shells, manillas, and brass rods.',
    topic: 'Unit 5: Pre-colonial Mediums of Exchange',
    chapter: 'Unit Five: Concept of trade and economics of self-reliance',
    hint: 'Barter exchange and cowry shells.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q84',
    courseId: 'ges112',
    question: 'Question 84\n\nWhich of these is a common indigenous unit of trade in traditional Nigerian markets?',
    options: [
      'Dollar',
      'Cartons',
      'Calabashes and baskets',
      'Pounds'
    ],
    correctAnswer: 2,
    explanation: 'Traditional volumetric and weight measurements in indigenous markets relied on crafted calabashes, woven baskets, cups, and bowls.',
    topic: 'Unit 5: Traditional Units of Measurement',
    chapter: 'Unit Five: Concept of trade and economics of self-reliance',
    hint: 'Locally crafted calabashes, baskets, and measures.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q85',
    courseId: 'ges112',
    question: 'Question 85\n\nOne key role of traditional Nigerian markets is to:',
    options: [
      'Promote foreign investments',
      'Serve as centers of cultural and social exchange',
      'Ban rural development',
      'Enforce tax payments'
    ],
    correctAnswer: 1,
    explanation: 'Beyond commercial transactions, traditional markets serve as vital centers of cultural interaction, dissemination of news, and social cohesion.',
    topic: 'Unit 5: Socio-Cultural Role of Markets',
    chapter: 'Unit Five: Concept of trade and economics of self-reliance',
    hint: 'Social integration and cultural exchange center.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q86',
    courseId: 'ges112',
    question: 'Question 86\n\nWhich ethnic group in Nigeria is especially known for its indigenous apprenticeship system in trade?',
    options: [
      'Fulani',
      'Yoruba',
      'Igbo',
      'Tiv'
    ],
    correctAnswer: 2,
    explanation: 'The Igbo ethnic group is globally renowned for their informal business apprenticeship framework commonly known as Igba Boi or Imu Ahia.',
    topic: 'Unit 5: Indigenous Apprenticeship Systems',
    chapter: 'Unit Five: Concept of trade and economics of self-reliance',
    hint: 'The Igba Boi / Imu Ahia business incubator model.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q87',
    courseId: 'ges112',
    question: 'Question 87\n\nThe Igbo apprenticeship system is best described as a:',
    options: [
      'Formal university education system',
      'System where youths are trained and later settled to start their own business',
      'Government employment scheme',
      'Pension plan'
    ],
    correctAnswer: 1,
    explanation: 'In the Igba Boi system, young men serve a master trader for an agreed number of years learning enterprise skills, after which the master provides capital ("settlement") to start an independent enterprise.',
    topic: 'Unit 5: Structure of Igba Boi',
    chapter: 'Unit Five: Concept of trade and economics of self-reliance',
    hint: 'A structured mentorship ending with capital settlement.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q88',
    courseId: 'ges112',
    question: 'Question 88\n\nWhat is the key benefit of the indigenous apprenticeship system?',
    options: [
      'It reduces family ties',
      'It promotes idleness',
      'It builds entrepreneurship and self-reliance',
      'It discourages business growth'
    ],
    correctAnswer: 2,
    explanation: 'The apprenticeship system fosters grassroots entrepreneurship, wealth creation, vocational independence, and self-reliance without reliance on government jobs.',
    topic: 'Unit 5: Benefits of Apprenticeship',
    chapter: 'Unit Five: Concept of trade and economics of self-reliance',
    hint: 'Grassroots wealth creation and self-reliance.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q89',
    courseId: 'ges112',
    question: 'Question 89\n\nIn the indigenous apprenticeship system, \"settlement\" means:',
    options: [
      'Sending the apprentice to jail',
      'Terminating the apprenticeship with punishment',
      'Giving the apprentice money or goods to start a business',
      'Returning the apprentice to the village'
    ],
    correctAnswer: 2,
    explanation: '"Settlement" is the formal graduation ritual where the master provides seed capital, rented storefront, or inventory goods to empower the apprentice to establish an independent enterprise.',
    topic: 'Unit 5: Settlement in Apprenticeship',
    chapter: 'Unit Five: Concept of trade and economics of self-reliance',
    hint: 'Provision of seed capital or inventory upon completing service.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q90',
    courseId: 'ges112',
    question: 'Question 90\n\nWhich of the following is NOT a characteristic of the indigenous apprenticeship system?',
    options: [
      'Knowledge transfer',
      'Skills acquisition',
      'Free distribution of goods',
      'Mentorship'
    ],
    correctAnswer: 2,
    explanation: 'The apprenticeship system is based on disciplined labor, experiential skill acquisition, and hands-on business mentorship—not unconditional or free handout of goods.',
    topic: 'Unit 5: Apprenticeship Characteristics',
    chapter: 'Unit Five: Concept of trade and economics of self-reliance',
    hint: 'Not a free distribution or charity handout.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q91',
    courseId: 'ges112',
    question: 'Question 91\n\nSkill acquisition is important in trade because it:',
    options: [
      'Reduces productivity',
      'Promotes laziness',
      'Equips individuals to be self-reliant',
      'Deters economic development'
    ],
    correctAnswer: 2,
    explanation: 'Acquiring practical and technical skills empowers individuals to create economic value, achieve financial independence, and generate livelihoods.',
    topic: 'Unit 5: Importance of Skill Acquisition',
    chapter: 'Unit Five: Concept of trade and economics of self-reliance',
    hint: 'Equipping individuals for self-reliance.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q92',
    courseId: 'ges112',
    question: 'Question 92\n\nWhich of the following best defines self-reliance?',
    options: [
      'Ability to depend on foreign goods',
      'Ability to live without producing anything',
      'Ability to meet one\'s needs through personal effort and local resources',
      'Dependence on government aid'
    ],
    correctAnswer: 2,
    explanation: 'Self-reliance is the capacity of an individual or nation to satisfy fundamental socio-economic needs through endogenous efforts and locally available resources.',
    topic: 'Unit 5: Concept of Self-Reliance',
    chapter: 'Unit Five: Concept of trade and economics of self-reliance',
    hint: 'Meeting needs via personal effort and internal resources.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q93',
    courseId: 'ges112',
    question: 'Question 93\n\nAn example of a self-reliant activity in Nigeria is:',
    options: [
      'Importing all food items',
      'Learning tailoring and opening a fashion shop',
      'Depending on monthly allowance',
      'Waiting for foreign investors'
    ],
    correctAnswer: 1,
    explanation: 'Acquiring a vocational skill like tailoring and establishing a profitable fashion enterprise is an exemplary demonstration of individual self-reliance.',
    topic: 'Unit 5: Practical Self-Reliance',
    chapter: 'Unit Five: Concept of trade and economics of self-reliance',
    hint: 'Vocational mastery leading to an enterprise.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q94',
    courseId: 'ges112',
    question: 'Question 94\n\nWhich sector mostly benefits from indigenous skill acquisition programs?',
    options: [
      'Oil and gas',
      'Fashion and crafts',
      'International banking',
      'Importation services'
    ],
    correctAnswer: 1,
    explanation: 'Indigenous vocational training directly enriches the cottage industries, local fashion, leatherworks, pottery, blacksmithing, and artisanal crafts.',
    topic: 'Unit 5: Sectors Impacted by Vocational Training',
    chapter: 'Unit Five: Concept of trade and economics of self-reliance',
    hint: 'Artisanal crafts, fashion design, and cottage manufacturing.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q95',
    courseId: 'ges112',
    question: 'Question 95\n\nThe relationship between trade and self-reliance is that trade:',
    options: [
      'Makes people dependent on others',
      'Encourages waste',
      'Provides a platform for people to exchange goods and services for livelihood',
      'Weakens local production'
    ],
    correctAnswer: 2,
    explanation: 'Trade allows producers and artisans to monetize their skills and outputs, creating sustainable livelihoods and reinforcing self-reliance.',
    topic: 'Unit 5: Trade and Self-Reliance Nexus',
    chapter: 'Unit Five: Concept of trade and economics of self-reliance',
    hint: 'Facilitating exchange of goods and services for sustainable livelihood.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q96',
    courseId: 'ges112',
    question: 'Question 96\n\nThe use of local materials and human resources for development defines:',
    options: [
      'Importation',
      'Indigenous production',
      'Globalization',
      'Digital marketing'
    ],
    correctAnswer: 1,
    explanation: 'Indigenous production refers to manufacturing goods and providing services utilizing locally sourced raw materials and domestic labor.',
    topic: 'Unit 5: Indigenous Production',
    chapter: 'Unit Five: Concept of trade and economics of self-reliance',
    hint: 'Domestic output using local inputs and human resources.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q97',
    courseId: 'ges112',
    question: 'Question 97\n\nOne way to promote indigenous trade is to:',
    options: [
      'Rely only on imported goods',
      'Devalue the local currency',
      'Support local producers and craftspeople',
      'Ban local markets'
    ],
    correctAnswer: 2,
    explanation: 'Supporting local artisans, patronizing domestic manufacturers, and improving market infrastructure directly fosters indigenous trade growth.',
    topic: 'Unit 5: Promoting Indigenous Trade',
    chapter: 'Unit Five: Concept of trade and economics of self-reliance',
    hint: 'Patronizing and supporting local producers.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q98',
    courseId: 'ges112',
    question: 'Question 98\n\nWhich of the following discourages self-reliance in a society?',
    options: [
      'Entrepreneurship education',
      'High dependence on imported goods',
      'Vocational training',
      'Local content development'
    ],
    correctAnswer: 1,
    explanation: 'Chronic dependency on foreign manufactured goods drains domestic reserves, stifles local innovation, and undermines economic self-reliance.',
    topic: 'Unit 5: Impediments to Self-Reliance',
    chapter: 'Unit Five: Concept of trade and economics of self-reliance',
    hint: 'Excessive reliance on foreign imported commodities.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q99',
    courseId: 'ges112',
    question: 'Question 99\n\nVocational and technical education promotes self-reliance by:',
    options: [
      'Making students dependent on others',
      'Providing practical skills for employment or business',
      'Focusing only on theory',
      'Discouraging creativity'
    ],
    correctAnswer: 1,
    explanation: 'Vocational training equips individuals with hands-on, marketable technical skills that enable direct self-employment and entrepreneurial ventures.',
    topic: 'Unit 5: Technical Education and Self-Reliance',
    chapter: 'Unit Five: Concept of trade and economics of self-reliance',
    hint: 'Providing actionable, practical vocational competence.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q100',
    courseId: 'ges112',
    question: 'Question 100\n\nIgba Boi also called *Imu Ahia* is a unique indigenous entrepreneurship model of —tribe in Nigeria',
    options: [
      'Igbo.',
      'Abakaliki Imu Ahia.',
      'Anambra Igba Boi.',
      'Ohafia Imu Ahia'
    ],
    correctAnswer: 0,
    explanation: 'Igba Boi (also known as Imu Ahia or Igba Odibo) is the distinctive indigenous business apprenticeship and venture incubator model of the Igbo people.',
    topic: 'Unit 5: Igba Boi / Imu Ahia System',
    chapter: 'Unit Five: Concept of trade and economics of self-reliance',
    hint: 'The pan-Igbo indigenous entrepreneurship model.',
    source: 'Workbook'
  },

  // ================= UNIT SIX =================
  // Social Justice and National Development (law, its definition, and classification)
  {
    id: 'ges112_q101',
    courseId: 'ges112',
    question: 'Question 101\n\nWhat does social justice primarily aim to promote in a society?',
    options: [
      'Personal wealth',
      'Equality and fairness',
      'Political rivalry',
      'Cultural dominance'
    ],
    correctAnswer: 1,
    explanation: 'Social justice aims to ensure equal rights, equitable distribution of resources, fair treatment, and equal opportunities for all members of society.',
    topic: 'Unit 6: Principles of Social Justice',
    chapter: 'Unit Six: Social Justice and National Development',
    hint: 'Fairness, equity, and impartiality in society.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q102',
    courseId: 'ges112',
    question: 'Question 102\n\nWhich of the following best describes social justice?',
    options: [
      'The enforcement of religious law',
      'Equal distribution of wealth and opportunities',
      'Political manipulation of resources',
      'Suppression of minority voices'
    ],
    correctAnswer: 1,
    explanation: 'Social justice is the fair and equitable distribution of societal wealth, opportunities, legal protections, and social privileges.',
    topic: 'Unit 6: Definition of Social Justice',
    chapter: 'Unit Six: Social Justice and National Development',
    hint: 'Equitable access to opportunities and national wealth.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q103',
    courseId: 'ges112',
    question: 'Question 103\n\nOne major objective of national development is:',
    options: [
      'Economic monopoly',
      'Social discrimination',
      'Improved standard of living',
      'Tribal favoritism'
    ],
    correctAnswer: 2,
    explanation: 'National development seeks to improve the overall quality of life, economic well-being, and standard of living for all citizens.',
    topic: 'Unit 6: Objectives of National Development',
    chapter: 'Unit Six: Social Justice and National Development',
    hint: 'Enhancing the socio-economic welfare and living conditions of the citizenry.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q104',
    courseId: 'ges112',
    question: 'Question 104\n\nSocial justice contributes to national development by:',
    options: [
      'Dividing society by class',
      'Encouraging inequality',
      'Promoting unity and stability',
      'Limiting civil rights'
    ],
    correctAnswer: 2,
    explanation: 'When citizens experience equity and fair treatment, it reduces grievance and conflict, thereby fostering national unity, stability, and growth.',
    topic: 'Unit 6: Social Justice and Development Nexus',
    chapter: 'Unit Six: Social Justice and National Development',
    hint: 'Fostering national cohesion, peace, and stability.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q105',
    courseId: 'ges112',
    question: 'Question 105\n\nWhich institution is responsible for ensuring social justice in Nigeria?',
    options: [
      'Political parties',
      'The judiciary',
      'The press',
      'Multinational companies'
    ],
    correctAnswer: 1,
    explanation: 'The Judiciary acts as the custodian of justice and guardian of the Constitution, enforcing rights and remedying injustices.',
    topic: 'Unit 6: Institutions of Social Justice',
    chapter: 'Unit Six: Social Justice and National Development',
    hint: 'The court system and judicial arm of government.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q106',
    courseId: 'ges112',
    question: 'Question 106\n\nWhich of the following is not a principle of social justice?',
    options: [
      'Equity',
      'Human rights',
      'Discrimination',
      'Participation'
    ],
    correctAnswer: 2,
    explanation: 'Discrimination is the antithesis of social justice; the core pillars are equity, access, participation, and human rights.',
    topic: 'Unit 6: Pillars of Social Justice',
    chapter: 'Unit Six: Social Justice and National Development',
    hint: 'An unfair and oppressive practice that opposes justice.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q107',
    courseId: 'ges112',
    question: 'Question 107\n\nA key indicator of national development is:',
    options: [
      'Increased population',
      'High illiteracy rate',
      'Technological advancement',
      'Political unrest'
    ],
    correctAnswer: 2,
    explanation: 'Technological advancement, along with robust infrastructure and high literacy rates, is a standard indicator of a developing and modernizing nation.',
    topic: 'Unit 6: Indicators of Development',
    chapter: 'Unit Six: Social Justice and National Development',
    hint: 'Scientific progress and technological modernization.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q108',
    courseId: 'ges112',
    question: 'Question 108\n\nWhich sector plays the most critical role in achieving national development?',
    options: [
      'The entertainment sector',
      'The informal sector',
      'The education sector',
      'The criminal sector'
    ],
    correctAnswer: 2,
    explanation: 'Education is the primary catalyst for human capital development, technological innovation, economic productivity, and civic enlightenment.',
    topic: 'Unit 6: Education and National Development',
    chapter: 'Unit Six: Social Justice and National Development',
    hint: 'Human capital development through formal learning.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q109',
    courseId: 'ges112',
    question: 'Question 109\n\nSocial justice ensures that every individual:',
    options: [
      'Gets rich',
      'Is treated fairly regardless of background',
      'Rules the nation',
      'Gains immunity from the law'
    ],
    correctAnswer: 1,
    explanation: 'Social justice guarantees non-discrimination and fair, equitable treatment for every citizen irrespective of ethnicity, gender, or social background.',
    topic: 'Unit 6: Fair Treatment and Equality',
    chapter: 'Unit Six: Social Justice and National Development',
    hint: 'Fair treatment across all demographic backgrounds.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q110',
    courseId: 'ges112',
    question: 'Question 110\n\nWhich of these promotes national development through fairness in resource allocation?',
    options: [
      'Nepotism',
      'Meritocracy',
      'Ethnocentrism',
      'Favoritism'
    ],
    correctAnswer: 1,
    explanation: 'Meritocracy rewards competence, hard work, and integrity, ensuring public resources and responsibilities are allocated fairly to the most capable.',
    topic: 'Unit 6: Meritocracy vs Nepotism',
    chapter: 'Unit Six: Social Justice and National Development',
    hint: 'Allocating opportunities based on ability and merit.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q111',
    courseId: 'ges112',
    question: 'Question 111\n\nWhat is the best definition of law?',
    options: [
      'Rules made by individuals',
      'The customs of a community',
      'A set of rules enforceable by courts',
      'Religious beliefs of a people'
    ],
    correctAnswer: 2,
    explanation: 'Law is defined jurisprudence-wise as a body of official rules and principles recognized and enforced by the state and judicial courts.',
    topic: 'Unit 6: Definition of Law',
    chapter: 'Unit Six: Social Justice and National Development',
    hint: 'Enforceable body of rules backed by state sanctions.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q112',
    courseId: 'ges112',
    question: 'Question 112\n\nWhich of the following is a characteristic of law?',
    options: [
      'Optional compliance',
      'Arbitrary judgment',
      'Enforceability',
      'Religious origin'
    ],
    correctAnswer: 2,
    explanation: 'A fundamental attribute of law is enforceability—it is backed by the sovereign authority of the state with coercive legal sanctions for disobedience.',
    topic: 'Unit 6: Characteristics of Law',
    chapter: 'Unit Six: Social Justice and National Development',
    hint: 'State backing with coercive sanctions.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q113',
    courseId: 'ges112',
    question: 'Question 113\n\nPublic law governs the relationship between:',
    options: [
      'Private individuals only',
      'Citizens and their families',
      'Individuals and the state',
      'Political parties'
    ],
    correctAnswer: 2,
    explanation: 'Public law (including Constitutional, Administrative, and Criminal law) regulates the relationship between individual citizens and the state/government.',
    topic: 'Unit 6: Public Law vs Private Law',
    chapter: 'Unit Six: Social Justice and National Development',
    hint: 'Governing the citizen-state relationship.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q114',
    courseId: 'ges112',
    question: 'Question 114\n\nAn example of criminal law is:',
    options: [
      'Divorce proceedings',
      'Will and inheritance',
      'Theft and assault',
      'Property dispute'
    ],
    correctAnswer: 2,
    explanation: 'Theft, murder, and assault are crimes against public peace and safety, prosecuted under the Criminal Code or Penal Code.',
    topic: 'Unit 6: Criminal Law Examples',
    chapter: 'Unit Six: Social Justice and National Development',
    hint: 'Offenses against the public state like theft and violence.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q115',
    courseId: 'ges112',
    question: 'Question 115\n\nCivil law deals with:',
    options: [
      'Military operations',
      'Crimes and punishments',
      'Disputes between individuals',
      'Government elections'
    ],
    correctAnswer: 2,
    explanation: 'Civil law regulates private rights and remedies in disputes between individuals or corporate entities (e.g., contracts, torts, property).',
    topic: 'Unit 6: Scope of Civil Law',
    chapter: 'Unit Six: Social Justice and National Development',
    hint: 'Private disputes, contracts, and tort claims between citizens.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q116',
    courseId: 'ges112',
    question: 'Question 116\n\nThe law that deals with the organization of government and its functions is:',
    options: [
      'Customary law',
      'Constitutional law',
      'Tort law',
      'Criminal law'
    ],
    correctAnswer: 1,
    explanation: 'Constitutional law sets out the fundamental framework, powers, and operational limits of the organs of government (Executive, Legislature, Judiciary).',
    topic: 'Unit 6: Constitutional Law',
    chapter: 'Unit Six: Social Justice and National Development',
    hint: 'The supreme organic law defining the organs of state power.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q117',
    courseId: 'ges112',
    question: 'Question 117\n\nCustomary law is derived from:',
    options: [
      'The constitution',
      'The president',
      'Local traditions and customs',
      'International treaties'
    ],
    correctAnswer: 2,
    explanation: 'Customary law originates from the established norms, long-standing practices, and traditions accepted by an indigenous community as binding.',
    topic: 'Unit 6: Sources of Customary Law',
    chapter: 'Unit Six: Social Justice and National Development',
    hint: 'Long-standing traditional customs of ethnic communities.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q118',
    courseId: 'ges112',
    question: 'Question 118\n\nWhich of the following is a source of Nigerian law?',
    options: [
      'The media',
      'Public opinion',
      'Judicial precedent',
      'Religious belief alone'
    ],
    correctAnswer: 2,
    explanation: 'Judicial precedents (case law established by superior courts under the doctrine of stare decisis) constitute a formal source of Nigerian law.',
    topic: 'Unit 6: Sources of Nigerian Law',
    chapter: 'Unit Six: Social Justice and National Development',
    hint: 'Past rulings of superior courts (Stare Decisis).',
    source: 'Workbook'
  },
  {
    id: 'ges112_q119',
    courseId: 'ges112',
    question: 'Question 119\n\nLaw can be classified into how many broad categories?',
    options: [
      'One',
      'Two',
      'Three',
      'Five'
    ],
    correctAnswer: 1,
    explanation: 'In general legal jurisprudence, law is primarily bifurcated into two main overarching categories: Public Law and Private Law (or Criminal Law and Civil Law).',
    topic: 'Unit 6: Classification of Law',
    chapter: 'Unit Six: Social Justice and National Development',
    hint: 'Two broad divisions: Public vs Private (or Civil vs Criminal).',
    source: 'Workbook'
  },
  {
    id: 'ges112_q120',
    courseId: 'ges112',
    question: 'Question 120\n\nThe primary aim of law in any society is to:',
    options: [
      'Promote dictatorship',
      'Maintain order and justice',
      'Encourage disobedience',
      'Empower criminals'
    ],
    correctAnswer: 1,
    explanation: 'The foundational purpose of law is the preservation of social peace, maintenance of public order, and dispensation of justice.',
    topic: 'Unit 6: Purpose and Function of Law',
    chapter: 'Unit Six: Social Justice and National Development',
    hint: 'Preserving public order and upholding societal justice.',
    source: 'Workbook'
  },

  // ================= UNIT SEVEN =================
  // Judiciary and Fundamental Rights
  {
    id: 'ges112_q121',
    courseId: 'ges112',
    question: 'Question 121\n\nWhich arm of government is responsible for interpreting the law?',
    options: [
      'Executive',
      'Legislature',
      'Judiciary',
      'Police'
    ],
    correctAnswer: 2,
    explanation: 'The Judiciary is the constitutional arm of government vested with the judicial power to interpret laws and adjudicate disputes.',
    topic: 'Unit 7: Arms of Government',
    chapter: 'Unit Seven: Judiciary and Fundamental Rights',
    hint: 'The court system and judges.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q122',
    courseId: 'ges112',
    question: 'Question 122\n\nThe fundamental human rights of citizens are enshrined in the:',
    options: [
      'Criminal Code',
      'Constitution',
      'National Assembly Rules',
      'Penal Code'
    ],
    correctAnswer: 1,
    explanation: 'Fundamental human rights in Nigeria are codified in Chapter IV of the 1999 Constitution of the Federal Republic of Nigeria.',
    topic: 'Unit 7: Constitutional Rights',
    chapter: 'Unit Seven: Judiciary and Fundamental Rights',
    hint: 'Chapter IV of the Constitution.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q123',
    courseId: 'ges112',
    question: 'Question 123\n\nThe highest court in Nigeria is the:',
    options: [
      'Federal High Court',
      'Court of Appeal',
      'Supreme Court',
      'National Industrial Court'
    ],
    correctAnswer: 2,
    explanation: 'The Supreme Court of Nigeria is the apex court in the nation\'s judicial hierarchy whose judgments are final and binding.',
    topic: 'Unit 7: Judicial Hierarchy',
    chapter: 'Unit Seven: Judiciary and Fundamental Rights',
    hint: 'The apex court in Abuja.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q124',
    courseId: 'ges112',
    question: 'Question 124\n\nThe right to fair hearing is an example of:',
    options: [
      'Political right',
      'Economic right',
      'Civil right',
      'Social right'
    ],
    correctAnswer: 2,
    explanation: 'The right to a fair hearing (audi alteram partem / natural justice) is a foundational civil right guaranteed under Section 36 of the Constitution.',
    topic: 'Unit 7: Right to Fair Hearing',
    chapter: 'Unit Seven: Judiciary and Fundamental Rights',
    hint: 'Guaranteed procedural civil right in legal proceedings.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q125',
    courseId: 'ges112',
    question: 'Question 125\n\nWhich of the following rights allows a person to express opinions freely?',
    options: [
      'Right to life',
      'Right to fair hearing',
      'Right to freedom of expression',
      'Right to property'
    ],
    correctAnswer: 2,
    explanation: 'The Right to Freedom of Expression and the Press (Section 39) guarantees citizens the freedom to hold and articulate ideas and opinions without unlawful censorship.',
    topic: 'Unit 7: Freedom of Expression',
    chapter: 'Unit Seven: Judiciary and Fundamental Rights',
    hint: 'Right protecting speech and opinion.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q126',
    courseId: 'ges112',
    question: 'Question 126\n\nThe judiciary acts as a check on the:',
    options: [
      'Executive and legislature',
      'Police and civil service',
      'Local and state governments',
      'Traditional rulers'
    ],
    correctAnswer: 0,
    explanation: 'Under the constitutional system of checks and balances, the judiciary checks the actions and enactments of both the Executive and the Legislature.',
    topic: 'Unit 7: Checks and Balances',
    chapter: 'Unit Seven: Judiciary and Fundamental Rights',
    hint: 'The two other political branches of government.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q127',
    courseId: 'ges112',
    question: 'Question 127\n\nWhich court in Nigeria handles disputes relating to the constitution?',
    options: [
      'Magistrate Court',
      'Customary Court',
      'Sharia Court',
      'Supreme Court'
    ],
    correctAnswer: 3,
    explanation: 'The Supreme Court exercises original jurisdiction in constitutional disputes between states or between the Federal Government and the States.',
    topic: 'Unit 7: Constitutional Adjudication',
    chapter: 'Unit Seven: Judiciary and Fundamental Rights',
    hint: 'The apex court with original constitutional jurisdiction.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q128',
    courseId: 'ges112',
    question: 'Question 128\n\nFundamental human rights are enforceable by:',
    options: [
      'Local government',
      'Customary law',
      'Court of law',
      'Traditional institutions'
    ],
    correctAnswer: 2,
    explanation: 'Under Section 46 of the Constitution, any individual alleging violation of fundamental rights can apply to a competent High Court of Law for redress and enforcement.',
    topic: 'Unit 7: Enforcement of Rights',
    chapter: 'Unit Seven: Judiciary and Fundamental Rights',
    hint: 'The courts of law (High Courts).',
    source: 'Workbook'
  },
  {
    id: 'ges112_q129',
    courseId: 'ges112',
    question: 'Question 129\n\nThe right to vote and be voted for is a:',
    options: [
      'Civil right',
      'Political right',
      'Legal right',
      'Economic right'
    ],
    correctAnswer: 1,
    explanation: 'Franchise and electoral candidacy are classified as political rights, enabling citizens to participate in electing or serving in government.',
    topic: 'Unit 7: Political Rights & Franchise',
    chapter: 'Unit Seven: Judiciary and Fundamental Rights',
    hint: 'Electoral participation rights.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q130',
    courseId: 'ges112',
    question: 'Question 130\n\nJudicial independence means the judiciary is:',
    options: [
      'Controlled by the executive',
      'Influenced by the legislature',
      'Free from external interference',
      'Controlled by the police'
    ],
    correctAnswer: 2,
    explanation: 'Judicial independence ensures judges can decide cases impartially on merit and law without undue pressure, control, or interference from politicians or external forces.',
    topic: 'Unit 7: Judicial Independence',
    chapter: 'Unit Seven: Judiciary and Fundamental Rights',
    hint: 'Immunity from political and external interference.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q131',
    courseId: 'ges112',
    question: 'Question 131\n\nThe principle of rule of law ensures that:',
    options: [
      'Citizens are above the law',
      'Leaders cannot be prosecuted',
      'All citizens are equal before the law',
      'Only the rich obey the law'
    ],
    correctAnswer: 2,
    explanation: 'The Rule of Law asserts the absolute supremacy of law and the equality of all persons (both rulers and citizens) before ordinary courts of the land.',
    topic: 'Unit 7: The Rule of Law',
    chapter: 'Unit Seven: Judiciary and Fundamental Rights',
    hint: 'Universal equality of all persons before the law.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q132',
    courseId: 'ges112',
    question: 'Question 132\n\nThe fundamental human right to own property is known as:',
    options: [
      'Economic right',
      'Social right',
      'Cultural right',
      'Religious right'
    ],
    correctAnswer: 0,
    explanation: 'The right to acquire and own immovable property anywhere in Nigeria (Section 43) is classified as an economic / property right.',
    topic: 'Unit 7: Right to Property',
    chapter: 'Unit Seven: Judiciary and Fundamental Rights',
    hint: 'Right regarding economic assets and property acquisition.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q133',
    courseId: 'ges112',
    question: 'Question 133\n\nThe right to practice any religion is called:',
    options: [
      'Freedom of movement',
      'Freedom of religion',
      'Freedom of association',
      'Freedom of expression'
    ],
    correctAnswer: 1,
    explanation: 'Freedom of Religion (or Freedom of thought, conscience and religion) protects the liberty of every individual to manifest and propagate their faith or belief.',
    topic: 'Unit 7: Freedom of Religion',
    chapter: 'Unit Seven: Judiciary and Fundamental Rights',
    hint: 'Section 38: Freedom of Thought, Conscience and Religion.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q134',
    courseId: 'ges112',
    question: 'Question 134\n\nWhich of these rights is not a fundamental human right?',
    options: [
      'Right to education',
      'Right to vote',
      'Right to cheat in exams',
      'Right to life'
    ],
    correctAnswer: 2,
    explanation: 'Cheating in examinations is a criminal offense and disciplinary misconduct, not a recognized human or constitutional right.',
    topic: 'Unit 7: Fundamental Rights vs Offenses',
    chapter: 'Unit Seven: Judiciary and Fundamental Rights',
    hint: 'A fraudulent and unlawful misconduct.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q135',
    courseId: 'ges112',
    question: 'Question 135\n\nThe doctrine of separation of powers ensures that:',
    options: [
      'One arm dominates others',
      'All powers are given to the executive',
      'Powers are shared among the three arms',
      'Legislature controls the judiciary'
    ],
    correctAnswer: 2,
    explanation: 'Formulated by Montesquieu, separation of powers divides government authority among Executive, Legislative, and Judicial branches to avert tyranny.',
    topic: 'Unit 7: Separation of Powers',
    chapter: 'Unit Seven: Judiciary and Fundamental Rights',
    hint: 'Tripartite division of powers among executive, legislative, and judicial branches.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q136',
    courseId: 'ges112',
    question: 'Question 136\n\nThe judiciary helps to protect the rights of citizens by:',
    options: [
      'Making laws',
      'Judging cases fairly',
      'Electing leaders',
      'Conducting elections'
    ],
    correctAnswer: 1,
    explanation: 'Judges protect citizen liberties by impartially evaluating evidence and rendering fair, lawful judgments without bias.',
    topic: 'Unit 7: Judicial Protection of Rights',
    chapter: 'Unit Seven: Judiciary and Fundamental Rights',
    hint: 'Impartial and fair adjudication of legal cases.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q137',
    courseId: 'ges112',
    question: 'Question 137\n\nThe power of the judiciary to declare laws unconstitutional is called:',
    options: [
      'Judicial activism',
      'Judicial declaration',
      'Judicial supremacy',
      'Judicial review'
    ],
    correctAnswer: 3,
    explanation: 'Judicial review is the power of courts to review actions of the executive and legislative branches and invalidate any act or law conflicting with the Constitution.',
    topic: 'Unit 7: Power of Judicial Review',
    chapter: 'Unit Seven: Judiciary and Fundamental Rights',
    hint: 'The constitutional mechanism of Judicial Review.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q138',
    courseId: 'ges112',
    question: 'Question 138\n\nFundamental human rights can be suspended during:',
    options: [
      'General elections',
      'Budget presentation',
      'State of emergency',
      'Sports tournaments'
    ],
    correctAnswer: 2,
    explanation: 'Under Section 45 of the 1999 Constitution, certain derogations from fundamental rights are permitted during a lawfully proclaimed State of Emergency (e.g., in times of war or public danger).',
    topic: 'Unit 7: Derogation from Rights',
    chapter: 'Unit Seven: Judiciary and Fundamental Rights',
    hint: 'A declared national State of Emergency.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q139',
    courseId: 'ges112',
    question: 'Question 139\n\nAn independent judiciary promotes:',
    options: [
      'Dictatorship',
      'Injustice',
      'Rule of law',
      'Nepotism'
    ],
    correctAnswer: 2,
    explanation: 'Judicial autonomy is the cornerstone of the Rule of Law, ensuring equity, justice, and accountability in a constitutional democracy.',
    topic: 'Unit 7: Role of Independent Judiciary',
    chapter: 'Unit Seven: Judiciary and Fundamental Rights',
    hint: 'Upholding and strengthening the Rule of Law.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q140',
    courseId: 'ges112',
    question: 'Question 140\n\nWhich of these is a function of the judiciary?',
    options: [
      'Conducting elections',
      'Enacting laws',
      'Making budgets',
      'Enforcing traffic rules'
    ],
    correctAnswer: 3,
    explanation: 'In the options provided, judicial institutions (such as traffic tribunals and magistrate courts) process violations and enforce traffic penalties; (the primary function is adjudicating disputes and interpreting laws).',
    topic: 'Unit 7: Functions of Judicial Organs',
    chapter: 'Unit Seven: Judiciary and Fundamental Rights',
    hint: 'Processing violations and legal enforcement.',
    source: 'Workbook'
  },

  // ================= UNIT EIGHT =================
  // Individual Norms and Values (Basic Nigerian Norms and Values, Patterns of Citizenship Acquisition, Citizenship and Civic Responsibilities, Indigenous Languages, and Negative Attitudes and Conducts)
  {
    id: 'ges112_q141',
    courseId: 'ges112',
    question: 'Question 141\n\nWhich of the following is a core Nigerian value?',
    options: [
      'Selfishness',
      'Corruption',
      'Integrity',
      'Disobedience'
    ],
    correctAnswer: 2,
    explanation: 'Integrity, along with honesty, communal solidarity, and hard work, is a cherished core traditional and civic value in Nigeria.',
    topic: 'Unit 8: Core Values in Nigeria',
    chapter: 'Unit Eight: Individual Norms and Values',
    hint: 'Honesty and moral soundness.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q142',
    courseId: 'ges112',
    question: 'Question 142\n\nRespect for elders in Nigeria is an example of:',
    options: [
      'Legal law',
      'Cultural norm',
      'National policy',
      'Economic rule'
    ],
    correctAnswer: 1,
    explanation: 'Respect for seniors and elders (expressed through greetings, prostration, kneeling, and deference) is a pervasive cultural norm across Nigerian societies.',
    topic: 'Unit 8: Cultural Norms',
    chapter: 'Unit Eight: Individual Norms and Values',
    hint: 'An ingrained cultural standard of conduct.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q143',
    courseId: 'ges112',
    question: 'Question 143\n\nThe Nigerian society encourages all EXCEPT:',
    options: [
      'Honesty',
      'Hard work',
      'Laziness',
      'Patriotism'
    ],
    correctAnswer: 2,
    explanation: 'Indolence and laziness are universally reproached in Nigerian traditional and modern moral value systems.',
    topic: 'Unit 8: Social Values and Proscribed Behaviors',
    chapter: 'Unit Eight: Individual Norms and Values',
    hint: 'Idleness and lack of productive effort.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q144',
    courseId: 'ges112',
    question: 'Question 144\n\nA shared system of beliefs and behaviors within a society is known as:',
    options: [
      'Religion',
      'Politics',
      'Norms',
      'Value system'
    ],
    correctAnswer: 3,
    explanation: 'A value system is the collective framework of beliefs, standards, and ethical principles by which a community regulates conduct and evaluates actions.',
    topic: 'Unit 8: Value Systems',
    chapter: 'Unit Eight: Individual Norms and Values',
    hint: 'The collective value system of a society.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q145',
    courseId: 'ges112',
    question: 'Question 145\n\nWhich of these is NOT a Nigerian traditional value?',
    options: [
      'Hospitality',
      'Unity',
      'Individualism',
      'Respect'
    ],
    correctAnswer: 2,
    explanation: 'Traditional African/Nigerian society is communalistic and centered on collective welfare ("I am because we are"), in contrast to extreme Western individualism.',
    topic: 'Unit 8: Communalism vs Individualism',
    chapter: 'Unit Eight: Individual Norms and Values',
    hint: 'Excessive self-centered focus detached from the community.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q146',
    courseId: 'ges112',
    question: 'Question 146\n\nA person born in Nigeria to Nigerian parents is a citizen by:',
    options: [
      'Registration',
      'Birth',
      'Naturalization',
      'Indigenization'
    ],
    correctAnswer: 1,
    explanation: 'Under Section 25 of the 1999 Constitution, any individual born in Nigeria whose parents or grandparents belong to an indigenous Nigerian community is a citizen by Birth.',
    topic: 'Unit 8: Citizenship by Birth',
    chapter: 'Unit Eight: Individual Norms and Values',
    hint: 'Section 25 of the Constitution.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q147',
    courseId: 'ges112',
    question: 'Question 147\n\nWhich of these is NOT a mode of acquiring Nigerian citizenship?',
    options: [
      'Birth',
      'Marriage',
      'Registration',
      'Naturalization'
    ],
    correctAnswer: 1,
    explanation: 'The three constitutional modes of acquiring Nigerian citizenship are: (1) By Birth (Section 25), (2) By Registration (Section 26), and (3) By Naturalization (Section 27). Marriage is not an automatic mode, but rather grounds to apply for registration.',
    topic: 'Unit 8: Modes of Acquiring Citizenship',
    chapter: 'Unit Eight: Individual Norms and Values',
    hint: 'The three constitutional modes are Birth, Registration, Naturalization.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q148',
    courseId: 'ges112',
    question: 'Question 148\n\nCitizenship by naturalization in Nigeria requires the applicant to have lived in Nigeria for at least:',
    options: [
      '10 years',
      '20 years',
      '5 years',
      '15 years'
    ],
    correctAnswer: 3,
    explanation: 'Section 27(g) of the 1999 Constitution stipulates that an applicant for naturalization must have resided in Nigeria for a continuous period of 12 months, and for an aggregate period of at least 15 years.',
    topic: 'Unit 8: Citizenship by Naturalization',
    chapter: 'Unit Eight: Individual Norms and Values',
    hint: 'Constitutional requirement of 15 years aggregate residency.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q149',
    courseId: 'ges112',
    question: 'Question 149\n\nForeigners can become citizens of Nigeria through:',
    options: [
      'Deportation',
      'Registration and Naturalization',
      'Refugee status',
      'Temporary residence'
    ],
    correctAnswer: 1,
    explanation: 'Non-Nigerians may acquire citizenship either through Registration (e.g. foreign women married to Nigerian men) or through Naturalization.',
    topic: 'Unit 8: Naturalization & Registration',
    chapter: 'Unit Eight: Individual Norms and Values',
    hint: 'Registration and Naturalization avenues.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q150',
    courseId: 'ges112',
    question: 'Question 150\n\nA child born abroad to Nigerian parents is a citizen by:',
    options: [
      'Marriage',
      'Law',
      'Birth',
      'Registration'
    ],
    correctAnswer: 2,
    explanation: 'Under Section 25(1)(c) of the Nigerian Constitution, a person born outside Nigeria is a citizen by birth if either of their parents is a citizen of Nigeria.',
    topic: 'Unit 8: Citizenship by Descent/Birth Abroad',
    chapter: 'Unit Eight: Individual Norms and Values',
    hint: 'Citizenship by Birth through parentage.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q151',
    courseId: 'ges112',
    question: 'Question 151\n\nWhich of these is a civic responsibility of a Nigerian citizen?',
    options: [
      'Paying taxes',
      'Joining the army',
      'Marrying early',
      'Traveling abroad'
    ],
    correctAnswer: 0,
    explanation: 'Paying lawful taxes, obeying laws, protecting public property, and participating in democratic processes are primary civic duties specified in Section 24 of the Constitution.',
    topic: 'Unit 8: Civic Responsibilities of Citizens',
    chapter: 'Unit Eight: Individual Norms and Values',
    hint: 'Section 24 duty to pay tax promptly.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q152',
    courseId: 'ges112',
    question: 'Question 152\n\nThe duty of obeying laws in a country is known as:',
    options: [
      'Cultural behavior',
      'Civic responsibility',
      'Religious act',
      'Political will'
    ],
    correctAnswer: 1,
    explanation: 'Obedience to the laws of the land is an essential civic responsibility incumbent upon every citizen for orderly societal coexistence.',
    topic: 'Unit 8: Civic Duty to Obey Law',
    chapter: 'Unit Eight: Individual Norms and Values',
    hint: 'A fundamental civic duty/responsibility.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q153',
    courseId: 'ges112',
    question: 'Question 153\n\nWhich of the following is NOT a right of a Nigerian citizen?',
    options: [
      'Freedom of speech',
      'Right to vote',
      'Right to traffic violation',
      'Right to life'
    ],
    correctAnswer: 2,
    explanation: 'Violating traffic rules is an unlawful traffic infraction punishable by law, never a citizen\'s right.',
    topic: 'Unit 8: Citizen Rights vs Lawlessness',
    chapter: 'Unit Eight: Individual Norms and Values',
    hint: 'An illegal traffic offense.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q154',
    courseId: 'ges112',
    question: 'Question 154\n\nParticipation in democratic governance is a:',
    options: [
      'Traditional law',
      'Civic duty',
      'Religious law',
      'Political right'
    ],
    correctAnswer: 1,
    explanation: 'Active civic engagement, voting during elections, and constructive political participation are vital civic duties of every citizen.',
    topic: 'Unit 8: Civic Engagement and Voting',
    chapter: 'Unit Eight: Individual Norms and Values',
    hint: 'Civic duty in a democratic nation.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q155',
    courseId: 'ges112',
    question: 'Question 155\n\nA responsible citizen should do all the following EXCEPT:',
    options: [
      'Pay tax',
      'Obey laws',
      'Promote violence',
      'Defend the nation'
    ],
    correctAnswer: 2,
    explanation: 'Responsible citizenship requires promoting peace and national harmony; instigating or promoting violence is detrimental to the state.',
    topic: 'Unit 8: Responsible Citizenship',
    chapter: 'Unit Eight: Individual Norms and Values',
    hint: 'Inciting unrest and violence.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q156',
    courseId: 'ges112',
    question: 'Question 156\n\nThe promotion of indigenous languages in Nigeria is important because:',
    options: [
      'It discourages Western culture',
      'It leads to disunity',
      'It preserves culture and identity',
      'It prevents migration'
    ],
    correctAnswer: 2,
    explanation: 'Indigenous languages are carriers of historical wisdom, folklore, cultural values, and ethno-cultural identity.',
    topic: 'Unit 8: Indigenous Languages & Culture',
    chapter: 'Unit Eight: Individual Norms and Values',
    hint: 'Preserving indigenous cultural heritage and identity.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q157',
    courseId: 'ges112',
    question: 'Question 157\n\nWhich of these is a major indigenous language in Nigeria?',
    options: [
      'Swahili',
      'Zulu',
      'Yoruba',
      'Arabic'
    ],
    correctAnswer: 2,
    explanation: 'Yoruba, alongside Hausa and Igbo, is one of the three constitutionally recognized major indigenous languages spoken in Nigeria.',
    topic: 'Unit 8: Major Indigenous Languages',
    chapter: 'Unit Eight: Individual Norms and Values',
    hint: 'One of Nigeria\'s three major indigenous mother tongues.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q158',
    courseId: 'ges112',
    question: 'Question 158\n\nThe use of local languages in education encourages:',
    options: [
      'Corruption',
      'Cultural erosion',
      'Better understanding',
      'Political domination'
    ],
    correctAnswer: 2,
    explanation: 'Early childhood and foundational instruction in the mother tongue enhances cognitive comprehension, conceptual grasp, and learning retention.',
    topic: 'Unit 8: Indigenous Language in Education',
    chapter: 'Unit Eight: Individual Norms and Values',
    hint: 'Enhanced cognitive comprehension and learning retention.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q159',
    courseId: 'ges112',
    question: 'Question 159\n\nWhich of these is considered a negative social behavior in Nigeria?',
    options: [
      'Punctuality',
      'Cultism',
      'Patriotism',
      'Respect'
    ],
    correctAnswer: 1,
    explanation: 'Campus and community cultism is a destructive social menace characterized by violent rivalry, criminality, and moral decay.',
    topic: 'Unit 8: Negative Attitudes and Cultism',
    chapter: 'Unit Eight: Individual Norms and Values',
    hint: 'Secret fraternities and violent gang activities on campuses.',
    source: 'Workbook'
  },
  {
    id: 'ges112_q160',
    courseId: 'ges112',
    question: 'Question 160\n\nThe act of taking what does not belong to you is:',
    options: [
      'Honesty',
      'Corruption',
      'Forgiveness',
      'Empathy'
    ],
    correctAnswer: 1,
    explanation: 'Misappropriating or stealing public or private property without entitlement constitutes corruption and unlawful theft.',
    topic: 'Unit 8: Corruption and Social Vices',
    chapter: 'Unit Eight: Individual Norms and Values',
    hint: 'Unlawful misappropriation and dishonesty.',
    source: 'Workbook'
  }
];

export const GES112_PRACTICE_QUESTIONS: Question[] = [
  ...GES112_PRACTICE_QUESTIONS_PART1,
  ...GES112_PRACTICE_QUESTIONS_PART2,
  ...GES112_PRACTICE_QUESTIONS_PART3
];

