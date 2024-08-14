export type TSocialLinkTypes = "facebook" | "instagram" | "twitter" | "youtube";

export type TSocialLink = {
  id: number;
  url: string;
  type: TSocialLinkTypes;
};

export type TFooterLink = {
  id: string | number;
  title: string;
  link: string;
};
