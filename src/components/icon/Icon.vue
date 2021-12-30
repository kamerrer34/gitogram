<template>
  <component :is="name"></component>
</template>

<script>
import * as icons from './variants'

export default {
  name: "Icon",
  components: { ...icons },
  props: {
    name: {
      type: String,
      require: true,
      validator (value) {
        return Object.keys(icons).includes(value)
      }
    }
  }
}
</script>