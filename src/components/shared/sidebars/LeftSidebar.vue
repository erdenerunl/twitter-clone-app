<template>
  <div class="col-2">
    <div class="wrapper">
      <router-link class="navbar-brand" to="/">LOGO </router-link>

      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link active-class="active" class="nav-link" aria-current="page" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link active-class="active" class="nav-link" to="/about">Keşfet</router-link>
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
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.wrapper {
  width: inherit;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: green;

  .navbar-brand{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }

  .navbar-nav{
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>