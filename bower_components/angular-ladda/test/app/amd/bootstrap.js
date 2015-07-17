/**
 * bootstraps angular onto the window.document node
 */
define([
  'require',
  'angular',
  'app'
], function (require, ng) {
  'use strict';
  ng.bootstrap(document, ['testApp']);
});
