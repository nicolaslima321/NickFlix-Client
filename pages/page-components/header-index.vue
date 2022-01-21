<template>
  <div class="header-index">
    <img
      :src="require('~/assets/nickflix-logo2.png')"
      height="36px"
      width="156px"
    />
    <Button text='Sign In' />
  </div>
</template>

<script>
import Button from '@/components/common/Button.vue';

export default {
  name: 'HeaderIndexPage',
  components: {
    Button,
  },
};
</script>

<style lang="scss">
.header-index {
  margin: $space-lg $space-xl 0;
  padding: 0 $space-s;
  display: flex;
  justify-content: space-between;
}
</style>
