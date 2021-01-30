<template>
  <div class="container-fluid mx-0 px-0">
    <div class="row px-0 mx-0">
      <div class="col-2">
        <router-view name="LeftSidebar" ></router-view>
      </div>
        <router-view></router-view>
      <div class="col-3">
        <router-view name="RightSidebar" ></router-view>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  
};
</script>


<style>
</style>
