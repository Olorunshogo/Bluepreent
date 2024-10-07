
<script setup>
    // import boxicon from 'boxicons'; 
</script>

<template>    
    <div>
        <section>
            <div class="container">
                <div class="outer">
                    <div class="state" title="State">
                        <div>
                            <!-- <box-icon name='current-location'></box-icon> -->
                            <label for="state-input">
                                <span><i class='bx bx-current-location'></i></span>
                                <input type="text" placeholder="State"
                                    id="state-input" name="state" aria-labelledby="State" 
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
                        <label for="region-input">
                            <span><i class='bx bx-current-location'></i></span>
                            <input type="text" placeholder="Region" 
                                id="region-input" name="region" aria-labelledby="Region" 
                                aria-placeholder="Region" autocomplete="new-region"
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
        justify-content: space-evenly;
        /* align-items: center; */
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
        padding: 6px;
        width: 100%;
        height: 56px;
        border-radius: 8px;
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
        border: 1px solid hsl(213, 13%, 73%);
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

    label input[type=text]:focus {
        cursor: text;
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
        background-color: var(--form-focus-bg);
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
        background-color: var(--form-hover-bg);
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

    @media (max-width: 1020px) {
        .container .region,
        .container .state {
            width: 48%;
        }
    }

    @media (max-width: 450px) {
        .container .outer {
            display: flex;
            flex-direction: column;
        }

        .container .region,
        .container .state {
            width: 98%;
            margin: auto;
        }
    }   
</style>
