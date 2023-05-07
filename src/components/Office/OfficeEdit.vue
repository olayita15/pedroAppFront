<template>
  <div class="container">
    <v-form class="" validate-on="submit" @submit.prevent="submitForm">
      <v-text-field v-model="office.name" label="Nombre"></v-text-field>

      <v-text-field v-model="office.phone" label="Télefono"></v-text-field>

      <v-text-field v-model="office.city" label="Ciudad"></v-text-field>

      <v-btn type="submit" class="btn btn-primary">Guardar</v-btn>
    </v-form>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
import { ref } from "vue";
import Office from "@/services/api/Office.js";

export default {
  setup() {
    const router = useRouter();
    const office = ref(null);

    const submitForm = () => {
      Office.updateOffice(office.value.id, office.value)
        .then((response) => {
          console.log(response.data);
          alert("Oficina actualizada");
          router.push({ name: "Offices" });
        })
        .catch((error) => {
          console.log(office.value);
          console.error(error);
        });
    };

    const getOffice = (id) => {
      Office.getOffice(id)
        .then((response) => {
          office.value = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    };

    const mounted = () => {
      const id = parseInt(router.currentRoute.value.params.id);
      getOffice(id);
    };

    mounted();

    return {
      office,
      submitForm,
    };
  },
};
</script>
<style lang="scss" scoped></style>
