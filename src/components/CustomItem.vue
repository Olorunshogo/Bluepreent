
<script setup>

    import MattrassImage from '../assets/MattrassImage.vue'
    import CalendarIcon from './icons/CalendarIcon.vue'
    import LocationIcon from './icons/LocationIcon.vue'

    defineProps({
        item: {
            type: Object,
            required: true
        }
    });
</script>

<template>
    <div class="card-container"> 
        <div class="product-container">
            <MattrassImage class="product"/>
            <p class="available">
                <i>
                    <CalendarIcon />
                </i>
                <span>{{ item.available }}</span>
            </p>
        </div>

        <div class="description">
            <h3>{{ item.name }}</h3> 
            <p class="price"><span class="naira">₦</span>{{ item.price }}</p>
            <p class="location">
                <span><i><LocationIcon /></i></span>
                <span>{{ item.location }}</span>
            </p>
            <p class="condition">{{ item.condition }}</p>
        </div>
    </div>

</template>



<style lang="css" scoped>
    .card-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 95%;
        max-width: 250px;
        height: 100%;
        gap: 1rem;
        border: 1px solid #F0F0F0;
        border-radius: 8px;
        background-color: var(--primary-bg-colour);
        box-shadow: 0 5px 3px  0 #A4A4A40F;
        transition: all 0.4s ease-in-out; 
    }
    
    .card-container:hover {
        transform: scale(1.05)    ;  
    }

    .product-container {
        width: 100%;
        max-height: 8rem;
        position: relative;        
        background-color: var(--light-blue);
    }

    .product {
        height: 100%;
        width: 100%;
    }

    .available {
        background-color: var(--primary-blue);
        color: var(--primary-bg-colour);
        width: fit-content;
        height: fit-content;
        font-family: Satoshi;
        font-size: 9px;
        font-weight: 400;
        text-align: left;
        position: absolute;
        top: 6px;
        right: 6px;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 2px 4px;
        border-radius: 4px;
    }

    .available i {
        font-size: 11px;
        margin-right: 4px;
    }

    .description {
        width: 100%;
        height: 100%;
        padding: 0 16px 8px 16px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: left;
    }

    .description h3 {
        font-family: Inter;
        font-size: var(--cat-item-desc-h3);
        font-weight: 700;
        line-height: 1.4rem;
        text-align: left;
    }

    .description > p {
        margin-top: 10px;
    }

    .description .price {
        font-family: Inter;
        font-size: var(--cat-item-desc-p);
        font-weight: 600;
        line-height: 1.2rem;
        color: #1A1A1A;
    }

    .description .location {
        font-family: Inter;
        font-size: var(--cat-item-desc-p);
        font-weight: 400;
        line-height: 1rem;
        gap: 12px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .description .location > span {
        font-family: Inter;
        font-weight: 400;
        gap: 8px;
        color: #524545;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    } 

    .description .condition {
        font-size: var(--cat-item-desc-p);
        line-height: 1.1rem;
    }
</style>