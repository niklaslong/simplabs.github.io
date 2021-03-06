'use strict';

module.exports = {
  name: require('./package').name,

  isDevelopingAddon() {
    return true;
  },

  contentFor(type) {
    if (process.env.CONTEXT === 'production' && type === 'head-footer') {
      return `
        <script async defer data-domain="simplabs.com" src="https://plausible.io/js/plausible.js"></script>
      `;
    }

    return '';
  },
};
