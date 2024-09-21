
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
        width: 100%;
        height: var(--service-custom-height);
        border-radius: 8px;
        padding: 1rem;
        background-color: #C9DBE838;
    }

    .icon {
        width: var(--service-i-width);
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
        font-size: var(--service-h3-size);
        font-weight: 600;
        line-height: 1.5rem;
        text-align: left;
        color: #384A62;
        margin-bottom: 4px;
    }

    .description p {
        font-family: Inter;
        font-size: var(--service-p-size);
        font-weight: 400;
        line-height: 28px;
        text-align: left;
        color: #506683;
    }
</style>