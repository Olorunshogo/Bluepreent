
<script setup>
    import { ref } from 'vue';

    const category = ref("Bed/Mattrass");
    const minRange = ref("₦" + 0);
    const maxRange = ref("₦" + 1000);
    const condition = ref("Brand New");

    // const avChecked = ref(false);
    const locationChecked = ref(false);


    import CustomItem from './CustomItem.vue'
    import ChevrondownIcon from './icons/ChevrondownIcon.vue'
    import TimesIcon from './icons/TimesIcon.vue';


    const collection = ref([
        { id: 1, name: 'Bed/Mattrass', price: 500, location: "Lagos, Nigeria", condition: 'Brand New', available: 'Available Now', alt: 'Mattrass' },
        { id: 2, name: 'Chairs', price: 1000, location: "Lagos, Nigeria", condition: 'Fairly Used', available: 'Available in 2 weeks', alt: 'Mattrass' },
        { id: 3, name: 'Furniture', price: 1500, location: "Lagos, Nigeria", condition: 'Brand New', available: 'Available Now', alt: 'Mattrass' },
        { id: 4, name: 'Mirrors', price: 2000, location: "Lagos, Nigeria", condition: 'Fairly Used', available: 'Available Now', alt: 'Mattrass' },
        { id: 1, name: 'Bed/Mattrass', price: 2500, location: "Lagos, Nigeria", condition: 'Brand New', available: 'Available Now' },
        { id: 2, name: 'Chairs', price: 3000, location: "Lagos, Nigeria", condition: 'Fairly Used', available: 'Available in 2 weeks' },
        { id: 3, name: 'Furniture', price: 3500, location: "Lagos, Nigeria", condition: 'Brand New', available: 'Available Now' },
        { id: 4, name: 'Mirrors', price: 4000, location: "Lagos, Nigeria", condition: 'Fairly Used', available: 'Available Now' },
        { id: 1, name: 'Bed/Mattrass', price: 4500, location: "Lagos, Nigeria", condition: 'Brand New', available: 'Available Now' },
        { id: 2, name: 'Chairs', price: 5000, location: "Lagos, Nigeria", condition: 'Fairly Used', available: 'Available in 2 weeks' },
        { id: 3, name: 'Furniture', price: 5500, location: "Lagos, Nigeria", condition: 'Brand New', available: 'Available Now' },
        { id: 4, name: 'Mirrors', price: 600, location: "Lagos, Nigeria", condition: 'Fairly Used', available: 'Available Now' },
    ]);

</script>

<template>
    <div>
        <div class="container">
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

                <div class="sort-category" title="Categories">
                    <span>
                        {{ category }}
                    </span>
                    <i>
                        <TimesIcon />
                    </i>
                </div>

                <div class="sort-category" title="Price">
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
                        <TimesIcon />
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
        </div>
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
        background-color: transparent;
        border: 1px solid #CACDD8;
    }

    .sort-categories .sort-category {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        border-radius: 8px;
        width: fit-content;
        height: 35px;
        padding: 10px;
        font-size: var(--cat-btn-font-size);
        font-weight: 400;
        text-align: center;
        cursor: pointer;
        margin: auto 0;
        background-color: var(--light-blue-bg);
        transition: var(--trans-03-ease-in);
    }

    .sort-categories .sort-category:hover {
        opacity: 1.0;
        border: 1px solid #CACDD8;
    }

    .sort-category {
        margin: auto;
        display: flex;
        align-items: center;
    }

    .sort-categories .sort-category i {
        color: var(--icon-grey);
        display: flex;
        align-items: center;
        margin-left: 8px;
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
        width: 100%;        
        height: fit-content;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: var(--trending-posts-gap);
    }

</style>