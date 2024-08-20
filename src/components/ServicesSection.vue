
<script setup>
    import CustomServices from "./CustomServices.vue";
    import GraduationIcon from "./icons/GraduationIcon.vue";

</script>

<template>
    <div>
        <div class="page-container">
            <div class="container">
                <h2>You can count on us for <span>&#128077;</span></h2>

                <div class="services-container">                    
                    <div class="service">
                        <CustomServices>
                            <template v-slot:icon>
                                <div>
                                    <GraduationIcon />
                                </div>
                            </template>

                            <template #heading>
                                <div>
                                    Quick and Convenient
                                </div>
                            </template>

                            <template #description>
                                <div>
                                    List your items in a snap and find what you need in just a few clicks.
                                </div>
                            </template>
                        </CustomServices>
                    </div> 

                    <div class="service">
                        <CustomServices>
                            <template v-slot:icon>
                                <div>
                                    <GraduationIcon />
                                </div>
                            </template>

                            <template #heading>
                                <div>
                                    Student-Friendly:
                                </div>
                            </template>

                            <template #description>
                                <div>
                                    Connect with your peers and find items you need at student-friendly prices.
                                </div>
                            </template>
                        </CustomServices>
                    </div>

                    <div class="service">
                        <CustomServices>
                            <template v-slot:icon>
                                <div>
                                    <GraduationIcon />
                                </div>
                            </template>

                            <template #heading>
                                <div id="easy-cash">
                                    Easy Cash:
                                </div>
                            </template>

                            <template #description>
                                <div>
                                    Turn your unused items into money for your next adventure.
                                </div>
                            </template>
                        </CustomServices>
                    </div>                     
                </div>
            </div>

        </div>
    </div>
</template>



<style lang="css" scoped>
    .page-container {
        width: 100%;
        max-width: 1440px;
        height: 100%;
        height: 600px;
        display: flex;
        flex-direction: column;

    }

    .container {
        width: 90%;
        max-width: 1310px;
        height: 60%;
        max-height: 340px;
        gap: 2rem;
        display: flex;
        flex-direction: column;
        justify-self: space-between;
        margin: auto;
    }

    .container h2 {
        font-family: Inter;
        font-size: 1.9rem;
        font-weight: 700;
        line-height: 2.05rem;
        text-align: left;
        color: #384A62;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-items: left;
    }

    .container h2 span {
        width: 1rem;
        height: 1rem;
        font-size: 1.2rem;
        line-height: 2.05rem;
        display: flex;
        align-items: center;
        margin-left: 4px;
    }

    .services-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 5rem;
        width: 100%;
        max-width: 1310px;
        max-height: 220px;
        height: 50%;
        margin: auto;
    }

    .service {
        max-width: 390px;
        width: 33%;
        height: 100%;
        max-height: 340px;
    }

    .service #easy-cash {
        font-size: 1.25rem;
        font-weight: 700;
    }

    
</style>