/* eslint-disable prefer-destructuring */
/* eslint-disable no-nested-ternary */
import Multiselect from 'vue-multiselect';

export default {
  name: 'Autocomplete',
  components: {
    Multiselect,
  },
  props: {
    value: {
      type: [Number, String, Array],
      required: true,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    initialValue: {
      type: [Number, String, Array],
      defualt: '',
    },
    placeholder: {
      type: String,
      default: 'Выбрать',
    },
    disabled: {
      type: Boolean,
    },
    isLoading: {},
    preventClearable: {},
    limit: {},
    preventEmptyRequest: {},
    remoteMethod: {
      type: Function,
      default: null,
    },
    options: {
      type: Array,
      default: () => [],
    },
    keyProp: {
      type: String,
      default: 'value',
    },
    labelProp: {
      type: String,
      default: 'label',
    },
    customLabel: {},
    exclude: {},
    forSearch: {},
    size: String,
    clearable: {
      type: Boolean,
      default: false,
    },
    collapseTags: {
      type: Boolean,
      default: true,
    },
    searchable: {
      type: Boolean,
      default: true,
    },
    noDataText: String,
    editMethod: Function,
    removeMethod: Function,
    additionalFilter: {},
    responseFormatter: {},
    multiple: {
      type: Boolean,
      default: false,
    },
    filterable: {},
    searchProp: {},
    filterLabel: {},
    remoteSearch: {}, // поиск и фильтрация элемента селекта на стороне сервера
    exeption: {}, // исключение в списке значений селекта, принимает значение code
    addMethod: {},
    addItemTopFix: {
      type: Boolean,
      default: false,
    },
    addTitle: {
      type: String,
      default: '',
    },
    addNewIcon: String, // Иконка кнопки "новый элемент" в конце списка
    singleLabel: {},
    preserveSearch: {
      default: false,
    },
    openDirection: String,
    suffix: null,
    filterProps: Array, // Список св-тв по которым можно фильтровать
    groupByProp: String, // Свойство, по которому группируем список
    searchValue: '',
    alwaysClean: {
      type: Boolean,
      default: false,
    },
    remoteOnFocus: Boolean,
    formParams: Object,
  },
  data() {
    return {
      result: this.multiple ? [] : undefined,
      resultObject: '',
      promise: undefined,
      originalList: [],
      loading: false,
      searchStr: '',
    };
  },
  created() {
    if (this.options) this.originalList = this.updateOptionsList();
  },
  async mounted() {
    if (this.hHasValue(this.value)) {
      await this.remote(this.value, true);
      this.valueToResult();
    } else {
      this.remote(null, true);
    }
    if (!this.addItemTopFix) return;
    this.setupFixElement();
  },
  computed: {
    list() {
      let optionList = this.originalList;
      if (this.exclude) {
        optionList = optionList.filter(item => this.exclude.some(el => item[this.keyProp] !== el));
      }
      if (!this.groupByProp) return optionList;
      const optionGroups = {};
      optionList.forEach(item => {
        if (!optionGroups[item[this.groupByProp]]) optionGroups[item[this.groupByProp]] = [];
        optionGroups[item[this.groupByProp]].push(item);
      });
      return Object.keys(optionGroups).map(groupLabel => ({
        groupLabel,
        groupValues: optionGroups[groupLabel],
      }));
    },
    isDisabled() {
      let result = false;
      result = !!this.disabled;
      if (this.$parent.elForm) {
        result = this.$parent.elForm.disabled;
      }
      // В случае если форма не задизейблена, ставим приоритет дизейбл елемента над дизейблом формы.
      if (!result) {
        result = !!this.disabled;
      }
      if (this.alwaysClean && (!this.originalList || !this.originalList.length)) {
        result = true;
      }
      return result;
    },
    placeholderText({ placeholder }) {
      if (this.result && this.result.length) return '';
      if (this.result && this.hHasValue(this.result[this.keyProp])) {
        return this.result[this.labelProp];
      }
      if (placeholder && typeof placeholder === 'function') { return placeholder() || this.$t('buttons.select'); }
      if (placeholder) return placeholder;
      return this.$t('buttons.select');
    },
  },
  watch: {
    initialValue() {
      this.result = this.initialValue;
    },
    additionalFilter() {
      this.remote('', true);
    },
    isLoading(val) {
      this.loading = val;
    },
    result(val) {
      if (this.value !== val) {
        if (this.hHasValue(val)) {
          if (this.multiple) {
            const newVal = val ? val.map(item => item[this.keyProp]).sort() : [];
            this.$emit('input', newVal);
          } else {
            this.$emit('input', val[this.keyProp]);
          }
          this.resultObject = val;
          this.$emit('change', val);
        } else {
          this.$emit('input', '');
          this.$emit('change', {});
        }
      }
    },
    value: {
      async handler(val, prevVal) {
        if (!this.multiple && this.resultObject[this.keyProp] !== val) {
          await this.remote(val);
          if (this.originalList.length > 0) {
            this.result = this.originalList.find(el => el[this.keyProp] === val) || null;
          }
        } else if (this.originalList.length > 0) {
          if (Array.isArray(val)) {
            const result = !this.result
              ? null
              : Array.isArray(this.result)
                ? this.result
                : [this.result];
            const resultKeys = result ? result.map(el => el[this.keyProp]) : [];
            if (!this.isEqualArray(resultKeys, val)) {
              this.result = this.originalList
                .filter(el => val.indexOf(el[this.keyProp]) + 1)
                .sort();
            }
          } else {
            this.result = this.originalList.find(el => el[this.keyProp] === val) || null;
          }
        }
        if (!this.hHasValue(val) && this.hHasValue(prevVal)) {
          this.result = this.multiple ? [] : null;
        }

        if (this.$parent && this.$parent.elForm && this.$parent.prop) {
          this.$nextTick(() => {
            this.$parent.elForm.validateField(this.$parent.prop);
          });
        }
      },
    },
    forSearch(val) {
      this.remote(val);
    },
    options(val) {
      this.originalList = this.updateOptionsList(val);
      this.valueToResult();
    },
  },
  methods: {
    $t(str) {
      return str;
    },
    setupFixElement() {
      const option = this.$refs.fixOption;
      const select = this.$refs.multiselect;
      if (option && select) {
        const selectWidth = select.$el.clientWidth;
        option.style.maxWidth = `${selectWidth - 4}px`;
      }
    },
    updateOptionsList(data = this.options) {
      return data.map(item => {
        const filterValues = [item[this.labelProp]];
        if (this.suffix) {
          filterValues.push(
            typeof this.suffix === 'function' ? this.suffix(item) : item[this.suffix],
          );
        }
        if (this.filterProps && this.filterProps.length) {
          this.filterProps.forEach(prop => {
            filterValues.push(item[prop]);
          });
        }

        return {
          ...item,
          filterProp: filterValues.join(' '),
        };
      });
    },
    valueToResult() {
      if (!this.hHasValue(this.value)) return;
      if (this.originalList && (this.originalList.length > 0 || this.alwaysClean)) {
        if (!this.multiple) {
          this.result = this.list.find(el => el[this.keyProp] === this.value) || null;
          return;
        }
        const result = [];
        if (Array.isArray(this.value)) {
          this.value.forEach(item => {
            const find = this.list.find(el => el[this.keyProp] === item);
            if (find) result.push(find);
          });
        } else if (typeof this.value !== 'object') {
          result.push(this.value);
        }
        if (this.multiple) this.result = result;
        else this.result = result[0] || null;
      }
    },
    checkExeption() {
      if (this.exeption) this.remote(null, true);
    },
    queryChange(val) {
      if (this.preventClearable) return;

      if (window.queryChangeTimer) {
        clearTimeout(window.queryChangeTimer);
      }
      window.queryChangeTimer = setTimeout(() => {
        if (!val && this.result && !this.$refs.selectRef.query) {
          this.result = '';
        }
      }, 100);
    },
    clearAll() {
      if (Array.isArray(this.result)) this.result = [];
      else this.result = null;
      this.$emit('clearAll');
    },
    emitFocus() {
      this.disabledSelectOption();
      this.$emit('focus', this.list);
      this.checkExeption();
      if (this.remoteOnFocus) {
        this.remote(null, true);
      }
    },
    emitSelectedOption(selectedOption) {
      this.$nextTick(() => {
        this.$emit('selectedOption', selectedOption);
      });
    },
    disabledSelectOption() {
      if (this.multiple) return;
      this.list.forEach(item => {
        item.$isDisabled = this.result && item[this.keyProp] === this.result[this.keyProp];
      });
    },
    itemIsActive(item) {
      return this.result && item[this.keyProp] === this.result[this.keyProp];
    },
    includeInExclude(id) {
      if (this.exclude) {
        return !this.exclude.find(item => item === id);
      }
      return true;
    },
    searchChange(str) {
      this.searchValue = str;
      this.remote(str);
    },
    remote(str, mounted, options = this.formParams) {
      this.searchStr = str;
      if (this.remoteMethod && (mounted || this.remoteSearch)) {
        if (this.preventEmptyRequest && !str) {
          this.loading = false;
          return false;
        }

        this.$set(this, 'originalList', []);
        this.promise = new Promise((resolve) => {
          const requestData = {
            limit: this.limit || 100,
            page: 1,
          };
          const filters = [];
          let numSTR;
          let label = this.filterLabel || this.labelProp;
          if (Array.isArray(label)) {
            label = label[0];
          }
          if (str) {
            numSTR = parseInt(str, 10);
            if (!this.searchProp) {
              if (this.keyProp === 'id') {
                if (Array.isArray(str)) {
                  if (str.length) {
                    filters.push({
                      property: this.keyProp,
                      value: str,
                      operator: 'in',
                    });
                  }
                } else if (!Number.isNaN(numSTR)) {
                  filters.push({
                    property: this.keyProp,
                    value: numSTR,
                    operator: 'eq',
                  });
                }
              } else {
                filters.push({
                  property: this.keyProp,
                  value: str,
                  operator: 'eq',
                });
              }
            }
            if (!Array.isArray(str) && Number.isNaN(numSTR)) {
              filters.push({
                property: label,
                value: str,
                operator: 'like',
              });
            }
            if (!Array.isArray(str)) {
              if (this.searchProp) {
                filters.push({
                  property: this.searchProp,
                  value: str,
                  operator: 'like',
                });
              }
            }
          }
          if (this.exeption) {
            filters.push({
              property: 'code',
              value: this.exeption,
              operator: 'ne',
            });
          }
          if (this.additionalFilter) {
            filters.push(this.additionalFilter);
          }

          if (filters.length && this.remoteSearch) {
            requestData.filter = {
              value: filters,
              operator: 'and',
            };
            if (filters.length === 1) {
              requestData.filter = filters[0];
            }
          } else if (this.additionalFilter) {
            requestData.filter = {
              value: [this.additionalFilter],
              operator: 'or',
            };
          }
          try {
            this.remoteMethod(requestData, str, options).then(data => {
              if (!data) {
                resolve([]);
              } else if (Array.isArray(data)) {
                resolve(data);
              } else if (this.responseFormatter && typeof this.responseFormatter === 'function') {
                resolve(this.responseFormatter(data.data));
              } else {
                resolve(data.data.data);
              }
            });
            this.promiseReject = resolve;
          } catch (e) {
            this.loading = false;
            console.error('Remote Method:', e);
          }
        });
        return this.promise
          .then(data => {
            data = this.updateOptionsList(data);
            this.$set(this, 'originalList', data);
            if (str) {
              const val = data.find(item => item[this.keyProp] === str);
              if (val) {
                this.$emit('setProp', val);
              }
            }
            this.valueToResult();
            this.loading = false;
          })
          .catch(() => {
            this.loading = false;
          });
      }
      this.loading = false;
    },
    // getLabel(item) {
    //   if (typeof this.labelProp === 'object') {
    //     const res = [];
    //     for (let i = 0; i < this.labelProp.length; i += 1) {
    //       res.push(`${item[this.labelProp[i]] || ''}`);
    //     }
    //     return res.join(this.delimiter || ' ');
    //   }
    //   if (typeof this.labelProp !== 'undefined') {
    //     return item[this.labelProp];
    //   }
    //   return '';
    // },
    addNew() {
      this.$refs.multiselect.$emit('close');
      // this.$refs.multiselect.$refs.search.blur();
      this.$emit('onAddNew', this.searchStr);
    },

    hHasValue(value) {
      try {
        return value || value === false || value === 0;
      } catch (e) {
        return false;
      }
    },
    isEqualArray(a, b) {
      try {
        if (a.length !== b.length) return false;
        return a.every(val => b.indexOf(val) + 1);
      } catch (e) {
        return false;
      }
    },
  },
};
