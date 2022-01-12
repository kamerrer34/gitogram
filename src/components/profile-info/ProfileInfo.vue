<template src="./template.html"></template>

<script>
import Spinner from "../spinner/Spinner";
import Skeleton from "../skeleton/Skeleton";

export default {
  name: "ProfileInfo",
  props: ['data', 'userLoad', 'followingShow'],
  emits: ['onFollowing'],
  components: {
    Spinner,
    Skeleton,
  }
}
</script>

<style src="./style.scss" lang="scss" scoped></style>