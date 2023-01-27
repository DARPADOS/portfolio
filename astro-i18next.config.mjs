/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "en",
  locales: ["en", "es"],
  showDefaultLocale: false,
  i18nextServer: {
    debug: true,
    backend: {
      loadPath: './public/locales/{{lng}}/{{ns}}.json',
    }
  },
  i18nextClient: {
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  },
};