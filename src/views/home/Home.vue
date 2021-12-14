<template src="./template.html"></template>

<script>
import Header from "../../components/header/Header";
import User from "../../components/user/User";

import { mapState, mapActions } from "vuex"

export default {
  name: 'Home',
  components: {
    Header,
    User,
  },
  computed: {
    ...mapState({
      trends: state => state.trends.data
    }),
  },
  methods: {
    ...mapActions({
      fetchTrends: 'trends/fetchTrends',
    }),
    getUserData(obj) {
      return {
        id: obj.id,
        avatar: obj.owner?.avatar_url,
        name: obj.owner?.login,
      }
    }
  },
  async created() {
    await this.fetchTrends();
  }
}
</script>

<style src="./style.scss" lang="scss"></style>