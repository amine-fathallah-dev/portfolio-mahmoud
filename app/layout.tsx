import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { LangProvider } from "@/lib/i18n";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const siteUrl = "https://mahmoud-chater.vercel.app";

export const metadata: Metadata = {
  title: "Mahmoud Chater — Technicien Support Informatique N2/N3",
  description:
    "Technicien Support Informatique niveau 2 et 3, spécialisé en gestion de parc (Intune, SCCM), ITSM (ServiceNow, Jira), Active Directory / Azure AD, scripting PowerShell et support VIP en environnement international.",
  keywords: [
    "technicien support informatique",
    "support N2 N3",
    "Microsoft Intune",
    "SCCM",
    "Active Directory",
    "Azure AD",
    "ServiceNow",
    "PowerShell",
    "support VIP",
    "MDM",
    "Mahmoud Chater",
  ],
  authors: [{ name: "Mahmoud Chater", url: siteUrl }],
  creator: "Mahmoud Chater",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Mahmoud Chater — Portfolio",
    title: "Mahmoud Chater — Technicien Support Informatique N2/N3",
    description:
      "Technicien Support Informatique niveau 2 et 3, spécialisé en gestion de parc (Intune, SCCM), ITSM, Active Directory / Azure AD, scripting PowerShell et support VIP international.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Mahmoud Chater — Technicien Support Informatique N2/N3",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahmoud Chater — Technicien Support Informatique N2/N3",
    description:
      "Technicien Support Informatique niveau 2 et 3, spécialisé en gestion de parc, ITSM, AD/Azure AD, PowerShell et support VIP international.",
    images: [`${siteUrl}/og-image.png`],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mahmoud Chater",
  jobTitle: "Technicien Support Informatique N2/N3",
  email: "mahmoud.chater@live.fr",
  telephone: "+33689427747",
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Le Vésinet",
    postalCode: "78110",
    addressCountry: "FR",
  },
  knowsAbout: [
    "Windows 10/11",
    "Microsoft Intune",
    "SCCM",
    "Active Directory",
    "Azure AD",
    "ServiceNow",
    "PowerShell",
    "ITSM",
    "MDM",
    "BitLocker",
    "VPN",
    "Support VIP",
    "Gestion de parc informatique",
  ],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Université Paul Valéry — Montpellier 3",
    },
  ],
  sameAs: ["https://www.linkedin.com/in/chatermahmoud/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <LangProvider>{children}</LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
