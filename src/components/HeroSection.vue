
<script setup>
    import EeLogo from '../assets/EeLogo.vue'
    import YoungCouriers from '../assets/YoungCouriers.vue'
</script>

<template>
    <div class="container">
        <div class="hero-texts">
            <div>
                <h1>Z<span class="e-logo"><EeLogo /></span>ro Insp<span class="e-logo"><EeLogo /></span>ction fee</h1>
            </div>
            <div>
                <p>For Over 10,000 Listings</p>
            </div>
        </div>

        <div class="hero-img">
            <YoungCouriers />
        </div>
    </div>
</template>



<style lang="css" scoped>
    .container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        background-color: var(--default-blue);
        min-width: 100%;
        height: 450px;
    }

    .hero-texts {
        display: flex;
        flex-direction:column;
        justify-content: space-around;
        width: 60%;
        height: auto;
    }

    .hero-img {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 40%;
    }


    h1 {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 69px;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: 1%;
        color: var(--primary-bg-colour);
    }

    .hero-texts img {
        width: 50px;
        height: auto;
    }

    .de-clutter {
        /* font-family: SF Pro Text; */
        font-family: "Nunito Sans", sans-serif;
        font-optical-sizing: auto;
        font-size: 12px;
        line-height: 14px;
        font-weight: 400;
        font-variation-settings:
            "wdth" 100,
            "YTLC" 500;
        font-style: normal;
        color: var(--declutter-blue);
    }
</style>