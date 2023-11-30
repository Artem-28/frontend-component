<template>
  <span
    class="icon"
    :class="[
      className,
      `icon_${value}`,
      bg ? `icon_bg icon_bg_${bg}` : '',
      {
        icon_pointer: _events.click,
        icon_goback: type === 'goBack',
        icon_disabled: disabled,
      },
    ]"
    :style="getStyle"
    @click="$emit('click')"
  >

    <svg
      v-if="type === 'svg'"
      role="img"
      class="icon__inner"
      :class="`icon__inner_${value}`">
      <use :xlink:href="`#${value}`" />
    </svg>

    <!-- <img
      v-else-if="type === 'img'"
      class="icon__inner"
      :src="getImgUrl(value)"> -->

    <i
      v-else-if="type === 'icon'"
      class="icon__inner"
      :class="value" />

    <i
      v-else-if="type === 'goBack'"
      class="icon__inner el-icon-arrow-left"
      :class="value" />

    <svg
      v-else-if="type === 'direction'"
      role="img"
      transform="rotate(135) scale(1.2)"
      class="icon__inner">
      <use :xlink:href="`#direction`" />
    </svg>

    <div
      v-if="hasSlotData"
      class="icon__slot">
      <slot />
    </div>
  </span>
</template>

<script src="./UiIcon.js"></script>
