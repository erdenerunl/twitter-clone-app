<template>
  <div class="container">
    <left-sidebar />
    <router-view></router-view>
    <right-sidebar />
  </div>
  
</template>

<script>
import LeftSidebar from '@/components/shared/sidebars/LeftSidebar'
import RightSidebar from '@/components/shared/sidebars/RightSidebar'
export default {
  components : {
    LeftSidebar,
    RightSidebar
  }
}
</script>


<style>

</style>
