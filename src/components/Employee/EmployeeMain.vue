<template>
  <div
    class="container d-flex flex-column justify-content-center align-items-center"
  >
    <EmployeeList
      :employees="employees"
      :deleteFunction="deleteEmployee"
      @employee-deleted="handleEmployeeDeleted"
    />
    <router-link to="/Employees/create">
      <v-btn prepend-icon="mdi-check-circle" append-icon="mdi-account-circle" class="btn btn-success">
        <template v-slot:prepend>
          <v-icon color="success"></v-icon>
        </template>

        Crear Trabajador

        <template v-slot:append>
          <v-icon color="warning"></v-icon>
        </template>
      </v-btn>
    </router-link>
  </div>
</template>

<script>
import Employee from "@/services/api/Employee.js";

import EmployeeList from "./EmployeeList.vue";

export default {
  components: {
    EmployeeList,
  },

  data() {
    return {
      employees: [],
    };
  },
  mounted() {
    this.fetchEmployees();
  },
  methods: {
    fetchEmployees() {
      Employee.getEmployees()
        .then((response) => {
          this.employees = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getEmployee(id) {
      Employee.getEmployee(id)
        .then((response) => {
          console.log("Trabajador Borrado", response);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    deleteEmployee(id) {
      Employee.deleteEmployee(id)
        .then((response) => {
          console.log("Trabajador Borrado", response);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    handleEmployeeDeleted(id) {
      // Actualizar la lista de empleados
      const index = this.employees.findIndex((employee) => employee.id === id);
      if (index !== -1) {
        this.employees.splice(index, 1);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
