<template>
  <div class="main-page">
    <Navbar :supplier=supplier />

    <Home :supplier=supplier />

    <v-space xlarge v-for="i in 3" :key=i />
    <KeyFactors :supplier=supplier />

    <v-row center>
      <v-divider short />
    </v-row>
    <v-space />
    <ActionButtons :supplier=supplier />

    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import ActionButtons from '@/components/ActionButtons.vue';
import Home from '@/views/Home.vue';
import KeyFactors from '@/components/KeyFactors/KeyFactors.vue';
import Footer from '@/components/Footer.vue';

export default {
  props: ['supplier'],
  components: {
    Home,
    KeyFactors,
    Footer,
    Navbar,
    ActionButtons,
  },
};
</script>
