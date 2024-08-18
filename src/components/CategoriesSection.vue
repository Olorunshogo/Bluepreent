
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
            <div class="pagination-btn-group">
                <span>
                    <button>
                        <span><i><LeftArrowIcon /></i></span>
                        <span>Previous</span>                    
                    </button>
                </span>
                <span><button>1</button></span>
                <span><button>2</button></span>
                <span><button>3</button></span>
                <span><button>...</button></span>
                <span><button>8</button></span>
                <span><button>9</button></span>
                <span><button>10</button></span>
                <span>
                    <button>
                        <span>Next</span>
                        <span><i><RightArrowIcon /></i></span>
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
        background-color: var(--primary-bg-colour);
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
        width: 70%;
        height: 100%;
    }

    .pagination {
        height: 68px;
        min-width: 100%;
        padding: 12px 0px 16px 0px;
        border: 1px solid #EAECF0;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }

    .pagination-btn-group {
        width: 520px;
        height: 40px;
        gap: 0px;
        border-radius: 8px;
        border: 1px solid #D0D5DD;
        box-shadow: 0px 1px 2px 0px #1018280D;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .pagination-btn-group span:first-child {
        display: flex;
        align-items: center;
        max-width: 100%;
    }

    .pagination-btn-group span button {
        width: 100%;
        height: 100%;
        border-radius: 8px;
        border: none;
        border-right: 1px solid #D0D5DD;
        outline: none;        
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-items: space-between;
        text-align: center;
        background-color: transparent;
        padding: 12px 8px;
    }

    .pagination-btn-group i {
        font-size: 12px;
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
            padding: 9px 0px 12px 0px;
        }

        .pagination-btn-group {
            width: 366px;
            height: 35px;
        }        

        .pagination-btn-group span button {
            padding: 9px 6px;
        }

    }
</style>