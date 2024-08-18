
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

    <div class="mobile">
        <h1>Tada &#129313;&#129313;&#129313;</h1>
        <p>This website is not cool yet on <b>max-width: 1200px</b> screen sizes. Infact, it is not on any screen size less than <b>1500px</b></p>
        <p>Now, rotate your screen to use the <b>longer side as the width</b>, or change your screen to <b>Desktop</b>.</p>
        <p><b>Ire o.</b>Thanks &#128513;</p>
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

    .mobile {
        display: none;
    }

    @media (max-width: 600px) {
        .container {
            /* padding-bottom: 0; */
            display: none;
        }


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