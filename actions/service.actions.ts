const mapper = {
  // "merchant-banking": "Merchant Banking",
  "registrar-shares": {
    title: "Registrar to Shares",
    features: [
      "Transfer of shares",
      "Record keeping of shares &amp; shareholders",
      "Distribution of cash dividends, bonus shares",
      "Providing information about the company or security to its shareholders.",
    ],
    description:
      "HSBL acts as an intermediary for companies to offer professional services to its shareholders. We assure the shareholders with hassle free services within the minimum time frame to meet the diverse needs of our clients.",
  },
  "mutual-fund": "Mutual Fund",
  "portfolio-management-service": {
    title: "Portfolio Management Service",
    types: [
      {
        title: "Discretionary Portfolio Management",
        description:
          "Discretionary Portfolio Management service is a form of PMS, whereby the client provides full authority to HSBL’s portfolio Manager to buy/sell the financial instruments and the investment decisions are made of Portfolio Manager’s discretion.",
      },
      {
        title: "Non-Discretionary Portfolio Management:",
        description:
          "Under Non- Discretionary Portfolio Management, the customers shall have the discretion to execute their own investment decisions. The portfolio manager advises on the potential investment opportunities, but at the end, decision to buy/sell the financial instruments rests with the customers (investors).",
      },
    ],
    description:
      "In HSBL, we have a dedicated team who professionally handles our PMS clients. PMS involves management of client’s assets through investment in various financial instrument such as equity, fixed deposits, bonds, debentures etc. to generate steady return on investments in line with your financial goals.",
  },
  "depository-participants": {
    title: "Depository Participants",
    features: [
      "Open a Demat account (Beneficial Owner – BO account).",
      "Dematerialization and rematerialization of securities.",
      "Maintain the record of securities in the electric form.",
      "Settlement trades by transferring/receiving the securities from/in BO accounts.",
      "Settlement of off-market trades that is occurred between BOs outside NEPSE.",
      "Provide electronic credit of securities allotted by issuers during IPOs.",
      "Deposit of the non-financial corporate benefits (such as: bonus, right shares, etc.) issued by issuers in the De-Mat account of BO.",
      "Facilitation in the pledge/unpledged/freeze/unfreeze etc. of dematerialized securities.",
    ],
    description:
      "As a Depository participant (DP) Himalaya Securities Banker Ltd acts as an intermediary between the depository system (CDS &amp; Clearing Ltd) and our valued customers. Hence, beneficiary owner can open Demat Account at HSBL and we aim to provide prompt service to all our customers.",
  },
  "advisory-service": {
    title: "Advisory Services",
    features: [
      "Loan Syndication",
      "Business Development Plan",
      "Corporate Restructuring",
      "Mergers and Acquisition",
      "Company Valuation",
    ],
    description:
      "At HSBL, our corporate advisory team provides comprehensive financial and strategic advice to our clients empowering them to make the right decision.",
  },
  underwriting: {
    title: "Underwriting",
    description:
      "HSBL offers underwriting services to assist our valued clients for fund raising of equity capital or debt instruments. We provide one stop solution to fulfill the underwriting needs meeting the regulatory requirements and provide assurance to our clients bearing the risk of uncertainty of under subscription capital instruments.",
  },
};

export const getDetailsOfService = (serviceId) => {
  return mapper[serviceId] || "";
};
