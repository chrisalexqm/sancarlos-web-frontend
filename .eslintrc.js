module.exports = {
  root: true,
  env: {
       browser: true,
       node: true
  },
  parserOptions: {
       parser: 'babel-eslint'
  },
  extends: [
       '@nuxtjs',
       'standard'
  ],
  // add your custom rules here
  rules: {
     "indent": 0,
     "no-console": "off",
     "no-tabs": 0,
     "eol-last": "off",
     "generator-star-spacing": 0,
     "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0
  }
}
