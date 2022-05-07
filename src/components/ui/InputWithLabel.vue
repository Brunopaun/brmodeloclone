<template>
    <div class="w-full flex flex-col">
        <label 
            class="inline-block font-light max-w-full mb-1/5 cursor-default"
            :for="id"

        >
            {{label}} 
        </label>
        <input
            class="text-inputWithLabel rounded-md border px-4 py-2.5 outline-none bg-white w-full text-graybr"
            :class="{'text-redbr':hasError}" 
            :id="id" 
            type="text"
            autocomplete="off"
            :placeholder="placeholder"
        >
    </div>   
</template>

<script>
export default {
    name: "InputWithLabel",
    props:{
        label: {
            type: String,
            default: ""
        },
        id:{
            type: [String, Number],
        },
        placeholder:{
            type: String,
            default:""
        },
        hasError:{
            type: Boolean,
            default: false
        }
    },

}
</script>

<style>

</style>