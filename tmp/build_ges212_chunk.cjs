const fs = require('fs');
const path = require('path');

const questionsRaw = [
  {
    origNum: 101,
    q: "The Ancient dictum 'you cannot step twice into the same river' is credited to ______",
    opts: ["a. Aristotle", "b. Plato", "c. Parmenides", "d. Heraclitus", "e. Protagoras"],
    ans: 3,
    exp: "Heraclitus of Ephesus famously taught that everything is in perpetual flux (Panta Rhei), asserting that you cannot step twice into the same river because new waters are ever flowing upon you.",
    topic: "Heraclitus and Perpetual Flux",
    chapter: "Ancient Greek Philosophy",
    hint: "Heraclitus = perpetual change and universal flux."
  },
  {
    origNum: 102,
    q: "Power installed in something by virtue of being something is what ______",
    opts: ["a. actuality", "b. potentiality", "c. form", "d. water"],
    ans: 1,
    exp: "In Aristotelian metaphysics, potentiality (dynamis) is the latent power or capacity inherent in a substance to change, develop, or achieve an actualized state (actuality).",
    topic: "Actuality and Potentiality",
    chapter: "Metaphysics",
    hint: "Potentiality is the latent power/capacity to become actual."
  },
  {
    origNum: 103,
    q: "Another name for medieval period is called ______",
    opts: ["a. dark age", "b. middle age", "c. golden age", "d. all of the above"],
    ans: 1,
    exp: "The Medieval period of philosophy and history (spanning from roughly the 5th to the 15th century) is widely known as the Middle Ages.",
    topic: "Periods of Philosophy: Medieval Period",
    chapter: "Medieval Philosophy",
    hint: "The Middle Ages.",
    source: "PastQuestion"
  },
  {
    origNum: 104,
    q: "The root meaning of Philosophy is ______",
    opts: ["a. Wise love", "b. Wisdom friendly", "c. Wisdom lover", "d. Wisdom friendship"],
    ans: 0,
    exp: "Etymologically, 'Philosophy' comes from the Greek words 'Philos' (love/affection) and 'Sophia' (wisdom), meaning the love of wisdom (wise love).",
    topic: "Etymology of Philosophy",
    chapter: "Nature and Scope of Philosophy",
    hint: "Love of wisdom (Philos + Sophia)."
  },
  {
    origNum: 105,
    q: "In the Averroes Thomistic tradition, \"Credo ut intellegam\" means?",
    opts: ["a. I believe so that I may see", "b. I believe so that I may be faithful", "c. I believe so that I may succeed", "d. I believe so that I may understand"],
    ans: 3,
    exp: "\"Credo ut intelligam\" (Latin for \"I believe in order that I may understand\") is a famous medieval scholastic maxim originating from St. Augustine and St. Anselm of Canterbury.",
    topic: "Faith and Reason in Medieval Philosophy",
    chapter: "Medieval Philosophy",
    hint: "I believe so that I may understand."
  },
  {
    origNum: 106,
    q: "Materialism is best defined as:",
    opts: [
      "a. Reality is explicable in terms of idealism",
      "b. Reality is wholly spiritual",
      "c. Reality is inexplicable in terms of the existence of matter",
      "d. Reality is explicable in terms of the existence and nature of matter alone"
    ],
    ans: 3,
    exp: "Materialism is the metaphysical doctrine asserting that reality consists entirely of physical matter and material forces, with consciousness and mind being by-products of physical processes.",
    topic: "Metaphysical Materialism",
    chapter: "Metaphysics",
    hint: "Reality is explained solely in terms of physical matter."
  },
  {
    origNum: 107,
    q: "The process of reasoning whereby the human mind passes from some given evidences in order to make judgement is called",
    opts: ["a. inference", "b. logical movement", "c. deduction", "d. induction", "e. none of the above"],
    ans: 0,
    exp: "Inference is the cognitive and logical process by which the mind moves from accepted premises or empirical evidence to derive a warranted conclusion.",
    topic: "Nature of Inference",
    chapter: "Logic and Human Reasoning",
    hint: "Inference is the passage from evidence/premises to a conclusion."
  },
  {
    origNum: 108,
    q: "The Milesian school included",
    opts: [
      "a. Thales, Anaximander, Anaximenes",
      "b. Plato, Socrates, Aristotle",
      "c. Pythagoras, Heraclitus, Parmenides",
      "d. all of the above",
      "e. none of the above"
    ],
    ans: 0,
    exp: "The Milesian (Ionian) school of natural philosophy flourished in Miletus and was comprised of Thales, Anaximander, and Anaximenes.",
    topic: "The Milesian Pre-Socratic School",
    chapter: "Ancient Greek Philosophy",
    hint: "Thales, Anaximander, and Anaximenes of Miletus."
  },
  {
    origNum: 109,
    q: "The statement \"John has no wife\" is an example of",
    opts: ["a. An invalid proposition", "b. a fallacy", "c. induction", "d. deduction", "e. all of the above"],
    ans: 0,
    exp: "\"John has no wife\" is a declarative singular negative proposition that can be assigned a truth value (true or false). While propositions strictly possess truth rather than validity, in this exam context it is identified as a negative categorical proposition.",
    topic: "Propositions and Statements in Logic",
    chapter: "Logic and Human Reasoning",
    hint: "A declarative statement asserting or denying a state of affairs."
  },
  {
    origNum: 110,
    q: "The law of contradiction asserts that",
    opts: [
      "a. the world is made up of opposites",
      "b. contradiction should be avoided",
      "c. no statement can both be true or false at the same time",
      "d. a proposition is true if and only if it contradicts another proposition",
      "e. none of the above"
    ],
    ans: 2,
    exp: "The Law of Non-Contradiction states that contradictory propositions cannot both be true simultaneously in the same respect (~(P ∧ ~P)).",
    topic: "Law of Non-Contradiction",
    chapter: "Logic and Human Reasoning",
    hint: "No statement can be both true and false at the same time."
  },
  {
    origNum: 111,
    q: "\"Dr. Oni is a teacher\" is an example of",
    opts: ["a. a fallacy of identity", "b. a proposition", "c. the law of contradiction", "d. A and C", "e. none of the above"],
    ans: 1,
    exp: "A proposition is a declarative sentence that is either true or false. 'Dr. Oni is a teacher' affirms a predicate about a subject and thus constitutes a proposition.",
    topic: "Nature of Propositions",
    chapter: "Logic and Human Reasoning",
    hint: "A declarative statement capable of being true or false."
  },
  {
    origNum: 112,
    q: "The search for reality is called",
    opts: ["a. ethics", "b. matter", "c. metaphysics", "d. logic", "e. none of the above"],
    ans: 2,
    exp: "Metaphysics is the core branch of philosophy dedicated to investigating the fundamental nature of ultimate reality, existence, and being (ontology).",
    topic: "Definition and Scope of Metaphysics",
    chapter: "Metaphysics",
    hint: "Metaphysics deals with ultimate reality and being."
  },
  {
    origNum: 113,
    q: "Which of these is true of philosophy?",
    opts: [
      "a. It has nothing to do with other disciplines",
      "b. it has only one definition",
      "c. It has very many definitions",
      "d. it cannot be defined at all",
      "e. none of the above"
    ],
    ans: 2,
    exp: "Philosophy has numerous definitions because thinkers approach it from varied historical traditions, epistemological standpoints, and areas of focus.",
    topic: "Defining Philosophy",
    chapter: "Nature and Scope of Philosophy",
    hint: "Philosophy has multiple definitions depending on perspective."
  },
  {
    origNum: 114,
    q: "A posteriori proposition is the type of proposition that is used in",
    opts: [
      "a. knowledge derived from experience",
      "b. knowledge of eternal verities",
      "c. knowledge of ethical principles",
      "d. knowledge derived from pure reason",
      "e. knowledge of ideas"
    ],
    ans: 0,
    exp: "A posteriori knowledge is derived from and justified by sensory experience, observation, and empirical inquiry.",
    topic: "A Posteriori Knowledge",
    chapter: "Epistemology",
    hint: "A posteriori = derived from sensory experience."
  },
  {
    origNum: 115,
    q: "Relativism as a branch of epistemology derives",
    opts: [
      "a. objective knowledge",
      "b. standard knowledge",
      "c. correct knowledge",
      "d. a priori knowledge",
      "e. a posteriori knowledge"
    ],
    ans: 4,
    exp: "Epistemological relativism rejects absolute or universal a priori certainties, asserting that knowledge claims are contextual, experiential (a posteriori), and relative to specific observers or cultures.",
    topic: "Epistemological Relativism",
    chapter: "Epistemology",
    hint: "Relativism roots knowledge in relative, experiential context."
  },
  {
    origNum: 116,
    q: "______ believed that water is the fundamental stuff of nature",
    opts: ["a. Anaximander", "b. zero", "c. Thales", "d. Heraclitus", "e. none of the above"],
    ans: 2,
    exp: "Thales of Miletus asserted that water (hydor) is the primary material principle (arche) underlying all cosmic phenomena.",
    topic: "Thales and Water Arche",
    chapter: "Ancient Greek Philosophy",
    hint: "Thales of Miletus."
  },
  {
    origNum: 117,
    q: "______ denied permanence in nature",
    opts: ["a. Socrates", "b. Heraclitus", "c. Anaximenes", "d. Parmenides", "e. all of the above"],
    ans: 1,
    exp: "Heraclitus denied static permanence in nature, teaching that constant change and strife constitute the true reality.",
    topic: "Heraclitean Doctrine of Change",
    chapter: "Ancient Greek Philosophy",
    hint: "Heraclitus denied permanence (opposite of Parmenides)."
  },
  {
    origNum: 118,
    q: "______ believed that everything is in the stage of flux",
    opts: ["a. Heraclitus", "b. Thales", "c. Parmenides", "d. Empedocles"],
    ans: 0,
    exp: "Heraclitus maintained that universal flux characterizes all existence ('Panta Rhei' - everything flows).",
    topic: "Heraclitus and Flux",
    chapter: "Ancient Greek Philosophy",
    hint: "Heraclitus."
  },
  {
    origNum: 119,
    q: "______ believed in the transmigration of soul",
    opts: ["a. Socrates", "b. the sophists", "c. Pythagoras", "d. Heraclitus", "e. all of the above"],
    ans: 2,
    exp: "Pythagoras taught metempsychosis, the transmigration or reincarnation of the immortal soul through successive human and animal forms.",
    topic: "Pythagorean Transmigration of Souls",
    chapter: "Ancient Greek Philosophy",
    hint: "Pythagoras taught metempsychosis."
  },
  {
    origNum: 120,
    q: "One important feature of philosophy is ______",
    opts: ["a. criticism", "b. radicalism", "c. dogmatism", "d. indoctrination", "e. all of the above"],
    ans: 0,
    exp: "Philosophy is characterized by critical inquiry, questioning assumptions, and rational appraisal, rejecting dogmatism and uncritical indoctrination.",
    topic: "Critical Spirit of Philosophy",
    chapter: "Nature and Scope of Philosophy",
    hint: "Philosophy is essentially a critical and rational discipline."
  },
  {
    origNum: 121,
    q: "______ postulated the eclipse of the sun",
    opts: ["a. Plato", "b. Thales", "c. Aristotle", "d. Socrates", "e. None of the above"],
    ans: 1,
    exp: "Thales of Miletus famously predicted the solar eclipse of 585 BC using astronomical observations.",
    topic: "Thales and Astronomical Prediction",
    chapter: "Ancient Greek Philosophy",
    hint: "Thales of Miletus predicted the 585 BC solar eclipse."
  },
  {
    origNum: 122,
    q: "Which of the following personalities fall within the period classified as the Golden age of Greek philosophy",
    opts: [
      "a. Socrates, Plato, Aristotle",
      "b. Thales, Anaximander, Anaximenes",
      "c. Parmenides, Democritus, Pythagoras",
      "d. all of the above",
      "e. none of the above"
    ],
    ans: 0,
    exp: "The Golden (Classical) Age of Greek philosophy reached its zenith in Athens with the trio Socrates, Plato, and Aristotle.",
    topic: "Golden Age of Greek Philosophy",
    chapter: "Ancient Greek Philosophy",
    hint: "Socrates, Plato, and Aristotle."
  },
  {
    origNum: 123,
    q: "The first and greatest problem of philosophy is",
    opts: ["a. philosophy itself", "b. law", "c. psychology", "d. religion", "e. all of the above"],
    ans: 0,
    exp: "The first problem of philosophy is defining philosophy itself, since its nature, subject matter, and limits are self-reflective questions.",
    topic: "Self-Reflective Problem of Philosophy",
    chapter: "Nature and Scope of Philosophy",
    hint: "The definition and nature of philosophy itself."
  },
  {
    origNum: 124,
    q: "Philosophy emerged in the",
    opts: ["a. 3rd century", "b. 5th BC", "c. 6th BC", "d. all of the above", "e. none of the above"],
    ans: 2,
    exp: "Western philosophy originated in the 6th century BC (c. 585 BC) with Thales and the Ionian natural philosophers.",
    topic: "Origins of Western Philosophy",
    chapter: "Ancient Greek Philosophy",
    hint: "6th Century BC."
  },
  {
    origNum: 125,
    q: "The phrase \"Existence precedes essence\" is associated with",
    opts: ["a. pragmatism", "b. phenomenology", "c. existentialism", "d. perennialism", "e. None of the above"],
    ans: 2,
    exp: "\"Existence precedes essence\" is the foundational maxim of Existentialism formulated by Jean-Paul Sartre, meaning humans exist first and define their essence through actions.",
    topic: "Existentialist Axiom",
    chapter: "Contemporary Philosophical Movements",
    hint: "Existentialism (Jean-Paul Sartre)."
  },
  {
    origNum: 126,
    q: "The validity of an argument depends on the ______ of the argument",
    opts: ["a. truthfulness", "b. truthfulness and falsity", "c. form", "d. contents", "e. C and D"],
    ans: 2,
    exp: "Validity is strictly a formal structural property of deductive arguments; it depends on the logical form connecting premises to conclusion, not factual content.",
    topic: "Logical Validity and Form",
    chapter: "Logic and Human Reasoning",
    hint: "Validity depends on logical form/structure."
  },
  {
    origNum: 127,
    q: "The dictum \"An unexamined life is not worth living\" is credited to",
    opts: ["a. Aristotle", "b. Thales", "c. Socrates", "d. Karl Marx", "e. None of the above"],
    ans: 2,
    exp: "Socrates famously stated that 'the unexamined life is not worth living' during his trial in Athens, recorded in Plato's Apology.",
    topic: "Socratic Maxim on Examination",
    chapter: "Ancient Greek Philosophy",
    hint: "Socrates in Plato's Apology."
  },
  {
    origNum: 128,
    q: "The philosopher who announced to the world that God is dead is",
    opts: ["a. G.E Moore", "b. Karl Popper", "c. Frederick Nietzsche", "d. St. Aquinas", "e. none of the above"],
    ans: 2,
    exp: "Friedrich Nietzsche proclaimed 'God is dead' (Gott ist tot) in The Gay Science and Thus Spoke Zarathustra to analyze the cultural crisis of modern secularism.",
    topic: "Nietzsche and the Death of God",
    chapter: "Contemporary Philosophical Movements",
    hint: "Friedrich Nietzsche."
  },
  {
    origNum: 129,
    q: "Existentialism is a philosophy of",
    opts: ["a. Globalization", "b. the Universe", "c. human existence", "d. spiritualism", "e. none of the above"],
    ans: 2,
    exp: "Existentialism focuses on individual human existence, freedom, personal choice, anguish, and authentic self-definition in an indifferent universe.",
    topic: "Focus of Existentialism",
    chapter: "Contemporary Philosophical Movements",
    hint: "Human existence, freedom, and meaning."
  },
  {
    origNum: 130,
    q: "The essence of philosophy is",
    opts: ["a. Economic", "b. psychological", "c. metaphysical", "d. social", "e. mystical"],
    ans: 2,
    exp: "Metaphysics (the investigation of fundamental being and reality) is historically considered the foundational core and 'first philosophy'.",
    topic: "Metaphysics as the Essence of Philosophy",
    chapter: "Metaphysics",
    hint: "Metaphysical (the study of being and ultimate reality)."
  },
  {
    origNum: 131,
    q: "The method of reasoning from particular to general is called ______",
    opts: ["a. inductive reasoning", "b. deductive reasoning", "c. valid reasoning", "d. psychological reasoning", "e. None of the above"],
    ans: 0,
    exp: "Inductive reasoning is the logical process of drawing general principles, generalizations, or probabilistic laws from specific, particular observations.",
    topic: "Inductive Reasoning",
    chapter: "Logic and Human Reasoning",
    hint: "Particular instances to general law = Induction."
  },
  {
    origNum: 132,
    q: "One of the following statement is not properly descriptive of logic",
    opts: [
      "a. logic deals with the art of correct reasoning",
      "b. logic deals with inferences",
      "c. logic examines validity of arguments",
      "d. logic deals with persuasive power",
      "e. logic deals with the order of form of argument"
    ],
    ans: 3,
    exp: "Persuasive power belongs to Rhetoric or Psychology, whereas Logic is normative and concerned with the objective validity and sound structure of arguments regardless of psychological persuasion.",
    topic: "Logic vs Rhetoric",
    chapter: "Logic and Human Reasoning",
    hint: "Logic is not about persuasion or psychological influence."
  },
  {
    origNum: 133,
    q: "An argument is valid",
    opts: [
      "a. if all the premises are true",
      "b. if the conclusion is true",
      "c. if the premises and the conclusion are true",
      "d. if it is impossible for the conclusion to be false if the premises are true",
      "e. none of the above"
    ],
    ans: 3,
    exp: "A deductive argument is valid if and only if its structural form makes it impossible for the premises to be true while the conclusion is false.",
    topic: "Formal Definition of Validity",
    chapter: "Logic and Human Reasoning",
    hint: "Impossible for true premises to yield a false conclusion."
  },
  {
    origNum: 134,
    q: "What is natural logic?",
    opts: [
      "a. logic as it exists in nature",
      "b. pure logic without artificial concepts",
      "c. logic in natural language",
      "d. all of the above",
      "e. A and B"
    ],
    ans: 3,
    exp: "Natural logic refers to the native, intuitive capacity of human reason to think coherently and infer conclusions in ordinary language prior to formal symbolic training.",
    topic: "Natural Logic vs Formal Logic",
    chapter: "Logic and Human Reasoning",
    hint: "Innate intuitive human reasoning in everyday nature and language."
  },
  {
    origNum: 135,
    q: "The central concern of the logician is",
    opts: [
      "a. to seek truth",
      "b. to discover facts",
      "c. to reason correctly",
      "d. to establish criteria for the appraisal of argument",
      "e. to encourage argumentation"
    ],
    ans: 3,
    exp: "The logician's primary task is to develop and apply rigorous criteria and methods for evaluating arguments and distinguishing valid inferences from invalid ones.",
    topic: "Role of the Logician",
    chapter: "Logic and Human Reasoning",
    hint: "Establishing criteria to appraise arguments."
  },
  {
    origNum: 136,
    q: "A valid argument is an argument ______",
    opts: [
      "a. whose premises are related",
      "b. whose premises are the same as the conclusion",
      "c. with true propositions only",
      "d. containing false propositions only",
      "e. whose premises provide conclusive ground for its conclusion"
    ],
    ans: 4,
    exp: "In a valid deductive argument, the truth of the premises provides complete, conclusive logical justification for the conclusion.",
    topic: "Conclusiveness of Deductive Validity",
    chapter: "Logic and Human Reasoning",
    hint: "Premises provide conclusive grounds for the conclusion."
  },
  {
    origNum: 137,
    q: "A fallacy is",
    opts: [
      "a. a good argument",
      "b. sound argument",
      "c. a type of argument that may seem correct but which proves, upon examination, not to be so",
      "d. A and C",
      "e. None of the above"
    ],
    ans: 2,
    exp: "A fallacy is a flaw or error in reasoning—an argument that appears superficially plausible or persuasive but is logically defective upon critical examination.",
    topic: "Definition of Fallacy",
    chapter: "Logic and Informal Fallacies",
    hint: "An argument that seems correct but proves to be logically flawed."
  },
  {
    origNum: 138,
    q: "Argumentum ad verecundiam means",
    opts: [
      "a. appeal to force",
      "b. appeal to pity",
      "c. appeal to wrong authority",
      "d. irrelevant conclusion",
      "e. appeal to verification"
    ],
    ans: 2,
    exp: "Argumentum ad verecundiam is the informal fallacy of appealing to an unqualified, illegitimate, or irrelevant authority to validate a claim.",
    topic: "Argumentum Ad Verecundiam",
    chapter: "Logic and Informal Fallacies",
    hint: "Appeal to inappropriate/wrong authority."
  },
  {
    origNum: 139,
    q: "Punctuation in logic is important because",
    opts: [
      "a. it makes logic easy to understand",
      "b. it helps to make logic scientific",
      "c. it helps to avoid ambiguity and confusion",
      "d. it makes logic sophisticated",
      "e. all of the above"
    ],
    ans: 2,
    exp: "Parentheses and punctuation symbols in symbolic logic clearly define operator precedence and group sub-formulas, eliminating syntactical ambiguity.",
    topic: "Punctuation and Scope in Symbolic Logic",
    chapter: "Logic and Human Reasoning",
    hint: "Prevents ambiguity and confusion in logical statements."
  },
  {
    origNum: 140,
    q: "Coherence, correspondence, and pragmatic theories are regarded as",
    opts: [
      "a. the Golden theories of ethics",
      "b. the classical theories of truth",
      "c. the experimental theories of certainty",
      "d. the German theories of philosophy",
      "e. none of the above"
    ],
    ans: 1,
    exp: "Correspondence theory, Coherence theory, and Pragmatic theory are the three classical epistemological theories defining the nature of truth.",
    topic: "Classical Theories of Truth",
    chapter: "Epistemology",
    hint: "The three classical theories of truth."
  },
  {
    origNum: 141,
    q: "Philosophy originated from",
    opts: ["a. USA", "b. Athens", "c. Rome", "d. Great Britain", "e. none of the above"],
    ans: 1,
    exp: "Western philosophy originated in the ancient Greek world, flourishing prominently in the city-state of Athens (as well as Ionian colonies like Miletus).",
    topic: "Geographical Origin of Philosophy",
    chapter: "Ancient Greek Philosophy",
    hint: "Ancient Greece / Athens."
  },
  {
    origNum: 142,
    q: "Which is not a period in the history of Western Philosophy",
    opts: [
      "a. Pre-Socratic period",
      "b. Medieval period",
      "c. Modern period",
      "d. sophistry period",
      "e. None of the above"
    ],
    ans: 3,
    exp: "The standard recognized historical epochs are Ancient (Pre-Socratic and Classical), Medieval, Modern, and Contemporary. 'Sophistry period' is not a standalone historical era.",
    topic: "Historical Epochs of Philosophy",
    chapter: "History of Philosophy",
    hint: "Sophistry was a movement within ancient Greece, not a distinct historical era."
  },
  {
    origNum: 143,
    q: "Which of the following explains why there is no single universally acceptable definition of philosophy?",
    opts: [
      "a. schools of thought",
      "b. Area perspective",
      "c. dispute",
      "d. A and B",
      "e. None of the above"
    ],
    ans: 3,
    exp: "Philosophy lacks a single definition because diverse schools of thought prioritize different concerns, and philosophers define it according to their specialized perspective and methodology.",
    topic: "Diverse Perspectives in Defining Philosophy",
    chapter: "Nature and Scope of Philosophy",
    hint: "Varying schools of thought and regional/subject perspectives (A and B)."
  },
  {
    origNum: 144,
    q: "Which of the following is not a pattern in the definition of philosophy?",
    opts: [
      "a. the study of being",
      "b. the study of cognition",
      "c. the study of all that exists",
      "d. the study of experience and nature",
      "e. none of the above"
    ],
    ans: 4,
    exp: "All the listed options (study of being/ontology, study of cognition/epistemology, study of nature/experience) are established patterns of defining philosophy.",
    topic: "Approaches to Defining Philosophy",
    chapter: "Nature and Scope of Philosophy",
    hint: "All listed patterns are legitimate historical definitions."
  },
  {
    origNum: 145,
    q: "Which is not a theme in Existentialism?",
    opts: ["a. subjectivity", "b. existence precedes essence", "c. man and the gods", "d. freedom", "e. authenticity"],
    ans: 2,
    exp: "Existentialism centers on human subjectivity, radical freedom, anxiety, authenticity, and existence preceding essence, rather than theological mythologies of gods.",
    topic: "Themes of Existentialism",
    chapter: "Contemporary Philosophical Movements",
    hint: "Existentialism is human-centered; 'man and the gods' is mythological."
  },
  {
    origNum: 146,
    q: "The first set of people who offered answers to questions that others would have taken for granted in a manner akin to that ascribed to philosophy were ______",
    opts: ["a. the Germans", "b. the Americans", "c. the Greeks", "d. The Romans", "e. The Africans"],
    ans: 2,
    exp: "The ancient Greeks (beginning with the Ionian natural philosophers in 6th century BC Miletus) were the first in the Western tradition to seek naturalistic, rational explanations for the cosmos.",
    topic: "The Greeks and the Dawn of Philosophy",
    chapter: "Ancient Greek Philosophy",
    hint: "The Ancient Greeks."
  },
  {
    origNum: 147,
    q: "Which of the following is not a logical connective",
    opts: ["a. conjunction", "b. disjunction", "c. Bi-conditional", "d. equivalence", "e. none of the above"],
    ans: 4,
    exp: "Conjunction (∧), disjunction (∨), biconditional/equivalence (↔) are all valid truth-functional logical connectives; hence 'none of the above' is correct.",
    topic: "Logical Connectives",
    chapter: "Logic and Human Reasoning",
    hint: "All options are recognized logical connectives."
  },
  {
    origNum: 148,
    q: "Disjunctive syllogism is symbolized as ______",
    opts: ["a. P v q, ~p, q", "b. p>q, p, q", "c. p,q,p,q", "d. p,q,p", "e. pq, ~q, ~p"],
    ans: 0,
    exp: "Disjunctive Syllogism (modus tollendo ponens) has the logical rule: (P ∨ Q), ~P ⊢ Q (If P or Q is true, and P is false, then Q must be true).",
    topic: "Disjunctive Syllogism",
    chapter: "Logic and Human Reasoning",
    hint: "P ∨ Q, ~P ∴ Q."
  },
  {
    origNum: 149,
    q: "The law of identity asserts that",
    opts: [
      "a. truth and false means validity and invalidity",
      "b. a statement is either true or false",
      "c. no statement can be both true or false",
      "d. if a statement is true then it is true",
      "e. none of the above"
    ],
    ans: 3,
    exp: "The Law of Identity (P ≡ P or P → P) states that whatever is, is; every statement is identical to itself and if a proposition is true, then it is true.",
    topic: "Law of Identity",
    chapter: "Logic and Human Reasoning",
    hint: "A thing is identical to itself (If true, it is true)."
  },
  {
    origNum: 150,
    q: "The statement \"all humans are mortal\" is an example of",
    opts: [
      "a. universal affirmative statement",
      "b. universal negative statement",
      "c. particular affirmative statement",
      "d. particular negative statement",
      "e. existential statement"
    ],
    ans: 0,
    exp: "In categorical logic, an 'A' proposition is a Universal Affirmative statement ('All S are P').",
    topic: "Categorical Propositions: Universal Affirmative",
    chapter: "Logic and Human Reasoning",
    hint: "'All S are P' is an 'A' Universal Affirmative proposition."
  },
  {
    origNum: 151,
    q: "The statement \"Man is the measure of all things\" as a philosophical dictum is associated with",
    opts: ["a. Rene Descartes", "b. Aristotle", "c. Berkeley", "d. Protagoras of Abdera", "e. None of the above"],
    ans: 3,
    exp: "Protagoras of Abdera, the chief elder Sophist, coined the famous relativistic dictum: 'Man is the measure of all things, of things that are that they are, and of things that are not that they are not.'",
    topic: "Protagoras and Relativism",
    chapter: "Ancient Greek Philosophy",
    hint: "Protagoras of Abdera (Homo Mensura dictum)."
  },
  {
    origNum: 152,
    q: "______ is the symbol for contradiction",
    opts: ["a. p,p", "b. p, ~p", "c. p v ~p", "d. P q", "e. all of the above"],
    ans: 1,
    exp: "A contradiction in propositional logic is represented as asserting a proposition and its negation simultaneously: (p ∧ ~p).",
    topic: "Symbolic Contradiction",
    chapter: "Logic and Human Reasoning",
    hint: "p ∧ ~p (asserting both p and not-p)."
  },
  {
    origNum: 153,
    q: "The branch of philosophy which studies the nature, origin and limit of human knowledge is known as",
    opts: ["a. philosophical", "b. metaphysics", "c. epistemology", "d. logic", "e. ethics"],
    ans: 2,
    exp: "Epistemology (theory of knowledge) investigates the scope, structure, sources, limits, and justification of knowledge.",
    topic: "Definition of Epistemology",
    chapter: "Epistemology",
    hint: "Epistemology investigates the nature and limits of knowledge."
  },
  {
    origNum: 154,
    q: "Meetings of the logical positivists where they shaped their philosophical position",
    opts: [
      "a. took place in France",
      "b. took place in London",
      "c. took place in Germany",
      "d. took place in U.S.A",
      "e. took place in Vienna, Austria"
    ],
    ans: 4,
    exp: "Logical Positivism originated with the famous Vienna Circle (Wiener Kreis) meetings led by Moritz Schlick in Vienna, Austria during the 1920s.",
    topic: "Vienna Circle and Logical Positivism",
    chapter: "Contemporary Philosophical Movements",
    hint: "Vienna, Austria (The Vienna Circle)."
  },
  {
    origNum: 155,
    q: "In the nature study or cosmology, Thales thought that everything in nature was in the first place",
    opts: ["a. fire", "b. air", "c. water", "d. earth", "e. all of the above"],
    ans: 2,
    exp: "Thales argued that water is the foundational substance from which all natural entities arise and into which they dissolve.",
    topic: "Thales' Cosmology",
    chapter: "Ancient Greek Philosophy",
    hint: "Water."
  },
  {
    origNum: 156,
    q: "The main branches of philosophy are",
    opts: [
      "a. metaphysics, theology and ethics",
      "b. mathematics, epistemology and ethics",
      "c. ethics, axiology and cosmology",
      "d. metaphysics, epistemology and skepticism",
      "e. epistemology, ethics and metaphysics"
    ],
    ans: 4,
    exp: "The traditional core pillars of academic philosophy are Epistemology, Metaphysics, Ethics, and Logic.",
    topic: "Core Branches of Philosophy",
    chapter: "Branches of Philosophy",
    hint: "Epistemology, Ethics, and Metaphysics."
  },
  {
    origNum: 157,
    q: "The main teaching of Parmenides is that",
    opts: [
      "a. the world is eternally the same",
      "b. change in an illusion",
      "c. in reality nothing changes",
      "d. all of the above",
      "e. only (b) above is right"
    ],
    ans: 3,
    exp: "Parmenides of Elea taught the doctrine of static monism: Being is one, uncreated, indestructible, and unchanging; sensory change and multiplicity are mere illusions.",
    topic: "Parmenides' Static Monism",
    chapter: "Ancient Greek Philosophy",
    hint: "Being is unchanging; change is an illusion (All of the above)."
  },
  {
    origNum: 158,
    q: "In the medieval period",
    opts: [
      "a. philosophy became the tool of theology",
      "b. philosophy moved away from Greeks to Christian thinkers",
      "c. philosophy was independent",
      "d. (a) and (b) above",
      "e. none of the above"
    ],
    ans: 3,
    exp: "During the Middle Ages, philosophy served as the handmaiden of theology ('ancilla theologiae'), and intellectual leadership transitioned to Christian and Islamic scholastic thinkers.",
    topic: "Characteristics of Medieval Philosophy",
    chapter: "Medieval Philosophy",
    hint: "Handmaiden of theology + shift to Christian scholastic thinkers (A and B)."
  },
  {
    origNum: 159,
    q: "Who said Philosophy deals with clarification and language analysis?",
    opts: ["a. Paul Feyerabend", "b. Karl Popper", "c. Ludwig Wittgenstein", "d. David Hume"],
    ans: 2,
    exp: "Ludwig Wittgenstein famously asserted in the Tractatus Logico-Philosophicus that 'Philosophy is not a body of doctrine but an activity; its object is the logical clarification of thoughts.'",
    topic: "Wittgenstein and Linguistic Analysis",
    chapter: "Contemporary Philosophical Movements",
    hint: "Ludwig Wittgenstein."
  },
  {
    origNum: 160,
    q: "Rationalism as opposed to empiricism, is the Philosophical view that ____",
    opts: [
      "a. Reason and universal ideas and categories are the ultimate source of prior knowledge",
      "b. Sense perception is the source of human knowledge",
      "c. Reason plays a complementary role in the attainment of human knowledge",
      "d. Human knowledge is sense-based"
    ],
    ans: 0,
    exp: "Rationalism holds that intellect, reason, and innate ideas provide the primary foundation and justification for substantial knowledge independently of sensory experience.",
    topic: "Rationalism vs Empiricism",
    chapter: "Epistemology",
    hint: "Reason and innate ideas are the ultimate source of knowledge."
  },
  {
    origNum: 161,
    q: "The central idea of the pragmatic tradition of philosophy is ____",
    opts: [
      "a. I believe so that I may understand",
      "b. I believe so that I may reason well",
      "c. I believe so that I may not reason well",
      "d. That we should decide the truth of a belief by its utilitarian value"
    ],
    ans: 3,
    exp: "Pragmatism (developed by Peirce, James, and Dewey) assesses the truth and meaning of concepts by their practical consequences, usefulness, and workable value in experience.",
    topic: "Pragmatic Criterion of Truth",
    chapter: "Contemporary Philosophical Movements",
    hint: "Truth is judged by its practical, utilitarian efficacy."
  },
  {
    origNum: 162,
    q: "Who defined ethics as the branch of philosophy dealing with rightness or wrongness of human action with moral obligation, principles of morality and their justification?",
    opts: ["a. T. Hobbes", "b. J. Locke", "c. Brostein", "d. A. Echekwube"],
    ans: 3,
    exp: "Rev. Fr. Anthony O. Echekwube provided this definition in his influential academic textbook 'An Introduction to Ethics'.",
    topic: "Definition of Ethics",
    chapter: "Ethics and Moral Philosophy",
    hint: "A. Echekwube."
  },
  {
    origNum: 163,
    q: "Symbolic logic is intended to eliminate one of the following",
    opts: ["a. Argument", "b. Principles", "c. Ambiguity", "d. Logic"],
    ans: 2,
    exp: "Symbolic logic replaces natural language with precise algebraic symbols to eliminate vagueness, ambiguity, and emotional coloring.",
    topic: "Purpose of Symbolic Logic",
    chapter: "Logic and Human Reasoning",
    hint: "Eliminating ambiguity and vagueness."
  },
  {
    origNum: 164,
    q: "Logic is defined as the science of reasoning because it is interested in one of the following",
    opts: ["a. Psychological concern", "b. Rational justification", "c. Metaphysical concern", "d. Theological concern"],
    ans: 1,
    exp: "Logic focuses on the objective rational justification, validity, and structural coherence of inferences, rather than subjective psychological feelings.",
    topic: "Logic as Science of Rational Justification",
    chapter: "Logic and Human Reasoning",
    hint: "Rational justification."
  },
  {
    origNum: 165,
    q: "The process through which an argument can be derived is known as ____",
    opts: ["a. Systematic logic", "b. Proposition", "c. Conjunction", "d. Inference"],
    ans: 3,
    exp: "Inference is the logical mechanism through which a new statement or conclusion is systematically derived from accepted premises.",
    topic: "Derivation via Inference",
    chapter: "Logic and Human Reasoning",
    hint: "Inference."
  },
  {
    origNum: 166,
    q: "\"Do you promise to stop cheating in exams?\"",
    opts: ["a. Argumentum ad Miseericordiam", "b. Accent", "c. Complex Question", "d. Bacculum"],
    ans: 2,
    exp: "A Complex Question (plurium interrogationum) presupposes a contentious hidden assumption (that you were already cheating), creating an inescapable entrapment.",
    topic: "Fallacy of Complex Question",
    chapter: "Logic and Informal Fallacies",
    hint: "Complex Question (loaded question with hidden assumption)."
  },
  {
    origNum: 167,
    q: "\"You either buy GST Text Book or you carry over the courses\"",
    opts: ["a. Argumentum ad Bacculum", "b. Argumentum ad Verecundiam", "c. False cause", "d. Converse Accident"],
    ans: 0,
    exp: "Argumentum ad Baculum is an appeal to force or intimidation, presenting an explicit or implicit threat of penalty/coercion.",
    topic: "Argumentum Ad Baculum",
    chapter: "Logic and Informal Fallacies",
    hint: "Appeal to force / threat of penalty."
  },
  {
    origNum: 168,
    q: "Formal logic is said to correspond with ____",
    opts: ["a. Argument", "b. deductive", "c. Inductive", "d. Informal logic"],
    ans: 1,
    exp: "Formal logic deals strictly with the necessary deductive structure and valid forms of reasoning.",
    topic: "Formal vs Informal Logic",
    chapter: "Logic and Human Reasoning",
    hint: "Formal logic corresponds directly to deductive logic."
  },
  {
    origNum: 169,
    q: "____ denotes anything that causes an argument to go wrong",
    opts: ["a. Disagreement", "b. fallacy", "c. Debate", "d. Dispute"],
    ans: 1,
    exp: "A fallacy is an error in reasoning that invalidates or compromises the logical strength of an argument.",
    topic: "Nature of Fallacies",
    chapter: "Logic and Informal Fallacies",
    hint: "Fallacy."
  },
  {
    origNum: 170,
    q: "The soundness of a deductive argument is determined by its ____",
    opts: ["a. Form", "b. Validity", "c. Structure", "d. Content"],
    ans: 3,
    exp: "Soundness requires that a deductive argument not only possess valid form, but also that its material content (all premises) be factually true.",
    topic: "Soundness of Deductive Arguments",
    chapter: "Logic and Human Reasoning",
    hint: "Soundness = Valid form + True content/premises."
  },
  {
    origNum: 171,
    q: "An argument with explicative conclusion is regarded as ____",
    opts: ["a. P. ~ p", "b. P É p", "c. P ° p", "d. P v ~ p"],
    ans: 3,
    exp: "An explicative inference unpacks what is already implicit in the premises (a tautological form, represented symbolically by the Law of Excluded Middle P ∨ ~P or conditional identity).",
    topic: "Explicative Inferences and Tautology",
    chapter: "Logic and Human Reasoning",
    hint: "P ∨ ~P (tautological / explicative form)."
  },
  {
    origNum: 172,
    q: "The quality of a categorical proposition is determined by its ____",
    opts: ["a. Copula", "b. Subject-term", "c. Predicate", "d. none of the above"],
    ans: 0,
    exp: "The quality of a categorical proposition (whether it is affirmative or negative) is determined by its copula ('is' vs 'is not').",
    topic: "Quality and Copula in Categorical Logic",
    chapter: "Logic and Human Reasoning",
    hint: "The copula determines whether a proposition is affirmative or negative."
  },
  {
    origNum: 173,
    q: "The use of symbolic logic is essentially to eliminate ____ in arguments",
    opts: ["a. Complexity", "b. Particularity", "c. Ambiguity", "d. None of the above"],
    ans: 2,
    exp: "Symbolic logic translates linguistic statements into formal signs to strip away rhetorical ambiguity and emotional bias.",
    topic: "Elimination of Ambiguity in Symbolic Logic",
    chapter: "Logic and Human Reasoning",
    hint: "Ambiguity."
  },
  {
    origNum: 174,
    q: "The problems which arise for philosophers in metaphysics include:",
    opts: [
      "a. Criterion for knowledge and truth",
      "b. Being, universals and particular",
      "c. Reasoning and logic",
      "d. Human conduct and justice"
    ],
    ans: 1,
    exp: "Core metaphysical problems center on ontology: the nature of Being, substance, mind and body, time, universals, and particulars.",
    topic: "Problems of Metaphysics",
    chapter: "Metaphysics",
    hint: "Being, universals, and particulars."
  },
  {
    origNum: 175,
    q: "In Protagoras' words, \"man is the measure of all things\", this means ____",
    opts: [
      "a. Man measures the length and breaths of thing",
      "b. Man determines what is true or false",
      "c. Man is the creator of the universe",
      "d. Man is greedy in nature"
    ],
    ans: 1,
    exp: "Protagoras' dictum means that human judgment and individual perception are the sole standard for determining what is true or false, real or unreal.",
    topic: "Protagorean Epistemological Relativism",
    chapter: "Ancient Greek Philosophy",
    hint: "Man determines truth and falsity according to his perception."
  },
  {
    origNum: 176,
    q: "Pragmatism is the doctrine that the truth of a belief lies in ____",
    opts: ["a. Its metaphysical value", "b. Its practical usefulness", "c. Its explanatory value", "d. Its theoretical value"],
    ans: 1,
    exp: "Pragmatism asserts that the validity and truth of an idea or belief reside in its practical usefulness and tangible real-world consequences.",
    topic: "Pragmatic Doctrine of Truth",
    chapter: "Contemporary Philosophical Movements",
    hint: "Practical usefulness and workability."
  },
  {
    origNum: 177,
    q: "The branch of philosophy called Epistemology is the same thing as ____",
    opts: ["a. the study of what is not", "b. The study of students that are out of school", "c. The theory of knowledge", "d. Belief or disjunctions"],
    ans: 2,
    exp: "Epistemology is defined universally as the Theory of Knowledge.",
    topic: "Epistemology as Theory of Knowledge",
    chapter: "Epistemology",
    hint: "Theory of knowledge."
  },
  {
    origNum: 178,
    q: "Critical philosophy seeks to do ____",
    opts: [
      "a. Induction of concepts in other discipline(s)",
      "b. Analyses and clarifies the concepts of other disciplines",
      "c. Conflict the concepts of other disciplines",
      "d. Fight the concepts of other discipline"
    ],
    ans: 1,
    exp: "Critical philosophy interrogates, analyzes, and clarifies the foundational concepts, methods, and assumptions of other disciplines.",
    topic: "Critical Philosophy",
    chapter: "Nature and Scope of Philosophy",
    hint: "Analyses and clarifies concepts of other disciplines."
  },
  {
    origNum: 179,
    q: "One of the prominent philosophers of the rationalist tradition is?",
    opts: ["a. Averroes", "b. Thomas Aquinas", "c. Rene Descartes", "d. William James"],
    ans: 2,
    exp: "René Descartes is recognized as the father of modern Continental Rationalism, alongside Spinoza and Leibniz.",
    topic: "Descartes and Rationalism",
    chapter: "Modern Philosophy",
    hint: "René Descartes."
  },
  {
    origNum: 180,
    q: "One of the major branches of philosophy is ____",
    opts: ["a. Plato", "b. Ontology", "c. Phenomenology", "d. Pragmatic tradition"],
    ans: 1,
    exp: "Ontology (the science or philosophical study of Being and ultimate reality) is a primary subdivision of Metaphysics.",
    topic: "Ontology as Branch of Philosophy",
    chapter: "Branches of Philosophy",
    hint: "Ontology."
  },
  {
    origNum: 181,
    q: "Philosophy as human discipline grew out of the Greek culture in the thought of ____",
    opts: [
      "a. Plato and Aristotle",
      "b. Pythagoras and Socrates",
      "c. I. C. Onyewueryi",
      "d. Rene Descartes and Russel"
    ],
    ans: 1,
    exp: "Pythagoras coined the term 'philosophia' (love of wisdom) and Socrates gave it a transformative moral and dialectical direction in classical Greek culture.",
    topic: "Origins in Greek Culture",
    chapter: "Ancient Greek Philosophy",
    hint: "Pythagoras and Socrates."
  },
  {
    origNum: 182,
    q: "Validity of an argument is dependent on its ____",
    opts: ["a. Soundness", "b. Form", "c. Content", "d. Figure"],
    ans: 1,
    exp: "Validity is strictly a formal property; it depends entirely on the logical form and deductive structure of the argument.",
    topic: "Formal Validity",
    chapter: "Logic and Human Reasoning",
    hint: "Form."
  },
  {
    origNum: 183,
    q: "The proposition that is claimed on the basis of other propositions is known as ____",
    opts: ["a. Conclusion", "b. Inference", "c. Deductive", "d. All of the above"],
    ans: 0,
    exp: "The conclusion is the statement in an argument that is affirmed on the basis of the supporting premises.",
    topic: "Structure of an Argument: Conclusion",
    chapter: "Logic and Human Reasoning",
    hint: "Conclusion."
  },
  {
    origNum: 184,
    q: "An argument that goes beyond the evidence provided in the premises is termed ____",
    opts: ["a. Invalid", "b. Inductive", "c. Structure", "d. None of the above"],
    ans: 1,
    exp: "An inductive argument produces a conclusion whose informational content goes beyond the scope of evidence in the premises, making it probabilistic rather than strictly necessary.",
    topic: "Inductive Ampliative Logic",
    chapter: "Logic and Human Reasoning",
    hint: "Inductive reasoning (ampliative leap beyond premises)."
  },
  {
    origNum: 185,
    q: "Fallacies of relevance and ambiguity arise only from ____",
    opts: ["a. Formal logic", "b. Deductive argument", "c. Informal logic", "d. All of the above"],
    ans: 2,
    exp: "Fallacies of relevance, ambiguity, and presumption are categories of Informal Fallacies, arising in natural language argumentation.",
    topic: "Informal Fallacies",
    chapter: "Logic and Informal Fallacies",
    hint: "Informal logic."
  },
  {
    origNum: 186,
    q: "Fallacies of ambiguity can be avoided through ____",
    opts: ["a. Logic", "b. Argument", "c. Definition", "d. Laws of thought"],
    ans: 2,
    exp: "Fallacies of ambiguity (such as equivocation and amphiboly) are prevented by clear, precise, and unambiguous definitions of key terms.",
    topic: "Preventing Ambiguity Through Definition",
    chapter: "Logic and Informal Fallacies",
    hint: "Precise definition of terms."
  },
  {
    origNum: 187,
    q: "Utilitarianism is either act or ____",
    opts: ["a. Gentle", "b. Authorized", "c. Rule", "d. Hypothetical"],
    ans: 2,
    exp: "In normative ethics, Utilitarianism is conventionally divided into Act Utilitarianism (evaluating individual acts) and Rule Utilitarianism (evaluating general moral rules).",
    topic: "Divisions of Utilitarianism",
    chapter: "Ethics and Moral Philosophy",
    hint: "Act Utilitarianism vs Rule Utilitarianism."
  },
  {
    origNum: 188,
    q: "The word \"philosophy\" is derived from the Greek words namely ____",
    opts: ["a. Wisdom and love", "b. Knowledge and Love", "c. Philos and Sophia", "d. Sophia and Philos"],
    ans: 2,
    exp: "Philosophy originates from the Greek 'Philos' (loving/friendship) and 'Sophia' (wisdom).",
    topic: "Greek Etymology of Philosophy",
    chapter: "Nature and Scope of Philosophy",
    hint: "Philos and Sophia."
  },
  {
    origNum: 189,
    q: "Logic is a ____ to philosophy just as mathematics is to basic sciences.",
    opts: ["a. Branch", "b. Houses", "c. Tool", "d. None of the above"],
    ans: 2,
    exp: "Aristotle titled his logical treatises the 'Organon' (instrument/tool), establishing logic as the indispensable methodological tool for philosophical inquiry.",
    topic: "Logic as the Tool (Organon) of Philosophy",
    chapter: "Logic and Human Reasoning",
    hint: "Tool (Organon)."
  },
  {
    origNum: 190,
    q: "The conscious act of thinking before one speaks is regarded as ____",
    opts: ["a. Ethical", "b. Principle", "c. Geometrical", "d. Logical"],
    ans: 3,
    exp: "Engaging deliberate, coherent, and reasoned thought prior to verbal expression is the hallmark of logical thinking.",
    topic: "Practical Logical Reflection",
    chapter: "Logic and Human Reasoning",
    hint: "Logical."
  },
  {
    origNum: 191,
    q: "Logic is derived from ____ word.",
    opts: ["a. Spanish", "b. Arabic", "c. Greek", "d. Esan"],
    ans: 2,
    exp: "The word 'logic' is derived from the Greek term 'logos' (meaning reason, word, study, or discourse).",
    topic: "Etymology of Logic",
    chapter: "Logic and Human Reasoning",
    hint: "Greek (logos)."
  },
  {
    origNum: 192,
    q: "Logic is not interested in ____",
    opts: ["a. Correct reasoning", "b. Decet", "c. Argument", "d. All of the above"],
    ans: 1,
    exp: "Logic aims to uncover valid, sound, and truthful reasoning structures, rejecting deceit and deliberate sophistry.",
    topic: "Integrity of Logic",
    chapter: "Logic and Human Reasoning",
    hint: "Deceit (Decet)."
  },
  {
    origNum: 193,
    q: "An argument could be valid yet not sound.",
    opts: ["a. False", "b. We were not taught", "c. True", "d. No Idea"],
    ans: 2,
    exp: "True. A deductive argument can have a perfectly valid logical form while containing factually false premises, which renders it unsound.",
    topic: "Validity vs Soundness",
    chapter: "Logic and Human Reasoning",
    hint: "True (Validity does not guarantee true premises)."
  },
  {
    origNum: 194,
    q: "Logic is defined as the science of ____",
    opts: ["a. Psychological interest", "b. Metaphysical Interest", "c. Rational interest", "d. Theological interest"],
    ans: 2,
    exp: "Logic is the systematic science of rational justification and principles of correct inference.",
    topic: "Definition of Logic",
    chapter: "Logic and Human Reasoning",
    hint: "Rational interest / rational reasoning."
  },
  {
    origNum: 195,
    q: "The founder of empiricism is",
    opts: ["a. John Locke", "b. David Hume", "c. Francis Bacon", "d. None of the above"],
    ans: 0,
    exp: "John Locke is traditionally heralded as the systematic founder of modern British Empiricism through his 'Essay Concerning Human Understanding' (while Francis Bacon pioneered the inductive scientific method).",
    topic: "Founders of Empiricism",
    chapter: "Modern Philosophy",
    hint: "John Locke."
  },
  {
    origNum: 196,
    q: "______ period moved from idealism to materialism",
    opts: ["a. Ancient period", "b. Contemporary period", "c. Modern period", "d. Medieval period", "e. None of the above"],
    ans: 2,
    exp: "The Modern period witnessed a decisive transition from scholastic spiritual idealism to scientific materialism, empiricism, and mechanical philosophy.",
    topic: "Transition to Materialism",
    chapter: "Modern Philosophy",
    hint: "Modern period."
  },
  {
    origNum: 197,
    q: "______ is a philosophical position that denies the possibility of knowledge",
    opts: ["a. Skepticism", "b. Existentialism", "c. Empiricism", "d. Rationalism"],
    ans: 0,
    exp: "Skepticism (from Pyrrho to modern skeptics) questions or denies the possibility of attaining certain or objective knowledge.",
    topic: "Philosophical Skepticism",
    chapter: "Epistemology",
    hint: "Skepticism."
  },
  {
    origNum: 198,
    q: "Who considered wisdom to be possession of God or gods alone",
    opts: ["a. Pythagoras", "b. Protagoras", "c. Socrates", "d. Aristotle", "e. St Thomas"],
    ans: 0,
    exp: "Pythagoras modestly stated that no mortal man is wise, for wisdom belongs only to the gods; mortals can only be lovers of wisdom (philosophers).",
    topic: "Pythagoras on Wisdom and the Gods",
    chapter: "Ancient Greek Philosophy",
    hint: "Pythagoras."
  },
  {
    origNum: 199,
    q: "A lover of wisdom is called",
    opts: ["a. Philosophy", "b. Philosopher", "c. Philosopher", "d. Philosopher"],
    ans: 1,
    exp: "A person who loves, seeks, and pursues wisdom is a philosopher (philosophos).",
    topic: "Definition of a Philosopher",
    chapter: "Nature and Scope of Philosophy",
    hint: "Philosopher."
  },
  {
    origNum: 200,
    q: "The Greek poets that offered explanation on the origin of gods are",
    opts: ["a. Horror & Socrates", "b. Homer & Hesiod", "c. Homer & Hesiod", "d. Homer & Pythagoras"],
    ans: 1,
    exp: "Homer (author of Iliad and Odyssey) and Hesiod (author of Theogony) provided mythological and poetic accounts of the origin of the gods before philosophy emerged.",
    topic: "Pre-Philosophical Greek Poets",
    chapter: "Ancient Greek Philosophy",
    hint: "Homer and Hesiod."
  },
  {
    origNum: 201,
    q: "The first to ask for the rational explanation of reality ______ of Miletus",
    opts: ["a. Pythagoras", "b. Protagoras", "c. Thales", "d. None of the above", "e. Socrates"],
    ans: 2,
    exp: "Thales of Miletus was the first thinker in recorded history to propose naturalistic, rational explanations of reality rather than invoking mythological deities.",
    topic: "Thales the First Philosopher",
    chapter: "Ancient Greek Philosophy",
    hint: "Thales of Miletus."
  },
  {
    origNum: 202,
    q: "The two philosophers whose answers led to classification of philosophy are ______ and ______",
    opts: ["a. Plato & Socrates", "b. Plato & Aristotle", "c. Aristotle & Socrates", "d. Plato & Thales", "e. Thales & Socrates"],
    ans: 1,
    exp: "Plato and Aristotle systematically cataloged, structured, and classified the branches of philosophy (Logic, Physics/Metaphysics, Ethics, and Politics).",
    topic: "Plato and Aristotle's Classification",
    chapter: "Ancient Greek Philosophy",
    hint: "Plato and Aristotle."
  },
  {
    origNum: 203,
    q: "______ period explained through the intervention of the gods and goddesses",
    opts: ["a. Modern period", "b. Classical period", "c. Contemporary period", "d. Ancient period"],
    ans: 3,
    exp: "The early mythological epoch preceding and during early ancient times explained natural and cosmic events through the actions of anthropomorphic gods and goddesses.",
    topic: "Mythological Era in Ancient Times",
    chapter: "Ancient Greek Philosophy",
    hint: "Ancient mythological era."
  },
  {
    origNum: 204,
    q: "Ancient period consist of ______ and ______ stage",
    opts: ["a. Classical and contemporary", "b. Classical and modern", "c. Socratic and pre-socratic", "d. Socratic and classical"],
    ans: 2,
    exp: "The Ancient Greek period is historically divided into the Pre-Socratic era (cosmological focus) and the Socratic/Classical era (anthropological, ethical, and metaphysical focus).",
    topic: "Divisions of Ancient Philosophy",
    chapter: "Ancient Greek Philosophy",
    hint: "Pre-Socratic and Socratic stages."
  },
  {
    origNum: 205,
    q: "The first to ask for the rational explanation of reality was",
    opts: ["a. Thales", "b. Plato", "c. Anaximander", "d. Protagoras"],
    ans: 0,
    exp: "Thales of Miletus is unanimously recognized as the pioneer of naturalistic rational inquiry.",
    topic: "Thales and Rational Inquiry",
    chapter: "Ancient Greek Philosophy",
    hint: "Thales."
  },
  {
    origNum: 206,
    q: "______ were the first exponents of new intellectual trend about man and society.",
    opts: ["a. Rationalist", "b. Sophist", "c. Pragmatist", "d. Existentialist"],
    ans: 1,
    exp: "The Sophists shifted philosophical inquiry from nature/cosmology to human culture, ethics, rhetoric, and society in 5th-century BC Greece.",
    topic: "The Sophists and Humanism",
    chapter: "Ancient Greek Philosophy",
    hint: "The Sophists."
  },
  {
    origNum: 207,
    q: "The first systematic ontology was presented by ______ metaphysics",
    opts: ["a. Aristotle", "b. Plato", "c. Thales", "d. Protagoras"],
    ans: 0,
    exp: "Aristotle's Metaphysics formulated the first comprehensive ontology—the study of 'Being qua Being' (being as being) and substance.",
    topic: "Aristotelian Ontology",
    chapter: "Ancient Greek Philosophy",
    hint: "Aristotle's Metaphysics."
  },
  {
    origNum: 208,
    q: "The period in which faith precedes is ______ period",
    opts: ["a. Modern", "b. Medieval", "c. Contemporary", "d. Ancient"],
    ans: 1,
    exp: "In the Medieval period, theological faith held primacy over reason ('faith seeking understanding').",
    topic: "Faith in Medieval Philosophy",
    chapter: "Medieval Philosophy",
    hint: "Medieval period."
  },
  {
    origNum: 209,
    q: "The period in which reason precedes faith",
    opts: ["a. Medieval", "b. Modern", "c. Ancient", "d. Contemporary"],
    ans: 1,
    exp: "The Modern period (Age of Enlightenment) championed independent human reason, secular science, and autonomous critique over religious dogma.",
    topic: "Primac of Reason in Modern Philosophy",
    chapter: "Modern Philosophy",
    hint: "Modern period."
  },
  {
    origNum: 210,
    q: "The man that traced all ideas to experience is ______",
    opts: ["a. John Locke", "b. St Aquinas", "c. Duns Scotus Eriugena", "d. Baruch Spinoza"],
    ans: 0,
    exp: "John Locke asserted that the mind is a tabula rasa (blank slate) and all simple and complex ideas derive ultimately from experience (sensation and reflection).",
    topic: "John Locke and Empirical Ideas",
    chapter: "Modern Philosophy",
    hint: "John Locke."
  },
  {
    origNum: 211,
    q: "The school of thought that was against rationalism",
    opts: ["a. Empiricism", "b. Pragmatism", "c. Existentialism", "d. None of the above", "e. All of the above"],
    ans: 0,
    exp: "Empiricism stood in direct philosophical opposition to Rationalism, arguing that sensory perception, not innate reason, is the foundational origin of all knowledge.",
    topic: "Empiricism vs Rationalism",
    chapter: "Epistemology",
    hint: "Empiricism."
  },
  {
    origNum: 212,
    q: "______ believes that experience is the true source of knowledge",
    opts: ["a. Pragmatism", "b. Rationalism", "c. Empiricism", "d. Existentialism"],
    ans: 2,
    exp: "Empiricism maintains that all knowledge is founded on and justified through experiential and sensory evidence.",
    topic: "Empiricism",
    chapter: "Epistemology",
    hint: "Empiricism."
  },
  {
    origNum: 213,
    q: "______ reconciled reason and experience as a source of knowledge",
    opts: ["a. Rene Descartes", "b. Gottfried Leibniz", "c. John Locke", "d. Immanuel Kant"],
    ans: 3,
    exp: "Immanuel Kant synthesized rationalism and empiricism in his Critique of Pure Reason: 'Thoughts without content are empty, intuitions without concepts are blind.'",
    topic: "Kantian Critical Synthesis",
    chapter: "Modern Philosophy",
    hint: "Immanuel Kant."
  },
  {
    origNum: 214,
    q: "______ period moved from idealism to materialism",
    opts: ["a. Contemporary", "b. Modern", "c. Ancient", "d. Medieval"],
    ans: 1,
    exp: "The Modern era experienced a radical shift away from classical/medieval idealism toward scientific materialism and physicalist philosophies.",
    topic: "Modern Shift to Materialism",
    chapter: "Modern Philosophy",
    hint: "Modern period."
  },
  {
    origNum: 215,
    q: "The father of existentialism is",
    opts: ["a. David Hume", "b. Francis Bacon", "c. Fredrick Nietzsche"],
    ans: 2,
    exp: "Friedrich Nietzsche (along with Søren Kierkegaard) is widely recognized as the foundational progenitor of modern existential thought.",
    topic: "Founders of Existentialism",
    chapter: "Contemporary Philosophical Movements",
    hint: "Friedrich Nietzsche (or Søren Kierkegaard)."
  },
  {
    origNum: 216,
    q: "In the 5th century, the doubt that surfaced the possibility of knowledge is",
    opts: ["a. Skepticism", "b. Rationalism", "c. Empiricism", "d. Pragmatism"],
    ans: 0,
    exp: "The 5th century BC Sophistic movement and subsequent Pyrrhonian schools introduced radical epistemological Skepticism regarding the certainty of human knowledge.",
    topic: "Rise of Skepticism",
    chapter: "Ancient Greek Philosophy",
    hint: "Skepticism."
  },
  {
    origNum: 217,
    q: "The process of deriving one statement on the basis of others is",
    opts: ["a. Argument", "b. Logic", "c. Premise", "d. Deductive argument"],
    ans: 0,
    exp: "An argument is a group of propositions wherein one (the conclusion) is derived or claimed to follow on the basis of others (the premises).",
    topic: "Nature of an Argument",
    chapter: "Logic and Human Reasoning",
    hint: "Argument / Inference."
  },
  {
    origNum: 218,
    q: "The term philosophy was coined by",
    opts: ["a. Protagoras", "b. Pythagoras", "c. Pathagoras", "d. Thales"],
    ans: 1,
    exp: "Pythagoras of Samos was the first to coin and use the term 'philosophia' (love of wisdom) and call himself a 'philosophos' (lover of wisdom).",
    topic: "Pythagoras and the Word Philosophy",
    chapter: "Ancient Greek Philosophy",
    hint: "Pythagoras."
  },
  {
    origNum: 219,
    q: "The first philosophers are called",
    opts: ["a. Milesian", "b. Egyptians", "c. Sophist", "d. Rationalist"],
    ans: 0,
    exp: "The earliest Western philosophers were the Milesians (Thales, Anaximander, Anaximenes) from the Ionian city of Miletus.",
    topic: "Milesian Philosophers",
    chapter: "Ancient Greek Philosophy",
    hint: "Milesians."
  },
  {
    origNum: 220,
    q: "The founder of milesian school of philosophy",
    opts: ["a. Protagoras", "b. Pythagoras", "c. Thales", "d. Plato"],
    ans: 2,
    exp: "Thales of Miletus founded the Milesian school around 585 BC.",
    topic: "Thales Founder of Milesian School",
    chapter: "Ancient Greek Philosophy",
    hint: "Thales."
  },
  {
    origNum: 221,
    q: "\"The origin or cause of reality was numbers\" the statement can be associated to",
    opts: ["a. Protagoras", "b. Rene Descartes", "c. Pythagoras", "d. None of the above"],
    ans: 2,
    exp: "Pythagoras and the Pythagoreans held that reality is fundamentally mathematical and 'all things are numbers'.",
    topic: "Pythagorean Number Metaphysics",
    chapter: "Ancient Greek Philosophy",
    hint: "Pythagoras."
  },
  {
    origNum: 222,
    q: "The philosophers who stood in complete opposition to the teaching of the sophist are ______ and ______",
    opts: [
      "a. Socrates, Thales, Plato",
      "b. Socrates, Plato, Aristotle",
      "c. Thales, Aristotle, Democritus",
      "d. Plato, Democritus, Thales",
      "e. None of the above"
    ],
    ans: 1,
    exp: "Socrates, Plato, and Aristotle vehemently opposed the relativistic skepticism and commercial rhetoric of the Sophists, defending objective truth and virtue.",
    topic: "Classical Opposition to Sophism",
    chapter: "Ancient Greek Philosophy",
    hint: "Socrates, Plato, and Aristotle."
  },
  {
    origNum: 223,
    q: "The philosopher that see philosophy as the disease of what should be cured are",
    opts: [
      "a. Gottlob Frege, Ludwig Wittgenstein, Bertrand Russell",
      "b. Immanuel Kant, David Hume, Bishop Berkeley",
      "c. John Locke, Immanuel Kant, Gottlob Frege",
      "d. Soren Kierkegaard, David Hume, Gottlob Frege"
    ],
    ans: 0,
    exp: "Linguistic and analytical philosophers (notably Ludwig Wittgenstein, Gottlob Frege, and Bertrand Russell) viewed philosophical confusions as diseases of language to be cured by logical analysis.",
    topic: "Therapeutic View of Philosophy in Linguistic Analysis",
    chapter: "Contemporary Philosophical Movements",
    hint: "Frege, Wittgenstein, and Russell."
  },
  {
    origNum: 224,
    q: "The statement \"man is that which he makes of himself\" is made by",
    opts: ["a. Soren Kierkegaard", "b. Socrates", "c. Thales", "d. Sartre", "e. Plato"],
    ans: 3,
    exp: "Jean-Paul Sartre stated in Existentialism is a Humanism that 'man is nothing else but that which he makes of himself.'",
    topic: "Sartre and Human Self-Creation",
    chapter: "Contemporary Philosophical Movements",
    hint: "Jean-Paul Sartre."
  },
  {
    origNum: 225,
    q: "\"all those who say that man evolved from age like Darwin will surely burn in hell\" the foregoing is an illustration of what sort of fallacy",
    opts: [
      "a. Ignoratio elenchi",
      "b. False cause",
      "c. Hominen abusive",
      "d. Hominen circumstantial",
      "e. None of the above"
    ],
    ans: 2,
    exp: "This statement commits an abusive ad hominem / appeal to fear and abuse against proponents of evolutionary theory rather than examining scientific evidence.",
    topic: "Ad Hominem Abusive / Appeal to Fear",
    chapter: "Logic and Informal Fallacies",
    hint: "Ad Hominem Abusive."
  },
  {
    origNum: 226,
    q: "\"man has better comply with the UN regulations or it will be completely destroyed\" the foregoing is a good illustration of what fallacy?",
    opts: ["a. Hominen abusive", "b. Hominen circumstantial", "c. Baculum", "d. Verecundiam", "e. Misericordiam"],
    ans: 2,
    exp: "Argumentum ad Baculum is the fallacy of appealing to force, coercion, or catastrophic destruction instead of providing rational grounds.",
    topic: "Argumentum Ad Baculum",
    chapter: "Logic and Informal Fallacies",
    hint: "Ad Baculum (appeal to force/threat of destruction)."
  },
  {
    origNum: 227,
    q: "The fallacy argumentum ad populum is otherwise known as",
    opts: ["a. Appeal to force", "b. Appeal to reason", "c. Bandwagon effect", "d. Appeal to pity", "e. None of the above"],
    ans: 2,
    exp: "Argumentum ad populum (appeal to the masses) is commonly known as the Bandwagon fallacy or appeal to popular sentiment.",
    topic: "Argumentum Ad Populum",
    chapter: "Logic and Informal Fallacies",
    hint: "Bandwagon effect (appeal to the masses)."
  },
  {
    origNum: 228,
    q: "The basic problem of philosophy is",
    opts: ["a. Physics", "b. Chemistry", "c. Language", "d. History", "e. Philosophy"],
    ans: 4,
    exp: "Philosophy's most foundational puzzle is interrogating its own nature, limits, and justification—the problem of philosophy itself.",
    topic: "Foundational Problem of Philosophy",
    chapter: "Nature and Scope of Philosophy",
    hint: "Philosophy itself."
  },
  {
    origNum: 229,
    q: "The fallacy of ignoratio elenchi results into what kind of situation",
    opts: [
      "a. Begging the question",
      "b. Irrelevant conclusion",
      "c. Attacking the straw",
      "d. Blackmail",
      "e. Appeal to force"
    ],
    ans: 1,
    exp: "Ignoratio Elenchi literally means 'ignorance of the refutation' and results in establishing an Irrelevant Conclusion that diverts from the core issue.",
    topic: "Ignoratio Elenchi",
    chapter: "Logic and Informal Fallacies",
    hint: "Irrelevant conclusion."
  },
  {
    origNum: 230,
    q: "The essential purpose of logic to human existence is to",
    opts: [
      "a. Provide a plan of action",
      "b. Provide the structure of thinking",
      "c. (a) and (b) above",
      "d. Only (b) above"
    ],
    ans: 2,
    exp: "Logic trains the mind in coherent structural reasoning (b) and guides rational decision-making and plans of action in human life (a).",
    topic: "Practical and Theoretical Value of Logic",
    chapter: "Logic and Human Reasoning",
    hint: "Provides both structural thinking and rational action planning (A and B)."
  },
  {
    origNum: 231,
    q: "What principle of thought states that a thing is what it is and no other thing?",
    opts: ["a. Identity", "b. Contradiction", "c. Excluded middle", "d. All of the above", "e. None of the above"],
    ans: 0,
    exp: "The Law of Identity states that everything is identical to itself and distinct from other things (A is A).",
    topic: "Law of Identity",
    chapter: "Logic and Human Reasoning",
    hint: "Law of Identity (A is A)."
  },
  {
    origNum: 232,
    q: "What principle of thought states that a thing is what it is and no other thing?",
    opts: ["a. Identity", "b. Contradiction", "c. Excluded middle", "d. All of the above", "e. None of the above"],
    ans: 0,
    exp: "The Law of Identity asserts that every entity is identical with itself and nothing else.",
    topic: "Law of Identity",
    chapter: "Logic and Human Reasoning",
    hint: "Identity."
  },
  {
    origNum: 233,
    q: "Symbolically speaking the statement \"being is non being is not\" can be represented thus",
    opts: ["a. P p", "b. P q", "c. Q p", "d. A-W", "e. None of the above"],
    ans: 0,
    exp: "Parmenides' formulation 'Being is (P), Non-Being is not (~P)' corresponds logically to the self-identity of being: P ≡ P (represented here as P p).",
    topic: "Parmenidean Being in Symbolic Form",
    chapter: "Ancient Greek Philosophy",
    hint: "P p (Identity of Being)."
  },
  {
    origNum: 234,
    q: "How is the law of contradiction represented symbolically?",
    opts: [
      "a. That p, ~p cannot be",
      "b. That p, ~p is correct",
      "c. That p, ~p is valid",
      "d. That p, ~p is possible",
      "e. None of the above"
    ],
    ans: 0,
    exp: "The Law of Contradiction asserts that 'p and not-p cannot be' simultaneously true: ~(p ∧ ~p).",
    topic: "Symbolic Representation of Non-Contradiction",
    chapter: "Logic and Human Reasoning",
    hint: "p and ~p cannot be simultaneously true."
  },
  {
    origNum: 235,
    q: "By the rule of excluded middle of the symbolic statement p v ~p is",
    opts: ["a. True", "b. False", "c. Both true and false", "d. Simply contradictory", "e. Impossible"],
    ans: 0,
    exp: "Under the Law of Excluded Middle, any proposition must be either true or false; therefore (p ∨ ~p) is a tautology and always strictly True.",
    topic: "Law of Excluded Middle as Tautology",
    chapter: "Logic and Human Reasoning",
    hint: "Always True (Tautology)."
  },
  {
    origNum: 236,
    q: "The adoption of the principle of verification as the criterion of meaningfulness is credited to",
    opts: ["a. Existentialists", "b. Inductivists", "c. Pragmatists", "d. Logical positivists", "e. Empiricists"],
    ans: 3,
    exp: "Logical Positivists of the Vienna Circle established the Verification Principle of Meaning, asserting that a proposition is cognitively meaningful only if it is empirically verifiable or analytic.",
    topic: "Logical Positivism and Verificationism",
    chapter: "Contemporary Philosophical Movements",
    hint: "Logical Positivists."
  },
  {
    origNum: 237,
    q: "Which of these is a type of knowledge",
    opts: [
      "a. Knowledge apriori",
      "b. Knowledge aposteriori",
      "c. Synthetic apriori knowledge",
      "d. All of the above",
      "e. None of the above"
    ],
    ans: 3,
    exp: "Epistemology distinguishes A Priori knowledge, A Posteriori knowledge, and (in Kantian philosophy) Synthetic A Priori knowledge.",
    topic: "Types of Knowledge",
    chapter: "Epistemology",
    hint: "All of the above."
  },
  {
    origNum: 238,
    q: "Simple statement can be",
    opts: [
      "a. Said to consist of a subject term and a predicate term",
      "b. Affirmative or negative",
      "c. Universal or existential",
      "d. All of the above",
      "e. None of the above"
    ],
    ans: 3,
    exp: "In categorical logic, a simple statement consists of subject and predicate terms, has quality (affirmative/negative), and has quantity (universal/existential/particular).",
    topic: "Characteristics of Categorical Statements",
    chapter: "Logic and Human Reasoning",
    hint: "All of the above."
  },
  {
    origNum: 239,
    q: "Argument as a reasoning process consist of the",
    opts: [
      "a. Inferential procedure",
      "b. Inductive procedure only",
      "c. Deductive procedure only",
      "d. Deductive and inductive procedures",
      "e. None of the above"
    ],
    ans: 3,
    exp: "Reasoning procedures in logic comprise both Deductive and Inductive argumentation pathways.",
    topic: "Deductive and Inductive Procedures",
    chapter: "Logic and Human Reasoning",
    hint: "Deductive and inductive procedures."
  },
  {
    origNum: 240,
    q: "Universals are",
    opts: ["a. Class names", "b. Universal concepts", "c. General names", "d. All of the above", "e. None of the above"],
    ans: 3,
    exp: "In metaphysics and logic, universals refer to repeatable general concepts, class names, and common properties shared across particular objects.",
    topic: "Metaphysical Problem of Universals",
    chapter: "Metaphysics",
    hint: "All of the above (class names, general concepts, common terms)."
  },
  {
    origNum: 241,
    q: "The central teaching of pragmatism is that an idea or theory is meaningful if it has",
    opts: [
      "a. Cash value",
      "b. A capacity to solve practical human problems",
      "c. Practical results",
      "d. All of the above",
      "e. None of the above"
    ],
    ans: 3,
    exp: "Pragmatism (notably William James) defines truth and meaning by practical results, problem-solving capacity, and experiential 'cash-value'.",
    topic: "Pragmatic Meaning and Cash Value",
    chapter: "Contemporary Philosophical Movements",
    hint: "All of the above."
  },
  {
    origNum: 242,
    q: "What is the subject-matter of logic?",
    opts: ["a. Symbols", "b. Language", "c. Arguments", "d. Proposition", "e. Inference"],
    ans: 2,
    exp: "The fundamental subject-matter of logic is the analysis and appraisal of arguments to determine their validity or strength.",
    topic: "Subject Matter of Logic",
    chapter: "Logic and Human Reasoning",
    hint: "Arguments."
  },
  {
    origNum: 243,
    q: "In determining the subject-matter of logic, we identify",
    opts: [
      "a. Psychology and anthropology",
      "b. Language and arguments",
      "c. Reasoning and sensation",
      "d. Thinking and sensation",
      "e. All of the above"
    ],
    ans: 1,
    exp: "Logic operates upon language (the vehicle of propositions) to evaluate the structure of arguments.",
    topic: "Language and Arguments in Logic",
    chapter: "Logic and Human Reasoning",
    hint: "Language and arguments."
  },
  {
    origNum: 244,
    q: "Which is the odd one out?",
    opts: ["a. ( )", "b. (v)", "c. (~)", "d. (f)"],
    ans: 3,
    exp: "Parentheses ( ), disjunction (v), and negation (~) are standard structural logical operators/punctuations; (f) represents a truth value (false) rather than an operator.",
    topic: "Logical Operators vs Truth Values",
    chapter: "Logic and Human Reasoning",
    hint: "(f) is a truth value, whereas the others are operators/punctuations."
  },
  {
    origNum: 245,
    q: "P → q, p, ∴ q, the above symbolic representation is known as",
    opts: [
      "a. Modus rollens MT",
      "b. Modus ponens MP",
      "c. Hypothetical syllogism HS",
      "d. Absorption ABS",
      "e. None of the above"
    ],
    ans: 1,
    exp: "Modus Ponens (the mode of affirming) is the valid deductive rule: P → Q, P ⊢ Q.",
    topic: "Modus Ponens",
    chapter: "Logic and Human Reasoning",
    hint: "Modus Ponens (MP)."
  },
  {
    origNum: 246,
    q: "Validity is to ______ logic what correctness is to ______ logic",
    opts: [
      "a. Ambiguity, relevance",
      "b. Induction, deduction",
      "c. Deduction, induction",
      "d. All of the above",
      "e. None of the above"
    ],
    ans: 2,
    exp: "Validity evaluates deductive arguments (formal necessity), while correctness/strength evaluates inductive arguments (probabilistic support).",
    topic: "Deductive Validity vs Inductive Correctness",
    chapter: "Logic and Human Reasoning",
    hint: "Validity relates to deduction; correctness/strength to induction."
  },
  {
    origNum: 247,
    q: "The position of the ordinary language philosophers is that",
    opts: [
      "a. Language is a picture of reality",
      "b. Philosophical problems arise out of bad grammar",
      "c. Clarification of the use of concepts leads to the avoidance of ambiguities and obscurities and confusion",
      "d. All of the above",
      "e. None of the above"
    ],
    ans: 3,
    exp: "Ordinary Language Philosophy (Austin, Ryle, late Wittgenstein) holds that philosophical perplexities stem from linguistic misuses, and clarification of everyday usage resolves them.",
    topic: "Ordinary Language Philosophy",
    chapter: "Contemporary Philosophical Movements",
    hint: "All of the above."
  },
  {
    origNum: 248,
    q: "Some of the radical movement that sprang up in the contemporary period included",
    opts: [
      "a. Logical positivism and pragmatism",
      "b. Philosophy of analysis and existentialism",
      "c. Aristotelianism, existentialism and consciencism",
      "d. Only (a) and (b) are correct",
      "e. None of the above"
    ],
    ans: 3,
    exp: "Contemporary philosophy is defined by radical revolutions including Logical Positivism, Pragmatism, Analytic Philosophy, and Existentialism (A and B).",
    topic: "Contemporary Philosophical Movements",
    chapter: "Contemporary Philosophical Movements",
    hint: "Only (a) and (b) are correct."
  },
  {
    origNum: 249,
    q: "When is an argument said to be complete?",
    opts: [
      "a. When its formal structure is said to be valid",
      "b. When its formal structure is said to be correct",
      "c. When its formal structure is both valid and correct",
      "d. When its formal structure coheres with its material content",
      "e. All of the above"
    ],
    ans: 3,
    exp: "An argument is comprehensively complete and sound when its formal logical structure is valid and seamlessly harmonizes with true material content in reality.",
    topic: "Sound and Complete Arguments",
    chapter: "Logic and Human Reasoning",
    hint: "Formal structure coheres with material content (Soundness)."
  },
  {
    origNum: 250,
    q: "All of these are features of argument except one",
    opts: ["a. inference", "b. premises", "c. conclusion", "d. judgement", "e. interrogation"],
    ans: 4,
    exp: "An argument consists of premises, inference, judgement, and a conclusion. An interrogation (question) is not a proposition and cannot serve as an argument component.",
    topic: "Constituents of an Argument",
    chapter: "Logic and Human Reasoning",
    hint: "Interrogation (questions are not arguments)."
  },
  {
    origNum: 251,
    q: "The essential problem with the inductive procedure is the high case of",
    opts: ["a. probability", "b. certainty", "c. statistic", "d. logistic", "e. none of the above"],
    ans: 0,
    exp: "David Hume demonstrated that inductive reasoning can never yield absolute logical certainty; its conclusions always remain matter of empirical probability.",
    topic: "Problem of Induction and Probability",
    chapter: "Logic and Human Reasoning",
    hint: "Probability (induction yields probable, not certain, conclusions)."
  }
];

console.log('Total questions parsed:', questionsRaw.length);

const formatted = questionsRaw.map((item, idx) => {
  const newNum = 196 + idx;
  const questionHeader = `Question ${newNum}\n\n${item.q}`;
  
  return `  {
    id: 'ges212_cbt_${newNum}',
    courseId: 'ges212',
    question: ${JSON.stringify(questionHeader)},
    options: ${JSON.stringify(item.opts, null, 6).replace(/\n/g, '\n    ')},
    correctAnswer: ${item.ans},
    explanation: ${JSON.stringify(item.exp)},
    topic: ${JSON.stringify(item.topic)},
    chapter: ${JSON.stringify(item.chapter)},
    hint: ${JSON.stringify(item.hint)},
    source: 'PastQuestion',
    year: 'GES 212.2 CBT Timed Quiz'
  }`;
});

const outputCode = formatted.join(',\n');
fs.writeFileSync('/tmp/ges212_cbt_chunk.ts', outputCode, 'utf8');
console.log('Successfully wrote formatted questions to /tmp/ges212_cbt_chunk.ts');
