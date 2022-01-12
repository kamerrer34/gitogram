import Skeleton from "./Skeleton";

export default {
    title: 'Skeleton',
    components: { Skeleton }
}

export const defaultView = () => ({
    components: {
        Skeleton
    },
    template: `
      <Skeleton :type="'big'"></Skeleton>
    `
})

export const threeView = () => ({
    components: {
        Skeleton
    },
    template: `
      <Skeleton :type="'three'"></Skeleton>
    `
})

export const profileView = () => ({
    components: {
        Skeleton
    },
    template: `
      <Skeleton :type="'profile'"></Skeleton>
    `
})

export const repoView = () => ({
    components: {
        Skeleton
    },
    template: `
      <Skeleton :type="'repo'"></Skeleton>
    `
})

defaultView.story = {
    name: 'Прямоугольник'
}

threeView.story = {
    name: 'Три полоски'
}

profileView.story = {
    name: 'Профиль'
}

repoView.story = {
    name: 'Репозиторий'
}
