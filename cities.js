const citiesInIndia = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Ahmedabad",
    "Chennai",
    "Kolkata",
    "Surat",
    "Pune",
    "Jaipur",
    "Lucknow",
    "Kanpur",
    "Nagpur",
    "Indore",
    "Thane",
    "Bhopal",
    "Visakhapatnam",
    "Pimpri-Chinchwad",
    "Patna",
    "Vadodara",
    "Ghaziabad",
    "Ludhiana",
    "Agra",
    "Nashik",
    "Faridabad",
    "Meerut",
    "Rajkot",
    "Kalyan-Dombivli",
    "Vasai-Virar",
    "Varanasi",
    "Srinagar",
    "Aurangabad",
    "Dhanbad",
    "Amritsar",
    "Navi Mumbai",
    "Allahabad",
    "Ranchi",
    "Howrah",
    "Coimbatore",
    "Jabalpur",
    "Gwalior",
    "Vijayawada",
    "Jodhpur",
    "Madurai",
    "Raipur",
    "Kota",
    "Chandigarh",
    "Guwahati",
    "Solapur",
    "Hubballi-Dharwad",
    "Tiruchirappalli",
    "Bareilly",
    "Moradabad",
    "Mysore",
    "Tiruppur",
    "Gurgaon",
    "Aligarh",
    "Jalandhar",
    "Bhubaneswar",
    "Salem",
    "Warangal",
    "Guntur",
    "Bhiwandi",
    "Saharanpur",
    "Gorakhpur",
    "Bikaner",
    "Amravati",
    "Noida",
    "Jamshedpur",
    "Bhilai",
    "Cuttack",
    "Firozabad",
    "Kochi",
    "Nellore",
    "Bhavnagar",
    "Dehradun",
    "Durgapur",
    "Asansol",
    "Rourkela",
    "Nanded",
    "Kolhapur",
    "Ajmer",
    "Akola",
    "Gulbarga",
    "Jamnagar",
    "Ujjain",
    "Loni",
    "Siliguri",
    "Jhansi",
    "Ulhasnagar",
    "Jammu",
    "Sangli-Miraj & Kupwad",
    "Mangalore",
    "Erode",
    "Belgaum",
    "Ambattur",
    "Tirunelveli",
    "Malegaon",
    "Gaya",
    "Jalgaon",
    "Udaipur",
    "Maheshtala",
    "Tirupati",
    "Davanagere",
    "Kozhikode",
    "Akbarpur",
    "Kurnool",
    "Rajpur Sonarpur",
    "Bokaro Steel City",
    "South Dumdum",
    "Bellary",
    "Patiala",
    "Gopalpur",
    "Agartala",
    "Bhagalpur",
    "Muzaffarnagar",
    "Bhatpara",
    "Panihati",
    "Latur",
    "Dhule",
    "Rohtak",
    "Korba",
    "Bhilwara",
    "Berhampur",
    "Muzaffarpur",
    "Ahmednagar",
    "Mathura",
    "Kollam",
    "Avadi",
    "Kadapa",
    "Kamarhati",
    "Sambalpur",
    "Bilaspur",
    "Shahjahanpur",
    "Satara",
    "Bijapur",
    "Rampur",
    "Shivamogga (Shimoga)",
    "Chandrapur",
    "Junagadh",
    "Thrissur",
    "Alwar",
    "Bardhaman",
    "Kulti",
    "Kakinada",
    "Nizamabad",
    "Parbhani",
    "Tumkur",
    "Khammam",
    "Ozhukarai",
    "Bihar Sharif",
    "Panipat",
    "Darbhanga",
    "Bally",
    "Aizawl",
    "Dewas",
    "Ichalkaranji",
    "Karnal",
    "Bathinda",
    "Jalna",
    "Eluru",
    "Barasat",
    "Kirari Suleman Nagar",
    "Purnia",
    "Satna",
    "Mau",
    "Sonipat",
    "Farrukhabad",
    "Sagar",
    "Rourkela",
    "Durg",
    "Imphal",
    "Ratlam",
    "Hapur",
    "Anantapur",
    "Arrah",
    "Karimnagar",
    "Etawah",
    "Ambarnath",
    "North Dumdum",
    "Bharatpur",
    "Begusarai",
    "New Delhi",
    "Gandhidham",
    "Baranagar",
    "Tiruvottiyur",
    "Puducherry",
    "Sikar",
    "Thoothukudi",
    "Rewa",
    "Mirzapur",
    "Raichur",
    "Pali",
    "Ramagundam",
    "Silchar",
    "Haridwar",
    "Vijayanagaram",
    "Tenali",
    "Nagercoil",
    "Sri Ganganagar",
    "Karawal Nagar",
    "Mango",
    "Thanjavur",
    "Bulandshahr",
    "Uluberia",
    "Katni",
    "Sambhal",
    "Singrauli",
    "Nadiad",
    "Secunderabad",
    "Naihati",
    "Yamunanagar",
    "Bidhan Nagar",
    "Pallavaram",
    "Bidar",
    "Munger",
    "Panchkula",
    "Burhanpur",
    "Raurkela Industrial Township",
    "Kharagpur",
    "Dindigul",
    "Gandhinagar",
    "Hospet",
    "Nangloi Jat",
    "Malda",
    "Ongole",
    "Deoghar",
    "Chapra",
    "Haldia",
    "Khandwa",
    "Nandyal",
    "Morena",
    "Amroha",
    "Anand",
    "Bhind",
    "Bhalswa Jahangir Pur",
    "Madhyamgram",
    "Bhiwani",
    "Berhampore",
    "Ambala",
    "Morbi",
    "Fatehpur",
    "Raebareli",
    "Khora",
    "Orai",
    "Bahraich",
    "Vellore",
    "Mahesana",
    "Sambalpur",
    "Raiganj",
    "Sirsa",
    "Danapur",
    "Serampore",
    "Sultan Pur Majra",
    "Guna",
    "Jaunpur",
    "Panvel",
    "Shivpuri",
    "Surendranagar Dudhrej",
    "Unnao",
    "Chinsurah",
    "Alappuzha",
    "Kottayam",
    "Machilipatnam",
    "Shimla",
    "Adoni",
    "Udupi",
    "Katihar",
    "Proddatur",
    "Chittoor",
    "Bhimavaram",
    "Ongole",
    "Adilabad",
    "Yavatmal",
    "Bulandshahr",
    "Navsari",
    "Batala",
    "Shimoga",
    "Deoli",
    "Habra",
    "Morvi",
    "Hapur",
    "Guntakal",
    "Bhusawal",
    "Khammam",
    "Mancherial",
    "Nalgonda",
    "Godhra",
    "Guntur",
    "Budaun",
    "Sambhal",
    "Hindupur",
    "Hajipur",
    "Shrirampur",
    "Tiruvannamalai",
    "Mancherial",
    "Haldwani-cum-Kathgodam",
    "Unnao",
    "Hugli-Chinsurah",
    "Tadepalligudem",
    "Narasaraopet",
    "Sira",
    "Jagtial",
    "Viluppuram",
    "Hardoi ",
    "Tirupati",
    "Palani",
    "Vaniyambadi",
    "Tiruvuru",
    "Kendujhar",
    "Dumka",
    "Suryapet",
    "Fatehabad",
    "Nalgonda",
    "Ganjam",
    "Guna",
    "Sunabeda",
    "Purulia",
    "Bongaigaon",
    "Mathura",
    "Samastipur",
    "Balangir",
    "Koratla",
    "Krishnanagar",
    "Shahdol",
    "Hazaribagh",
    "Khandwa",
    "Kalyani",
    "Madhyamgram",
    "Satara",
    "Chittoor",
    "Kumbakonam",
    "Srikakulam",
    "Jehanabad",
    "Narasapuram",
    "Palwancha",
    "Santipur",
    "Balurghat",
    "Tadepalligudem",
    "Wardha",
    "Ranebennuru",
    "Pollachi",
    "Panruti",
    "Hoshiarpur",
    "Sangrur",
    "Chittoor",
    "Quthbullapur",
    "Beawar",
    "Viluppuram",
    "Palani",
    "Pusad",
    "Sopore",
    "Budaun",
    "Jagtial",
    "Tarn Taran",
    "Neyyattinkara",
    "Bhimavaram",
    "Bansberia",
    "Buxar",
    "Tezpur",
    "Jehanabad",
    "Madhubani",
    "Amaravati",
    "Haldia",
    "Kanchrapara",
    "Damoh",
    "Chittaurgarh",
    "Nagaon",
    "Jamuria",
    "Kishanganj",
    "Pathankot",
    "Munger",
    "Ponnani",
    "Valparai",
    "Kattappana",
    "Bakhtiarpur",
    "Bahadurgarh",
    "Arambagh",
    "Baripada",
    "Baharampur",
    "Chandannagar",
    "Kandi",
    "Narasapuram",
    "Pudukkottai",
    "Guntakal",
    "Nagaon",
    "Yemmiganur",
    "Vasai-Virar",
    "Mahbubnagar",
    "Chikmagalur",
    "Kishangarh",
    "Tiruvethipuram",
    "Kathua",
    "Palghar",
    "Nabha",
    "Giridih",
    "Chirkunda",
    "Sankarankovil",
    "Bhavnagar",
    "Morbi",
    "Hosur",
    "Dehri",
    "Mahbubnagar",
    "Chitradurga",
    "Karaikudi",
    "Mandya",
    "Anantapur",
    "Muktsar",
    "Sultanpur",
    "Sangli",
    "Nabadwip",
    "Narwana",
    "Sankeshwara",
    "Tinsukia",
    "Ratlam",
    "Kannauj",
    "Changanassery",
    "Amalner",
    "Gurdaspur",
    "Gokak",
    "Aluva",
    "Khanna",
    "Medininagar",
    "Madikeri",
    "Nilambur",
    "Mormugao",
    "Rajapalayam",
    "Palakkad",
    "Vikarabad",
    "Kot Kapura",
    "Batala",
    "Barasat",
    "Chik Ballapur",
    "Khurja",
    "Sawai Madhopur",
    "Kanhangad",
    "Kanpur",
    "Kuchaman City",
    "Jagdalpur",
    "Mohali",
    "Purulia",
    "Hassan",
    "Kaithal",
    "Tiruvalla",
    "Samalkot",
    "Kotdwara",
    "Chalakudy",
    "Tenkasi",
    "Vasai-Virar",
    "Pauri",
    "Navadwip",
    "Hoskote",
    "Pachora",
    "Narayanpet",
    "Rabkavi Banhatti",
    "Giridih",
    "Sultanpur",
    "Gobindgarh",
    "Kamareddy",
    "Sangamner",
    "Una",
    "Nawada",
    "Pusad",
    "Kotma",
    "Tikamgarh",
    "Mandsaur",
    "Jorhat",
    "Saharsa",
    "Shirpur-Warwade",
    "Kharar",
    "Madhubani",
    "Rishikesh",
    "Jamalpur",
    "Hailakandi",
    "Lakhimpur",
    "Balurghat",
    "Seoni",
    "Shivpuri",
    "Fatehpur",
    "Barwani",
    "Chandausi",
    "Chidambaram",
    "Amreli",
    "Kot Kapura",
    "Karad",
    "Rajnandgaon",
    "Mahbubabad",
    "Sirsi",
    "Karimganj",
    "Banswara",
    "Baruipur",
    "Kapurthala",
    "Adityapur",
    "Roorkee",
    "Anjad",
    "Bokaro",
    "Gokak",
    "Valparai",
    "Sohagpur",
    "Bobbili",
    "Mettupalayam",
    "Jorapokhar",
    "Begusarai",
    "Uran",
    "Korba",
    "Mahalingpur",
    "Mulki",
    "Sausar",
    "Pithampur",
    "Wani",
    "Shikohabad",
    "Pakaur",
    "Pandharpur",
    "Bhadrak",
    "Lahar",
    "Madhepura",
    "Kodungallur",
    "Pulivendla",
    "Alandur",
    "Manmad",
    "Kadapa",
    "Kothagudem",
    "Tumsar",
    "Mangrol",
    "Maharajganj",
    "Faridkot",
    "Rasipuram",
    "Kharagpur",
    "Tamluk",
    "Raayachuru",
    "Srinivaspur",
    "Nalbari",
    "Rajgir",
    "Kancheepuram",
    "Vadamadurai",
    "Bhongaon",
    "Umarkhed",
    "Chamba",
    "Narsinghgarh",
    "Nirmal",
    "Todabhim",
    "Adalaj",
    "Jaggayyapeta",
    "Medak",
    "Tezu",
    "Chitapur",
    "Kovvur",
    "Jhargram",
    "Basti",
    "Hindupur",
    "Puliyankudi",
    "Jind",
    "Kuttampuzha",
    "Narasapur",
    "Rampachodavaram",
    "Wardha",
    "Kalamassery",
    "Sohagpur",
    "Perumbavoor",
    "Villupuram",
    "Alandi",
    "Lakheri",
    "Hajipur",
    "Amudalavalasa",
    "Nagari",
    "Anjar",
    "Warud",
    "Sholinganallur",
    "Sirsilla",
    "Kukatpally",
    "Lalitpur",
    "Kadi",
    "Chakradharpur",
    "Virar",
    "Keshod",
    "Purna",
    "Pardi",
    "Amet",
    "Nanjangud",
    "Wankaner",
    "Sehore",
    "Bagalkot",
    "Bhainsa",
    "Sulya",
    "Vikarabad",
    "Narayanpet",
    "Pandharkaoda",
    "Lilong (Thoubal)",
    "Palwancha",
    "Udaipurwati",
    "Samdhan",
    "Kullu",
    "Nohar",
    "Kangayam",
    "Mahad",
    "Surandai",
    "Sankeshwar",
    "Jhansi",
    "Paravur",
    "Parli",
    "Chirala",
    "Bokaro",
    "Kasaragod",
    "Barwala",
    "Gadwal",
    "Palani",
    "Dhenkanal",
    "Koraput",
    "Jammalamadugu",
    "Vikarabad",
    "Vikramasingapuram",
    "Tiruvannamalai",
    "Anantapur",
    "Tumkur",
    "Navsari",
    "Pilibhit",
    "Rajakhera",
    "Tiruvalla",
    "Pilibanga",
    "Gorakhpur",
    "Ballari",
    "Betul",
    "Badlapur",
    "Unjha",
    "Orai",
    "Barabanki",
    "Shahpura",
    "Panipat",
    "Kannur",
    "Nashik",
    "Tiruppur",
    "Budaun",
    "Kovvur",
    "Padrauna",
    "Baran",
    "Mudhol",
    "Kolar",
    "Kaithal",
    "Dhoraji",
    "Nimbahera",
    "Lunawada",
    "Adoor",
    "Chandrapur",
    "Manjlegaon",
    "Nuzvid",
    "Malappuram",
    "Sangareddy",
    "Hunsur",
    "Ambejogai",
    "Gobichettipalayam",
    "Kabrai",
    "Jetpur Navagadh",
    "Narasaraopet",
    "Nandura",
    "Pulgaon",
    "Shamli",
    "Jangaon",
    "Bongaigaon",
    "Solan",
    "Mavelikkara",
    "Mandla",
    "Pali",
    "Palghar",
    "Rajnandgaon",
    "Gangapur",
    "Mavelikkara",
    "Panchla",
    "Rahuri",
    "Rajpur",
    "Satana",
    "Sonamukhi",
    "Shahabad",
    "Pihani",
    "Umarkot",
    "Warisaliganj",
    "Reengus",
    "Yevla",
    "Tharad",
    "Rajura",
    "Piro",
    "Obra",
    "Mauganj",
    "Tulsipur",
    "Sadri",
    "Rajgarh",
    "Sheikhpura",
    "Murtijapur",
    "Pedana",
    "Vatakara",
    "Tirora",
    "Waraseoni",
    "Narsinghgarh",
    "Chittapur",
    "Mandvi",
    "Nedumangad",
    "Nandgaon",
    "Talcher",
    "Narkhed",
    "Talode",
    "Shrigonda",
    "Kendrapara",
    "Madikeri",
    "Tiruttani",
    "Rath",
    "Nilanga",
    "Nepanagar",
    "Nalbari",
    "Taliparamba",
    "Nakodar",
    "Sijua",
    "Tehri",
    "Merta City",
    "Sanchore",
    "Nelamangala",
    "Pen",
    "Periyakulam",
    "Dalli-Rajhara",
    "Vijapur",
    "Konnagar",
    "Colgong",
    "Nirmal",
    "Vijayapura",
    "Nawabganj",
    "Konnur",
    "Dabra",
    "Uran Islampur",
    "Gopalpur",
    "Chirkunda",
    "Sadabad",
    "Kapadvanj",
    "Gohana",
    "Chhaprauli",
    "Sultanpur",
    "Kadi",
    "Jatani",
    "Swarupnagar",
    "Umaria",
    "Samthar",
    "Sakti",
    "Sadalagi",
    "Silapathar",
    "Lingsugur",
    "Usilampatti",
    "Palia Kalan",
    "Wankaner",
    "Sohagpur",
    "Gurdaspur",
    "Vrindavan",
    "Pipar City",
    "Kot Kapura",
    "Mangrol",
    "Navalgund",
    "Peddapuram",
    "Punganur",
    "Puttur",
    "Alandi",
    "Parlakhemundi",
    "Ponnur",
    "Kumarapalayam",
    "Pudupattinam",
    "Punjaipugalur",
    "Nellikuppam",
    "Natham",
    "Periyasemur",
    "Pernampattu",
    "Kadayanallur",
    "Kattumannarkoil",
    "K.V.Kuppam",
    "Sathyamangalam",
    "Rajapalayam",
    "Punjaipuliampatti",
    "Palladam",
    "Kanjikkuzhi",
    "Sivagiri",
    "Sathiyavijayanagaram",
    "Vadakarai Keezhpadugai",
    "Valparai",
    "Vikramasingapuram",
    "Aruppukkottai",
    "Sivakasi",
    "Nelliyalam",
    "Vadugapatti",
    "Namagiripettai",
    "Kuttalam",
    "Pallapatti",
    "Vedaranyam",
    "Tirukkoyilur",
    "Tirupparangunram",
    "Tiruttangal",
    "Sholingur",
    "Rajapalayam",
    "Palladam",
    "Periyakulam",
    "Perungalathur",
    "Padmanabhapuram",
    "Palani",
    "Pallikonda",
    "Pallipattu",
    "Panruti",
    "Pattukkottai",
    "Pennadam",
    "Pennagaram",
    "Pennathur",
    "Perambalur",
    "Peravurani",
    "Pernambut",
    "Pollachi",
    "Polur",
    "Ponneri",
    "Pudukkottai",
    "Pudupattinam",
    "Puliyankudi",
    "Punjaipugalur",
    "Puthiamputhur",
    "Rajapalayam",
    "Ramanathapuram",
    "Rameshwaram",
    "Rasipuram",
    "Salem",
    "Sankarankoil",
    "Sankari",
    "Sathyamangalam",
    "Sattur",
    "Shenkottai",
    "Sholavandan",
    "Sholingur",
    "Sirkali",
    "Sivaganga",
    "Sivagiri",
    "Sivakasi",
    "Srimushnam",
    "Sriperumbudur",
    "Srivilliputhur",
    "Surandai",
    "Suriyampalayam",
    "Tenkasi",
    "Thammampatti",
    "Thanjavur",
    "Tharamangalam",
    "Tharangambadi",
    "Thirumangalam",
    "Thirumayam",
    "Thirupuvanam",
    "Thiruthuraipoondi",
    "Thiruvallur",
    "Thiruvarur",
    "Thuraiyur",
    "Tindivanam",
    "Tiruchendur",
    "Tiruchengode",
    "Tiruchirappalli",
    "Tirukalukundram",
    "Tirukkoyilur",
    "Tirunelveli",
    "Tirupathur",
    "Tirupathur",
    "Tiruppur",
    "Tiruttani",
    "Tiruvannamalai",
    "Tiruvarur",
    "Tittakudi",
    "Tondi",
    "Udhagamandalam",
    "Udumalaipettai",
    "Unnamalaikadai",
    "Usilampatti",
    "Uthamapalayam",
    "Uthiramerur",
    "Vadakkuvalliyur",
    "Vadalur",
    "Vadipatti",
    "Valparai",
    "Vandavasi",
    "Vaniyambadi",
    "Vedaranyam",
    "Vellakoil",
    "Vellimalai",
    "Vellore",
    "Vikramasingapuram",
    "Viluppuram",
    "Virudhachalam",
    "Virudhunagar",
    "Viswanatham"
  ];

export default citiesInIndia;
