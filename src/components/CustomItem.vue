
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
        width: 100%;
        max-height: 345px;
        height: 100%;
        gap: 1.9rem;
        border: 1px solid #F0F0F0;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: var(--primary-bg-colour);
        box-shadow: 0 5px 3px  0 #A4A4A40F;
        transition: all 0.4s ease-in-out; 
    }

    .card-container:hover {
        transform: scale(1.05)    ;  
    }

    .product-container {
        width: 100%;
        max-width: 320px;
        max-height: 9rem;
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
        width: 7.9rem;
        height: 1.5rem;
        font-family: Satoshi;
        font-size: 9px;
        font-weight: 400;
        line-height: 8px;
        text-align: left;
        position: absolute;
        top: 2px;
        right: 2px;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 1.5px 4px;
        border-radius: 4px;
    }

    .available i {
        font-size: 11px;
        margin-right: 4px;
    }

    .description {
        width: 100%;
        height: 100%;
        padding: 10px 12px 10px 16px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: left;
    }

    .description h3 {
        font-family: Inter;
        font-size: 1.1rem;
        font-weight: 700;
        line-height: 1.4rem;
        text-align: left;
        height: 25%;
        gap: 0.8rem;
    }

    .description > p {
        margin-top: 12px;
    }

    .description .price {
        font-family: Inter;
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.5rem;
        color: #1A1A1A;
    }

    .description .location {
        font-family: Inter;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.1rem;
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
        font-size: 14px;
        line-height: 1.1rem;
    }

    /* @media  (max-width: 1055px) {
        .card-container {
            gap: 2.1rem;  
        }

        .product-container {
            max-height: 9rem;
        }

        .available {
            width: 7.2rem;
            font-size: 0.7rem;
            top: 1px;
            right:1px;
            padding: 1px 3px;
            border-radius: 4px 8px 4px 4px;
        }

        .available i {
            font-size: 10px;
            margin-right: 4px;
        }

        .description {
            padding: 8px 9px 8px 12px;
        }

        .description h3 {
            font-size: 1rem;
            line-height: 13px;
        }

        .description > div:nth-child(2) {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            text-align: left;
            height: 70%;
        }

        .description .price,
        .description .location,
        .description .condition {
            font-size: 0.9rem;
            line-height: 1.2rem;
        }
    } */
</style>