// Array of all 200 questions (demo with first 5; replace with full 200)
const quizData = [  // 1–50
  {question:"Who appoints the Chief Election Commissioner of India?", options:["President of India","Prime Minister","Parliament","Supreme Court"], answer:"President of India"},
  {question:"Which Article deals with Right to Constitutional Remedies?", options:["Article 32","Article 21","Article 19","Article 14"], answer:"Article 32"},
  {question:"Who is known as the 'Guardian of the Public Purse'?", options:["Comptroller and Auditor General (CAG)","Finance Minister","RBI Governor","President"], answer:"Comptroller and Auditor General (CAG)"},
  {question:"Who presides over the joint sitting of both Houses of Parliament?", options:["Speaker of Lok Sabha","Vice President","President","Prime Minister"], answer:"Speaker of Lok Sabha"},
  {question:"Which state has a unicameral legislature?", options:["Punjab","Maharashtra","Karnataka","Bihar"], answer:"Punjab"},
  {question:"Who was the first woman Governor of an Indian State?", options:["Sarojini Naidu","Indira Gandhi","Vijaya Lakshmi Pandit","Pratibha Patil"], answer:"Sarojini Naidu"},
  {question:"The Panchayati Raj System was first adopted in which state?", options:["Rajasthan","Maharashtra","Uttar Pradesh","Tamil Nadu"], answer:"Rajasthan"},
  {question:"The term ‘Budget’ is mentioned in which Article of the Constitution?", options:["Article 112","Article 110","Article 109","Article 111"], answer:"Article 112"},
  {question:"Who can dissolve the Lok Sabha?", options:["President of India","Prime Minister","Speaker of Lok Sabha","Chief Justice of India"], answer:"President of India"},
  {question:"Fundamental Duties were added by which Amendment?", options:["42nd Amendment, 1976","44th Amendment, 1978","52nd Amendment, 1985","61st Amendment, 1988"], answer:"42nd Amendment, 1976"},
  {question:"Who founded the Maurya Empire?", options:["Chandragupta Maurya","Ashoka","Bindusara","Samudragupta"], answer:"Chandragupta Maurya"},
  {question:"Who was the first Governor-General of India?", options:["Lord William Bentinck","Lord Wellesley","Lord Cornwallis","Lord Canning"], answer:"Lord William Bentinck"},
  {question:"The Battle of Buxar was fought in which year?", options:["1764","1757","1776","1780"], answer:"1764"},
  {question:"Who built the Red Fort in Delhi?", options:["Shah Jahan","Akbar","Humayun","Aurangzeb"], answer:"Shah Jahan"},
  {question:"Who started the Home Rule Movement in India?", options:["Annie Besant","Bal Gangadhar Tilak","Mahatma Gandhi","Gopal Krishna Gokhale"], answer:"Annie Besant"},
  {question:"Who was the founder of Gupta Empire?", options:["Sri Gupta","Chandragupta I","Samudragupta","Chandragupta II"], answer:"Sri Gupta"},
  {question:"In which year did the Revolt of 1857 begin?", options:["1857","1856","1860","1855"], answer:"1857"},
  {question:"Who was the first Mughal emperor?", options:["Babur","Akbar","Humayun","Jahangir"], answer:"Babur"},
  {question:"Who led the Dandi March?", options:["Mahatma Gandhi","Jawaharlal Nehru","Subhas Chandra Bose","Sardar Patel"], answer:"Mahatma Gandhi"},
  {question:"The Quit India Movement was launched in which year?", options:["1942","1940","1947","1930"], answer:"1942"},
  {question:"The Tropic of Cancer passes through how many Indian states?", options:["8","6","7","5"], answer:"8"},
  {question:"Which is the smallest state of India by area?", options:["Goa","Sikkim","Tripura","Manipur"], answer:"Goa"},
  {question:"Which river is called the 'Sorrow of Bihar'?", options:["Kosi River","Ganga","Sone","Gandak"], answer:"Kosi River"},
  {question:"Where is Silent Valley National Park located?", options:["Kerala","Karnataka","Tamil Nadu","Goa"], answer:"Kerala"},
  {question:"Which is the highest peak in India?", options:["Kangchenjunga","Nanda Devi","Kanchenjunga","Mt. Everest"], answer:"Kangchenjunga"},
  {question:"Which city is known as the 'Manchester of South India'?", options:["Coimbatore","Bengaluru","Chennai","Hyderabad"], answer:"Coimbatore"},
  {question:"What is the capital of Mizoram?", options:["Aizawl","Kohima","Itanagar","Shillong"], answer:"Aizawl"},
  {question:"In which state is Loktak Lake located?", options:["Manipur","Mizoram","Assam","Nagaland"], answer:"Manipur"},
  {question:"The Sundarbans delta is formed by which rivers?", options:["Ganga and Brahmaputra","Godavari and Krishna","Mahanadi and Ganga","Yamuna and Ganga"], answer:"Ganga and Brahmaputra"},
  {question:"What is the largest desert in India?", options:["Thar Desert","Great Indian Desert","Rann of Kutch","Sambhar Desert"], answer:"Thar Desert"},
  {question:"What is the chemical name of Vitamin C?", options:["Ascorbic Acid","Citric Acid","Folic Acid","Lactic Acid"], answer:"Ascorbic Acid"},
  {question:"Which metal is liquid at room temperature?", options:["Mercury","Lead","Tin","Aluminium"], answer:"Mercury"},
  {question:"What is the SI unit of Force?", options:["Newton","Joule","Watt","Pascal"], answer:"Newton"},
  {question:"What is the atomic number of Carbon?", options:["6","12","8","14"], answer:"6"},
  {question:"Which planet is known as the Red Planet?", options:["Mars","Venus","Jupiter","Mercury"], answer:"Mars"},
  {question:"Who invented the telephone?", options:["Alexander Graham Bell","Thomas Edison","Guglielmo Marconi","Nikola Tesla"], answer:"Alexander Graham Bell"},
  {question:"What is the full form of DNA?", options:["Deoxyribonucleic Acid","Ribonucleic Acid","Dioxin Nucleic Acid","Dextrin Nucleic Acid"], answer:"Deoxyribonucleic Acid"},
  {question:"What is the pH value of pure water?", options:["7","6","8","5"], answer:"7"},
  {question:"Which gas is used in fire extinguishers?", options:["Carbon Dioxide","Oxygen","Nitrogen","Hydrogen"], answer:"Carbon Dioxide"},
  {question:"Who discovered penicillin?", options:["Alexander Fleming","Louis Pasteur","Marie Curie","Robert Koch"], answer:"Alexander Fleming"},
  {question:"Which organization releases the 'Human Development Report'?", options:["UNDP","UNICEF","World Bank","IMF"], answer:"UNDP"},
  {question:"What is the minimum age to become the Prime Minister of India?", options:["25 years","30 years","35 years","40 years"], answer:"25 years"},
  {question:"Who is the present Chief Election Commissioner of India?", options:["Rajiv Kumar","Sunil Arora","Sushil Chandra","Syed Nasim Ahmad Zaidi"], answer:"Rajiv Kumar"},
  {question:"The GST came into force from which date?", options:["1 July 2017","1 April 2017","1 Jan 2018","1 March 2018"], answer:"1 July 2017"},
  {question:"Which country will host the 2036 Olympic Games (proposed)?", options:["Yet to be finalized","India","Japan","USA"], answer:"Yet to be finalized"},
  {question:"What is the full form of NITI Aayog?", options:["National Institution for Transforming India","National Institute for Technology in India","National Integration & Technology Initiative","National Indian Taskforce for Innovation"], answer:"National Institution for Transforming India"},
  {question:"What is the currency of Japan?", options:["Yen","Dollar","Rupee","Euro"], answer:"Yen"},
  {question:"Who was the first woman to win the Nobel Prize?", options:["Marie Curie","Rosalind Franklin","Barbara McClintock","Dorothy Hodgkin"], answer:"Marie Curie"},
  {question:"Which is the largest coffee producing state in India?", options:["Karnataka","Kerala","Tamil Nadu","Maharashtra"], answer:"Karnataka"},
  {question:"When is International Yoga Day celebrated?", options:["21 June","1 Jan","15 Aug","2 Oct"], answer:"21 June"},
  // 51–100
  {question:"Who is the first woman Chief Justice of India?", options:["Indira Banerjee","Ranjana Desai","Fathima Beevi","Leila Seth"], answer:"Indira Banerjee"},
  {question:"Who administers the oath of office to the President?", options:["Chief Justice of India","Vice President","Prime Minister","Speaker of Lok Sabha"], answer:"Chief Justice of India"},
  {question:"Who is the head of the State Human Rights Commission?", options:["Retired Judge of High Court","Chief Minister","Governor","Supreme Court Judge"], answer:"Retired Judge of High Court"},
  {question:"Minimum age for Rajya Sabha membership?", options:["30 years","25 years","35 years","40 years"], answer:"30 years"},
  {question:"Maximum strength of Lok Sabha?", options:["552","545","500","530"], answer:"552"},
  {question:"Number of High Courts in India?", options:["25","21","30","28"], answer:"25"},
  {question:"Who is called the 'Father of Indian Constitution'?", options:["Dr. B.R. Ambedkar","Mahatma Gandhi","Jawaharlal Nehru","Sardar Patel"], answer:"Dr. B.R. Ambedkar"},
  {question:"How many Fundamental Rights are there in India?", options:["6","7","5","8"], answer:"6"},
  {question:"Article related to Directive Principles of State Policy?", options:["Article 36–51","Article 32–40","Article 12–35","Article 14–30"], answer:"Article 36–51"},
  {question:"Which Amendment added Right to Education as Fundamental Right?", options:["86th Amendment, 2002","73rd Amendment, 1992","42nd Amendment, 1976","44th Amendment, 1978"], answer:"86th Amendment, 2002"},
  {question:"Which body monitors the implementation of the Right to Information Act?", options:["Central Information Commission","Supreme Court","Election Commission","Parliament"], answer:"Central Information Commission"},
  {question:"Who dissolves State Legislative Assemblies?", options:["Governor","President","Chief Minister","Speaker"], answer:"Governor"},
  {question:"How many schedules are there in the Indian Constitution?", options:["12","8","10","14"], answer:"12"},
  {question:"Which article defines the official language of India?", options:["Article 343","Article 345","Article 351","Article 340"], answer:"Article 343"},
  {question:"Who can declare National Emergency in India?", options:["President","Prime Minister","Parliament","Chief Justice"], answer:"President"},
  {question:"Article dealing with Citizenship?", options:["Article 5–11","Article 12–15","Article 14–18","Article 19–22"], answer:"Article 5–11"},
  {question:"Number of Union Territories in India?", options:["8","9","7","6"], answer:"8"},
  {question:"Which Amendment reduced voting age to 18?", options:["61st Amendment","42nd Amendment","44th Amendment","73rd Amendment"], answer:"61st Amendment"},
  {question:"Who is the guardian of the Constitution?", options:["Supreme Court of India","President","Prime Minister","Parliament"], answer:"Supreme Court of India"},
  {question:"What is the tenure of Finance Commission?", options:["5 years","4 years","6 years","3 years"], answer:"5 years"},
  {question:"Who is head of Election Commission?", options:["Chief Election Commissioner","President","Prime Minister","Vice President"], answer:"Chief Election Commissioner"},
  {question:"Which body recommends salaries of judges of High Court?", options:["Supreme Court Collegium","Parliament","President","Law Ministry"], answer:"Supreme Court Collegium"},
  {question:"Article related to Anti-Defection Law?", options:["102 & 191","101 & 190","100 & 189","103 & 192"], answer:"102 & 191"},
  {question:"Who decides on matters of disqualification of MPs?", options:["President on advice of Parliament","Supreme Court","Election Commission","Speaker"], answer:"President on advice of Parliament"},
  {question:"Who appoints the Comptroller and Auditor General (CAG)?", options:["President","Prime Minister","Parliament","Finance Minister"], answer:"President"},
  {question:"Which Article deals with Right against Exploitation?", options:["Article 23 & 24","Article 21 & 22","Article 14 & 15","Article 19 & 20"], answer:"Article 23 & 24"},
  {question:"Which Article deals with Freedom of Religion?", options:["25–28","30–32","21–24","15–18"], answer:"25–28"},
  {question:"Who can dissolve Rajya Sabha?", options:["Cannot be dissolved","President","Prime Minister","Speaker of Lok Sabha"], answer:"Cannot be dissolved"},
  {question:"Which Amendment inserted the Goods and Services Tax in Constitution?", options:["101st Amendment","42nd Amendment","73rd Amendment","44th Amendment"], answer:"101st Amendment"},
  {question:"Who is the guardian of Fundamental Rights?", options:["Supreme Court","President","Prime Minister","Parliament"], answer:"Supreme Court"},
  {question:"Who was the first woman Governor of an Indian State?", options:["Sarojini Naidu","Indira Gandhi","Vijaya Lakshmi Pandit","Pratibha Patil"], answer:"Sarojini Naidu"},
  {question:"The Panchayati Raj System was first adopted in which state?", options:["Rajasthan","Maharashtra","Uttar Pradesh","Tamil Nadu"], answer:"Rajasthan"},
  {question:"Which Amendment gave reservation for SC/ST in Parliament?", options:["23rd Amendment","42nd Amendment","44th Amendment","73rd Amendment"], answer:"23rd Amendment"},
  {question:"Who discovered India’s first oil well?", options:["Dr. William Knox D'Arcy","M. Visvesvaraya","Homi Bhabha","J.C. Bose"], answer:"Dr. William Knox D'Arcy"},
  {question:"Who was the first President of India?", options:["Dr. Rajendra Prasad","Dr. S. Radhakrishnan","Zakir Husain","V.V. Giri"], answer:"Dr. Rajendra Prasad"},
  {question:"Who wrote the book 'Discovery of India'?", options:["Jawaharlal Nehru","Mahatma Gandhi","B.R. Ambedkar","Rabindranath Tagore"], answer:"Jawaharlal Nehru"},
  {question:"Who was the first Indian woman Prime Minister?", options:["Indira Gandhi","Sonia Gandhi","Pratibha Patil","Sarojini Naidu"], answer:"Indira Gandhi"},
  {question:"Which year did India become a Republic?", options:["1950","1947","1952","1949"], answer:"1950"},
  {question:"Which Article provides for Fundamental Rights?", options:["Article 12–35","Article 36–51","Article 14–19","Article 25–28"], answer:"Article 12–35"},
  {question:"Who was the first Indian to win Nobel Prize?", options:["Rabindranath Tagore","C.V. Raman","Mother Teresa","Hargobind Khorana"], answer:"Rabindranath Tagore"},
  {question:"Which movement was launched in 1942?", options:["Quit India Movement","Non-Cooperation Movement","Swadeshi Movement","Civil Disobedience Movement"], answer:"Quit India Movement"},
  {question:"Who was the first woman Speaker of Lok Sabha?", options:["Meira Kumar","Sumitra Mahajan","Sushma Swaraj","Indira Gandhi"], answer:"Meira Kumar"},
  {question:"Which state was formed on linguistic basis in 1956?", options:["Andhra Pradesh","Maharashtra","Karnataka","Kerala"], answer:"Andhra Pradesh"},
  {question:"Who introduced the Civil Disobedience Movement?", options:["Mahatma Gandhi","Bal Gangadhar Tilak","Subhas Chandra Bose","Jawaharlal Nehru"], answer:"Mahatma Gandhi"},
  {question:"Which Article provides for National Emergency?", options:["Article 352","Article 356","Article 360","Article 370"], answer:"Article 352"},
  {question:"Which amendment lowered voting age to 18?", options:["61st Amendment","42nd Amendment","44th Amendment","73rd Amendment"], answer:"61st Amendment"},
  {question:"Which Article deals with Freedom of Speech and Expression?", options:["Article 19","Article 21","Article 14","Article 22"], answer:"Article 19"},
  {question:"Who was the first Chief Election Commissioner of India?", options:["Sukumar Sen","T.N. Seshan","B.B. Tandon","N. Gopalaswami"], answer:"Sukumar Sen"},
  {question:"Which body conducts elections to the Parliament and State Legislatures?", options:["Election Commission","Supreme Court","Finance Commission","Union Public Service Commission"], answer:"Election Commission"},
  {question:"Which amendment gave constitutional status to Panchayati Raj?", options:["73rd Amendment","42nd Amendment","44th Amendment","61st Amendment"], answer:"73rd Amendment"},
  {question:"Which Article defines Fundamental Duties?", options:["Article 51A","Article 32","Article 19","Article 21"], answer:"Article 51A"},
  {question:"Which body recommends allocation of financial resources between the Centre and States?", options:["Finance Commission","Planning Commission","Election Commission","RBI"], answer:"Finance Commission"},
  {question:"Who appoints the Finance Commission?", options:["President","Prime Minister","Parliament","Planning Commission"], answer:"President"},
  // 101–150
  {question:"Who was the founder of Maurya Empire?", options:["Chandragupta Maurya","Ashoka","Bindusara","Harsha"], answer:"Chandragupta Maurya"},
  {question:"Who was the first Governor-General of India?", options:["Lord William Bentinck","Lord Curzon","Lord Wellesley","Lord Mountbatten"], answer:"Lord William Bentinck"},
  {question:"The Battle of Buxar was fought in which year?", options:["1764","1757","1775","1784"], answer:"1764"},
  {question:"Who built the Red Fort in Delhi?", options:["Shah Jahan","Akbar","Aurangzeb","Humayun"], answer:"Shah Jahan"},
  {question:"Who started the Home Rule Movement in India?", options:["Annie Besant","Bal Gangadhar Tilak","Gopal Krishna Gokhale","Lala Lajpat Rai"], answer:"Annie Besant"},
  {question:"Who was the founder of Gupta Empire?", options:["Sri Gupta","Chandragupta","Ashoka","Harsha"], answer:"Sri Gupta"},
  {question:"In which year did the Revolt of 1857 begin?", options:["1857","1856","1858","1860"], answer:"1857"},
  {question:"Who was the first Mughal emperor?", options:["Babur","Akbar","Humayun","Shah Jahan"], answer:"Babur"},
  {question:"Who led the Dandi March?", options:["Mahatma Gandhi","Jawaharlal Nehru","Sardar Patel","Subhas Chandra Bose"], answer:"Mahatma Gandhi"},
  {question:"The Quit India Movement was launched in which year?", options:["1942","1940","1945","1930"], answer:"1942"},
  {question:"The Tropic of Cancer passes through how many Indian states?", options:["8","7","9","6"], answer:"8"},
  {question:"Which is the smallest state of India by area?", options:["Goa","Sikkim","Tripura","Nagaland"], answer:"Goa"},
  {question:"Which river is called the 'Sorrow of Bihar'?", options:["Kosi River","Ganga","Yamuna","Ghaghara"], answer:"Kosi River"},
  {question:"Where is Silent Valley National Park located?", options:["Kerala","Karnataka","Tamil Nadu","Madhya Pradesh"], answer:"Kerala"},
  {question:"Which is the highest peak in India?", options:["Kangchenjunga","Nanda Devi","Everest","Kamet"], answer:"Kangchenjunga"},
  {question:"Which city is known as the 'Manchester of South India'?", options:["Coimbatore","Bangalore","Chennai","Hyderabad"], answer:"Coimbatore"},
  {question:"What is the capital of Mizoram?", options:["Aizawl","Imphal","Itanagar","Shillong"], answer:"Aizawl"},
  {question:"In which state is Loktak Lake located?", options:["Manipur","Assam","Tripura","Nagaland"], answer:"Manipur"},
  {question:"The Sundarbans delta is formed by which rivers?", options:["Ganga and Brahmaputra","Godavari and Krishna","Mahanadi and Tapi","Yamuna and Ganga"], answer:"Ganga and Brahmaputra"},
  {question:"What is the largest desert in India?", options:["Thar Desert","Rann of Kutch","Sambhar Salt Lake","Ladakh Desert"], answer:"Thar Desert"},
  {question:"What is the chemical name of Vitamin C?", options:["Ascorbic Acid","Citric Acid","Folic Acid","Oxalic Acid"], answer:"Ascorbic Acid"},
  {question:"Which metal is liquid at room temperature?", options:["Mercury","Lead","Copper","Tin"], answer:"Mercury"},
  {question:"What is the SI unit of Force?", options:["Newton","Joule","Pascal","Watt"], answer:"Newton"},
  {question:"What is the atomic number of Carbon?", options:["6","12","8","14"], answer:"6"},
  {question:"Which planet is known as the Red Planet?", options:["Mars","Venus","Jupiter","Mercury"], answer:"Mars"},
  {question:"Who invented the telephone?", options:["Alexander Graham Bell","Thomas Edison","Guglielmo Marconi","Nikola Tesla"], answer:"Alexander Graham Bell"},
  {question:"What is the full form of DNA?", options:["Deoxyribonucleic Acid","Deoxyribose Nucleic Acid","Deoxynitro Acid","Dicarboxylic Nucleic Acid"], answer:"Deoxyribonucleic Acid"},
  {question:"What is the pH value of pure water?", options:["7","6","8","5"], answer:"7"},
  {question:"Which gas is used in fire extinguishers?", options:["Carbon Dioxide","Oxygen","Hydrogen","Nitrogen"], answer:"Carbon Dioxide"},
  {question:"Who discovered penicillin?", options:["Alexander Fleming","Louis Pasteur","Robert Koch","Marie Curie"], answer:"Alexander Fleming"},
  {question:"Which organization releases the 'Human Development Report'?", options:["UNDP","WHO","UNICEF","World Bank"], answer:"UNDP"},
  {question:"What is the minimum age to become the Prime Minister of India?", options:["25 years","30 years","35 years","40 years"], answer:"25 years"},
  {question:"Who is the present Chief Election Commissioner of India?", options:["Rajiv Kumar","Sunil Arora","Sushil Chandra","Ashok Lavasa"], answer:"Rajiv Kumar"},
  {question:"The GST came into force from which date?", options:["1 July 2017","1 April 2017","1 Jan 2018","1 March 2017"], answer:"1 July 2017"},
  {question:"Which country will host the 2036 Olympic Games (proposed)?", options:["Yet to be finalized","France","USA","India"], answer:"Yet to be finalized"},
  {question:"What is the full form of NITI Aayog?", options:["National Institution for Transforming India","National Institute for Technology and Innovation","National Investment and Trade Institute","National Information and Technology Agency"], answer:"National Institution for Transforming India"},
  {question:"What is the currency of Japan?", options:["Yen","Rupee","Dollar","Yuan"], answer:"Yen"},
  {question:"Who was the first woman to win the Nobel Prize?", options:["Marie Curie","Mother Teresa","Malala Yousafzai","Dorothy Hodgkin"], answer:"Marie Curie"},
  {question:"Which is the largest coffee producing state in India?", options:["Karnataka","Kerala","Tamil Nadu","Andhra Pradesh"], answer:"Karnataka"},
  {question:"When is International Yoga Day celebrated?", options:["21 June","1 Jan","15 Aug","2 Oct"], answer:"21 June"},

  {question:"Who is called the 'Father of Indian Constitution'?", options:["Dr. B.R. Ambedkar","Mahatma Gandhi","Jawaharlal Nehru","Sardar Patel"], answer:"Dr. B.R. Ambedkar"},
  {question:"How many Fundamental Rights are there in India?", options:["6","7","5","8"], answer:"6"},
  {question:"Article related to Directive Principles of State Policy?", options:["Article 36–51","Article 12–35","Article 19–22","Article 245–255"], answer:"Article 36–51"},
  {question:"Which Amendment added Right to Education as Fundamental Right?", options:["86th Amendment, 2002","42nd Amendment, 1976","61st Amendment, 1988","101st Amendment, 2016"], answer:"86th Amendment, 2002"},
  {question:"Which body monitors the implementation of the Right to Information Act?", options:["Central Information Commission","Supreme Court","Election Commission","Finance Commission"], answer:"Central Information Commission"},
  {question:"Who dissolves State Legislative Assemblies?", options:["Governor","President","Chief Minister","Parliament"], answer:"Governor"},
  {question:"How many schedules are there in the Indian Constitution?", options:["12","8","10","14"], answer:"12"},
  {question:"Which article defines the official language of India?", options:["Article 343","Article 32","Article 19","Article 51"], answer:"Article 343"},
  {question:"Who can declare National Emergency in India?", options:["President","Prime Minister","Parliament","Supreme Court"], answer:"President"},
  {question:"Article dealing with Citizenship?", options:["Article 5–11","Article 12–35","Article 36–51","Article 245–255"], answer:"Article 5–11"},
  {question:"Number of Union Territories in India?", options:["8","7","9","6"], answer:"8"},
  {question:"Which Amendment reduced voting age to 18?", options:["61st Amendment","42nd Amendment","86th Amendment","101st Amendment"], answer:"61st Amendment"},
  {question:"Who is the guardian of the Constitution?", options:["Supreme Court of India","President","Prime Minister","Parliament"], answer:"Supreme Court of India"},
  {question:"What is the tenure of Finance Commission?", options:["5 years","4 years","6 years","3 years"], answer:"5 years"},
  {question:"Who is head of Election Commission?", options:["Chief Election Commissioner","President","Prime Minister","Supreme Court"], answer:"Chief Election Commissioner"},
  {question:"Which body recommends salaries of judges of High Court?", options:["Supreme Court Collegium","Finance Commission","Parliament","President"], answer:"Supreme Court Collegium"},
  {question:"Article related to Anti-Defection Law?", options:["102 & 191","19 & 21","32 & 226","36–51"], answer:"102 & 191"},
  {question:"Who decides on matters of disqualification of MPs?", options:["President on advice of Parliament","Supreme Court","Election Commission","Prime Minister"], answer:"President on advice of Parliament"},
  {question:"Who appoints the Comptroller and Auditor General (CAG)?", options:["President","Prime Minister","Finance Minister","Parliament"], answer:"President"},
  {question:"Which Article deals with Right against Exploitation?", options:["Article 23 & 24","Article 19","Article 32","Article 12"], answer:"Article 23 & 24"},
  {question:"Which Article deals with Freedom of Religion?", options:["25–28","12–35","19–22","36–51"], answer:"25–28"},
  {question:"Who can dissolve Rajya Sabha?", options:["Cannot be dissolved (permanent house)","President","Prime Minister","Parliament"], answer:"Cannot be dissolved (permanent house)"},
  {question:"Which Amendment inserted the Goods and Services Tax in Constitution?", options:["101st Amendment","86th Amendment","42nd Amendment","61st Amendment"], answer:"101st Amendment"},
  {question:"Who is the guardian of Fundamental Rights?", options:["Supreme Court","President","Prime Minister","Parliament"], answer:"Supreme Court"},
  {question:"Who built the Sun Temple at Konark?", options:["King Narasimhadeva I","Shah Jahan","Akbar","Chandragupta Maurya"], answer:"King Narasimhadeva I"},
  {question:"Who wrote 'Arthashastra'?", options:["Kautilya (Chanakya)","Kalidasa","Bhartrihari","B.R. Ambedkar"], answer:"Kautilya (Chanakya)"},
  {question:"When did the Indian National Congress form?", options:["1885","1905","1919","1947"], answer:"1885"},
  {question:"Who was the first President of Indian National Congress?", options:["W.C. Banerjee","Dadabhai Naoroji","Gopal Krishna Gokhale","Bal Gangadhar Tilak"], answer:"W.C. Banerjee"},
  {question:"Who led the Salt Satyagraha?", options:["Mahatma Gandhi","Jawaharlal Nehru","Sardar Patel","Subhas Chandra Bose"], answer:"Mahatma Gandhi"},
  {question:"When did India become a Republic?", options:["26 Jan 1950","15 Aug 1947","2 Oct 1950","26 Jan 1947"], answer:"26 Jan 1950"},
  {question:"Who was the last Governor-General of India?", options:["C. Rajagopalachari","Lord Mountbatten","Lord Wellesley","Lord Curzon"], answer:"C. Rajagopalachari"},
  {question:"Who founded the Bahmani Sultanate?", options:["Alauddin Bahman Shah","Mohammed Ghori","Qutb-ud-din Aibak","Sher Shah Suri"], answer:"Alauddin Bahman Shah"},
  {question:"Which battle was fought in 1526?", options:["First Battle of Panipat","Battle of Buxar","Battle of Plassey","Second Battle of Panipat"], answer:"First Battle of Panipat"},
  {question:"Who was the founder of Vijayanagara Empire?", options:["Harihara I & Bukka I","Krishna Deva Raya","Rajendra Chola","Harsha"], answer:"Harihara I & Bukka I"},
  {question:"In which year did India gain independence?", options:["1947","1950","1942","1930"], answer:"1947"},
  {question:"Who was the first Prime Minister of India?", options:["Jawaharlal Nehru","Mahatma Gandhi","Sardar Patel","Subhas Chandra Bose"], answer:"Jawaharlal Nehru"},
  {question:"Who wrote 'Gitanjali'?", options:["Rabindranath Tagore","Bankim Chandra Chatterjee","Jaishankar Prasad","Kautilya"], answer:"Rabindranath Tagore"},
  {question:"The Revolt of 1857 started in which city?", options:["Meerut","Delhi","Kanpur","Lucknow"], answer:"Meerut"},
  {question:"Who founded the Sikh Khalsa Panth?", options:["Guru Gobind Singh","Guru Nanak","Guru Arjan Dev","Maharaja Ranjit Singh"], answer:"Guru Gobind Singh"},
  {question:"Who built the Golden Temple?", options:["Guru Arjan Dev","Guru Nanak","Shah Jahan","Akbar"], answer:"Guru Arjan Dev"},
  {question:"Who was the first Indian woman to go to space?", options:["Kalpana Chawla","Sunita Williams","Indira Gandhi","Kiran Bedi"], answer:"Kalpana Chawla"},
  {question:"Which city was known as 'Eastern Gateway of India' during British?", options:["Kolkata","Mumbai","Chennai","Bangalore"], answer:"Kolkata"},
  {question:"Who built the Agra Fort?", options:["Akbar","Shah Jahan","Aurangzeb","Humayun"], answer:"Akbar"},
  {question:"Which Indian freedom fighter is called 'Frontier Gandhi'?", options:["Khan Abdul Ghaffar Khan","Mahatma Gandhi","Bhagat Singh","Subhas Chandra Bose"], answer:"Khan Abdul Ghaffar Khan"},
  {question:"Who wrote 'Discovery of India'?", options:["Jawaharlal Nehru","Rabindranath Tagore","Bankim Chandra Chatterjee","Kautilya"], answer:"Jawaharlal Nehru"},
  {question:"Who led the Indigo Revolt?", options:["Indigo farmers in Bengal","Mahatma Gandhi","Rani Lakshmibai","Bal Gangadhar Tilak"], answer:"Indigo farmers in Bengal"},
  {question:"Who introduced the Permanent Settlement?", options:["Lord Cornwallis","Lord Wellesley","Lord Curzon","Lord Dalhousie"], answer:"Lord Cornwallis"},
  {question:"Who built Fatehpur Sikri?", options:["Akbar","Shah Jahan","Humayun","Aurangzeb"], answer:"Akbar"},
  {question:"Who founded the Sikh Empire?", options:["Maharaja Ranjit Singh","Guru Gobind Singh","Akbar","Shah Jahan"], answer:"Maharaja Ranjit Singh"},
  {question:"Who established the Maratha Empire?", options:["Chhatrapati Shivaji Maharaj","Bajirao I","Peshwa Balaji","Madhav Rao"], answer:"Chhatrapati Shivaji Maharaj"},
  {question:"Who translated Bhagavad Gita into English?", options:["Charles Wilkins","Swami Vivekananda","Mahatma Gandhi","Rabindranath Tagore"], answer:"Charles Wilkins"},
  {question:"Who is considered the first historian of India?", options:["Megasthenes","Kalhana","Banabhatta","Raja Ravi Varma"], answer:"Megasthenes"}
  // Add remaining questions 6–200 here in the same forma
];

const quizEl = document.getElementById('quiz');
const quizForm = document.getElementById('quizForm');
const resultEl = document.getElementById('result');
const scoreEl = document.getElementById('score');
const restartBtn = document.getElementById('restartBtn');

// Function to render all questions
function loadQuiz() {
  quizEl.innerHTML = '';
  quizData.forEach((q, index) => {
    const questionBlock = document.createElement('div');
    questionBlock.classList.add('question-block');
    const questionTitle = document.createElement('h3');
    questionTitle.textContent = `${index + 1}. ${q.question}`;
    questionBlock.appendChild(questionTitle);

    const optionsList = document.createElement('ul');
    q.options.forEach(opt => {
      const li = document.createElement('li');
      li.innerHTML = `<input type="radio" name="q${index}" value="${opt}" id="q${index}-${opt}">
                      <label for="q${index}-${opt}">${opt}</label>`;
      optionsList.appendChild(li);
    });

    questionBlock.appendChild(optionsList);
    quizEl.appendChild(questionBlock);
  });
}

// Submit Test
quizForm.addEventListener('submit', function(e) {
  e.preventDefault();
  let score = 0;
  quizData.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && selected.value === q.answer) {
      score++;
    }
  });
  quizForm.classList.add('hidden');
  resultEl.classList.remove('hidden');
  scoreEl.textContent = score;
});

// Restart Test
restartBtn.addEventListener('click', function() {
  quizForm.classList.remove('hidden');
  resultEl.classList.add('hidden');
  quizForm.reset();
  loadQuiz();
});

// Initialize quiz
loadQuiz();
