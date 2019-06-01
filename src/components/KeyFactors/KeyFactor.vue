<template>
  <div class="key-factor">
    <h5>
      <i :class="'fas fa-' + this.icon + ' fa-lg'"></i>
    </h5>
    <p class="title">{{title}}</p>
    <p class="subtitle">{{subtitle}}</p>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: 'Title',
    },
    subtitle: {
      type: String,
      default: 'Title',
    },
  },
};
</script>

<style>
.key-factor i {
  color: #C0392B;
}
.key-factor .title {
  font-size: 1.125em;
  line-height: 1.3em;
}
.key-factor .subtitle {
  margin-top: 1px;
  font-size: 1em;
  line-height: 1.5em;
}
</style>
