<template>
  <div class="container p-5">
    <form @submit.prevent="submitForm">
    <div class="input-group input-group-sm mb-3">
      <span class="input-group-text" id="inputGroup-sizing-sm">Nombre</span>
      <input
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-sm"
        v-model="employee.name"
        required
      />
    </div>
    <div class="input-group input-group-sm mb-3">
      <span class="input-group-text" id="inputGroup-sizing-sm">Télefono</span>
      <input
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-sm"
        v-model="employee.phone"
        required
      />
    </div>
    <div class="input-group input-group-sm mb-3">
      <span class="input-group-text" id="inputGroup-sizing-sm">Documento</span>
      <input
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-sm"
        v-model="employee.id_card"
        required
      />
    </div>
    <div class="input-group input-group-sm mb-3">
      <span class="input-group-text" id="inputGroup-sizing-sm">Correo</span>
      <input
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-sm"
        v-model="employee.email"
        required
      />
    </div>
    <div class="input-group input-group-sm mb-3">
      <span class="input-group-text" id="inputGroup-sizing-sm">Officina</span>
      <input
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-sm"
        v-model="employee.office"
        required
      />
    </div>
    <button type="submit" class="btn btn-primary">Crear</button>
    </form>
  </div>
</template>

<script>
import { useRouter }  from 'vue-router';
import { ref } from 'vue';
import Employee from "@/services/api/Employee.js";

export default {
  
  setup() {
    const router = useRouter();
    const employee = ref({
      name: '',
      phone: '',
      id_card: '',
      email: '',
      office: '',
    });

    const submitForm = () => {
      Employee.createEmployee(employee.value)
        .then(response => {
          console.log(response.data);
          alert('Trabajador Creado');
          router.push({ name: 'Employees' });
        })
        .catch(error => {
          console.log(employee.value);
          console.error(error);
        });
    };

    return {
      employee,
      submitForm
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
