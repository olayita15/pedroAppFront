<template>
  <div class="container">
    <h2>Lista de Trabajadores</h2>
    <v-table class="table table-primary table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Correo</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(employee, index) in employees" :key="employee.id">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ employee.name }}</td>
          <td>{{ employee.email }}</td>
          <td>
            <div class="btn-group" role="group" aria-label="Basic mixed styles example">
              <router-link :to="'/employees/' + employee.id">
                <v-btn type="button" class="btn btn-success">Ver</v-btn>
              </router-link>
              <v-btn type="button" class="btn btn-warning">Editar</v-btn>
              <v-btn type="button" class="btn btn-danger" @click="deleteEmployee(employee)">Borrar</v-btn>
            </div>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script>
export default {
  props: {
    employees: {
      type: Array,
      required: true
    },
    deleteFunction: {
      type: Function,
      required: true
    }
  },
  methods: {
    deleteEmployee(employee) {
      this.deleteFunction(employee.id);
      this.$emit('employee-deleted', employee.id);
      alert('El trabajador se ha borrado correctamente');
    }
  }
};
</script>
