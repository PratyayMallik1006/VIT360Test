var myNewApp =angular.module('myNewApp',[]);


myNewApp.controller('newController',['$scope',function($scope){

    $scope.message="text by controller";

    $scope.names=[
        {name:"Problem Solving Programming",
        cost:"CSE 1001",
         show: true,
         thumb: "content/python.png",
         open: "https://www.youtube.com/watch?v=yPpQzaWZWTA&list=PLtStfEFleC_vlD5iNridlQsLat2i423R2"
        },
        {name:"Engineering Chemistry",
         cost:"CHY 1701",
         show:true,
         thumb: "content/chem.png",
         open: "courses/chem/index.html"
        },
        {name:"Engineering Physics",
        cost:"PHY 1701",
         show:true,
         thumb: "content/phy.png",
         open: "courses/phy/index.html"
        }
        ,
        {name:"Calculus For Engineers",
        cost:"MAT 1101",
         show:true,
         thumb: "content/math.png",
         open: "courses/math/index.html"
        }
        ,
        {name:"Basic Electrical and Electronics",
        cost:"EEE 1001",
         show:true,
         thumb: "content/eee.png",
         open: "courses/bee/index.html"
        }
        
    ];

    $scope.addColor=function(){
        $scope.names.push({
            name: $scope.new.name,
            cost: $scope.new.cost,
            show: true
        });
   };
}]);
