
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
    <div class="container" title="Home Page">
        <div>
            <div class="nav-hero-container section">
                <div title="Hero Section">
                    <HeroSection />
                </div>
            </div>

            <div class="width" title="Categories">
                <div class="categories">
                    <CategoriesSection />
                </div>
            </div>

            <div class="width" title="Declutter and Sell">
                <div class="declutter-sell">
                    <DeclutterSell />
                </div>
            </div>

            <div class="width" title="Trending Posts">
                <div class="trending-posts">
                    <TrendingPosts />
                </div>
            </div>

            <div class="width" title="Services Offered">
                <div class="services-section">
                    <ServicesSection />
                </div>
            </div>

            <div class="width" title="Shop. Sell. Excel.">
                <div class="shop-sell">
                    <ShopSell />
                </div>
            </div>

            <div class="width" title="Footer">
                <div class="footer">
                    <FooTer />
                </div>
            </div>

        </div>
        
    </div>
</template>

<style lang="css" scoped>
    .container {
        max-width: 2000px;
        margin: 0 auto;
    }

    .categories,
    .declutter-sell,
    .trending-posts,
    .services-section {
        margin-top: 3.5rem;
    }

    .nav-hero-container {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    
</style>