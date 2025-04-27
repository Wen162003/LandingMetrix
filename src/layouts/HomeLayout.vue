<template>
    <div class="bg-backgraund ">
        <NavBarComponent />
        <main class="pt-32">
            <router-view />
        </main>
        <FooterComponent />
    </div>
</template>
<script setup>
import FooterComponent from '@/components/Organisms/Footer/FooterComponent.vue'
import NavBarComponent from '@/components/Organisms/NavBar/NavBarComponent.vue'
</script>