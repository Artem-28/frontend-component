<template>
  <div class="view-card__section">
    <div class="section-title">
      <h3 v-if="title">
        <span>{{ title }}</span>
      </h3>
      <slot name="title" />
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ViewCardSection',
  props: {
    title: [String, Number],
  },
};
</script>
