<template>
  <!-- Register Side -->
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-6 login-section-wrapper">
        <div class="brand-wrapper">
          <img src="@/assets/images/logo.svg" alt="logo" class="logo" />
        </div>
        <div class="login-wrapper my-auto">
          <h1 class="login-title">Create Account</h1>
          <form action="#!">
            <div class="form-group">
              <label for="username">Username</label>
              <input v-model="registerData.username" type="text" name="username" id="username" class="form-control" placeholder="Choose your username" />
            </div>
            <div class="form-group mb-4">
              <label for="password">Password</label>
              <input v-model="registerData.password" type="password" name="password" id="password" class="form-control" placeholder="Choose your passsword" />
            </div>
            <input @click="onSave({ ...registerData })" name="signup" id="signup" class="btn btn-block login-btn" type="button" value="signup" />
            <p class="login-wrapper-footer-text">You have already an account? <router-link to="/login">Login</router-link></p>
          </form>
        </div>
      </div>
      <div class="col-sm-6 px-0 d-none d-sm-block">
        <img src="@/assets/images/login.jpg" alt="login image" class="login-img" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      registerData: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions({
        onSave : 'users/register'
    })
  },
};
</script>

<style lang="scss" scoped>
body {
  font-family: "Karla", sans-serif;
  background-color: #fff;
  min-height: 100vh;
}

.brand-wrapper {
  padding-top: 7px;
  padding-bottom: 8px;
  font-size: 24px;

  .logo {
    height: 25px;
  }
}

.login {
  &-section-wrapper {
    display: flex;
    flex-direction: column;
    padding: 68px 100px;
    background-color: #fff;

    @media (max-width: 991px) {
      padding-left: 50px;
      padding-right: 50px;
    }

    @media (max-width: 575px) {
      padding-top: 20px;
      padding-bottom: 20px;
      min-height: 100vh;
    }
  }

  &-wrapper {
    width: 300px;
    max-width: 100%;
    padding-top: 24px;
    padding-bottom: 24px;

    @media (max-width: 575px) {
      width: 100%;
    }

    label {
      font-size: 14px;
      font-weight: bold;
      color: #b0adad;
    }

    .form-control {
      border: none;
      border-bottom: 1px solid #e7e7e7;
      border-radius: 0;
      padding: 9px 5px;
      min-height: 40px;
      font-size: 18px;
      font-weight: normal;

      &::placeholder {
        color: #b0adad;
      }
    }

    .login-btn {
      padding: 13px 20px;
      background-color: #fdbb28;
      border-radius: 0;
      font-size: 20px;
      font-weight: bold;
      color: #fff;
      margin-bottom: 14px;

      &:hover {
        border: 1px solid #fdbb28;
        background-color: #fff;
        color: #fdbb28;
      }
    }

    a.forgot-password-link {
      color: #080808;
      font-size: 14px;
      text-decoration: underline;
      display: inline-block;
      margin-bottom: 54px;

      @media (max-width: 575px) {
        margin-bottom: 16px;
      }
    }

    &-footer-text {
      font-size: 16px;
      color: #000;
      margin-bottom: 0;
    }
  }

  &-title {
    font-size: 30px;
    color: #000;
    font-weight: bold;
    margin-bottom: 25px;
  }

  &-img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: left;
  }
}
</style>