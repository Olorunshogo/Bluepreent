
<script setup>
    import { ref } from 'vue'

    const navSvgs = ref('svgs')


    import BluepreentLogo from '../assets/BluepreentLogo.vue'
    import NavPhone from './icons/NavPhone.vue'
    import NavNotification from './icons/NavNotification.vue'
    import NavSell from './icons/NavSell.vue'
    import NavChevdown from './icons/NavChevdown.vue'
</script>

<template>
    <!-- === HEADER === -->
    <header>
        <!-- === Top Nav === -->
        <div class="top-nav">
            <!-- === Occupy 90% width container === -->
            <div class="navigation-bar">
                <!-- Logo Container -->
                <div class="logo-container">
                    <!-- === Logo === -->
                    <div class="bluepreent-logo">
                        <BluepreentLogo />
                    </div>
                </div>

                <!-- Nav Links container -->
                <nav class="nav" role="navigation">
                    <div class="nav-one">
                        <div title="Help/Contact" class="link-container">
                            <a target="_blank">
                                <i>
                                    <NavPhone v-bind:class="navSvgs" />
                                </i>
                                <span>Help/Contact</span>
                            </a>
                        </div>

                        <div title="Notification" class="link-container">
                            <a target="_blank">
                                <i>
                                    <NavNotification v-bind:class="navSvgs" />
                                </i>
                                <span>Notification</span>
                            </a>                        
                        </div>
                    </div>
                    

                    <div class="nav-two">
                        <div title="Sell" class="link-container">
                            <a target="_blank" id="sell">
                                <i>
                                    <NavSell v-bind:class="navSvgs" />
                                </i>
                                <span>Sell</span>
                            </a>
                        </div> 

                        <div title="Register" class="link-container">
                            <a target="_blank" id="register">
                                <div>
                                    <span>Register</span>
                                </div>
                                <i>
                                    <NavChevdown v-bind:class="navSvgs" />
                                </i>
                            </a>                            
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>
    <!-- === END OF HEADER === -->
</template>



<style lang="css" scoped>
    /* === TOP NAV: Overall container ===  */
    .top-nav {
        margin: 1.5rem 0;
        width: 100%;
        height: 80px;
    }

    /* === Container for both the Logo and Navigation */
    .navigation-bar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        height: auto;
    }

    /* === Logo Container === */
    .logo-container {
        min-width: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: left;
    }

    /* === BluepreentLogo Component Container === */
    .bluepreent-logo {
        width: 100%;
        height: auto;
    }

    /* === The Container for all the links in the NavBar === */
    .nav {
        display: flex;
        flex-direction: row;
        align-items: right;
        justify-content: flex-start;
        width: 620px;
    }

    .nav-one,
    .nav-two {
        min-width: 50%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    /* === Individual link container === */
    .nav .link-container {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .nav .link-container a {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 145px;
        height: 55px;
        border-radius: 8px;
        cursor: default;
        transition: all 0.5s ease-in-out;
        /* box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px; */

    }

    .nav .link-container a:hover {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;    
    }

    .nav .link-container #sell {
        background-color: rgba(14, 120, 185, 0.08);

    }

    .nav .link-container #register {
        background-color: #0E78B9;
    }

    /* === Link Title === */
    .nav span {
        font-size: 12px;
        font-weight: 400;
        margin: 0 10px;
    }

    /* === Icons at the Nav Bar === */
    .nav .svgs {
        width: 20px;
        height: 20px;
        color: red;
    }
</style>