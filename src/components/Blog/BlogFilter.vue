<template>
  <section class="blog-filter-component">
    <div class="content">
      <ul class="pull-right no-bullets this-inline-flex">
        <a
          v-for="(value, key) in filterCategories"
          :key=key
          @click="clickOnFilter(key)"
        >
          <li :class="(value.selected ? 'selected' : '')">{{value.name}}</li>
        </a>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      filterCategories: {
        all: { name: 'Alle', selected: true },
        company: { name: 'Unternehmen', selected: false },
        tech: { name: 'Tech', selected: false },
        news: { name: 'News', selected: false },
        ads: { name: 'Werbung', selected: false },
      },
    };
  },

  methods: {
    clickOnFilter(filterOption) {
      Object.keys(this.filterCategories).forEach((key) => {
        this.filterCategories[key].selected = false;
      });
      this.filterCategories[filterOption].selected = true;
      this.$store.commit('CHANGE_BLOG_FILTER', filterOption);
    },
  },
};
</script>

<style lang="scss">
.blog-filter-component {
  ul {
    a {
      cursor: pointer;
    }

    li {
      margin-right: 10px;
      font-size: 0.9rem;
      color: #8592af;
    }

    li.selected {
      color: #374054;
    }
  }
}
</style>
