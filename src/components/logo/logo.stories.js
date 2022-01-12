import Logo from "./Logo";

export default {
    title: 'Logo',
    components: { Logo }
}

export const defaultView = () => ({
    components: {
        Logo
    },
    template: `
      <Logo></Logo>
    `
})

defaultView.story = {
    name: 'Стандартный'
}
