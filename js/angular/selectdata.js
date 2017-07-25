
 app.controller('myCtrl-selectdata-clearance',function($scope,$http){
        $scope.data='';
         $http.get('../php/selectdata_table_clearance.php')
         .then(function(response){
                 $scope.data=response.data;
         },function(error){
                   console.log(error,'can not get data table clearance');
          });           
});

app.controller('myCtrl-selectdata-bedroom',function($scope,$http){
        $http.get('../php/selectdata_table_bedroom.php')
        .then(function(response){
                $scope.data=response.data;
        },function(error){
                console.log(error,'can not get data table bedroom');
        });
       
});

app.controller('myCtrl-selectdata-family-living-room',function($scope,$http){
        $http.get('../php/selectdata_table_familyroom.php')
        .then(function(response){
                $scope.data=response.data;
        },function(error){
                console.log(error,'can not get data from table family living room')
        });
})

