
<script setup>
    defineProps({
        item: {
            type: Object,
            required: true
        }
    });
    // 'title', 'price', 'Location', 'condition'
</script>

<template>
<div class="card-container"> 
    <div>
        <img src="" alt="Bed/Mattress">
    </div>
    <div>
        <div>
            <h2>{{ item.title }}</h2>  
        </div>

        <div>
            <p>{{ item.price }} Red</p>
            <p>{{ item.location }}</p>
            <p>{{ item.condition }}</p>
        </div>
    </div>
</div>

</template>



<style lang="css" scoped>



.card-container {
    width: 100%;
    max-width: 340px;
    height: 100%;
    max-height: 500px;
    border-radius: 30px;
    gap: 40px;
    display: flex;
    flex-direction: column;
}



</style>