<template>
  <section class="home">
    <div class="wave">
      <div class="content text-center">
        <Logo />

        <v-space />
        <div
          v-if="supplier"
          class="home-titles"
        >
          <!-- Supplier Home Titles -->
          <h3 class="white uppercase">bryng den einkauf zu anderen</h3>
          <h5 class="white faded">Verdiene nebenbei Geld, indem Du einkaufst</h5>
        </div>
        <div
          v-else
          class="home-titles"
        >
          <!-- Buyer Home Titles -->
          <h3 class="white uppercase">bryng dein einkauf zu dir</h3>
          <h5 class="white faded">Lebensmittel kaufen per Knopfdruck</h5>
        </div>
        <v-row center>
          <v-col c6>
            <EmailForm />
          </v-col>
        </v-row>
        <v-row center>
          <v-col c6>
            <p class="info white faded">
              Du kannst Dich nun für unseren kostenlosen Newsletter anmelden.
              Beim eingeben Deiner E-Mail akzeptierst Du,
              dass Du Marketing E-Mails von bryng bekommst.
            </p>
          </v-col>
        </v-row>
        <v-row center>
          <img
            id="product-background"
            src="../assets/product_background.png"
            style="z-index: 1"
          >
        </v-row>
      </div>
    </div>
  </section>
</template>

<script>
import EmailForm from '@/components/EmailForm.vue';
import Logo from '@/components/Logo.vue';

export default {
  props: ['supplier'],

  components: {
    EmailForm,
    Logo,
  },
};
</script>

<style>
.wave {
  width: 100%;
  height: 800px;
  position: relative;
  background: linear-gradient(90deg, #E54147, #FC5B60);
}
.wave:before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 235px;
  background: url('../assets/wave.png');
  background-size: cover;
  background-repeat: no-repeat;
}

@media (min-width: 1684px) {
  .wave:before {
    height: 386px;
  }
}
</style>
