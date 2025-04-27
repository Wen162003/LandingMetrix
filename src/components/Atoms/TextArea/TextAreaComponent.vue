<template>
    <div class="flex flex-col gap-2">
      <div class="flex gap-2 items-center">
        <label class="block text-subtitulos text-sm mb-1 text-white">{{ label }}</label>
      </div>
      <textarea
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :class="error ? 'border-error focus:ring-error' : 'border-border focus:ring-primario'"
        class="w-full px-4 py-2 border border-border text-white bg-texture rounded-md focus:outline-none focus:ring-2"
        :placeholder="placeholder"
      ></textarea>
      <p v-show="error" class="text-error text-xs text-red-400">{{ textError }}</p>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from "vue";
  
  defineProps({
    label: { type: String, default: "label" },
    placeholder: { type: String, default: "Ingresa tu información" },
    modelValue: { type: String, default: "" },
    textError: { type: String, default: "error" },
    error: { type: Boolean, default: false },
  });
  
  defineEmits(["update:modelValue"]);
  </script>
  