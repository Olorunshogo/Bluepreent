

<template>
    <label for="label">{{ label }}</label>
    <input
        :placeholder="placeholder" :label="label" :value="modelValue" 
        :type="type" :id="id" :name="name" autocomplete="autocomplete"
        @input="$emit('update:modelValue', $event.target.value)"
    />

</template>

<script setup>
    defineProps({
        label: { type: String, default: '' },
        placeholder: String,
        modelValue: {
            type: String,
            required: true,
        },
        type: {
            required: true,
            type: String,
        },
        id: {
            type: String,
            required: true,
        },
        required: {
            required: true,
        },
        autocomplete: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        minlength: {
            type: Number,
        }
    });
</script>