
<script setup>
    import { ref } from 'vue';

    // CATEGORY SECTION
    const categoryInput = ref("");
    const showCategory = ref(true);
    const toggleCategory = () => {
        showCategory.value = !showCategory.value;
    };

    // PRICE SECTION
    const showPrice = ref(true);
    const togglePrice = () => {
        showPrice.value = !showPrice.value;
    };
    const minPrice = ref("");
    const maxPrice = ref("");

    // CONDITION SECTION
    const conditionInput = ref("");
    const showCondition = ref(true);
    const toggleCondition = () => {
        showCondition.value = !showCondition.value;
    }

    // AVAILABILITY SECTION
    const availabilityInput = ref("");
    const showAvailability = ref(true);
    const toggleAvailability = () => {
        showAvailability.value = !showAvailability.value;
    }

    // LOCATION SECTION
    const locationInput = ref("");
    const showLocation = ref(true);
    const toggleLocation = () => {
        showLocation.value = !showLocation.value;
    }

</script>


<template>
    <div class="container">
        <div class="header">
            <h3>Filters</h3>
            <button class="reset-clear">Clear Filters</button>
        </div>

        <div class="categories">
            <div v-on:click="toggleCategory">
                <h4>Categories</h4>
                <i :class="['bx bx-chevron-up', {'rotate-icon': !showCategory}]"></i>
            </div>

            <div class="radio" v-show="showCategory">
                <div>
                    <input 
                        type="radio" id="bed-mattrass" value="Bed/Mattrass" name="category" 
                        v-model="categoryInput" @change="updateCategoryOutput"
                    />
                    <label for="bed-mattrass">Bed/Mattrass</label>
                </div>

                <div>
                    <input 
                        type="radio" id="housing" value="Housing" name="category" 
                        v-model="categoryInput" @change="updateCategoryOutput"
                    />
                    <label for="housing">Housing</label>
                </div>

                <div>
                    <input 
                        type="radio" value="Kitchen Utensils" id="kitchen" name="category" 
                        v-model="categoryInput" @change="updateCategoryOutput"
                    />
                    <label for="kitchen">Kitchen Utensils</label>
                </div>
                    
                <div>
                    <input 
                        type="radio" value="Furniture" id="furniture" name="category"
                        v-model="categoryInput" @change="updateCategoryOutput"
                    />
                    <label for="furniture">Furniture</label>
                </div>

                <div>
                    <input 
                        type="radio" value="Electronics" id="electronics" name="category"
                         v-model="categoryInput" @change="updateCategoryOutput"
                    />
                    <label for="electronics">Eletronics</label>
                </div>
            </div>

        </div>

        <div class="price">
            <div @click="togglePrice"> 
                <h4>Price</h4>
                <button class="reset-clear">Reset</button>
            </div>

            <div class="input" v-show="showPrice">
                <div>
                    <label for="minimum">Min</label>
                    <div>
                        <span class="naira">₦</span>
                        <input 
                            v-model="minPrice" type="text" name="price"
                            id="maximum" placeholder="0"
                        />
                    </div> 
                </div>

                <div>
                    <label for="maximum">Max</label>
                    <div>
                        <span class="naira">₦</span>
                        <input 
                            v-model="maxPrice" type="text" name="price"
                            id="maximum" placeholder="1000"
                        />
                    </div> 
                </div>
            </div>
        </div>

        <div class="condition">
            <div v-on:click="toggleCondition">
                <h4>Condition</h4>
                <i :class="['bx bx-chevron-up', {'rotate-icon': !showCondition}]"></i>
            </div>

            <div class="radio" v-show="showCondition">
                <div>
                    <input 
                        type="radio" name="condition" id="brand-new" 
                        value="Brand New" v-model="conditionInput"
                    />
                    <label for="brand-new">Brand New</label>
                </div>

                <div>
                    <input 
                        type="radio" name="condition" id="fairly-used"
                        value="Fairly Used" v-model="conditionInput" 
                    />
                    <label for="fairly-used">Fairly Used</label>
                </div>

                <div>
                    <input 
                        type="radio" name="condition" id="grade-new" 
                        value="Grade New" v-model="conditionInput" 
                    />
                    <label for="grade-new">Grade New</label>
                </div>

                <div>
                    <input 
                        type="radio" name="condition" id="grade-used" 
                        value="Grade Used" v-model="conditionInput" 
                    />
                    <label for="grade-used">Grade Used</label>
                </div>

                <div>
                    <input 
                        type="radio" name="condition" id="almost-new" 
                        value="Almost New" v-model="conditionInput" 
                    />
                    <label for="almost-new">Almost New</label>
                </div>
            </div>
        </div>

        <div class="availability">
            <div @click="toggleAvailability">
                <h4>Availability</h4>
                <i :class="['bx bx-chevron-up', {'rotate-icon': !showAvailability} ]"></i>
            </div>

            <div class="radio" v-show="showAvailability">
                <div>
                    <input 
                        type="radio" name="availability" id="first-week" 
                        value="First Week" v-model="availabilityInput" 
                    />
                    <label for="first-week">First Week</label>
                </div>

                <div>
                    <input 
                        type="radio" name="availability" id="second-week" 
                        value="Second Week" v-model="availabilityInput" 
                    />
                    <label for="second-week">Second Week</label>
                </div>

                <div>
                    <input 
                        type="radio" name="availability" id="third-week" 
                        value="Third Week" v-model="availabilityInput" 
                    />
                    <label for="third-week">Third Week</label>
                </div>

                <div>
                    <input 
                        type="radio" name="Availability" id="fourth-week" 
                        value="Fourth Week" v-model="availabilityInput" 
                    />
                    <label for="fourth-week">Fourth Week</label>
                </div>

                <div>
                    <input 
                        type="radio" name="Availability" id="fifth-week" 
                        value="Fifth Week" v-model="availabilityInput" 
                    />
                    <label for="fifth-week">Fifth Week</label>
                </div>
            </div>
        </div>

        <div class="location">
            <div v-on:click="toggleLocation">
                <h4>Location</h4>
                <i :class="['bx bx-chevron-up', {'rotate-icon': !showLocation} ]"></i>
            </div>

            <div class="radio" v-show="showLocation">
                <div>                       
                    <label for="location">
                        <i class='bx bxs-graduation'></i>
                        <input 
                            type="text" name="Location" id="location"
                            placeholder="Institution" v-model="locationInput"
                        />
                    </label>
                </div>
                    
            </div>
        </div>

        <div class="apply-container">
            <button>Apply Filters &nbsp;<span class="count">(4)</span></button>
        </div>      

    </div>
</template>

<style lang="css" scoped>
    /* === THE WHOLE CONTAINER === */ 
    .container {
        color: var(--black-text);
        margin: 0.5rem 0 1rem 0;
        padding: 1rem 10px 1rem 1rem;
        width: 100%;
        height: fit-content;
        padding-bottom: 1rem;
        position: relative;
    }

    /* === HEADER SECTION === */
    .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-self: center;
        width: 100%;
        /* color: #F5F7FF; */
        margin-bottom: 1rem;
    }

    .header h3 {
        font-family: Inter;
        font-size: var(--cat-side-h3);
        font-weight: 600;
        line-height: 20px;
        text-align: center;
        color: var(--black-text);
        display: flex;
        align-self: center;
    } 

    /* === The RESET and CLEAR BUTTONS */
    .reset-clear {
        font-family: Inter;
        font-size: 11px;
        font-weight: 500;
        text-align: center;
        color: var(--primary-blue);
        text-decoration: unone;
        display: flex;
        flex-direction: column;
        align-self: center;
        cursor: pointer;
        outline: none;
        border: none;
        background-color: transparent;
        transition: var(--trans-05-ease-in-out);
    }

    .reset-clear:hover {
        text-decoration: underline;
    }

    label {
        cursor: pointer;
    }

    i {        
        color: #515456;
        display: flex;
        align-items: center;
        cursor: pointer;
        margin-right: 0.5rem;
        font-size: 1.5rem;
    }

    h4 {
        font-family: Inter;
        font-size: var(--cat-side-h4);
        font-weight: 500;
        line-height: 19px;
        text-align: left;
        color: var(--black-text);
        display: flex;
        flex-direction: row;
        align-self: center;
        justify-content: center;
    }

    .categories,
    .price,
    .condition,
    .availability,
    .location {
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        margin: 1rem 0;
    }

    .categories > div:nth-child(1),
    .price > div:nth-child(1),
    .condition > div:nth-child(1),
    .availability > div:nth-child(1),
    .location > div:nth-child(1) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1rem;
        cursor: pointer;
    }

    .radio div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-items: center;
        transition: all 0.3s ease;
    }

    .radio input[type=radio] {
        display: flex;
        align-items: center;
        width: 15px;
        height: 15px;
        margin-right: 8px;
        cursor: pointer;
    }

    .radio label {
        font-size: 13px;
        cursor: pointer;
    }

    .rotate-icon {
        transition: transform 0.3s ease;
        transform: rotate(-180deg); /* Rotate the icon */
    }

    .price .input {
        font-family: Inter;
        font-size: 13px;
        font-weight: 600;
        line-height: 14px;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        position: relative;
    }

    .price .input div {
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 50%;
        height: 100%;
    }

    .price .input div label {
        font-size: 12px;
        width: 100%;
        height: 100%;
    }

    .price .input div div,
    .location label {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 40px;
        background-color: var(--cat-side-label-bg);
        border-radius: 8px;
        cursor: pointer;
        padding-left: 0.3rem;
        /* border: 1px solid #F5F5F7; */
        border: 1px solid #CACDD8;
    }

    .price .input div div {
        width: 100%;
        max-width: 100px;
    }

    .price .input div div:hover,
    .location label:hover {
        background-color: var(--secondary-bg);
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    }

    .price .input div div:focus,
    .location label:focus {
        background-color: var(--secondary-bg);
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        cursor: text;
    }

    .price .input .naira {
        font-family: Inter;
        font-size: 1rem;
        font-weight: 600;
        width: 20px;
        height: 100%;
        display: flex;
        align-items: center;
    }

    .price input[type=text],
    .location input[type=text] {
        display: flex;
        align-items: center;
        background: transparent;
        border: none;
        outline: none;
        height: 100%;
        cursor: pointer;
    }

    .price input[type=text] {
        width: 100%;
        max-width: 100px;
    }

    .price input[type=text]:focus,
    .location input[type=text]:focus {
        cursor: text;
    }

    .price input[type=text]::placeholder,
    .location input[type=text]::placeholder {
        font-family: Inter;
        font-size: 0.8rem;
        font-weight: 400;
        text-align: left;
    } 

    .location label {
        width: 100%;
    }

    .bxs-graduation {
        font-size: 1.2rem;
        height: 100%;
        margin: auto;
        display: flex;
        align-items: center;
    }

    .location input[type=text] {
        cursor: pointer;
        transition: all 0.5s ease;
        width: 100%;
    }

    .location input[type=text]:focus {
        background: transparent;
        cursor: text;
    }

    .count {
        font-family: Inter;
        /* font-size: 0.75rem;
        font-weight: 400;
        text-align: left; */
        /* color: var(--primary-blue); */
        position: relative;
    }

    /* === The APPLY FILTER BUTTON */
    .apply-container {
        margin-top: 2rem;
        width: 100%;
        height: 36px;
        position: relative;
        display: flex;
        align-items: center;   
    }

    .apply-container button {
        color: var(--white-text);
        background-color: var(--primary-blue);
        outline: none;
        border: none;
        border-radius: 8px;
        width: 100%;
        height: 36px;
        font-family: Inter;
        font-size: 11px;
        font-weight: 500;
        margin-top: 2rem;
        cursor: pointer;
        color: var(--white-text);
        opacity: 0.9;
        background-color: var(--primary-blue);
        transition: opacity 0.3s ease;
    }

    .apply-container button:hover {
        opacity: 1;
        background-color: #093856;
    }
</style>