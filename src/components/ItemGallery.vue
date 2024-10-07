
<script setup>
    import { ref } from 'vue';

    const category = ref("Bed/Mattress");
    const minRange = ref("₦" + 0);
    const maxRange = ref("₦" + 1000);
    const condition = ref("Brand New");

    // const avChecked = ref(false);
    const locationChecked = ref(false);


    import CustomItem from './CustomItem.vue'
    import ChevrondownIcon from './icons/ChevrondownIcon.vue'
    import TimesIcon from './icons/TimesIcon.vue';

    import RightArrowIcon from './icons/RightArrowIcon.vue';
    import LeftArrowIcon from './icons/LeftArrowIcon.vue';


    const collection = ref([
        { id: 1, name: 'Bed/Mattress', price: '500', location: "Lagos, Nigeria", condition: 'Brand New', available: 'Available Now', alt: 'Mattress' },
        { id: 2, name: 'Chairs', price: '1,000', location: "Lagos, Nigeria", condition: 'Fairly Used', available: 'Available in 2 weeks', alt: 'Mattress' },
        { id: 3, name: 'Furniture', price: '1,500', location: "Lagos, Nigeria", condition: 'Brand New', available: 'Available Now', alt: 'Mattress' },
        { id: 4, name: 'Mirrors', price: '2,000', location: "Lagos, Nigeria", condition: 'Fairly Used', available: 'Available Now', alt: 'Mattress' },
        { id: 5, name: 'Bed/Mattress', price: '2,500', location: "Lagos, Nigeria", condition: 'Brand New', available: 'Available Now' },
        { id: 6, name: 'Chairs', price: '3,000', location: "Lagos, Nigeria", condition: 'Fairly Used', available: 'Available in 2 weeks' },
        { id: 7, name: 'Furniture', price: '3,500', location: "Lagos, Nigeria", condition: 'Brand New', available: 'Available Now' },
        { id: 8, name: 'Mirrors', price: '4,000', location: "Lagos, Nigeria", condition: 'Fairly Used', available: 'Available Now' },
        { id: 9, name: 'Bed/Mattress', price: '4,500', location: "Lagos, Nigeria", condition: 'Brand New', available: 'Available Now' },
        { id: 10, name: 'Chairs', price: '5,000', location: "Lagos, Nigeria", condition: 'Fairly Used', available: 'Available in 2 weeks' },
        { id: 11, name: 'Furniture', price: '5,500', location: "Lagos, Nigeria", condition: 'Brand New', available: 'Available Now' },
        { id: 12, name: 'Mirrors', price: '6,000', location: "Lagos, Nigeria", condition: 'Fairly Used', available: 'Available Now' },
    ]);

</script>

<template>
    <div>
        <section class="container">
            <div class="search-bar">
                <label for="search-bar">
                    <i class='bx bx-search'></i>
                    <input
                        type="text" name="search-bar" id="search-bar"
                        placeholder="Search for an item"
                    />
                </label>
            </div>

            <div class="search-categories">
                <p>Showing 1-60 items out of a total of 1.2k for results</p>   
                <button class="filter">
                    <span>
                        Filter
                    </span>
                    <i class='bx bx-filter' ></i>
                </button>               

                <div class="sort-buttons">
                    <button>
                        <span>
                            <span>Sort By:</span>
                            <span> Select an option</span>
                        </span>
                        <i>
                            <ChevrondownIcon />
                        </i>
                    </button>

                    <button> 
                        <span>
                            <span>Show:</span>
                            <span class="highlight"> 24 per page</span>
                        </span>
                        <i>
                            <ChevrondownIcon />
                        </i>
                    </button>                        
                </div>             
            </div>

            <div class="sort-categories">
                <div class="clear">
                    <button>
                        <span class="highlight"> Clear All</span>
                    </button>                      
                </div>

                <div class="sort-category">
                    <span>
                        {{ category }}
                    </span>
                    <i>
                        <TimesIcon class="times" />
                    </i>
                </div>

                <div class="sort-category">
                    <div>
                        <span>
                            {{ minRange }}
                        </span>

                        &nbsp; - &nbsp;

                        <span>
                            {{ maxRange }}
                        </span>

                    </div>
                    <i>
                        <TimesIcon class="times"/>
                    </i>
                </div>

                <div class="sort-category" title="Condition">
                    <span>
                        {{ condition }}
                    </span>
                    <i>
                        <TimesIcon />
                    </i>
                </div>

                <div class="sort-category" title="Location">
                    <span>
                        {{ locationChecked }}
                    </span>
                    <i>
                        <TimesIcon />
                    </i>
                </div>
            </div>

            <div class="items-section" title="Products">
                <div class="items-container">
                    <div class="items">
                        <CustomItem 
                            v-for="item in collection" :key="item.id"
                            :item="item"
                        />                        
                    </div>
                </div>
            </div>

            <div>
                <div class="pagination">                
                    <span>
                        <button>
                            <span><i><LeftArrowIcon /></i></span>
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
                            <span><i><RightArrowIcon /></i></span>
                        </button>
                    </span>                
                </div>
            </div>
        </section>
    </div>
</template>



<style lang="css" scoped>
    .container {
        width: 100%;
        height: 100%;
        padding: var(--cat-item-padd);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .container > div {
        width: 100%;
        height: 100%;
        margin: var(--cat-item-padd) 0;
        margin: 1rem auto;
    }

    /* === SEARCH BAR === */
    .search-bar {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        height: fit-content;
    }

    .search-bar label i {
        font-size: 1rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 100%;
        color: var(--icon-grey);
    }

    .search-bar label {
        border: 1px solid #CACDD8;
        border-radius: 8px;
        width: 196%;
        height: var(--cat-side-search-height);
        font-family: Inter;
        font-size: 11px;
        font-weight: 500;
        margin: 2rem 0;
        cursor: pointer;
        margin: 0 auto;
        background-color: var(--primary-bg-colour);
        transition: opacity 0.3s ease;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .search-bar label:focus-within {
        border: 1px solid var(--primary-blue);
    }

    .search-bar label:hover {
        background-color: rgba(246, 246, 246, 0.95);
    }

    .search-bar label input[type=text] {
        color: var(--black-text);
        width: 100%;
        height: 100%;
        height: auto;
        outline: none;
        border: none;
        font-size: 14px;
        font-weight: 400;
        background-color: transparent;
    }

    .search-bar label input[type=text]::placeholder {
        color: #CACDD8;
        font-weight: 500;
    }

    .search-categories {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-content: center;
        width: 100%;
        height: fit-content;
        border-radius: 8px;
        margin-bottom: var(--cat-item-margin);
        gap: 0.5rem;
    }

    .search-categories p {
        font-family: Inter;
        font-size: var(--cat-p);
        font-weight: 400;
        /* line-height: 1.5rem; */
        margin: auto 0;
        margin-bottom: 1rem;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        margin: auto 0;
        color: var(--cat-colour);
    }

    .search-categories .filter {
        display: none;
        width: 80px;
        color: var(--black-text);
    }

    .search-categories .sort-buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: auto 0;
        width: 420px;
        height: auto;
    }

    .search-categories button {
        width: var(--cat-btn-width);
        height: var(--cat-btn-height);
        outline: none;
        border-radius: 8px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        padding: 12px 4px;
        color: var(--cat-colour);
        font-family: Inter;
        font-size: var(--cat-btn-size);
        font-weight: 400;
        line-height: 1.7rem;
        text-align: center;
        cursor: pointer;
        padding: 4px;
        border: 1px solid #CACDD8;
        background-color: var(--primary-bg-colour);
        transition: all 0.3s ease-out;
    }

    .search-categories button > span:nth-child(1) {
        margin-right: 8px;
    }

    .search-categories button:hover,
    .sort-categories button:hover {
        background-color: var(--cat-hover);
    }

    .search-categories button:focus,
    .sort-categories button:focus {
        transform: scale(0.97);
    }

    .highlight {
        color: var(--primary-blue);
        font-family: Inter;
        font-weight: 400;
        /* line-height: 1.2rem; */
        text-align: left;
    }

    /* === SORT CATEGORIES === */
    .sort-categories {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
        height: fit-content;
        gap: 0.25rem;
    }

    .sort-categories div {
        margin-right: 1rem;
        margin-top: 8px;
    }

    .sort-categories .clear {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-items: space-between;
    }

    .sort-categories button {
        height: var(--cat-btn-height);
        border: 1px solid #CACDD8;
        outline: none;
        border-radius: 8px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 12px 8px;
        font-family: Inter;
        font-size: var(--cat-btn-font-size);
        line-height: 1.5rem;
        text-align: center;
        font-size: 13px;
        background-color: transparent;
        border: 1px solid transparent;
    }

    .sort-categories .sort-category {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        border-radius: 8px;
        width: fit-content;
        height: 35px;
        padding: 4px 10px;
        font-size: var(--cat-btn-font-size);
        font-weight: 400;
        text-align: center;
        cursor: pointer;
        background-color: var(--light-blue-bg);
        transition: var(--trans-03-ease-in);
    }

    .sort-categories .sort-category span {
        font-size: 13px;
    }

    .sort-categories .sort-category div {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: auto;
        width: 100%;
        height: 100%;
    }

    .sort-categories .sort-category:hover {
        background-color: #c6e3f4;
    }

    .sort-categories .sort-category i {
        color: var(--icon-grey);
        display: flex;
        align-items: center;
        margin-left: 1rem;
        margin: auto 0;
    }

    .sort-categories .sort-category .times {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: auto 0;
    }

    /* === ITEMS SECTION === */
    .items-section {
        width: 100%;
        height: 100%;
    }

    .items-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 100%;        
        height: 100%;
    }

    .items {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        gap: var(--cat-item-gap);
        width: 100%;
        height: fit-content;
    }

    .pagination {
        max-width: 330px;
        height: auto;
        display: flex;
        flex-direction: row;
        justify-self: flex-end;
        align-items: center;
        border: 1px solid #D0D5DD;
        border-radius: 8px;
        margin-left: auto;
        overflow-x: hidden;
    }

    .pagination > span {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0 8px;
        border-right: 1px solid #D0D5DD;
        height: var(--cat-pagination-height);
        box-shadow: 0px 1px 2px 0px #1018280D;
        transition: all 0.5s ease;
    }

    .pagination > span:hover {
        background-color: #eee;
    }

    .pagination > span:focus {
        transform: scale(0.97);
    }

    .pagination > span:nth-child(4) {
        background-color: var(--primary-blue);
    }

    .pagination > span:first-child i {
        font-size: 10px;
        margin-right: 3px;
        display: flex;
        align-items: center;
    }

    .pagination > span:last-child {
        border-right: none;
    }

    .pagination > span:last-child i {
        font-size: 10px;
        margin-left: 3px;
        display: flex;
        align-items: center;
    }

    .pagination > span button {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;       
        background-color: transparent;
        text-align: center;
        border: none;
        outline: none;
        
    }

    @media (max-width: 600px) {
        .search-categories {
            flex-wrap: wrap;
        }

        .search-categories p {
            display: none;
        }

        .search-categories .filter {
            display: flex;
        }
    }

</style>