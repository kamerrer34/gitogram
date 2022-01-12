import Spinner from "./Spinner";

export default {
    title: 'Spinner',
    components: { Spinner }
}

export const defaultView = () => ({
    components: {
        Spinner
    },
    template: `
      <Spinner></Spinner>
    `
})

export const smallView = () => ({
    components: {
        Spinner
    },
    template: `
      <button class="g-button">
        <Spinner class="small"></Spinner>
      </button>
    `
})

defaultView.story = {
    name: 'Стандартный'
}

smallView.story = {
    name: 'Для кнопки'
}
