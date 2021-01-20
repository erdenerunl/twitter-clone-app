<template>
  <div class="container-fluid mx-0 px-0">
    <div class="row px-0 mx-0">
      <div class="col-2">
        <left-sidebar />
      </div>
      <div class="col-7 px-0 ">
        <router-view></router-view>
      </div>
      <div class="col-3">
        <right-sidebar />
      </div>
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
