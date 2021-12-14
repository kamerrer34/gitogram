<template src="./template.html"></template>

<script>
import Logo from "../../components/logo/Logo";
import Slide from "../../components/slide/Slide";

import { mapState, mapActions } from "vuex"

export default {
  name: 'Stories',
  components: {
    Logo,
    Slide
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
      trends: state => state.trends.data
    }),
  },
  methods: {
    ...mapActions({
      fetchTrends: 'trends/fetchTrends',
      fetchReadme: 'trends/fetchReadme'
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
        console.log(err);
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
    }
  },
  async mounted() {
    await this.fetchTrends();
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