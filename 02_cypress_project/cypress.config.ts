import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://www.uitestingplayground.com',
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      firstVariable: 'First Variable - Test',
      demoqa: "https://demoqa.com/",
      herokuapp: "https://the-internet.herokuapp.com/",
      globalsqa: "https://www.globalsqa.com/",
    }
  },

  // Globální konfigurační hodnoty
  pageLoadTimeout: 60000,
  viewportWidth: 1500,
  viewportHeight: 1000,
});
