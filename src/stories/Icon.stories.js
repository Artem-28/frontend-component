// import i18n from '@/Plugin/Localisation/i18n';
import IconComponent from '@/components/base/Icons/UiIcon.vue';
import IconsSprite from '@/components/base/Icons/IconsSprite.vue';

export default {
  title: 'IVMS/Icons/Icon',
  component: { IconComponent },
  argTypes: {
    bg: {
      label: 'bg',
      type: { name: 'string', required: false },
      control: {
        type: 'select',
        options: ['', 'circle', 'radius'],
      },
    },
    type: {
      label: 'type',
      type: { name: 'string', required: false },
      defaultValue: 'svg',
      control: {
        type: 'select',
        default: 'svg',
        options: ['svg', 'img', 'icon', 'empty', 'goBack', 'direction'],
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    IconComponent,
    IconsSprite,
  },
  template: `
    <div class="">
      <div class="ui-list ui-row ui-row--wrapped">
        <IconComponent v-bind="$props"/>
      </div>
      <IconsSprite/>
    </div>
  `,
});

export const Primary = Template.bind({});
Primary.args = {
  value: 'user',
  size: 32,
  className: '',
  bg: '',
  color: '',
  bgColor: '',
  rotate: '',
  disabled: false,
};
