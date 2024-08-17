
<script setup>

    import SearchIcon from '../components/icons/SearchIcon.vue'
    import ItemSidebar from '../components/ItemSidebar.vue'
    import ItemGallery from './ItemGallery.vue'
</script>

<template>
    <div class="categories">
        <div class="top">
            <div>
                <h2>Category of items</h2>
                <p>Please Explore Categories: Find What You're Looking For</p>
            </div>

            <div class="top-input">
                <i class="icons search"><SearchIcon /></i>
                <input type="text" id="categories-search" placeholder="Bed/Mattrass">
            </div>        
        </div>

        <div class="items-container">

            <div class="side-bar">
                <ItemSidebar />
            </div>

            <div class="gallery">
                <ItemGallery />
            </div>

            <div></div>

        </div>

    </div>
</template>



<style scoped>
    .categories {
        margin: 8rem 0;
        display: flex;
        flex-direction: column;
        max-height: 1200px;
        height: fit-content;
        width: 100%;
    }

    .top {
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-content: center;
        height: 100px;
        margin: 8px 0;
    }

    .top div:first-child {
        width: 60%;
        display: flex;
        flex-direction: column;
        align-content: center;
    }

    .top div:first-child h2 {
        font-family: Inter;
        font-size: 2rem;
        font-weight: 700;
        line-height: 2.3rem;
        color: #021019;
        text-align: left;
        margin-bottom: 16px;
    }

    .top div:first-child p {
        font-family: Inter;
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 29.05px;
        text-align: left;
        color: #1A1A1AA3;
    }

    .top .top-input {
        width: 40%;
        height: 64px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-content: center;
        border-radius: 8px;
        border: 1px solid #E5E5E5;
    }

    .top .top-input input[type=text] {
        display: flex;
        justify-content: center;
        align-content: center;
        width: 100%;
        height: 100%;
        padding: 10px 12px 12px 16px;
        margin: 0;
        /* transition: all 0.5s ease-in-out; */
        border: none;
        outline: none;
    }

    .top .top-input input[type=text]::placeholder {
        font-family: Inter;
        font-size: 1rem;
        font-weight: 400;
        line-height: 24px;
        text-align: left;
        color: #04092152;
    }

    .top .search {
        color: #969696;
        font-size: 20px;
    }

    .items-container {
        border-top: 1px solid #D8D8D873;
        display: flex;
        flex-direction: row;
        width: 100%;
    }

    .items-container .side-bar {
        border-top: 1px solid #D8D8D873;
        display: flex;
        flex-direction: row;
        max-width: 30%;
        width: 240px;
        height: 100%;
        max-height: fit-content;
    }

    .items-container .gallery {
        border-top: 1px solid #D8D8D873;
        display: flex;
        flex-direction: row;
        justify-items: left;
        max-width: 70%;
        width: calc(100%-240px);
        max-height: 100%;
        max-height: fit-content;
    }
</style>