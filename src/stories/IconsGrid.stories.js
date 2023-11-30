// import i18n from '@/Plugin/Localisation/i18n';
import IconsViewGrid from '@/components/base/Icons/IconsViewGrid.vue';

export default {
  title: 'IVMS/Icons/Grid',
  component: { IconsViewGrid },
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    IconsViewGrid,
  },
  template: `
    <div class="">
      <div class="ui-list ui-row ui-row--wrapped">
        <IconsViewGrid v-bind="$props"/>
      </div>
    </div>
  `,
});

export const Grid = Template.bind({});
Grid.args = {};
