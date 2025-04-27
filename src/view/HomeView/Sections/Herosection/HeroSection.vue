<template>
    <section class="flex flex-col md:flex-row gap-20">
        <div class="w-full lg:w-1/2 space-y-8 p-6 md:p-20">
            <h1 class=" font-extrabold leading-tight text-6xl text-white">
                <Strong class="text-primary">Innovación</Strong> <br />
                que impulsa tu crecimiento
            </h1>
            <p class="text-xl font-medium text-white">
                Impulsamos tus procesos empresariales con soluciones seguras y
                escalables.
            </p>
            <ButtonComponent text="¡Contactanos!" />
        </div>
        <div class="hidden lg:block">
            <img src="../../../../assets/Img/ImagenInicial.png" alt="" />
        </div>
    </section>
</template>

<script setup>
import ButtonComponent from "@/components/Atoms/Button/ButtonComponent.vue";
</script>