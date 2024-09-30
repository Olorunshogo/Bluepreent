
<script setup>
    import HeroSearch from './HeroSearch.vue';

</script>

<template>
    <div class="container width">
        <section class="desktop-hero">
            <div class="hero-texts">
                <h1>Zero Inspection Fee</h1>
                <p>and reduced agent fees for all properties for rent</p>
            </div>

            <div class="hero-search">
                <HeroSearch />
            </div>        
            
        </section>
        
    </div>
</template>



<style lang="css" scoped>
    .container {
        width: 100%;
        height: var(--hero-height);
        background-color: var(--primary-blue);
        background-image: url("../images/Young_Couriers_Cartons.png");
        background-position: 95% bottom;
        background-repeat: no-repeat;
        background-size: clamp(400px, 80vw, 700px);
        margin-top: var(--nav-height);
    }

    .desktop-hero {
        display: flex;
        flex-direction: column; 
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        height: 100%;
        /* padding: var(--hero-padd); */
        width: var(--hero-width);
    }

    .hero-texts {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 50%;
    }

    .hero-texts h1 {
        font-size: var(--hero-texts-h1-size);
        font-weight: 700;
        font-family: Campton;
        line-height: var(--hero-texts-h1-line-height);
        letter-spacing: 1%;
        font-family: Campton;
        color: var(--white-text);
    }

    .hero-texts p {
        font-family: "Inter", sans-serif;
        font-optical-sizing: auto;
        font-size: var(--hero-texts-p-size);
        line-height: var(--hero-texts-p-line-height);
        font-weight: 400;
        font-variation-settings:
            "wdth" 100,
            "YTLC" 500;
        font-style: normal;
        color: var(--white-text);
        opacity: 0.9;
    }

    .hero-search {
        width: 100%;
        height: 50%;
        position: relative;
    }

    @media (max-width: 760px) {
        .container {
            background-image: none;
        }

        .hero-texts h1,
        .hero-texts p {
            text-align: center;
        }
    }

    @media (max-width: 700px) {
        .hero-texts h1 {
            text-align: center;
            font-size: var(--hero-texts-h1-size);
        }
    }
</style>