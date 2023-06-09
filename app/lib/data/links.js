// const url = "https://www.arbeitnow.com/api/job-board-api";

export default async function getData(url) {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

// export default async function Page() {
//   const data = await getData();

//   return <main></main>;
// }

// var axios = require("axios");

// var config = {
//   method: "get",
//   maxBodyLength: Infinity,
//   url: "https://www.arbeitnow.com/api/job-board-api",
//   headers: {},
// };

// axios(config)
//   .then(function (response) {
//     console.log(JSON.stringify(response.data));
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

export const links = [
  {
    id: 1,
    href: "/",
    text: "Home",
    active: false,
  },

  // {
  //   id: 2,
  //   href: "/pages/dashboard",
  //   text: " Dashboard",
  //   active: false,
  // },
  {
    id: 3,
    href: "/pages/jobs",
    text: "Jobs",
    active: false,
  },
  {
    id: 4,
    href: "/pages/about",
    text: "About",
    active: false,
  },
  // {
  //   id: 5,
  //   href: "/pages/register",
  //   text: "Register",
  //   active: false,
  // },
];

export const jobs = [
  {
    id: 1,
    title: "Human Resources Manager",
    role: "Surveyor",
    location: "Kuzhu",
    pay: "€2077,44",
    email: "terridge0@list-manage.com",
    type: "cmcgeneay0@histats.com",
    info: "Burn of third degree of multiple left fingers (nail), not including thumb",
    company: "Marks-Homenick",
  },
  {
    id: 2,
    title: "Clinical Specialist",
    role: "Estimator",
    location: "Botshabelo",
    pay: "€3698,01",
    email: "escherer1@ezinearticles.com",
    type: "hberthomier1@time.com",
    info: "Nondisplaced fracture of fourth metatarsal bone, left foot, sequela",
    company: "Shanahan-Leffler",
  },
  {
    id: 3,
    title: "Software Engineer I",
    role: "Engineer",
    location: "Chifeng",
    pay: "€2941,58",
    email: "abruin2@mlb.com",
    type: "plorenc2@mapquest.com",
    info: "Intraoperative and postprocedural complications and disorders of circulatory system, not elsewhere classified",
    company: "Fadel Group",
  },
  {
    id: 4,
    title: "Administrative Assistant I",
    role: "Surveyor",
    location: "Huddinge",
    pay: "€2704,73",
    email: "sfosse3@pagesperso-orange.fr",
    type: "lpietersen3@paypal.com",
    info: "Poisoning by other primarily systemic and hematological agents, assault, sequela",
    company: "Crist, Yundt and McKenzie",
  },
  {
    id: 5,
    title: "Data Coordinator",
    role: "Project Manager",
    location: "Gustavia",
    pay: "€2109,43",
    email: "mellul4@mediafire.com",
    type: "cfluit4@blog.com",
    info: "Alcoholic cirrhosis of liver",
    company: "Halvorson LLC",
  },
  {
    id: 6,
    title: "Web Developer I",
    role: "Architect",
    location: "Macia",
    pay: "€2051,42",
    email: "cleconte5@bbc.co.uk",
    type: "lroeby5@i2i.jp",
    info: "Other specified injury of lesser saphenous vein at lower leg level, left leg, sequela",
    company: "Armstrong, Conn and Pagac",
  },
  {
    id: 7,
    title: "Data Coordinator",
    role: "Supervisor",
    location: "Church End",
    pay: "€3779,33",
    email: "gshirer6@merriam-webster.com",
    type: "rknowlman6@businessinsider.com",
    info: "Superficial foreign body of scalp, sequela",
    company: "VonRueden Inc",
  },
  {
    id: 8,
    title: "Editor",
    role: "Construction Expeditor",
    location: "Vir",
    pay: "€2859,46",
    email: "bjeenes7@twitter.com",
    type: "kduddy7@weather.com",
    info: "Laceration with foreign body, right hip, initial encounter",
    company: "Towne-Kerluke",
  },
  {
    id: 9,
    title: "Cost Accountant",
    role: "Subcontractor",
    location: "Minle",
    pay: "€3993,45",
    email: "atuckwell8@networkadvertising.org",
    type: "jwood8@umich.edu",
    info: "Adverse effect of thrombolytic drugs",
    company: "Pfeffer, Boehm and Mraz",
  },
  {
    id: 10,
    title: "Internal Auditor",
    role: "Subcontractor",
    location: "Qiling",
    pay: "€3422,60",
    email: "pdilloway9@e-recht24.de",
    type: "emcvee9@jiathis.com",
    info: "Displaced fracture of distal phalanx of right little finger",
    company: "West, Luettgen and Boehm",
  },
  {
    id: 11,
    title: "Accounting Assistant II",
    role: "Estimator",
    location: "Götene",
    pay: "€2696,60",
    email: "eduera@alibaba.com",
    type: "jreddella@networkadvertising.org",
    info: "Labor and delivery complicated by fetal stress, unspecified",
    company: "Kemmer, Spinka and Kris",
  },
  {
    id: 12,
    title: "Librarian",
    role: "Architect",
    location: "San Ramón",
    pay: "€2215,69",
    email: "cgilluleyb@cbc.ca",
    type: "jlotheringtonb@etsy.com",
    info: "Melanoma in situ of other part of trunk",
    company: "Ledner, Dare and Hane",
  },
  {
    id: 13,
    title: "Financial Analyst",
    role: "Estimator",
    location: "Xinhuang",
    pay: "€3452,69",
    email: "toleaghamc@smh.com.au",
    type: "eevequotc@indiegogo.com",
    info: "Displaced bicondylar fracture of right tibia, subsequent encounter for open fracture type I or II with delayed healing",
    company: "Orn, Bosco and Streich",
  },
  {
    id: 14,
    title: "Engineer IV",
    role: "Subcontractor",
    location: "Ganné Tiqwa",
    pay: "€2937,32",
    email: "lmillingtond@imgur.com",
    type: "bscrogginsd@gov.uk",
    info: "Foreign body in right ear, subsequent encounter",
    company: "Turner-Kihn",
  },
  {
    id: 15,
    title: "Environmental Specialist",
    role: "Estimator",
    location: "São Paio de Gramaços",
    pay: "€3878,19",
    email: "awinchcume@xrea.com",
    type: "mcolvine@mtv.com",
    info: "Other specified arthritis, left elbow",
    company: "Nitzsche, Goyette and Collier",
  },
  {
    id: 16,
    title: "Business Systems Development Analyst",
    role: "Construction Worker",
    location: "Irirum",
    pay: "€3460,87",
    email: "ffairecloughf@angelfire.com",
    type: "jgudgef@de.vu",
    info: "Displaced fracture of left tibial tuberosity, initial encounter for closed fracture",
    company: "McGlynn-Hegmann",
  },
  {
    id: 17,
    title: "Research Nurse",
    role: "Electrician",
    location: "Sidokumpul",
    pay: "€3430,49",
    email: "rheatlyg@yahoo.co.jp",
    type: "imacgebenayg@cisco.com",
    info: "Anterior subcapsular polar infantile and juvenile cataract, unspecified eye",
    company: "Osinski, Wolff and Gorczany",
  },
  {
    id: 18,
    title: "Director of Sales",
    role: "Electrician",
    location: "Stizhkivs’ke",
    pay: "€3873,76",
    email: "jnurseh@harvard.edu",
    type: "gpichefordh@dailymotion.com",
    info: "Non-pressure chronic ulcer of other part of left foot with necrosis of bone",
    company: "Boehm and Sons",
  },
  {
    id: 19,
    title: "Information Systems Manager",
    role: "Surveyor",
    location: "Xibin",
    pay: "€3041,04",
    email: "hocainei@va.gov",
    type: "rkleyni@answers.com",
    info: "Underdosing of other bacterial vaccines, initial encounter",
    company: "Mueller-Brown",
  },
  {
    id: 20,
    title: "Office Assistant III",
    role: "Project Manager",
    location: "Nantes",
    pay: "€2352,05",
    email: "bhallockj@ucla.edu",
    type: "sdibnahj@pen.io",
    info: "Unspecified injury of muscle and tendon of back wall of thorax, subsequent encounter",
    company: "Hackett LLC",
  },
  {
    id: 21,
    title: "Human Resources Assistant I",
    role: "Architect",
    location: "Shixi",
    pay: "€3306,07",
    email: "rwitherbyk@marketwatch.com",
    type: "gsighartk@guardian.co.uk",
    info: "Toxic effect of other pesticides, accidental (unintentional), initial encounter",
    company: "Hintz, Weimann and Brakus",
  },
  {
    id: 22,
    title: "Administrative Assistant II",
    role: "Estimator",
    location: "Lewotukan",
    pay: "€3945,91",
    email: "lbastablel@hostgator.com",
    type: "cdanjoiel@yellowbook.com",
    info: "Drowning and submersion due to fall off (nonpowered) inflatable craft, sequela",
    company: "Mosciski LLC",
  },
  {
    id: 23,
    title: "Web Designer IV",
    role: "Project Manager",
    location: "Poste du Lac",
    pay: "€2991,23",
    email: "sfillimorem@google.it",
    type: "sscroobym@hexun.com",
    info: "Nondisplaced fracture of medial phalanx of right index finger, subsequent encounter for fracture with routine healing",
    company: "Corwin and Sons",
  },
  {
    id: 24,
    title: "Tax Accountant",
    role: "Estimator",
    location: "Aţ Ţīrah",
    pay: "€2615,90",
    email: "mchadbournen@yahoo.co.jp",
    type: "abruggemann@europa.eu",
    info: "Displaced pilon fracture of unspecified tibia, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with nonunion",
    company: "Price, Beer and Stehr",
  },
  {
    id: 25,
    title: "Director of Sales",
    role: "Construction Expeditor",
    location: "Gémeos",
    pay: "€2632,33",
    email: "bdukeso@fotki.com",
    type: "kaccombo@unc.edu",
    info: "Partial traumatic amputation at elbow level, right arm, sequela",
    company: "Howe and Sons",
  },
  {
    id: 26,
    title: "Assistant Manager",
    role: "Project Manager",
    location: "Żarki",
    pay: "€3866,12",
    email: "rfleetwoodp@eepurl.com",
    type: "dpaulip@youku.com",
    info: "Other fracture of shaft of radius, unspecified arm, subsequent encounter for closed fracture with malunion",
    company: "Lehner Group",
  },
  {
    id: 27,
    title: "Internal Auditor",
    role: "Construction Expeditor",
    location: "Vetluzhskiy",
    pay: "€2212,63",
    email: "gmanskeq@aboutads.info",
    type: "dashlingq@time.com",
    info: "Burn of unspecified degree of multiple sites of right shoulder and upper limb, except wrist and hand, sequela",
    company: "McKenzie-Bailey",
  },
  {
    id: 28,
    title: "Legal Assistant",
    role: "Electrician",
    location: "Zhongchuan",
    pay: "€3953,36",
    email: "amcindoer@constantcontact.com",
    type: "ttater@histats.com",
    info: "Unspecified corneal neovascularization, bilateral",
    company: "Armstrong, Kuhic and Witting",
  },
  {
    id: 29,
    title: "Marketing Manager",
    role: "Construction Expeditor",
    location: "Shi’an",
    pay: "€3503,24",
    email: "mwroths@geocities.jp",
    type: "alowes@ifeng.com",
    info: "Person boarding or alighting a three-wheeled motor vehicle injured in collision with other nonmotor vehicle, initial encounter",
    company: "Hyatt, Abernathy and Auer",
  },
  {
    id: 30,
    title: "Budget/Accounting Analyst IV",
    role: "Architect",
    location: "Gotputuk",
    pay: "€2894,45",
    email: "statnellt@arizona.edu",
    type: "gsalsburyt@smh.com.au",
    info: "Displaced comminuted fracture of shaft of humerus, unspecified arm, subsequent encounter for fracture with nonunion",
    company: "Walsh, Kerluke and Cassin",
  },
  {
    id: 31,
    title: "Database Administrator II",
    role: "Project Manager",
    location: "Paris 19",
    pay: "€3045,55",
    email: "rbrunnenu@reference.com",
    type: "mhubeauxu@is.gd",
    info: "Nondisplaced fracture of cuboid bone of unspecified foot, subsequent encounter for fracture with routine healing",
    company: "Johns-Leffler",
  },
  {
    id: 32,
    title: "Programmer I",
    role: "Architect",
    location: "Casablanca",
    pay: "€2992,37",
    email: "jshortinv@youku.com",
    type: "ghennigerv@jimdo.com",
    info: "Other specified injury of unspecified blood vessel of thorax",
    company: "Rice-Brekke",
  },
  {
    id: 33,
    title: "Paralegal",
    role: "Electrician",
    location: "La Esperanza",
    pay: "€3989,57",
    email: "mjeaffersonw@springer.com",
    type: "ftrevascusw@deviantart.com",
    info: "Poisoning by ophthalmological drugs and preparations, intentional self-harm, subsequent encounter",
    company: "Kovacek-Cartwright",
  },
  {
    id: 34,
    title: "Electrical Engineer",
    role: "Supervisor",
    location: "Alfeizerão",
    pay: "€2283,17",
    email: "cmoresbyx@prweb.com",
    type: "jbraddonx@example.com",
    info: "Unspecified fracture of surgical neck of humerus",
    company: "Mayer-Rogahn",
  },
  {
    id: 35,
    title: "Design Engineer",
    role: "Engineer",
    location: "Mombaça",
    pay: "€2398,93",
    email: "ggarrigany@fc2.com",
    type: "qcowdeny@liveinternet.ru",
    info: "Puncture wound with foreign body, unspecified foot, subsequent encounter",
    company: "Schmitt-Prohaska",
  },
  {
    id: 36,
    title: "Structural Engineer",
    role: "Architect",
    location: "Shixiang",
    pay: "€3569,08",
    email: "hstivaniz@hhs.gov",
    type: "metonz@mapy.cz",
    info: "Incontinence without sensory awareness",
    company: "Durgan and Sons",
  },
  {
    id: 37,
    title: "Payment Adjustment Coordinator",
    role: "Construction Expeditor",
    location: "Richky",
    pay: "€4280,57",
    email: "afratczak10@ovh.net",
    type: "ysiman10@mozilla.com",
    info: "Laceration of radial artery at forearm level, right arm, subsequent encounter",
    company: "Kozey, Kuhlman and Labadie",
  },
  {
    id: 38,
    title: "Web Developer II",
    role: "Construction Expeditor",
    location: "Belovodskoye",
    pay: "€3494,32",
    email: "patyeo11@youku.com",
    type: "rtomasz11@theglobeandmail.com",
    info: "Poisoning by antiasthmatics, intentional self-harm, initial encounter",
    company: "Blanda-Bartell",
  },
  {
    id: 39,
    title: "Administrative Assistant III",
    role: "Construction Foreman",
    location: "Zhufo",
    pay: "€4304,36",
    email: "tkington12@wikispaces.com",
    type: "tlyard12@pagesperso-orange.fr",
    info: "Traumatic rupture of volar plate of right index finger at metacarpophalangeal and interphalangeal joint, initial encounter",
    company: "Sporer-Mitchell",
  },
  {
    id: 40,
    title: "Safety Technician III",
    role: "Electrician",
    location: "Mbalmayo",
    pay: "€3307,89",
    email: "rizatson13@uol.com.br",
    type: "tstichel13@joomla.org",
    info: "Displaced avulsion fracture (chip fracture) of right talus, initial encounter for closed fracture",
    company: "Reichert-Rempel",
  },
  {
    id: 41,
    title: "Clinical Specialist",
    role: "Construction Expeditor",
    location: "Huacho",
    pay: "€4160,19",
    email: "dollie14@altervista.org",
    type: "ocarnegie14@geocities.com",
    info: "Unspecified fracture of skull, sequela",
    company: "Kshlerin, Gutkowski and Dooley",
  },
  {
    id: 42,
    title: "Statistician IV",
    role: "Construction Worker",
    location: "Mikhnëvo",
    pay: "€2124,42",
    email: "ahouseman15@buzzfeed.com",
    type: "ctwidell15@seesaa.net",
    info: "Unspecified trochanteric fracture of right femur, subsequent encounter for open fracture type I or II with routine healing",
    company: "Beer, Murray and Herzog",
  },
  {
    id: 43,
    title: "Nuclear Power Engineer",
    role: "Engineer",
    location: "Colorado Springs",
    pay: "€3194,33",
    email: "cmarling16@msn.com",
    type: "bcrang16@hc360.com",
    info: "Exposure to other specified electric current",
    company: "Streich, Hickle and Goyette",
  },
  {
    id: 44,
    title: "Legal Assistant",
    role: "Construction Manager",
    location: "Torsby",
    pay: "€2671,10",
    email: "llimbourne17@vistaprint.com",
    type: "ydavidsson17@washington.edu",
    info: "Burn of third degree of unspecified shoulder",
    company: "Doyle LLC",
  },
  {
    id: 45,
    title: "Staff Scientist",
    role: "Project Manager",
    location: "Guandi",
    pay: "€4308,51",
    email: "forts18@bravesites.com",
    type: "amerrell18@youtu.be",
    info: "Spondylosis without myelopathy or radiculopathy, site unspecified",
    company: "Koss and Sons",
  },
  {
    id: 46,
    title: "Programmer Analyst IV",
    role: "Surveyor",
    location: "Sentul",
    pay: "€2079,26",
    email: "nainscough19@slate.com",
    type: "mspieck19@mac.com",
    info: "Other sphingolipidosis",
    company: "Bergnaum-Funk",
  },
  {
    id: 47,
    title: "Data Coordinator",
    role: "Construction Expeditor",
    location: "Tiberias",
    pay: "€3295,37",
    email: "sbownde1a@craigslist.org",
    type: "ktrenholm1a@unicef.org",
    info: "Laceration with foreign body of left index finger with damage to nail, initial encounter",
    company: "Lueilwitz LLC",
  },
  {
    id: 48,
    title: "Clinical Specialist",
    role: "Subcontractor",
    location: "Chesma",
    pay: "€3467,16",
    email: "nzotto1b@msn.com",
    type: "tdennert1b@quantcast.com",
    info: "Displaced fracture of lateral malleolus of left fibula, subsequent encounter for closed fracture with routine healing",
    company: "Marvin Group",
  },
  {
    id: 49,
    title: "Director of Sales",
    role: "Subcontractor",
    location: "La Rochelle",
    pay: "€3625,92",
    email: "spoytres1c@smugmug.com",
    type: "wolyff1c@cnn.com",
    info: "Blister (nonthermal), right lesser toe(s), subsequent encounter",
    company: "Jones-Renner",
  },
  {
    id: 50,
    title: "Nurse",
    role: "Construction Foreman",
    location: "Jiangwang",
    pay: "€3901,94",
    email: "reilhersen1d@telegraph.co.uk",
    type: "dbuss1d@kickstarter.com",
    info: "Contact with sword or dagger, undetermined intent",
    company: "Torp-Howe",
  },
  {
    id: 51,
    title: "Payment Adjustment Coordinator",
    role: "Electrician",
    location: "Villaguay",
    pay: "€3978,49",
    email: "mcanby1e@wired.com",
    type: "agoldney1e@livejournal.com",
    info: "Nondisplaced fracture of medial malleolus of left tibia, sequela",
    company: "Ullrich-Boyle",
  },
  {
    id: 52,
    title: "Marketing Assistant",
    role: "Electrician",
    location: "San Jose",
    pay: "€2894,18",
    email: "cvanthoff1f@springer.com",
    type: "ejamblin1f@artisteer.com",
    info: "Blister (nonthermal) of eyelid and periocular area",
    company: "Cronin, Walsh and Jacobson",
  },
  {
    id: 53,
    title: "Physical Therapy Assistant",
    role: "Architect",
    location: "Uryupinsk",
    pay: "€2233,97",
    email: "mmacgibbon1g@edublogs.org",
    type: "akeegan1g@opensource.org",
    info: "Occupant of streetcar injured by fall in streetcar, initial encounter",
    company: "Marquardt, Reynolds and Kunde",
  },
  {
    id: 54,
    title: "Human Resources Assistant I",
    role: "Estimator",
    location: "Macarse",
    pay: "€4282,27",
    email: "lhurrion1h@omniture.com",
    type: "gcotsford1h@nyu.edu",
    info: "Unspecified injury of right quadriceps muscle, fascia and tendon",
    company: "Hills, Weber and Hackett",
  },
  {
    id: 55,
    title: "Budget/Accounting Analyst III",
    role: "Construction Manager",
    location: "Krajan Baru",
    pay: "€2991,84",
    email: "hbalchin1i@studiopress.com",
    type: "tladewig1i@phpbb.com",
    info: "Salter-Harris Type III physeal fracture of phalanx of unspecified toe, subsequent encounter for fracture with malunion",
    company: "Kozey Group",
  },
  {
    id: 56,
    title: "Senior Cost Accountant",
    role: "Construction Expeditor",
    location: "Constantia",
    pay: "€2887,24",
    email: "dhanselmann1j@fc2.com",
    type: "dgepp1j@ebay.co.uk",
    info: "Displaced fracture of shaft of fourth metacarpal bone, left hand, initial encounter for open fracture",
    company: "Dibbert-Harris",
  },
  {
    id: 57,
    title: "Accountant II",
    role: "Architect",
    location: "Shuya",
    pay: "€3066,65",
    email: "afaccini1k@51.la",
    type: "nkerrigan1k@weather.com",
    info: "Nondisplaced oblique fracture of shaft of left tibia, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with delayed healing",
    company: "Rempel-Kuhic",
  },
  {
    id: 58,
    title: "Account Executive",
    role: "Project Manager",
    location: "Ceerigaabo",
    pay: "€2157,75",
    email: "cdietmar1l@umn.edu",
    type: "bwenban1l@acquirethisname.com",
    info: "Poisoning by barbiturates, intentional self-harm, sequela",
    company: "Walker LLC",
  },
  {
    id: 59,
    title: "Account Coordinator",
    role: "Electrician",
    location: "Yishi",
    pay: "€3401,35",
    email: "cmccosker1m@wired.com",
    type: "eredwing1m@craigslist.org",
    info: "Exophoria",
    company: "West-Ledner",
  },
  {
    id: 60,
    title: "Editor",
    role: "Supervisor",
    location: "Wuqiao",
    pay: "€2600,63",
    email: "bwatkins1n@1688.com",
    type: "hbehning1n@mysql.com",
    info: "Complete traumatic amputation of left foot at ankle level, sequela",
    company: "Kautzer-Anderson",
  },
  {
    id: 61,
    title: "Librarian",
    role: "Supervisor",
    location: "Nizhneivkino",
    pay: "€2394,38",
    email: "ttoffalo1o@weebly.com",
    type: "fentwisle1o@nydailynews.com",
    info: "Poisoning by unspecified agents primarily affecting the gastrointestinal system, undetermined",
    company: "Lang, Donnelly and Waelchi",
  },
  {
    id: 62,
    title: "Web Designer III",
    role: "Project Manager",
    location: "Guantian",
    pay: "€3133,44",
    email: "hdinsmore1p@ow.ly",
    type: "dmacgiany1p@salon.com",
    info: "Nondisplaced avulsion fracture of left ilium, initial encounter for closed fracture",
    company: "Ferry Group",
  },
  {
    id: 63,
    title: "Accountant III",
    role: "Engineer",
    location: "Akouda",
    pay: "€3888,31",
    email: "fmiguet1q@shop-pro.jp",
    type: "tbusfield1q@networksolutions.com",
    info: "Poisoning by unspecified hormone antagonists, intentional self-harm, initial encounter",
    company: "Jacobson LLC",
  },
  {
    id: 64,
    title: "Account Executive",
    role: "Surveyor",
    location: "Geneina",
    pay: "€3750,20",
    email: "rpadell1r@baidu.com",
    type: "btarren1r@e-recht24.de",
    info: "Sprain of metatarsophalangeal joint of right lesser toe(s), initial encounter",
    company: "Wilkinson, Kuvalis and Terry",
  },
  {
    id: 65,
    title: "Registered Nurse",
    role: "Construction Manager",
    location: "Isnā",
    pay: "€3272,11",
    email: "dpetticrow1s@skyrock.com",
    type: "vholyland1s@dot.gov",
    info: "Military operations involving unspecified effect of nuclear weapon, military personnel, subsequent encounter",
    company: "Tillman, Cronin and Bahringer",
  },
  {
    id: 66,
    title: "Registered Nurse",
    role: "Estimator",
    location: "Vilcún",
    pay: "€3680,45",
    email: "ssmy1t@engadget.com",
    type: "hspray1t@tripod.com",
    info: "Corrosion of unspecified degree of unspecified site of left lower limb, except ankle and foot, subsequent encounter",
    company: "Heller LLC",
  },
  {
    id: 67,
    title: "Nuclear Power Engineer",
    role: "Engineer",
    location: "Na Kae",
    pay: "€3864,98",
    email: "sjarrard1u@mtv.com",
    type: "dspraging1u@sciencedaily.com",
    info: "Myositis ossificans progressiva, left forearm",
    company: "Ernser Inc",
  },
  {
    id: 68,
    title: "Computer Systems Analyst IV",
    role: "Construction Worker",
    location: "Samaro",
    pay: "€2209,22",
    email: "rprazer1v@storify.com",
    type: "wpellman1v@theglobeandmail.com",
    info: "Toxic effect of tobacco cigarettes, undetermined",
    company: "Williamson, Hodkiewicz and Feil",
  },
  {
    id: 69,
    title: "Software Test Engineer III",
    role: "Construction Worker",
    location: "Tiyuguan",
    pay: "€3635,17",
    email: "zlosel1w@theatlantic.com",
    type: "alanchbury1w@ihg.com",
    info: "Nondisplaced fracture of trapezium [larger multangular], unspecified wrist, subsequent encounter for fracture with malunion",
    company: "Hirthe, Aufderhar and Rempel",
  },
  {
    id: 70,
    title: "Project Manager",
    role: "Estimator",
    location: "Enköping",
    pay: "€3457,23",
    email: "dbril1x@imageshack.us",
    type: "schawkley1x@ft.com",
    info: "Minor laceration of inferior mesenteric artery, initial encounter",
    company: "Willms, O'Hara and Upton",
  },
  {
    id: 71,
    title: "Technical Writer",
    role: "Electrician",
    location: "Cilangla",
    pay: "€3572,19",
    email: "dpingstone1y@uiuc.edu",
    type: "bbeveridge1y@tuttocitta.it",
    info: "Unspecified fracture of upper end of left ulna, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with delayed healing",
    company: "Goyette-Raynor",
  },
  {
    id: 72,
    title: "Assistant Manager",
    role: "Project Manager",
    location: "Pravda",
    pay: "€3760,51",
    email: "casche1z@vimeo.com",
    type: "ggoulder1z@flickr.com",
    info: "Unspecified fracture of left wrist and hand, subsequent encounter for fracture with malunion",
    company: "Will-Rowe",
  },
  {
    id: 73,
    title: "Analog Circuit Design manager",
    role: "Supervisor",
    location: "Verkhnevilyuysk",
    pay: "€4453,75",
    email: "kreggiani20@amazonaws.com",
    type: "chennemann20@uol.com.br",
    info: "Lactose intolerance, unspecified",
    company: "Barton-Schroeder",
  },
  {
    id: 74,
    title: "Desktop Support Technician",
    role: "Supervisor",
    location: "Kaingiwa",
    pay: "€2781,86",
    email: "kmingard21@domainmarket.com",
    type: "kcalbert21@ocn.ne.jp",
    info: "Malignant neoplasm of pineal gland",
    company: "Fisher-Moore",
  },
  {
    id: 75,
    title: "Software Consultant",
    role: "Construction Expeditor",
    location: "Trpinja",
    pay: "€2719,39",
    email: "bclampton22@homestead.com",
    type: "lcarruthers22@wikipedia.org",
    info: "Unspecified fracture of unspecified forearm, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with malunion",
    company: "Mills-Rath",
  },
  {
    id: 76,
    title: "Human Resources Manager",
    role: "Architect",
    location: "Lypnyazhka",
    pay: "€3253,38",
    email: "roldford23@merriam-webster.com",
    type: "agearty23@tuttocitta.it",
    info: "Other specified disorders of thyroid",
    company: "Bode-Harris",
  },
  {
    id: 77,
    title: "Actuary",
    role: "Construction Expeditor",
    location: "Třemošnice",
    pay: "€3538,74",
    email: "krought24@washingtonpost.com",
    type: "dolivera24@columbia.edu",
    info: "Poisoning by, adverse effect of and underdosing of fibrinolysis-affecting drugs",
    company: "Sporer LLC",
  },
  {
    id: 78,
    title: "Account Coordinator",
    role: "Estimator",
    location: "Shaxi",
    pay: "€2770,12",
    email: "mgaukrodge25@tumblr.com",
    type: "rbengough25@eventbrite.com",
    info: "Corrosion of second degree of right thumb (nail), initial encounter",
    company: "Kreiger, Padberg and Bartoletti",
  },
  {
    id: 79,
    title: "Product Engineer",
    role: "Electrician",
    location: "Zumiao",
    pay: "€2958,45",
    email: "lwipfler26@myspace.com",
    type: "gnolte26@statcounter.com",
    info: "Underdosing of antiparkinsonism drugs and other central muscle-tone depressants, subsequent encounter",
    company: "Keeling, Powlowski and VonRueden",
  },
  {
    id: 80,
    title: "Statistician IV",
    role: "Architect",
    location: "Verin Dvin",
    pay: "€4024,37",
    email: "lminshall27@hao123.com",
    type: "sphilippet27@wikimedia.org",
    info: "Anesthesiology devices associated with adverse incidents",
    company: "Lueilwitz, Bashirian and Franecki",
  },
  {
    id: 81,
    title: "Assistant Manager",
    role: "Construction Expeditor",
    location: "Reisdorf",
    pay: "€2873,10",
    email: "hcallington28@delicious.com",
    type: "lmarquand28@msu.edu",
    info: "Other complications specific to multiple gestation, second trimester, fetus 5",
    company: "Ullrich Inc",
  },
  {
    id: 82,
    title: "General Manager",
    role: "Electrician",
    location: "Lazaro Cardenas",
    pay: "€3609,76",
    email: "lcausier29@marriott.com",
    type: "mlambden29@mysql.com",
    info: "Poisoning by other hormone antagonists, assault, sequela",
    company: "Cremin Inc",
  },
  {
    id: 83,
    title: "Software Test Engineer I",
    role: "Construction Foreman",
    location: "Boa Viagem",
    pay: "€2992,89",
    email: "dneising2a@yellowpages.com",
    type: "dgoreway2a@addtoany.com",
    info: "Other secondary chronic gout, elbow",
    company: "Kunde Group",
  },
  {
    id: 84,
    title: "Environmental Specialist",
    role: "Architect",
    location: "Paris 09",
    pay: "€2777,97",
    email: "lmildner2b@guardian.co.uk",
    type: "jnockalls2b@typepad.com",
    info: "Unspecified physeal fracture of left calcaneus, initial encounter for closed fracture",
    company: "Grant and Sons",
  },
  {
    id: 85,
    title: "Operator",
    role: "Construction Foreman",
    location: "Resende",
    pay: "€4403,49",
    email: "pschwandermann2c@youku.com",
    type: "bwarstall2c@ning.com",
    info: "Nondisplaced transverse fracture of shaft of unspecified radius, subsequent encounter for open fracture type I or II with delayed healing",
    company: "Padberg, Hills and Yundt",
  },
  {
    id: 86,
    title: "Payment Adjustment Coordinator",
    role: "Architect",
    location: "Padangbai",
    pay: "€2649,16",
    email: "ttorbard2d@hubpages.com",
    type: "kstammler2d@sphinn.com",
    info: "Salter-Harris Type II physeal fracture of lower end of ulna, left arm, subsequent encounter for fracture with nonunion",
    company: "Dare-Wilkinson",
  },
  {
    id: 87,
    title: "Help Desk Technician",
    role: "Engineer",
    location: "Safotu",
    pay: "€4445,13",
    email: "ftoop2e@imageshack.us",
    type: "kcurrin2e@webeden.co.uk",
    info: "Nondisplaced fracture of right tibial tuberosity, subsequent encounter for closed fracture with delayed healing",
    company: "Mraz-O'Keefe",
  },
  {
    id: 88,
    title: "Automation Specialist II",
    role: "Architect",
    location: "San Narciso",
    pay: "€3727,52",
    email: "wswannick2f@wikispaces.com",
    type: "hlabusquiere2f@aboutads.info",
    info: "Other psychoactive substance abuse with intoxication with perceptual disturbances",
    company: "Carter-Bauch",
  },
  {
    id: 89,
    title: "Executive Secretary",
    role: "Construction Foreman",
    location: "Nashville",
    pay: "€3078,87",
    email: "mfelip2g@omniture.com",
    type: "eballinger2g@bing.com",
    info: "Abnormal level of hormones in specimens from male genital organs",
    company: "Legros and Sons",
  },
  {
    id: 90,
    title: "Electrical Engineer",
    role: "Construction Foreman",
    location: "Avignon",
    pay: "€2807,40",
    email: "jcolbeck2h@europa.eu",
    type: "cmcmurty2h@amazon.co.uk",
    info: "Paraplegia",
    company: "Halvorson, Runolfsson and Carter",
  },
  {
    id: 91,
    title: "Senior Developer",
    role: "Construction Manager",
    location: "Jaru",
    pay: "€4126,27",
    email: "pcudde2i@storify.com",
    type: "vpendrick2i@facebook.com",
    info: "Partial traumatic amputation of one right lesser toe, subsequent encounter",
    company: "Block-Effertz",
  },
  {
    id: 92,
    title: "Recruiter",
    role: "Construction Foreman",
    location: "Imbituba",
    pay: "€2228,10",
    email: "aflecknoe2j@photobucket.com",
    type: "eelcome2j@fda.gov",
    info: "Burn of third degree of unspecified shoulder, initial encounter",
    company: "Baumbach and Sons",
  },
  {
    id: 93,
    title: "Staff Scientist",
    role: "Engineer",
    location: "Narew",
    pay: "€3026,09",
    email: "hshelly2k@dailymail.co.uk",
    type: "jdrillingcourt2k@hhs.gov",
    info: "Kearns-Sayre syndrome, bilateral",
    company: "Lind LLC",
  },
  {
    id: 94,
    title: "Senior Quality Engineer",
    role: "Subcontractor",
    location: "Vahdat",
    pay: "€2363,14",
    email: "zmcentegart2l@ameblo.jp",
    type: "gaikett2l@etsy.com",
    info: "Other fracture of left talus, subsequent encounter for fracture with nonunion",
    company: "Boyle, Schiller and Rohan",
  },
  {
    id: 95,
    title: "Accounting Assistant IV",
    role: "Construction Foreman",
    location: "Libuganon",
    pay: "€2183,59",
    email: "spolfer2m@digg.com",
    type: "shorrod2m@yelp.com",
    info: "Underdosing of saline and osmotic laxatives, subsequent encounter",
    company: "Emmerich and Sons",
  },
  {
    id: 96,
    title: "Junior Executive",
    role: "Construction Worker",
    location: "Jambesari",
    pay: "€3381,34",
    email: "gandrea2n@apple.com",
    type: "mluetkemeyer2n@tuttocitta.it",
    info: "Person on outside of car injured in collision with pedestrian or animal in nontraffic accident, subsequent encounter",
    company: "Walsh LLC",
  },
  {
    id: 97,
    title: "Structural Analysis Engineer",
    role: "Estimator",
    location: "Yantongtun",
    pay: "€2324,06",
    email: "hlaste2o@economist.com",
    type: "tnolot2o@scribd.com",
    info: "Fracture of other parts of neck, sequela",
    company: "Streich Inc",
  },
  {
    id: 98,
    title: "Health Coach I",
    role: "Estimator",
    location: "La Cruz",
    pay: "€2754,00",
    email: "rblaney2p@ucsd.edu",
    type: "plemary2p@npr.org",
    info: "Acute duodenal ulcer with both hemorrhage and perforation",
    company: "Corkery, Jerde and Becker",
  },
  {
    id: 99,
    title: "Chief Design Engineer",
    role: "Construction Worker",
    location: "Tuochuan",
    pay: "€3783,48",
    email: "dkeattch2q@cdbaby.com",
    type: "heagers2q@cisco.com",
    info: "Strain of left quadriceps muscle, fascia and tendon, subsequent encounter",
    company: "Ebert LLC",
  },
  {
    id: 100,
    title: "Structural Engineer",
    role: "Surveyor",
    location: "Paupanda Bawah",
    pay: "€2343,20",
    email: "rrestill2r@twitter.com",
    type: "hthews2r@sourceforge.net",
    info: "Other superficial bite of lower back and pelvis",
    company: "Kuhn LLC",
  },
];
