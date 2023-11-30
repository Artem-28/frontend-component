import CardSection from '../components/layout/BaseCardSection.vue';

export default {
  title: 'IVMS/CardSection',
  component: CardSection,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CardSection },
  template: `
    <CardSection v-bind="$props"></CardSection>
  `,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  title: 'Основная информация',
};
