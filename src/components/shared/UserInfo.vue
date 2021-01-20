<template>
  <div class="user-info-wrapper">
      <custom-text class="small">
          Erdener Ünal
      </custom-text>
      <custom-text class="small text-muted">
         3 hours ago
      </custom-text>

  </div>
</template>

<script>
import CustomText from "@/components/CustomVariables/CustomText.vue";
export default {
    components:{
        CustomText
    }
};
</script>

<style lang="scss" scoped>
.user-info-wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: .5rem;
    margin-left: 1rem;
}

</style>