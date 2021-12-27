<template src="./template.html"></template>

<script>
import Header from "../../components/header/Header";
import ProfileInfo from "../../components/profile-info/ProfileInfo";
import Repository from "../../components/repository/Repository";
import Following from "../../components/following/Following";

import { mapState, mapActions } from "vuex"

export default {
  name: 'Profile',
  components: {
    Header,
    ProfileInfo,
    Repository,
    Following,
  },
  data() {
    return {
      followingShow: false,
    }
  },
  computed: {
    ...mapState({
      user: state => state.user.data,
      repos: state => state.repos.data,
      following: state => state.following.data,
    }),
  },
  methods: {
    ...mapActions({
      fetchUser: 'user/fetchUser',
      fetchRepos: 'repos/fetchRepos',
      fetchFollowing: 'following/fetchFollowing',
      fetchFollow: 'following/fetchFollow',
    }),
    async toggleFollowing() {
      this.followingShow = !this.followingShow;
      if (!this.following) {
        await this.fetchFollowing();
      }
    },
    async follow(id) {
      const ndx = this.following.findIndex((item) => item.id === id);
      const user = this.following[ndx];
      const params = {
        id: user.id,
        user: user.login,
        method: user.follow ? 'DELETE' : 'PUT'
      };
      await this.fetchFollow(params);
    },
  },
  async created() {
    await this.fetchUser();
    await this.fetchRepos();
  }
}
</script>

<style src="./style.scss" lang="scss"></style>