(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('TopNavController', TopNavController);

    TopNavController.$inject = ['$rootScope'];

    /* @ngInject */
    function TopNavController($rootScope) {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'TopNavController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();
