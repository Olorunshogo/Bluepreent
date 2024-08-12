
<script setup>
    // import { ref } from 'vue'
    import EeLogo from '../assets/EeLogo.vue'
    // import YoungCouriers from '../assets/YoungCouriers.vue'
    import HeroSearch from './HeroSearch.vue'
    // import stateslist from './stateslist.ts'

</script>

<template>
    <div class="container">
        <div class="desktop-hero">
            <div>
                <div class="hero-texts">
                    <h1>Z<span class="e-logo"><EeLogo /></span>ro Insp<span class="e-logo"><EeLogo /></span>ction fee</h1>
                    <p>For Over 10,000 Listings</p>
                </div>

                <div class="hero-img">
                    <!-- <YoungCouriers /> -->
                </div>

                <div class="hero-search">
                    <HeroSearch />
                </div>
            </div>
            
        </div>

        
    </div>
</template>



<style lang="css" scoped>
    .container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        background-color: var(--primary-blue);
        max-width: 100%;
        height: 450px;
        position: relative;
    }

    .hero-texts {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
        max-width: 60%;
        padding: 0 5%;
    }

    .hero-texts > div :nth-child(1) {
        margin-bottom: 20px;
    }

    .hero-texts h1 {
        display: flex;
        flex-direction: row;
        font-size: 4.5rem;
        font-size: 69px;
        font-weight: 700;
        font-family: Campton;
        line-height: 70px;
        letter-spacing: 1%;
        font-family: Campton;
        color: var(--primary-bg-colour);
    }

    .hero-texts p {
        font-family: "Inter", sans-serif;
        font-optical-sizing: auto;
        font-size: 36px;
        line-height: 50px;
        font-weight: 400;
        font-variation-settings:
            "wdth" 100,
            "YTLC" 500;
        font-style: normal;
        color: var(--white-text);
    }

    .hero-img {
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        max-width: 40%;
        margin: 0 2rem;
    }

    .hero-img img {
        width: 100%;
        height: auto
    }

    .hero-texts img {
        width: 50px;
        height: auto;
    }

    .hero-search {
        width: 90%;
        height: 107px;
        position: relative;
        top: 200px;
        display: flex;
        flex-direction: column;
        align-self: center;
        margin: 0 auto;
    }

    .mobile-hero {
        display: none;
    }

    @media (max-width: 600px) {
        .desktop-hero {
            display: none;
        }

        .mobile-hero {
            display: flex;
        }
    }
</style>