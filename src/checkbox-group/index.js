import { createNamespace } from '../utils';
import { ParentMixin } from '../mixins/relation';

const [createComponent, bem] = createNamespace('checkbox-group');

export default createComponent({
  mixins: [ParentMixin('vanCheckbox')],

  props: {
    max: Number,
    disabled: Boolean,
    value: {
      type: Array,
      default: () => []
    },
    orientation: {
      type: String,
      default: 'column',
      validator: (val) => ['row', 'column'].includes(val)
    },
  },

  watch: {
    value(val) {
      this.$emit('change', val);
    }
  },

  render() {
    return <div class={bem([this.orientation])}>{this.slots()}</div>;
  }
});
