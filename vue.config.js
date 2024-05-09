const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig(
  // code snippets, this is going to tell webpack to use the system in the library target 
  {
    configureWebpack: {
      output: {
        libraryTarget: "system",
      }
    },
  },
  {
    transpileDependencies: true,
  }
);
