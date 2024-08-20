

<script setup>
    import SellIcon from './icons/SellIcon.vue'
</script>

<template>
    <div class="page-wrapper">
        <div class="container">
            <div class="center">
                <div class="declutter-earn-container">
                    <h2>Declutter and Earn with Ease!</h2>
                    <p>Ready to declutter and make a little extra cash?</p>
                </div>

                <div class="sell-button-container">
                    <button>
                        <span>
                            <span><i><SellIcon /></i></span>
                            <span>Sell</span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>



<style lang="css" scoped>
    .page-wrapper {
        height: 100%;
        width: 100%;   
    }

    .container {
        height: 400px;
        max-height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        color: var(--white-text);
        background-image: url(../images/Couriers_BlackWhite.png);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        /* background-color: linear-gradient(96.12deg, rgba(25, 46, 59, 0) -21.52%, rgba(7, 82, 126, 0.51) 21.03%, rgba(8, 49, 73, 0.799) 82.97%); */
        background: linear-gradient(96deg, rgba(25, 46, 59, 0) -21.52%, rgba(7, 82, 126, 0.51) 21.03%, rgba(8, 49, 73, 0.799) 82.97%);
    }

    .center {
        width: 40%;
        max-width: 480px;
        height: 50%;
        max-height: 200px;
        gap: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin: auto;
    }

    .declutter-earn-container {
        gap: 1.5rem;
        width: 100%;
        height: 60%;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: space-evenly;
    }

    .declutter-earn-container h2 {
        font-family: Inter;
        font-size: 2rem;
        font-weight: 700;
        line-height: 2.1rem;
        text-align: center;
    }

    .declutter-earn-container p {
        font-family: Inter;
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.25rem;
        text-align: center;
    }

    .sell-button-container {
        gap: 1.5rem;
        width: 100%;
        max-height: 40%;
        height: 4.1rem;
        display: flex;
        flex-direction: column;
        align-items: center;  
        color: var(--white-text);      
    }

    .sell-button-container button {
        width: 80%;
        height: 2.5rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        outline: none;
        border: none;
        background-color: var(--primary-blue);
        padding: 8px 0px;
        border-radius: 8px;
        transition: all 0.5s ease-in-out;
    }

    .sell-button-container button:hover {
        box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

    }

    .sell-button-container button:focus {
        transform: scale(0.97);
    }

    .sell-button-container button > span {
        width: 5rem;
        height: 2rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        text-align: center;
        gap: 0.9rem;
        color: var(--white-text);
    }

    .sell-button-container button > span i {
        width: 1.25rem;
        height: 1..25rem;
        display: flex;
        align-items: center;
    }

    .sell-button-container button > span #sell {
        font-family: Inter;
        font-size: 1.25rem;
        font-weight: 400;
        line-height: 1.5rem;
        text-align: left;
    }

    


    

</style>