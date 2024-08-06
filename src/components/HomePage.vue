
<script setup>
    import NavigationBar from '../components/NavigationBar.vue'
    import HeroSection from '../components/HeroSection.vue'
</script>

<template>
    <div class="container">
        <div class="width">
            <div class="nav-hero-container">
                <div>
                    <NavigationBar />
                </div>
                <div>
                    <HeroSection />
                </div>
            </div>
        </div>
        
    </div>
</template>



<style lang="css" scoped>
    .container {
        max-width: 1500px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
    }

    .width {
        width: 80%;
        margin: 0 auto;
    }

    .nav-hero-container {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
</style>