<template>
<div class="container">
    <h2>Lista de Oficinas</h2>
    <table class="table table-primary table-striped">
    <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Ciudad</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(office, index) in offices" :key="index" >
        <th scope="row" >{{index+1}}</th>
        <td>{{ office.name }}</td>
        <td>{{ office.city }}</td>
        </tr>
    </tbody>
    </table>
</div>

  </template>
  
  <script>
  
  export default {
    props: {
      offices: {
        type: Array,
      }
    },
  };
  </script>
  