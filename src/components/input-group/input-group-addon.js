import { mergeData } from '../../utils'
import InputGroupText from './input-group-text'
export const props = {
  id: {
    type: String,
    default: null
  },
  tag: {
    type: String,
    default: 'div'
  }
}

export default {
  functional: true,
  props,
  render (h, { props, data, children }) {
    return h(
      props.tag,
      mergeData(data, {
        staticClass: `input-group-${data.slot === 'left' ? 'prepend' : 'append'}`,
        attrs: { id: props.id }
      }),
      [h(InputGroupText, { }, children)]
    )
  }
}
