module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            ident: 'postcss',
            syntax: 'postcss-scss',
            plugins: {
              'postcss-import': {},
              [process.env.NODE_ENV === 'production'
                ? 'tailwindcss'
                : '@tailwindcss/jit']: {},
              autoprefixer: {},
            },
          },
        },
      },
    ],
  },
};
