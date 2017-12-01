/* eslint-env node */
'use strict';

const path = require('path');
const Funnel = require('broccoli-funnel');
const map = require('broccoli-stew').map;

const packageName = 'aframe';

module.exports = {
  name: 'ember-aframe-shim',

  included() {
    this._super.included.apply(this, arguments);

    let resolvedPath = require.resolve(packageName);
    this.dirname = path.dirname(resolvedPath);
    this.basename = path.basename(resolvedPath);

    this.import(`vendor/${packageName}/${this.basename}`, {
      using: [
        { transformation: 'amd', as: packageName }
      ]
    });
  },

  treeForVendor(defaultTree) {
    let browserVendorLib = new Funnel(this.dirname, {
      files: [this.basename],
      destDir: packageName
    });
    
    browserVendorLib = map(browserVendorLib, (content) => `if (typeof FastBoot === 'undefined') { ${content} }`);
    
    return new mergeTrees([defaultTree, browserVendorLib])
  }
};
