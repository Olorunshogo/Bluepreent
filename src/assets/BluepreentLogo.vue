

<template>
    <div class="container">
        <div class="logo">
            <img src="./logo/Logo.png" alt="Bluepreent Logo">
        </div>

        <div class="de-clutter">
            DeClutter
        </div>
    </div>
</template>



<style lang="css" scoped>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
        padding: 4px 8px;
    }

    .logo {
        width: 100%;
        height: auto;
    }

    .logo img {
        width: 145px;
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