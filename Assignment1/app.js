(function (){
    'use  strict';

    var lunchCheckController = function($scope){
        $scope.checkLunchMenu = function(){
            var menu = $scope.lunchmenu;
            if (menu === "" || menu === undefined){
                $scope.lunchMsg = "Please enter data first";
            } else {
                var count = checkEmptyItems(menu.split(','));
                if (count <= 3){
                    $scope.lunchMsg = "Enjoy!";
                } else {
                    $scope.lunchMsg = "Too much!";
                }
            }
        };

        function checkEmptyItems (items){
            var count = 0;
            items.forEach(function(item, index){
                if (item.trim() !== ""){
                    count++;
                }
            });
            return count;
        }
    };

    lunchCheckController.$inject = ['$scope'];

    angular.module('LunchCheck', []).controller('LunchCheckController', lunchCheckController);
})();