
<script setup>

    import SearchIcon from '../components/icons/SearchIcon.vue'
    import ItemSidebar from '../components/ItemSidebar.vue'
    import ItemGallery from './ItemGallery.vue'

    import RightArrowIcon from './icons/RightArrowIcon.vue'
    import LeftArrowIcon from './icons/LeftArrowIcon.vue'
</script>

<template>
    <div class="categories">
        <div class="top">
            <div class="category-heading">
                <h2>Category of items</h2>
                <p>Please Explore Categories: Find What You're Looking For</p>
            </div>

            <div class="top-input">
                <i class="search"><SearchIcon /></i>
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

        </div>

        <div class="pagination">
            <div class="empty"></div>
            <div class="pagination-btn-group">
                <span>
                    <button>
                        <span id="previous"><i><LeftArrowIcon /></i></span>
                        <span>Previous</span>                    
                    </button>
                </span>
                <span><button class="center">1</button></span>
                <span><button>2</button></span>
                <span><button>3</button></span>
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

    .top {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        height: fit-content;
        max-height: 150px;
        gap: 8px;
        margin: 1rem 0;
    }

    /* .top .category-heading {
        width: 60%;
    } */

    .top .category-heading h2 {
        font-family: Inter;
        font-size: var(--categories-h2);
        font-weight: 700;
        line-height: 2rem;
        color: #021019;
        text-align: left;
        margin-bottom: 16px;
    }

    .top .category-heading p {
        font-family: Inter;
        font-size: var(--categories-p);
        font-weight: 500;
        line-height: 1.5rem;
        text-align: left;
        color: #1A1A1AA3;
    }

    .top .top-input {
        width: 80%;
        height: var(--categories-input-height);
        max-height: 64px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        border-radius: 8px;
        border: 1px solid #E5E5E5;
    }

    .top .top-input input[type=text] {
        display: flex;
        justify-content: center;
        align-content: center;
        width: 90%;
        height: 100%;
        padding: 10px 12px 12px 16px;
        margin: 0;
        border: none;
        outline: none;
        border-radius: 8px;
        transition: all 0.5s ease-in-out;
    }

    .top .top-input input[type=text]::placeholder {
        font-family: Inter;
        font-size: 13px;
        font-weight: 300;
        line-height: 24px;
        text-align: left;
        color: #04092152;
    }

    .top .search {
        color: #969696;
        font-size: var(--categories-search-i);
    }

    .items-container {
        border-top: 1px solid #D8D8D873;
        display: flex;
        flex-direction: row;
        justify-content: left;
        width: 100%;
        height: 100%;
        margin-bottom: 1.5rem;
    }

    .items-container .side-bar {
        flex: 0 0 20%;
        max-width: 240px;
        height: 100%;
    }

    .items-container .gallery {
        width: 100%;
        max-width: calc(100%-240px);
        height: 100%;
    }

    .pagination {
        height: var(--cat-pagination-height);
        width: 100%;
        padding: 12px 16px;
        border: 1px solid #EAECF0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .pagination-btn-group {
        max-width: 640px;
        width: 100%;
        height: 40px;
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
    }    
</style>