<template>
  <button
    class="button"
    :style="buttonStyle"
    type="button"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    icon: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'primary',
    },
  },
  computed: {
    buttonStyle() {
      switch (this.type) {
        case 'primary':
          return { backgroundColor: 'red' };
        case 'secondary':
          return { backgroundColor: 'blue' };
        default:
          return { backgroundColor: 'red' };
      }
    },
  }
};
</script>

<style lang="scss">
.button {
  border: none;
  border-radius: 4px;
  font-size: 1em;
  padding: 8px 16px;
}
</style>
