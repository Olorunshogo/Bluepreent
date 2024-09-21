
<script setup>
    import { ref } from 'vue';
    import { RouterLink } from 'vue-router';

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
    <header class="width" id="header">
        <!-- === Top Nav === -->
        <div class="top-nav">
            <!-- === Occupy 90% width container === -->
            <div class="navigation-bar">
                <!-- Logo Container -->
                <div>
                    <RouterLink to="/" class="logo-container">
                        <!-- === Logo === -->
                        <div class="bluepreent-logo">
                            <BluepreentLogo />
                        </div>
                    </RouterLink> 
                </div>

                <!-- Nav Links container -->
                <nav class="nav" role="navigation">
                    <div class="nav-one">
                        <div title="Help/Contact" class="link-container">
                            <RouterLink to="/contact" class="link">
                                <i>
                                    <PhoneIcon class="icons" />
                                </i>
                                <span>Help/Contact</span>
                            </RouterLink>
                        </div>

                        <div title="Notification" class="link-container">
                            <RouterLink to="/notification" class="link">
                                <i>
                                    <NotificationIcon class="icons" />
                                </i>
                                <span>Notification</span>
                            </RouterLink>                     
                        </div>
                    </div>                    

                    <div class="nav-two">
                        <div title="Sell" class="link-container">
                            <RouterLink class="link" to="/sell" id="sell">
                                <i>
                                    <SellIcon class="icons" />
                                </i>
                                <span>Sell</span>
                            </RouterLink>
                        </div> 

                        <div title="Register" class="link-container">
                            <RouterLink class="link" to="/register" id="register">
                                <div>
                                    <span>Register</span>
                                </div>
                                <i>
                                    <ChevrondownIcon class="icons register" />
                                </i>
                            </RouterLink>                         
                        </div>
                    </div>
                </nav>

                <div class="menu-container" title="Menu">
                    <button class="menu-toggle" v-on:click="toggleSidebar">
                        <span :class="['hamburger-icon', { 'active': isSidebarOpen }]">
                            <i v-if="!isSidebarOpen" class="fas fa-bars" title="Hamburger"></i>
                            <i v-else class="fas fa-times" title="Close"></i>
                            Open
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

                    <nav class="sidebar-body">
                        <ul>
                            <li title="Help/Contact">
                                <RouterLink to="/contact" class="side-link">
                                    <span><i><PhoneIcon /></i></span>
                                    <span>Help/Contact</span>
                                </RouterLink>
                            </li>

                            <li title="Notifications">
                                <RouterLink to="/notification" class="side-link">
                                    <span><i><NotificationIcon /></i></span>
                                    <span>Notification</span>
                                </RouterLink>
                            </li>

                            <li title="Sell">
                                <RouterLink to="/sell" class="side-link">
                                    <span><i><SellIcon /></i></span>
                                    <span>Sell</span>
                                </RouterLink>
                            </li>

                            <li title="Dashboard">
                                <RouterLink to="/dashboard" class="side-link">
                                    <span><i><DashboardIcon /></i></span>
                                    <span>Dashboard</span>
                                </RouterLink>
                            </li>

                            <li title="Post Ad">
                                <RouterLink to="/post" class="side-link">
                                    <span><i><PlusCircleIcon /></i></span>
                                    <span>Post ad</span>
                                </RouterLink>
                            </li>
                        </ul>
                        
                        <ul>
                            <li title="LogIn">
                                <RouterLink to="/login" class="side-link" id="login">
                                    <span><i><LoginIcon /></i></span>
                                    <span>LogIn</span>
                                </RouterLink>
                            </li>

                            <li title="Register">
                                <RouterLink to="/register" class="side-link" id="register">
                                    <span><i><RegisterIcon /></i></span>
                                    <span>Register</span>
                                </RouterLink>
                            </li>

                            <li title="Logout">
                                <RouterLink to="/logout" class="side-link" id="logout">
                                    <span><i><LogoutIcon /></i></span>
                                    <span>Logout</span>
                                </RouterLink>
                            </li>
                        </ul>
                    </nav>
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
        margin: var(--nav-margin) 0;
        width: 100%;
        height: var(--nav-height);
        position: relative;
        top: 0;
        cursor: default;
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
        text-decoration: none;
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
        text-decoration: none;
    }

    .nav .link-container .link {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        color: var(--secondary-blue);
        font-size: var(--nav-link-size);
        line-height: 1.05rem;        
        width: var(--nav-link-width);
        height: 3rem;
        padding: 0.5rem 1rem;
        border-radius: 8px;
        cursor: pointer;
        text-decoration: none;
        transition: all 0.5s ease-in-out;
        box-shadow: rgba(10, 10, 1, 0.25) 0px 10px 10px -10px, 0px 10px -2px -4px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;    
    }

    .nav .link-container #sell {
        background-color: rgba(14, 120, 185, 0.08);
        color: var(--secondary-blue);
        font-weight: 600;
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
        color: var(--white-text);
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
        transition: all 0.3s ease-in-out;
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

    /* === MEDIA QUERIES === */
    /* === Respinsiveness for max-width: 760px === */
    @media  (max-width: 760px) {
        .nav {
            width: 50%;
            max-width: 50%;
            display: none;
        }

        .nav-one,
        .nav-two {
            display: none;
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
            flex-direction: column;
            position: fixed;
            top: 0;
            right: -200px;
            width: 200px;
            max-width: 50%;
            height: 100%;
            background-color: #fff;
            transition: right 0.3s ease;
            z-index: 1000;
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
            width: 90%;
            height: 30px;
            margin-bottom: 2px;
        }

        .sidebar-body ul li .side-link {
            display: flex;
            flex-direction: row;
            align-items: center;
            text-decoration: none;
            font-size: 12px;
            color: #111;
            cursor: pointer;
            text-decoration: none;
        }

        .sidebar-body ul li .side-link i {
            margin-right: 8px;
            font-size: 10px;
        }

        .sidebar-body ul li .side-link > span:nth-child(1) {
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
            background-color: rgba(100, 100, 100, 0.25);
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

</style>