import SliderBtn from "./SliderBtn";

export default {
    title: 'SliderBtn',
    components: { SliderBtn }
}

export const defaultView = () => ({
    components: {
        SliderBtn
    },
    template: `
      <SliderBtn class="prev"></SliderBtn>
    `
})

export const nextView = () => ({
    components: {
        SliderBtn
    },
    template: `
      <SliderBtn class="next"></SliderBtn>
    `
})

defaultView.story = {
    name: 'Левая'
}

nextView.story = {
    name: 'Правая'
}
