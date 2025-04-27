<template>
    <section class="flex flex-col items-center space-y-8 py-8">
        <div class="text-center space-y-1">
            <h2 class="text-primary font-semibold text-3xl">¿Por qué Metrix?</h2>
            <p class="text-white font-medium text-xl">
                Somos una empresa que se caracteriza por:
            </p>
        </div>

        <div class="flex flex-wrap justify-center gap-8">
            <div class="flex items-center space-x-2 text-white hover:text-primary transition cursor-pointer">
                <Users />
                <h2 class="font-medium">Trabajo en equipo</h2>
            </div>

            <div class="flex items-center space-x-2 text-white hover:text-primary transition cursor-pointer">
                <Rocket />
                <h2 class="font-medium">Innovación sin límites</h2>
            </div>

            <div class="flex items-center space-x-2 text-white hover:text-primary transition cursor-pointer">
                <Palette />
                <h2 class="font-medium">Creatividad</h2>
            </div>

            <div class="flex items-center space-x-2 text-white hover:text-primary transition cursor-pointer">
                <Lightbulb />
                <h2 class="font-medium">Estrategias disruptivas</h2>
            </div>

            <div class="flex items-center space-x-2 text-white hover:text-primary transition cursor-pointer">
                <Handshake />
                <h2 class="font-medium">Compromiso con la calidad</h2>
            </div>
        </div>
    </section>
</template>

<script setup>
import { Rocket, Lightbulb, Palette, Users, Handshake } from "lucide-vue-next";

</script>