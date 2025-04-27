<template>
    <section class="px-6 md:px-20 py-16">
        <div class="flex flex-col lg:flex-row justify-between py-8 space-y-6 md:space-y-0">
            <h1 class="text-white font-extrabold text-4xl md:text-6xl leading-tight">
                Casos de éxito <br> <strong class="text-primary">Innovadores</strong>
            </h1>
            <p class="text-white font-medium text-lg md:text-xl lg:w-1/3">
                En <strong class="text-primary">Metrix</strong> , creamos soluciones
                digitales únicas y a medida, impulsando el crecimiento de quienes
                confían en nosotros.
            </p>
        </div>

        <div class="flex justify-between gap-8 py-8 flex-wrap">
            <Card :img="Lawyer" />
            <Card :img="Cashing" title="Cashing"
                text="Plataforma para gestionar y optimizar la recuperación de cartera empresarial" />
            <Card :img="Data" title="Data"
                text="software de gestión política facilita la planificación, análisis y seguimiento de campañas electorales para candidatos y partidos." />
        </div>
    </section>
</template>

<script setup>
import Card from "@/components/Molecules/Card/CardComponent.vue";
import Lawyer from "@/assets/Img/Lawyer.png";
import Cashing from "@/assets/Img/Cashing.png";
import Data from "@/assets/Img/Data.png";
</script>