<template>
  <component :is="tag" :class="size">
      <slot />
  </component>
</template>

<script>
export default {
    name: "CustomText",
    props:{
        tag:{
            type: String,
            default: "span"

        },
        size:{
            type: String,
            default: "normal",
            validator: (value) =>{
                return (
                    ["normal","small","xsmall","large","xlarge"].indexOf(value) !== -1
                )
            }
        }
    }
}
</script>

<style lang="scss">
.normal{
    font-size:1rem;
}
.small{
    font-size: 0.875rem;
}
.xsmall{
    font-size: 0.625rem;
}
.large{
    font-size: 1.50rem;
}
.xlarge{
    font-size: 2rem;
}


</style>