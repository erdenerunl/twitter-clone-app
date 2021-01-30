<template>
  <div class="tweet-text">
    <custom-text class="normal">
        {{ tweet.content }} 
    </custom-text>
  </div>
</template>

<script>
import CustomText from "@/components/CustomVariables/CustomText.vue";
export default {
  components: {
    CustomText,
  },
  props:["tweet"]
};
</script>

<style>
</style>