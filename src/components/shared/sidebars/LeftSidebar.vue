<template>

    <centered-div class="wrapper centered">
      <router-link class="navbar-brand" to="/">LOGO </router-link>

      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link active-class="active" class="nav-link" aria-current="page" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link active-class="active" class="nav-link" to="/profile">Keşfet</router-link>
        </li>
        <li class="nav-item">
          <router-link active-class="active" class="nav-link" to="/">Bildirimler</router-link>
        </li>
        <li class="nav-item">
          <router-link active-class="active" class="nav-link" to="/">Mesajlar</router-link>
        </li>
        <li class="nav-item">
          <router-link active-class="active" class="nav-link" to="/">Profil</router-link>
        </li>
        <li class="nav-item">
          <router-link active-class="active" class="nav-link" to="/">Daha Fazla</router-link>
        </li>
      </ul>
    </centered-div>

</template>

<script>
import CenteredDiv from '../../CustomVariables/CenteredDiv.vue';
export default {
  components: { CenteredDiv },};
</script>

<style lang="scss" scoped>
@import "@/assets/variable.scss";
.wrapper {
  justify-content: flex-start!important;
  flex-direction: column;
  width: inherit;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  border-right: 1px solid $border;

  .navbar-brand{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem auto;
    padding: 1rem;
  }

  .navbar-nav{
    display: flex;
    align-items: center;
    justify-content: center;

    .nav-item{
      margin: .25rem auto;

      .nav-link{
        font-size: 1.25rem;
        transition: all 100ms;
        
        &:hover{
        color: #43494e;
    }
      }
    }
    
  }
}
</style>