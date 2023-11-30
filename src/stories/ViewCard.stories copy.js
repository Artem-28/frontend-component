import ViewCard from '../components/layout/ViewCard.vue';

export default {
  title: 'IVMS/ViewCard',
  component: ViewCard,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ViewCard },
  template: `
    <ViewCard v-bind="$props">ViewCard</ViewCard
  `,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {};
