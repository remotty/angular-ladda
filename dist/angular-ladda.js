/**!
 * AngularJS ladda directive
 * @author Chungsub Kim <subicura@subicura.com>
 * @version 0.1.4
 */

(function () {
  'use strict';

  angular.module('angular-ladda', []).directive(
    'ladda',
    [
      '$compile',
      function ($compile) {
        return {
          restrict: 'A',
          link: function (scope, element, attrs) {
            element.addClass('ladda-button');
            element.data('style', 'zoom-in');
            var contents = element.contents();
            var ladda = Ladda.create(element[0]); // ladda replace html
            angular.element(element.children()[0]).replaceWith(contents);

            scope.$watch(attrs.ladda, function(loading) {
              if(loading) {
                ladda.start();
              } else {
                ladda.stop();
              }
            });
          }
        };
      }
    ]
  );
})();
