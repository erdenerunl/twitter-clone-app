<template>
  <div class="tweet-container-wrapper">
    <div class="user-info-details">
      <user-figure />
      <user-info />
    </div>
    <div class="tweet-container">
      <tweet-container-item />
    </div>
  </div>
</template>

<script>
import UserFigure from "./shared/UserFigure.vue";
import UserInfo from "./shared/UserInfo.vue";
import TweetContainerItem from "./shared/TweetContainerItem.vue";
export default {
  components: {
    UserFigure,
    UserInfo,
    TweetContainerItem,
  },
};
</script>

<style lang="scss">
@import "@/assets/variable.scss";

.tweet-container-wrapper {
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  margin: 1rem;
  background-color: aqua;
  border: 1px solid $border;

  .user-info-details {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .tweet-container{
      margin: 1rem 0;
  }
}
</style>