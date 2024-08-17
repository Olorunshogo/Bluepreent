
<script setup>
    import { ref } from 'vue';

    const category = ref("");
    const minRange = ref(10);
    const maxRange = ref(25000000);
    const condition = ref("");

    const avChecked = ref(false);
    const locationChecked = ref(false);

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
                    <div>Category: {{ category }}</div>

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

                    <!-- <div class="vector left">
                        <svg width="4" height="6" viewBox="0 0 4 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.0781249 3.01935L3.80785 5.30664L3.80785 0.732055L0.0781249 3.01935Z" fill="#5E5F65"/>
                        </svg>

                        <svg width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.02344 3.01971L0.293708 0.732422L0.293708 5.30701L4.02344 3.01971Z" fill="#5E5F65"/>
                        </svg>
                    </div> -->

                    <!-- <div class="vector right">
                        <svg width="4" height="6" viewBox="0 0 4 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.0781249 3.01935L3.80785 5.30664L3.80785 0.732055L0.0781249 3.01935Z" fill="#5E5F65"/>
                        </svg>

                        <svg width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.02344 3.01971L0.293708 0.732422L0.293708 5.30701L4.02344 3.01971Z" fill="#5E5F65"/>
                        </svg>
                    </div> -->

                
                    
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
                    <div>Condition: {{ condition }}</div>

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
                        <!-- <input type="date" id="date"> -->
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
                        <label for="Location">All <span class="count">(234)</span></label>
                    </div>

                    <div class="location-input">
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
            <button class="apply">Apply Filters <span class="count">(4)</span></button>
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
        color: black;
        background-color: #FAFBFF;
        width: 100%;
        height: 100%;
        padding-bottom: 1rem;
    } 

    .items-wrapper {
        display: flex;
        flex-direction: column;        
        padding: 2rem 10px 1rem 1rem;
        width: 100%;       
    }

    .items-wrapper > div {
        margin: 0.5rem 0;
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
        border: none;
        background-color: transparent;
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

    /* === HEADER SECTION === */
    .items-wrapper .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        max-height: 100px;
        color: #F5F7FF;
    }

    .items-wrapper .header h3 {
        font-family: Inter;
        font-size: 24px;
        font-weight: 700;
        line-height: 20px;
        text-align: center;
        color: var(--black-text);
        display: flex;
        align-self: center;
    }

    /* === CATEGORY SECTION === */
    .items-wrapper .categories {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: fit-content;
        max-height: 450px;
    }

    .items-wrapper h4 {
        font-family: Inter;
        font-size: 16px;
        font-weight: 600;
        line-height: 19px;
        text-align: left;
        color: var(--black-text);
        display: flex;
        flex-direction: row;
        align-self: center;
        justify-content: center;
    }

    .items-wrapper .categories > div:nth-child(1),
    .items-wrapper .price > div:nth-child(1),
    .items-wrapper .condition > div:nth-child(1),
    .items-wrapper .availability > div:nth-child(1),
    .items-wrapper .location > div:nth-child(1) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 8px 0;
    }

    .items-wrapper .radio > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 12px 6px;
        color: #515456;
        font-size: 1rem;
    }

    .items-wrapper .radio input[type=radio] {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 18px;
        height: 18px;
        background-color: var(--primary-blue);
        margin-right: 8px;
    }

    .disabled {
        cursor: not-allowed;
    }

    .enabled {
        cursor: text;
    }

    .items-wrapper .checkbox label {
        margin-left: 12px;
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
        opacity: 0.8;
        -webkit-transition: 0.2s;
        transition: opacity 0.2s;
        display: flex;
        align-items: center;
        margin: 8px 0;
    }

    .items-wrapper .price .range span input[type=range] {
        /* -webkit-appearance: none;
        appearance: none; */
        width: 100%;
        height: 2px;
        background-color: var(--primary-blue);
        outline: none;
        opacity: 0.8;
        -webkit-transition: 0.2s;
        transition: opacity 0.2s;
    }

    .items-wrapper .price .range input[type=range]:hover {
        opacity: 1;
    }

    .items-wrapper .price .range input[type=range]::-webkit-slider-thumb {
        /* -webkit-appearance: none;
        appearance: none; */
        width: 10px;
        height: 2px;
    }

    .items-wrapper .price .range input[type=range]::-webkit-slider-moz {
        /* -webkit-appearance: none;
        appearance: none; */
        width: 10px;
        height: 2px;

    }

    .items-wrapper .price .min-max {
        display: flex;
        margin: 8px 0;
        padding: 8px 16px;
        font-size: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .items-wrapper .price .min-max-values,
    .items-wrapper .availability input[type=date],
    .items-container .location-input input[type=text] {
        display: flex;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 8px 0;
        border-radius: 8px;
        border: 1px solid #E5E5E5;
        outline: none;
        background-color: #FFF;
        color: #1A1A1A;
        width: 100%;
        padding: 10px 12px 10px 16px;
        height: 50px;
    }

    .items .availability input[type=date]::placeholder,
    .items-container .location-input input[type=text]::placeholder {
        font-family: Inter;
        font-size: 14px;
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

    .items-container .price .naira {
        font-family: Inter;
        font-weight: 700;
        line-height: 24px;
        text-align: left;
        color: #1A1A1A;
        display: flex;
        align-items: center;
        margin-right: 2px;
    }

    .items-container .price .naira-small {
        font-family: Inter;
        font-size: 12px;
        font-weight: 700;
        line-height: 18px;
        text-align: left;
        color: #1A1A1A;
        display: flex;
        align-items: center;
    }

    /* === LOCATION SECTION === */
    .items-wrapper .location-input {
        position: relative;
        width: 100%;
        border: none;
    }

    .items-wrapper .location-input i {
        padding-left: 2px;
    }

    .items-wrapper .location-input #location {
        position: absolute;
        left: 0%;
        padding-left: 1.5rem
    }

    .items-container .location-input input[type=text]::placeholder {
        padding-left: 0px;
    }

    .items-wrapper span.count {
        font-family: Inter;
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        text-align: left;
        color: var(--primary-blue);

    }

    /* === The APPLY FILTER BUTTON */
    .apply-container {
        font-family: Inter;
        font-size: 13px;
        font-weight: 600;
        line-height: 16px;
        text-align: center;
        padding: 16px;
        color: var(--white-text);
        background-color: var(--primary-blue);
        text-decoration: none;
        display: flex;
        align-self: center;
        justify-content: center;
        cursor: pointer;
        outline: none;
        border: none;
        border-radius: 8px;
        width: 100%;
        height: 60px;
    }
    .apply {
        color: var(--white-text);
        background-color: transparent;
        outline: none;
        border: none;
        width: 100%;
        height: 100%;
    }
    

            

    

</style>