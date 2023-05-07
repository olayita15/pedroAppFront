<template>
  <div class="container">
    <v-form class="" validate-on="submit" @submit.prevent="submitForm">
      <v-text-field v-model="employee.name" label="Nombre"></v-text-field>

      <v-text-field v-model="employee.phone" label="Télefono"></v-text-field>

      <v-text-field v-model="employee.id_card" label="Documento"></v-text-field>

      <v-text-field v-model="employee.email" label="Correo"></v-text-field>

      <v-select v-model="selectedOffice" :items="officesNames" label="Oficina"></v-select>

      <v-btn type="submit" class="btn btn-primary">Guardar</v-btn>
    </v-form>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { ref } from "vue";
import Employee from "@/services/api/Employee.js";
import Office from "@/services/api/Office.js";

export default {
  setup() {
    const router = useRouter();
    const employee = ref(null);

    const offices = ref([]);
    const officesNames = ref([]);

    const selectedOffice = ref(null);

    const submitForm = () => {
      // Obtiene el ID de la oficina seleccionada
      const officeId = getOfficeIdByName(selectedOffice.value);
      // Asigna el ID al objeto employee
      employee.value.office = officeId;

      Employee.updateEmployee(employee.value.id, employee.value)
        .then((response) => {
          console.log(response.data);
          alert("Trabajador actualizado");
          router.push({ name: "Employees" });
        })
        .catch((error) => {
          console.log(employee.value);
          console.error(error);
        });
    };

    const getOffices = () => {
      Office.getOffices()
        .then((response) => {
          const officesArray = response.data;
          offices.value = officesArray.map((element) => element.id);
          officesNames.value = officesArray.map((element) => element.name);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    const getOfficeIdByName = (name) => {
      // Obtiene el ID de la oficina a partir de su nombre
      const index = officesNames.value.indexOf(name);
      return offices.value[index];
    };

    const getEmployee = (id) => {
      Employee.getEmployee(id)
        .then((response) => {
          employee.value = response.data;
          selectedOffice.value = getOfficeNameById(employee.value.office);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    const getOfficeNameById = (id) => {
      // Obtiene el nombre de la oficina a partir de su ID
      const index = offices.value.indexOf(id);
      return officesNames.value[index];
    };

    const mounted = () => {
      getOffices();
      const id = parseInt(router.currentRoute.value.params.id);
      getEmployee(id);
    };

    mounted();

    return {
      employee,
      selectedOffice,
      officesNames,
      submitForm,
    };
  },
};
</script>

<style lang="scss" scoped></style>
