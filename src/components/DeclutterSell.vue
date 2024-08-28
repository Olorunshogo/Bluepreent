

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
        flex: 0 0 100%;
        max-width: 100%;
    }

    .container {
        width: 100%;
        height: 400px;
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
        width: 60%;
        max-width: 550px;
        height: 50%;
        max-height: 200px;
        gap: 1.5rem;
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
        width: 80%;
        height: 40%;
        max-height: 4.1rem;
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
        box-shadow: 0 5px 3px  0 #A4A4A40F;
        transition: all 0.3s ease-in-out;
    }

    .sell-button-container button:hover {
        /* box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px; */
        box-shadow: rgba(0, 170, 246, 0.9) 2px 1px 4px 0px, rgba(0, 170, 246, 0.9) -2px -1px 4px 0px;
        transform: scale(1.04);
    }

    .sell-button-container button:focus {
        transform: scale(0.98);
        opacity: 1;
    }

    .sell-button-container button > span {
        width: 3rem;
        height: 2rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        text-align: center;
        gap: 0.9rem;
        color: var(--white-text);
    }

    .sell-button-container button > span:nth-child(1) i {
        width: 1.25rem;
        height: 1..25rem;
        display: flex;
        align-items: center;
    }

    .sell-button-container button > span:nth-child(2) {
        font-family: Inter;
        font-size: 1.25rem;
        font-weight: 400;
        line-height: 1.5rem;
        text-align: left;
    }

    @media (max-width: 1050px) {
        .container {
            height: 350px;
        }

        .center {
            width: 65%;
            max-width: 550px;
            height: 60%;
            gap: 1.5rem;
        }

        .declutter-earn-container {
            gap: 1rem;
        }

        .declutter-earn-container h2 {
            font-size: 1.6rem;
            line-height: 1.8rem;
        }

        .declutter-earn-container p {
            font-size: 1rem;
            line-height: 1.2rem;
        }

        .sell-button-container {
            gap: 1.2rem;
            height: 40%;
            max-height: 3.5rem;   
        }

        .sell-button-container button {
            width: 80%;
            height: 2.5rem;
        }

        .sell-button-container button > span {
            width: 5rem;
            height: 2rem;
            gap: 0.8rem;
            color: var(--white-text);
        }

        .sell-button-container button > span:nth-child(1) i {
            width: 1.1rem;
            height: 1.1rem;
        }

        .sell-button-container button > span:nth-child(2) {
            font-size: 1.1rem;
        }
    }

    @media (max-width: 760px) {
        .container {
            height: 300px;
        }

        .center {
            width: 70%;
            max-width: 600px;
            height: 70%;
            gap: 1rem;
        }

        .declutter-earn-container h2 {
            font-size: 1.4rem;
            line-height: 1.4rem;
        }

        .declutter-earn-container p {
            font-size: 0.9rem;
            line-height: 1rem;
        }

        .sell-button-container {
            gap: 1rem;
            height: 30%;
            max-height: 3rem;   
        }

        .sell-button-container button {
            width: 100%;
            height: 2.5rem;
        }

        .sell-button-container button > span {
            width: 4rem;
            gap: 0.5rem;
        }

        .sell-button-container button > span:nth-child(1) i {
            width: 1rem;
            height: 1rem;
            font-size: 1rem;
        }

        .sell-button-container button > span:nth-child(2) {
            font-size: 1rem;
        }
    }

    


    

</style>