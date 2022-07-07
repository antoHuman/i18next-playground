import i18next from "i18next";

i18next.init({
  debug: false, // set to true to have additional info
  lng: "en",
  fallbackLng: 'en',
  resources: {
    en: {
      translation: {
        key: "hello world",
      },
    },
    de: {
      translation: {
        key: "hallo Welt",
      },
    },
  },
});

console.log(i18next.t("key", {lng: 'de-CH'}));
