import bPopover from './popover';
import { registerDirective } from '../../utils';

/* eslint-disable no-var, no-undef, guard-for-in, object-shorthand */

const directives = {
  bPopover
};

const VuePlugin = {
  install(Vue) {
    for (var directive in directives) {
      registerDirective(Vue, directive, directives[directive]);
    }
  }
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VuePlugin);
};

export default VuePlugin;
