<template>
  <section class="newsletter">
    <Navbar :noSelected=true />

    <div class="red-bg">
      <div class="content text-center">
        <Logo />

        <v-space />

        <h3 class="white uppercase">bryng mir den Newsletter!</h3>
        <h5 class="white faded">
          Zurzeit sind Registrierungen nicht möglich.
          Trotzdem wollen wir Dich informieren, falls dies der Fall ist.
        </h5>

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
          <router-link to="/">
            <v-btn
              animated
              outline
            ><i class="fa fa-arrow-left fa-lg"></i> Zurück</v-btn>
          </router-link>
        </v-row>
      </div>
    </div>

    <Footer />
  </section>
</template>

<script>
import EmailForm from '@/components/EmailForm.vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Logo from '@/components/Logo.vue';

export default {
  components: {
    EmailForm,
    Navbar,
    Footer,
    Logo,
  },
};
</script>

<style>
.red-bg {
  background: linear-gradient(90deg, #E54147, #FC5B60);
  height: 100%;
  padding-top: 55px;
  padding-bottom: 55px;
}
.newsletter footer {
  margin-top: 0px;
}
</style>
