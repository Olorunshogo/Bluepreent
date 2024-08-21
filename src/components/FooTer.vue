
<template>
    <div>
        <div class="footer-container">

            <div class="hr">
                <hr>
            </div>

            <div class="container">
                <div class="logo-copyright">
                    <div class="logo">
                        <img src="../images/Bluepreent.png" alt="Bluepreent Image">
                    </div>

                    <div class="copyright">
                        <p><span class="copy">&copy;</span> Copyright 2022 Bluepreent-Declutter</p>
                    </div>
                </div>

                <div class="information">
                    <div class="contacts">
                        <div class="phone">
                            <h4>Phone</h4>
                            <p>+234 8029 290 1100</p>
                        </div>

                        <div class="e-mail">
                            <h4>E-mail</h4>
                            <p>support@bluepreent.com</p>
                        </div>

                        <div class="social">
                            <h4>Social</h4>
                            <p>Twitter, Facebook</p>
                        </div>
                    </div>

                    <div class="location">
                        <h4>Lagos, Nigeria</h4>
                        <p>Gabriel House, Victoria Island, 1102, NG</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="css" scoped>
    .footer-container {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        max-height: 100%;
        height: 432px;
        width: 100%;
        position: relative;
    }

    .hr {
        width: 90%;
        max-width: 1250px;
        height: 1px;
        background-color: #EEF0F2;
        position: relative;
        top: 2rem;
    }

    .container {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        height: 100%;
        max-height: 408px;
        width: 100%;
        padding: 76px;
        flex: 0 0 100%;
        max-width: 0 0 100%;
    }

    .container > div {
        width: 50%;
        height: 100%;
        flex: 0 0 50%;
        max-width: 0 0 50%;
    }

    .logo-copyright {
        display: flex;
        flex-direction: column;
        justify-items: space-evenly;
        max-width: 350px;
        width: 100%;
        /* width: 342px; */
        max-height: 198px;
        height: 100%;
    }

    .logo-copyright .logo {
        max-width: 150px;
        width: 100%;
        height: 32px;
        display: flex;
        align-items: center;
    }

    .logo-copyright .logo img {
        max-width: 150px;
        width: 100%;
        height: 32px;
        display: flex;
        align-items: center;
    }

    .logo-copyright .copyright {
        font-family: Inter;
        font-size: 13px;
        font-weight: 400;
        line-height: 1.25rem;
        letter-spacing: -0.10000000149011612px;
        text-align: left;
        color: #879196;
        max-width: 255px;
        width: 100%;
        height: 100%;
        max-height: 45px;
    }

    .information {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-content: center;
        height: 100%;
    }

    .information > div {
        width: 50%;
        flex: 0 0 50%;
        max-width: 0 0 50%;
    }

    .information > div h4 {
        font-family: Inter;
        font-size: 13px;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: -0.10000000149011612px;
        text-align: left;
        color: #879196;
    }

    .information > div p {
        font-family: Inter;
        font-size: 15px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: -0.20000000298023224px;
        text-align: left;
        color: #44484B;
    }

    .information .contacts {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        max-height: 200px;
    }

    .information .contacts > div,
    .information .location {
        width: 100%;
        width: 100%;
        margin-bottom: 1.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .information .contacts > div {
        height: 50px;
    }

    .information .location {
        height: 67px;
    }

    

</style>