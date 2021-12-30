<template src="./template.html"></template>

<script>
import Skeleton from "../skeleton/Skeleton";
import Icon from "../icon/Icon";

export default {
  name: "Repository",
  props: ['data'],
  emits: ['toggleIssues'],
  components: {
    Skeleton,
    Icon,
  }
}
</script>

<style src="./style.scss" lang="scss" scoped></style>