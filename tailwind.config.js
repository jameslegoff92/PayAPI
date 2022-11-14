/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./server/views/**/*.ejs"
  ],

  theme: {
    screens: {
      sm: '600px',
      md: '768px',
      md_lg: { 'min': '768px', 'max': '1439px'},
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      pc1: '#ba4270', //Dark Pink
      pc2: '#fbfcfe', //Link Water White
      pc3: '#edf3f8', //Background Color
      sc1: '#36536b', //San Juan Blue
      sc2: '#1b262f', //Mirage Blue
      sc3: '#da6d97', //Charnm Pink  
      sc4: '#6c8294', //Light San Juan Blue
      border: 'rgba(54, 83, 107, 0.25)', 
      transparent: 'transparent'
    },
    letterSpacing: {
      200: "-0.0075em", //0.12px
      250: '-0.01125em', //0.18px
      300: "-0.015625em", //0.25px
      400: "-0.0175em", //0.28px
      500: '-0.023125em', //0.37px
      550: '-0.027em', //43px
      600: '-0.55em' //72px
    },
    extend: {
      backgroundImage: {
        circle: "url('/assets/shared/desktop/bg-pattern-cirlce.svg')",
      },
      content: {
        link: 'url("/assets/shared/desktop/icon-check.svg ")',
      },
      fontFamily: {
        dm: ['DM Serif Display', 'serif'],
        public: ['Public Sans', 'sans-serif']
      },
      fontSize: {
        11: '11px',
        15: '15px',
        16: '16px',
        18: '18px',
        20: '20px',
        24: '24px',
        '48p': '48px',
        '56p': '56px',
        32: '2rem',
      },
      height: {
        btn: "48px",
      },

      lineHeight: {
        1.125: '1.125',
        1.4: '1.4',
        1.7: '1.7',
        1.87: '1.87'
      },
      margin: {
       '10p': '10px',
       '24p': '24px',
       '32p': '32px',
        40: '40px',
        '48p': '48px',
        '51p': '51px',
        '56p': '56px',
        64: "64px",
        76: "4.75rem", //76px
        '80p': '80px',
        '96p': '96px',
        '100p': '100px'
      },
      padding: {
        14: '14px', //14px
        16: '16px', //16px
        24.5: '24.5px', //24.5px
        26.5: '26.5px', //26.5px
        32: '32px', //32px

      },
      screens: {
        'tall': {'raw': '(min-height: 946px), (min-width: 1440px)'},
      },
      width: {
        "109/125": "87.2%",
        "280/327": "85.6%",
        btn: "129px",
        btn_md: "173px",
        max: '1110px',
        '327p': '327px',
        '456p': '456px',
        '573p': '573px',
        '681p':'681px',
        '920p': '920px',
      },
      maxWidth: {
        '327p': '327px',
        '445p': '445px',
        '500p': '500px',
        max: '1110px',
      }
    }
  },
  plugins: [],
};
