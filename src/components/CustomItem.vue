
<script setup>

    import MattrassImage from '../assets/MattrassImage.vue'
    import CalendarIcon from './icons/CalendarIcon.vue'
    

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
        <div class="name">
            <h3>{{ item.name }}</h3>  
        </div>

        <div>
            <p class="price"><span class="naira">₦</span>{{ item.price }}</p>
            <p class="location">{{ item.location }}</p>
            <p class="condition">{{ item.condition }}</p>
        </div>
    </div>
</div>

</template>



<style lang="css" scoped>
    .card-container {
        width: 100%;
        max-height: 345px;
        height: 100%;
        gap: 2.8rem;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        background-color: var(--primary-bg-colour);
        box-shadow: 0 5px 3px  0 #A4A4A40F;
        transition: all 0.4s ease-in-out; 
        box-shadow: 0px 4.88px 3.25px 0px #A4A4A40F;
        box-shadow: 0px 8.13px 27.64px -13.01px #00000014;
        box-shadow: 0px 0px 0px 0.81px #0000000D;      
    }

    .card-container:hover {
        transform: scale(1.05)    ;  
    }

    .product-container {
        position: relative;
        max-height: 10rem;
        height: 40%;
        max-width: 100%;
        background-color: var(--light-blue);
    }

    .product {
        height: 100%;
        max-width: 100%;
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
        top: 4px;
        right: 4px;
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
        line-height: 19px;
        text-align: left;
        height: 30%;
    }

    .description > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: left;
        height: 70%;
    }

    .description .price {
        font-family: Inter;
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.5rem;
        color: #1A1A1A;
    }

    .description .location,
    .description .condition {
        font-size: 1rem;
        line-height: 1.5rem;
    }

    @media  (max-width: 1055px) {
        .card-container {
            max-height: 300px;
            gap: 2.3rem;  
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
        

    

    

    

    

    
    }
</style>