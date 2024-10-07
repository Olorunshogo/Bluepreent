
<script setup>
    import { ref } from 'vue';
    import { RouterLink } from 'vue-router';
    import CustomInput from './CustomInput.vue';
    import UserIcon from './icons/UserIcon.vue';
    import BluepreentLogo from '../assets/BluepreentLogo.vue';
    
    const firstName = ref("");
    const lastName = ref("");
    const email = ref("");
    const phoneNumber = ref("");
    const password = ref("");
    const textPassword = ref("");
    const terms = ref(false);

    const passwordLabel = ref("true");

    const passwordInput = ref(true);
    const showPassword = ref(true);

    const textInput = ref(false);     
    const hidePassword = ref(false);
    
    const emailError = ref("");
    const passwordError = ref(""); 
</script>

<template>
    <div>
        <!-- ===== START OF PAGE CONTAINER ===== -->
        <div class="page-container">

            <div class="width wrapper">
                <!-- === START OF FORM SECTION === -->
                <section>

                    <div>
                        <div class="logo-container">
                            <div class="logo">
                                <BluepreentLogo />
                            </div>
                        </div> 

                        <div class="register-content">
                            <div class="register-header">
                                <h2>Get Started!</h2>
                                <p>Join the student commerce revolution!</p>
                            </div>

                            <div class="register-form">
                                <!-- "enctype" is used for forms to submit files using the POST method. Else, it won't in its absence except using the GET method -->
                                <!-- "enterkeyhin="done" or "next" would change the icon of the type=tel when done in mobile screens. -->
                                <form 
                                    action="../assets/action.php" method="post" 
                                    id="registerForm" autocomplete="on"
                                    name="register-form" @submit.prevent="submitForm"
                                >

                                    <!-- Name Container -->
                                    <div class="container">
                                        <div class="name">
                                            <label for="firstName">First Name Label</label>
                                            <CustomInput 
                                                class="input" id="firstName" name="firstName"
                                                placeholder="Jane" type="text" v-model="firstName" 
                                                :required="true" autocomplete="new-first-name"                                         
                                            /> 
                                        </div>
                                        <div class="name">
                                            <label for="lastName">Last Name</label>
                                            <CustomInput 
                                                id="lastName" name="lastName" class="input" 
                                                placeholder="Doe" type="text" v-model="lastName"
                                                :required="true" autocomplete="new-last-name"                                         
                                            /> 
                                        </div>
                                    </div>

                                    <!-- Email Container -->
                                    <div class="container">
                                        <label for="email">Email Address</label>
                                        <CustomInput 
                                            v-model="email" id="email" name="Email"
                                            placeholder="example@email.com" type="email" class="input"
                                            :required="true" autocomplete="new-email"
                                            :errorMessage="emailError"                                          
                                        /> 
                                        <p v-if="emailError" class="error">{{ emailError }}</p>
                                    </div>                                    

                                    <!-- Phone Number Container -->
                                    <div class="container">
                                        <label for="phoneNumber">Phone Number</label>
                                        <CustomInput
                                            class="input" id="phoneNumber" name="phoneNumber" v-model="phoneNumber"
                                            placeholder="+234088009809" type="tel" 
                                            :required="true" autocomplete="new-phone-number"
                                        />
                                        
                                    </div>
                                    
                                    <!-- Password Container -->
                                    <div class="container">
                                        <label v-if="passwordLabel" for="password">Password</label>
                                        <label v-else for="textPassword">Password</label>
                                        <div>
                                            <CustomInput 
                                                label="Password" v-model="password" id="password"
                                                placeholder="********" type="password" class="input"
                                                :required="true" autocomplete="new-password"
                                                name="Password" v-show="passwordInput"                                       
                                            />

                                            <CustomInput 
                                                label="Text Password" v-model="password" id="textPassword"
                                                placeholder="Password" type="text" class="input"
                                                :required="true" autocomplete="new-password"
                                                name="text-password" v-show="textPassword"                                       
                                            />

                                            <span v-on:click="toggleShow" class="icons eyes" >
                                                <i v-show="showPassword" class="fa-regular fa-eye"></i>
                                                <i v-show="hidePassword" class="fa-regular fa-eye-slash"></i>
                                            </span>
                                        </div>
                                        <p v-if="passwordError" class="error">{{ passwordError }}</p>
                                    </div>                                    

                                    <!-- Terms Container -->
                                    <div class="container">
                                        <CustomInput
                                            class="acceptTerms" id="terms" name="terms"
                                            type="checkbox" v-model="terms"
                                            :required="true" autocomplete="new-terms"
                                        />
                                        <label for="terms">By clicking on the "Create Account" button, you indicate that you agree to the Terms of Service and Privacy Policy</label>
                                    </div>

                                    <div class="register-btn">
                                        <button type="button" id="register-form" 
                                            formmethod="post"
                                        >
                                            <UserIcon class="icons" />
                                            <span>Create Account</span>
                                        </button>
                                        
                                    </div>
                                </form>

                                <p>
                                    Already have an account? 

                                    <RouterLink to="/login" class="login">
                                        Login
                                    </RouterLink>
                                </p>
                            </div>
                            
                        </div>
                    </div>

                </section>
                <!-- === END OF FORM SECTION === -->


                <!-- === START OF IMAGE SECTION === -->
                <section>
                    <div class="top">
                        <div></div>
                        <div></div>
                    </div>

                    <div class="middle">
                        <div class="curve-triangle"></div>

                        <div>
                            <div class="rectangle"></div>
                            <div class="ellipse"></div>
                        </div>

                        <div class="arc"></div>
                    </div>

                    <div class="bottom">
                        <div class="left-polygon"></div>

                        <div class="right-shapes">
                            <div class="triangle"></div>
                            <div class="polygon"></div>
                        </div>
                    </div>
                </section>
                <!-- === END OF IMAGE SECTION === -->
            </div>

        </div>
        <!-- ===== END OF PAGE CONTAINER ===== -->
    </div>
</template>


<style lang="css" scoped>
    .page-container {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100vh;
        background-color: var(--primary-bg-colour);
        padding-top: var(--nav-height);
    }

    .wrapper {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        margin: 0 auto;
        padding: 1rem;
        width: 100%;
        height: auto;
    }

    section {
        width: 48%;
        max-width: var(--section-max-width);
        height: auto;
        gap: 2.5rem;
        border-radius: 8px;
        margin: 0 auto;   
    }

    section:nth-child(1) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 4rem;
    }

    section:nth-child(1) > div {
        width: 85%;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        margin: 0 auto;
    }

    .logo-container {
        width: 100%;
        height: 54px;
        display: flex;
        align-items: center;
    }   

    .register-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 2rem;
        border-radius: 4px;
    }

    /* === register Header === */
    .register-header {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .register-header h2 {
        width: 100%;
        font-family: Inter;
        font-size: 1.5rem;
        font-weight: 600;
        line-height: 2.25rem;
        letter-spacing: -0.005em;
        text-align: left;
        color: #05283E;
    }

    .register-header p {
        width: 100%;
        font-family: Inter;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.25rem;
        text-align: left;
        color: #667085;
    }

    /* === register Form === */
    .register-form {
        width: 100%;
        gap: 1rem;
    }

    .register-form form {
        width: 100%;
        height: 100%;
        gap: 1.5rem;
        display: flex;
        flex-direction: column;
    }

    form .icons {
        width: 1.25rem;
        height: 1.25rem;
        padding: 2px 1.33px;
        display: flex;
        flex-direction: row;
        align-items: center;
        cursor: pointer;
    }

    form .icons i {
        font-size: 1rem;
        color: #98A2B3;
        margin: auto;
    }

    form .container {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        gap: 0.5rem;
    }

    /* Name Container */
    form .container:nth-child(1) {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    form .container:nth-child(1) .name {
        display: flex;
        flex-direction: column;
        width: 49%;
        height: 100%;
        border-radius: 4px;
        margin: 0 auto;
    }

    form label {
        width: 100%;
        height: auto;
        font-size: 14px;
        font-weight: 400;
        cursor: pointer;
    }

    form .input {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        height: var(--input-height);
        caret-color: #05283E;
        font-size: 14px;
        font-weight: 400;
        padding: 8px;
        border-radius: 8px;
        border: 1px solid #EAECF0B2;
        transition: all 0.5s ease;
    }

    /* Password Container */
    form .container:nth-child(4) > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        height: 100%;
        border-radius: 8px;
        border: 1px solid #EAECF0B2;
    }

    form .container:nth-child(4) .input {
        border: none;
    }

    form .container:nth-child(4) .input:hover {
        background-color: transparent;
    }

    form .container:nth-child(4) .input:focus-within {
        border: none;
        background-color: transparent;
    }

    form .input:hover,
    form .container:nth-child(4) > div:hover {
        background-color: var(--form-hover-bg);
        color: var(--white-text);
        opacity: 0.85;
        caret-color: black;
    }

    form .input:focus-within,
    form .container:nth-child(4) > div:focus-within {
        background-color: var(--form-focus-bg);
        color: var(--white-text);
        opacity: 1;
    }

    form .container:nth-child(5) {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        cursor: pointer;
    }

    form .error {
        color: red;
        font-size: 12px;
    }

 /* === register Footer === */
    .register-btn {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin: auto;
        width: 100%;
        max-width: 412px;
        height: 100%;
        gap: 1rem;
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: Inter;
        font-size: 14px;
        font-weight: 400;
        width: 100%;
        height: var(--input-height);
        border-radius: 4px;
        border: none;
        color: var(--white-text);
        cursor: pointer;
        background-color: var(--primary-blue);
        transition: all 0.5s ease;
    }

    button:hover {
        opacity: 0.85;
    }

    button:focus {
        opacity: 1;
    }

    /* === register Paragraph === */
    .register-form p {
        width: 100%;
        font-family: Inter;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.45rem;
        text-align: center;
        color: #667085;
        text-align: center;
    }

    .register-form p .login {
        font-family: Inter;
        font-size: 14px;
        font-weight: 600;
        line-height: 22px;
        text-align: center;
        text-decoration: none;
        color: var(--primary-blue);
    }

    /* === SECTION IMAGES */
    section:nth-child(2) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: var(--primary-blue);
        background-image: url(../images/Courier_Man.png);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center bottom;
        border-radius: 8px;
    }

    .top {
        display: flex;
        align-items: center;
        width: 46%;
        max-width: 280px;
        height: 100%;
        max-height: 134px;
    }

    .top > div:nth-child(1){
        width: 50%;
        max-width: 157px;
        height: 100%;
        max-height: 134px;
        background-color: #0F84CCCC;
        border-radius: 0 0 120px 0;
    }

    .top > div:nth-child(2) {
        width: 50%;
        max-width: 153px;
        height: 100%;
        max-height: 134px;
        background-color: #34EDED66;
        clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
    }

    .middle {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        width: 100%;
        height: 258px;
        z-index: 5;
    }

    .image img {
        width: 100%;
        max-width: 950px;
        height: auto;
        z-index: 8;
    }

    .curve-triangle {
        width: 100%;
        max-width: 109.48px;
        height: 100%;
        max-height: 89.92px;
        background-color: #0F84CCCC;
        border-radius: 0 0 120px 0;
    }

    .middle > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .middle .rectangle {
        width: 100%;
        max-width: 332px;
        height: 100%;
        max-height: 288px;
        border-radius: 200px 200px 0 0;
        width: 332px;
        background: #0F84CCCC;
        top: 0;
        position: absolute;
    }

    .middle .ellipse {
        width: 100%;
        max-width: 332px;
        height: 100%;
        max-height: 305px;
        background-color: #0F84CCCC;
        position: relative;
        top: 40px;
        clip-path: ellipse(50% 50%);
        z-index: 5;
    }

    .image-section .arc {
        width: 100%;
        max-width: 119px;
        height: 100%;
        max-height: 121px;
        background-color: #34EDED66;
        border-radius: 50%;
        transform: rotate(90deg);
        position: relative;
        top: 15%;
        right: 6%;
        overflow: hidden;
        z-index: 2000000;
    }

    .image-section .arc::before {
        content: '';
        width: 50%;
        height: 50%;
        /* background-color: #34EDED66; */
        border-radius: 50%;
        background: var(--primary-blue);
        position: absolute;
        top: 25%;
        left: 25%;
        /* clip-path: outset(0 0 0 20%); */
        z-index: 2000000;
    }

    .image-section .bottom {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        height: 20%;
        max-height: 180px;
        z-index: 9;
    }

    .bottom .left-polygon {
        display: flex;
        align-self: flex-end;
        width: 100%;
        max-width: 154px;
        height: 100%;
        max-height: 134px;
        border-radius: 0 120px 0 0;
        background-color: #0F84CCCC;
    }

    .bottom .right-shapes {
        display: flex;
        flex-direction: row;
        align-self: flex-end;
        width: 100%;
        max-width: 295px;
        height: 100%;
        max-height: 169px;
    }

    .bottom .right-shapes .triangle {
        display: flex;
        flex-direction: row;
        align-self: flex-end;
        width: 100%;
        max-width: 153px;
        height: 100%;
        max-height: 127px;
        background-color: #0F84CC99;
        clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
        transform: rotate(180deg);
    }

    .bottom .right-shapes .polygon {
        width: 100%;
        max-width: 143px;
        height: 100%;
        max-height: 169px;
        background-color: #0C659CCC;
        clip-path: polygon(
            0% 0%, 
            100% 0%, 
            100% 75%,
            50% 100%,
            0% 75%
        );
        transform: rotate(180deg);
    }

    @media (max-width: 870px) {
        .wrapper {
            padding: 0;
        }

        section {
            width: 98%; 
        }

        section:nth-child(1) > div {
            width: 90%;
        }

        /* === SECTION IMAGES */
        section:nth-child(2) {
            display: none;
            
        }
    }

    @media (max-width: 400px) {
        section:nth-child(1) > div {
            width: 95%;
        }
    }
</style>
