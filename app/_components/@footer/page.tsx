import { getCompanyDetails, getFooterContent } from "@/actions/app.action";
import Footer from "@/components/footer";
import React from "react";

const FooterSlot = async () => {
  const footerItem = await getFooterContent();

  const companyInfo = await getCompanyDetails();

  const { socialLinks, importantLinks, usefulLinks, quickLinks } =
    footerItem || {};

  return (
    <Footer
      socialLinks={socialLinks}
      importantLinks={importantLinks}
      usefulLinks={usefulLinks}
      quickLinks={quickLinks}
      companyInfo={companyInfo}
    />
  );
};

export default FooterSlot;
