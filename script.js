// Course data
const courses = {
    "INFORMATIQUE": [
        "MICROSOFT WORD", "INITIATION EXCEL", "EXCEL AVANCE",
        "ETUDE ET INSTALLATION DES SYSTEMES DE VIDEOSURVEILLANCE",
        "TELESURVEILLANCE IP", "INITIATION AUTOCAD", "AUTOCAD NIVEAU 2 et 3",
        "GESTION DES PROJETS SOUS MS PROJECT", "SOLIDWORKS NIVEAU 1, 2 ET 3",
        "CONFIGURATION DES RESEAUX INFORMATIQUE", "MAINTENANCE DES SYSTÈMES INFORMATIQUE",
        "INSTALLATION SYSTEMES DE DETECTION D'INCENDIE"
    ],
    "HYGIENE ET SECURITE": [
        "RISQUES GAZ", "SECURITE INDUSTRIELLE", "SÉCURITÉ ROUTIÈRE",
        "SECURITE EN ENTREPOTS ET MAGASINS DE STOCKAGE", "PREVENTION DES RISQUES CHIMIQUES",
        "PREVENTION ET LUTTE CONTRE L'INCENDIE", "PREVENTION GENERALE DES RISQUES PROFESSIONNELS",
        "CPHS (rôle et missions)", "SENSIBILISATION AU MANAGEMENT DE LA SURETE INTERNE DE L'ENTREPRISE",
        "RISQUES MECANIQUES ET MANUTENTION", "RISQUES ET DANGERS DANS LE MILIEU INDUSTRIEL",
        "RISQUES LIES AU TRAVAUX EN HAUTEUR", "GESTION DES DECHETS",
        "PREVENTION DES RISQUES BRUIT ET VIBRATION"
    ],
    "GESTION DES PRODUITS CHIMIQUES": [
        "GESTION ET TRACABILITE DES PRODUITS CHIMIQUES DANGEREUX", "SECOURISME", "HSE",
        "NATURAL GAZ SAFETY", "PLD HSE", "IDENTIFICATION ET EVALUATION DES RISQUES PROFESSIONNELS",
        "INDUCTION HSE DANS LES ATELIERS INDUSTRIELS",
        "VEILLER A LA SECURITE ET LA PROTECTION DES BIENS ET DE PERSONNES LIES A L'ENTREPRISE",
        "SURETÉ INTERNE DES ÉTABLISSEMENTS",
        "LES REGLES DE CONCEPTION D'INSPECTION ET D'EXPLOITATION DES RESEAUX ANTI INCENDIE",
        "MANUTENTION ET TECHNIQUES DE LEVAGE", "ENVIRONNEMENT SANTE ET SECURITE AU TRAVAIL (SST)",
        "CHEF DE PROTECTION SITE"
    ],
    "ENSEIGNEMENT GENERAL": [
        "BIEN RAISONNER POUR BIEN AGIR", "COMMUNICATION", "CONDUITE DE REUNION",
        "COORDINATION OEIL /MAIN", "GESTION ET ORGANISATION DU TEMPS DE TRAVAIL", "ANIMATEUR HSE",
        "AMDEC", "TECHNIQUES DE COMMANDEMENT", "LEGISLATION DE TRAVAIL POUR RH",
        "ANGLAIS GENERAL / ANGLAIS TECHNIQUE", "ELABORATION DES CAHIERS DES CHARGES",
        "AGENT D'ACCUEIL", "INDICATEURS DE PERFORMANCES (TABLEAU DE BORD)", "INGÉNIERIE PÉDAGOGIQUE",
        "FORMATION DES AGENTS DE GARDIENNAGE", "FORMATION DES FORMATEURS", "COPEO",
        "AUDIT INTERNE SST", "GESTION DE STRESS", "GESTION DES RELATIONS PAR LA PNL"
    ],
    "BREVETS ET CONDUITE": [
        "BREVET PROFESSIONNEL DE TRANSPORT DES MATIERES DANGEREUSES",
        "BREVET PROFESSIONNEL DES CONDUCTEURS DE VEHICULES DE TRANSPORT DE MARCHANDISES/CATEGORIE CI ET C2",
        "CONDUITE DE NACELLE", "CONDUITE DES PONTS ROULANTS", "PERMIS DE CONDUIRE POID LOURD",
        "QUALIFICATION DES CONDUCTEURS D'ENGINS"
    ],
    "MANAGEMENT": [
        "HABILITATION ATEX (NIVEAU O ET NIVEAU 01)",
        "HABILITATION ECHAFAUDAGE: MONTAGE,INSPECTION ET RISQUES",
        "MANAGEMENT : IS0 9001 et 14001 V 2015 IS0 45001 V 2018", "MANAGEMENT QSE",
        "MANAGEMENT SITUATIONNEL", "PLAN D'INTERVENTION INTERNE"
    ]
};

// Algerian administrative divisions
const wilayas = {
    "Adrar": ["Adrar", "Aoulef", "Aougrout", "Timimoun", "Fenoughil", "Tinerkouk", "Zaouiet Kounta", "Tsabit", "Reggane", "In Zghmir"],
    "Chlef": ["Chlef", "Ténès", "Benairia", "El Karimia", "Tadjna", "Taougrit", "Beni Haoua", "Sobha", "Harchoun", "Oued Fodda"],
    "Laghouat": ["Laghouat", "Ksar El Hirane", "Benacer Ben Chohra", "Hassi R'Mel", "Kheneg", "Gueltat Sidi Saad", "Ain Madhi", "Tadjmout", "Hassi Delaa", "Brida"],
    "Oum El Bouaghi": ["Oum El Bouaghi", "Ain Beida", "Ain M'lila", "Ain Babouche", "Ain Fakroun", "Ain Zitoun", "Behir Chergui", "Berriche", "Bir Chouhada", "Dhala"],
    "Batna": ["Batna", "Merouana", "Seriana", "Tazoult", "N'Gaous", "Arris", "Barika", "Djezzar", "El Madher", "Timgad"],
    "Béjaïa": ["Béjaïa", "Amizour", "Aokas", "Barbacha", "Darguina", "El Kseur", "Ighil Ali", "Kherrata", "Seddouk", "Tichy"],
    "Biskra": ["Biskra", "Djemorah", "El Kantara", "El Outaya", "M'Chouneche", "Ouled Djellal", "Sidi Khaled", "Sidi Okba", "Tolga", "Zeribet El Oued"],
    "Béchar": ["Béchar", "Abadla", "Beni Ounif", "El Ouata", "Igli", "Kenadsa", "Kerzaz", "Lahmar", "Ouled Khoudir", "Tabelbala"],
    "Blida": ["Blida", "Boufarik", "Bouinan", "Bougara", "Bouarfa", "Chiffa", "El Affroun", "Larbaa", "Mouzaia", "Oued Alleug"],
    "Bouira": ["Bouira", "Ain Bessam", "Bechloul", "Bir Ghbalou", "Chorfa", "Dirrah", "El Hachimia", "Haizer", "Kadiria", "Lakhdaria"],
    "Tamanrasset": ["Tamanrasset", "Abalessa", "In Ghar", "In Guezzam", "In Salah", "Tazrouk", "Tin Zaouatine", "Idles", "Tinerkouk", "In Amguel"],
    "Tébessa": ["Tébessa", "Bir El Ater", "Cheria", "El Aouinet", "El Kouif", "El Ma Labiodh", "El Ogla", "Morsott", "Negrine", "Ouenza"],
    "Tlemcen": ["Tlemcen", "Beni Mester", "Bensekrane", "Ghazaouet", "Hennaya", "Maghnia", "Marsat Ben M'Hidi", "Nedroma", "Remchi", "Sabra"],
    "Tiaret": ["Tiaret", "Ain Deheb", "Ain Kermes", "Dahmouni", "Frenda", "Hamadia", "Ksar Chellala", "Mahdia", "Mechraa Safa", "Medroussa"],
    "Tizi Ouzou": ["Tizi Ouzou", "Azeffoun", "Ain El Hammam", "Azazga", "Beni Douala", "Beni Yenni", "Boghni", "Bouzeguene", "Draa Ben Khedda", "Freha"],
    "Alger": ["Alger Centre", "Sidi M'Hamed", "El Madania", "Belouizdad", "Bab El Oued", "Bologhine", "Casbah", "Oued Koriche", "Bir Mourad Rais", "El Biar"],
    "Djelfa": ["Djelfa", "Ain El Ibel", "Ain Oussera", "Amourah", "Birine", "Charef", "Dar Chioukh", "El Guedid", "Hassi Bahbah", "Messaad"],
    "Jijel": ["Jijel", "El Ancer", "El Aouana", "El Milia", "Emir Abdelkader", "Kaous", "Settara", "Taher", "Texenna", "Ziama Mansouriah"],
    "Sétif": ["Sétif", "Ain Arnat", "Ain Azel", "Ain El Kébira", "Ain Oulmene", "Amoucha", "Babor", "Béni Aziz", "Bir El Arch", "Bouandas"],
    "Saïda": ["Saïda", "Ain El Hadjar", "Doui Thabet", "El Hassasna", "Ouled Brahim", "Sidi Amar", "Sidi Boubekeur", "Tircine", "Youb", "Zahana"],
    "Skikda": ["Skikda", "Ain Kechra", "Ain Zouit", "Ben Azzouz", "Collo", "El Hadaiek", "El Harrouch", "Oum Toub", "Ramdane Djamel", "Tamalous"],
    "Sidi Bel Abbès": ["Sidi Bel Abbès", "Ain El Berd", "Ben Badis", "Marhoum", "Mecheria", "Mostefa Ben Brahim", "Moulay Slissen", "Ras El Ma", "Sfisef", "Ténira"],
    "Annaba": ["Annaba", "El Bouni", "El Hadjar", "Eulma", "Seraidi", "Ain Berda", "Chetaibi", "Cheurfa", "Oued El Aneb", "Treat"],
    "Guelma": ["Guelma", "Ain Makhlouf", "Ain Reggada", "Belkheir", "Ben Djarah", "Bou Hachana", "Bouati Mahmoud", "Boumahra Ahmed", "Dahouara", "Djeballah Khemissi"],
    "Constantine": ["Constantine", "Ain Abid", "Ain Smara", "Ben Badis", "Didouche Mourad", "El Khroub", "Hamma Bouziane", "Ibn Ziad", "Messaoud Boudjriou", "Zighoud Youcef"],
    "Médéa": ["Médéa", "Ain Boucif", "Aziz", "Baata", "Benchicao", "Berrouaghia", "Boghar", "Bouaiche", "Bouaichoune", "Bouskene"],
    "Mostaganem": ["Mostaganem", "Ain Nouissy", "Ain Sidi Cherif", "Ain Tedles", "Bouguirat", "Hassi Mameche", "Kheir Eddine", "Mesra", "Sidi Ali", "Sour"],
    "M'Sila": ["M'Sila", "Ain El Hadjel", "Ain El Melh", "Ben Srour", "Bou Saada", "Chellal", "Djebel Messaad", "Hammam Dhalaa", "Khoubana", "Ouled Derradj"],
    "Mascara": ["Mascara", "Ain Fares", "Ain Fekan", "Aouf", "Bouhanifia", "El Bordj", "Ferraguig", "Ghriss", "Hachem", "Maoussa"],
    "Ouargla": ["Ouargla", "Ain Beida", "El Borma", "El Hadjira", "Hassi Messaoud", "N'Goussa", "Sidi Khouiled", "Taibet", "Tebesbest", "Zaouia El Abidia"],
    "Oran": ["Oran", "Ain El Turk", "Arzew", "Bethioua", "Bir El Djir", "Boutlelis", "Es Senia", "Gdyel", "Hassi Bounif", "Tafraoui"],
    "El Bayadh": ["El Bayadh", "Arbaouat", "Boualem", "Bougtoub", "Boussemghoun", "Brezina", "Chellala", "El Abiodh Sidi Cheikh", "El Bnoud", "Kef El Ahmar"],
    "Illizi": ["Illizi", "Bordj Omar Driss", "Debdeb", "In Amenas"],
    "Bordj Bou Arreridj": ["Bordj Bou Arreridj", "Ain Taghrout", "Belimour", "Ben Daoud", "Bir Kasdali", "Colla", "Djaafra", "El Achir", "El Anseur", "El Main"],
    "Boumerdès": ["Boumerdès", "Baghlia", "Boudouaou", "Boudouaou El Bahri", "Bouzegza Keddara", "Chabet El Ameur", "Corso", "Dellys", "Hammedi", "Isser"],
    "El Tarf": ["El Tarf", "Ben M'Hidi", "Berrihane", "Besbes", "Bouhadjar", "Boutheldja", "Chebaita Mokhtar", "Echatt", "El Aioun", "Zitouna"],
    "Tindouf": ["Tindouf", "Oum El Assel"],
    "Tissemsilt": ["Tissemsilt", "Ammari", "Bordj Bounaama", "Bordj El Emir Abdelkader", "Khemisti", "Lardjem", "Lazharia", "Maacem", "Melaab", "Sidi Abed"],
    "El Oued": ["El Oued", "Bayadha", "Debila", "Djamaa", "Douar El Ma", "Guemar", "Hassi Khalifa", "Kouinine", "Magrane", "Mih Ouensa"],
    "Khenchela": ["Khenchela", "Ain Touila", "Babar", "Bouhmama", "Chelia", "El Hamma", "Ensigha", "Kais", "Khirane", "Ouled Rechache"],
    "Souk Ahras": ["Souk Ahras", "Bir Bouhouche", "Haddada", "Hanencha", "Khedara", "M'Daourouche", "Mechroha", "Merahna", "Oued Kebrit", "Ragouba"],
    "Tipaza": ["Tipaza", "Ahmer El Ain", "Bou Ismaïl", "Bourkika", "Chaiba", "Cherchell", "Damous", "Fouka", "Gouraya", "Hadjout"],
    "Mila": ["Mila", "Ain Beida Harriche", "Ain Mellouk", "Bouhatem", "Chelghoum Laid", "Ferdjioua", "Grarem Gouga", "Oued Athmenia", "Oued Endja", "Rouached"],
    "Aïn Defla": ["Aïn Defla", "Aïn Lechiakh", "Aïn Soltane", "Bathia", "Belaas", "Bordj El Amir Khaled", "Boumedfaâ", "Djelida", "Djendel", "El Abadia"],
    "Naâma": ["Naâma", "Aïn Sefra", "Asla", "El Biod", "Kasdir", "Mecheria", "Moghrar", "Sfissifa", "Tiout", "Mekmen Ben Amar"],
    "Aïn Témouchent": ["Aïn Témouchent", "Aïn Kihal", "Aïn Tolba", "Beni Saf", "Bou Zedjar", "Chaabet El Ham", "Chentouf", "El Amria", "El Malah", "Hammam Bou Hadjar"],
    "Ghardaïa": ["Ghardaïa", "Berriane", "Bounoura", "Dhayet Bendhahoua", "El Atteuf", "El Guerrara", "El Menia", "Metlili", "Sebseb", "Zelfana"],
    "Relizane": ["Relizane", "Ain Rahma", "Ammi Moussa", "Belaassel Bouzegza", "Beni Dergoun", "Djidiouia", "El Guettar", "El Hamadna", "El Matmar", "Had Echkalla"],
    "Timimoun": ["Timimoun", "Aougrout", "Charouine", "Deldoul", "Metarfa", "Ouled Aissa", "Ouled Said", "Talmine", "Tinerkouk"],
    "Bordj Badji Mokhtar": ["Bordj Badji Mokhtar", "Timiaouine"],
    "Ouled Djellal": ["Ouled Djellal", "Besbes", "Doucen", "Sidi Khaled", "Tolga", "Zaafrane"],
    "Béni Abbès": ["Béni Abbès", "Igli", "Kerzaz", "Ouled Khoudir", "Tabelbala", "Tamtert"],
    "In Salah": ["In Salah", "Foggaret Ezzaouia"],
    "In Guezzam": ["In Guezzam", "Tin Zaouatine"],
    "Touggourt": ["Touggourt", "Blidet Amor", "El Alia", "El Hadjira", "Megarine", "M'Naguer", "Nezla", "Taibet", "Zaouia El Abidia"],
    "Djanet": ["Djanet", "Bordj El Haouas"],
    "El M'Ghair": ["El M'Ghair", "Djamaa", "Oum Touyour"],
    "El Menia": ["El Menia", "Hassi Gara", "Mansoura"]
};

// EmailJS configuration
const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_ao27qsb',
    TEMPLATE_ID: 'template_8v1z7ug',
    PUBLIC_KEY: 'QAAmK5xC31RtmbOim'
};

// Initialize with Public Key
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

// DOM Elements
const pages = {
    accueil: document.getElementById('accueil'),
    themes: document.getElementById('themes'),
    inscription: document.getElementById('inscription'),
    contact: document.getElementById('contact')
};

const navButtons = document.querySelectorAll('.nav-btn');
const themeContainer = document.querySelector('.theme-container');
const bulkPdfModal = document.getElementById('bulk-pdf-modal');
const closeModalButtons = document.querySelectorAll('.close-modal, .close-modal-btn');
const pdfTable = document.getElementById('pdf-table');
const clientTypeSelect = document.getElementById('client-type');
const dynamicFields = document.getElementById('dynamic-fields');
const trainingThemeSelect = document.getElementById('training-theme');
const dossierPaiementBtn = document.getElementById('dossier-paiement');
const submitRegistrationBtn = document.getElementById('submit-registration');
const contactForm = document.getElementById('contact-form');
const sendMessageBtn = document.getElementById('send-message');

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

    // Navigation system
    function setupNavigation() {
        // Get all navigation links
        const navLinks = document.querySelectorAll('.nav-link, .footer-nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const pageId = this.getAttribute('data-page');
                showPage(pageId);
                
                // Close mobile menu if open
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });
        });

        // Hero section buttons
        document.getElementById('inscriptionBtn')?.addEventListener('click', () => showPage('inscription'));
        document.getElementById('themesBtn')?.addEventListener('click', () => showPage('themes'));
    }

    // Mobile menu toggle
    function setupMobileMenu() {
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mainNav = document.getElementById('mainNav');
        
        if (mobileMenuBtn && mainNav) {
            mobileMenuBtn.addEventListener('click', () => {
                mainNav.classList.toggle('active');
                mobileMenuBtn.innerHTML = mainNav.classList.contains('active') 
                    ? '<i class="fas fa-times"></i>' 
                    : '<i class="fas fa-bars"></i>';
            });
        }
    }

    // Improved showPage function
    function showPage(pageId) {
    // Hide all pages
    Object.values(pages).forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    pages[pageId].classList.add('active');
    
    // Scroll to top
    window.scrollTo(0, 0);
    
    // Update active nav button
    navButtons.forEach(button => {
        button.classList.toggle('active', button.getAttribute('data-page') === pageId);
    });
    }

    // Initialize all functionality
    function init() {
        setupNavigation();
        setupMobileMenu();
        populateThemesPage();
        populateTrainingThemes();
        setupFormInteractions();
    }

    // Form interactions
    function setupFormInteractions() {
        // Client type change
        const clientTypeSelect = document.getElementById('client-type');
        if (clientTypeSelect) {
            clientTypeSelect.addEventListener('change', updateRegistrationFields);
        }

        // Dossier paiement button
        const dossierPaiementBtn = document.getElementById('dossier-paiement');
        if (dossierPaiementBtn) {
            dossierPaiementBtn.addEventListener('click', openDossierPaiement);
        }

        // Submit registration
        const submitRegistrationBtn = document.getElementById('submit-registration');
        if (submitRegistrationBtn) {
            submitRegistrationBtn.addEventListener('click', submitRegistration);
        }

        // Download bulletin
        const downloadBulletinBtn = document.getElementById('download-bulletin');
        if (downloadBulletinBtn) {
            downloadBulletinBtn.addEventListener('click', generateRegistrationPDF);
        }

        // Contact form
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                sendContactMessage();
            });
        }

        // PDF management buttons
        document.getElementById('bulk-add-pdfs')?.addEventListener('click', () => {
            bulkPdfModal.style.display = 'block';
            populateBulkPdfTable();
        });
        
        document.getElementById('check-missing-pdfs')?.addEventListener('click', checkMissingPdfs);
        
        document.querySelectorAll('.close-modal, .close-modal-btn').forEach(button => {
            button.addEventListener('click', () => {
                bulkPdfModal.style.display = 'none';
            });
        });
        
        document.getElementById('add-selected-pdf')?.addEventListener('click', addPdfToSelectedCourse);
    }

    // Start the application
    init();
});

// Functions
function showPage(pageId) {
    // Hide all pages
    Object.values(pages).forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    pages[pageId].classList.add('active');
    
    // Update active nav button
    navButtons.forEach(button => {
        button.classList.toggle('active', button.getAttribute('data-page') === pageId);
    });
}

function populateThemesPage() {
    themeContainer.innerHTML = '';
    
    for (const [theme, coursesList] of Object.entries(courses)) {
        const themeCard = document.createElement('div');
        themeCard.className = 'theme-card';
        
        const themeHeader = document.createElement('div');
        themeHeader.className = 'theme-header';
        
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'toggle-btn';
        toggleBtn.textContent = '+';
        toggleBtn.addEventListener('click', () => toggleCourses(themeCard));
        
        const themeTitle = document.createElement('h4');
        themeTitle.textContent = `THÈME: ${theme}`;
        
        themeHeader.appendChild(toggleBtn);
        themeHeader.appendChild(themeTitle);
        
        const courseList = document.createElement('div');
        courseList.className = 'course-list';
        
        coursesList.forEach(course => {
            const courseItem = document.createElement('div');
            courseItem.className = 'course-item';
            
            const courseTitle = document.createElement('span');
            const pdfExists = checkPdfExists(theme, course);
            const statusIcon = pdfExists ? '✓' : '✗';
            courseTitle.textContent = `${course} ${statusIcon}`;
            
            const courseActions = document.createElement('div');
            courseActions.className = 'course-actions';
            
            const addPdfBtn = document.createElement('button');
            addPdfBtn.className = 'primary-btn small-btn';
            addPdfBtn.textContent = 'Ajouter PDF';
            addPdfBtn.addEventListener('click', () => addPdfToCourse(theme, course));
            
            const removePdfBtn = document.createElement('button');
            removePdfBtn.className = 'secondary-btn small-btn';
            removePdfBtn.textContent = 'Supprimer';
            removePdfBtn.addEventListener('click', () => removePdfFromCourse(theme, course));
            
            courseActions.appendChild(addPdfBtn);
            courseActions.appendChild(removePdfBtn);
            
            courseItem.appendChild(courseTitle);
            courseItem.appendChild(courseActions);
            courseList.appendChild(courseItem);
        });
        
        themeCard.appendChild(themeHeader);
        themeCard.appendChild(courseList);
        themeContainer.appendChild(themeCard);
    }
}

function toggleCourses(themeCard) {
    const courseList = themeCard.querySelector('.course-list');
    const toggleBtn = themeCard.querySelector('.toggle-btn');
    
    if (courseList.classList.contains('show')) {
        courseList.classList.remove('show');
        toggleBtn.textContent = '+';
    } else {
        courseList.classList.add('show');
        toggleBtn.textContent = '-';
    }
}

function checkPdfExists(theme, course) {
    // In a real implementation, this would check if the PDF exists on the server
    // For this demo, we'll simulate some PDFs existing
    const existingPdfs = [
        "INFORMATIQUE_MICROSOFT WORD",
        "HYGIENE ET SECURITE_RISQUES GAZ",
        "MANAGEMENT_MANAGEMENT QSE"
    ];
    
    return existingPdfs.includes(`${theme}_${course}`);
}

function addPdfToCourse(theme, course) {
    // Create file input dynamically
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.pdf';
    
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            // In a real app, you would upload the file to a server here
            alert(`PDF "${file.name}" ajouté pour ${theme} - ${course}`);
            populateThemesPage();
        }
    });
    
    fileInput.click();
}

function removePdfFromCourse(theme, course) {
    if (confirm(`Êtes-vous sûr de vouloir supprimer le PDF pour ${course}?`)) {
        // In a real app, you would make a request to delete the PDF from the server
        alert(`PDF supprimé pour ${theme} - ${course}`);
        populateThemesPage();
    }
}

function populateBulkPdfTable() {
    const tbody = pdfTable.querySelector('tbody');
    tbody.innerHTML = '';
    
    // Add click event to table rows
    pdfTable.addEventListener('click', (e) => {
        if (e.target.classList.contains('select-btn')) {
            const row = e.target.closest('tr');
            document.querySelectorAll('#pdf-table tr').forEach(r => {
                r.classList.remove('selected');
            });
            row.classList.add('selected');
        }
    });
    
    for (const [theme, coursesList] of Object.entries(courses)) {
        coursesList.forEach(course => {
            const row = document.createElement('tr');
            
            const themeCell = document.createElement('td');
            themeCell.textContent = theme;
            
            const courseCell = document.createElement('td');
            courseCell.textContent = course;
            
            const statusCell = document.createElement('td');
            const pdfExists = checkPdfExists(theme, course);
            statusCell.textContent = pdfExists ? '✓' : '✗';
            statusCell.style.color = pdfExists ? 'green' : 'red';
            
            const actionCell = document.createElement('td');
            const selectBtn = document.createElement('button');
            selectBtn.className = 'primary-btn small-btn select-btn';
            selectBtn.textContent = 'Sélectionner';
            selectBtn.dataset.theme = theme;
            selectBtn.dataset.course = course;
            actionCell.appendChild(selectBtn);
            
            row.appendChild(themeCell);
            row.appendChild(courseCell);
            row.appendChild(statusCell);
            row.appendChild(actionCell);
            
            tbody.appendChild(row);
        });
    }
}

function addPdfToSelectedCourse() {
    const selectedRow = pdfTable.querySelector('tr.selected');
    if (!selectedRow) {
        alert('Veuillez sélectionner un cours en cliquant sur le bouton "Sélectionner"');
        return;
    }
    
    const theme = selectedRow.querySelector('td:first-child').textContent;
    const course = selectedRow.querySelector('td:nth-child(2)').textContent;
    
    addPdfToCourse(theme, course);
    selectedRow.classList.remove('selected');
}

function checkMissingPdfs() {
    const missing = [];
    
    for (const [theme, coursesList] of Object.entries(courses)) {
        for (const course of coursesList) {
            if (!checkPdfExists(theme, course)) {
                missing.push(`${theme} - ${course}`);
            }
        }
    }
    
    if (missing.length > 0) {
        alert(`PDFs manquants pour les cours suivants:\n\n${missing.join('\n')}`);
    } else {
        alert('Tous les cours ont des PDFs associés!');
    }
}

function populateTrainingThemes() {
    trainingThemeSelect.innerHTML = '';
    
    const themes = Object.keys(courses);
    themes.forEach(theme => {
        const option = document.createElement('option');
        option.value = theme;
        option.textContent = theme;
        trainingThemeSelect.appendChild(option);
    });
}

function updateRegistrationFields() {
    const clientType = clientTypeSelect.value;
    dynamicFields.innerHTML = '';
    
    if (!clientType) return;
    
    let fields = [];
    
    if (clientType === 'interne') {
        fields = [
            { label: 'Région', type: 'text', id: 'region' },
            { label: 'Filiale/Société', type: 'text', id: 'filiale' },
            { label: 'Wilaya', type: 'select', id: 'wilaya', options: Object.keys(wilayas) },
            { label: 'Daira', type: 'select', id: 'daira', options: [] },
            { label: 'Nom', type: 'text', id: 'nom' },
            { label: 'Prénom', type: 'text', id: 'prenom' },
            { label: 'Matricule', type: 'text', id: 'matricule' },
            { label: 'Fonction', type: 'text', id: 'fonction' },
            { label: 'Email', type: 'email', id: 'email' },
            { label: 'Téléphone', type: 'tel', id: 'telephone' }
        ];
    } else if (clientType === 'externe') {
        fields = [
            { label: 'Entreprise', type: 'text', id: 'entreprise' },
            { label: 'N° Registre de Commerce', type: 'text', id: 'registre' },
            { label: 'Adresse Entreprise', type: 'text', id: 'adresse-entreprise' },
            { label: 'Email Entreprise', type: 'email', id: 'email-entreprise' },
            { label: 'Téléphone Entreprise', type: 'tel', id: 'telephone-entreprise' },
            { label: 'Nom du Candidat', type: 'text', id: 'nom-candidat' },
            { label: 'Prénom du Candidat', type: 'text', id: 'prenom-candidat' },
            { label: 'Date de Naissance', type: 'date', id: 'date-naissance' },
            { label: 'Adresse (Wilaya)', type: 'select', id: 'wilaya', options: Object.keys(wilayas) },
            { label: 'Niveau Scolaire', type: 'text', id: 'niveau-scolaire' },
            { label: 'Email', type: 'email', id: 'email' },
            { label: 'Téléphone', type: 'tel', id: 'telephone' }
        ];
    } else if (clientType === 'organisme') {
        fields = [
            { label: 'Raison Sociale', type: 'text', id: 'raison-sociale' },
            { label: 'Adresse (Wilaya)', type: 'select', id: 'wilaya', options: Object.keys(wilayas) },
            { label: 'Email', type: 'email', id: 'email' },
            { label: 'Téléphone', type: 'tel', id: 'telephone' },
            { label: 'Fax', type: 'text', id: 'fax' },
            { label: 'Nombre d\'Effectifs', type: 'number', id: 'effectifs' },
            { label: 'Noms et Prénoms des Candidats', type: 'textarea', id: 'noms-candidats' },
            { label: 'Fonctions des Candidats', type: 'textarea', id: 'fonctions-candidats' }
        ];
    }
    
    fields.forEach((field, index) => {
        const formGroup = document.createElement('div');
        formGroup.className = 'form-group';
        
        const label = document.createElement('label');
        label.textContent = `${field.label}:`;
        label.htmlFor = field.id;
        
        let input;
        
        if (field.type === 'select') {
            input = document.createElement('select');
            input.id = field.id;
            input.className = 'form-control';
            
            const defaultOption = document.createElement('option');
            defaultOption.value = '';
            defaultOption.textContent = '-- Sélectionnez --';
            input.appendChild(defaultOption);
            
            field.options.forEach(option => {
                const opt = document.createElement('option');
                opt.value = option;
                opt.textContent = option;
                input.appendChild(opt);
            });
            
            if (field.id === 'wilaya') {
                input.addEventListener('change', updateDairaOptions);
            }
        } else if (field.type === 'textarea') {
            input = document.createElement('textarea');
            input.id = field.id;
            input.className = 'form-control';
            input.rows = 4;
        } else {
            input = document.createElement('input');
            input.type = field.type;
            input.id = field.id;
            input.className = 'form-control';
        }
        
        formGroup.appendChild(label);
        formGroup.appendChild(input);
        dynamicFields.appendChild(formGroup);
    });
}

function updateDairaOptions(event) {
    const wilayaSelect = event.target;
    const wilaya = wilayaSelect.value;
    const dairaSelect = document.getElementById('daira');
    
    if (!dairaSelect) return;
    
    dairaSelect.innerHTML = '';
    
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = '-- Sélectionnez --';
    dairaSelect.appendChild(defaultOption);
    
    if (wilaya && wilayas[wilaya]) {
        wilayas[wilaya].forEach(daira => {
            const option = document.createElement('option');
            option.value = daira;
            option.textContent = daira;
            dairaSelect.appendChild(option);
        });
    }
}

function openDossierPaiement() {
    const pdfUrl = 'assets/Dossier_Paiement.pdf';
    const fileName = 'Dossier_Paiement_EMGA.pdf';
    
    // Try to use the browser's PDF viewer first
    const pdfWindow = window.open(pdfUrl, '_blank');
    
    // Fallback for mobile devices
    setTimeout(() => {
        if (!pdfWindow || pdfWindow.closed || typeof pdfWindow.closed === 'undefined') {
            // Create download link if PDF didn't open
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }, 500);
}

function submitRegistration() {
    const clientType = clientTypeSelect.value;
    if (!clientType) {
        alert('Veuillez sélectionner un type de client');
        return;
    }
    
    // Collect common data
    const registrationData = {
        clientType: clientType,
        trainingType: document.getElementById('training-type').value,
        trainingTheme: document.getElementById('training-theme').value,
        accommodation: document.getElementById('accommodation').value,
        payment: document.getElementById('payment').value,
        timestamp: new Date().toISOString()
    };
    
    // Collect dynamic fields
    const details = {};
    const fields = dynamicFields.querySelectorAll('.form-group');
    
    fields.forEach(field => {
        const label = field.querySelector('label').textContent.replace(':', '');
        const input = field.querySelector('input, select, textarea');
        
        if (input) {
            details[label] = input.value;
        }
    });
    
    registrationData.details = details;
    
    // Send email
    sendRegistrationEmail(registrationData);
}

function sendRegistrationEmail(registrationData) {
    // Format details as a clean HTML table
    let detailsHtml = '<table style="width: 100%; border-collapse: collapse;">';
    for (const [key, value] of Object.entries(registrationData.details)) {
        detailsHtml += `
            <tr>
                <td style="padding: 8px 0; width: 40%; font-weight: bold;">${key}:</td>
                <td style="padding: 8px 0;">${value || 'Non spécifié'}</td>
            </tr>
        `;
    }
    detailsHtml += '</table>';

    const templateParams = {
        to_email: 'seifeddinechebana@gmail.com',
        client_type: registrationData.clientType,
        training_type: registrationData.trainingType,
        training_theme: registrationData.trainingTheme,
        accommodation: registrationData.accommodation,
        payment: registrationData.payment,
        timestamp: new Date(registrationData.timestamp).toLocaleString('fr-FR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }),
        details: detailsHtml
    };

    emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, templateParams)
        .then(() => {
            alert('Inscription soumise avec succès!');
        }, (error) => {
            console.error('Erreur:', error);
            alert("Erreur d'envoi, veuillez réessayer");
        });
}

function sendContactMessage() {
    const name = document.getElementById('contact-name').value;
    const surname = document.getElementById('contact-surname').value;
    const phone = document.getElementById('contact-phone').value;
    const message = document.getElementById('contact-message').value;
    
    if (!name || !surname || !message) {
        alert('Veuillez remplir tous les champs obligatoires');
        return;
    }

    const templateParams = {
        to_email: 'seifeddinechebana@gmail.com',
        from_name: `${name} ${surname}`,
        from_phone: phone || 'Non spécifié',
        message: message,
        timestamp: new Date().toLocaleString('fr-FR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    };

    emailjs.send(EMAILJS_CONFIG.SERVICE_ID, 'template_contact', templateParams)
        .then(() => {
            alert('Votre message a été envoyé avec succès!');
            document.getElementById('contact-form').reset();
        }, (error) => {
            console.error('Erreur:', error);
            alert("Erreur d'envoi, veuillez réessayer");
        });
}

function generateRegistrationPDF() {
    if (!window.jspdf) {
        alert("La génération de PDF n'est pas disponible pour le moment");
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // School header
    doc.setFontSize(18);
    doc.setTextColor(40, 53, 147);
    doc.text('École des Métiers du Transport et Distribution du Gaz', 105, 20, { align: 'center' });
    doc.setFontSize(14);
    doc.text('Ain M\'Lila - Bulletin d\'Inscription', 105, 30, { align: 'center' });
    
    // Form data
    const formData = {
        "Type de Client": document.getElementById('client-type').value,
        "Type de Formation": document.getElementById('training-type').value,
        "Thème": document.getElementById('training-theme').value,
        "Prise en charge": document.getElementById('accommodation').value,
        "Mode de paiement": document.getElementById('payment').value
    };
    
    // Dynamic fields
    const dynamicFields = {};
    document.querySelectorAll('#dynamic-fields .form-group').forEach(field => {
        const label = field.querySelector('label').textContent.replace(':', '').trim();
        const input = field.querySelector('input, select, textarea');
        dynamicFields[label] = input.value;
    });
    
    // Create PDF content
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    
    // Main form data table
    doc.autoTable({
        startY: 50,
        head: [['Champ', 'Valeur']],
        body: Object.entries(formData).map(([key, value]) => [key, value || '-']),
        theme: 'grid',
        headStyles: { fillColor: [41, 128, 185] }
    });
    
    // Dynamic fields table
    doc.autoTable({
        startY: doc.lastAutoTable.finalY + 10,
        head: [['Détails Complémentaires', '']],
        body: Object.entries(dynamicFields).map(([key, value]) => [key, value || '-']),
        theme: 'grid',
        headStyles: { fillColor: [41, 128, 185] }
    });
    
    // Footer
    const date = new Date().toLocaleDateString('fr-FR');
    doc.setFontSize(10);
    doc.text(`Généré le: ${date}`, 14, doc.internal.pageSize.height - 10);
    
    // Save the PDF
    doc.save('Bulletin_Inscription_EMGA.pdf');
}