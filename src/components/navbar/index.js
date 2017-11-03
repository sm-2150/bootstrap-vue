import bNavbar from './navbar';
import bNavbarNav from './navbar-nav';
import bNavbarBrand from './navbar-brand';
import bNavbarToggle from './navbar-toggle';
import navPlugin from  '../nav';
import collapsePlugin from  '../collapse';
import dropdownPlugin from  '../dropdown';
import { registerComponent } from '../../utils';

/* eslint-disable no-var, no-undef, guard-for-in, object-shorthand */

const components = {
  bNavbar,
  bNavbarNav,
  bNavbarBrand,
  bNavbarToggle,
  bNavToggle: bNavbarToggle
};

const VuePlugin = {
  install(Vue) {
    for (var component in components) {
      registerComponent(Vue, component, components[component]);
    }
    Vue.use(navPlugin);
    Vue.use(collapsePlugin);
    Vue.use(dropdownPlugin);
  }
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VuePlugin);
};

export default VuePlugin;
