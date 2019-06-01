<template>
  <section class="newsletter">
    <Navbar :noSelected=true />

    <v-space xlarge />

    <v-container>
      <h4>Preise</h4>
      <p>
        Wir probieren unsere Preise so offen, wie möglich zu machen. <br/>
        <span>Beachte, dass sich die Preise jederzeit ändern können!</span>
      </p>

      <v-row>
        <table class="table">
          <thead>
            <tr>
              <th>Checkoutpreis</th>
              <th>Lieferzeit</th>
              <th>Extrapreis</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lieferungen über 35€</td>
              <td>in einer Stunde</td>
              <td>9,99€ extra</td>
            </tr>
            <tr>
              <td>Lieferungen über 35€</td>
              <td>in 2 Stunden oder gewünschte Zeit</td>
              <td>7,99€ extra</td>
            </tr>
            <tr>
              <td>Lieferungen unter 35€</td>
              <td>in einer Stunde</td>
              <td>5,99€ extra</td>
            </tr>
            <tr>
              <td>Lieferungen unter 35€</td>
              <td>in 2 Stunden oder gewünschte Zeit</td>
              <td>3,99€ extra</td>
            </tr>
          </tbody>
        </table>
      </v-row>
    </v-container>

    <v-space xlarge />

    <Footer />
  </section>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
