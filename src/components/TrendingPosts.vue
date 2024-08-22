
<script setup>
    import { ref } from 'vue';

    import CustomProducts from './CustomProducts.vue';
    import ChevronLeft from './icons/ChevronLeft.vue';
    import ChevronRight from './icons/ChevronRight.vue';

    const products = ref([
        { id: 1, name: 'Television', condition: 'Brand New', price: 1000, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit!', location: 'Front of School, Minna Paiko' },
        { id: 2, name: 'TV', condition: 'FairlyUsed', price: 1500, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit!', location: 'Ibadan express way, Abuja' },
        { id: 3, name: 'VDU', condition: 'Brand New', price: 2000, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit!', location: "Shooting range road, Oyo"},
        { id: 4, name: 'Electronics', condition: 'Fairly Used', price: 2500, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit!', location: "Lagos, Nigeria" }
    ]);

</script>

<template>
    <div>
        <div class="container">
            <div class="header">
                <h2>Trending Posts</h2>
                <p>Get Inspired: Trending Posts to Ignite Your Selling Journey</p>
            </div>

            <div class="gallery-container">
                <div class="product-container">
                    <CustomProducts 
                        v-for="product in products" :key="product.id"
                        :product="product"
                    />                        
                </div>
            </div>

            <div class="slides-container">
                <div class="span">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div class="chevron">
                    <span>
                        <i>
                            <ChevronLeft />
                        </i>
                    </span>

                    <span>
                        <i>
                            <ChevronRight />
                        </i>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>



<style lang="css" scoped>
    .container {
        display: flex;
        flex-direction: column;
        justify-items: space-between;
        width: 100%;
        height: 100%;
    }

    .header {
        width: 100%;
        height: 100%;
        font-size: 2rem;
        gap: 2rem;
        display: flex;
        flex-direction: column;
        margin: 2rem 0;
    }

    .header h2 {
        font-family: Inter;
        font-size: 1.5rem;
        font-weight: 600;
        line-height: 2.4rem;
        text-align: left;
        color: #05283E;
    }

    .header p {
        font-family: Inter;
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.1rem;
        letter-spacing: -0.20813153684139252px;
        text-align: left;
        width: 100%;
        color: #1A1A1AA3;
    }

    .gallery-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        flex: 0 0 100%;
    }

    .product-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 1rem;
        width: 100%;
        height: 100%;
        flex: 0 0 100%;
        max-width: 100%;
    }

    .slides-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 50px;
        margin-top: 4rem;
    }

    .slides-container .span {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 400px;
    }

    .slides-container .span > span {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 95%;
        max-width: 85px;
        height: 4px;
        border-radius: 4px;
        background-color: #CED6F0;
        position: relative;
        transition: all 0.5s ease-in-out;
    }

    .slides-container .span > span:first-child {
        display: flex;
        align-items: center;
        background-color: var(--primary-blue);
    }

    .slides-container .span > span:hover {
        background-color: var(--primary-blue);
        transform: scale(0.96);
    }

    .slides-container .chevron {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        width: 130px;
        height: 50px;
    }

    .slides-container .chevron span {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 100%;
        border-radius: 50%;
        /* background-color: #CED6F0; */
        position: relative;
        transition: all 0.5s ease-in-out;
    }

    .slides-container .chevron > span i {
        color: var(--white-text);
        background-color: #1A438452;
        height: 42px;
        width: 42px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .slides-container .chevron > span i:hover {
        display: flex;
        align-items: center;
        background-color: var(--primary-blue);
        transform: scale(0.96);
    }

    @media (max-width: 1050px) {
        .header {
            gap: 1rem;
        }

        .header h2 {
            font-size: 1.5rem;
        }

        .header p {
            font-size: 0.9rem;
        }
    }

</style>