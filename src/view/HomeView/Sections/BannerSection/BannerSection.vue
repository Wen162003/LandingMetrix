<template>
    <section class="px-6 md:px-20 md:pb-10">
        <section class="px-6 md:px-20 py-16 bg-gradient-to-r from-secondary to-gradient rounded-2xl">
            <div class="flex flex-col items-center text-center space-y-6">
                <div class="flex flex-col space-y-4 items-center text-center">
                    <h1 class="text-white font-extrabold text-4xl md:text-6xl leading-tight ">
                        En <strong class="text-primary">Metrix</strong>, tu crecimiento es
                        nuestro compromiso.
                    </h1>
                    <p class="text-white font-medium text-lg md:text-xl max-w-2xl">
                        Creamos soluciones innovadoras y seguras que fortalecen el futuro de
                        tu empresa
                    </p>
                </div>
                <div>
                    <ButtonComponent text="¡Contactanos!" />
                </div>
            </div>
        </section>
    </section>
</template>

<script setup>
import ButtonComponent from "@/components/Atoms/Button/ButtonComponent.vue";
</script>