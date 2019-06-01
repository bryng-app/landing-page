<template>
  <section class="action-buttons">
    <v-row>
      <v-col
        v-if="!supplier"
        c12
        center
      >
        <router-link to="/newsletter">
          <v-btn
            animated
            accent
            large
          >Als Käufer registrieren</v-btn>
        </router-link>
      </v-col>
      <v-col
        v-else
        c12
        center
      >
        <router-link to="/newsletter">
          <v-btn
            animated
            accent
            large
          >Als Lieferant registrieren</v-btn>
        </router-link>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  props: ['supplier'],
};
</script>
