<template>
    <section class="w-full py-4 pb-8 px-6 md:px-20 text-white">
        <h2 class="text-white font-bold text-2xl text-center">
            Conectemos y construyamos el futuro <br> de tu empresa.
        </h2>
        <!-- Alertas -->
        <div v-if="successMessage" class="mt-4 p-4 bg-green-600 text-white rounded-md text-center">
            {{ successMessage }}
        </div>
        <div v-if="errorMessage" class="mt-4 p-4 bg-red-600 text-white rounded-md text-center">
            {{ errorMessage }}
        </div>
        <form @submit.prevent="handleSubmit" class="flex flex-col lg:flex-row gap-6 mt-8">
            <div class="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 px-0 md:px-8">
                <InputComponent v-model="form.name" :error="errors.name" text-error="El nombre es requerido"
                    label="Nombre" placeholder="Ingresa tu nombre" />
                <InputComponent v-model="form.contry" :error="errors.contry" text-error="El pais es requerido"
                    label="Pais" placeholder="Ingresa tu pais" />
                <InputComponent v-model="form.email" :error="errors.email" text-error="Ingresa un correo válido"
                    label="Correo electrónico" placeholder="Ingresa tu correo" />
                <InputComponent v-model="form.phone" :error="errors.phone" text-error="El teléfono es requerido"
                    label="Teléfono" placeholder="Ingresa tu teléfono" />
                <SelectedComponent v-model="form.service" :options="opcionesservices" :error="errors.service"
                    text-error="Selecciona un service" label="service" class="md:col-span-2" />
                <TextAreaComponent v-model="form.message" :error="errors.message" text-error="El mensaje es requerido"
                    label="Mensaje" placeholder="Cuéntanos tu proyecto" class="md:col-span-2" />
                <ButtonComponent :text="isLoading ? 'Cargando...' : 'Enviar'" :disabled="isLoading"
                    class="md:col-span-2" />
            </div>

            <div class="w-full lg:w-1/3 space-y-8">
                <div class="space-y-2">
                    <h3 class="text-primary font-medium text-lg">Conecta con nosotros</h3>
                    <div>
                        <p>info@metrix.com.co</p>
                        <p>(+57) 322 987 45 36</p>
                    </div>
                </div>
                <div class="space-y-2">
                    <h3 class="text-primary font-medium text-lg">Dirección</h3>
                    <div>
                        <p>Colombia - Neiva</p>
                        <p>Neiva, calle No, 7-56 Centro</p>
                    </div>
                </div>
            </div>
        </form>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import TextAreaComponent from '@/components/Atoms/TextArea/TextAreaComponent.vue';
import InputComponent from '@/components/Atoms/Input/InputComponent.vue';
import SelectedComponent from '@/components/Atoms/Selected/SelectedComponent.vue';
import ButtonComponent from '@/components/Atoms/Button/ButtonComponent.vue';
import ContactService from '@/Services/ContactService';

const form = ref({
    name: '',
    contry: '',
    email: '',
    phone: '',
    service: '',
    message: '',
});

const errors = ref({
    name: false,
    contry: false,
    email: false,
    phone: false,
    service: false,
    message: false,
});

const isLoading = ref(false);
const successMessage = ref('');
const errorMessage = ref('');

const opcionesservices = [
{
        text: 'Diseño y Desarrollo Web',
        value: 'Diseño y Desarrollo Web'
    },
    {
        text: 'Software Corporativo',
        value: 'Software Corporativo'
    },
    {
        text: 'Integración de sistemas',
        value: 'Integración de sistemas'
    },
    {
        text: 'Estrategia y consultoria',
        value: 'Estrategia y consultoria'
    },
];

const validateForm = () => {
    let valid = true;

    errors.value.name = !form.value.name.trim();
    errors.value.email = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email);
    errors.value.phone = !form.value.phone.trim();
    errors.value.service = !form.value.service;
    errors.value.message = !form.value.message.trim();

    for (const error of Object.values(errors.value)) {
        if (error) {
            valid = false;
            break;
        }
    }

    return valid;
};

const handleSubmit = async () => {
    successMessage.value = '';
    errorMessage.value = '';

    if (!validateForm()) {
        errorMessage.value = 'Por favor, completa todos los campos correctamente.';
        return;
    }

    isLoading.value = true;

    try {
        ContactService.sendContact(form.value)
        successMessage.value = '¡Mensaje enviado exitosamente!';
        
        console.log(form.value);
        clearData()
    } catch (error) {
        errorMessage.value = 'Hubo un error al enviar el mensaje.';
    } finally {
        isLoading.value = false;
    }
};


const clearData = ()=>{
    form.value = {
            name: '',
            contry: '',
            email: '',
            phone: '',
            service: '',
            message: '',
        };
}
</script>