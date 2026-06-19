// content/portfolio.ts
// Données du portfolio — bilingue FR / EN. Source unique de vérité.
// Les composants importent depuis ici, aucun texte en dur ailleurs.

export type Locale = "fr" | "en";

export interface Stat {
  value: string;
  label: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  skills: string[];
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  level: "N1" | "N2/N3" | "VIP";
  current?: boolean;
  bullets: string[];
}

export interface Education {
  period: string;
  title: string;
  school: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface PortfolioContent {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    skills: string;
    experience: string;
    education: string;
    contact: string;
  };
  hero: {
    name: string;
    roles: string[]; // effet machine à écrire
    pitch: string;
    badges: string[];
    ctaCv: string;
    ctaContact: string;
  };
  about: {
    heading: string;
    body: string;
    stats: Stat[];
  };
  skills: {
    heading: string;
    categories: SkillCategory[];
  };
  experience: {
    heading: string;
    items: Experience[];
  };
  education: {
    heading: string;
    items: Education[];
    languagesHeading: string;
    languages: Language[];
  };
  contact: {
    heading: string;
    body: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    ctaEmail: string;
    ctaPhone: string;
    ctaCv: string;
    ctaLinkedin: string;
  };
}

const fr: PortfolioContent = {
  meta: {
    title: "Mahmoud Chater — Technicien Support Informatique N2/N3",
    description:
      "Technicien Support Informatique niveau 2 et 3, spécialisé en gestion de parc (Intune, SCCM), ITSM (ServiceNow, Jira), Active Directory / Azure AD, scripting PowerShell et support VIP en environnement international.",
  },
  nav: {
    about: "Profil",
    skills: "Compétences",
    experience: "Expériences",
    education: "Formation",
    contact: "Contact",
  },
  hero: {
    name: "Mahmoud Chater",
    roles: [
      "Technicien Support N2/N3",
      "Support VIP international",
      "Gestion de parc & MDM",
      "Scripting PowerShell",
    ],
    pitch:
      "Support informatique de proximité et à distance, du poste de travail au réseau, avec une exigence de réactivité et de qualité de service.",
    badges: ["5+ ans d'expérience", "Niveau 2 & 3", "Support VIP", "Permis B + véhicule"],
    ctaCv: "Télécharger le CV",
    ctaContact: "Me contacter",
  },
  about: {
    heading: "Profil",
    body:
      "Technicien support fort de plusieurs années d'expérience en grands groupes, j'interviens sur l'ensemble de la chaîne : masterisation et déploiement de postes, gestion de parc via MDM, administration des comptes et des accès, résolution d'incidents N2/N3 et support personnalisé aux utilisateurs VIP. Rigueur méthodologique, sens du service et capacité à m'adapter rapidement aux environnements techniques et aux nouvelles technologies.",
    stats: [
      { value: "5+", label: "années d'expérience" },
      { value: "300", label: "postes migrés (projet Leonardo)" },
      { value: "N2/N3", label: "niveau d'intervention" },
      { value: "5", label: "grands comptes accompagnés" },
    ],
  },
  skills: {
    heading: "Compétences techniques",
    categories: [
      {
        id: "workstation",
        label: "Poste de travail & Masterisation",
        skills: ["Windows 10/11", "BitLocker", "Masterisation", "Déploiement OS", "Mac OS"],
      },
      {
        id: "mdm",
        label: "Gestion de parc & MDM",
        skills: ["Microsoft Intune", "SCCM", "Airwatch", "Portail Entreprise", "HP Device Manager"],
      },
      {
        id: "identity",
        label: "Annuaire & Identité",
        skills: ["Active Directory", "Azure AD", "SSO", "RSA Token", "Gestion des droits"],
      },
      {
        id: "itsm",
        label: "ITSM & Ticketing",
        skills: ["ServiceNow", "Jira", "ITAM Ivanti"],
      },
      {
        id: "network",
        label: "Réseau & Sécurité",
        skills: ["LAN", "VLAN", "VPN", "Proxy", "Firewall", "Switchs", "Routeurs", "Antivirus"],
      },
      {
        id: "scripting",
        label: "Scripting & Automatisation",
        skills: ["PowerShell"],
      },
      {
        id: "collab",
        label: "Téléphonie & Visioconférence",
        skills: ["Mitel", "Terminaux IP", "Teams Rooms (MTR)", "Webex", "Zoom", "ClickShare"],
      },
      {
        id: "office",
        label: "Bureautique & Messagerie",
        skills: ["Outlook", "Office 365", "Exchange", "SafeQ", "TeamViewer", "UCOPIA"],
      },
    ],
  },
  experience: {
    heading: "Expériences",
    items: [
      {
        period: "Févr. 2025 – En cours",
        role: "Support VIP — Environnement international",
        company: "Laboratoire Alcon",
        level: "VIP",
        current: true,
        bullets: [
          "Support prioritaire et personnalisé aux utilisateurs VIP : réactivité, discrétion, qualité de service",
          "Gestion des comptes utilisateurs via Azure AD",
          "Masterisation, préparation et installation de postes (Windows 11)",
          "Résolution des tickets N2/N3 ou redirection via ServiceNow",
          "Enrôlement de smartphones (iPhone) via Portail Entreprise Microsoft Intune",
          "Déploiement de logiciels et mises à jour via Intune et SCCM",
          "Prise en main à distance (Assistance rapide Microsoft, Teams)",
          "Vérification et support des salles de réunion (Webex, ClickShare)",
          "Coordination en anglais avec les équipes techniques internationales sur les incidents complexes",
          "Intervention sur les équipements réseau (Switchs, routeurs)",
        ],
      },
      {
        period: "Mars 2024 – Janv. 2025",
        role: "Support de proximité VIP",
        company: "Nexans Groupe",
        level: "VIP",
        bullets: [
          "Résolution des incidents et demandes via ITAM (Ivanti)",
          "Déploiement de logiciels via SCCM",
          "Déploiement et gestion des postes et mobiles via Microsoft Intune",
          "Gestion des comptes Windows et des accès via Active Directory",
          "Scripts PowerShell pour automatiser les tâches récurrentes (gestion users, déploiements, sauvegardes)",
          "Administration quotidienne des salles de réunion (MTR — Microsoft Teams Rooms)",
          "Diagnostic, documentation des incidents et analyse des causes racines",
          "Rondes préventives dans les étages pour la proximité utilisateurs",
          "Configuration et enrôlement de smartphones (iOS et Android)",
        ],
      },
      {
        period: "Août 2021 – Janv. 2024",
        role: "Support informatique N2 et N3",
        company: "Allianz Groupe",
        level: "N2/N3",
        bullets: [
          "Masterisation, chiffrement BitLocker, préparation et installation de postes (Windows 10)",
          "Résolution des incidents N2/N3 via ServiceNow",
          "Gestion et suivi des anomalies via Jira",
          "Enrôlement et remplacement de smartphones (iPhone) via Airwatch",
          "Déploiement de logiciels via Centre de logiciel",
          "Gestion et administration des comptes via Active Directory",
          "Assistance au guichet et support VIP",
          "Gestion des connexions en télétravail via RSA Token, installation et configuration du VPN",
          "Projet Leonardo (migration système) : droits d'accès sur FileServers, Proxy + SSO, analyse des logs Windows, migration vers un nouveau domaine et migration d'un parc de 300 postes",
        ],
      },
      {
        period: "Août 2020 – Juin 2021",
        role: "Support informatique N2 et N3",
        company: "Brico Dépôt",
        level: "N2/N3",
        bullets: [
          "Masterisation et installation de postes (Windows 10)",
          "Résolution des tickets N2/N3 via ServiceNow",
          "Enrôlement de smartphones via Airwatch",
          "Déploiement de logiciels via SCCM",
          "Prise en main à distance via TeamViewer",
          "Assistance visioconférence (Zoom) et comptes Webex",
          "Préparation et installation de terminaux IP",
          "Support VIP (conférences, upgrade des équipements métiers)",
          "Intervention sur les serveurs de fichiers (dossiers et droits)",
        ],
      },
      {
        period: "Janv. 2020 – Juin 2020",
        role: "Support informatique N1",
        company: "CTN Euromeuble",
        level: "N1",
        bullets: [
          "Préparation, déploiement et masterisation des postes de travail",
          "Gestion des demandes et incidents N1",
          "Création et configuration des comptes utilisateurs",
          "Création des boîtes mail et configuration des messageries mobiles",
          "Gestion des antivirus et protocoles de sécurité",
        ],
      },
    ],
  },
  education: {
    heading: "Formation",
    items: [
      {
        period: "2017 – 2019",
        title: "Master Négociation de projets internationaux",
        school: "Université Paul Valéry — Montpellier 3",
      },
      {
        period: "2013 – 2015",
        title: "Master Création d'entreprise, gestion et gouvernance",
        school: "FSEG Sousse — Tunisie",
      },
      {
        period: "2009 – 2013",
        title: "Licence Informatique appliquée à la gestion des entreprises",
        school: "FSEG Sousse — Tunisie",
      },
    ],
    languagesHeading: "Langues",
    languages: [
      { name: "Français", level: "Courant" },
      { name: "Anglais", level: "Professionnel" },
      { name: "Arabe", level: "Langue maternelle" },
    ],
  },
  contact: {
    heading: "Contact",
    body: "Disponible pour de nouvelles opportunités en support informatique N2/N3.",
    email: "mahmoud.chater@live.fr",
    phone: "06 89 42 77 47",
    location: "Le Vésinet (78110) — Permis B + véhicule",
    linkedin: "https://www.linkedin.com/in/chatermahmoud/",
    ctaEmail: "Envoyer un email",
    ctaPhone: "Appeler",
    ctaCv: "Télécharger le CV",
    ctaLinkedin: "LinkedIn",
  },
};

const en: PortfolioContent = {
  meta: {
    title: "Mahmoud Chater — IT Support Technician L2/L3",
    description:
      "Level 2 & 3 IT Support Technician specialized in device management (Intune, SCCM), ITSM (ServiceNow, Jira), Active Directory / Azure AD, PowerShell scripting and VIP support in international environments.",
  },
  nav: {
    about: "Profile",
    skills: "Skills",
    experience: "Experience",
    education: "Education",
    contact: "Contact",
  },
  hero: {
    name: "Mahmoud Chater",
    roles: [
      "IT Support Technician L2/L3",
      "International VIP Support",
      "Device Management & MDM",
      "PowerShell Scripting",
    ],
    pitch:
      "On-site and remote IT support, from the workstation to the network, with a strong focus on responsiveness and quality of service.",
    badges: ["5+ years of experience", "Level 2 & 3", "VIP Support", "Driving license + car"],
    ctaCv: "Download CV",
    ctaContact: "Get in touch",
  },
  about: {
    heading: "Profile",
    body:
      "IT support technician with several years of experience in large corporate environments, covering the full chain: workstation imaging and deployment, MDM device management, account and access administration, L2/L3 incident resolution and dedicated support for VIP users. Methodical, service-oriented, and quick to adapt to new technical environments and technologies.",
    stats: [
      { value: "5+", label: "years of experience" },
      { value: "300", label: "workstations migrated (Leonardo project)" },
      { value: "L2/L3", label: "support level" },
      { value: "5", label: "major accounts supported" },
    ],
  },
  skills: {
    heading: "Technical skills",
    categories: [
      {
        id: "workstation",
        label: "Workstation & Imaging",
        skills: ["Windows 10/11", "BitLocker", "Imaging", "OS Deployment", "Mac OS"],
      },
      {
        id: "mdm",
        label: "Device Management & MDM",
        skills: ["Microsoft Intune", "SCCM", "Airwatch", "Company Portal", "HP Device Manager"],
      },
      {
        id: "identity",
        label: "Directory & Identity",
        skills: ["Active Directory", "Azure AD", "SSO", "RSA Token", "Access management"],
      },
      {
        id: "itsm",
        label: "ITSM & Ticketing",
        skills: ["ServiceNow", "Jira", "ITAM Ivanti"],
      },
      {
        id: "network",
        label: "Network & Security",
        skills: ["LAN", "VLAN", "VPN", "Proxy", "Firewall", "Switches", "Routers", "Antivirus"],
      },
      {
        id: "scripting",
        label: "Scripting & Automation",
        skills: ["PowerShell"],
      },
      {
        id: "collab",
        label: "Telephony & Video conferencing",
        skills: ["Mitel", "IP terminals", "Teams Rooms (MTR)", "Webex", "Zoom", "ClickShare"],
      },
      {
        id: "office",
        label: "Office & Messaging",
        skills: ["Outlook", "Office 365", "Exchange", "SafeQ", "TeamViewer", "UCOPIA"],
      },
    ],
  },
  experience: {
    heading: "Experience",
    items: [
      {
        period: "Feb 2025 – Present",
        role: "VIP Support — International environment",
        company: "Alcon Laboratories",
        level: "VIP",
        current: true,
        bullets: [
          "Priority, personalized support for VIP users: responsiveness, discretion, quality of service",
          "User account management via Azure AD",
          "Imaging, preparation and installation of workstations (Windows 11)",
          "L2/L3 ticket resolution or routing via ServiceNow",
          "Smartphone enrollment (iPhone) via Microsoft Intune Company Portal",
          "Software deployment and updates via Intune and SCCM",
          "Remote control via Microsoft Quick Assist and Teams",
          "Meeting room checks and support (Webex, ClickShare)",
          "Coordination in English with international technical teams on complex incidents",
          "Network equipment intervention (switches, routers)",
        ],
      },
      {
        period: "Mar 2024 – Jan 2025",
        role: "VIP Deskside Support",
        company: "Nexans Group",
        level: "VIP",
        bullets: [
          "Incident and request resolution via ITAM (Ivanti)",
          "Software deployment via SCCM",
          "Workstation and mobile device deployment and management via Microsoft Intune",
          "Windows account and access management via Active Directory",
          "PowerShell scripts to automate recurring tasks (user management, deployments, backups)",
          "Daily administration of meeting rooms (MTR — Microsoft Teams Rooms)",
          "Incident diagnosis, documentation and root-cause analysis",
          "Preventive floor rounds for user proximity",
          "Smartphone configuration and enrollment (iOS and Android)",
        ],
      },
      {
        period: "Aug 2021 – Jan 2024",
        role: "IT Support L2 and L3",
        company: "Allianz Group",
        level: "N2/N3",
        bullets: [
          "Imaging, BitLocker encryption, preparation and installation of workstations (Windows 10)",
          "L2/L3 incident resolution via ServiceNow",
          "Anomaly tracking and follow-up via Jira",
          "Smartphone enrollment and replacement (iPhone) via Airwatch",
          "Software deployment via Software Center",
          "Account management and administration via Active Directory",
          "Front-desk assistance and VIP support",
          "Remote-work connection management via RSA Token, VPN installation and configuration",
          "Leonardo project (system migration): FileServer access rights, Proxy + SSO, Windows log analysis, migration to a new domain and migration of a 300-workstation fleet",
        ],
      },
      {
        period: "Aug 2020 – Jun 2021",
        role: "IT Support L2 and L3",
        company: "Brico Dépôt",
        level: "N2/N3",
        bullets: [
          "Imaging and installation of workstations (Windows 10)",
          "L2/L3 ticket resolution via ServiceNow",
          "Smartphone enrollment via Airwatch",
          "Software deployment via SCCM",
          "Remote control via TeamViewer",
          "Video conferencing support (Zoom) and Webex accounts",
          "Preparation and installation of IP terminals",
          "VIP support (conferences, business equipment upgrades)",
          "File server intervention (folders and rights)",
        ],
      },
      {
        period: "Jan 2020 – Jun 2020",
        role: "IT Support L1",
        company: "CTN Euromeuble",
        level: "N1",
        bullets: [
          "Workstation preparation, deployment and imaging",
          "L1 request and incident management",
          "User account creation and configuration",
          "Mailbox creation and mobile messaging configuration",
          "Antivirus and security protocol management",
        ],
      },
    ],
  },
  education: {
    heading: "Education",
    items: [
      {
        period: "2017 – 2019",
        title: "Master's in International Project Negotiation",
        school: "Paul Valéry University — Montpellier 3",
      },
      {
        period: "2013 – 2015",
        title: "Master's in Business Creation, Management and Governance",
        school: "FSEG Sousse — Tunisia",
      },
      {
        period: "2009 – 2013",
        title: "Bachelor's in Computer Science Applied to Business Management",
        school: "FSEG Sousse — Tunisia",
      },
    ],
    languagesHeading: "Languages",
    languages: [
      { name: "French", level: "Fluent" },
      { name: "English", level: "Professional" },
      { name: "Arabic", level: "Native" },
    ],
  },
  contact: {
    heading: "Contact",
    body: "Available for new opportunities in L2/L3 IT support.",
    email: "mahmoud.chater@live.fr",
    phone: "06 89 42 77 47",
    location: "Le Vésinet (78110) — Driving license + car",
    linkedin: "https://www.linkedin.com/in/chatermahmoud/",
    ctaEmail: "Send an email",
    ctaPhone: "Call",
    ctaCv: "Download CV",
    ctaLinkedin: "LinkedIn",
  },
};

export const content: Record<Locale, PortfolioContent> = { fr, en };
