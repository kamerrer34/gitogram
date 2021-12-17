<template src="./template.html"></template>

<script>
import Header from "../../components/header/Header";
import ProfileInfo from "../../components/profile-info/ProfileInfo";
import Repository from "../../components/repository/Repository";

import { mapState, mapActions } from "vuex"

export default {
  name: 'Profile',
  components: {
    Header,
    ProfileInfo,
    Repository
  },
  computed: {
    ...mapState({
      user: state => state.user.data,
      repos: state => state.repos.data,
    }),
  },
  methods: {
    ...mapActions({
      fetchUser: 'user/fetchUser',
      fetchRepos: 'repos/fetchRepos'
    })
  },
  async created() {
    await this.fetchUser();
    await this.fetchRepos();
  }
}
</script>

<style src="./style.scss" lang="scss"></style>