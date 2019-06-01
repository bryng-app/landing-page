<template>
  <v-navbar
    title="bryng"
    brandLink="/"
    dark
  >
    <div class="nav-left">
      <v-navbar-item
        :class=buyerClasses
        link="/"
      >Käufer</v-navbar-item>
      <v-navbar-item
        :class=supplierClasses
        link="/supplier"
      >Lieferant</v-navbar-item>
    </div>
    <div class="nav-right">
      <v-navbar-item link="/newsletter">Anmelden</v-navbar-item>
      <v-navbar-item link="/newsletter">Registrieren</v-navbar-item>
    </div>
  </v-navbar>
</template>

<script>
export default {
  props: ['supplier', 'noSelected'],

  computed: {
    buyerClasses() {
      return {
        active: !this.supplier && !this.noSelected,
      };
    },
    supplierClasses() {
      return {
        active: this.supplier && !this.noSelected,
      };
    },
  },
};
</script>

<style>
.header {
  margin-bottom: 0;
}
</style>
