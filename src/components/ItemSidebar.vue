
<script setup>
    import { ref } from 'vue';

    const category = ref("");
    const minRange = ref(10);
    const maxRange = ref(25000000);
    const condition = ref("");

    const avChecked = ref(false);
    const locationChecked = ref();

    import ChevrondownIcon from './icons/ChevrondownIcon.vue';
    import LocationIcon from './icons/LocationIcon.vue';  


</script>

<template>
    <div class="container">
        <div class="items-wrapper">
            <div class="header">
                <h3>Filters</h3>
                <button class="reset-clear">Clear Filter</button>
            </div>

            <div class="categories">
                <div>
                    <h4>Categories</h4>
                    <i><ChevrondownIcon /></i>
                </div>

                <div class="radio">
                    <!-- <div>Category: {{ category }}</div> -->

                    <div>
                        <input 
                            type="radio" id="bed-mattrass" 
                            value="Bed/Mattrass" v-model="category"
                            @change="updateCategoryOutput"
                        />
                        <label for="bed-mattrass">Bed/Mattrass</label>
                    </div>

                    <div>
                        <input 
                            type="radio" id="housing" 
                            value="Housing" v-model="category"
                            @change="updateCategoryOutput"
                        />
                        <label for="housing">Housing</label>
                    </div>

                    <div>
                        <input 
                            type="radio" value="Kitchen Items" 
                            id="kitchen" v-model="category"
                            @change="updateCategoryOutput"
                        />
                        <label for="kitchen">Kitchen Items</label>
                    </div>
                    
                    <div>
                        <input 
                            type="radio" value="Furniture" 
                            id="furniture" v-model="category"
                            @change="updateCategoryOutput"
                        />
                        <label for="furniture">Furniture</label>
                    </div>

                    <div>
                        <input 
                            type="radio" value="Electronics" 
                            id="electronics" v-model="category"
                            @change="updateCategoryOutput"
                        />
                        <label for="electronics">Eletronics</label>
                    </div>
                </div>
            </div>

            <div class="price">
                <div>
                    <h4>Price</h4>
                    <button class="reset-clear">Reset</button>
                </div>

                <div class="range">
                    <span>
                        <input v-model="minRange" type="range" 
                            id="range" min="10" max="2500000" value="500000"
                            step="50" oninput="500000"
                        > 
                    </span>

                    <span>
                        <input v-model="maxRange" type="range" 
                            id="range" min="2500000" max="5000000" value="1000000"
                            step="50" oninput="1000000"
                        > 
                    </span>
                </div>

                <div class="min-max">
                    <span><span class="naira-small">₦</span>10</span>
                    <span><span class="naira-small">₦</span>5000000</span>
                </div>

                <div class="min-max-values">
                    <span id="range-value"><span class="naira">₦</span> {{minRange }} &nbsp;-&nbsp;</span> 
                    <span id="range-value"><span class="naira">₦</span> {{maxRange }}</span>
                </div>

            </div>

            <div class="condition">
                <div>
                    <h4>Condition</h4>
                    <i><ChevrondownIcon /></i>
                </div>

                <div class="radio">
                    <!-- <div>Condition: {{ condition }}</div> -->

                    <div>
                        <input type="radio" id="brand-new" value="Brand New" v-model="condition" />
                        <label for="brand-new">Brand New <span class="count">(234)</span></label>
                    </div>

                    <div>
                        <input type="radio" id="fairly-used" value="Fairly Used" v-model="condition" />
                        <label for="fairly-used">Fairly Used <span class="count">(23)</span></label>
                    </div>
                </div>
            </div>

            <div class="availability">
                <div>
                    <h4>Availability</h4>
                    <i><ChevrondownIcon /></i>
                </div>

                <div class="radio">
                    <div>
                        <input type="radio" id="available-now" value="Available Now" v-model="avChecked" />
                        <label for="available-now">Available Now</label>
                    </div>

                    <div>
                        <input type="date" id="date" v-model="avChecked"
                             placeholder="Location" :disabled="avChecked"
                             :class="{ 'disabled': avChecked, 'enabled': !avChecked }"
                        />
                    </div>
                </div>
            </div>

            <div class="location">
                <div>
                    <h4>Location</h4>
                    <i><ChevrondownIcon /></i>
                </div>

                <div class="radio">
                    <div>
                        <input v-model="locationChecked" type="radio" 
                            id="location" value="Location" 
                        />
                        <label for="location">All <span class="count">(234)</span></label>
                    </div>

                    <div class="location-text">
                        <i><LocationIcon /></i>
                        <input type="text" id="location" 
                             placeholder="Location" :disabled="locationChecked"
                             :class="{ 'disabled': locationChecked, 'enabled': !locationChecked }"
                        />
                    </div>

                    
                </div>
            </div>

        </div>

        <div class="apply-container">
            <button>Apply Filters <span class="count">(4)</span></button>
        </div>

    </div>
</template>



<style lang="css" scoped>
    /* === THE WHOLE CONTAINER === */ 
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: var(--black-text);
        background-color: #FAFBFF;
        width: 100%;
        height: 100%;
        padding-bottom: 1rem;
        position: relative;
        left: 0;
        top: 0;
    } 

    .items-wrapper {
        display: flex;
        flex-direction: column;        
        padding: 2rem 10px 1rem 1rem;
        width: 100%;       
    }

    /* === HEADER SECTION === */
    .items-wrapper .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        max-height: 100px;
        color: #F5F7FF;
    }

     .items-wrapper .header h3 {
        font-family: Inter;
        font-size: var(--cat-side-h3);
        font-weight: 700;
        line-height: 20px;
        text-align: center;
        color: var(--black-text);
        display: flex;
        align-self: center;
    } 

    /* === The RESET and CLEAR BUTTON */
    .items-wrapper .reset-clear {
        font-family: Inter;
        font-size: 12px;
        font-weight: 500;
        line-height: 15.68px;
        text-align: center;
        color: var(--primary-blue);
        text-decoration: underline;
        display: flex;
        flex-direction: column;
        align-self: center;
        cursor: pointer;
        outline: none;
        opacity: 0.9;
        border: none;
        background-color: transparent;
        transition: var(--trans-05-ease-in-out);
    }

    .items-wrapper .reset-clear:hover {
        opacity: 1;
        transform: scale(0.97);
    }

    .items-wrapper label {
        font-size: var(--cat-side-label);
        cursor: pointer;
    }

    .items-wrapper > div {
        margin: 0.5rem 0;
    }   

    .items-wrapper i {
        background-color: transparent;
        color: #1A1A1A;
        font-weight: 600;
        font-size: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        outline: none;
        border: none;
        z-index: 4;
    }

    .items-wrapper h4 {
        font-family: Inter;
        font-size: var(--cat-side-h4);
        font-weight: 600;
        line-height: 19px;
        text-align: left;
        color: var(--black-text);
        display: flex;
        flex-direction: row;
        align-self: center;
        justify-content: center;
    }

    /* === CATEGORY SECTION === */
    .items-wrapper .categories {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 100%;
    }

    .items-wrapper .categories > div:nth-child(1),
    .items-wrapper .price > div:nth-child(1),
    .items-wrapper .condition > div:nth-child(1),
    .items-wrapper .availability > div:nth-child(1),
    .items-wrapper .location > div:nth-child(1) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 8px 0;
    }

    .items-wrapper .radio > div {
        display: flex;
        align-items: center;
        padding: 8px 4px;
        color: #515456;
    }

    .items-wrapper .radio input[type=radio] {
        display: flex;
        align-items: center;
        justify-content: center;
        width: var(--cat-side-radio);
        height: var(--cat-side-radio);
        background-color: var(--primary-blue);
        margin-right: 8px;
        cursor: pointer;
    }

    .disabled {
        cursor: not-allowed;
    }

    .enabled {
        cursor: text;
    }

    /* === PRICE SECTION === */
    .items-wrapper .price {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .items-wrapper .price .range {
        font-family: Inter;
        font-size: 12px;
        font-weight: 700;
        line-height: 14px;
        width: 100%;
        display: flex;
        flex-direction: row;
    }

    .items-wrapper .price .range span {
        max-width: 50%;
        height: 2px;
        background-color: transparent;
        outline: none;
        opacity: 0.9;
        -webkit-transition: 0.2s;
        transition: opacity 0.2s;
        display: flex;
        align-items: center;
        margin: 8px 0;
    }

    .items-wrapper .price .range span input[type=range] {
        width: 100%;
        height: 2px;
        background-color: var(--primary-blue);
        outline: none;
        opacity: 0.9;
        -webkit-transition: 0.2s;
        transition: opacity 0.2s;
        cursor: pointer;
    }

    .items-wrapper .price .range span,
    .items-wrapper .price .range input[type=range]:hover {
        opacity: 1;
    }

    .items-wrapper .price .range input[type=range]::-webkit-slider-thumb {
        width: 5px;
        height: 2px;
    }

    .items-wrapper .price .range input[type=range]::-webkit-slider-moz {
        width: 8px;
        height: 2px;

    }

    .items-wrapper .price .min-max {
        display: flex;
        padding: 8px 16px;
        font-size: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .items-wrapper .price .min-max-values,
    .items-wrapper .availability input[type=date],
    .items-wrapper .location-text {
        display: flex;
        align-items: center;
        margin: 8px 0;
        border-radius: 8px;
        border: 1px solid #E5E5E5;
        outline: none;
        background-color: #FFF;
        color: #1A1A1A;
        width: 100%;
        padding: 10px 12px 10px 16px;
        height: var(--cat-side-input-height);
        font-size: var(--cat-side-input-size);
        cursor: text;
    }

    .items-wrapper .price .min-max-values,
    .items-wrapper .availability input[type=date] {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .items .availability input[type=date]::placeholder,
    .items-wrapper .location-input input[type=text]::placeholder {
        font-family: Inter;
        font-size: 0.8rem;
        font-weight: 400;
        line-height: 17px;
        text-align: left;
        padding-left: 1rem;
    }

    .items-wrapper .price .min-max-values span {
        display: flex;
        align-items: center;
    }

    .items-wrapper .price .min-max span {
        display: flex;
        align-items: center;
    }

    .items-wrapper .price .naira {
        font-family: Inter;
        font-weight: 700;
        line-height: 1.5rem;
        text-align: left;
        color: #1A1A1A;
        display: flex;
        align-items: center;
        margin-right: 2px;
    }

    .items-wrapper .price .naira-small {
        font-family: Inter;
        font-size: 12px;
        font-weight: 700;
        line-height: 1.05rem;
        text-align: left;
        color: #1A1A1A;
        display: flex;
        align-items: center;
    }

    /* === LOCATION SECTION === */
    .items-wrapper .location-input i {
        padding-left: 2px;
        width: 15px;
    }

    .items-wrapper .location-text input[type=text] {
        border: none;
    }

    .items-wrapper span.count {
        font-family: Inter;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.1rem;
        text-align: left;
        color: var(--primary-blue);

    }

    /* === The APPLY FILTER BUTTON */
    .apply-container {
        font-family: Inter;
        font-size: 1rem;
        font-weight: 600;
        line-height: 1rem;
        text-align: center;
        padding: 1rem;
        color: var(--white-text);
        background-color: var(--primary-blue);
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        outline: none;
        border: none;
        border-radius: 8px;
        width: 100%;
        height: 50px;
        cursor: pointer;
    }

    .apply-container button {
        color: var(--white-text);
        background-color: transparent;
        outline: none;
        border: none;
        width: 100%;
        height: 100%;
        margin: auto;
    }
</style>