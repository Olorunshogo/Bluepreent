
<script setup>
    import { ref } from 'vue'
    import CustomItem from './CustomItem.vue'
    import ChevrondownIcon from './icons/ChevrondownIcon.vue'
    import TimesIcon from './icons/TimesIcon.vue';

    const collection = ref([
        { id: 1, name: 'Bed/Mattrass', price: 1000, location: "Lagos, Nigeria", condition: 'Brand New', available: 'Available Now' },
        { id: 2, name: 'Chairs', price: 1500, location: "Lagos, Nigeria", condition: 'Fairly Used', available: 'Available in 2 weeks' },
        { id: 3, name: 'Furniture', price: 2000, location: "Lagos, Nigeria", condition: 'Brand New', available: 'Available Now' },
        { id: 4, name: 'Mirrors', price: 2500, location: "Lagos, Nigeria", condition: 'FairlyUsed', available: 'Available Now' }
    ]);

    // const props = defineProps({
    //     category: String,
    //     minRange: Number,
    //     maxRange: Number,
    //     condition: String,
    //     avChecked: String,
    //     locationChecked: String
    // });

</script>

<template>
    <div>
        <div class="container">
            <div class="search-categories">
                <div class="sort-section">
                    <p>Showing 1-60 items out of a total of 1.2k for <span class="highlight">“Bed/Mattrass”</span></p>
                    <div class="sort-buttons">
                        <button>
                            <span>
                                <span>Sort By:</span>
                                <span class="highlight"> Position</span>
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
            </div>

            <div class="sort-categories">
                <div class="sort-category">
                    <span>
                        {{ category }}
                    </span>
                    <i>
                        <TimesIcon />
                    </i>
                </div>

                <div class="sort-category">
                    <span>
                        <span>
                            {{ minRange }}
                        </span>
                        <span>
                            {{ maxRange }}
                        </span>

                    </span>
                    <i>
                        <TimesIcon />
                    </i>
                </div>

                <div class="sort-category">
                    <span>
                        {{ condition }}
                    </span>
                    <i>
                        <TimesIcon />
                    </i>
                </div>

                <!-- COMMECT THIS PART OUT -->
                <!-- <div class="sort-category">
                    <span>
                        {{ avChecked }}
                    </span>
                    <i>
                        <TimesIcon />
                    </i>
                </div> -->

                <div class="sort-category">
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

            <div class="items-section">
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
        max-width: 1032px;
        width: 100%;
        max-height: 1120px;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: 2rem;
        /* background-color: lightblue; */
    }

    .search-categories {
        width: 1030.49px;
        height: 50px;
        border: Mixed solid #CACDD8;
        margin-bottom: 2rem;
    }

    .search-categories .sort-buttons {
        width: 40%;
        height: 50px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .search-categories button {
        width: 165px;
        height: 50px;
        border: 1px solid #CACDD8;
        outline: none;
        border-radius: 8px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 12px 8px;
        color: #B0B8C2;
        font-family: Inter;
        font-size: 12px;
        font-weight: 600;
        line-height: 25px;
        text-align: center;
        background-color: var(--white-text);
    }

    .search-categories p {
        font-family: Inter;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        text-align: left;
    }

    .highlight {
        color: var(--primary-blue);
        font-family: Inter;
        font-weight: 700;
        line-height: 20px;
        text-align: left;
    }

    .sort-section {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 900px;
        height: 50px;
        color: #B0B8C2;
    }

    .sort-section p {
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        width: 65%;
        color: #B0B8C2;
    }  

    /* === SORT CATEGORIES === */
    .sort-categories {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 70%;
        max-width: 750px;
        height: 50px;
        margin-bottom: 2rem
    }

    .sort-categories .sort-category {
        display: flex;
        flex-direction: row;
        align-items: center;
        border-radius: 20px;
        padding: 10px 15px;
        font-size: 14px;
        font-weight: 400;
        background-color: var(--light-blue-bg);
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
        justify-content: space-between;
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
        font-size: 12px;
        font-weight: 600;
        line-height: 25px;
        text-align: center;
        background-color: transparent;
    }

    /* === ITEMS SECTION === */
    .items-section {
        width: 100%;
        height: 90%;
        max-height: 1180px;
        display: flex;
        flex-direction: column;
    }

    .items-container {
        width: 100%;        
        height: 100%;
        max-height: 350px;
        display: flex;
        flex-direction: column;
        justify-content: left;
    }

    .items {
        width: 100%;        
        height: 100%;
        margin-bottom: 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
</style>