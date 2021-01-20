<template>
  <component :is="divComponent" :class="position">
      <slot />
  </component>
</template>

<script>
export default {
  name: "CustomDiv",
  props: {
    divComponent: {
      type: String,
      default: "div",
    },
    position: {
      type: String,
      default: "normal",
      validator: (value) => {
        return ["normal","centered"].includes(value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.normal{
    display: block;
}
.centered{
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>