<template>
    <div class="p-4 fixed w-full">
      <nav
        class="flex items-center justify-between p-4 bg-NavBar rounded-xl shadow"
      >
        <div>
          <img class="h-12 w-auto" src="../../../assets/Img/logo.png" alt="Logo metrix" />
        </div>
  
        <ul class="flex space-x-4">
          <li>
            <router-link
              to="#inicio"
              class="relative pb-1 text-primary font-medium after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-primary"
            >
              Inicio
            </router-link>
          </li>
          <li>
            <router-link
              to="#servicios"
              class="text-white font-medium hover:text-primary transition"
            >
              Servicios
            </router-link>
          </li>
          <li>
            <router-link
              to="#productos"
              class="text-white font-medium hover:text-primary transition"
            >
              Productos
            </router-link>
          </li>
          <li>
            <router-link
              to="#quienes-somos"
              class="text-white font-medium hover:text-primary transition"
            >
              Quiénes somos
            </router-link>
          </li>
        </ul>
  
        <div>
          <ButtonComponent size="sm" text="Contactar" />
        </div>
      </nav>
    </div>
  </template>
    
    <script setup>
  import ButtonComponent from "@/components/Atoms/Button/ButtonComponent.vue";
  </script>