
<script setup>
    import { ref } from 'vue'

    import BluepreentLogo from '../assets/BluepreentLogo.vue'
    import PhoneIcon from './icons/PhoneIcon.vue'
    import NotificationIcon from './icons/NotificationIcon.vue'
    import SellIcon from './icons/SellIcon.vue'
    import ChevrondownIcon from './icons/ChevrondownIcon.vue'

    import BarsIcon from './icons/BarsIcon.vue'
    import TimesIcon from './icons/TimesIcon.vue'

    const open = ref(true)
    const close = ref(false)
    function openClose() {
        open.value = !open.value
        close.value = !close.value
    }
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

                <div class="open-close">
                    <button v-on:click="openClose">
                        <span v-show="open">
                            <i>
                                <BarsIcon />
                            </i>
                        </span>
                        <span v-show="close">
                            <i>
                                <TimesIcon />
                            </i>
                        </span>
                    </button>                     
                </div>

                <!-- Nav Links container -->
                <nav class="nav" role="navigation">
                    <div class="nav-one">
                        <div title="Help/Contact" class="link-container">
                            <a target="_blank">
                                <i>
                                    <PhoneIcon class="icons" />
                                </i>
                                <span>Help/Contact</span>
                            </a>
                        </div>

                        <div title="Notification" class="link-container">
                            <a target="_blank">
                                <i>
                                    <NotificationIcon class="icons" />
                                </i>
                                <span>Notification</span>
                            </a>                        
                        </div>
                    </div>
                    

                    <div class="nav-two">
                        <div title="Sell" class="link-container">
                            <a target="_blank" id="sell">
                                <i>
                                    <SellIcon class="icons" />
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
                                    <ChevrondownIcon class="icons register" />
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
        min-width: 100%;
        height: 60px;
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
        max-width: 70%;
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
        color: var(--secondary-blue);
        font-size: 14px;
        line-height: 17px;        
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
        color: var(--secondary-blue);
        font-weight: 600;
        font-size: 14px;
        font-family: Inter
    }

    .nav .link-container #register {
        background-color: var(--primary-blue);
        color: white;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        font-family: SF Pro Text;
    }

    .nav .register {
        color: white;
    }

    /* === Link Title === */
    .nav span {
        font-size: 12px;
        font-weight: 400;
        margin: 0 10px;
    }

    /* === TOGGLE BUTTON +++ */
    .open-close {
        display: none;
        transition: all 0.5s ease-in-out;
    }

    .open-close button {
        outline: none;
        border: none;
        height: 32px;
        width: 32px;
        background-color: transparent;;
    }

    .open-close span i {
        font-weight: 700;
        font-size: 100%;
        color: var(--primary-blue);
    }

    @media (max-width: 600px) {
        .top-nav {
            margin: 0rem 0;
            height: 65px;
            padding: 11px 0px 11px 16px;
        }

        .nav {
            display: none;
        }

        .open-close {
            display: block;
        }
    }
</style>