export const module = {
  rules: [
    {
      test: /\.scss$/,
      use: [
        "style-loader", // Injects CSS into the DOM
        "css-loader", // Interprets @import and url() like import/require()
        "sass-loader", // Compiles Sass to CSS
      ],
    },
  ],
};
