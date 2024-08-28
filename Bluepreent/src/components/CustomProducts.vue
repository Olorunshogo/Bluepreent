
<script setup>   

   import TelevisionProduct from '../assets/TelevisionProduct.vue';
    import LocationIcon from "./icons/LocationIcon.vue";

    defineProps({
        product: {
            type: Object,
            required: true
        }
    });
</script>

<template>
<div class="card-container"> 
    <div class="product-container">
        <TelevisionProduct />
    </div>

    <div class="description">
        <h3>{{ product.name }}</h3>  
        <p class="condition">
            <span>{{ product.name }}</span>
            <span>{{ product.condition }}</span>
        </p>
        <p class="price"><span class="naira">₦</span>{{ product.price }}</p>
        <p class="details">{{ product.description }}</p>
        <p class="location"><i><LocationIcon /></i>{{ product.location }}</p>
    </div>
</div>

</template>



<style lang="css" scoped>
    .card-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 0 0 23%;
        max-width: 25%;
        height: 400px;
        max-height: 100%;
        gap: 2rem;
        padding: 1rem;
        border: 1px solid #F0F0F0;
        border-radius: 1rem;
        background-color: var(--primary-bg-colour);
        box-shadow: 0 5px 3px  0 #A4A4A40F;
        transition: all 0.4s ease-in-out;     
    }

    .card-container:hover {
        transform: scale(1.05)    ;  
    }

    .product-container {
        width: 100%;
        max-height: 160px;
        background-color: #C1C1C133;
        border-radius: 8px;
    }

    .description {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-items: space-between;
        text-align: left;
    }

    .description h3 {
        font-family: Inter;
        font-size: 1.1rem;
        font-weight: 600;
        line-height: 1.4rem;
        text-align: left;
        letter-spacing: -1%;
        color: var(--black-text);
    }

    .description > p {
        margin-top: 12px;
    }

    .description .condition {
        font-family: Inter;
        font-size: 14px;
        font-weight: 400;
        gap: 12px;
        max-width: 215px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .description .condition > span:nth-child(1),
    .description .condition > span:nth-child(2) {
        font-family: Inter;
        font-weight: 300;
        width: 48%;
        gap: 8px;
        padding: 8px;
        border-radius: 80px;
        font-size: 12px;
        color: #524545;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    } 

    .description .condition > span:nth-child(1) {
        background-color: #DDF6FF;
    } 

    .description .condition > span:nth-child(2) {
        background-color: #E8F9E8;
    }


    .description .price {
        font-family: Inter;
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 1.9rem;
        color: #1A1A1A;
    }

    .description .details {
        font-family: Inter;
        font-size: 12px;
        font-weight: 400;
        line-height: 1.1rem;
        color: #112347CC;
        text-align: left;       
    }

    .description .location {
        font-family: Inter;
        font-size: 14px;
        font-weight: 400;
        line-height: 1rem;
        text-align: left;
        color: #112347;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: left;
    }

    .description .location i {
        color: #384A62;
        font-size: 14px;
        width: 15px;
        height: 15px;
    }

    @media  (max-width: 1055px) {
        .card-container {
            flex: 0 0 33%;
            max-width: 34%;
            gap: 1.5rem;
            padding: 12px; 
        }

        .product-container {
        width: 100%;
        max-height: 160px;
        background-color: #C1C1C133;
        border-radius: 8px;
    }

        
    }
</style>