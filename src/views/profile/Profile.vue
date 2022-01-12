<template src="./template.html"></template>

<script>

import ProfileInfo from "../../components/profile-info/ProfileInfo";
import Repository from "../../components/repository/Repository";
import Following from "../../components/following/Following";
import Skeleton from "../../components/skeleton/Skeleton";
import Header from "../../components/header/Header";

import { mapState, mapActions } from "vuex"

export default {
  name: 'Profile',
  components: {
    ProfileInfo,
    Repository,
    Following,
    Skeleton,
    Header,
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
    getUserData(obj) {
      return {
        avatar: obj?.avatar_url,
        name: obj?.name,
        login: obj?.login,
        repos: obj?.public_repos,
        following: obj?.following,
      }
    },
    getFollowingData(obj) {
      return {
        avatar: obj?.avatar_url,
        login: obj?.login,
        type: obj?.type,
        follow: obj?.follow,
        followLoad: obj?.followLoad,
      }
    },
    getRepoData(obj) {
      return {
        id: obj?.id,
        name: obj?.name,
        description: obj?.description,
        url: obj?.html_url,
        stargazers: obj?.stargazers_count,
        forks: obj?.forks_count,
        issues: obj?.issues,
        active: obj?.active,
      }
    },
    toggleFollowing() {
      this.followingShow = !this.followingShow;
      if (!this.following) {
        this.fetchFollowing();
      }
    },
    follow(id) {
      const ndx = this.following.findIndex((item) => item.id === id);
      const user = this.following[ndx];
      const params = {
        id: user.id,
        user: user.login,
        method: user.follow ? 'DELETE' : 'PUT'
      };
      this.fetchFollow(params);
    },
  },
  async mounted() {
    await this.fetchUser();
    await this.fetchRepos();
  }
}
</script>

<style src="./style.scss" lang="scss"></style>