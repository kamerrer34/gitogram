<template src="./template.html"></template>

<script>
import Spinner from "../spinner/Spinner";
import SliderBtn from "../slider-btn/SliderBtn";
import Skeleton from "../skeleton/Skeleton";
import Progress from "../progress/Progress";

export default {
  name: "Slide",
  props: ['active', 'last', 'loading', 'btnPrev', 'btnNext', 'data'],
  emits: ['onPrevSlide', 'onNextSlide', 'onProgressFinish', 'onFollow'],
  components: {
    Spinner,
    SliderBtn,
    Skeleton,
    Progress,
  },
  methods: {
    progress() {
      setTimeout(() => {
        if (this.active && !this.last) {
          //this.$emit('onProgressFinish');
        }
      }, 5000);
    }
  },
  watch: {
    active(curVal) {
      if (curVal) {
        this.progress();
      }
    }
  },
  created() {
    if (this.active) {
      this.progress();
    }
  }
}
</script>

<style src="./style.scss" lang="scss" scoped></style>