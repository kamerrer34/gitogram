<template src="./template.html"></template>

<script>
import Spinner from "../spinner/Spinner";

export default {
  name: "User",
  props: ['data'],
  components: {
    Spinner
  }
}
</script>

<style src="./style.scss" lang="scss" scoped></style>