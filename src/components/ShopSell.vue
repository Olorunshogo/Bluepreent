
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
                        <RouterLink to="shop" class="router-link">
                            <div>
                                <span class="text">
                                    Get Started
                                </span>
                                <span class="icon"><i class="fa-solid fa-arrow-right"></i></span>
                            </div>
                        </RouterLink>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
    .page-container {
        height: var(--shop-section-height);
        width: 100%;
        background-color: var(--primary-blue);
        opacity: 94%;
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
    }

    .container .shop-sell {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-self: center;
        gap: var(--shop-gap);
        height: var(--shop-sell-height);
        color: var(--white-text)
    }

    .container .shop-sell h2 {
        font-family: Inter;
        width: 276px;
        height: 60px;
        font-family: Inter;
        font-size: var(--shop-h2);
        font-weight: 600;
        line-height: 57px;
    }

    .container .shop-sell p {
        font-family: Inter;
        font-size: var(--shop-p);
        font-weight: 400;
        line-height: 1.5rem;
    }

    .container .shop-sell button {
        width: 220px;
        height: 76px;
        outline: none;
        border: none;
        background-color: var(--primary-bg-colour);
        border-radius: 8px;
        display: flex;
        justify-content: center;
        cursor: pointer;
        text-decoration: none;
    }

    .container .shop-sell button .router-link {
        margin: auto;
        color: var(--primary-blue);
        text-decoration: none;
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
        border-radius: 8px;
    }

    .container .shop-sell button > div > span {
        display: flex;
        align-items: center;
    }

    .container .shop-sell button .text {
        font-family: Campton;
        font-size: var(--shop-p);
        font-weight: 500;
        line-height: 2.3rem;
        text-decoration: none;
    }

    .container .shop-sell button .icon {
        font-size: var(--shop-btn-i);
    }

    @media (max-width: 1050px) {
        .container .images {
            width: 95%;
        }

        .container .shop-sell h2 {
            width: 90%;
            height: 60px;
            line-height: 35px;
        }

        .container .shop-sell p {
            line-height: 1.2rem;
        }

        .container .shop-sell button > div {
            width: 140px;
            height: 40px;
        }
    } 

    @media (max-width: 760px) {
        .page-container {
            height: 250px;
        }

        .container .shop-sell {
            gap: 1rem;
            height: 80%;
        }

        .container .shop-sell h2 {
            font-size: 1.2rem;
            line-height: 2.6rem;
        }

        .container .shop-sell p {
            font-size: 1rem;
            line-height: 1rem;
        }

        .container .shop-sell button {
            width: 160px;
            height: 45px;
        }

        .container .shop-sell button > div {
            width: 130px;
        }

        .container .shop-sell button .text {
            font-size: 1.1rem;
            line-height: 2rem;
        }

        .container .shop-sell button .icon {
            font-size: 1.2rem;
        }
    }

    @media (max-width: 550px) {
        .container > div {
            flex: 0 0 90%;
            max-width: 90%;
        }

        .container .image-container {
            display: none;
        }

        .container .shop-sell {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            gap: 1rem;
            text-align: center;
            height: 100%;
        }

        .container .shop-sell h2 {
            line-height: 2rem;
        }

        .container .shop-sell p {
            line-height: 1.2rem;            
        }

        .container .shop-sell button {
            width: 160px;
            height: 40px;
        }

        .container .shop-sell button > div {
            width: 120px;
        }

        .container .shop-sell button .text {
            line-height: 1.7rem;
        }

        .container .shop-sell button .icon {
            font-size: 1.1rem;
        }    
    }

    @media (max-width: 360px) {
        .page-container {
            height: 290px;
        }
    }

</style>