
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
                        <RouterLink to="/sell" class="router-link">
                            <span class="text">
                                Get Started
                            </span>
                            <span class="icon"><i class="fa-solid fa-arrow-right"></i></span>
                        </RouterLink>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
    .page-container {
        height: var(--section-height);
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
        max-width: 350px;
        height: 40%;
    }

    .container .shop-sell {
        display: flex;
        flex-direction: column;
        margin: auto 0;
        gap: var(--shop-gap);
        height: var(--shop-sell-height);
        color: var(--white-text);
    }

    .container .shop-sell h2 {
        font-family: Inter;
        width: 100%;
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
        height: var(--shop-btn-height);
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
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .container .shop-sell button span:nth-child(1) {
        display: flex;
        align-items: center;
        margin-right: 10px;
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
    } 

    @media (max-width: 750px) {
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
            justify-content: space-around;
            align-items: center;
            text-align: center;
            height: 80%;
        }   
    }

</style>