
<script setup>

    import EeLogo from '../assets/EeLogo.vue'
    import YoungCouriers from '../assets/YoungCouriers.vue'
    import HeroSearch from './HeroSearch.vue'

</script>

<template>
    <div class="container">
        <div class="desktop-hero">
            <div class="hero-section"> 
                <div class="hero-texts" title="Hero Header">
                    <h1>Z<span class="e-logo"><EeLogo /></span>ro Insp<span class="e-logo"><EeLogo /></span>ction fee</h1>
                    <p>For Over 10,000 Listings</p>
                </div>

                <div class="hero-img" title="Young Couriers">
                    <div>
                        <YoungCouriers />
                    </div>
                </div>                
            </div>

            <div class="hero-search" title="Search Bar">
                <HeroSearch />
            </div>
            
        </div>
        
    </div>
</template>



<style lang="css" scoped>
    .container {
        width: 100%;
        height: 450px;
        position: relative;
        background-color: var(--primary-blue);
    }

    .desktop-hero {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 0 5%;
    }

    .hero-section {
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-content: center;
        width: 100%;
        height: 100%;
    }

    .hero-texts {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
        width: 65%;
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
        width: 2.2rem;
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
        justify-content: center;
        width: 35%;
        height: auto;
        max-width: 150px;
        max-height: 400px;
        margin: 0 1rem;
    }

    .hero-search {
        width: 100%;
        height: 107px;
        display: flex;
        flex-direction: column;
        align-self: center;
        margin: 0 auto;
        position: relative;
    }

    .mobile-hero {
        display: none;
    }

    /* @media  (max-width: 1055px) {
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
        }

        .hero-texts h1 {
            font-size: 2.9rem;
            line-height: 50px;
        }

        .hero-texts h1 .e-logo {
            width: 1.5rem;
        }

        .hero-texts p {
            font-size: 1.27rem;
            line-height: 35px;
        }

        .hero-img {
            display: flex;
            flex-direction: row;
            justify-content: center;
            width: 35%;
        }

        .hero-search {
            height: 76px;
            top: 120px;
        } 
    }

    @media  (max-width: 760px) {
        .container {
            height: 290px;
        }

        .hero-texts {
            padding-top: 3rem;
        }

        .hero-texts h1 {
            font-size: 2.4rem;
            line-height: 40px;
        }

        .hero-texts h1 .e-logo {
            width: 1rem;
        }

        .hero-texts p {
            font-size: 1.1rem;
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
        } 
    } */
</style>