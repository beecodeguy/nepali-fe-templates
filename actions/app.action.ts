import { TFooterLink, TSocialLink } from "@/types";

export const getFooterContent = () => {
  return {
    socialLinks: [
      { id: 1, url: "", type: "facebook" },
      { id: 2, url: "", type: "youtube" },
      { id: 3, url: "", type: "twitter" },
      { id: 4, url: "", type: "instagram" },
    ] as TSocialLink[],
    importantLinks: [
      {
        id: "1",
        title: "Securities Board of Nepal",
        link: "https://www.sebon.gov.np/",
      },
      {
        id: "2",
        title: "Nepal Stock Exchange",
        link: "https://nepalstock.com/",
      },
      {
        id: "3",
        title: "CDS & Clearig Ltd.",

        link: "https://cdsc.com.np/",
      },
      {
        id: "4",
        title: "Merchant Banking Association",
        link: "https://mban.com.np/",
      },
      {
        id: "5",
        title: "Office of Company Registrar",
        link: "https://ocr.gov.np/",
      },
    ] as TFooterLink[],
    usefulLinks: [
      {
        id: "1",
        title: "Nepal Rastra Bank",
        link: "https://www.nrb.org.np/",
      },
      { id: "2", title: "Meroshare", link: "https://meroshare.cdsc.com.np" },
      {
        id: "3",
        title: "United Nations Security Council list",
        link: "https://main.un.org/securitycouncil/en/content/un-sc-consolidated-list",
      },
      {
        id: "4",
        title: "Targeted Sanction List (Home Affairs)",
        link: "https://www.moha.gov.np/page/targeted-sanction-list",
      },
    ] as TFooterLink[],
    quickLinks: [
      {
        id: "1",
        title: "Downloads",
        link: "/downloads",
      },
      {
        id: "2",
        title: "News",
        link: "#",
      },
      { id: "3", title: "Notice", link: "#" },
      { id: "5", title: "Contact", link: "#" },
    ] as TFooterLink[],
  };
};

export const getCompanyDetails = () => {
  return {
    contactPerson: {
      name: "John Doe",
      phone: "01-5920356 (Ext-401)",
      email: `contact@himalayasecurities.com`,
    },
    name: "Himalaya Securities Banker Ltd",
    phone: `01-5920356, 01-5920357`,
    email: `info@himalayasecuritiesbanker.com`,
    location: `4rd Floor, Indra Trade Concern, Madan Bhandari Sadak, New Baneshwor, Kathmandu, Nepal`,
  };
};
