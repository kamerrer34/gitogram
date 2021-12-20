<template src="./template.html"></template>

<script>
import Header from "../../components/header/Header";
import User from "../../components/user/User";
import Repository from "../../components/repository/Repository";

import { mapState, mapActions, mapMutations } from "vuex"

export default {
  name: 'Home',
  components: {
    Header,
    User,
    Repository
  },
  computed: {
    ...mapState({
      trends: state => state.trends.data,
      starred: state => state.starred.data,
    }),
  },
  methods: {
    ...mapActions({
      fetchTrends: 'trends/fetchTrends',
      fetchStarred: 'starred/fetchStarred',
      fetchIssues: 'starred/fetchIssues',
    }),
    ...mapMutations({
      setActiveIssue: 'starred/SET_ACTIVE_ISSUE',
    }),
    getUserData(obj) {
      return {
        id: obj.id,
        avatar: obj.owner?.avatar_url,
        name: obj.owner?.login,
      }
    },
    getRepoData(obj) {
      return {
        id: obj.id,
        name: obj.name,
        description: obj.description,
        stargazers_count: obj.stargazers_count,
        forks_count: obj.forks_count,
        html_url: obj.html_url,
        owner_name: obj.owner?.login,
        owner_avatar: obj.owner?.avatar_url,
        date: this.getFormatDate(obj.updated_at),
        issues: obj.issues || [],
        active: obj.active,
      }
    },
    getFormatDate(val) {
      const date = new Date(val);
      const dateArr = date.toString().split(' ');
      return dateArr[2] + ' ' + dateArr[1];
    },
    async toggleIssues(id, owner, repo, issues) {
      this.setActiveIssue(id);
      if (!issues) {
        await this.fetchIssues({id, owner, repo});
      }
    },
  },
  async created() {
    await this.fetchTrends();
    await this.fetchStarred();
  }
}
</script>

<style src="./style.scss" lang="scss"></style>