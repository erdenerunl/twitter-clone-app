<template>
  <div class="wrapper">
    <div class="container">
      <div class="row">
          <router-link class="navbar-brand" to="/">LOGO </router-link>
        <div class="col-12">
          
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
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.row {
    height: 85%;
}
.navbar-nav {
    display: flex;
    justify-content: space-between;

    a {
        font-size: 1.25rem;
    }
}
.col-12 {
    margin-top: 2rem;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
}
.container {
  width: 200px;
  position: fixed;
  background-color: aqua;
  top: 0;
  left: 0;
  height: 100vh;
}
</style>