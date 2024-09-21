
<template>
    <div>
        <div class="footer-container">

            <div class="hr">
                <hr>
            </div>

            <div class="container">
                <div class="logo-copyright">
                    <div class="logo">
                        <RouterLink to="/">
                            <img src="../images/Bluepreent.png" alt="Bluepreent Image">
                        </RouterLink>
                    </div>

                    <div class="copyright">
                        <p><span class="copy">&copy;</span> Copyright 2022 Bluepreent-Declutter</p>
                    </div>
                </div>

                <div class="information">
                    <div class="contacts">
                        <div class="phone">
                            <h2>Phone</h2>
                            <p>+234 8029 290 1100</p>
                        </div>

                        <div class="e-mail">
                            <h2>E-mail</h2>
                            <p>support@bluepreent.com</p>
                        </div>

                        <div class="social">
                            <h2>Social</h2>
                            <p>Twitter, Facebook</p>
                        </div>
                    </div>

                    <div class="location">
                        <h2>Lagos, Nigeria</h2>
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
        width: 100%;
        height: 100%;
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
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        width: 100%;
        height: 100%;
        padding: 5rem 4rem;
    }

    .logo-copyright {
        display: flex;
        flex-direction: column;
        justify-items: space-evenly;
        width: 100%;
        max-width: 350px;
        max-height: 198px;
        height: 100%;
        margin-bottom: 1rem;
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
        margin-top: 0.4rem;
    }

    .information {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        width: 100%;
        height: 100%;
    }

    .information > div h2 {
        font-family: Inter;
        font-size: var(--footer-h2);
        font-weight: 400;
        line-height: 18px;
        letter-spacing: -0.10000000149011612px;
        text-align: left;
        color: #879196;
    }

    .information > div p {
        font-family: Inter;
        font-size: var(--footer-p);
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
        height: 100%;
        margin-bottom: 0.5rem;
    }

    .information .contacts > div {
        height: 50px;
    }

    .information .location {
        height: var(--footer-location-height);
    }

    @media (max-width: 760px) {
        .container {
            padding: 5rem 2rem;
        }
    }

</style>