
var app = angular.module('myApp', []);

app.controller('familyHistoryCtrl', function($scope) {
    $scope.fhList = [];

    $scope.familyAdd = function() {

        // add a member to the list, when "submit" is pressed
        $scope.fhList.push({
            name: $scope.nameInput,
            father: $scope.fatherInput,
            mother: $scope.motherInput,
            done:false
        });
        $scope.nameInput = "";
        $scope.fatherInput = "";
        $scope.motherInput = "";
    };

    $scope.remove = function() {

        //store list in new variable
        var oldList = $scope.fhList;

        //empty out list
        $scope.fhList = [];

        //for each member of the list
        angular.forEach(oldList, function(x) {
            if (!x.done) {
                // add members back to the list if they weren't checked
                $scope.fhList.push(x);
            }
        });
    };
});