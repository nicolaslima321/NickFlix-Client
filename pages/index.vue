<template>
  <div class="index">
    <HeaderIndex />
    Unlimited movies, TV shows, and more.
    <br/>
    Watch anywhere. Cancel anytime
    <br/>
    Ready to watch? Enter your email to create or restart your membership.
    <br/>
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
</style>
