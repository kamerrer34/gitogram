<template src="./template.html"></template>

<script>
import Logo from "../../components/logo/Logo";
import Slide from "../../components/slide/Slide";
import Icon from "../../components/icon/Icon";

import { mapState, mapActions, mapMutations } from "vuex"

export default {
  name: 'Stories',
  components: {
    Logo,
    Slide,
    Icon,
  },
  data() {
    return {
      slideNdx: 0,
      slidePosition: 0,
      loading: false,
    }
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
      fetchReadme: 'trends/fetchReadme',
      fetchFollow: 'trends/fetchFollow',
      fetchStarred: 'starred/fetchStarred',
    }),
    ...mapMutations({
      setFollow: 'trends/SET_FOLLOW',
    }),
    async fetchReadmeSlide() {
      const {id, owner, name} = this.trends[this.slideNdx];
      await this.fetchReadme({id, owner: owner.login, repo: name});
    },
    async loadReadme() {
      this.loading = true;
      try {
        await this.fetchReadmeSlide();
      } catch (err) {
        console.error(err);
        throw err;
      } finally {
        this.loading = false;
      }
    },
    getStoryData(obj) {
      return {
        id: obj.id,
        avatar: obj.owner?.avatar_url,
        name: obj.owner?.login,
        text: obj.readme,
        follow: obj.follow,
        followLoad: obj.followLoad,
      }
    },
    moveSlider(ndx) {
      const { slider } = this.$refs;
      const slide = slider.children[0];
      this.slideNdx = ndx;
      this.slidePosition = -(slide.offsetWidth * ndx);
      slider.style.transform = `translateX(${this.slidePosition}px`;
    },
    async handleSlide(ndx) {
      this.moveSlider(ndx);
      await this.loadReadme();
    },
    async handleFollow(ndx) {
      const repo = this.trends[ndx];
      const params = {
        id: repo.id,
        owner: repo.owner.login,
        repo: repo.name,
        method: repo.follow ? 'DELETE' : 'PUT'
      };
      await this.fetchFollow(params);
    },
    async defineFollow() {
      await this.fetchTrends();
      await this.fetchStarred();
      this.trends.map(trendRepo => {
        const star = this.starred.some(starredRepo => {
          return trendRepo.id === starredRepo.id
        });
        if (star) {
          this.setFollow({ id: trendRepo.id });
        }
      });
    }
  },
  async mounted() {
    await this.defineFollow();
    await this.loadReadme();
    const slideId = Number(this.$route.params.slide);
    if (slideId) {
      const ndx = this.trends.findIndex((item) => item.id === slideId);
      await this.handleSlide(ndx);
    }
  }
}
</script>

<style src="./style.scss" lang="scss"></style>