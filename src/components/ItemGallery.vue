
<script setup>
    import { ref } from 'vue'
    import CustomItem from './CustomItem.vue'
    import ChevrondownIcon from './icons/ChevrondownIcon.vue';

    const collection = ref([
        { id: 1, title: 'Bed/Matrass', price: 1000, location: 24, condition: '2015' },
        { id: 2, title: 'Chairs', price: 1500, location: 24, condition: '2020' },
        { id: 3, title: 'Furniture', price: 2000, location: 24, condition: '2025' },
        { id: 4, title: 'Mirrors', price: 2500, location: 24, condition: '2030' }
    ]);

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

                <div>
                    <div class="box"></div>
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
    }

    .sort-section {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 900px;
        height: 50px;
        /* color: #CACDD8; */
        color: #B0B8C2;
    }

    .sort-section p {
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        width: 65%;
        color: #B0B8C2;
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

    }

    .search-categories p {
        font-family: Inter;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        text-align: left;
    }

    .search-categories .highlight {
        color: var(--primary-blue);
        font-family: Inter;
        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
        text-align: left;

    }

    .items-section {
        width: 100%;
        height: fit-content;
        max-height: 1090px;
        display: flex;
        flex-direction: column;
    }

    .items-container {
        width: 100%;        
        height: 100%;
        max-height: 344px;
        display: flex;
        flex-direction: column;
        justify-content: left;
    }

    .items {
        width: 100%;        
        height: 100%;
        gap: 30px;
        display: flex;
        flex-direction: row;
    }
</style>