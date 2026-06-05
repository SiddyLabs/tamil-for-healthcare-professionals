const QUESTIONS = [

  // =========================
  // BODY PARTS
  // =========================

  {
    tamil: "Thalai",
    english: "Head",
    type: "word",
    category: "bodyparts"
  },
  {
    tamil: "Kan",
    english: "Eye",
    type: "word",
    category: "bodyparts"
  },
  {
    tamil: "Kaadhu",
    english: "Ear",
    type: "word",
    category: "bodyparts"
  },
  {
    tamil: "Mookku",
    english: "Nose",
    type: "word",
    category: "bodyparts"
  },
  {
    tamil: "Vaai",
    english: "Mouth",
    type: "word",
    category: "bodyparts"
  },
  {
    tamil: "Naaku",
    english: "Tongue",
    type: "word",
    category: "bodyparts"
  },
  {
    tamil: "Pal",
    english: "Tooth",
    type: "word",
    category: "bodyparts"
  },
  {
    tamil: "Uthadu",
    english: "Lip",
    type: "word",
    category: "bodyparts"
  },
  {
    tamil: "Kai",
    english: "Hand",
    type: "word",
    category: "bodyparts"
  },
  {
    tamil: "Maarbu",
    english: "Chest",
    type: "word",
    category: "bodyparts"
  },
  {
    tamil: "Kazhuthu",
    english: "Neck",
    type: "word",
    category: "bodyparts"
  },
  {
    tamil: "Vayiru",
    english: "Abdomen",
    type: "word",
    category: "bodyparts"
  },
  {
    tamil: "Thoppul",
    english: "Umbilicus",
    type: "word",
    category: "bodyparts"
  },
  {
    tamil: "Thodai",
    english: "Thigh",
    type: "word",
    category: "bodyparts"
  },
  {
    tamil: "Kaal",
    english: "Leg",
    type: "word",
    category: "bodyparts"
  },
  {
    tamil: "Paatham",
    english: "Foot",
    type: "word",
    category: "bodyparts"
  },
  {
    tamil: "Kaalviral",
    english: "Toe",
    type: "word",
    category: "bodyparts"
  },
  {
    tamil: "Kaiviral",
    english: "Finger",
    type: "word",
    category: "bodyparts"
  },
  {
    tamil: "Nagam",
    english: "Nail",
    type: "word",
    category: "bodyparts"
  },
  {
    tamil: "Iduppu",
    english: "Hip",
    type: "word",
    category: "bodyparts"
  },
  {
    tamil: "Nerambu",
    english: "Nerve",
    type: "word",
    category: "bodyparts"
  },
  {
    tamil: "Manikattu",
    english: "Wrist",
    type: "word",
    category: "bodyparts"
  },
  {
    tamil: "Kanukaal",
    english: "Ankle",
    type: "word",
    category: "bodyparts"
  },

  // =========================
  // SYMPTOMS
  // =========================

  {
    tamil: "Vali",
    english: "Pain",
    type: "word",
    category: "symptoms"
  },
  {
    tamil: "Thalai Vali",
    english: "Headache",
    type: "phrase",
    category: "symptoms"
  },
  {
    tamil: "Maar Vali",
    english: "Chest Pain",
    type: "phrase",
    category: "symptoms"
  },
  {
    tamil: "Vayiru Vali",
    english: "Abdominal Pain",
    type: "phrase",
    category: "symptoms"
  },
  {
    tamil: "Muthugu Vali",
    english: "Back Pain",
    type: "phrase",
    category: "symptoms"
  },
  {
    tamil: "Kai Vali",
    english: "Hand Pain",
    type: "phrase",
    category: "symptoms"
  },
  {
    tamil: "Kaal Vali",
    english: "Leg Pain",
    type: "phrase",
    category: "symptoms"
  },
  {
    tamil: "Mayakkam",
    english: "Giddiness",
    type: "word",
    category: "symptoms"
  },
  {
    tamil: "Kumattal",
    english: "Nausea",
    type: "word",
    category: "symptoms"
  },
  {
    tamil: "Vaanthi",
    english: "Vomiting",
    type: "word",
    category: "symptoms"
  },
  {
    tamil: "Nenju Erichal",
    english: "Heartburn",
    type: "phrase",
    category: "symptoms"
  },
  {
    tamil: "Viyarvai",
    english: "Sweating",
    type: "word",
    category: "symptoms"
  },
  {
    tamil: "Raththam",
    english: "Blood",
    type: "word",
    category: "symptoms"
  },
  {
    tamil: "Malam",
    english: "Stool",
    type: "word",
    category: "symptoms"
  },
  {
    tamil: "Chali",
    english: "Sputum",
    type: "word",
    category: "symptoms"
  },
  {
    tamil: "Onnukku",
    english: "Urine",
    type: "word",
    category: "symptoms"
  },
  {
    tamil: "Pada Padappu",
    english: "Palpitations",
    type: "phrase",
    category: "symptoms"
  },
  {
    tamil: "Mookku Adaippu",
    english: "Nasal Blockage",
    type: "phrase",
    category: "symptoms"
  },

    // =========================
  // SWELLING
  // =========================

  {
    tamil: "Mugam Veekam",
    english: "Facial Swelling",
    type: "phrase",
    category: "swelling"
  },
  {
    tamil: "Kai Veekam",
    english: "Hand Swelling",
    type: "phrase",
    category: "swelling"
  },
  {
    tamil: "Kaal Veekam",
    english: "Leg Swelling",
    type: "phrase",
    category: "swelling"
  },

  // =========================
  // DISEASES
  // =========================

  {
    tamil: "Raththa Kothippu",
    english: "High Blood Pressure",
    type: "phrase",
    category: "diseases"
  },
  {
    tamil: "Sarkarai Viyadhi",
    english: "Diabetes",
    type: "phrase",
    category: "diseases"
  },
  {
    tamil: "Irudhaya Viyadhi",
    english: "Heart Disease",
    type: "phrase",
    category: "diseases"
  },
  {
    tamil: "Puttru Noi",
    english: "Cancer",
    type: "phrase",
    category: "diseases"
  },
  {
    tamil: "Thol Noi",
    english: "Skin Disease",
    type: "phrase",
    category: "diseases"
  },
  {
    tamil: "Ellumbu Murivu",
    english: "Fracture",
    type: "phrase",
    category: "diseases"
  },
  {
    tamil: "Raththa Sogai",
    english: "Anemia",
    type: "phrase",
    category: "diseases"
  },
  {
    tamil: "Manjal Kaamalai",
    english: "Jaundice",
    type: "phrase",
    category: "diseases"
  },
  {
    tamil: "Irumbal",
    english: "Cough",
    type: "word",
    category: "diseases"
  },
  {
    tamil: "Beethi",
    english: "Diarrhea",
    type: "word",
    category: "diseases"
  },
  {
    tamil: "Vikkal",
    english: "Hiccup",
    type: "word",
    category: "diseases"
  },

  // =========================
  // INSTRUCTIONS
  // =========================

{
  tamil: "Va",
  english: "Come",
  type: "word",
  category: "instructions"
},
{
  tamil: "Po",
  english: "Go",
  type: "word",
  category: "instructions"
},
{
  tamil: "Ukkar",
  english: "Sit",
  type: "word",
  category: "instructions"
},
{
  tamil: "Padu",
  english: "Lie Down",
  type: "phrase",
  category: "instructions"
},
{
  tamil: "Thoongu",
  english: "Sleep",
  type: "word",
  category: "instructions"
},
{
  tamil: "Nada",
  english: "Walk",
  type: "word",
  category: "instructions"
},
{
  tamil: "Padi",
  english: "Read",
  type: "word",
  category: "instructions"
},
{
  tamil: "Intha Pakkam Thirumbu",
  english: "Turn This Side",
  type: "phrase",
  category: "instructions"
},
{
  tamil: "Antha Pakkam Thirumbu",
  english: "Turn That Side",
  type: "phrase",
  category: "instructions"
},
{
  tamil: "Mele Paar",
  english: "Look Up",
  type: "phrase",
  category: "instructions"
},
{
  tamil: "Keezhe Paar",
  english: "Look Down",
  type: "phrase",
  category: "instructions"
},
{
  tamil: "Kannai Moodu",
  english: "Close Your Eyes",
  type: "phrase",
  category: "instructions"
},
{
  tamil: "Nakkai Neettu",
  english: "Show Your Tongue",
  type: "phrase",
  category: "instructions"
},
{
  tamil: "Vaayai Thira",
  english: "Open Your Mouth",
  type: "phrase",
  category: "instructions"
},
{
  tamil: "Periya Moochu Edu",
  english: "Take a Deep Breath",
  type: "sentence",
  category: "instructions"
},
{
  tamil: "Kai Mele Thooku",
  english: "Lift Your Hand",
  type: "phrase",
  category: "instructions"
},
{
  tamil: "Kaiyai Irukki Moodu",
  english: "Close Your Fist",
  type: "phrase",
  category: "instructions"
},
{
  tamil: "Kaigalai Madi",
  english: "Fold Your Hands",
  type: "phrase",
  category: "instructions"
},
{
  tamil: "Kaalai Thooku",
  english: "Lift Your Leg",
  type: "phrase",
  category: "instructions"
},
{
  tamil: "Kaalai Madi",
  english: "Fold Your Leg",
  type: "phrase",
  category: "instructions"
},
{
  tamil: "Payirchi",
  english: "Exercise",
  type: "word",
  category: "instructions"
},
{
  tamil: "Ezhundhu Nada",
  english: "Get Up and Walk",
  type: "sentence",
  category: "instructions"
},
{
  tamil: "Paarthu Nada",
  english: "Look and Walk",
  type: "sentence",
  category: "instructions"
},

// =========================
// GENERAL HISTORY
// =========================

{
  tamil: "Ungal Peyar Enna?",
  english: "What is your name?",
  type: "sentence",
  category: "general-history"
},
{
  tamil: "Ungal Vayasu Enna?",
  english: "What is your age?",
  type: "sentence",
  category: "general-history"
},
{
  tamil: "Neenga Engirundhu Varreenga?",
  english: "Where are you from?",
  type: "sentence",
  category: "general-history"
},
{
  tamil: "Ungal Ooru Enna?",
  english: "What is your native place?",
  type: "sentence",
  category: "general-history"
},
{
  tamil: "Ungal Velai Enna?",
  english: "What is your occupation?",
  type: "sentence",
  category: "general-history"
},
{
  tamil: "Neenga Thirumanam Aayiduchaa?",
  english: "Are you married?",
  type: "sentence",
  category: "general-history"
},
{
  tamil: "Ungalukku Kuzhandhaigal Irukka?",
  english: "Do you have children?",
  type: "sentence",
  category: "general-history"
},
{
  tamil: "Eththanai Kuzhandhaigal?",
  english: "How many children do you have?",
  type: "sentence",
  category: "general-history"
},
{
  tamil: "Ungalukku Enna Pirachanai?",
  english: "What is your problem?",
  type: "sentence",
  category: "general-history"
},
{
  tamil: "Ungalukku Enna Aachu?",
  english: "What happened to you?",
  type: "sentence",
  category: "general-history"
},
{
  tamil: "Ungalukku Vali Irukka?",
  english: "Do you have pain?",
  type: "sentence",
  category: "general-history"
},
{
  tamil: "Enga Vali Irukku?",
  english: "Where is the pain?",
  type: "sentence",
  category: "general-history"
},
{
  tamil: "Eppo Aarambichadhu?",
  english: "When did it start?",
  type: "sentence",
  category: "general-history"
},
{
  tamil: "Eththanai Naala Irukku?",
  english: "How many days has it been present?",
  type: "sentence",
  category: "general-history"
},
{
  tamil: "Idhu Munnaadi Irundhuchaa?",
  english: "Have you had this before?",
  type: "sentence",
  category: "general-history"
},
{
  tamil: "Vali Adhigama Irukka?",
  english: "Is the pain severe?",
  type: "sentence",
  category: "general-history"
},
{
  tamil: "Ungalukku Kaichal Irukka?",
  english: "Do you have fever?",
  type: "sentence",
  category: "general-history"
},
{
  tamil: "Ungalukku Irumbal Irukka?",
  english: "Do you have cough?",
  type: "sentence",
  category: "general-history"
},
{
  tamil: "Ungalukku Moochu Kashtam Irukka?",
  english: "Do you have breathing difficulty?",
  type: "sentence",
  category: "general-history"
},
{
  tamil: "Ungalukku Vaanthi Vandhuchaa?",
  english: "Did you vomit?",
  type: "sentence",
  category: "general-history"
},
{
  tamil: "Ungalukku Beethi Irukka?",
  english: "Do you have diarrhea?",
  type: "sentence",
  category: "general-history"
},
{
  tamil: "Ungalukku Raththam Vandhuchaa?",
  english: "Have you noticed bleeding?",
  type: "sentence",
  category: "general-history"
},
{
  tamil: "Ungalukku Mayakkam Irukka?",
  english: "Do you have giddiness?",
  type: "sentence",
  category: "general-history"
},
{
  tamil: "Ungalukku Thookkam Nalla Varudha?",
  english: "Do you sleep well?",
  type: "sentence",
  category: "general-history"
},

// =========================
// PAST HISTORY
// =========================

{
  tamil: "Ungalukku Sarkarai Viyadhi Irukka?",
  english: "Do you have diabetes?",
  type: "sentence",
  category: "past-history"
},
{
  tamil: "Ungalukku Raththa Kothippu Irukka?",
  english: "Do you have high blood pressure?",
  type: "sentence",
  category: "past-history"
},
{
  tamil: "Ungalukku Irudhaya Noi Irukka?",
  english: "Do you have heart disease?",
  type: "sentence",
  category: "past-history"
},
{
  tamil: "Ungalukku Asthma Irukka?",
  english: "Do you have asthma?",
  type: "sentence",
  category: "past-history"
},
{
  tamil: "Ungalukku Puttru Noi Irukka?",
  english: "Do you have cancer?",
  type: "sentence",
  category: "past-history"
},
{
  tamil: "Neenga Munnaadi Maruthuvamanaiyil Serndhirukkeengalaa?",
  english: "Have you been admitted to a hospital before?",
  type: "sentence",
  category: "past-history"
},
{
  tamil: "Ungalukku Munnaadi Operation Aayirukkaa?",
  english: "Have you undergone surgery before?",
  type: "sentence",
  category: "past-history"
},
{
  tamil: "Idhu Munnaadiyum Nadandhirukkaa?",
  english: "Has this happened before?",
  type: "sentence",
  category: "past-history"
},

// =========================
// TREATMENT HISTORY
// =========================

{
  tamil: "Neenga Marundhu Saappidreengalaa?",
  english: "Are you taking medicines?",
  type: "sentence",
  category: "treatment-history"
},
{
  tamil: "Enna Marundhu Saappidreenga?",
  english: "What medicines are you taking?",
  type: "sentence",
  category: "treatment-history"
},
{
  tamil: "Marundhu Thavaraamal Saappidreengalaa?",
  english: "Do you take your medicines regularly?",
  type: "sentence",
  category: "treatment-history"
},
{
  tamil: "Indha Pirachanai-kku Marundhu Eduthirukkeengalaa?",
  english: "Have you taken treatment for this problem?",
  type: "sentence",
  category: "treatment-history"
},
{
  tamil: "Marundhu Saappitta Piragu Nallaa Irundhudhaa?",
  english: "Did you improve after taking medicines?",
  type: "sentence",
  category: "treatment-history"
},

// =========================
// FAMILY HISTORY
// =========================

{
  tamil: "Unga Kudumbathula Yaarukkavadhu Sarkarai Viyadhi Irukka?",
  english: "Does anyone in your family have diabetes?",
  type: "sentence",
  category: "family-history"
},
{
  tamil: "Unga Kudumbathula Yaarukkavadhu Raththa Kothippu Irukka?",
  english: "Does anyone in your family have high blood pressure?",
  type: "sentence",
  category: "family-history"
},
{
  tamil: "Unga Kudumbathula Yaarukkavadhu Irudhaya Noi Irukka?",
  english: "Does anyone in your family have heart disease?",
  type: "sentence",
  category: "family-history"
},
{
  tamil: "Unga Kudumbathula Yaarukkavadhu Puttru Noi Irukka?",
  english: "Does anyone in your family have cancer?",
  type: "sentence",
  category: "family-history"
},
{
  tamil: "Unga Appa Uyiroda Irukkaaraa?",
  english: "Is your father alive?",
  type: "sentence",
  category: "family-history"
},
{
  tamil: "Unga Amma Uyiroda Irukkaangalaa?",
  english: "Is your mother alive?",
  type: "sentence",
  category: "family-history"
},

// =========================
// CARDIOLOGY
// =========================

{
  tamil: "Ungalukku Maar Vali Irukka?",
  english: "Do you have chest pain?",
  type: "sentence",
  category: "cardiology"
},
{
  tamil: "Nadakkumbodhu Maar Vali Varudhaa?",
  english: "Does the chest pain occur while walking?",
  type: "sentence",
  category: "cardiology"
},
{
  tamil: "Oivu Eduthaa Vali Kuraiyudhaa?",
  english: "Does the pain improve with rest?",
  type: "sentence",
  category: "cardiology"
},
{
  tamil: "Ungalukku Moochu Vaangudhaa?",
  english: "Do you get breathlessness?",
  type: "sentence",
  category: "cardiology"
},
{
  tamil: "Paduthukitta Moochu Kashtam Aagudhaa?",
  english: "Does breathing become difficult while lying down?",
  type: "sentence",
  category: "cardiology"
},
{
  tamil: "Raththiri Thookkathula Moochu Vaangi Ezhundhirukkeengalaa?",
  english: "Do you wake up breathless at night?",
  type: "sentence",
  category: "cardiology"
},
{
  tamil: "Ungalukku Pada Padappu Irukka?",
  english: "Do you have palpitations?",
  type: "sentence",
  category: "cardiology"
},
{
  tamil: "Ungalukku Kaal Veekam Irukka?",
  english: "Do you have leg swelling?",
  type: "sentence",
  category: "cardiology"
},
{
  tamil: "Mayangi Vizhundhirukkeengalaa?",
  english: "Have you ever fainted?",
  type: "sentence",
  category: "cardiology"
},

// =========================
// PULMONOLOGY
// =========================

{
  tamil: "Ungalukku Irumbal Irukka?",
  english: "Do you have cough?",
  type: "sentence",
  category: "pulmonology"
},
{
  tamil: "Eththanai Naala Irumbal Irukku?",
  english: "How long have you had cough?",
  type: "sentence",
  category: "pulmonology"
},
{
  tamil: "Chali Varudhaa?",
  english: "Do you produce sputum?",
  type: "sentence",
  category: "pulmonology"
},
{
  tamil: "Chaliyila Raththam Varudhaa?",
  english: "Is there blood in the sputum?",
  type: "sentence",
  category: "pulmonology"
},
{
  tamil: "Ungalukku Moochu Kashtam Irukka?",
  english: "Do you have breathing difficulty?",
  type: "sentence",
  category: "pulmonology"
},
{
  tamil: "Ungalukku Wheezing Irukka?",
  english: "Do you have wheezing?",
  type: "sentence",
  category: "pulmonology"
},
{
  tamil: "Ungalukku Kaichal Irukka?",
  english: "Do you have fever?",
  type: "sentence",
  category: "pulmonology"
},

// =========================
// MENSTRUAL HISTORY
// =========================

{
  tamil: "Mudhal Maadhavidai Eppo Vandhadhu?",
  english: "At what age did you attain menarche?",
  type: "sentence",
  category: "menstrual-history"
},
{
  tamil: "Maadhavidai Regular-aa Varudhaa?",
  english: "Are your menstrual cycles regular?",
  type: "sentence",
  category: "menstrual-history"
},
{
  tamil: "Eththanai Naal Maadhavidai Irukkum?",
  english: "How many days does menstruation last?",
  type: "sentence",
  category: "menstrual-history"
},
{
  tamil: "Maadhavidai Samayathula Vali Irukka?",
  english: "Do you have pain during menstruation?",
  type: "sentence",
  category: "menstrual-history"
}

];
