<script setup>
  import { RouterLink, RouterView } from 'vue-router';
  import NavigationBar from './components/NavigationBar.vue';

</script>

<template>
    <div>

      <NavigationBar />

      <div>
        <RouterLink to="/"></RouterLink>
      </div>
      <RouterView />
    </div>
</template>

<style scoped>

</style>
