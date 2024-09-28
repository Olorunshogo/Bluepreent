

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
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%; 
        height: var(--declutter-height);
        min-height: 280px;
        background: linear-gradient(96deg, rgba(25, 46, 59, 0) -21.52%, rgba(7, 82, 126, 0.51) 21.03%, rgba(8, 49, 73, 0.799) 82.97%);        
    }

    .container {
        width: 90%;
        height: 90%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: var(--white-text);
        margin: auto;
    }

    .center {
        width: 90%;
        max-width: 550px;
        height: 80%;
        max-height: 200px;
        gap: 1.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin: auto;
    }

    .declutter-earn-container {
        gap: var(--declutter-gap);
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: space-evenly;
    }

    .declutter-earn-container h2 {
        font-family: Inter;
        font-size: var(--declutter-h2);
        font-weight: 700;
        line-height: 2.1rem;
        text-align: center;
    }

    .declutter-earn-container p {
        font-family: Inter;
        font-size: var(--declutter-p);
        font-weight: 500;
        line-height: 1.25rem;
        text-align: center;
    }

    .sell-button-container {
        gap: var(--declutter-gap);
        width: 70%;
        height: 30%;
        max-height: 4rem;
        display: flex;
        flex-direction: column;
        align-items: center;  
        color: var(--white-text);      
    }

    .sell-button-container button {
        width: 80%;
        height: 3rem;
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

    .sell-button-container button span {
        width: 50%;
        max-width: 5rem;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        text-align: center;
        color: var(--white-text);
    }

    .sell-button-container button span > span:nth-child(1) i {
        width: 1.25rem;
        height: 1..25rem;
        font-size: var(--declutter-p);
        display: flex;
        align-items: center;
    }

    .sell-button-container button span > span:nth-child(2) {
        font-family: Inter;
        font-size: var(--declutter-p);
        font-weight: 400;
        line-height: 1.5rem;
        text-align: left;
    }
</style>