
<script setup>
    import HeroSection from './HeroSection.vue';
    import CategoriesSection from './CategoriesSection.vue';
    import DeclutterSell from './DeclutterSell.vue';

    import TrendingPosts from '../components/TrendingPosts.vue';
    import ServicesSection from '../components/ServicesSection.vue';
    import ShopSell from '../components/ShopSell.vue';
    import FooTer from '../components/FooTer.vue';
</script>

<template>
    <div class="container">
        <div>
            <div class="nav-hero-container section">
                <div>
                    <HeroSection />
                </div>
            </div>

            <div class="categories">
                <CategoriesSection class="width" />
            </div>

            <div class="declutter-sell">
                <DeclutterSell class="width" />
            </div>

            <div class="trending-posts">
                <TrendingPosts class="width" />
            </div>

            <div class="services-section">
                <ServicesSection class="width" />
            </div>

            <div class="shop-sell">
                <ShopSell class="width" />
            </div>

            <div class="footer">
                <FooTer class="width" />
            </div>

        </div>
        
    </div>
</template>

<style lang="css" scoped>
    .container {
        width: 100%;
    }

    .width {
        margin: 0 auto;
        width: 90%;
        max-width: 2000px;
    }

    .categories,
    .declutter-sell,
    .trending-posts,
    .services-section {
        margin-top: 3.5rem;
        width: 100%;
    }    
</style>