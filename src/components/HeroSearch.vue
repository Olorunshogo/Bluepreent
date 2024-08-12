
<script setup>
    // import { ref, reactive, computed } from 'vue'
    // import { ref } from 'vue'

    import GraduationIcon from './icons/GraduationIcon.vue'
    import LocationIcon from './icons/LocationIcon.vue'
    import TimesIcon from './icons/TimesIcon.vue'
    import SearchIcon from './icons/SearchIcon.vue'
    import ChevrondownIcon from './icons/ChevrondownIcon.vue'

    // const stateList = reactive([
    //     {id: 1, State: "Abia State", Capital: "Umuahia" },
    //     {id: 2, State: "Adamawa State", Capital: "Yola" },
    //     {id: 3, State: "Akwa Ibom State", Capital: "Uyo" },
    //     {id: 4, State: "Anambra State", Capital: "Awka" },
    // ])

    // const filteredStateList = computed(() => {
    //     return stateList.value.filter((State) => State.value.match(/Foo/)
    //     )
    // })
        
    // const filteredStateList = computed({
    //    get() {
    //     return stateList.value.filter((State) => State.value.match(/search/))
    //    },
    //    set(newValue) {
    //         stateList.value = newValue.split("")
    //    }
    // })

</script>

<template>
    <div class="hero-search-container">
        
        <div class="search-input">
            <i class="icons graduation">
                <GraduationIcon />
            </i>
            <input type="text" id="heroSearch"
                placeholder="Locate Buyers Nearby: Search by State & Location"
            />
            <i class="icons search">
                <SearchIcon />
            </i>
        </div>

        <!-- <div class="search-input">
            <span class="graduation-icon">
                <GraduationIcon />
            </span>
            <input type="text" v-model="search" 
                id="heroSearch"
                placeholder="Locate Buyers Nearby: Search by State & Location"
            />
            <div class="item search" v-for="value in filteredStateList" :key="value.id">
                <p>{{ value.State }}</p>
            </div>
        </div>

        <div class="item error" v-if="search.length==0&&filteredStateList.length==0">
            <p>No results found</p>
        </div> -->

        <div class="search-result">

            <div class="result-input">
                <i><LocationIcon class="icons location" /></i>
                <div>
                    <input type="text" />
                    <i class="icons times"><TimesIcon /></i>    
                </div>
            </div>

            <div>
                <i class="icons chev-down"><ChevrondownIcon /></i>
            </div> 
        </div>
    </div>
</template>

<style lang="css" scoped>
    .hero-search-container { 
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-content: center;
        border: 1px solid var(--primary-blue);
        background-color: var(--primary-bg-colour);
        border-radius: 8px;
        padding: 15px 5px;  
        width: 100%;
        background-color: white; 
        position: relative;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    }

    .hero-search-container i { 
        color: var(--icon-grey);
        display: flex;
        align-items: center;
        justify-items: center;
        font-weight: 400;
    }

    .search-input {
        height: 76px;
        width: 60%;
        padding: 0 4px 0 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-self: center;
        border-right: 4px solid #ddd;
    }

    .graduation {
        color: var(--icon-grey);
        font-size: 1.2rem;
        position: absolute;
        left: 4px;
    }

    .search {
        font-size: 1.6rem;
        position: absolute;
        left: 56%;
    }

    .search-input input[type=text] {
        width: 90%;
        padding: 0 10px;
        margin-left: 50px;
        height: 100%;
        border: none;
        border-radius: 8px;
        outline: none;
        display: flex;
        flex-direction: column;
        justify-self: center;
        color: black;
        font-size: 14px;
        caret-color: black;
        transition: all 0.5s ease-in-out;
    }

    input[type=text]:focus {
        background-color: #ddd;
        width: 100%;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    }
    input[type=text]::placeholder {
        color: #B0B8C2;
        font-size: 14px;
        font-weight: 600;
    }

    .search-result {
        height: 76px;
        width: 40%;
        padding: 0 4px 0 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .search-result .result-input {
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-items: center;
        width: 60%;
    }

    .search-result .result-input div {
        width: 90%;
        display: flex;
        flex-direction: row;
        margin: 0 10px;
    }

    .search-result input[type=text] {
        width: 100%;
        /* padding: 0 50px; */
        height: 40px;
        border: none;
        border-radius: 1rem;
        outline: none;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        color: black;
        font-size: 14px;
        background-color: var(--light-blue-bg);
        transition: all 0.5s ease-in-out;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

    }

    .search-result .location {
        display: flex;
        justify-self: left;
        align-items: left;
        font-size: 22px;
        color: var(--icon-grey);
    }

    .search-result .times {
        display: flex;
        justify-content: flex-end;
        position: relative;
        right: 40px;
        font-size: 22px;
    }

    .search-result .chev-down {
        display: flex;
        color: var(--icon-grey);
    }
</style>
