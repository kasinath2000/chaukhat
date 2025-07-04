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
      rulesbook: "Rules Book",
      thought: "Thought",
      allIssue: "All Issue",
      specialIssue: "Special Issue",
      archive: "Archive",
      contactUs: "Contact Us",
      login: "Admin Log in",
       audioBooks: "Audio Books",
    textBooks: "Text Books",
    bookReviews: "Book Reviews",
    },
  },
  hi: {
    translation: {
      home: "होम",
      introduction: "परिचय",
      elibry: "ई-लाइब्रेरी",
      books: "पुस्तकें",
      audioBooks: "ऑडियो पुस्तकें",
    textBooks: "पाठ्यक्रम की पुस्तकें",
    bookReviews: "पुस्तक समीक्षाएं",
      magazines: "पत्रिकाएँ",
      journals: "जर्नल्स",
      media: "मीडिया",
      news: "समाचार",
      rulesbook: "नियमावली",
      thought: "विचार",
      allIssue: "सभी अंक",
      specialIssue: "विशेष अंक",
      archive: "संग्रहालय", // ✅ lowercase fixed
      contactUs: "संपर्क करें",
      login: "व्यवस्थापक लॉगिन",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "hi", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
