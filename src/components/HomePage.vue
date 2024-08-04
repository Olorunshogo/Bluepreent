
<script setup>
    import NavigationBar from '../components/NavigationBar.vue'
    import HeroSection from '../components/HeroSection.vue'
</script>

<template>
    <div class="container">
        <div>
            <NavigationBar />
        </div>
        <HeroSection />
    </div>
</template>



<style lang="css" scoped>
    .container {
        width: 90%;
        margin: 0 auto;
    }
</style>