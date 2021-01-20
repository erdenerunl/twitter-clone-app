<template>
  <div class="wrapper">
    <div class="main-header">
      <header>Home Page</header>
      <div class="dark-mode">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDMxMi45OTkgMzEyLjk5OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMzA1LjYsMTc4LjA1M2MtMy4yLTAuOC02LjQsMC05LjIsMmMtMTAuNCw4LjgtMjIuNCwxNi0zNS42LDIwLjhjLTEyLjQsNC44LTI2LDcuMi00MC40LDcuMmMtMzIuNCwwLTYyLTEzLjItODMuMi0zNC40ICAgIGMtMjEuMi0yMS4yLTM0LjQtNTAuOC0zNC40LTgzLjJjMC0xMy42LDIuNC0yNi44LDYuNC0zOC44YzQuNC0xMi44LDEwLjgtMjQuNCwxOS4yLTM0LjRjMy42LTQuNCwyLjgtMTAuOC0xLjYtMTQuNCAgICBjLTIuOC0yLTYtMi44LTkuMi0yYy0zNCw5LjItNjMuNiwyOS42LTg0LjgsNTYuOGMtMjAuNCwyNi44LTMyLjgsNjAtMzIuOCw5Ni40YzAsNDMuNiwxNy42LDgzLjIsNDYuNCwxMTJzNjguNCw0Ni40LDExMiw0Ni40ICAgIGMzNi44LDAsNzAuOC0xMi44LDk4LTM0YzI3LjYtMjEuNiw0Ny42LTUyLjQsNTYtODcuNkMzMTQuNCwxODQuODUzLDMxMS4yLDE3OS4yNTMsMzA1LjYsMTc4LjA1M3ogTTI0NC40LDI2MS42NTMgICAgYy0yMy4yLDE4LjQtNTIuOCwyOS42LTg1LjIsMjkuNmMtMzgsMC03Mi40LTE1LjYtOTcuMi00MC40Yy0yNC44LTI0LjgtNDAuNC01OS4yLTQwLjQtOTcuMmMwLTMxLjYsMTAuNC02MC40LDI4LjQtODMuNiAgICBjMTIuNC0xNiwyOC0yOS4yLDQ2LTM4LjRjLTIsNC40LTQsOC44LTUuNiwxMy42Yy01LjIsMTQuNC03LjYsMjkuNi03LjYsNDUuNmMwLDM4LDE1LjYsNzIuOCw0MC40LDk3LjZzNTkuNiw0MC40LDk3LjYsNDAuNCAgICBjMTYuOCwwLDMyLjgtMi44LDQ3LjYtOC40YzUuMi0yLDEwLjQtNCwxNS4yLTYuNEMyNzQsMjMyLjQ1MywyNjAuOCwyNDguODUzLDI0NC40LDI2MS42NTN6IiBmaWxsPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg=="
        />
      </div>
    </div>
    <div class="new-tweet">
      <centered-div class="centered">
        <user-figure />
        <custom-text> merabaa</custom-text>
      </centered-div>
    </div>
  </div>
</template>

<script>
import UserFigure from "@/components/shared/UserFigure.vue";
import CustomText from "@/components/CustomVariables/CustomText.vue";
import CenteredDiv from "../components/CustomVariables/CenteredDiv.vue";
export default {
  components: {
    CustomText,
    CenteredDiv,
    UserFigure
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variable.scss";
.main-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-height: 67px;
  padding: 1rem 2rem;
  border-bottom: 1px solid $border;
}
.dark-mode {
  padding: 0.3rem;
  cursor: pointer;
}
img{
    width: 24px;
    height:24px;
}
</style>