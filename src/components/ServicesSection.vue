
<script setup>

    import CustomServices from "./CustomServices.vue";

    import ClockIcon from "./icons/ClockIcon.vue";
    import GraduationIcon from "./icons/GraduationIcon.vue";
    import PayIcon from "./icons/PayIcon.vue";

</script>

<template>
    <div>
        <div class="page-container" title="YServices">
            <div class="container">
                <h2 title="You can count on us">
                    You can count on us for: 
                </h2>
                <div class="services-container">                    
                    <div class="service" title="Quick and Convenient">
                        <CustomServices>
                            <template v-slot:icon>
                                <div>
                                    <ClockIcon />
                                </div>
                            </template>

                            <template #heading>
                                <div>
                                    Quick and Convenient:
                                </div>
                            </template>

                            <template #description>
                                <div>
                                    List your items in a snap and find what you need in just a few clicks.
                                </div>
                            </template>
                        </CustomServices>
                    </div> 

                    <div class="service" title="Connect with Peers">
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

                    <div class="service" title="Easy Cash">
                        <CustomServices>
                            <template v-slot:icon>
                                <div>
                                    <PayIcon />
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
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: var(--page-padding);
        cursor: default;
    }

    .container {
        width: 90%;
        height: 70%;
        gap: var(--services-container-gap);
        display: flex;
        flex-direction: column;
        justify-self: space-between;
        margin: auto;
        padding: 6rem 0;
    }

    .container h2 {
        font-family: Inter;
        font-size: var(--services-h2);
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
        font-size: var(--services-span);
        line-height: 2.05rem;
        display: flex;
        align-items: center;
        margin-left: 4px;
        margin-bottom: 4px;
    }

    .services-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: var(--services-container-gap);
    }

    .service {
        border-radius: 8px;
        transition: all 0.5s ease-in-out;
    }

    .service:hover {
        transform: scale(1.05);
        border: 1px solid #eee;
    }

    .service #easy-cash {
        font-size: 1.25rem;
        font-weight: 700;
    }
    
</style>