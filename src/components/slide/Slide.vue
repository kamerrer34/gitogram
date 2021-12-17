<template src="./template.html"></template>

<script>
import Spinner from "../spinner/Spinner";
import SliderBtn from "../slider-btn/SliderBtn";
import Skeleton from "../skeleton/Skeleton";
import Progress from "../progress/Progress";

export default {
  name: "Slide",
  props: ['active', 'loading', 'btnPrev', 'btnNext', 'data'],
  emits: ['onPrevSlide', 'onNextSlide', 'onProgressFinish'],
  components: {
    Spinner,
    SliderBtn,
    Skeleton,
    Progress,
  }
}
</script>

<style src="./style.scss" lang="scss" scoped></style>