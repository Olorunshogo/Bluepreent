
<script setup>
    // import boxicon from 'boxicons'; 

    // import { ref, computed, onMounted, onUnmounted } from 'vue';

    // import GraduationIcon from './icons/GraduationIcon.vue';
    // import LocationIcon from './icons/LocationIcon.vue';
    // import TimesIcon from './icons/TimesIcon.vue';
    // import SearchIcon from './icons/SearchIcon.vue';
    // import ChevrondownIcon from './icons/ChevrondownIcon.vue';
    // import PlusIcon from './icons/PlusIcon.vue';

    // const selectedOption = ref("");

    // DROPDOWN

    // Declaring the variables
    // const states = ref([]); 
    // const searchTerm = ref('');
    // const showDropdown = ref(false);

    // Computed property to filter options based on searchTerm
    // const filteredOptions = computed(() => {
    //     if (!searchTerm.value) return [];
    //         return states.value.filter(option => 
    //             option.State.toLowerCase().includes(searchTerm.value.toLowerCase())
    //     );
    // });

    // Function to handle input event
    // const onInput = () => {
    //     showDropdown.value = true;
    // };

    // Function to handle search button click
    // const handleSearch = () => {
    //     // Currently, it just shows dropdown based on input value and matches it with the first search result
    //     const matchedOptions = filteredOptions.value;
    //     if(matchedOptions.length) {
    //         selectOption(matchedOptions[0])
    //     }
    //     showDropdown.value = true;
    // };

    // Computed property to show oly the first 6 results
    // const limitedOptions = computed(() => {
    //     return filteredOptions.value.slice(0, 6);
    // })

    // Function to update searchTerm and close dropdown
    // const selectOption = (option) => {
    //     searchTerm.value = option.State;
    //     onInput.value = option;
    //     showDropdown.value = false;
    // };

    // Close the dropdown when clicking outside
    // const closeDropdown = (event) => {
    //     const dropdownContainer = document.querySelector('.dropdown-container');
    //     if (dropdownContainer && !dropdownContainer.contains(event.target)) {
    //         showDropdown.value = false;
    //     }
    // };

    // Fetch data from external file on mount
    // onMounted(async () => {
    //     try {
    //         const response = await fetch('states.json');
    //         states.value = await response.json();
    //         document.addEventListener('click', closeDropdown)
    //     } catch (error) {
    //         console.log('Error loading states: ', error)
    //     }
    // });

    // Add event listener to document
    // document.addEventListener('click', closeDropdown);

    // Cleanup event listener when component unmounts
    // onUnmounted(() => {
    //     document.removeEventListener('click', closeDropdown);
    // });

</script>

<template>    
    <div>
        <section>
            <div class="container">
                <div class="outer">
                    <div class="state" title="State">
                        <div>
                            <!-- <box-icon name='current-location'></box-icon> -->
                            <label >
                                <span><i class='bx bx-current-location'></i></span>
                                <input type="text" placeholder="State"
                                    id="state-input" name="State" aria-labelledby="State" 
                                    aria-placeholder="State" autocomplete="new-state"
                                />
                                <span class="arrows"></span>
                            </label>

                            <ul class="dropdown">
                                <li>Some value is here</li>
                                <li>Option 2</li>
                                <li>Option 3</li>
                            </ul>
                        </div>
                    </div>

                    <div class="region" title="Region">                        
                        <label>
                            <span><i class='bx bx-current-location'></i></span>
                            <input type="text" placeholder="Region" 
                                id="state-input" name="State" aria-labelledby="State" 
                                aria-placeholder="State" autocomplete="new-state"
                            />
                            <span class="arrows"></span>
                        </label>
                        <ul class="dropdown">
                            <li>Some value is here</li>
                            <li>Option 2</li>
                            <li>Option 3</li>
                        </ul>
                    </div>
                </div>

                
                <div class="student">
                    <p>Are you a student?</p>
                    <div>
                        <div title="Institution">
                            <label for=institution-input>
                                <span class="icons"><i class='bx bxs-graduation'></i></span>
                                <input type="text" placeholder="Institution"
                                    id="institution-input" name="Institution" aria-labelledby="State" 
                                    aria-placeholder="Institution" autocomplete="new-institution"
                                />
                            </label>
                        </div>
                        <span class="arrows"></span>
                    </div>
                    <ul class="dropdown">
                        <li>Some value is here</li>
                        <li>Option 2</li>
                        <li>Option 3</li>
                    </ul>
                </div>

                
            </div>

            <!-- <div class="hero-search-container">
        
                <div class="search-input">
                    <i class="icons graduation">
                        <GraduationIcon />
                    </i>
                    <input type="text" id="heroSearch" v-model="searchTerm" 
                        @input="onInput" @focus="showDropdown.value = true"
                        placeholder="Locate Buyers Nearby: Search by State &amp; Location"
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
                            <input type="text" v-model="selectedOption" />
                            <i class="icons times"><TimesIcon /></i>    
                        </div>
                    </div>

                    <div>
                        <i class="icons chev-down"><ChevrondownIcon /></i>
                    </div> 
                </div>
            </div>

            <div class="hero-select-container">
                <select v-model="selectedOption">
                    <option value="" disabled>Please select one option</option>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                    <option value="Option 4">Option 4</option>
                    <option value="Option 5">Option 5</option>
                </select>
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
                        <input type="text" name="" id="additionalStates" placeholder="Enter 'Rivers state' " />
                    </div>
                </div>                

                
            </div> -->
        </section>
    </div>
</template>

<style lang="css" scoped>
    section {
        width: 100%;
        height: 100%;
    }

    .container {
        display: grid;
        grid-template-columns: repeat(1, 1fr);       
        height: 100%;
        gap: 2rem;
    }

    .container .outer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: fit-content;
        border-radius: 8px;
        margin: auto 0;
        background-color: var(--primary-bg-colour);
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }

    .state {
        width: 65%;
        display: flex;
        flex-direction: column;
    }

    .state > div,
    .region,
    .student > div > div {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 4px 4px 4px 8px;
        width: 100%;
        height: 56px;
        border-radius: 8px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    }

    .outer label,
    .student label {
        display: flex;
        flex-direction: row;
        justify-items: center;
        align-items: center;
        width: 100%;
        height: auto;
        border-radius: 8px;
        cursor: pointer;
        margin: auto 0;
        border: 1px solid #B0B8C2;
    }

    i {
        font-size: 1.25rem;
        width: 30px;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    label input[type=text] {
        border: none;
        outline: none;
        font-size: var(--hero-search-font-size);
        border-radius: 8px;
        padding-left: 0.5rem;
        width: 100%;
        height: 40px;
        opacity: 0.85;
        color: var(--black-text);
        transition: var(--trans-05-ease-in-out);
        position: relative;
        background-color: transparent;
        cursor: pointer;
    }

    label input[type=text]::placeholder {
        font-size: var(--hero-search-font-size);
    }

    .container .student > div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: fit-content;
        border-radius: 8px;
        margin: auto 0;
        background-color: var(--primary-bg-colour);
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }

    .state > div .dropdown,
    .region .dropdown,
    .student .dropdown {
        position: absolute;
        top: 0;
        left: 0;
        width: 98%;
        margin: auto;
        list-style: none;
        text-decoration: none;
        font-size: var(--hero-search-font-size);
        color: var(--icon-grey);
        background-color: var(--primary-bg-colour);
        visibility: hidden;
        opacity: 0;
        display: none;
        position: relative;
        z-index: 2;
        padding: 0.5rem;
        cursor: pointer;
        border-radius: 8px;
        transition: opacity 0.3s, transform 0.3s;
        transform: translateY(-20px);
    }

    .state > div:focus-within > .dropdown,
    .region:focus-within > .dropdown,
    .student:focus-within .dropdown {
        visibility: visible;
        opacity: 1;
        display: flex;
        flex-direction: column;
        transform: translateY(0);
    }

    label:focus-within {
        border: 1px solid var(--primary-blue);
        background-color: var(--light-blue-bg);
    }

    .region {
        width: 35%;
    }

    .dropdown li {
        border-radius: 8px;
        padding: 4px;
        opacity: 1;
    }
    
    .dropdown li:hover {
        background-color: #eee;
        border-radius: 8px;
        opacity: 0.6;
    }

    .container .arrows {
        width: 0;
        height: 0;
    }

    .arrows::before {
        content: "\1F891";
        font-size: 1.5rem;
        position: relative;
        top: -32px;
        right: 21px;
        color: var(--black-text);
        z-index: 24;
    }

    .arrows::after {
        content: "\1F893";
        font-size: 1.5rem;
        position: relative;
        bottom: 5px;
        right: 35px;
        color: var(--black-text);
    }   

    .student p {
        font-size: var(--hero-font-size);
        font-weight: 600;
        color: var(--white-text);
        opacity: 0.9;
        font-family: "Inter", sans-serif;
        margin-bottom: 1rem;
    }

    @media (max-width: 760px) {
         .container .region,
         .container .state {
            width: 48%;
        }

        .hero-search-container { 
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 0; 
            background-color: var(--primary-blue);
        }

        .hero-search-container i { 
            padding: 0 8px;
            font-size: 0.9rem;
            width: 40px;
        }

        .search-input {
            height: 58px;
            width: 100%;
            border-radius: 8px;
            border: 1px solid #eee;
            margin-bottom: 0.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: var(--primary-bg-colour);
        }

        .search-input input[type=text] {
            width: 100%;
            /* height: 46px; */
            height: 90%;
            padding: 0 12px 0 16px;
            margin-left: 0px;
            margin-bottom: 8px;
            margin: 0 auto;
        }

        .search-input input[type=text]::placeholder {
            font-weight: 400;
        }

        .search-input .button-container{
            width: 30px;
        }

        .search-icon {
            display: flex;
            align-items: center;
            width: 100%;
            height: auto;
            display: flex;
            justify-items: flex-end;
        }

        /* === SEARCH RESULT SECTION === */
        .search-result {
            height: 58px;
            width: 100%;
            padding: 0 0 0 0;
            border: 1px solid #eee;
            border-radius: 8px;
            background-color: var(--primary-bg-colour);
        }

        .search-result .result-input {
            width: 100%;
        }

        .search-result .result-input div {
            width: 100%;
            background-color: transparent;
        }

        .search-result input[type=text] {
            width: 100%;
            height: 46px;
        }

        .search-result .chev-down {
            display: flex;
            justify-items: flex-end;
        }

        /* === HERO SELECT === */
        .hero-select-container {
            display: flex;
            align-items: center;
            width: 100%;
            height: 50px;
            outline: none;
            border: none;
            margin-top: 1rem;
        }

        .hero-select-container select {
            display: flex;
            justify-content: space-between;
            width: 100%;
            height: 50px;
            outline: none;
            border: 1px solid #eee;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 500;
            padding: 10px 12px 10px 1rem;
        }

        .hero-select-container select option {
            border-bottom: 1px solid #eee;
            font-size: 14px;
            padding: 8px 0;
            border-bottom: 1px solid #F2F4F7;
            padding: 10px 12px 10px 16px;
            margin-bottom: 1rem;
        }


        /* === DROPDOWN SECTION === */
        .dropdown-container {
            max-width: 100%;
            width: 90%;         
        }

        .dropdown-container .enter-state {
            max-width: 100%;
            width: 90%;
            max-height: 70px;
        }

        .dropdown-container .enter-state input[type=text] {
            height: 40px;
            margin-left: 15px;
        } 

    }  
</style>
