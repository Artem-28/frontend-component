<!-- eslint-disable vue/no-deprecated-slot-scope-attribute -->
<!-- eslint-disable vue/no-deprecated-slot-attribute -->
<template>
  <multiselect
    v-if="!readonly || disabled"
    ref="multiselect"
    v-model="result"
    :class="[
      size ? `multiselect_${size}` : '',
      {
        multiselect_search: searchValue,
        multiselect_type_multiple: multiple,
        multiselect_groups: groupByProp,
        multiselect_has_value:
          result && (!Array.isArray(result) || (result && result.length)),
      },
    ]"
    :placeholder="placeholderText"
    :internalSearch="!remoteSearch"
    @select="emitSelectedOption"
    @open="emitFocus"
    @search-change="searchChange"
    @clearAll="$emit('clearAll')"
    :disabled="isDisabled"
    :loading="loading"
    :options="list"
    :show-labels="false"
    :taggable="false"
    label="filterProp"
    :custom-label="customLabel"
    :searchable="searchable"
    :multiple="multiple"
    :close-on-select="!multiple"
    :preserveSearch="false"
    :limit="collapseTags ? 1 : 99"
    :limit-text="(i) => `+ ${i}`"
    :track-by="keyProp"
    :open-direction="openDirection"
    :group-values="groupByProp ? 'groupValues' : ''"
    :group-label="groupByProp ? 'groupLabel' : ''"
  >
    <!-- Нет данных -->
    <span slot="noResult" class="multiselect-option color-grey">
      {{ $t("filter.empty") }}
    </span>
    <span slot="noOptions" class="multiselect-option color-grey">
      {{ noDataText || $t("filter.empty") }}
    </span>

    <!-- Иконка очистки и развертывания списка -->
    <span
      slot="caret"
      class="multiselect-suffix"
      :class="{
        'multiselect-suffix_clearable':
          (multiple && result && result.length) || (clearable && result),
      }"
      slot-scope="{ toggle }"
    >
      <div
        class="multiselect-suffix__inner multiselect-suffix__inner_clear"
        @mousedown="clearAll"
      >
        <BaseIcon
          value="el-icon-close"
          type="icon"
          size="20"
          class="multiselect-suffix__icon"
        />
      </div>
      <div class="multiselect-suffix__inner" @mousedown.prevent.stop="toggle">
        <BaseIcon
          value="arrowDown"
          size="20"
          class="multiselect-suffix__icon"
        />
      </div>
    </span>

    <!-- Формат поля -->
    <template slot="singleLabel" slot-scope="props">
      <slot v-if="$slots.singleLabel" name="singleLabel" v-bind="props"></slot>
      <template v-else>
        <span>{{ props.option[labelProp] }}</span>
        <span class="option-suffix" v-if="!customLabel && suffix">
          {{
            typeof suffix === "function"
              ? suffix(props.option)
              : props.option[suffix]
          }}
        </span>
      </template>
    </template>

    <template slot="tag" slot-scope="props">
      <span class="multiselect__tag">
        <span>{{ props.option[labelProp] }}</span>
        <i
          aria-hidden="true"
          tabindex="1"
          class="multiselect__tag-icon"
          @click="props.remove(props.option)"
        ></i>
      </span>
    </template>

    <!-- Формат выпадающего списка -->
    <template
      slot="option"
      v-if="$slots.option || !customLabel"
      slot-scope="props"
    >
      <div
        class="multiselect-option"
        :class="{
          'multiselect-option_hidden': props.option && props.option.isHidden,
          'multiselect-option_has-max-devices': props.option.$hasMaxDevices,
          'multiselect-option-active': itemIsActive(props.option),
          'multiselect-option_group-label': props.option.$isLabel,
        }"
      >
        <p v-if="props.option.$isLabel">{{ props.option.$groupLabel }}</p>

        <slot v-else-if="$slots.option" name="option" v-bind="props"></slot>

        <template v-else>
          <span :class="{ 'option-value': editMethod || suffix }">
            {{ props.option[labelProp] }}
          </span>

          <div
            :class="{ 'option-suffix-wrap': editMethod || removeMethod }"
          >
            <span
              class="option-suffix"
              v-if="removeMethod"
              @click="removeMethod($event, props.option)"
            >
              <BaseIcon
                class="icon__inner_trash option-suffix__edit-icon"
                value="trash"
              />
            </span>

            <span
              class="option-suffix"
              v-if="editMethod"
              @mousedown.stop.prevent="() => {}"
              @click.stop.prevent="editMethod(props.option)"
            >
              <BaseIcon class="option-suffix__edit-icon" value="edit" />
            </span>
          </div>

          <span class="option-suffix" v-if="suffix">
            {{
              typeof suffix === "function"
                ? suffix(props.option)
                : props.option[suffix]
            }}
          </span>
        </template>
      </div>
    </template>

    <li
      v-if="addItemTopFix && addMethod"
      ref="fixOption"
      slot="beforeList"
      class="multiselect__element--fix"
      @click="addMethod"
    >
      <div class="multiselect__element--fix__content">
        <span class="multiselect__option">
        <div class="multiselect-option">
          <span class="option-value">{{ addTitle || this.$t('buttons.new_item') }}</span>
          <BaseIcon type="icon" value="el-icon-plus" size="24" />
        </div>
      </span>
      </div>
    </li>

    <!-- Кнопка добавления нового элемента -->
    <li
      slot="afterList"
      v-else-if="addMethod"
      class="multiselect__element"
      @click="addMethod"
    >
      <span class="multiselect__option">
        <div class="multiselect-option">
          <span class="option-value">{{ addTitle || this.$t('buttons.new_item') }}</span>
          <BaseIcon type="icon" value="el-icon-plus" size="24" />
        </div>
      </span>
    </li>
  </multiselect>
  <div v-else-if="result">
    <el-input :value="result[labelProp]" :readonly="readonly" />
  </div>
</template>

<script src="./Autocomplete.js"></script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style src="./style.scss" lang="scss"></style>
