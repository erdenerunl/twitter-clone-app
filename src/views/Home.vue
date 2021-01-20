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
      <user-figure/>
      <div class="input-area">
          <input type="text" class="form-control" placeholder="Send a tweet..." aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
        <div class="send-action">
          <button type="button" class="btn btn-secondary me-2">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ3MS42NDEgNDcxLjY0MSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNNDMxLjY2Niw0OS40MTJjLTUxLjY5Mi01MC41NzgtMTM0LjMzLTUwLjU2Ny0xODYuMDA5LDAuMDI1TDI4LjkxMSwyNjYuMTg0Yy0zOS4xOTIsNDAuMTE2LTM4LjQ0MywxMDQuNDA3LDEuNjczLDE0My41OTkgICAgYzM5LjQ1NiwzOC41NDgsMTAyLjQ3LDM4LjU0OCwxNDEuOTI2LDBsMTk2LjI2Ny0xOTYuMjY3YzI1LjUxNS0yNS41MTUsMjUuNTE1LTY2Ljg4NCwwLTkyLjM5OSAgICBjLTI1LjUxNS0yNS41MTUtNjYuODg0LTI1LjUxNS05Mi4zOTksMEw4OC42NDQsMzA4Ljg1Yy02LjU0OCw2Ljc4LTYuMzYsMTcuNTg0LDAuNDIsMjQuMTMyYzYuNjE0LDYuMzg4LDE3LjA5OSw2LjM4OCwyMy43MTMsMCAgICBMMzAwLjUxLDE0NS4yNDljMTIuNDQ5LTExLjkyNiwzMi4yMDktMTEuNTAxLDQ0LjEzNCwwLjk0OGMxMS41NjUsMTIuMDczLDExLjU2NSwzMS4xMTQsMCw0My4xODdMMTQ4LjM3OCwzODUuNjUgICAgYy0yNi41MTQsMjYuMTM3LTY5LjE5NywyNS44MzEtOTUuMzM0LTAuNjgzYy0yNS44NzMtMjYuMjQ2LTI1Ljg3My02OC40MDUsMC05NC42NTFMMjY5Ljc5LDczLjU2OSAgICBjMzguNjA4LTM4LjYyMiwxMDEuMjE0LTM4LjYzMywxMzkuODM2LTAuMDI2YzM4LjYyMiwzOC42MDcsMzguNjMzLDEwMS4yMTQsMC4wMjYsMTM5LjgzNkwxOTIuOTA1LDQzMC4xMjYgICAgYy03LjE1OSw2LjEzMS03Ljk5MywxNi45MDUtMS44NjIsMjQuMDY0YzYuMTMxLDcuMTU5LDE2LjkwNSw3Ljk5MywyNC4wNjQsMS44NjJjMC42NjgtMC41NzIsMS4yOS0xLjE5NCwxLjg2Mi0xLjg2MiAgICBsMjE2Ljc0Ny0yMTYuNzQ3QzQ4NS4wNzMsMTg0Ljk1NCw0ODQuMTU2LDEwMC43NjksNDMxLjY2Niw0OS40MTJ6IiBmaWxsPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==" />
          </button>
          <button type="submit" class="btn btn-success" >Send</button>
        </div>
      </div>
    </div>
    <tweet-container v-for="i in 10"  :key="i" />
  </div>
</template>

<script>
import UserFigure from "@/components/shared/UserFigure.vue";
import CustomText from "@/components/CustomVariables/CustomText.vue";
import CenteredDiv from "../components/CustomVariables/CenteredDiv.vue";
import TweetContainer from "../components/TweetContainer.vue";
export default {
  components: {
    CustomText,
    CenteredDiv,
    UserFigure,
    TweetContainer
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variable.scss";
img {
  width: 24px;
  height: 24px;
}
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
.new-tweet{
  display: flex;
  width: 100%;
  max-height: 150px;
  border-bottom: 1px solid $border;
  padding: 1.50rem 2rem;

  .input-area{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-left: 2rem;

    .send-action{
      display: flex;
      margin-left: 1rem;
    }
  }
}
</style>