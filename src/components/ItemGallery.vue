
<script setup>
    import { ref } from 'vue'

    const category = ref("Bed/Mattrass");
    const minRange = ref(10);
    const maxRange = ref(25000000);
    const condition = ref("Brand New");

    // const avChecked = ref(false);
    const locationChecked = ref(false);


    import CustomItem from './CustomItem.vue'
    import ChevrondownIcon from './icons/ChevrondownIcon.vue'
    import TimesIcon from './icons/TimesIcon.vue';


    const collection = ref([
        { id: 1, name: 'Bed/Mattrass', price: 1000, location: "Lagos, Nigeria", condition: 'Brand New', available: 'Available Now' },
        { id: 2, name: 'Chairs', price: 1500, location: "Lagos, Nigeria", condition: 'Fairly Used', available: 'Available in 2 weeks' },
        { id: 3, name: 'Furniture', price: 2000, location: "Lagos, Nigeria", condition: 'Brand New', available: 'Available Now' },
        { id: 4, name: 'Mirrors', price: 2500, location: "Lagos, Nigeria", condition: 'Fairly Used', available: 'Available Now' }
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

                    <div class="items">
                        <CustomItem 
                            v-for="item in collection" :key="item.id"
                            :item="item"
                        />                        
                    </div>

                    <div class="items">
                        <CustomItem 
                            v-for="item in collection" :key="item.id"
                            :item="item" class="item"
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
        padding: 2rem 0 2rem 2rem;
        display: flex;
        flex-direction: column;
        cursor: default;
    }

    .search-categories {
        width: 100%;
        height: 50px;
        border-radius: 8px;
        margin-bottom: 2rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        color: #CACDD8;
    }

    .search-categories p {
        font-family: Inter;
        font-size: 0.9rem;
        font-weight: 400;
        line-height: 1.2rem;
        text-align: left;
        width: 65%;
    }

    .search-categories .sort-buttons {
        min-width: 35%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .search-categories button {
        width: 11rem;
        height: 50px;
        border: 1px solid #CACDD8;
        outline: none;
        border-radius: 8px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        padding: 12px 4px;
        color: #B0B8C2;
        font-family: Inter;
        font-size: 0.8rem;
        font-weight: 600;
        line-height: 1.7rem;
        text-align: center;
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
        justify-content: space-between;
        width: 75%;
        height: 50px;
        margin-bottom: 2rem;
    }

    .sort-categories .sort-category {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        border-radius: 8px;
        padding: 10px 15px;
        font-size: 0.9rem;
        font-weight: 400;
        opacity: 0.9;
        background-color: var(--light-blue-bg);
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
        height: 50px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-items: space-between;
    }

    .sort-categories button {
        height: 40px;
        border: 1px solid #CACDD8;
        outline: none;
        border-radius: 8px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 12px 8px;
        font-family: Inter;
        font-size: 0.8rem;
        font-weight: 600;
        line-height: 1.5rem;
        text-align: center;
        background-color: transparent;
    }

    /* === ITEMS SECTION === */
    .items-section {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }

    .items-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: space-between;
        width: 100%;        
        height: 100%;
    }

    .items {
        width: 100%;        
        height: 33.33%;
        margin-bottom: 2.2rem;
        gap: 1.25rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    @media  (max-width: 1055px) {
        .container {
            padding: 1.45rem 0 1.45rem 1.45rem;
        }

        .search-categories {
            height: 40px;
            margin-bottom: 1.45rem;
        }

        .search-categories p {
            font-size: 0.8rem;
            line-height: 0.9rem;
        }

        .search-categories button {
            width: 9.5rem;
            height: 40px;
            padding: 8px 4px;
            font-size: 0.7rem;
            line-height: 1.2rem;
        }

        .highlight {
            line-height: 0.9rem;
        }

        /* === SORT CATEGORIES === */
        .sort-categories {
            height: 40px;
            margin-bottom: 1.45rem;
        }

        .sort-categories .sort-category {
            padding: 8px 12px;
            font-size: 0.7rem;
        }

        .sort-categories .sort-buttons {
            height: 40px;
        }

        .sort-categories button {
            height: 40px;
            padding: 8px 6px;
            font-size: 0.7rem;
            line-height: 1.1rem;
        }

        /* === ITEMS SECTION === */
        .items {
            margin-bottom: 1.55rem;
            gap: 0.9rem;
        }

    }
</style>