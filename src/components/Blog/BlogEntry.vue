<template>
  <section class="blog-entry-component padtop">
    <div class="content">
      <h5 class="title">{{title}}</h5>
      <div class="blog-info">
        <p><b>{{getDate()}}</b></p>
        <p><b>| {{calculateReadingTime()}}</b></p>
      </div>

      <p v-html=getContent()></p>

      <router-link :to="'/blog/' + id">
        <v-btn
          class="read-more-btn"
          outlineInverted
        >Read More</v-btn>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  props: ['id', 'title', 'date', 'content'],

  methods: {
    getDate() {
      const monthNames = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
        'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
      const date = new Date(this.date.toDate());
      return `${date.getUTCDate() + 1}. ${monthNames[date.getMonth()]} ${date.getUTCFullYear()}`;
    },

    getContent() {
      const lengthOfPreview = 300;
      if (this.content.length > lengthOfPreview) {
        const shortenContent = `${this.content.replace(/<[^>]*>/g, '').substring(0, lengthOfPreview - 3)}...`;
        return shortenContent;
      }
      return this.content;
    },

    calculateReadingTime() {
      let minutes = Math.floor(this.content.split(' ').length / 200);

      if (minutes === 0) {
        minutes = 1;
      }

      return minutes === 1 ? `~${minutes} Minute` : `~${minutes} Minuten`;
    },
  },
};
</script>

<style lang="scss">
.blog-entry-component {
  .title {
    margin-bottom: 2.6rem;
  }

  p {
    color: #374054;
    font-size: 1.1rem;
  }

  .blog-info p {
    padding: 0;
    margin: 0;
  }
}
</style>
