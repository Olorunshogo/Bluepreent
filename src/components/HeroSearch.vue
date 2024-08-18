
<script setup>
    import { ref, computed, onMounted, onUnmounted } from 'vue'


    import GraduationIcon from './icons/GraduationIcon.vue'
    import LocationIcon from './icons/LocationIcon.vue'
    import TimesIcon from './icons/TimesIcon.vue'
    import SearchIcon from './icons/SearchIcon.vue'
    import ChevrondownIcon from './icons/ChevrondownIcon.vue'
    import PlusIcon from './icons/PlusIcon.vue'

    // DROPDOWN

    // Declaring the variables
    const states = ref([]); 
    const searchTerm = ref('');
    const showDropdown = ref(false);

    // Computed property to filter options based on searchTerm
    const filteredOptions = computed(() => {
        if (!searchTerm.value) return [];
            return states.value.filter(option => 
                option.State.toLowerCase().includes(searchTerm.value.toLowerCase())
        );
    });

    // Function to handle input event
    const onInput = () => {
        showDropdown.value = true;
    };

    // Function to handle search button click
    const handleSearch = () => {
        // Currently, it just shows dropdown based on input value and matches it with the first search result
        const matchedOptions = filteredOptions.value;
        if(matchedOptions.length) {
            selectOption(matchedOptions[0])
        }
        showDropdown.value = true;
    };

    // Computed property to show oly the first 6 results
    const limitedOptions = computed(() => {
        return filteredOptions.value.slice(0, 6);
    })

    // Function to update searchTerm and close dropdown
    const selectOption = (option) => {
        searchTerm.value = option.State;
        onInput.value = option;
        showDropdown.value = false;
    };

    // Close the dropdown when clicking outside
    const closeDropdown = (event) => {
        const dropdownContainer = document.querySelector('.dropdown-container');
        if (dropdownContainer && !dropdownContainer.contains(event.target)) {
            showDropdown.value = false;
        }
    };

    // Fetch data from external file on mount
    onMounted(async () => {
        try {
            const response = await fetch('states.json');
            states.value = await response.json();
            document.addEventListener('click', closeDropdown)
        } catch (error) {
            console.log('Error loading states: ', error)
        }
    });

    // Add event listener to document
    document.addEventListener('click', closeDropdown);

    // Cleanup event listener when component unmounts
    onUnmounted(() => {
        document.removeEventListener('click', closeDropdown);
    });

    

</script>

<template>
    
    <div>
        <div class="hero-search-container">
        
            <div class="search-input">
                <i class="icons graduation">
                    <GraduationIcon />
                </i>
                <input type="text" id="heroSearch" v-model="searchTerm" 
                    @input="onInput" @focus="showDropdown.value = true"
                    placeholder="Locate Buyers Nearby: Search by State & Location"
                />
                <div class="button-container">
                    <button @click="handleSearch">
                        <i class="icons search-icon">
                            <SearchIcon />
                        </i>
                    </button>
                </div>
            </div>

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

        <div class="dropdown-container">

            <div 
                v-if="showDropdown && filteredOptions.length"
                class="dropdown"
                >
                
                <div 
                    v-for="option in limitedOptions" 
                    :key="option.id" 
                    class="dropdown-item" 
                    @click="selectOption(option)"
                >
                    {{ option.Capital }}, {{ option.State }}
                </div>

                <div class="enter-state">
                    <span><i><PlusIcon /></i></span>
                    <input type="text" name="" id="additionalStates" placeholder="Enter 'Rivers state' ">
                </div>
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
        padding: 10px 8px;  
        width: 100%; 
        height: auto;
        position: relative;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }

    .hero-search-container i { 
        color: var(--icon-grey);
        display: flex;
        align-items: center;
        justify-items: center;
        font-weight: 400;
        padding: 0 20px;
        font-size: 1.2rem;
    }

    .search-input {
        height: 76px;
        width: 60%;
        padding: 0 4px 0 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-self: center;
        border-right: 2px solid #ddd;
    }

    .graduation {
        /* position: absolute;
        top: 35%; */
        position: relative;
        left: 8px;        
    }

    .search-input input[type=text] {
        width: 80%;
        padding: 0 12px 0 16px;
        margin-left: 20px; 
        height: 100%;
        border: none;
        border-radius: 8px;
        outline: none;
        display: flex;
        flex-direction: column;
        justify-self: center;
        color: black;
        font-size: 14px;
        font-weight: 400;
        caret-color: black;
        transition: all 0.5s ease-in-out;
        cursor: text;
    }

    input[type=text]:focus {
        width: 85%;
        /* box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px; */
    }
    input[type=text]::placeholder {
        color: #B0B8C2;
        font-size: 14px;
        font-weight: 600;
    }

    .search-input .button-container{
        display: flex;
        align-items: center;
        width: 40px;
        height: auto;
    }

    .search-input button {
        display: flex;
        align-items: center;
        background-color: transparent;
        width: 100%;
        height: auto;
        border: none;
        outline: none;
    }

    .search-icon {
        display: flex;
        align-items: center;
        width: 100%;
        height: auto;
    }

    /* === SEARCH RESULT SECTION === */
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
        width: 80%;
        max-width: 350px;
    }

    .search-result .result-input div {
        width: 90%;
        display: flex;
        flex-direction: row;
        margin: 0 8px;
    }

    .search-result input[type=text] {
        width: 100%;
        height: 40px;
        border: none;
        border-radius: 8px;
        outline: none;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        color: black;
        caret-color: var(--primary-blue);
        font-size: 14px;
        background-color: var(--light-blue-bg);
        transition: all 0.5s ease-in-out;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

    }

    .search-result i {
        display: flex;
        align-items: center;
        font-size: 22px;
        color: var(--icon-grey);
    }

    .search-result .location {
        display: flex;
        justify-self: left;
        align-items: left;
    }

    .search-result .times {
        display: flex;
        justify-content: flex-end;
        position: relative;
        right: 40px;
    }


    /* === DROPDOWN SECTION === */
    .dropdown-container {
        max-width: 690px;
        width: 60%;
        max-height: 234px;
        height: fit-content;
        position: relative;
        top: -5px;
        left: 2%;
        border-radius: 2px;
        cursor: default;
        border: 1px solid #F2F4F7;
        z-index: 3;
        font-size: 14px;
    }

    .dropdown-container .dropdown {
        width: 100%;
        max-height: 160px;
        display: flex;
        flex-direction: column;
        justify-items: center;
    }

    .dropdown-container .dropdown .dropdown-item {
        padding: 8px 0;
        border-bottom: 1px solid #F2F4F7;
        padding: 10px 12px 10px 16px;
    }

    .dropdown-container .dropdown .dropdown-item:hover {
        background-color: var(--light-blue-bg);
    }

    .dropdown-container .enter-state {
        max-width: 706px;
        width: 90%;
        max-height: 74px;
        height: 20%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: left;
        padding: 10px 12px 10px 16px;
    }

    .dropdown-container .enter-state span {
        font-size:12px;
        width: 15px;
        height: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .dropdown-container .enter-state span i {
        font-size: 12px;
    }

    .dropdown-container .enter-state input[type=text] {
        width: 100%;
        height: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: none;
        outline: none;
        margin-left: 40px;
        font-size: 14px;
        font-weight: 400;
    } 

    .dropdown-container .enter-state input[type=text]::placeholder {
        font-size: 14px;
        font-weight: 600;
    }
    
    @media  (max-width: 1055px) {
        .hero-search-container { 
            padding: 7px 5px; 
        }

        .hero-search-container i { 
            padding: 0 16px;
            font-size: 0.85rem;
        }

        .search-input {
            height: 54px;
        }

        .graduation {
            position: relative;
            left: 6px;        
        }

        .search-input input[type=text] {
            padding: 0 9px 0 12px;
            margin-left: 16px;
            font-size: 13px;
        }

        input[type=text]:focus {
            width: 85%;
        }

        input[type=text]::placeholder {
            font-size: 13px;
        }

        .search-input .button-container{
            width: 30px;
        }

        /* === SEARCH RESULT SECTION === */
        .search-result {
            height: 54px;
        }

        .search-result .result-input {
            max-width: 250px;
        }

        .search-result .result-input div {
            margin: 0 6px;
        }

        .search-result i {
            font-size: 22px;
        }

        .search-result .times {
            right: 40px;
        }


        /* === DROPDOWN SECTION === */
        .dropdown-container {
            top: 0px;
            font-size: 13px;
        }

        .dropdown-container .dropdown .dropdown-item {
            padding: 6px 0;
            padding: 8px 9px 8px 12px;
        }

        .dropdown-container .enter-state {
            max-height: 52px;
            padding: 8px 9px 8px 12px;
        }

        .dropdown-container .enter-state span {
            font-size: 12px;
            width: 12px;
            height: 12px;
        }

        .dropdown-container .enter-state span i {
            font-size: 11px;
        }

        .dropdown-container .enter-state input[type=text] {
            height: 35px;
            margin-left: 30px;
            font-size: 13px;
        } 

        .dropdown-container .enter-state input[type=text]::placeholder {
            font-size: 13px;
            font-weight: 500;
        }
        
    }

    

    

</style>
