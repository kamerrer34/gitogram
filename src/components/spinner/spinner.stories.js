import spinner from "./Spinner";

export default {
    title: 'spinner',
    components: { spinner }
}

export const defaultView = () => ({
    components: {
        spinner
    },
    template: `
      <Spinner></Spinner>
    `
})

defaultView.story = {
    name: 'Стандартный вид'
}
