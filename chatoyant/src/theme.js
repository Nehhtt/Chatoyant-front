import { grommet } from 'grommet/themes';
import { css } from 'styled-components';
import { deepMerge } from 'grommet/utils';

const customTheme = deepMerge(grommet, {
  global: {
    font: {
      family: 'DM Sans',
    },
    control: {
      border: {
        color: '#cccccc',
      },
    },
    breakpoints: {
      xxsmall: {
        value: 350,
      },
      xsmall: {
        value: 568,
      },
      small: {
        value: 768,
      },
      medium: {
        value: 1024,
      },
      large: {
        value: 1366,
      },
      xlarge: {
        value: 1680,
      },
      xxlarge: {
        value: 1920,
      },
      xxxlarge: {}, // WARNING : DO NOT PUT A VALUE HERE AS GROMMET EXPECT EMPTY VALUE FOR LAST ELEMENT. Cf. https://v2.grommet.io/responsivecontext
    },
    edgeSize: {
      xxlarge: '192px',
    },
    colors: {
      focus: '#19B872',
      black: '#000000',
      brand: '#19B872', // nouvelle couleur ?
      'accent-1': '#1777f2',
      'accent-2': '#19B872',
      'accent-3': '#ff6158',
      'accent-4': '#ffd100',
      'accent-5': '#F25451',
      'accent-6': '#FF911D',
      'accent-7': '#21A9FF',
      'border-1': '#cccccc',
      'cobalt-1': '#1a2676',
      'dark-1': '#999999',
      'dark-2': '#666666',
      'dark-3': '#bbbcc4',
      'dark-4': '#ebebf0',
      'light-1': '#f0f2f7',
      'neutral-1': '#1e266d',
      'neutral-2': '#545fc7',
      'neutral-3': '#505478',
      text: {
        dark: 'white',
        light: 'black',
      },
    },
    input: {
      weight: 600,
    },
  },
  heading: {
    weight: 900,
    font: {
      family: 'Fira Sans',
    },
    level: {
      1: {
        small: {
          size: '34px',
          height: '40px',
          maxWidth: '816px',
        },
        medium: {
          size: '50px',
          height: '56px',
          maxWidth: '1200px',
        },
        large: {
          size: '82px',
          height: '88px',
          maxWidth: '1968px',
        },
        xlarge: {
          size: '114px',
          height: '120px',
          maxWidth: '2736px',
        },
      },
      2: {
        small: {
          size: '26px',
          height: '32px',
          maxWidth: '624px',
        },
        medium: {
          size: '34px',
          height: '40px',
          maxWidth: '816px',
        },
        large: {
          size: '50px',
          height: '56px',
          maxWidth: '1200px',
        },
        xlarge: {
          size: '66px',
          height: '72px',
          maxWidth: '1584px',
        },
      },
      3: {
        small: {
          size: '22px',
          height: '28px',
          maxWidth: '528px',
        },
        medium: {
          size: '26px',
          height: '32px',
          maxWidth: '624px',
        },
        large: {
          size: '34px',
          height: '40px',
          maxWidth: '816px',
        },
        xlarge: {
          size: '42px',
          height: '48px',
          maxWidth: '1008px',
        },
      },
      4: {
        small: {
          size: '18px',
          height: '24px',
          maxWidth: '600px',
        },
        medium: {
          size: '18px',
          height: '24px',
          maxWidth: '600px',
        },
        large: {
          size: '18px',
          height: '24px',
          maxWidth: '600px',
        },
        xlarge: {
          size: '18px',
          height: '24px',
          maxWidth: '600px',
        },
      },
      5: {
        small: {
          size: '16px',
          height: '22px',
          maxWidth: '384px',
        },
        medium: {
          size: '16px',
          height: '22px',
          maxWidth: '384px',
        },
        large: {
          size: '16px',
          height: '22px',
          maxWidth: '384px',
        },
        xlarge: {
          size: '16px',
          height: '22px',
          maxWidth: '384px',
        },
      },
      6: {
        small: {
          size: '14px',
          height: '20px',
          maxWidth: '336px',
        },
        medium: {
          size: '14px',
          height: '20px',
          maxWidth: '336px',
        },
        large: {
          size: '14px',
          height: '20px',
          maxWidth: '336px',
        },
        xlarge: {
          size: '14px',
          height: '20px',
          maxWidth: '336px',
        },
      },
    },
  },
  text: {
    xsmall: {
      size: '12px',
      height: '18px',
      maxWidth: '288px',
    },
    small: {
      size: '14px',
      height: '20px',
      maxWidth: '336px',
    },
    medium: {
      size: '17px',
      height: '24px',
      maxWidth: '432px',
    },
    large: {
      size: '22px',
      height: '28px',
      maxWidth: '528px',
    },
    xlarge: {
      size: '26px',
      height: '32px',
      maxWidth: '624px',
    },
    xxlarge: {
      size: '34px',
      height: '40px',
      maxWidth: '816px',
    },
  },
  paragraph: {
    xxlarge: {
      size: '28px',
    },
  },
  button: {
    color: {
      dark: 'white',
      light: '#1e266d',
    },
    border: {
      radius: '.5em',
    },
  },
  anchor: {
    fontWeight: 300,
  },
  textInput: {
    extend: () => css`
      font-size: 15px;
    `,
    container: {
      extend: () => css`
        background: transparent;
      `,
    },
  },
  textArea: {
    extend: () => css`
      background: white;
      font-size: 15px;
    `,
  },
  select: {
    container: {
      extend: () => css`
        font-size: 15px;
      `,
    },
    control: {
      extend: () => css`
        font-size: 15px;
      `,
    },
  },
  checkBox: {
    check: {},
    border: {
      color: {
        light: 'rgba(0,0,0,0.29)',
      },
    },
  },
});

export { customTheme as default };
