import { action } from '@storybook/addon-actions';
import IconButton from '../components/base/IconButton/IconButton.vue';

export default {
  title: 'IVMS/IconButton',
  component: IconButton,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { IconButton },
  template: `
    <div class="ui-row ui-row--wrapped">
      <IconButton class="back" @click="action" v-bind="$props" />
      <IconButton class="plus" @click="action" v-bind="$props" />
      <IconButton class="minus" @click="action" v-bind="$props" />
      <IconButton class="next" @click="action" v-bind="$props" />
      <IconButton class="copy" @click="action" v-bind="$props" />
      <IconButton class="location" @click="action" v-bind="$props" />
      <IconButton class="search" @click="action" v-bind="$props" />
      <IconButton class="filters" @click="action" v-bind="$props" />
      <IconButton class="download" @click="action" v-bind="$props" />
      <IconButton class="delete" @click="action" v-bind="$props" />
      <IconButton class="play" @click="action" v-bind="$props" />
      <IconButton class="record" @click="action" v-bind="$props" />
      <IconButton class="speed" @click="action" v-bind="$props" />
      <IconButton class="clean" @click="action" v-bind="$props" />
      <IconButton class="aim" @click="action" v-bind="$props" />
      <IconButton class="more" @click="action" v-bind="$props" />
      <IconButton class="photo" @click="action" v-bind="$props" />
    </div>
  `,
  methods: { action: action('click') },
});

export const Collection = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Collection.args = {
  name: 'Button',
};
