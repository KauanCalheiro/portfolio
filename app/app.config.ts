export default defineAppConfig({
  // https://ui.nuxt.com/getting-started/theme#design-system
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral',
    },
    button: {
      slots: {
        base: 'cursor-pointer'
      },
      defaultVariants: {
        color: 'neutral'
      }
    },
    selectMenu: {
      slots: {
        base: 'cursor-pointer'
      }
    }
  }
})
