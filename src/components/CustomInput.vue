
<script setup>
    import { computed, defineProps } from 'vue';

    const props = defineProps({
        label: { type: String, default: '' },
        placeholder: String,
        modelValue: {
            type: String,
            required: true,
        },
        type: {
            required: true,
            type: String,
            default: 'text',
        },
        id: {
            type: String,
            required: true,
        },
        required: {
            default: false,
            type: Boolean,
        },
        autocomplete: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        errorMessage: {
            type: String,
        }
    });

    const inputAttributes = {
        required: props.required,
    }

    // Making use of writable computed
    const emit = defineEmits(['update:modelValue']);

    const proxyValue = computed({
        get() {
            return props.modelValue
        },
        set(newValue) {
            emit('update:modelValue', newValue)
        }
    })
</script>


<template>
    <div>
        <label :for="id"></label>
        <input
            :placeholder="placeholder" :label="label"
            :type="type" v-model="proxyValue" :id="id" :name="name"
            :autocomplete="autocomplete" v-bind="inputAttributes"
        />
    </div>

</template>

<style lang="css" scoped>
    input {
        width: 100%;
        height: 100%;
        outline: none;
        border: none;
        /* font-size: 13px;
        font-weight: 400; */
        /* caret-color: #05283E; */
        cursor: pointer;
        display: flex;
        flex-direction: row;
        align-items: center;
        /* margin: auto 0; */
        background-color: transparent;
    }

    input::placeholder {
        font-size: 14px;
        font-weight: 400;
        color: #98A2B3;
    }

    input:focus {
        cursor: text;
    }
</style>