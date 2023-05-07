<template>
  <div class="container d-flex justify-content-center p-5">
    <!-- <div class="card" style="width: 18rem">
      <img
        src="https://cdn-icons-png.flaticon.com/512/3607/3607444.png"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">{{employee.name}}</h5>
        <p class="card-text">
          <ul>
            <li>Télefono: {{employee.phone}}</li>
            <li>Documento: {{employee.id_card}}</li>
            <li>Correo: {{employee.email}}</li>
            <li>Officina: {{employee.office}}</li>
          </ul>
        </p>
        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
              <router-link :to="'/employees/'">
                <v-btn type="button" class="btn btn-success">Volver</v-btn>
              </router-link>
              <v-btn type="button" class="btn btn-warning">Editar</v-btn>
              <v-btn type="button" class="btn btn-danger" @click="deleteEmployee(employee.id)">Borrar</v-btn>
        </div>
      </div>
    </div> -->
    <v-card
      :title="employee.name"
      subtitle="Trabajador"
      class="d-flex flex-column"
    >
      <v-img
        src="https://cdn-icons-png.flaticon.com/512/3607/3607444.png"
        alt="Employee Icon"
        height="200"
      ></v-img>
      <v-card-text>
        <ul style="list-style-type: none">
          <li><strong>Télefono:</strong> {{ employee.phone }}</li>
          <li><strong>Documento:</strong> {{ employee.id_card }}</li>
          <li><strong>Correo:</strong> {{ employee.email }}</li>
          <li><strong>Oficina:</strong> {{ employee.office }}</li>
        </ul>
      </v-card-text>
      <v-card-actions class="d-flex flex-row justify-content-around">
        <router-link
          :to="'/employees/'"
          style="text-decoration: none; color: inherit"
          ><v-btn type="button" class="btn btn-success"
            >Volver</v-btn
          ></router-link
        >
        <router-link :to="'/employees/' + employee.id + '/edit'" style="text-decoration: none; color: inherit">
          <v-btn type="button" class="btn btn-warning">Editar</v-btn>
        </router-link>
        <v-btn
          type="button"
          class="btn btn-danger"
          @click="deleteEmployee(employee.id)"
          >Borrar</v-btn
        >
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { ref } from "vue";
import Employee from "@/services/api/Employee.js";
export default {
  setup() {
    const router = useRouter();
    const employee = ref({
      name: "",
      phone: 0,
      id_card: 0,
      email: "",
      office: 0,
    });

    const getEmployee = (id) => {
      Employee.getEmployee(id)
        .then((response) => {
          console.log(response);
          employee.value = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    };

    const deleteEmployee = (id) => {
      Employee.deleteEmployee(id)
        .then((response) => {
          console.log(response);
          alert("El trabajador se ha borrado correctamente");
          router.push({ name: "Employees" });
        })
        .catch((error) => {
          console.error(error);
        });
    };

    const mounted = () => {
      const id = router.currentRoute.value.params.id;
      console.log(id);
      getEmployee(id);
    };

    mounted();
    return {
      employee,
      getEmployee,
      deleteEmployee,
      mounted,
    };
  },
};
</script>

<style lang="scss" scoped></style>
