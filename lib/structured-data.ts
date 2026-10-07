export const SITE_URL = "https://docs.gitgone.org";

const CLOUD_URL = "https://gitgone.org";
const ORGANIZATION_ID = `${CLOUD_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export function homeStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORGANIZATION_ID,
        name: "GitGone",
        url: CLOUD_URL,
        logo: `${CLOUD_URL}/assets/logo.svg`,
        sameAs: ["https://github.com/project-gitgone"],
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        name: "GitGone Docs",
        url: SITE_URL,
        inLanguage: "en",
        publisher: { "@id": ORGANIZATION_ID },
      },
    ],
  };
}

export function pageStructuredData(page: {
  title: string;
  description?: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: page.title,
    ...(page.description ? { description: page.description } : {}),
    url: `${SITE_URL}${page.url}`,
    inLanguage: "en",
    isPartOf: { "@id": WEBSITE_ID },
    publisher: { "@id": ORGANIZATION_ID },
  };
}
