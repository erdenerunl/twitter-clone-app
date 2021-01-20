<template>
  <div class="container-fluid mx-0 px-0">
    <div class="row px-0 mx-0">
      <left-sidebar />

      <router-view></router-view>

      <right-sidebar />
    </div>
  </div>
</template>

<script>
import LeftSidebar from "@/components/shared/sidebars/LeftSidebar";
import RightSidebar from "@/components/shared/sidebars/RightSidebar";
export default {
  components: {
    LeftSidebar,
    RightSidebar,
  },
};
</script>


<style>
</style>
