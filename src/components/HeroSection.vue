
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

                
            </div>

            <div class="hero-search">
                <HeroSearch />
            </div>
            
        </div>

        
    </div>
</template>



<style lang="css" scoped>
    .container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-content: center;
        background-color: var(--primary-blue);
        max-width: 100%;
        height: 450px;
        position: relative;
    }

    .desktop-hero {
        display: flex;
        flex-direction: column;
        justify-items: left;
        align-items: left;
        width: 100%;
        padding: 0 5%;
    }

    .hero-texts {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
        width: 65%;
        padding-top: 3.5rem;
    }

    .hero-texts h1 {
        display: flex;
        flex-direction: row;
        justify-items: center;
        align-items: center;
        font-size: 4.1rem;
        font-weight: 700;
        font-family: Campton;
        line-height: 80px;
        letter-spacing: 1%;
        font-family: Campton;
        color: var(--white-text);
    }

    .hero-texts h1 .e-logo {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 38px;
        height: auto;
    }

    .hero-texts p {
        font-family: "Inter", sans-serif;
        font-optical-sizing: auto;
        font-size: 2.3rem;
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

        max-width: 35%;
        margin: 0 2rem;
    }

    /* .hero-img img {
        width: 100%;
        height: auto
    }

    .hero-texts img {
        width: 50px;
        height: auto;
    } */

    .hero-search {
        width: 100%;
        height: 107px;
        position: relative;
        top: 170px;
        display: flex;
        flex-direction: column;
        align-self: center;
        margin: 0 auto;
    }

    .mobile-hero {
        display: none;
    }

    @media  (max-width: 1055px) {
        .container {
            height: 316px;
            display: none;
        }

        .hero-texts {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: left;
            width: 65%;
            padding-top: 3.5rem;
        }

        .hero-texts h1 {
            font-size: 2.9rem;
            line-height: 50px;
        }

        .hero-texts h1 .e-logo {
            width: 26.7px;
        }

        .hero-texts p {
            font-size: 1.27rem;
            line-height: 35px;
        }

        .hero-img {
            display: flex;
            flex-direction: row;
            justify-content: space-around;

            max-width: 35%;
            margin: 0 2rem;
        }

        .hero-search {
            height: 76px;
            top: 120px;
        } 
    }
</style>