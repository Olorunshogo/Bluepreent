
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
        <div class="width">
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
    .categories {
        margin: 7rem 0 3rem 0;
    }

    .declutter-sell,
    .trending-posts,
    .services-section {
        margin: 3rem 0;
    }

    .nav-hero-container {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .mobile {
        display: none;
    }

    @media (max-width: 1200px) {
        .width {
            width: 90%;
            margin: 0 auto;
        }

    }

    @media (max-width: 700px) {
        /* .container {
            display: none;
        } */



        .mobile {
            background-color: var(--primary-blue);
            color: black;
            padding: 2rem 1rem;
            margin: 0 auto;
            max-width: 600px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center;
            width: 100vw;
            height: 100vh;
            text-align: center;
        }

        .mobile h1 {
            font-size: 1.8rem;
            font-weight: 700;
            margin: 0 auto;
        }

        .mobile p {
            font-size: 1rem;
            font-weight: 500;
            margin: 8px 0;
        }
    }
</style>