import Vue from 'vue';
import Router from 'vue-router';
import MainPage from './MainPage.vue';
import Newsletter from './views/Newsletter.vue';
import Places from './views/Places.vue';
import Blog from './views/Blog.vue';
import BlogPost from './views/BlogPost.vue';
import Impressum from './views/Impressum.vue';
import Privacy from './views/Privacy.vue';
import AGB from './views/AGB.vue';
import Prices from './views/Prices.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main-page',
      component: MainPage,
      props: {
        supplier: false,
      },
    },
    {
      path: '/newsletter',
      name: 'newsletter',
      component: Newsletter,
    },
    {
      path: '/supplier',
      name: 'supplier',
      component: MainPage,
      props: {
        supplier: true,
      },
    },
    {
      path: '/places',
      name: 'places',
      component: Places,
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog,
    },
    {
      path: '/prices',
      name: 'prices',
      component: Prices,
    },
    {
      path: '/blog/:id',
      name: 'blog-with-title',
      component: BlogPost,
    },
    {
      path: '/impressum',
      name: 'impressum',
      component: Impressum,
    },
    {
      path: '/datenschutz',
      name: 'datenschutz',
      component: Privacy,
    },
    {
      path: '/agb',
      name: 'agb',
      component: AGB,
    },
  ],
});
