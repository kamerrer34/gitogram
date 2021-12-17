<template src="./template.html"></template>

<script>
import Logo from "../logo/Logo";
import Spinner from "../spinner/Spinner";

export default {
  name: "Header",
  components: {
    Logo,
    Spinner
  },
  data() {
    return {
      avatar: null,
    }
  },
  created() {
    this.avatar = localStorage.getItem('avatar');
  }
}
</script>

<style src="./style.scss" lang="scss" scoped></style>