<template src="./template.html"></template>

<script>
import Header from "../../components/header/Header";
import ProfileInfo from "../../components/profile-info/ProfileInfo";
import Repository from "../../components/repository/Repository";

export default {
  name: 'Profile',
  components: {
    Header,
    ProfileInfo,
    Repository
  }
}
</script>

<style src="./style.scss" lang="scss"></style>