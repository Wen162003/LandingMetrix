<template>
    <button
      :class="[
        'rounded-xl bg-primary text-black transition hover:bg-primary/90 cursor-pointer',
        sizeClass
      ]"
    >
      {{ text }}
    </button>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  
  const props = defineProps({
    text: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: 'lg', 
      validator: (value) => ['lg', 'sm'].includes(value)
    }
  })
  
  const sizeClass = computed(() => {
    return props.size === 'lg'
      ? 'text-[20px] py-3 px-4 font-medium'
      : 'text-base py-2 px-4 font-medium'
  })
  </script>
  