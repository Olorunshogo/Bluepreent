
<script setup>
    import { ref } from 'vue'; 
    import { RouterLink } from 'vue-router';
    import CustomInput from './CustomInput.vue';
    import BluepreentLogo from '../assets/BluepreentLogo.vue';
    import LoginIcon from './icons/LoginIcon.vue';

    const email = ref("");
    const password = ref("");

    const passwordInput = ref(true);
    const showPassword = ref(true);

    const textInput = ref(false);     
    const hidePassword = ref(false); 
    

    const emailError = ref("");
    const passwordError = ref(""); 
     

    function toggleShow() {
        showPassword.value = !showPassword.value;
        showText.value = !showText.value;
        showEye.value = !showEye.value;
        slashEye.value = !slashEye.value;
    }

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    const submitForm = () => {
        emailError.value= '';
        passwordError.value = '';

        if (!validateEmail(email.value)) {
            emailError.value = 'Invalid email address';
            return;
        }

        if (password.value.length < 8) {
            passwordError.value = 'Password must be at least 8 characters';
            return;
        }

        // Form submittion after validations
        console.log('Form submitted with:', {
            email: email.value,
            password: password.value,
        });

        //Reset the form
        email.value = '';
        password.value = '';
    }





    
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

                        <div class="login-content">
                            <div class="login-header">
                                <h2>Welcome Back!</h2>
                                <p>Elevate Your Student Commerce Experience!</p>
                            </div>

                            <div class="login-form">
                                <!-- "enctype" is used for forms to submit files using the POST method. Else, it won't in its absence except using the GET method -->
                                <!-- "enterkeyhin="done" or "next" would change the icon of the type=tel when done in mobile screens. -->
                                <form 
                                    action="../assets/action.php" method="post" 
                                    id="loginForm" autocomplete="on"
                                    name="login-form" @submit.prevent="submitForm"
                                >

                                    <div class="e-mail-container">
                                        <span class="icons">
                                            <i class='bx bx-envelope'></i>
                                        </span>
                                        
                                        <CustomInput 
                                            label="Email" v-model="email" id="email" name="Email"
                                            placeholder="example@email.com" type="email" class="input"
                                            :required="true" autocomplete="new-email"
                                            :errorMessage="emailError"                                          
                                        />                                    
                                    </div>
                                    <p v-if="emailError" class="error">{{ emailError }}</p>

                                    <div class="password-container">
                                        <span class="icons" title="Square Check">
                                            <i class='bx bx-check-shield' ></i>
                                        </span>

                                        <CustomInput 
                                            label="Password" v-model="password" id="password"
                                            placeholder="**********" type="password" class="input"
                                            :required="true" autocomplete="new-password"
                                            name="Password" v-show="passwordInput"                                       
                                        />

                                        <label for="textPassword"></label>
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
                                        <!-- <label for="password"> -->
                                            <!-- <p id="password-minlength">Enter at least 8 characters.</p> -->

                                            <!-- Making sure the "aria-describedby" in the input field value is the same as the "aria-live" value in the actual error message -->
                                            <!-- <span id="email-validation" aria-live="assertive"></span> -->
                                        <!-- </label> -->
                                    </div>
                                    <p v-if="passwordError" class="error">{{ passwordError }}</p>

                                    <div class="forgotten-password">
                                        <RouterLink to="/forgot" class="forgot">
                                            Forgot Password?
                                        </RouterLink>
                                    </div>

                                    <div class="login-btn">
                                        <button type="button" id="login-form" 
                                            formmethod="post"
                                        >
                                            <LoginIcon class="icons" />
                                            <span>Login</span>
                                        </button>
                                        
                                    </div>
                                </form>

                                <p>
                                    Don’t have an account? 

                                    <RouterLink to="/register" class="register">
                                        Register
                                    </RouterLink>
                                </p>
                            </div>
                            
                        </div>
                    </div>

                </section>
                <!-- === END OF FORM SECTION === -->



                <!-- ===== START OF IMAGE SECTION ===== -->
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

    .login-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 2rem;
        border-radius: 4px;
    }

    /* === Login Header === */
    .login-header {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .login-header h2 {
        width: 100%;
        /* height: 2.25rem; */
        font-family: Inter;
        font-size: 1.5rem;
        font-weight: 600;
        line-height: 2.25rem;
        letter-spacing: -0.005em;
        text-align: left;
        color: #05283E;
    }

    .login-header p {
        width: 100%;
        font-family: Inter;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.25rem;
        text-align: left;
        color: #667085;
    }

    /* === Login Form === */
    .login-form {
        width: 100%;
        gap: 1rem;
    }

    .login-form form {
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

    form .eyes i {
        font-size: 1rem;
    }

    form .e-mail-container,
    form .password-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: left;
        width: 100%;
        height: var(--input-height);
        padding: 8px;
        gap: 8px;
        border-radius: 4px;
        border: 1px solid #EAECF0B2;
        transition: all 0.5s ease;
    }

    form .e-mail-container:hover,
    form .password-container:hover {
        background-color: var(--form-hover-bg);
        color: var(--white-text);
        opacity: 0.85;
        caret-color: black;
    }

    form .e-mail-container:focus-within,
    form .password-container:focus-within {
        background-color: var(--form-focus-bg);
        color: var(--white-text);
        opacity: 1;
    }

    form .input {
        width: 100%;
        height: auto;
        caret-color: #05283E;
        font-size: 13px;
        font-weight: 400;
    }

    label {
        display: none;
    }

    form .forgotten-password {
        display: flex;
        flex-direction: row;
        align-self: flex-end;
        justify-self: flex-end;
        width: 122px;
        height: 1.5rem;
        font-family: Inter;
        font-size: 14px;
        font-weight: 600;
        line-height: 24px;
        text-align: left;
        text-decoration: none;
        color: var(--primary-blue);
    }

    form .error {
        color: red;
        font-size: 12px;
    }

    /* === Login Footer === */
    .login-footer {
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
        /* line-height: 1.125rem; */
        font-weight: 400;
        width: 100%;
        height: 46px;
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

    .login-form p {
        width: 100%;
        font-family: Inter;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.45rem;
        text-align: center;
        color: #667085;
        text-align: center;
    }

    .login-form p .register {
        font-family: Inter;
        font-size: 14px;
        font-weight: 600;
        line-height: 22px;
        text-align: center;
        text-decoration: none;
        color: var(--primary-blue);
    }

    form .forgot {
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