
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
        justify-content: space-between;
        width: 100%;
        height: 100%;
        border-radius: 8px;
        padding: 1.2rem;
        background-color: #C9DBE838;
    }

    .icon {
        display: flex;
        justify-content: center;
        align-content: center;
        border-radius: 8px;
        text-align: left;
        margin-bottom: 4px;
        padding: 1rem;
        width: 68px;
        height: 54px;
        background-color: var(--white-text);
    }

    .icon i {
        width: 30px;
        height: 30px;
        border-radius: 8px;
        display: flex;
        align-items: center;
    }

    .icon i > span {
        display: flex;
        align-items: center;
        width: 25px;
        height: 25px;
        color: var(--primary-blue);
    }

    .heading-description {
        width: 100%;
        height: 120px;
        margin-top: 12px;
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

</style>