<!-- eslint-disable vue/no-deprecated-functional-template -->
<template functional>
  <el-col :span="props.span">
    <div :class="props.classBlock" class="view-item">
      <BaseIcon
        v-if="props.icon"
        :className="props.className"
        :value="props.icon"
        bg="radius"
      />

      <component
        :is="props.link ? 'router-link' : 'div'"
        v-if="props.label || props.value || props.value === 0"
        :to="props.link ? props.link : null"
      >
        <p v-if="props.label" class="small">{{ props.label }}</p>

        <template v-if="props.value || props.value === 0">
          <a
            v-if="listeners && listeners.click"
            href="#"
            @click.prevent="listeners.click()">
              {{ props.value}}
              <span v-if="props.postfix" class="view-item__postfix">
                {{ props.postfix }}
              </span>
          </a>

          <p v-else v-html="props.value" class="value"></p>
        </template>

        <p v-else class="color-grey">—</p>
      </component>

      <p v-else class="color-grey">—</p>
    </div>
  </el-col>
</template>

<script src="./ViewItem.js"></script>
