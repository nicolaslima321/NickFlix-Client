<template>
  <div class="index">
    <HeaderIndex class="index__header"/>

    <div class="index__membership-section">
      <h1 class="index__text">Unlimited movies, TV shows, and more.</h1>
      <h3 class="index__text">Watch anywhere. Cancel anytime</h3>
      <label class="index__text">Ready to watch? Enter your email to create or restart your membership.</label>
    </div>
  </div>
</template>

<script>
import HeaderIndex from './page-components/header-index';

export default {
  name: 'IndexPage',
  components: {
    HeaderIndex,
  },
};
</script>

<style lang="scss">
.index {
  @extend .index__background;
  display: flex;
  flex-direction: column;
}

.index__membership-section {
  // display: flex;
  align-self: center;
  justify-self: center;
  padding: $space-xxl;
}

.index__header {
  //
}

.index__background {
  background: rgba(0, 0, 0, 0.4) url('~assets/netflix-bg.jpg') no-repeat center fixed;
  background-size: cover;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  background-blend-mode: darken;
}

.index__text {
 color: white;
}
</style>
