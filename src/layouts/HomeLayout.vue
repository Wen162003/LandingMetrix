<template>
    <div class="px-6 bg-backgraund h-screen">
        <h1 class="text-3xl text-red-500">
            layout
        </h1>
        <ButtonComponent text="Holaa" />
        <InputComponent />
    </div>
</template>
<script setup>
import ButtonComponent from '../components/Atoms/Button/ButtonComponent.vue'
import InputComponent from '../components/Atoms/Input/InputComponent.vue'

</script>