<template>
  <v-footer
    title="bryng"
    subtitle="bryng © 2019"
  >
    <div class="content">
      <v-divider />
      <v-row>
        <v-col c4>
          <ul class="no-bullets">
            <li class="footer-list-title">Über Uns</li>
            <a href="/blog">
              <li class="list-item">Blog</li>
            </a>
            <a href="/places">
              <li class="list-item">Standorte</li>
            </a>
            <a href="/prices">
              <li class="list-item">Preise</li>
            </a>
            <ul></ul>
          </ul>
        </v-col>
        <v-col c4>
          <ul class="no-bullets">
            <li class="footer-list-title">Rechtliches</li>
            <a href="/impressum">
              <li class="list-item">Impressum</li>
            </a>
            <a href="/datenschutz">
              <li class="list-item">Datenschutz</li>
            </a>
            <a href="/agb">
              <li class="list-item">AGB</li>
            </a>
            <ul></ul>
          </ul>
        </v-col>
        <v-col c4>
          <ul class="no-bullets">
            <li class="footer-list-title">Kontakt</li>
            <a
              href="https://www.instagram.com/bryngapp/"
              target="_blank"
            >
              <li class="list-item"><i class="fab fa-instagram"></i> Instagram</li>
            </a>
            <a
              href="https://www.facebook.com/Bryng-2055104584607084/?ref=aymt_homepage_panel&eid=ARB0-O-32i1K4qS-YHg_QZD1RWhvVUg0wpslYjH_UhKLVvhcdzOieivMTY8bBDejqAxOC40Kp9kLyOHs"
              target="_blank"
            >
              <li class="list-item"><i class="fab fa-facebook-square"></i> Facebook</li>
            </a>
            <a href="mailto:info@bryng.app">
              <li class="list-item"><i class="fas fa-envelope"></i> info@bryng.app</li>
            </a>
            <ul></ul>
          </ul>
        </v-col>
      </v-row>
    </div>
  </v-footer>
</template>

<style>
footer ul a {
  display: block;
}
footer .divider {
  background: hsla(0, 0%, 93.3%, .2);
  height: 1px;
}
footer a li:hover {
  color: white;
}
</style>
