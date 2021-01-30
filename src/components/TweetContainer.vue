<template>
  <div class="tweet-container-wrapper">
    <div class="user-info-details">
      <user-figure />
      <user-info :tweet="tweet" />
    </div>
    <div class="tweet-container">
      <tweet-container-item :tweet="tweet"  />
    </div>
  </div>
</template>

<script>
import UserFigure from "./shared/UserFigure.vue";
import UserInfo from "./shared/UserInfo.vue";
import TweetContainerItem from "./shared/TweetContainerItem.vue";
import { mapGetters} from "vuex";
export default {
  components: {
    UserFigure,
    UserInfo,
    TweetContainerItem,
  },
  props:["tweet"],
};
</script>







<style lang="scss">
@import "@/assets/variable.scss";

.tweet-container-wrapper {
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  margin: 1rem;
  border: 1px solid $border;

  .user-info-details {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  .tweet-container {
    margin: 1rem 0;
  }
}
</style>