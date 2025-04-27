<template>
    <div
      class="flex w-[281px] flex-col items-start space-y-4 p-4 rounded-none bg-transparent"
    >
      <div class="w-full h-[206px] rounded-2xl overflow-hidden">
        <img :src="img" alt="Imagen" class="w-full h-full object-cover" />
      </div>
  
      <h2 class="text-3xl font-extrabold text-white">
        {{ title }}
      </h2>
  
      <p class="font-medium text-white">
        {{ text }}
      </p>
  
      <a
        href="#"
        class="font-medium text-white hover:text-primary cursor-pointer transition"
      >
        {{ linkText }}
      </a>
    </div>
  </template>
    
    <script setup>
  import { defineProps } from "vue";
  
  defineProps({
    img: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "Lawyer",
    },
    text: {
      type: String,
      default:
        "Plataforma para gestionar casos, audiencias y documentos legales de forma organizada y eficiente.",
    },
    linkText: {
      type: String,
      default: "Leer más",
    },
  });
  </script>