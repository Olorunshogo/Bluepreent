
<script setup>
    import { ref } from 'vue'

    import BluepreentLogo from '../assets/BluepreentLogo.vue';

    import PhoneIcon from './icons/PhoneIcon.vue';
    import NotificationIcon from './icons/NotificationIcon.vue';
    import SellIcon from './icons/SellIcon.vue';
    import DashboardIcon from './icons/DashboardIcon.vue';

    import PlusCircleIcon from './icons/PlusCircleIcon.vue';
    import LoginIcon from './icons/LoginIcon.vue';
    import LogoutIcon from './icons/LogoutIcon.vue';
    import RegisterIcon from './icons/RegisterIcon.vue';

    import ChevrondownIcon from './icons/ChevrondownIcon.vue';

    const isSidebarOpen = ref(false);

    function toggleSidebar() {
        isSidebarOpen.value = !isSidebarOpen.value;
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

                <div class="menu-container" title="Menu">
                    <button class="menu-toggle" v-on:click="toggleSidebar">
                        <span :class="['hamburger-icon', { 'active': isSidebarOpen }]">
                            <i v-if="!isSidebarOpen" class="fas fa-bars" title="Hamburger"></i>
                            <i v-else class="fas fa-times" title="Close"></i>
                        </span>
                    </button>                     
                </div>

                <div class="sidebar-container" :class="{ 'open': isSidebarOpen }" title="Sidebar">
                    <div class="sidebar-header">
                        <div class="sidebar-logo" title="Bluepreent">
                            <img src="../images/Bluepreent.png" alt="Bluepreent Image">
                        </div>

                        <button class="close-btn" @click="toggleSidebar" title="Close">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>

                    <div class="sidebar-body">
                        <ul>
                            <li title="Help/Contact">
                                <a href="#" target="_blank">
                                    <span><i><PhoneIcon /></i></span>
                                    <span>Help/Contact</span>
                                </a>
                            </li>
                            <li title="Notifications">
                                <a href="#" target="_blank">
                                    <span><i><NotificationIcon /></i></span>
                                    <span>Notification</span>
                                </a>
                            </li>
                            <li title="Dashboard">
                                <a href="#" target="_blank">
                                    <span><i><DashboardIcon /></i></span>
                                    <span>Dashboard</span>
                                </a>
                            </li>
                            <li title="Post ad">
                                <a href="#" target="_blank">
                                    <span><i><PlusCircleIcon /></i></span>
                                    <span>Post ad</span>
                                </a>
                            </li>
                        </ul>
                        
                        <ul>
                            <li title="LogIn">
                                <a href="#" target="_blank" id="login">
                                    <span><i><LoginIcon /></i></span>
                                    <span>LogIn</span>
                                </a>
                            </li>
                            <li title="Register">
                                <a href="#" target="_blank" id="register">
                                    <span><i><RegisterIcon /></i></span>
                                    <span>Register</span>
                                </a>
                            </li>
                            <li title="Logout">
                                <a href="#" target="_blank" id="logout">
                                    <span><i><LogoutIcon /></i></span>
                                    <span>Logout</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="overlay" :class="{ 'active': isSidebarOpen }" @click="toggleSidebar"></div>
                
                </div>
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
        height: 60px;
        position: relative;
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
        width: 30%;
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
        width: 50%;
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
        font-size: 1rem;
        line-height: 1.05rem;        
        width: 9rem;
        height: 3.5rem;
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
        font-family: Inter;
    }

    .nav .link-container #sell i {
        color: var(--secondary-blue);
        width: 25px;
        height: 25px;
        display: flex;
        align-items: center;
    }

    .nav .link-container #register {
        background-color: var(--primary-blue);
        color: white;
        font-weight: 700;
        font-size: 1rem;
        line-height: 1.1rem;
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
    .menu-container {
        display: none;
        transition: all 0.5s ease-in-out;
    }

    .menu-container button {
        outline: none;
        border: none;
        height: 32px;
        width: 32px;
        background-color: transparent;;
    }

    .menu-container span i {
        font-weight: 700;
        font-size: 1.25rem;
        color: var(--primary-blue);
    }

    .sidebar-container {
        display: none;
    }

    @media  (max-width: 950px) {
        .top-nav {
            margin: 1rem 0;
            width: 100%;
            height: 55px;
        }

        /* === Logo Container === */
        .logo-container {
            width: 25%;
        }

        /* === The Container for all the links in the NavBar === */
        .nav {
            width: 620px;
            max-width: 75%;
        }

        /* .nav-one,
        .nav-two {
            midwidth: 50%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        } */

        .nav .link-container a {
            font-size: 12px;
            line-height: 14px;        
            width: 8rem;
            height: 3rem;

        }

        .nav .link-container a:hover {
            box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;    
        }

        .nav .link-container #sell {
            font-size: 14px;
            font-family: Inter
        }

        .nav .link-container #register {
            background-color: var(--primary-blue);
            color: white;
            font-weight: 700;
            font-size: 0.95rem;
            line-height: 14px;
        }

        /* === Link Title === */
        .nav span {
            font-size: 12px;
            font-weight: 400;
            margin: 0 10px;
        }

        /* === TOGGLE BUTTON === */
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

    }

    @media  (max-width: 760px) {
        .nav .link-container a {        
            width: 6.7rem;
        }

        .nav {
            width: 50%;
            max-width: 50%;
            display: none;
        }

        .nav-one,
        .nav-two {
            display: none;
        }        

        .top-nav {
            /* margin: 0rem 0; */
            height: 65px;
            padding: 11px 0px 11px 16px;
        }

        .menu-container {
            display: flex;
            align-items: center;
            transition: transform 0.3s ease;
        }

        .menu-container .menu-toggle {
            font-size: 1rem;
            cursor: pointer;
        }

        .menu-container .hamburger-icon {
            transition: transform 0.3s ease;
        }

        .hamburger-icon.active {
            transform: rotate(90deg);
        }

        .sidebar-container {
            display: flex;
            position: fixed;
            top: 0;
            right: -200px;
            width: 200px;
            height: 100%;
            background-color: #fff;
            transition: right 0.3s ease;
            z-index: 1000;
            width: 200px;
            display: flex;
            flex-direction: column;
            border-right: 1px solid #eee;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
        }

        .sidebar-header {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 50px;
            border-bottom: 1px solid #ddd;
            padding: 12px;
        }

        .sidebar-header .sidebar-logo {
            width: 60%;
        }

        .sidebar-header .sidebar-logo img {
            width: 80px;
        }

        .sidebar-header .close-btn {
            width: 20%;
            display: flex;
            justify-content: center;
            align-items: center;
            border: none;
            background-color: transparent;
            cursor: pointer;
        }

        .sidebar-header .close-btn i {
            color: var(--primary-blue);
            font-size: 10px;
        }

        .sidebar-container.open {
            right: 0;
        }

        .sidebar-body {
            display: flex;
            flex-direction: column;
        }

        .sidebar-body ul {
            list-style: none;
            margin: 0;
            padding: 12px;
        }

        .sidebar-body ul:nth-child(1) {
            border-bottom: 1px solid #ddd;
        }

        .sidebar-body ul li {
            display: flex;
            align-items: center;
            width: 100px;
            height: 30px;
            margin-bottom: 2px;
        }

        .sidebar-body ul li a {
            display: flex;
            flex-direction: row;
            align-items: center;
            text-decoration: none;
            font-size: 10px;
            color: #111;
            cursor: pointer;
        }

        .sidebar-body ul li a i {
            margin-right: 8px;
            font-size: 8px;
        }

        .sidebar-body ul li a > span:nth-child(1) {
            display: flex;
            align-items: center;
        }

        .sidebar-body ul li #login {
            color: lightgreen;
        }

        .sidebar-body ul li #register {
            color: var(--primary-blue);
        }

        .sidebar-body ul li #logout {
            color: red
        }

        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(246, 246, 246, 0.3);
            transition: opacity 0.3s ease;
            opacity: 0.5;
            filter: blur(4px);
            -webkit-filter: blur(4px);
            visibility: hidden;
            z-index: 20;
        }

        .overlay.active {
            opacity: 1;
            visibility: visible;
        }

        

    }

    @media (max-width: 450px) {
        .top-nav {
            margin: 0rem 0 1rem 0;
            height: 65px;
            padding: 11px 0px 11px 16px;
        }

        .logo-container,
        .nav {
            width: 50%;
            max-width: 250px;
        }

        .sidebar-container {
            width: 150px;
        }

        .sidebar .navbar {
            font-size: 14px;
        }

        
    }

</style>