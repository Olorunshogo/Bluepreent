
<script setup>
    import { ref } from 'vue';

    const email = ref("");
    const password = ref("");

    const showPassword = ref(true);
    const slashEye = ref(true); 

    const showText = ref(false); 
    const showEye = ref(false);   
     

    function toggleShow() {
        showPassword.value = !showPassword.value;
        showText.value = !showText.value;
        showEye.value = !showEye.value;
        slashEye.value = !slashEye.value;
    }


</script>

<template>
    <div title="Login Page">
        <div class="login-page-container">
            <div class="login-inner">

                <div class="container">
                    
                    <div class="login-section">

                        <div class="logo-container" title="Logo">
                            <div class="logo" title="bluepreent">
                                <img src="../images/Bluepreent.png" alt="Bluepreent">
                            </div>
                            <p title="DeClutter">DeClutter</p>
                        </div> 

                        <div class="login-content">
                            <div class="login-header">
                                <h2>Welcome Back,</h2>
                                <p>Elevate Your Student Commerce Experience!</p>
                            </div>

                            <div class="login-form">
                                <form action="" method="post" title="Login Form">
                                    <div class="e-mail-container" title="E-mail">
                                        <span class="icons" title="Envelope">
                                            <i class="fa-regular fa-envelope"></i>
                                        </span>

                                        <input 
                                            class="input" type="email" 
                                            id="email" v-model="email" 
                                            placeholder="Email"
                                        />
                                    </div>

                                    <div class="password-container" title="Password">
                                        <span class="icons" title="Square Check">
                                            <i class="fa-regular fa-square-check"></i>
                                            <!-- <i class="fa-regular fa-circle-check"></i> -->
                                        </span>

                                        <input
                                            v-show="showText" type="text" 
                                            id="textPassword" class="input" 
                                            v-model="password" placeholder="Password" 
                                            title="Password"
                                        />

                                        <input 
                                            v-show="showPassword" type="password" 
                                            id="password" class="input" 
                                            v-model="password" placeholder="Password" 
                                            title="Password"
                                        />

                                        <span v-on:click="toggleShow" class="icons">
                                            <i v-show="showEye" class="fa-regular fa-eye"></i>
                                            <i v-show="slashEye" class="fa-regular fa-eye-slash"></i>
                                        </span>
                                    </div>

                                    <p class="forgotten-password">Forgot Password?</p>
                                </form>
                            </div>

                            <div class="login-footer">
                                <button title="Submit Button">
                                    <span>Login</span>
                                </button>
                                <p>Don’t have an account? <a href="http://" target="_blank" rel="noopener noreferrer">Register</a></p>
                            </div>
                        </div>
                    </div>

                    <div class="image-section">
                        <div class="image">
                            <img src="../images/Courier_Man.png" alt="Courier Man">
                        </div>

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

                            <div class="arc">Ellipse</div>
                        </div>

                        <div class="bottom">
                            <div class="left-polygon"></div>

                            <div class="right-shapes">
                                <div class="triangle"></div>
                                <div class="polygon"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="terms-condition">
                    <p>By clicking on the “Create Account” button, you indicate that you agree to the <span><a href="http://" target="_blank" rel="noopener noreferrer">Terms of Service</a></span> and <span><a href="http://" target="_blank" rel="noopener noreferrer">Privacy Policy</a></span></p>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="css" scoped>
    .login-page-container {
        width: 100%;
        height: 100%;
        max-height: 917px;
        padding: 1.5rem;
        background-color: var(--primary-bg-colour);
    }

    .login-inner {
        width: 98%;
        height: 100%;
        max-height: 910px;
        margin: auto;
    }

    .logo-container {
        width: 134px;
        height: 54px;
        position: relative;
        top: -40px;
        left: 0;
    }

    .logo-container .logo {
        width: 134px;
        height: 28px;
    }

    .logo-container .logo img {
        width: 100%;
        height: auto;
    }

    .logo-container .logo p {
        width: 55px;
        height: 25px;
        font-family: SF Pro Text;
        font-size: 12px;
        font-weight: 400;
        line-height: 1.5rem;
        text-align: left;
        color: var(--primary-blue);
    }

    .container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 1,392px;
        height: 100%;
        max-height: 872px;
        gap: 2.5rem;
        position: relative;
    }    

    .login-section {
        width: 50%;
        max-width: 675px;
        height: 100%;
        max-height: 874px;
        padding: 222px 83px 190px 84px;
    }

    .login-content {
        display: flex;
        flex-direction: column;
        justify-items: space-between;
        align-items: center;
        width: 100%;
        max-width: 508px;
        height: 462px;
        padding-top: 48px;
        gap: 2rem;
        border-radius: 4px;
    }

    /* === Login Header === */
    .login-header {
        width: 100%;
        max-width: 412px;
        height: 62px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .login-header h2 {
        width: 100%;
        height: 2.25rem;
        font-family: Inter;
        font-size: 1.875rem;
        font-weight: 600;
        line-height: 2.25rem;
        letter-spacing: -0.005em;
        text-align: left;
        color: #05283E;
    }

    .login-header p {
        width: 100%;
        height: 1.25rem;
        font-family: Inter;
        font-size: 1.125rem;
        font-weight: 400;
        line-height: 1.25rem;
        text-align: left;
        color: #667085;
    }

    /* === Login Form === */
    .login-form {
        width: 100%;
        max-width: 412px;
        height: 154px;
        gap: 10px;
    }

    .login-form form {
        width: 100%;
        height: 100%;
        max-height: 120px;
        gap: 1.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .login-form form .icons {
        width: 1rem;
        height: 1rem;
        padding: 2px 1.33px;
    }

    .login-form form .icons i {
        font-size: 13px;
        color: #98A2B3;
    }

    .login-form form .e-mail-container,
    .login-form form .password-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: left;
        width: 100%;
        height: 52px;
        padding: 14px 1rem;
        gap: 10px;
        border-radius: 4px;
        border: 1px solid #EAECF0B2;
    }

    .login-form form .input {
        width: 100%;
        height: 48px;
        outline: none;
        border: none;
        font-size: 14px;
        font-weight: 400;
        caret-color: #05283E;
        cursor: text;
    }

    .login-form form .input::placeholder {
        font-size: 13px;
        font-weight: 600;
        color: #98A2B3;

    }

    .login-form form .forgotten-password {
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
        color: var(--primary-blue);
    }

    /* === Login Footer === */
    .login-footer {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: auto;
        width: 100%;
        max-width: 412px;
        height: 100%;
        max-height: 86px;
        gap: 1rem;
    }

    .login-footer button {
        display: flex;
        align-items: center;
        width: 100%;
        height: 3rem;
        padding: 0.5rem 0px;
        gap: 10px;
        border-radius: 4px;
        border: none;
        color: var(--white-text);
        cursor: pointer;
        background-color: var(--primary-blue);
    }

    .login-footer button span {
        width: 90%;
        height: 1rem;
        font-family: Inter;
        font-size: 13px;
        font-weight: 500;
        line-height: 1.125rem;
        text-align: center;
        margin: auto;
    }

    .login-footer p {
        width: 100%;
        height: 1.4rem;
        font-family: Inter;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.45rem;
        text-align: center;
        color: #667085;
    }

    .login-footer p a {
        font-family: Inter;
        font-size: 14px;
        font-weight: 600;
        line-height: 22px;
        text-align: center;
    }

    .terms-condition {
        width: 80%;
        max-width: 349px;
        height: auto;
        max-height: 66px;
        margin: auto;
        text-align: center;
        display: none;
    }

    .terms-condition p {
        font-family: Inter;
        font-size: 12px;
        font-weight: 400;
        line-height: 22px;
        text-align: center;
    }

    .terms-condition p a {
        color: #667085;
    }


    /* === SECTION IMAGES */
    .image-section {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 50%;
        max-width: 677px;
        height: 872px;
        /* border-radius: 10px 0px 0px 0px; */
        background-color: var(--primary-blue);
        /* background-image: url(../images/Courier_Man.png);
        background-position-x: center;
        background-position-y: bottom;
        background-repeat: no-repeat;
        background-size: 100%; */
    }

    .image-section .top {
        display: flex;
        align-items: center;
        width: 46%;
        max-width: 280px;
        height: 134px;
    }

    .image-section .top > div:nth-child(1){
        width: 50%;
        max-width: 157px;
        height: 134px;
        background-color: #0F84CCCC;
        border-radius: 0 0 120px 0;
    }

    .image-section .top > div:nth-child(2) {
        width: 50%;
        max-width: 153px;
        height: 134px;
        background-color: #34EDED66;
        clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
    }

    .image-section .middle {
        display: flex;
        align-items: center;
        justify-content: space-around;
        position: relative;
        width: 100%;
        height: 258px;
        z-index: 5;
    }

    .image {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 0;
    }

    .image img {
        width: 100%;
        max-width: 950px;
        height: auto;
        z-index: 10;
    }

    .image-section .curve-triangle {
        width: 109.48px;
        height: 89.92px;
        /* top: 377.03px; */
        /* left: 54px; */
        /* left: 5%; */
        background-color: #0F84CCCC;
        border-radius: 0 0 120px 0;
    }

    .middle > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .image-section .rectangle {
        width: 332px;
        height: 288px;
        /* top: 258px; */
        /* left: 222px; */
        border-radius: 200px 200px 0 0;
        width: 332px;
        background: #0F84CCCC;
        top: 0;
        position: absolute;
    }

    .middle .ellipse {
        width: 332px;
        height: 305px;
        background-color: #0F84CCCC;
        position: relative;
        top: 40px;
        clip-path: ellipse(50% 50%);
        z-index: 400;
    }

    .image-section .arc {
        width: 119px;
        height: 121px;
        /* top: 377.03px; */
        /* left: 54px; */
        /* left: 5%; */
        background-color: #34EDED66;
        border-radius: 50%;
        transform: rotate(90deg);
        position: relative;
        top: 2px;
        right: 52px;
        overflow: hidden;
        /* clip-path: inset(0 0 0 20%); */
        z-index: 2000000;
    }

    .image-section .ac::before {
        content: '';
        width: 50%;
        height: 50%;
        /* top: 377.03px; */
        /* left: 54px; */
        /* left: 5%; */
        /* background-color: #34EDED66; */
        border-radius: 50%;
        background: var(--primary-blue);
        position: absolute;
        top: 25%;
        left: 25%;
        /* clip-path: outset(0 0 0 20%); */
        z-index: 2000000;
        clip-path: inset circle(20%);
    }

    .image-section .bottom {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        height: 20%;
        max-height: 180px;
    }

    .bottom .left-polygon {
        display: flex;
        align-self: flex-end;
        width: 154px;
        height: 134px;
        border-radius: 0 120px 0 0;
        background-color: #0F84CCCC;
    }

    .bottom .right-shapes {
        display: flex;
        flex-direction: row;
        align-self: flex-end;
        width: 295px;
        height: 169px;
    }

    .bottom .right-shapes .triangle {
        display: flex;
        flex-direction: row;
        align-self: flex-end;
        width: 153px;
        height: 127px;
        background-color: #0F84CC99;
        clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
        transform: rotate(180deg);
    }

    .bottom .right-shapes .polygon {
        width: 142px;
        height: 169px;
        background-color: #0C659CCC;
        clip-path: polygon(
            0% 0%, /* Top-left corner of the rectangle */
            100% 0%, /* Top-right corner of the rectangle */
            100% 75%, /* Bottom-right corner of the rectangle */
            50% 100%, /* Bottom middle of the triangle */
            0% 75% /* Bottom-left corner of the rectangle */
        );
        transform: rotate(180deg);
    }

    @media (max-width: 400px) {
        .login-page-container {
            width: 100%;
            max-width: 390px;
            height: 100%;
            max-height: 584px;
        }

        .login-inner {
            width: 100%;
            max-width: 350px;
            height: 100%;
            max-height: 542px;
            /* padding: 32px 0 0 20px; */
            padding: 0;
            gap: 1.5rem;
        }

        .container {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            max-width: 350px;
            max-height: 450px;
            gap: 1.5rem;
            position: relative;
        }    

        .login-section {
            width: 100%;
            height: 100%;
            max-height: 874px;
            padding: 0;
        }

        .login-content {
            display: flex;
            flex-direction: column;
            justify-items: space-between;
            align-items: center;
            width: 100%;
            max-width: 508px;
            height: 462px;
            padding-top: 48px;
            gap: 1.5rem;
        }

        /* === Login Header === */
        .login-header {
            height: 80px;
            gap: 1rem;
            margin-bottom: 1rem;
        }

        .login-header h2 {
            font-size: 1.75rem;
        }

        .login-header p {
            width: 100%;
            font-size: 1rem;
        }

        /* === Login Form === */
        .login-form {
            width: 100%;
            height: 154px;
            gap: 10px;
        }

    .login-form form {
        width: 100%;
        height: 120px;
        gap: 1.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .login-form form .icons {
        width: 1rem;
        height: 1rem;
        padding: 2px 1.33px;
    }

    .login-form form .icons i {
        font-size: 13px;
        color: #98A2B3;
    }

    .login-form form .e-mail-container,
    .login-form form .password-container {
        padding: 0;
        gap: 0.75rem;
    }

        .login-form form .input {
            width: 100%;
            height: 48px;
            font-size: 14px;
        }

        .login-form form .input::placeholder {
            font-size: 13px;
            font-weight: 500;
        }

        .login-form form .forgotten-password {
            width: 105px;
            font-size: 12px;
            font-weight: 500;
        }

        /* === Login Footer === */
        .login-footer {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin: auto;
            width: 412px;
            height: 86px;
            gap: 1rem;
        }

        .login-footer p {
            width: 70%;
            max-width: 215px;
        }

        .terms-condition {
            display: flex;
            flex-direction: row;
            align-items: center;
        }




        /* === SECTION IMAGES */
        .image-section {
            display: none;
            
        }
    }
</style>