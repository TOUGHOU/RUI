import { createNamespace } from '../utils';
import { ParentMixin } from '../mixins/relation';

const [createComponent, bem] = createNamespace('radio-group');

export default createComponent({
  mixins: [ParentMixin('vanRadio')],

  props: {
    value: null,
    disabled: Boolean,
    orientation: {
      type: String,
      default: 'column',
      validator: (val) => ['row', 'column'].includes(val)
    },
  },

  watch: {
    value(value) {
      this.$emit('change', value);
    }
  },

  render() {
    return (
      <div class={bem([this.orientation])} role="radiogroup">
        {this.slots()}
      </div>
    );
  }
});
