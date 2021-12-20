<template src="./template.html"></template>

<script>
import Skeleton from "../skeleton/Skeleton";

export default {
  name: "Repository",
  props: ['data'],
  emits: ['toggleIssues'],
  components: {
    Skeleton
  }
}
</script>

<style src="./style.scss" lang="scss" scoped></style>