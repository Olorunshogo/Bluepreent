
<script setup>

    import EeLogo from '../assets/EeLogo.vue'
    //import YoungCouriers from '../assets/YoungCouriers.vue'
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
                        <!-- <YoungCouriers /> -->
                        <img src="../images/Young_Couriers.png" alt="Young Couriers">
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
        height: fit-content;
        max-height: 420px;
        position: relative;
        background-color: var(--primary-blue);
    }

    .desktop-hero {
        display: flex;
        flex-direction: column;
        width: 90%;
        height: 100%;
        margin: 0 auto;
    }

    .hero-section {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        height: 370px;
    }

    .hero-texts {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
        width: 60%;
        height: 100%;
    }

    .hero-texts h1 {
        display: flex;
        flex-direction: row;
        justify-items: center;
        align-items: center;
        font-size: 3.8rem;
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
        width: 1.9rem;
        height: auto;
    }

    .hero-texts p {
        font-family: "Inter", sans-serif;
        font-optical-sizing: auto;
        font-size: 2.1rem;
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
        align-items: center;
        width: 40%;
        height: 100%;
        position: relative;
    }

    .hero-img img {
        width: 100%;
        height: auto;
    }

    .hero-search {
        width: 100%;
        height: 107px;
        display: flex;
        flex-direction: column;
        align-self: center;
        position: relative;
    }

    .mobile-hero {
        display: none;
    }

    @media  (max-width: 1050px) {
        .container {
            max-height: 350px;
        }

        .hero-section {
            height: 330px;
        }

        .hero-texts {
            width: 55%;
        }

        .hero-texts h1 {
            font-size: 3rem;
        }

        .hero-texts h1 .e-logo {
            width: 1.7rem;
        }

        .hero-texts p {
            font-size: 1.7rem;
        }

        .hero-img {
            width: 45%;
        }


        .hero-search {
            height: 80px;
            top: -15px;
        }

        .mobile-hero {
            display: none;
        }

    }

    @media  (max-width: 910px) {
        .hero-texts h1 {
            font-size: 2.7rem;
        }

        .hero-texts h1 .e-logo {
            width: 1.4rem;
        }

        .hero-texts p {
            font-size: 1.5rem;
        }
    }

    @media  (max-width: 810px) {
        .hero-texts h1 {
            font-size: 2.5rem;
        }

        .hero-texts h1 .e-logo {
            width: 1.2rem;
        }

        .hero-texts p {
            font-size: 1.3rem;
        }
    } 

    @media (max-width:760px) {
        .container {
            width: 100%;
            height: 350px;
            position: relative;
            background-color: var(--primary-blue);
        }

        .desktop-hero {
            display: flex;
            justify-items: space-between;
        }

        .hero-section {
            width: 100%;
            height: 70%;
            max-height: 200px;
        }

        .hero-texts {
            width: 100%;
            height: 100%;
        }

        .hero-texts h1 {
            font-size: 2.5rem;
            line-height: 50px;
        }

        .hero-texts h1 .e-logo {
            width: 1.2rem;
        }

        .hero-texts p {
            font-size: 1.3rem;
            line-height: 40px;
        }

        .hero-img {
            display: none;
        }

        .hero-search {
            width: 100%;
            height: 30%;
            max-height: 150px;
            display: flex;
            align-self: center;
            margin: auto;
            position: relative;
            top: 0px;
        }
    }
</style>