module.exports = {
  content: [],
  purge:[    "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      margin:{
        "1/5": '5px',
      },
      fontSize:{
        "inputWithLabel": ["18px", "1.333333"]
      },
      colors:{
        'graybr': '#555',
        'redbr':'rgba(255,0,0,.8)',
      }
    },
  },
  variants:{
    extend:{},
  },
  plugins: [],
}
