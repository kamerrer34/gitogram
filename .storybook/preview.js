import './main.scss'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'white',
    values: [
      {
        default: 'white',
        value: '#fff'
      },
      {
        name: 'black',
        value: '#222'
      }
    ]
  }
}