import REQUESTS from "../data/types/requests-types";
import BRANDS from "../data/types/brands-types";
import CATEGORIES from "../data/types/categories-types";

const craveWebsite = "https://www.crave.ca/fr";
const rdsWebsite = "https://www.rds.ca";

const craveSupportedDevices =
  craveWebsite + "/support/which-devices-can-i-watch-crave-on-47497397";

const craveConditions = craveWebsite + "/terms-and-conditions-84360459";
const rdsConditions = rdsWebsite + "/emissions/en-direct/conditions";

const signInWeb = (brandWebsite: string): string => `
<p>
  Pour vous connectez et commencez le visonnage, nous vous invitons à suivre
  les étapes ci-dessous:
</p>
<ul>
  <li>Ouvrez votre navigateur préféré.</li>
  <li>Allez au site <a target="_blank" href=${brandWebsite}>${brandWebsite}</a>.</li>
  <li>Cliquez sur "Se Connecter"</li>
  <li>Si vous êtes abonné par l'intermédiaire d'un fournisseur de services de télévision (p. ex. Bell TV,
      Rogers, Telus, etc.) : Cliquez sur Je suis un abonné TV. Si vous ne voyez pas votre fournisseur, essayez de
      cliquer sur la loupe en haut de la fenêtre et cherchez votre fournisseur.</li>
  <li>Sinon, entrez votre addresse courriel et mot de passe</li>
</ul>
<p>
</p>
`;

const signInApp = (brand: string) => `
  <p>
  Pour vous connectez et commencez le visonnage, nous vous invitons à suivre
  les étapes ci-dessous:
</p>
<ul>
  <li>Télécharger l'application ${brand} depuis la boutique des application de votre appareil.</li>
  <li>Ouvrez L'application et cliquez sur "Se Connecter"</li>
  <li>Si vous êtes abonné par l'intermédiaire d'un fournisseur de services de télévision (p. ex. Bell TV,
      Rogers, Telus, etc.) : Cliquez sur Je suis un abonné TV. Si vous ne voyez pas votre fournisseur, essayez de
      cliquer sur la loupe en haut de la fenêtre et cherchez votre fournisseur.</li>
  <li>Sinon, entrez votre addresse courriel et mot de passe</li>
</ul>
`;

const activateDevice = () => `
<p>
  Afin d'activer Crave sur votre appareil, nous vous prions de suivre les étapes ci-dessous:
</p>
<ul>
  <li>Ouvrez l'application Crave, puis cliquez sur "Connexion" en haut au coin droit de l'écran</li>
  <li>Si vous voyez un code, allez sur <a target="_blank" href="http://www.crave.ca/activate">www.crave.ca/activate </a> à partir
      d'un navigateur web ou mobile.Veuillez suivre les instructions à l'écran
  </li>
  <li>Connectez vous à votre compte, puis entrez le code inscrit sur votre téléviseur dans le champ respectif</li>
  <li>Une fois que vous avez terminé, vous devriez voir un message "Success !" sur votre navigateur.
      Retournez à votre télévision et commencez à profiter de Crave sur votre téléviseur !
  </li>
  </ul>
  <p>Pour plus d'informations sur les appareils pris en charge cliquez <a target="_blank" href=${craveSupportedDevices}>ici</a>.</p>
  `;

const cancelDTC = () => `
  <p>Nous sommes navrés de vous voir quitter. Nous vous informons que votre demande d'annulation a été prise en charge
  et votre abonnement prendra fin le XX/XX/XXXX.</p>
  `;

const cancelIAP = (provider: string, devices: string) => {
  const introduction = ` <p>
  Nous sommes navrés de vous voir quitter. Nous vous informons que vous avez acheté votre abonnement par le biais
  de ${provider} auquel nous n'avons pas accès pour l'annuler.Les étapes suivantes vous guideront à travers le
  processus d'annulation en utilisant votre appareil ${devices} :
</p>`;

  if (provider.toLowerCase() === "itunes") {
    return `
  ${introduction}
<ul>
  <li>Ouvrez "Réglages" sur votre appareil</li>
  <li>Cliquez sur votre nom et prénom en haut de l'écran</li>
  <li>Cliquez sur "Abonnement"</li>
  <li>Appuyez sur l'abonnement en question</li>
  <li>Cliquez sur "Annuler l'abonnement"</li>
</ul>
  `;
  }
  if (provider.toLowerCase() === "roku") {
    return `
    ${introduction}
    <ul>
    <li>En utilisant la télécommande Roku :</li>
    <ul>
        <li>Naviguez vers la chaîne et cherchez Crave</li>
        <li>Appuyez sur le bouton sous forme d'une étoile (une fenêtre pop-up apparaît) et sélectionnez "Gérer
            l'abonnement".</li>
        <li>Sélectionnez "Annuler l'abonnement".</li>
    </ul>
    <li>En utilisant le site web Roku :</li>
    <ul>
        <li>Ouvrez www.roku.com et connectez-vous à votre compte.</li>
        <li>Cliquez sur l'icône avatar en haut à droite de la fenêtre et cliquez sur "Mon compte".</li>
        <li>Cliquez sur "Gérer vos abonnements".</li>
        <li>Vous devriez voir une liste des chaînes auxquelles vous êtes abonné. Cliquez sur "Annuler l'abonnement"
            pour Crave.</li>
    </ul>
</ul>`;
  }
  if (provider.toLowerCase() === "google") {
    return `
    ${introduction}
      <ul>
        <li>Aller sur play.google.com</li>
        <li>Connectez-vous au compte google lié à votre abonnement</li>
        <li>Cliquez sur "Mes abonnements" à gauche</li>
        <li>Séléctionnez l'abonnement que vous souhaitez annuler</li>
        <li>Cliquez sur "Gérer", puis sur "Annuler l'abonnement"</li>
        <li>Dans la fenêtre de confirmation, cliquez sur "Oui"</li>
      </ul>
    `;
  }

  return "";
};

const noRefund = (brandName: string, conditions: string) => `
  <p>
        Malheureusement, tous les frais d'abonnement ne sont pas remboursables. ${brandName} ne propse pas un
        remboursement partiel ou total des frais d'abonnement, ou un crédit pour une période non visonnée ou non
        utilisée comme mentionné sur nos <a target="_blank" href=${conditions}>conditions d'utilisation</a>, pour éviter
        toute facturation il faut annuler avant la date du renovellement.
    </p>
    <p>Nous nous excusons pour tout inconvénient et nous vous remercions de votre compréhension</p>
`;

const refundApproved = () => `
<p>Nous vous informons que votre demande de remboursement a été appliqué. un montant de XX,XX CA$ sera crédité sur
votre compte bancaire dans 5 jours ouvrables </p>
<p>
Nous nous excusons pour tout inconvénient et nous vous remercions de votre compréhension
</p>
`;

const nflBlackout = () => `
<p>
La couverture régionale de la LNH par RDS n'est disponible que dans la région de diffusion désignée par les
équipes, telle que définie par la LNH. Ces restrictions existent pour protéger les télédiffuseurs locaux de
chaque match de la LNH dans les marchés locaux des équipes. Comme RDS détient les droits de diffusion d'un
ensemble de matchs des Jets de Winnipeg, des Maple Leafs de Toronto, des Sénateurs d'Ottawa et des Canadiens de
Montréal, nous ne pouvons diffuser ces match que dans les régions de diffusion respective des équipes, telles
que définies par la LNH.
</p>

<p>
Pour plus d'informations concernant ces restrictions, nous vous invitons à vous réferer à la LNH. Nous nous
excusons pour tout inconvénient et nous vous remercions de votre compréhensions
</p>
`;

const addStarz = () => `
<p>
Actuellement, STARZ est disponible en tant que abonnement supplémentaire à Crave, et auprès des fournisseurs de
télévision participants et d'autres distributeurs autorisés.
</p>

<li>Si vous vous abonnez à Crave directement par le biais de crave.ca, connectez-vous à votre compte sur crave.ca et
allez dans "Gérer le compte" pour ajouter STARZ.</li>
<li>Si vous vous abonnez à Crave par l'intermédiaire de votre fournisseur de télévision, veuillez l'appeler ou
visiter le site Web de gestion de votre compte de télévision pour ajouter STARZ.</li>
<li>Si vous êtes abonné à Crave par le biais de Apple, Google ou Roku, connectez-vous à votre application Crave et
allez sur "Gérer le compte" pour ajouter STARZ.</li>
`;

const changeLanguage = () => `
<p>
Nous vous informons que vous pouvez changer la langue de l'intefrace Crave ainsi que la langue des contenus en
suivant les étapes ci dessous:
</p>

<ul>
<li>Connectez-vous à votre compte sur le site Crave, ou sur l'application Crave au niveau cellulaire/tablette
</li>
<li>Cliquez sur le petit bonhomme, puis sur "Modifier le profil"</li>
<li>Cliquer sur "Editer" ou sur le petit stylet sur la section langue</li>
<li>Choisissez la langue de l'interface en modifiant "Langue du profile"</li>
<li>Chosissez la langue des contenus en modifiant "Langue de lecture audio". Veuillez noter qu'il y'a une
    minortié des contenus disponibles dans une seule langue uniquement anglais ou français</li>
</ul>
`;

const passwordReset = () => `
<p>
Pour réinitialiser votre mot de passe, veuillez cliquer <a target="_blank"
    href="https://account.bellmedia.ca/legacy/forgot-password/?lang=fr">ici</a>, puis entrez l'addresse courriel
associé à votre compte et cliquez sur "Envoyer le courriel". Un courriel vous sera envoyé sur votre e-mail avec
des instructions à suivre pour réinitialiser le mot de passe.
</p>

<p>
Veuillez noter que ça pourra prendre jusqu'à 30 minutes afin de recevoir le courriel de réinitialisation. . Si
vous ne le recevez pas dans votre boîte de réception, vérifiez votre dossier spam/indésirable.
</p>
`;

const ccUpdate = () => `
<p>Veuillez cliquer <a target="_blank" href="https://account.bellmedia.ca/login?lang=fr">ici</a>, pour vous
connecter à votre compte, puis cliquer sur "Abonnements", faites défiler la page jusqu'à ce que vous voyiez
votre mode de paiement, cliquez sur Modifier ou Ajouter selon la situation :</p>
<ul>
<li>Scénario #1 : Vous ajoutez une nouvelle carte de crédit à votre compte.
</li>
<ul>
    <li>Cliquez sur le bouton "Ajouter" en face du champ "Carte de crédit".</li>
    <li>Saisissez le nom figurant sur la carte. </li>
    <li>Saisissez le numéro de carte à 16 chiffres.</li>
    <li>Entrez la date d'expiration.(dans le format MM/AAAA)</li>
    <li> Entrez le numéro de C.V.V. (Visa/MasterCard : 3 chiffres au dos | AMEX : 4 chiffres au recto).</li>
    <li> Choisissez/sélectionnez votre adresse de facturation.</li>
    <li> Cliquez sur le bouton "Enregistrer".</li>
</ul>
<li>Scénario #2 : Vous mettez à jour une carte de crédit expirée avec le même numéro de carte à 16 chiffres.
</li>
<ul>
    <li>Cliquez sur le bouton "Modifier" en face de votre carte de crédit actuelle.</li>
    <li>Modifier les informations nécessaires</li>
    <li> Cliquez sur le bouton "Enregistrer".</li>
</ul>
</ul>
`;

const locateAccount = () => `
<p>
        Nous vous informons que nous n'avons pas réussi à localiser un compte avec un abonnement actif lié à votre
        addresse courriel. Nous vous invitions à nous communiquer les informations ci-dessous afin que nous puissions
        vous aider:
    </p>
    <ul>
        <li>Est-ce que vous êtes abonné par intenert ou via un cablo-distribiteur?</li>
        <li>Si vous vous êtes abonné par internet, êtes vous facturé directement ou via Apple, Google ou Roku</li>
        <li>Toute autre adresse courriel qui aurait pu être utilisée.</li>
        <li>Votre addresse postale.</li>
        <li>Les quatres premiers et les quatres derniers chiffres de la carte de crédit sur la quelle vous êtes facturé.</li>
    </ul>
`;

const deleteAccount = () => `
<p>
Nous avons transmis votre demande à notre service de facturation afin de supprimer vos informations de paiement
du système. Une fois votre abonnement terminé le M/J/AAAA, les détails de votre carte de crédit seront supprimés
de notre systeme.
</p>
<p>
Nous ne manquerons pas de vous recontacter lorsque cette opération sera terminée.
</p>
`;
const claimGiftCard = () => `
<p>
Nous vous informons que vous pouvez vous abonnés en utilisant des cartes cadeaux Crave comme moyen de paiement.
Les cartes cadeau sont disponibles à l'achat physiquement chez votre dépanneur du coin, ou par le web sur le
lien <a target="_blank" href="https://www.crave.ca/fr/gift">www.crave.ca/fr/gift</a>
</p>
<p>
Veuillez noter que les cartes cadeaux Crave ne peuvent pas être utilisées en conjonction avec un abonnement
obtenu par iTunes, Roku ou par un fournisseur de services de télévision ou de mobilité.
</p>
<p>
Pour utiliser votre cadeau de Crave, veuillez suivre l'option 1 ou l'option 2, selon votre situation :
</p>
<ul>
<li>Option 1: Vous n'avez pas de compte Crave:</li>
<ul>
    <li>Cliquez <a target="_blank" href="https://www.crave.ca/fr/subscribe">ici</a></li>
    <li>Cliquez sur "Regarder Maintenant" et suivez les consignes d'abonnement</li>
    <li>Lorsque vous atteignez la page de paiement, sélectionnez "Ajouter une nouvelle carte cadeau"</li>
    <li>Saisissez le code de la carte cadeau et le code PIN figurant au dos de votre carte cadeau ou dans
        l'e-mail de confirmation que vous avez reçu avec votre carte cadeau Crave électronique, selon le cas.
    </li>
</ul>
<li>Option 2: Vous avez un compte Crave:</li>
<ul>
    <li>Allez au site web crave et connectez-vous à votre compte</li>
    <li>Cliquez sur " Gérer le compte ", puis sur " Abonnements "</li>
    <li>Cliquez sur " Modifier l'abonnement ", puis sur " Ajouter une carte-cadeau " dans la section "
        Renseignements sur le paiement "</li>
    <li>Saisissez le code de votre carte cadeau et le NIP figurant au dos de votre carte cadeau ou dans l'e-mail
        de confirmation que vous avez reçu avec votre carte cadeau électronique Crave, puis cliquez sur
        "Ajouter"</li>
</ul>
</ul>
`;

const giftCardInfo = () => `
<p>
Les cartes-cadeaux Crave non réclamées n'expirent pas. Les fonds non utilisés sur votre carte cadeau n'expirent
pas. Ils resteront sur votre compte jusqu'à ce que leur valeur soit épuisée par un abonnement à Crave. Si le
solde de votre carte cadeau est trop faible pour être échangé contre un abonnement, nous vous demanderons
d'ajouter un autre instrument de paiement pour compléter la transaction. L'instrument de
paiement peut être une carte de crédit, ou vous pouvez ajouter une ou plusieurs cartes cadeau.
</p>

`;

const redeemPromo = () => `
<p>
Avant de reclamer un code promotionel Crave, veuillez vérifier les conditions d'admissibilité afin de vous
assurer que vous pouvez bénéficier de la promotion.
Si vous avez déjà un compte Crave, avec ou sans abonnement actif, vous pouvez ajouter une promotion de deux
façons :
</p>

<ol>
<li>Cliquez <a target="_blank" href="https://account.bellmedia.ca/redeem/?lang=fr">ici</a></li>
<li>Entrez le code promotionel et suivez les étapes pour vous connecter à votre compte.</li>
</ol>
Ou
<ol>
<li>Connectez vous à votre compte sur le site web de Crave</li>
<li>Allez à "Gestion du compte" puis allez à "Abonnements"</li>
<li>Faites défiler vers le bas jusqu'à ce que vous voyez "Réclamer le code".</li>
</ol>

<p>
Si vous n'avez pas de compte Crave, cliquez <a target="_blank"
    href="https://account.bellmedia.ca/redeem/?lang=fr">ici</a> et suivez les instructions pour créer un nouveau
compte
</p>

`;
const promoFails = () => `
<p>Si vous rencontrez des difficultés pour réclamer votre code promotionel, nous vous invitons à suivres les étapes
        ci-dessous:
    </p>

    <ul>
        <li>Vérifiez les conditions d'admissibilité de votre offre spéciale et vérifiez que le code n'a pas expiré. Les
            codes ne peuvent pas être échangés après la date limite de réclamation.</li>
        <li>Vérifiez que le code promotionnel est écrit correctement. Les codes comportent un mélange de chiffres et de
            lettres, veillez à ne pas confondre les lettres et les chiffres, comme "O" et "0" et "1" et "I".</li>
        <li>Lorsque vous copiez le code directement, assurez-vous qu'il n'y a pas d'espace supplémentaire.</li>
        <li>Les codes promotionnels sont à usage unique et ne peuvent être réutilisés une fois échangés.</li>
        <li>Assurez-vous que votre navigateur Web est à jour, essayez d'utiliser un autre navigateur comme Chrome,
            Firefox, etc.</li>
        <li>- Les offres ne sont pas combinables. Si vous bénéficiez déjà d'une offre spéciale, tout code promo
            supplémentaire ne peut être appliqué à votre compte.</li>
        <li>- Certaines offres spéciales sont valables pour les clients qui avaient déjà un abonnement Crave. Pour les
            réclamer, veuillez-vous connecter et ajouter le code promotionnel sous "Abonnements" dans "Gérer le compte"
        </li>

    </ul>
`;

const linkCraveBobo = () => `
<p>
Afin d'utilisez votre abonnement Crave via Bell Mobilité, il est nécessaire de lier le numéro de téléphone
assoicé à l'abonnement à votre compte Crave. Veuillez cliquer <a
    href="https://www.crave.ca/fr/support/getting-started/how-do-i-access-a-crave-subscription-from-a-mobility-provider-51280505"
    target="_blank">ici</a> et suivez les étapes inscrites sur la page
</p>
`;

const downloadToGo = () => `
<p>
Download to Go vous permet de télécharger une émission ou un film et de le
regarder en streaming sans connexion Internet. Pour télécharger des
contenus:
</p>
<ul>
<li>
  Visitez la page d'une série ou d'un film et recherchez l'icône de
  téléchargement à côté de la vignette du titre.
</li>
<li>
  Cliquez sur l'icône de téléchargement et le téléchargement de votre
  titre commencera. L'icône de téléchargement changera pour indiquer la
  progression de votre téléchargement. Vous pouvez également visiter la
  section Mon Crave et cliquer sur Mes téléchargements pour voir la
  progression de vos téléchargements.
</li>
</ul>
<p>
Vous disposez de 30 jours après la fin du téléchargement pour commencer à
regarder un titre hors ligne. Après la lecture du titre téléchargé, la
vidéo expirera dans 48 heures. Les titres expirent également lorsque le
titre expire du service ou lorsque votre abonnement prend fin.
</p>
<p>Pour supprimer un épisode ou un film téléchargé :</p>
<ul>
<li>Visitez la section Mon Crave et cliquez sur Mes téléchargements.</li>
<li>Cliquez sur le lien Modifier en haut de la page.</li>
<li>
  Cochez les titres que vous souhaitez supprimer. Cliquez sur Supprimer.
  Les titres seront alors supprimés de votre appareil.
</li>
</ul>
`;

const newContent = () => `
<p>
Nous ne manquerons pas de transmettre votre demande à notre service de programmation chez Bell Média.
Veuillez noter que la diffusion des contenus requiert l'obtention des droits de diffusions premièrement
Gardez un œil sur nos flux Facebook et Twitter ou inscrivez-vous à notre newsletter pour recevoir les mises à jour !
</p>
`;

const feedback = () => `
<p>Nous sommes toujours heureux de recevoir des commentaires et d'entendre les suggestions de nos clients. Nous nous
assurerons de transmettre vos commentaires à l'équipe appropriée de Bell Média.</p>
`;
const managePin = () => `
<p>
Afin de reinitialiser ou supprimer le code nip de votre profil, nous vous invitons à suivres les étapes ci-dessous:
</p>

<ul>
<li>Cliquez <a target="_blank" href="https://account.bellmedia.ca/login/?lang=fr">ici</a></li>
<li>Connectez-vous à votre compte Crave</li>
<li>Sur le coin droit en haut, cliquer sur "Changer d'abonnement", puis choisissez "Crave"</li>
<li>Ensuite cliquez sur "Profils"</li>
<li>Cliquez sur le profil en question, et cliquez sur "Éditer"</li>
<li>Suivez les instruction pour mettre à jour le profil</li>
<li>Cliquez sur sauvegarder</li>
</ul>
`;

const probingOrSolution = (
  brand: string,
  category: string,
  questions?: [string]
): string => {
  const bulletPoints = questions?.join("");
  if (category === CATEGORIES.PROBING) {
    return `
    <p>Nous sommes navrés de savoir que vous rencontré un problème sur ${brand}. 
    Nous vous prions de nous communiquer les informations ci-dessous afin de pouvoir vous aider:</p>
    <ul>${bulletPoints}</ul>
  `;
  } else {
    return `
    <p>Nous sommes navrés de savoir que vous rencontré un problème sur ${brand}. 
    Nous vous prions d'effectuer les manipulations ci-dessous afin de régler le dysfonctionnement en question:</p>
    <ul>${bulletPoints}</ul>`;
  }
};

export const emailBody = (
  brand: string,
  category: string,
  request?: string,
  checkedBoxes?: [string]
) => {
  if (!brand) return;

  if (
    category === CATEGORIES.PROBING ||
    category === CATEGORIES.TROUBLESHOOTING
  ) {
    return probingOrSolution(brand, category, checkedBoxes);
  }

  switch (request) {
    case REQUESTS.WEB_AUTHENTICATION:
      if (brand === BRANDS.CRAVE) return signInWeb(craveWebsite);
      if (brand === BRANDS.RDS) return signInWeb(rdsWebsite);
      break;
    case REQUESTS.NO_REFUND_POLICY:
      if (brand === BRANDS.CRAVE)
        return noRefund(BRANDS.CRAVE, craveConditions);
      if (brand === BRANDS.RDS) return noRefund(BRANDS.RDS, rdsConditions);
      break;
    case REQUESTS.APP_AUTHENTICATION:
      return signInApp(brand);
    case REQUESTS.DEVICE_ACTIVATION:
      return activateDevice();
    case REQUESTS.CANCELLATION_DTC:
      return cancelDTC();
    case REQUESTS.CANCELLATION_ITUNES:
      return cancelIAP("ITunes", "Iphone/Ipad");
    case REQUESTS.CANCELLATION_ROKU:
      return cancelIAP("Roku", "Roku");
    case REQUESTS.CANCELLATION_GOOGLE:
      return cancelIAP("Google", "");
    case REQUESTS.REFUND_APPROVAL:
      return refundApproved();
    case REQUESTS.GEO_RESTRICTION:
      return nflBlackout();
    case REQUESTS.ADD_ON_STARZ:
      return addStarz();
    case REQUESTS.LANGUAGE_CHANGE:
      return changeLanguage();
    case REQUESTS.PASSWORD_RESET:
      return passwordReset();
    case REQUESTS.PAYMENT_INFORMATION_UPDATE:
      return ccUpdate();
    case REQUESTS.ACCOUNT_TRACKING:
      return locateAccount();
    case REQUESTS.ACCOUNT_DELETION:
      return deleteAccount();
    case REQUESTS.GIFT_CARD_USE:
      return claimGiftCard();
    case REQUESTS.GIFT_CARD_INFO:
      return giftCardInfo();
    case REQUESTS.PROMO_CODE_REDEEM:
      return redeemPromo();
    case REQUESTS.PROMO_CODE_FAILURE:
      return promoFails();
    case REQUESTS.PARTNER_LINKING:
      return linkCraveBobo();
    case REQUESTS.DOWNLOAD_TO_GO:
      return downloadToGo();
    case REQUESTS.CONTENT_REQUEST:
      return newContent();
    case REQUESTS.FEEDBACK:
      return feedback();
    case REQUESTS.MANAGE_PIN:
      return managePin();
    default:
      return;
  }
};
