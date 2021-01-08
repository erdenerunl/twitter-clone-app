<template>
  <div class="container">
    <left-sidebar />
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
  
</template>

<script>
import LeftSidebar from '@/components/shared/sidebars/LeftSidebar'
export default {
  components : {
    LeftSidebar
  }
}
</script>


<style>

</style>
