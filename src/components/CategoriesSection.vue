
<script setup>
    // import SearchIcon from '../components/icons/SearchIcon.vue'
    import ItemSidebar from '../components/ItemSidebar.vue'
    import ItemGallery from './ItemGallery.vue'

    import RightArrowIcon from './icons/RightArrowIcon.vue'
    import LeftArrowIcon from './icons/LeftArrowIcon.vue'
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

        <div class="pagination">
            <div class="pagination-btn-group">
                <span>
                    <button>
                        <span id="previous"><i><LeftArrowIcon /></i></span>
                        <span>Previous</span>                    
                    </button>
                </span>
                <span><button class="center">1</button></span>
                <span><button>2</button></span>
                <span class="active"><button>3</button></span>
                <span><button>...</button></span>
                <span><button>8</button></span>
                <span><button>9</button></span>
                <span><button>10</button></span>
                <span>
                    <button>
                        <span>Next</span>
                        <span id="next"><i><RightArrowIcon /></i></span>
                    </button>
                </span>
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
        height: 700px;
        margin-bottom: 1.5rem;
        padding: 1rem 2rem;
    }

    .items-container .side-bar {
        width: var(--cat-side-width);
        height: 100%;
        background-color: var(--secondary-bg);
        border-radius: 8px;
        overflow-y: scroll;
    }

    .items-container .gallery {
        width: calc(100% - var(--cat-side-width));
        height: 100%;
        overflow-y: scroll;
    }

    .pagination {
        height: var(--cat-pagination-height);
        width: 100%;
        /* border: 1px solid #EAECF0; */
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .pagination-btn-group {
        max-width: 640px;
        width: 100%;
        height: 45px;
        border-radius: 8px;
        border: 1px solid #D0D5DD;
        box-shadow: 0px 1px 2px 0px #1018280D;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .pagination-btn-group > span {
        display: flex;
        align-items: center;
        justify-items: space-between;
        width: 100%;
    }

    .pagination-btn-group > span button {
        width: 100%;
        height: 100%;
        border: none;
        outline: none; 
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;       
        background-color: transparent;
        padding: 12px 8px;
        margin: 0 auto;
        transition: all 0.5s ease-out;
    }

    .pagination-btn-group .active {
        background-color: var(--primary-blue);
    }

    .pagination-btn-group > span:nth-child(1) button,
    .pagination-btn-group > span:nth-child(2) button,
    .pagination-btn-group > span:nth-child(3) button,
    .pagination-btn-group > span:nth-child(4) button,
    .pagination-btn-group > span:nth-child(5) button,
    .pagination-btn-group > span:nth-child(6) button,
    .pagination-btn-group > span:nth-child(7) button,
    .pagination-btn-group > span:nth-child(8) button {
        border-right: 1px solid #D0D5DD;
    }

    .pagination-btn-group span button:hover {
        background-color: #eee;
    }

    .pagination-btn-group span button:focus {
        transform: scale(0.97);
    }

    .pagination-btn-group #previous {
        font-size: 12px;
        margin-right: 8px;
        display: flex;
        align-items: center;
    }

    .pagination-btn-group #next {
        font-size: 12px;
        margin-left: 8px;
        display: flex;
        align-items: center;
    }

    @media (max-width: 760px) {
        .items-container .side-bar {
            display: none;
        }

        .items-container .gallery {
            width: 100%;
        }
    }    
</style>