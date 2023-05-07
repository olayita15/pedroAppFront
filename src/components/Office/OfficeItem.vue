<template>
  <div class="container d-flex justify-content-center p-5">
    <v-card
      :title="office.name"
      subtitle="Oficina"
      class="d-flex flex-column"
    >
      <v-img
        src="https://cdn-icons-png.flaticon.com/512/3027/3027775.png"
        alt="Office Icon"
        height="200"
      ></v-img>
      <v-card-text>
        <ul style="list-style-type: none">
          <li><strong>Teléfono:</strong> {{ office.phone }}</li>
        </ul>
      </v-card-text>
      <v-card-actions class="d-flex flex-row justify-content-around">
        <router-link
          :to="'/offices/'"
          style="text-decoration: none; color: inherit"
          ><v-btn type="button" class="btn btn-success"
            >Volver</v-btn
          ></router-link
        >
        <router-link :to="'/offices/' + office.id + '/edit'" style="text-decoration: none; color: inherit">
          <v-btn type="button" class="btn btn-warning">Editar</v-btn>
        </router-link>
        <v-btn
          type="button"
          class="btn btn-danger"
          @click="deleteOffice(office.id)"
          >Borrar</v-btn
        >
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { ref } from "vue";
import Office from "@/services/api/Office.js";
export default {
  setup() {
    const router = useRouter();
    const office = ref({
      name: "",
      address: "",
      phone: 0,
      email: "",
      manager: "",
    });

    const getOffice = (id) => {
      Office.getOffice(id)
        .then((response) => {
          console.log(response);
          office.value = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    };

    const deleteOffice = (id) => {
      Office.deleteOffice(id)
        .then((response) => {
          console.log(response);
          alert("La oficina se ha borrado correctamente");
          router.push({ name: "Offices" });
        })
        .catch((error) => {
          console.error(error);
        });
    };

    const mounted = () => {
      const id = router.currentRoute.value.params.id;
      console.log(id);
      getOffice(id);
    };

    mounted();
    return {
      office,
      getOffice,
      deleteOffice,
      mounted,
    };
  },
};
</script>

<style lang="scss" scoped></style>
