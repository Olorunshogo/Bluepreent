<script setup>

  import { RouterLink, RouterView } from 'vue-router';
  import NavigationBar from './components/NavigationBar.vue';
</script>

<template>
    <div class="nav">

      <div class="nav-container">
        <NavigationBar class="width" />
      </div>

      <div>
        <RouterLink to="/"></RouterLink>
      </div>
      <RouterView />
    </div>
</template>

<style scoped>
  .nav-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: fit-content;
    background-color: var(--primary-bg-colour);
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    z-index: 100;
  }

  .width {
    margin: 0 auto;
    width: 90%;
    max-width: 2000px;
  }
</style>
