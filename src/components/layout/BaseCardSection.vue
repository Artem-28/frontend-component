<!-- eslint-disable vue/no-deprecated-functional-template -->
<template functional>
  <div class="sft-view-card-section">
    <h3 v-if="props.title">{{ props.title }}</h3>

    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseCardSection',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss">
.sft-view-card-section {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 2.4rem;
  padding: 3.6rem 2.4rem 0.5rem;
  border-radius: 24px;
  background: $graphit;
  color: $paper;

  h3 {
    font-weight: 500;
    font-size: 20px;
    padding-bottom: 35px;
    margin: 0;
    color: #fff;
  }
}
</style>
