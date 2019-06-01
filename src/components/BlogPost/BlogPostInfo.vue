<template>
  <section class="blog-post-info">
    <v-min-card imgSrc="">
      <p>Veröffentlicht: <b>{{getDate()}}</b></p>
      <p><b>{{readingTime}}</b></p>
      <p style="margin-bottom: 0;">Tags</p>
      <div
        class="tag"
        v-for="tag in blogData.tags"
        :key=tag
      >{{tag}}</div>
    </v-min-card>
  </section>
</template>

<script>
export default {
  props: ['blogData', 'readingTime'],

  methods: {
    getDate() {
      if (this.blogData.date !== undefined) {
        const monthNames = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
          'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
        const date = new Date(this.blogData.date.toDate());
        return `${date.getUTCDate() + 1}. ${monthNames[date.getMonth()]} ${date.getUTCFullYear()}`;
      }
      return 'Lädt...';
    },
  },
};
</script>

<style>
.tag {
  align-items: center;
  background-color: rgb(238, 238, 238);
  color: rgb(34, 34, 34);
  display: inline-flex;
  font-size: 85%;
  line-height: 1.5;
  min-height: 1.5rem;
  padding: 0 0.5rem;
  margin: 0.25rem;
  border-radius: 2px;
}
</style>
