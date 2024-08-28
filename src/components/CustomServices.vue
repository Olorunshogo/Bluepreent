
<script setup>

</script>

<template>
    <div>
        <div class="container">
            <div class="icon">
                <i><span><slot name="icon"></slot></span></i>
            </div>

            <div class="heading-description">
                <div class="heading">
                    <h3><slot name="heading"></slot></h3>
                </div>

                <div class="description">
                    <p><slot name="description"></slot></p>
                </div>
            </div>
        </div>
    </div>
</template>



<style lang="css" scoped>
    .container {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-height: 100%;
        height: 250px;
        border-radius: 8px;
        padding: 1.2rem;
        background-color: #C9DBE838;
    }

    .icon {
        width: 68px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        margin-bottom: 4px;
        padding: 1rem;
        color: var(--primary-blue);
        background-color: var(--white-text);
    }

    .icon i {
        width: 30px;
        height: 30px;
        border-radius: 8px;
        display: flex;
        justify-items: center;
        align-items: center;
        font-size: 1.2rem;
    }

    .icon i > span {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 25px;
        height: 25px;
        margin: auto;
    }

    .heading-description {
        width: 100%;
        max-height: 60px;
        margin: 12px 0;
    }

    .heading h3 {
        font-family: Inter;
        font-size: 1.25rem;
        font-weight: 600;
        line-height: 1.5rem;
        text-align: left;
        color: #384A62;
        margin-bottom: 4px;
    }

    .description p {
        font-family: Inter;
        font-size: 1rem;
        font-weight: 400;
        line-height: 28px;
        text-align: left;
        color: #506683;
    }

    @media (max-width: 1050px) {
        .container {
            padding: 1rem;
        }

        .icon {
            width: 60px;
            height: auto;
            padding: 1rem;
        }

        .icon i {
            width: 25px;
            height: 25px;
            font-size: 1rem;
        }

        .icon i > span {
            width: 20px;
            height: 20px;
        }

        .heading-description {
            margin: 8px 0;
        }

        .heading h3 {
            font-size: 1.1rem;
        }

        .description p {
            font-size: 0.9rem;
            line-height: 24px;
        }

    }

    @media (max-width: 760px) {
        .container {
            padding: 12px;
            height: 240px;
        }

        .icon {
            width: 50px;
            height: 50px;
            padding: 12px;
        }

        .icon i {
            font-size: 0.9rem;
        }

        .heading-description {
            margin: 8px 0;
            max-height: 100%;
        }

        .heading h3 {
            font-size: 1.1rem;
        }

        .description p {
            font-size: 1rem;
            line-height: 24px;
        }

    }

    @media (max-width: 450px) {
        .container {
            padding: 1rem;
        }

        .icon {
            width: 60px;
            height: auto;
            padding: 1rem;
        }

        .icon i {
            width: 25px;
            height: 25px;
            font-size: 1rem;
        }

        .icon i > span {
            width: 20px;
            height: 20px;
        }

        .heading-description {
            margin: 8px 0;
            gap: 1rem;
        }

        .heading h3 {
            font-size: 1.1rem;
        }

        .description p {
            font-size: 0.9rem;
            line-height: 24px;
        }

    }

</style>