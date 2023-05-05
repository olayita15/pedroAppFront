<template>
  <div>
    <OfficeList :offices="offices" />
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
  },
};
</script>

<style lang="scss" scoped></style>
