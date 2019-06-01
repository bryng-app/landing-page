<template>
  <section class="blog-component">
    <v-navbar
      title="bryng blog"
      brandLink="/"
      fixed
      disableMobileNavbar
    />

    <v-space
      xlarge
      v-for="i in 3"
      :key=i
    />

    <Prologue />

    <v-space xlarge />
    <BlogFilter />
    <v-space />

    <BlogEntry
      v-for="blog in filteredBlogs"
      :key=blog.id
      :id=blog.id
      :title=blog.title
      :date=blog.date
      :content=blog.content
    />

    <div
      v-if="filteredBlogs.length === 0"
      class="content text-center padtop"
    >
      <p>In diesem Bereich sind keine Blogs vorhanden!</p>
    </div>

    <Footer />
  </section>
</template>

<script>
import Prologue from '@/components/Blog/Prologue.vue';
import BlogFilter from '@/components/Blog/BlogFilter.vue';
import BlogEntry from '@/components/Blog/BlogEntry.vue';
import Footer from '@/components/Footer.vue';

const firebase = require('@/firebaseConfig');

export default {
  components: {
    Prologue,
    BlogFilter,
    BlogEntry,
    Footer,
  },

  data() {
    return {
      blogs: [],
    };
  },

  firestore() {
    return {
      blogs: firebase.blogsCollection.orderBy('date'),
    };
  },

  computed: {
    filteredBlogs() {
      const filterTag = this.$store.getters.blogFilter;
      const filteredBlogs = this.blogs.filter((blog) => {
        if (filterTag === 'all') {
          return blog;
        }

        if (blog.tags.includes(filterTag)) {
          return blog;
        }
        return null;
      });

      return filteredBlogs.slice().reverse();
    },
  },
};
</script>

<style lang="scss">
.blog-component {
  .header {
    margin-bottom: 3rem;
  }
}
</style>
