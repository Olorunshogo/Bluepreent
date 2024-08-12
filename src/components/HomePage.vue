
<script setup>
    import NavigationBar from '../components/NavigationBar.vue'
    import HeroSection from '../components/HeroSection.vue'
    import CategoriesSection from '../components/CategoriesSection.vue'
</script>

<template>
    <div class="container">
        <div class="width">
            <div class="nav-hero-container section">
                <div>
                    <NavigationBar />
                </div>
                <div>
                    <HeroSection />
                </div>
            </div>

            <div class="section">
                <CategoriesSection />
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
        padding-bottom: 4rem;
    }

    .width {
        width: 90%;
        margin: 0 auto;
    }

    .section {
        margin: 3rem 0;
        margin: 0 auto;
        width: 90%;
    }

    .nav-hero-container {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
</style>