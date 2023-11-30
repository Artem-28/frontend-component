<template>
  <div class="icon-grid-page">
    <div v-for="(icon, i) in icons" :key="i" class="icon-grid-page__cell">
      <Icon :value="icon.id" :size="80" color="#87b68c" />
      <span
        class="icon-grid-page__title"
        :class="{'icon-grid-page__title_repeat': icon.isRepeatId}">
        {{ icon.id }}
      </span>
    </div>
    <div class="icon-grid-page__src">
      <icons />
    </div>
  </div>
</template>

<script>
import icons from '@/components/base/Icons/IconsSprite.vue';
import Icon from '@/components/base/Icons/UiIcon.vue';

export default {
  components: {
    icons,
    Icon,
  },
  data() {
    return {
      icons: [],
    };
  },
  mounted() {
    if (process.env.VUE_APP_ENV_PROD
      || process.env.VUE_APP_ENV_PREPROD
      || process.env.VUE_APP_ENV_TEST
    ) {
      this.$router.push('/main');
      return;
    }
    const iconsElements = this.$el.querySelectorAll('.icon-grid-page__src symbol') || [];
    const ids = [];
    iconsElements.forEach(({ id }) => {
      ids.push(id);
    });
    this.icons = ids.sort().map((id, i) => ({
      isRepeatId: ids.indexOf(id) !== i,
      id,
    }));
  },
};
</script>

<style lang="scss">
.icon-grid-page {
  display: flex;
  flex-flow: row wrap;
  &__cell {
    width: 102px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .icon {
        border: 1px solid #555;
    }
  }
  &__title {
    color: #ccc;
    margin: 10px 0;
    text-align: center;
    font-size: 12px;
    word-break: break-all;
    &_repeat {
        color: #ea4c4b;
    }
  }
}
</style>
