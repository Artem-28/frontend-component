<template>
  <button
    class="sft-base-icon-btn"
    type="button"
    @click.stop="$emit('click')"
    :disabled="isDisabled"
  >
    <slot class="label" />
    <span v-if="visibleIcon" class="icon" />
  </button>
</template>

<script>
export default {
  name: 'BaseIconButton',
  props: {
    isDisabled: {
      type: Boolean,
      default: false,
    },
    visibleIcon: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss">
.sft-base-icon-btn {
  cursor: crosshair;

  @extend %map-buttons-overlay;

  display: flex;
  align-items: center;
  justify-content: center;

  .icon {
    background-position: center;
    background-repeat: no-repeat;
  }

  &.back .icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.5 5L9 12L15.5 19' stroke='%23FDFDFD' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  }

  &.plus .icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.0009 20.4853L12.0009 3.51472' stroke='%23FDFDFD' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M3.51472 11.9999L20.4853 11.9999' stroke='%23FDFDFD' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  }

  &.minus .icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.51472 11.9999L20.4853 11.9999' stroke='%23FDFDFD' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  }

  // &.next {
  //   padding: 14px 16px 14px 24px;
  // }

  &.next .icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 19L15.5 12L9 5' stroke='%23FDFDFD' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    // margin-left: 12px;
  }

  &.copy .icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='1' y='1' width='14' height='14' rx='1' stroke='%23FDFDFD' stroke-width='2'/%3E%3Crect opacity='0.5' x='5' y='5' width='15' height='15' rx='2' fill='%23FDFDFD'/%3E%3C/svg%3E");
  }

  &.location .icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='16' height='19' viewBox='0 0 16 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M14 8C14 10.4512 12.9701 12.7691 11.5728 14.4888C10.8786 15.3431 10.1312 16.0023 9.44764 16.434C8.73474 16.8843 8.23336 17 8 17C7.76664 17 7.26526 16.8843 6.55236 16.434C5.86883 16.0023 5.12135 15.3431 4.42723 14.4888C3.02993 12.7691 2 10.4512 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8ZM16 8C16 14 11 19 8 19C5 19 0 14 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8ZM12 8C12 10.2091 10.2091 12 8 12C5.79086 12 4 10.2091 4 8C4 5.79086 5.79086 4 8 4C10.2091 4 12 5.79086 12 8Z' fill='%23FDFDFD'/%3E%3C/svg%3E");
  }

  &.search .icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20L15.5 15.5' stroke='%23FDFDFD' stroke-width='2' stroke-linecap='round'/%3E%3Cpath d='M15.4902 15.4903C12.7691 18.2114 8.35736 18.2114 5.63628 15.4903C2.9152 12.7693 2.9152 8.35751 5.63628 5.63643C8.35736 2.91535 12.7691 2.91535 15.4902 5.63643C18.2113 8.35751 18.2113 12.7693 15.4902 15.4903Z' stroke='%23FDFDFD' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  }

  &.filters .icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4 7C4 6.44772 4.44772 6 5 6H6C6.55228 6 7 6.44772 7 7C7 7.55228 6.55228 8 6 8H5C4.44772 8 4 7.55228 4 7ZM11.0001 7C11.0001 6.44772 11.4478 6 12.0001 6H19.0001C19.5524 6 20.0001 6.44772 20.0001 7C20.0001 7.55228 19.5524 8 19.0001 8H12.0001C11.4478 8 11.0001 7.55228 11.0001 7ZM5 16C4.44772 16 4 16.4477 4 17C4 17.5523 4.44772 18 5 18H15C15.5523 18 16 17.5523 16 17C16 16.4477 15.5523 16 15 16H5Z' fill='%23FDFDFD'/%3E%3Ccircle cx='9' cy='7' r='2' stroke='%23FDFDFD' stroke-width='2'/%3E%3Ccircle cx='17' cy='17' r='2' stroke='%23FDFDFD' stroke-width='2'/%3E%3C/svg%3E");
  }

  &.download .icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_4603_8759)'%3E%3Cpath d='M18.364 18.3643C21.8787 14.8496 21.8787 9.15114 18.364 5.63642C14.8492 2.1217 9.15076 2.1217 5.63604 5.63642C2.12132 9.15114 2.12132 14.8496 5.63604 18.3643' stroke='%23FDFDFD' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M12 17.2422L16.2426 12.9995M12 17.2422L7.75736 12.9995M12 17.2422L12 8.75691' stroke='%23FDFDFD' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_4603_8759'%3E%3Crect width='24' height='24' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
  }

  &.delete .icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M9 3L10 2H14L15 3H19C19.552 3 20 3.448 20 4C20 4.552 19.552 5 19 5H17H7H5C4.448 5 4 4.552 4 4C4 3.448 4.448 3 5 3H9ZM5 8C5 7.44772 5.44772 7 6 7H18C18.5523 7 19 7.44772 19 8V21C19 22.105 18.105 23 17 23H7C5.895 23 5 22.105 5 21V8ZM8 9C7.44772 9 7 9.44771 7 10V20C7 20.5523 7.44772 21 8 21H16C16.5523 21 17 20.5523 17 20V10C17 9.44772 16.5523 9 16 9H8Z' fill='%23FDFDFD'/%3E%3C/svg%3E");
  }

  &.play .icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.7478 5.3739C11.2637 5.63187 11.2637 6.36813 10.7478 6.6261L1.44721 11.2764C0.782313 11.6088 4.6737e-07 11.1253 4.99864e-07 10.382L8.82948e-07 1.61803C9.15442e-07 0.874652 0.782313 0.391156 1.44722 0.723606L10.7478 5.3739Z' fill='%23D9D9D9'/%3E%3C/svg%3E");
  }

  &.record .icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='12' cy='12' r='9' stroke='%23FDFDFD' stroke-width='2'/%3E%3Ccircle cx='12' cy='12' r='6' fill='%23FDFDFD'/%3E%3C/svg%3E");
  }

  &.speed .icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3 12.2622C4.97081 7.69905 10.2676 5.59754 14.8308 7.56835C15.9232 8.04014 16.8745 8.70255 17.6626 9.49988' stroke='%23FDFDFD' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19.5942 12.428L11.2622 15.8306' stroke='%23FDFDFD' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Ccircle cx='11' cy='16' r='3' fill='%23FDFDFD'/%3E%3C/svg%3E");
  }

  &.clean .icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_5534_8305)'%3E%3Cpath d='M9 13.2941C9 11.718 11 7 12 7C13 7 15 11.718 15 13.2941C15 15.3408 13.6569 16.5 12 16.5C10.3431 16.5 9 15.3408 9 13.2941Z' fill='%23FDFDFD'/%3E%3Ccircle cx='12' cy='12' r='11' stroke='%23FDFDFD' stroke-width='2'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_5534_8305'%3E%3Crect width='24' height='24' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
  }

  &.aim .icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_5534_8297)'%3E%3Ccircle cx='12' cy='12' r='11' stroke='%23FDFDFD' stroke-width='2'/%3E%3Cpath d='M12 4L14.6667 6.66667M12 4L9.33333 6.66667M12 4V9.33334' stroke='%23FDFDFD' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M20 12L17.3333 9.33333M20 12L17.3333 14.6667M20 12H14.6667' stroke='%23FDFDFD' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M4 12L6.66667 14.6667M4 12L6.66667 9.33333M4 12H9.33334' stroke='%23FDFDFD' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M12 20L9.33333 17.3333M12 20L14.6667 17.3333M12 20V14.6667' stroke='%23FDFDFD' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_5534_8297'%3E%3Crect width='24' height='24' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
  }

  &.more .icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='12' cy='6' r='1.5' fill='%23FDFDFD'/%3E%3Ccircle cx='12' cy='12' r='1.5' fill='%23FDFDFD'/%3E%3Ccircle cx='12' cy='18' r='1.5' fill='%23FDFDFD'/%3E%3C/svg%3E");
  }

  &.photo .icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='20' height='16' viewBox='0 0 20 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.23764 2.07731C4.63789 0.839022 5.79085 0 7.09222 0H12.9078C14.2091 0 15.3621 0.83902 15.7624 2.07731L15.7717 2.10614C15.9439 2.63897 16.44 3 17 3C18.6569 3 20 4.34315 20 6V13C20 14.6569 18.6569 16 17 16H3C1.34315 16 0 14.6569 0 13V6C0 4.34315 1.34315 3 3 3C3.55997 3 4.05609 2.63897 4.22832 2.10614L4.23764 2.07731ZM10 13C12.2091 13 14 11.2091 14 9C14 6.79086 12.2091 5 10 5C7.79086 5 6 6.79086 6 9C6 11.2091 7.79086 13 10 13Z' fill='%23FDFDFD'/%3E%3C/svg%3E");
  }
  &.is-active {
    background-color: $primary;
  }
}
</style>
