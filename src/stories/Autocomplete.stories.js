import Autocomplete from '../components/base/Autocomplete/Autocomplete.vue';

export default {
  title: 'IVMS/Autocomplete',
  component: Autocomplete,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Autocomplete },
  data() {
    return {
      selectValue: '',
    };
  },
  template: `
    <Autocomplete
      v-model="selectValue"
      v-bind="$props"
    />

  `,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  options: [
    { value: 1, label: 'Элемент 1' },
    { value: 2, label: 'Элемент 2' },
    { value: 3, label: 'Элемент 3' },
    { value: 4, label: 'Элемент 4' },
  ],
};
