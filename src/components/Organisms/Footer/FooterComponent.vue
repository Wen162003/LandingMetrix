<template>
    <footer class="bg-white">
        <section class="px-6">
            <div class="border-b border-border py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                <section>
                    <img class="h-20 w-auto" src="../../../assets/Img/logo.png" alt="Logo metrix" />
                </section>
                <section class="space-y-4  ">
                    <h3 class="font-medium text-2xl">
                        servicios
                    </h3>
                    <ul>
                        <li class="hover:text-primary">
                            <router-link to="#">Diseño y Desarrollo Web</router-link>
                        </li>
                        <li class="hover:text-primary">
                            <router-link to="#">Software Corporativo</router-link>
                        </li>
                        <li class="hover:text-primary">
                            <router-link to="#">Integración de sistemas</router-link>
                        </li>
                        <li class="hover:text-primary">
                            <router-link to="#">Estrategia y consultoria</router-link>
                        </li>
                    </ul>
                </section>
                <section class="space-y-4">
                    <h3 class="font-medium text-2xl">
                        Productos
                    </h3>
                    <ul>
                        <li class="hover:text-primary">
                            <router-link to="#">Lawyer</router-link>
                        </li>
                        <li class="hover:text-primary">
                            <router-link to="#">Data</router-link>
                        </li>
                        <li class="hover:text-primary">
                            <router-link to="#">Cashing</router-link>
                        </li>
                    </ul>
                </section>
                <section class="space-y-4">
                    <h3 class="font-medium text-2xl">
                        Información de contacto
                    </h3>
                    <ul>
                        <li>
                            <p class="text-primary font-medium">
                                Colombia, Neiva
                            </p>
                        </li>
                        <li>
                            <p class="">
                                info@metrix.com.coColombia, Neiva
                            </p>
                        </li>
                        <li>
                            <p>
                                www.metrix.com.co
                            </p>
                        </li>
                        <li>
                            <p>
                                Neiva,calle No, 7-56 Centro
                            </p>
                        </li>

                    </ul>
                </section>

            </div>
            <div class="text-center py-6 space-y-4">
                <section class="flex justify-center gap-8">
                    <div class="border p-1 rounded-full w-8 flex items-center justify-center">
                        <a href="">
                            <FacebookIcon />
                        </a>
                    </div>
                    <div class="border p-1 rounded-full w-8 flex items-center justify-center">
                        <a href="">
                            <GitHubIcon />
                        </a>
                    </div>
                    <div class="border p-1 rounded-full w-8 flex items-center justify-center">
                        <a href="">
                            <LinkedinIcon />
                        </a>
                    </div>
                </section>
                <span>
                    Copyright <strong class="text-primary">Metrix</strong> All rights reserved 2025
                </span>
            </div>
        </section>
    </footer>
</template>

<script setup>
import FacebookIcon from '@/components/Icons/Facebook/FacebookIcon.vue';
import GitHubIcon from '@/components/Icons/Github/GitHubIcon.vue';
import LinkedinIcon from '@/components/Icons/Linkedin/LinkedinIcon.vue';

</script>