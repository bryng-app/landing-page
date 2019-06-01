<template>
  <section class="key-factors">
    <v-row v-if="supplier">
      <v-col
        c2
        o2
      >
        <KeyFactor
          icon="money-bill-alt"
          title="Verdiene Geld nebenbei"
          subtitle="Egal ob Du Student oder eine normale Arbeitskraft bist.
              Bei bryng kannst Du Dir etwas dazuverdienen, indem du für
              andere einkaufen gehst."
        />
      </v-col>
      <v-col
        c2
        o1
      >
        <KeyFactor
          icon="hands-helping"
          title="Helfe anderen Menschen"
          subtitle="Das Ziel von bryng ist es, dass wir anderen Menschen
              helfen und somit den Einkauf erleichtern. Sei ein Teil davon
              und helfe anderen beim einkaufen!"
        />
      </v-col>
      <v-col
        c2
        o1
      >
        <KeyFactor
          icon="globe-europe"
          title="Weltverbesserer"
          subtitle="Verdiene etwas nebenbei und mache die Welt zu einem
              besseren Ort. Uns ist es wichtig, dass Menschen mehr von
              ihrer Zeit haben und Du kannst dazu beisteuern."
        />
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col
        c2
        o2
      >
        <KeyFactor
          icon="fast-forward"
          title="Einfach, sicher und schnell"
          subtitle="Mit bryng ist es extrem einfach Lebensmittel zu kaufen.
              Du kannst entscheiden, wann sie zu Dir geliefert werden sollen
              und kannst die Lieferung Live mitverfolgen!"
        />
      </v-col>
      <v-col
        c2
        o1
      >
        <KeyFactor
          icon="clock"
          title="Dein Tag gehört Dir"
          subtitle="Die wichtigste Ressource in Deinem Leben ist die Zeit.
              Diese Zeit solltest Du nicht damit verschwenden einkaufen zu gehen,
              sondern lieber die Zeit mit Deinen Liebsten zu verbringen."
        />
      </v-col>
      <v-col
        c2
        o1
      >
        <KeyFactor
          icon="cart-plus"
          title="Große Vielfalt an Produkten"
          subtitle="Es ist egal, welcher Lebensmittelladen es ist. Bei uns
              kannst Du viele Produkte aus allen Läden einkaufen und diese
              Dir rechtzeitig liefern lassen."
        />
      </v-col>
    </v-row>
  </section>
</template>

<script>
import KeyFactor from '@/components/KeyFactors/KeyFactor.vue';

export default {
  props: ['supplier'],

  components: {
    KeyFactor,
  },
};
</script>

<style>
@media (max-width: 1072px) {
  .key-factors {
    margin-top: -200px !important;
  }
}
@media (min-width: 770px) {
  .key-factors {
    margin-top: 0 !important;
  }
}
</style>
