import Progress from "./Progress";

export default {
    title: 'Progress',
    components: { Progress }
}

export const defaultView = () => ({
    components: {
        Progress
    },
    template: `
      <Progress class="animate"></Progress>
    `
})

defaultView.story = {
    name: 'Стандартный'
}
