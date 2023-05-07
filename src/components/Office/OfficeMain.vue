<template>
  <div
    class="container d-flex flex-column justify-content-center align-items-center"
  >
    <OfficeList
      :offices="offices"
      :deleteFunction="deleteOffice"
      @office-deleted="handleOfficeDeleted"
    />
    <router-link to="/offices/create">
      <v-btn prepend-icon="mdi-check-circle" append-icon="mdi-office-building" class="btn btn-success">
        <template v-slot:prepend>
          <v-icon color="success"></v-icon>
        </template>

        Crear Oficina

        <template v-slot:append>
          <v-icon color="warning"></v-icon>
        </template>
      </v-btn>
    </router-link>
  </div>
</template>

<script>
import Office from "@/services/api/Office.js";

import OfficeList from "./OfficeList.vue";

export default {
  components: {
    OfficeList,
  },

  data() {
    return {
      offices: [],
    };
  },
  mounted() {
    this.fetchOffices();
  },
  methods: {
    fetchOffices() {
      Office.getOffices()
        .then((response) => {
          this.offices = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getOffice(id) {
      Office.getOffice(id)
        .then((response) => {
          console.log("Oficina borrada", response);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    deleteOffice(id) {
      Office.deleteOffice(id)
        .then((response) => {
          console.log("Oficina borrada", response);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    handleOfficeDeleted(id) {
      // Actualizar la lista de oficinas
      const index = this.offices.findIndex((office) => office.id === id);
      if (index !== -1) {
        this.offices.splice(index, 1);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
