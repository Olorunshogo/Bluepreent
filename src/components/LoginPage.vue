
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
    <div title="login Page">
        <div class="login-page-container">
            <div class="login-inner">
                <div class="logo-container" title="Logo">
                    <div class="logo" title="bluepreent">
                        <img src="../images/Bluepreent.png" alt="Bluepreent">
                    </div>
                    <p title="DeClutter">DeClutter</p>
                </div>

                <div class="container">
                    <div class="login-section">                       
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
                                            id="password" class="input" 
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

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="css" scoped>
    .login-page-container {
        width: 1440px;
        height: 917px;
        top: 246px;
        left: 153px;
        background-color: var(--primary-bg-colour);    
    }

    .login-inner {
        width: 1440px;
        height: 919px;
        top: -2px;
    }

    .logo-container {
        width: Hug (134px)px;
        height: Hug (53.17px)px;
        position: relative;
        top: 220px;
        left: 155px;
    }

    .logo-container .logo {
        width: 134px;
        height: 28.17px;
    }

    .logo-container .logo img {
        width: 100%;
        height: auto;
    }

    .logo-container .logo p {
        width: 55px;
        height: 25px;
        font-family: SF Pro Text;
        font-size: 12.07px;
        font-weight: 400;
        line-height: 24.14px;
        text-align: left;
        color: var(--primary-blue);
    }

    .container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: Hug (1,392px)px;
        height: Fixed (872px)px;
        top: 24px;
        left: 24px;
        gap: 40px;
        position: relative;
    }    

    .login-section {
        width: 50%;
        max-width: 675px;
        height: 874px;
        padding: 222px 83px 190px 84px;
    }

    .login-content {
        display: flex;
        flex-direction: column;
        justify-items: space-between;
        align-items: center;
        width: Hug (508px)px;
        height: Hug (462px)px;
        top: 222px;
        left: 84px;
        padding: 48px 0px 0px 0px;
        gap: 32px;
        border-radius: 4px 0px 0px 0px;
        /* background: red; */
    }

    /* === Login Header === */
    .login-header {
        width: 412px;
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
        width: 412px;
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
        width: 16px;
        height: 16px;
        top: 16px;
        left: 16px;
        padding: 2px 1.33px;
    }

    .login-form form .icons i {
        font-size: 13px;
        color: #05283E;
    }

    .login-form form .e-mail-container,
    .login-form form .password-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: left;
        width: 100%;
        height: 48px;
        padding: 14px 1rem;
        gap: 10px;
        border-radius: 4px;
        border: 1px solid #EAECF0B2;
    }

    .login-form form .input {
        width: 100%;
        height: 44px;
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
        color: var(--icon-grey);
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
        gap: 1rem;
        font-family: Inter;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.45rem;
        text-align: center;
    }

    .login-footer p a {
        font-family: Inter;
        font-size: 14px;
        font-weight: 600;
        line-height: 22px;
        text-align: center;
    }





    .image-section {
        width: 50%;
        max-width: 677px;
        height: 872px;
        gap: 0px;
        border-radius: 10px 0px 0px 0px;
        background-color: var(--primary-blue);
    }
</style>