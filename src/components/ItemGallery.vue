
<script setup>
    import { ref } from 'vue';

    const category = ref("Bed/Mattrass");
    const minRange = ref("₦" + 10);
    const maxRange = ref("₦" + 25000000);
    const condition = ref("Brand New");

    // const avChecked = ref(false);
    const locationChecked = ref(false);


    import CustomItem from './CustomItem.vue'
    import ChevrondownIcon from './icons/ChevrondownIcon.vue'
    import TimesIcon from './icons/TimesIcon.vue';


    const collection = ref([
        { id: 1, name: 'Bed/Mattrass', price: 500, location: "Lagos, Nigeria", condition: 'Brand New', available: 'Available Now' },
        { id: 2, name: 'Chairs', price: 1000, location: "Lagos, Nigeria", condition: 'Fairly Used', available: 'Available in 2 weeks' },
        { id: 3, name: 'Furniture', price: 1500, location: "Lagos, Nigeria", condition: 'Brand New', available: 'Available Now' },
        { id: 4, name: 'Mirrors', price: 2000, location: "Lagos, Nigeria", condition: 'Fairly Used', available: 'Available Now' },
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
        <div class="container" title="Product Gallery">
            <div class="search-categories">
                <p>Showing 1-60 items out of a total of 1.2k for <span class="highlight">“Bed/Mattrass”</span></p>                   

                <div class="sort-buttons" title="Sort">
                    <button title="Sort By Position">
                        <span>
                            <span>Sort By:</span>
                            <span class="highlight"> Position</span>
                        </span>
                        <i>
                            <ChevrondownIcon />
                        </i>
                    </button>

                    <button title="Show"> 
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

                <!-- COMMECT THIS PART OUT -->
                <!-- <div class="sort-category" title="Availability">
                    <span>
                        {{ avChecked }}
                    </span>
                    <i>
                        <TimesIcon />
                    </i>
                </div> -->

                <div class="sort-category" title="Location">
                    <span>
                        {{ locationChecked }}
                    </span>
                    <i>
                        <TimesIcon />
                    </i>
                </div>
                    
                <div class="sort-buttons">
                    <button>
                        <span class="highlight"> Clear All</span>
                    </button>                      
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
        padding: var(--cat-item-padd) 0 var(--cat-item-padd) var(--cat-item-padd);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .search-categories {
        width: 100%;
        height: fit-content;
        border-radius: 8px;
        margin-bottom: var(--cat-item-margin);
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        color: #CACDD8;
    }

    .search-categories p {
        font-family: Inter;
        font-size: var(--categories-p);
        font-weight: 400;
        line-height: 1.5rem;
        text-align: left;
        margin: auto 0;
        margin-bottom: 1rem;
    }

    .search-categories .sort-buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        margin: auto 0;
        max-width: 350px;
    }

    .search-categories button {
        width: var(--cat-btn-width);
        height: var(--cat-btn-height);
        border: 1px solid #CACDD8;
        outline: none;
        border-radius: 8px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 12px 4px;
        color: #B0B8C2;
        font-family: Inter;
        font-size: var(--cat-btn-font-size);
        font-weight: 600;
        line-height: 1.7rem;
        text-align: center;
        cursor: pointer;
        background-color: var(--primary-bg-colour);
        transition: all 0.3s ease-out;
    }

    .search-categories button:hover,
    .sort-categories button:hover {
        background-color: #eee;
    }

    .search-categories button:focus,
    .sort-categories button:focus {
        transform: scale(0.97);
    }

    .highlight {
        color: var(--primary-blue);
        font-family: Inter;
        font-weight: 700;
        line-height: 1.2rem;
        text-align: left;
    }

    /* === SORT CATEGORIES === */
    .sort-categories {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        height: var(--cat-btn-height);
        margin-bottom: var(--cat-item-margin);
    }

    .sort-categories .sort-category {
        display: flex;
        flex-direction: row;
        align-items: center;
        border-radius: 8px;
        padding: 10px;
        font-size: var(--cat-btn-font-size);
        font-weight: 400;
        opacity: 0.9;
        cursor: default;
        margin-right: 0.6rem;
        background-color: var(--light-blue-bg);
        transition: var(--trans-03-ease-in);
    }

    .sort-categories .sort-category:focus,
    .sort-categories .sort-category:hover {
        opacity: 1.0;
        border: 1px solid #CACDD8;
    }

    .sort-categories .sort-category i {
        color: var(--icon-grey);
        display: flex;
        align-items: center;
    }

    .sort-categories .sort-buttons {
        max-height: 50px;
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
        justify-content: center;
        padding: 12px 8px;
        font-family: Inter;
        font-size: var(--cat-btn-font-size);
        font-weight: 600;
        line-height: 1.5rem;
        text-align: center;
        background-color: transparent;
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
        grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
        gap: var(--trending-posts-gap);
    }

</style>