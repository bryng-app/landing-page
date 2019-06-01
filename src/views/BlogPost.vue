<template>
  <section class="blog-component">
    <v-navbar
      title="bryng blog"
      brandLink="/blog"
      clear
      fixed
    />

    <v-space
      xlarge
      v-for="i in 3"
      :key=i
    />

    <div class="content">
      <v-row>
        <v-col c8>
          <v-row>
            <v-col c10>
              <h5>{{blogData.title}}</h5>
            </v-col>
            <v-col
              c2
              class="text-right"
            >
              <router-link to="/blog">
                <i class="fas fa-times"></i>
              </router-link>
            </v-col>
          </v-row>
          <v-divider />

          <p v-html="blogData.content"></p>
        </v-col>
        <v-col c4>
          <BlogPostInfo
            :blogData=blogData
            :readingTime=calculateReadingTime()
          />
        </v-col>
      </v-row>
    </div>

    <Footer />
  </section>
</template>

<script>
import BlogPostInfo from '@/components/BlogPost/BlogPostInfo.vue';
import Footer from '@/components/Footer.vue';

const firebase = require('@/firebaseConfig');

export default {
  components: {
    BlogPostInfo,
    Footer,
  },

  data() {
    return {
      blogData: {},
    };
  },

  firestore() {
    return {
      blogData: firebase.blogsCollection.doc(this.$route.params.id),
    };
  },

  methods: {
    calculateReadingTime() {
      if (this.blogData.content !== undefined) {
        let minutes = Math.floor(this.blogData.content.split(' ').length / 200);

        if (minutes === 0) {
          minutes = 1;
        }

        return minutes === 1 ? `~${minutes} Minute` : `~${minutes} Minuten`;
      }

      return 'Lädt...';
    },
  },
};
</script>
