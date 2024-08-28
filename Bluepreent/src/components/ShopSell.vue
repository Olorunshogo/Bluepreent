
<script setup>

</script>

<template>
    <div>
        <div class="page-container">
            <div class="container">
                <div class="image-container">
                    <div class="images">
                        <div class="row" id="row-one">
                            <img src="../images/Woman.png" alt="Woman">
                            <img src="../images/White_Bg_Bedroom.png" alt="White Mattrass and a Bed">
                        </div>

                        <div class="row" id="row-two">
                            <img src="../images/Chair.png" alt="Chair">
                            <img src="../images/Home_appliances.png" alt="Home appliances">
                        </div>

                        <div class="row" id="row-three">
                            <img src="../images/Kitchen.png" alt="Kitchen">
                            <img src="../images/Yellow_Bg_Bedroom.png" alt="A Bedroom with a yellow background">
                        </div>
                    </div>
                </div>

                <div class="shop-sell">
                    <h2>Shop. Sell. Excel.</h2>
                    <p>Step into a world of student-centric buying and selling</p>
                    <button>
                        <div>
                            <span class="text">Get started</span>
                            <span class="icon"><i class="fa-solid fa-arrow-right"></i></span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
    .page-container {
        height: 400px;
        width: 100%;
        background-color: var(--primary-blue);
        opacity: 94%;
        /* background-image: url(../images/Shop_Sell_Bg.png); */
        /* background-repeat: no-repeat;
        background-size: cover; */
        /* background: #0E78B98C; */

    }

    .container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-content: center;
        height: 100%;
        width: 100%;
    }

    .container > div {
        flex: 0 0 50%;
        max-width: 50%;
        height: 100%;
    }

    .container .image-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }

    .container .images {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 100%;
        width: 90%;
    }

    .container .images .row {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .container .images > .row:nth-child(1) {
        width: 25%;
    }

    .container .images > .row:nth-child(2) {
        width: 40%;
    }

    .container .images > .row:nth-child(3) {
        width: 35%;
    }

    .container .images .row img {
        display: flex;
        align-items: center;
        width: 100%;
        max-width: 250px;
        max-height: 50%;
        /* transform: rotate( 21.56 deg); */
    }

    .container .shop-sell {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-self: center;
        gap: 32px;
        height: 220px;
        color: var(--white-text)
    }

    .container .shop-sell h2 {
        font-family: Inter;
        width: 276px;
        height: 60px;
        font-family: Inter;
        font-size: 2.1rem;
        font-weight: 600;
        line-height: 57px;
    }

    .container .shop-sell p {
        font-family: Inter;
        font-size: 1.25rem;
        font-weight: 400;
        line-height: 1.5rem;
    }

    .container .shop-sell button {
        width: 220px;
        height: 76px;
        outline: none;
        border: none;
        color: var(--primary-blue);
        background-color: var(--primary-bg-colour);
        border-radius: 8px;
        display: flex;
        justify-content: center;
    }

    .container .shop-sell button > div {
        width: 150px;
        height: 40px;
        color: var(--primary-blue);
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: auto;
        gap: 11px;
    }

    .container .shop-sell button > div > span {
        display: flex;
        align-items: center;
    }

    .container .shop-sell button .text {
        font-family: Campton;
        font-size: 1.25rem;
        font-weight: 500;
        line-height: 2.3rem;
    }

    .container .shop-sell button .icon {
        font-size: 1.5rem;
    }

    @media (max-width: 400px) {
        .page-container {
            height: 455px;
        }

        .container {
            margin: auto;
        }

        .container > div {
            flex: 0 0 100%;
            max-width: 100%;
            height: 100%;
        }

        .container .image-container {
            display: none;
        }

        .container .shop-sell {
            width: 100%;
            height: 220px;
            gap: 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: auto;
        }

        .container .shop-sell h2 {
            width: 100%;
            height: 2.25rem;
            /* font-size: 30px; */
            font-size: 2.4rem;
            line-height: 2.25rem;
            text-align: center;
        }

        .container .shop-sell p {
            width: 100%;
            font-size: 1rem;
            line-height: 1.25rem;
            text-align: center;
        }

        .container .shop-sell button .text {
            font-family: Inter;
            line-height: 1.5rem;
        }

        .container .shop-sell button .icon {
            font-size: 1.2rem;
        }     
    }

</style>