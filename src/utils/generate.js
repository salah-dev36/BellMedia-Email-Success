import { brandedEmailLayout } from "./email-layout";
import { emailBody } from "./email-body.ts";

export const generateEmail = (formFields) => {
  if (!formFields) return;
  const { brand, request, category, checkedBoxes } = formFields;


  return brandedEmailLayout(formFields, emailBody(brand, category, request, checkedBoxes));
};
