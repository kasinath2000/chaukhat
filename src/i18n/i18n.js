import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: "Home",
      introduction: "Introduction",
      elibry: "E-Libry",
      books: "Books",
      magazines: "Magazines",
      journals: "Journals",
      media: "Media",
      news: "News",
      newInfo: "New Info",
      thought: "Thought",
      allIssue: "All Issue",
      specialIssue: "Special Issue",
      archive: "Archive",
      contactUs: "Contact Us",
      login: "Admin Log in",
    },
  },
  hi: {
    translation: {
      home: "होम",
      introduction: "परिचय",
      elibry: "ई-लाइब्रेरी",
      books: "पुस्तकें",
      magazines: "पत्रिकाएँ",
      journals: "जर्नल्स",
      media: "मीडिया",
      news: "समाचार",
      newInfo: "नई जानकारी",
      thought: "विचार",
      allIssue: "सभी अंक",
      specialIssue: "विशेष अंक",
      Archive: "संग्रहालय",
      contactUs: "संपर्क करें",
      login: "व्यवस्थापक लॉगिन",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "hi", // 👈 Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
