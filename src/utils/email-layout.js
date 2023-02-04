import { crave, rds } from "../data/email-data/email-data";

const emailLayout = (
  content,
  customerName,
  brandName,
  phoneNumber,
  faqLink,
  agentName
) => {
  return `<div>
      <p>Bonjour ${customerName}</p>
      <p>
        Nous vous remercions d'avoir contacté notre service. Chez ${brandName} ça
        nous fait toujours plaisir de répondre aux questions de nos clients, et
        à leurs demandes.
      </p>
      ${content}
      <p>
        Nous restons à votre disposition si vous avez des questions, s'il
        vous plait contactez-nous au ${phoneNumber} de 8h à 22h, ou de visitez
        notre site:
        <a target="_blank" href=${faqLink}>
          ${faqLink}
        </a>
        .
      </p>

      <p>Cordialement</p>
      <p>${agentName}</p>
      <p>Service à la clientèle ${brandName}</p>
    </div>`;
};

export const brandedEmailLayout = (formFields, content = "") => {
  const { brand, customer, agent } = formFields;

  switch (brand) {
    case crave.id:
      return emailLayout(
        content,
        customer,
        crave.name,
        crave.phone,
        crave.faq,
        agent
      );
    case rds.id:
      return emailLayout(
        content,
        customer,
        rds.name,
        rds.phone,
        rds.faq,
        agent
      );
    default:
      return;
  }
};
