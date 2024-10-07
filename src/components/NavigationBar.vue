
<script setup>
    import { ref } from 'vue';
    // import 'boxicons';
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

    import UserIcon from './icons/UserIcon.vue';

    const isSidebarOpen = ref(true);

    function toggleSidebar() {
        isSidebarOpen.value = !isSidebarOpen.value;
    }

</script>

<template>
    <!-- === NAVIGATION === -->
    <nav>
        <!-- === Top Nav === -->
        <div class="container">
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
                <nav class="nav-link-container" role="navigation">
                    <div class="link-container">
                        <RouterLink to="/contact" class="link">
                            <i>
                                <PhoneIcon class="icons" />
                            </i>
                            <span>Help/Contact</span>
                        </RouterLink>
                    </div>

                    <div class="link-container">
                        <RouterLink to="/notification" class="link">
                            <i>
                                <NotificationIcon class="icons" />
                            </i>
                                <span>Notification</span>
                        </RouterLink>                     
                    </div>

                    <div class="link-container">
                        <RouterLink class="link" to="/post">
                            <i>
                                <PlusCircleIcon class="icons" />
                            </i>
                            <span>Post ad</span>
                        </RouterLink>
                    </div> 

                    <div class="link-container">
                        <RouterLink class="link" to="/login" id="sell">
                            <i>
                                <LoginIcon class="icons" />
                            </i>
                            <span>Login</span>
                        </RouterLink>
                    </div> 

                    <div class="link-container">
                        <RouterLink class="link" to="/register">
                            <i>
                                <UserIcon class="icons register" />
                            </i>
                            <div>
                                <span>Register</span>
                            </div>
                        </RouterLink>                         
                    </div>
                </nav>

                <!-- <div class="menu-container">
                    <button class="menu-toggle" v-on:click="toggleSidebar">
                        <span :class="['hamburger-icon', { 'active': isSidebarOpen }]">
                            <i v-if="!isSidebarOpen" class="fas fa-bars"></i>
                            <i v-else class="fas fa-times" title="Close"></i>
                        </span>
                    </button>                     
                </div> -->

                <div class="menu-container">
                    <button class="menu-toggle" v-on:click="toggleSidebar">
                        <span>
                            <i class='bx bx-menu-alt-right'></i>
                            <!-- <i class='bx bx-menu'></i> -->
                        </span>
                    </button>                     
                </div>

                <div class="sidebar-container" :class="{ 'open': isSidebarOpen }">
                    <div class="sidebar-header">
                        <div class="sidebar-logo">
                            <BluepreentLogo />
                        </div>

                        <button class="close-btn" @click="toggleSidebar()">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>

                    <nav class="sidebar-body">
                        <ul>
                            <li>
                                <RouterLink to="/contact" class="side-link">
                                    <span><i><PhoneIcon /></i></span>
                                    <span>Help/Contact</span>
                                </RouterLink>
                            </li>

                            <li>
                                <RouterLink to="/notification" class="side-link">
                                    <span><i><NotificationIcon /></i></span>
                                    <span>Notification</span>
                                </RouterLink>
                            </li>

                            <li>
                                <RouterLink to="/sell" class="side-link">
                                    <span><i><SellIcon /></i></span>
                                    <span>Sell</span>
                                </RouterLink>
                            </li>

                            <li>
                                <RouterLink to="/dashboard" class="side-link">
                                    <span><i><DashboardIcon /></i></span>
                                    <span>Dashboard</span>
                                </RouterLink>
                            </li>

                            <li>
                                <RouterLink to="/post" class="side-link">
                                    <span><i><PlusCircleIcon /></i></span>
                                    <span>Post ad</span>
                                </RouterLink>
                            </li>
                        </ul>
                        
                        <ul>
                            <li>
                                <RouterLink to="/login" class="side-link" id="login">
                                    <span><i><LoginIcon /></i></span>
                                    <span>LogIn</span>
                                </RouterLink>
                            </li>

                            <li>
                                <RouterLink to="/register" class="side-link" id="register">
                                    <span><i><RegisterIcon /></i></span>
                                    <span>Register</span>
                                </RouterLink>
                            </li>

                            <li>
                                <RouterLink to="/logout" class="side-link" id="logout">
                                    <span><i><LogoutIcon /></i></span>
                                    <span>Logout</span>
                                </RouterLink>
                            </li>
                        </ul>
                    </nav>
                    <!-- <div class="overlay" :class="{ 'active': isSidebarOpen }" @click="toggleSidebar"></div> -->
                
                </div>
            </div>
        </div>
    </nav>
    <!-- === END OF HEADER === -->
</template>


<style lang="css" scoped>
    /* === TOP NAV: Overall container ===  */
    .container {
        width: 100%;
        height: var(--nav-height);
        cursor: default;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    /* === Container for both the Logo and Navigation */
    .navigation-bar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
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
        width: 160px;
        height: auto;
    }

    /* === The Container for all the links in the NavBar === */
    .nav-link-container {
        display: flex;
        flex-direction: row;
        align-items: right;
        width: 570px;
    }

    /* === Individual link container === */
    .link-container {
        width: fit-content;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        border-radius: 8px;
    }

    .link-container:nth-child(5) {
        background-color: var(--primary-blue);
    }

    .link-container .link {
        display: flex;
        flex-direction: row;
        align-items: center;
        color: var(--secondary-blue);
        font-size: var(--nav-link-size);
        line-height: 1.05rem;  
        width: fit-content;     
        height: 100%;
        padding: 0.5rem;
        border-radius: 8px;
        border: 1px solid transparent;
        outline: none;
        cursor: pointer;
        text-decoration: none;
        transition: all 0.4s ease-out;
    }

    .link-container:nth-child(5) .link {
        color: var(--white-text);
    }

    .link-container .link:hover {
        border: 1px solid var(--light-blue-bg);
        box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    }

    /* === Link Name === */
    .link span {
        font-size: 11px;
        font-weight: 400;
        margin: 0 8px;
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
        .nav-link-container {
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
            right: var(--sidebar-width);
            width: var(--sidebar-width);
            height: 100%;
            background-color: #fff;
            transition: right 0.3s ease;
            z-index: 1000;
            box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
            transform: translateX(100%);
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
            font-size: 12px;
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
            width: calc(100% - var(--sidebar-width));
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.25);
            transition: opacity 0.3s ease;
            opacity: 0.1;
            filter: blur(5px);
            -webkit-filter: blur(5px);
            /* visibility: hidden; */
            z-index: 20;
        }

        .overlay.active {
            opacity: 0.5;
            visibility: visible;
        }

        

    }

</style>