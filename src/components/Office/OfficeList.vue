<template>
  <div class="container">
    <h2>Lista de Oficinas</h2>
    <v-table class="table table-primary table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Ciudad</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(office, index) in offices" :key="office.id">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ office.name }}</td>
          <td>{{ office.city }}</td>
          <td>
            <div
              class="btn-group"
              role="group"
              aria-label="Basic mixed styles example"
            >
              <router-link :to="'/offices/' + office.id">
                <v-btn type="button" class="btn btn-success">Ver</v-btn>
              </router-link>
              <router-link :to="'/offices/' + office.id + '/edit'">
                <v-btn type="button" class="btn btn-warning">Editar</v-btn>
              </router-link>
              <v-btn
                type="button"
                class="btn btn-danger"
                @click="deleteOffice(office)"
                >Borrar</v-btn
              >
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
    offices: {
      type: Array,
      required: true,
    },
    deleteFunction: {
      type: Function,
      required: true,
    },
  },
  methods: {
    deleteOffice(office) {
      this.deleteFunction(office.id);
      this.$emit("office-deleted", office.id);
      alert("La oficina se ha borrado correctamente");
    },
  },
};
</script>
