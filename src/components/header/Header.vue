<template src="./template.html"></template>

<script>
import Spinner from "../spinner/Spinner";
import Icon from "../icon/Icon";
import Logo from "../logo/Logo";


export default {
  name: "Header",
  components: {
    Spinner,
    Icon,
    Logo,
  },
  data() {
    return {
      avatar: null,
    }
  },
  methods: {
    logout() {
      localStorage.clear();
    }
  },
  mounted() {
    this.avatar = localStorage.getItem('avatar');
  }
}
</script>

<style src="./style.scss" lang="scss" scoped></style>