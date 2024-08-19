
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
        margin: 8rem 0;
        display: flex;
        flex-direction: column;
        max-height: 1200px;
        height: 100%;
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

    .top .category-heading {
        width: 60%;
        display: flex;
        flex-direction: column;
        align-content: center;
    }

    .top .category-heading h2 {
        font-family: Inter;
        font-size: 2rem;
        font-weight: 700;
        line-height: 2.3rem;
        color: #021019;
        text-align: left;
        margin-bottom: 16px;
    }

    .top .category-heading p {
        font-family: Inter;
        font-size: 1.4rem;
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
        font-size: 1.5rem;
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
    }

    .items-container .gallery {
        border-top: 1px solid #D8D8D873;
        display: flex;
        flex-direction: row;
        justify-items: left;
        height: 100%;
    }

    .pagination {
        height: 68px;
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
        width: 55%;
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

    @media  (max-width: 1055px) {
        .categories {
            margin: 6rem 0;
        }

        .top {
            height: 72px;
        }

        .top .category-heading h2 {
            font-size: 1.5rem;
            line-height: 1.7rem;
            margin-bottom: 12px;
        }

        .top .category-heading p {
            font-size: 0.9rem;
            line-height: 20px;
        }

        .top .top-input {
            width: 40%;
            height: 45px;
        }

        .top .top-input input[type=text] {
            padding: 8px 9px 8px 12px;
            margin: 0;
        }

        .top .top-input input[type=text]::placeholder {
            font-size: 0.8rem;
            line-height: 18px;
        }

        .top .search {
            color: #969696;
            font-size: 0.9rem;
        }

        .items-container .side-bar {
            width: 200px;
        }

        .pagination {
            height: 50px;
            padding: 9px 12px;
        }

        .pagination-btn-group {
            width: 60%;
            height: 40px;
        }

        .pagination-btn-group i {
            font-size: 10px;
        }   
        
        .pagination-btn-group #previous,
        .pagination-btn-group #next {
            font-size: 10px;
        }
    }

    
</style>