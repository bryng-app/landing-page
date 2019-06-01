<template>
  <section class="email-form">
    <v-form-group>
      <v-input-field
        noControl
        type="email"
        placeholder="E-Mail Adresse"
      ></v-input-field>
      <v-btn
        id="newsletter-register-btn"
        light
        :onClick="registerEmail"
      >{{this.buttonText}}</v-btn>
    </v-form-group>

    <a
      id="newsletter-link"
      href="#newsletter-modal"
    ></a>
    <v-modal
      mId="newsletter-modal"
      closeTarget="#"
      title="Newsletter"
      large
      zoomIn
    >
      <v-modal-body>
        <span v-html="modalBody"></span>
      </v-modal-body>
    </v-modal>
  </section>
</template>

<script>
const firebase = require('@/firebaseConfig');

export default {
  data() {
    return {
      buttonText: 'Anmelden',
      modalBody: '',
    };
  },

  methods: {
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },

    registerEmail() {
      const emailValue = document.getElementsByTagName('input')[0].value;

      document.getElementById('newsletter-link').click();

      if (emailValue === '' || !this.validateEmail(emailValue)) {
        this.modalBody = '<p>Bitte gebe eine <span style="color: red;">gültige</span> <b>E-Mail Adresse</b> ein!</p>';
      } else {
        this.modalBody = '<p>Du bist nun <span style="color: green">erfolgreich</span></p><p style="margin-top: -20px;">bei unserem Newsletter angemeldet!</p>';
        document.getElementsByTagName('input')[0].setAttribute('disabled', true);
        document.getElementById('newsletter-register-btn').setAttribute('disabled', true);

        firebase.emailsCollection.doc(emailValue).set({
          email: emailValue,
        }).catch((err) => {
          console.log(err);
        });
      }
    },
  },
};
</script>

<style>
#newsletter-link {
  visibility: hidden;
  padding: 0;
}
</style>
