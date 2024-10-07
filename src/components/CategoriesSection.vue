
<script setup>

    // import SearchIcon from '../components/icons/SearchIcon.vue';
    import ItemSidebar from '../components/ItemSidebar.vue';
    import ItemGallery from './ItemGallery.vue';    
</script>

<template>
    <div class="categories">
        <div class="items-container">

            <div class="side-bar">
                <ItemSidebar />
            </div>

            <div class="gallery">
                <ItemGallery />
            </div>           

        </div>

        

    </div>
</template>



<style scoped>
    .categories {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
    }

    .items-container {
        border-top: 1px solid #D8D8D873;
        display: flex;
        flex-direction: row;
        justify-content: left;
        width: 100%;
        height: 100%;
        margin-bottom: 1.5rem;
        padding: 1rem 2rem;
    }

    .items-container .side-bar {
        width: var(--cat-side-width);
        height: auto;
        background-color: var(--secondary-bg);
        border-radius: 8px;
    }

    .items-container .gallery {
        width: calc(100% - var(--cat-side-width));
        height: 100%;
    }

    @media (max-width: 760px) {
        .items-container {
            height: 100%;
        }
    }    

    @media (max-width: 650px) {
        .items-container .side-bar {
            display: none;
        }

        .items-container .gallery {
            width: 100%;
            overflow: hidden;
        }
    }    
</style>