(function() {
  'use strict';

  // Book sheet module config
  angular
    .module('book-sheet')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(Menus) {
    // Config logic
    // ...
  }
})();