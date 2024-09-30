

<template>
    <div class="container">
        <div class="logo">
            <img src="./logo/Logo.png" alt="Bluepreent Logo">
            <span>bluepreent</span>
            <!-- <img src="./logo/Bluepreent.png" alt="Bluepreent Logo"> -->
        </div>
    </div>
</template>



<style lang="css" scoped>
    .container {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    .logo {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .logo img {
        width: 36px;
        height: auto;
    }

    span {
        /* font-family: SF Pro Text; */
        font-family: "Nunito Sans", sans-serif;
        font-optical-sizing: auto;
        font-size: 1.4rem;
        font-weight: normal;
        font-variation-settings:
            "wdth" 100,
            "YTLC" 500;
        font-style: normal;
        color: var(--primary-blue);
    }
</style>