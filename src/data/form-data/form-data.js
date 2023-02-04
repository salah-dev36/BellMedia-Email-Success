import BRANDS from "../types/brands-types.ts";
import CATEGORIES from "../types/categories-types.ts";
import REQUESTS from "../types/requests-types.ts";

import Agent from "../model/agent-model";
import Category from "../model/categorie-model";
import Request from "../model/request-model";
import Question from "../model/question-model";

export const agentNames = [
  new Agent("Salah"),
  new Agent("Lahbib"),
  new Agent("Khalid"),
  new Agent("Adam"),
  new Agent("Aymane"),
  new Agent("Fouad"),
  new Agent("Ihab"),
  new Agent("Safae"),
  new Agent("Sarah"),
  new Agent("Abderrahim"),
  new Agent("Mohammed"),
  new Agent("Houda"),
  new Agent("Ibtissam"),
];

const craveAndRDS = BRANDS.CRAVE + BRANDS.RDS;

export const requestsCategories = [
  new Category(CATEGORIES.DEVICE_ACTIVATION, BRANDS.CRAVE, "Device Activation"),
  new Category(CATEGORIES.AUTHENTICATION, craveAndRDS, "Authentication"),
  new Category(CATEGORIES.CANCELLATION, craveAndRDS, "Cancellation"),
  new Category(CATEGORIES.REFUND, craveAndRDS, "Refund"),
  new Category(CATEGORIES.SUBSCRIPTION, BRANDS.CRAVE, "Subscription Guides"),
  new Category(CATEGORIES.PROFIL, BRANDS.CRAVE, "Profile Guides"),
  new Category(CATEGORIES.ACCOUNT, craveAndRDS, "Account Related"),
  new Category(CATEGORIES.GIFT_CARD, BRANDS.CRAVE, "Gift Cards"),
  new Category(CATEGORIES.PROMO_CODE, BRANDS.CRAVE, "Promo Codes"),
  new Category(CATEGORIES.SUGGESTION, craveAndRDS, "Suggestions and Feedback"),
  new Category(CATEGORIES.PROBING, craveAndRDS, "Probing Questions"),
  new Category(CATEGORIES.TROUBLESHOOTING, craveAndRDS, "Troubleshootings"),
  new Category(CATEGORIES.OTHER, BRANDS.CRAVE, "Other"),
  new Category(CATEGORIES.GEO_RESTRICTION, BRANDS.RDS, "Geo-Restriction"),
];

export const requestsArray = [
  new Request(
    REQUESTS.WEB_AUTHENTICATION,
    craveAndRDS,
    "Web Authentication",
    CATEGORIES.AUTHENTICATION
  ),
  new Request(
    REQUESTS.APP_AUTHENTICATION,
    craveAndRDS,
    "App Authentication",
    CATEGORIES.AUTHENTICATION
  ),
  new Request(
    REQUESTS.DEVICE_ACTIVATION,
    BRANDS.CRAVE,
    "Device Activation for All Devices",
    CATEGORIES.DEVICE_ACTIVATION
  ),
  new Request(
    REQUESTS.GEO_RESTRICTION,
    BRANDS.RDS,
    "NFL Geo-restriction Policy",
    CATEGORIES.GEO_RESTRICTION
  ),
  new Request(
    REQUESTS.CANCELLATION_DTC,
    craveAndRDS,
    "Cancellation DTC",
    CATEGORIES.CANCELLATION
  ),
  new Request(
    REQUESTS.CANCELLATION_ITUNES,
    craveAndRDS,
    "Cancellation iTunes",
    CATEGORIES.CANCELLATION
  ),
  new Request(
    REQUESTS.CANCELLATION_GOOGLE,
    craveAndRDS,
    "Canceallation Google",
    CATEGORIES.CANCELLATION
  ),
  new Request(
    REQUESTS.CANCELLATION_ROKU,
    BRANDS.CRAVE,
    "Cancellation Roku",
    CATEGORIES.CANCELLATION
  ),
  new Request(
    REQUESTS.NO_REFUND_POLICY,
    craveAndRDS,
    "No Refund Policy",
    CATEGORIES.REFUND
  ),
  new Request(
    REQUESTS.REFUND_APPROVAL,
    craveAndRDS,
    "Refund Aprroval",
    CATEGORIES.REFUND
  ),
  new Request(
    REQUESTS.PARTNER_LINKING,
    BRANDS.CRAVE,
    "Partner Linking",
    CATEGORIES.SUBSCRIPTION
  ),
  new Request(
    REQUESTS.ADD_ON_STARZ,
    BRANDS.CRAVE,
    "How to add StarZ",
    CATEGORIES.SUBSCRIPTION
  ),
  new Request(
    REQUESTS.LANGUAGE_CHANGE,
    BRANDS.CRAVE,
    "Profile/Account language",
    CATEGORIES.PROFIL
  ),
  new Request(
    REQUESTS.MANAGE_PIN,
    BRANDS.CRAVE,
    "Manage Profil Pin",
    CATEGORIES.PROFIL
  ),
  new Request(
    REQUESTS.PASSWORD_RESET,
    craveAndRDS,
    "Password Reset",
    CATEGORIES.ACCOUNT
  ),
  new Request(
    REQUESTS.ACCOUNT_TRACKING,
    craveAndRDS,
    "Account Tracking",
    CATEGORIES.ACCOUNT
  ),
  new Request(
    REQUESTS.PAYMENT_INFORMATION_UPDATE,
    craveAndRDS,
    "Payment Information Update",
    CATEGORIES.ACCOUNT
  ),
  new Request(
    REQUESTS.ACCOUNT_DELETION,
    craveAndRDS,
    "Account Deletion",
    CATEGORIES.ACCOUNT
  ),
  new Request(
    REQUESTS.CONTENT_REQUEST,
    craveAndRDS,
    "Content Request",
    CATEGORIES.SUGGESTION
  ),
  new Request(
    REQUESTS.FEEDBACK,
    craveAndRDS,
    "General Feedback",
    CATEGORIES.SUGGESTION
  ),
  new Request(
    REQUESTS.DOWNLOAD_TO_GO,
    BRANDS.CRAVE,
    "Download To Go",
    CATEGORIES.OTHER
  ),
  new Request(
    REQUESTS.GIFT_CARD_USE,
    BRANDS.CRAVE,
    "How to buy and use gift card",
    CATEGORIES.GIFT_CARD
  ),
  new Request(
    REQUESTS.GIFT_CARD_INFO,
    BRANDS.CRAVE,
    "Gift card inquiries",
    CATEGORIES.GIFT_CARD
  ),
  new Request(
    REQUESTS.PROMO_CODE_REDEEM,
    BRANDS.CRAVE,
    "Redeem Promo Code",
    CATEGORIES.PROMO_CODE
  ),
  new Request(
    REQUESTS.PROMO_CODE_FAILURE,
    BRANDS.CRAVE,
    "Promo code not working",
    CATEGORIES.PROMO_CODE
  ),
];

export const questionsArray = [
  new Question(
    "which-device",
    craveAndRDS,
    "Sur quel(s) appareil(s) vous rencontrez le problème?",
    CATEGORIES.PROBING
  ),
  new Question(
    "which-browser",
    craveAndRDS,
    "Si vous êtes sur un ordinateur, quel navigateur vous utlisez?",
    CATEGORIES.PROBING
  ),
  new Question(
    "which-content",
    BRANDS.CRAVE,
    "Est-ce que le problème concerne tous les contenus ou un contenu spécifique?",
    CATEGORIES.PROBING
  ),
  new Question(
    "which-channel",
    BRANDS.RDS,
    "Est-ce que le problème concerne tous les chaines RDS ou une chaîne spécifique?",
    CATEGORIES.PROBING
  ),
  new Question(
    "when-blackout",
    BRANDS.RDS,
    "Est-ce que vous recevez le message d'erreur pendant des émissions spécifiques ou tout au long de la journée?",
    CATEGORIES.PROBING
  ),
  new Question(
    "is-error",
    craveAndRDS,
    "Est-ce que vous recevez un message d'erreur?Si oui, quel est le message?",
    CATEGORIES.PROBING
  ),
  new Question(
    "clear-cache-and-cookies",
    craveAndRDS,
    "Veuillez supprimer les données en cache et activer les cookies sur votre navigateur",
    CATEGORIES.TROUBLESHOOTING
  ),
  new Question(
    "power-cycle",
    craveAndRDS,
    "Veuillez débrancher votre téléviseur de la prise de courant électrique pendant 10 secondes et rebrancher le",
    CATEGORIES.TROUBLESHOOTING
  ),
  new Question(
    "audio-device",
    craveAndRDS,
    "Veuillez Dérancher tout sorte de système de son externe branché sur votre appareil",
    CATEGORIES.TROUBLESHOOTING
  ),
  new Question(
    "reset-router",
    craveAndRDS,
    "Veuillez redémarrer votre routeur et model de connexion",
    CATEGORIES.TROUBLESHOOTING
  ),
  new Question(
    "private-window",
    craveAndRDS,
    "Veuillez essayer sur une fenêtre de navigation privée",
    CATEGORIES.TROUBLESHOOTING
  ),
];
