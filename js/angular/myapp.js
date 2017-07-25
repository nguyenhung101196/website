
           var app= angular
                    .module('myApp',['ngRoute'])
                   
                    .config(function($routeProvider){
                        $routeProvider
                        // banner-page
                        .when('/',{
                            templateUrl:'../html/content.html'
                        })
                        .when('/home',{
                            templateUrl:'../html/content.html'
                        })
                        .when('/account/login',{
                           templateUrl: '../html/login.html'
                        })
                        .when('/account/signup',{
                            templateUrl:'../html/signup.html'
                        })
                        .when('/cart',{
                            templateUrl:'../html/cart.html'
                        })
                        .when('/chicago-furniture-store-delivery-service',{
                            templateUrl:'../html/chicago_furniture_store_delivery_service.html'
                        })
                        .when('/chicago-furniture-store-in-store-pickup',{
                            templateUrl:'../html/chicago_furniture_store_in_store_pickup.html'
                        })

                        //header-page
                        .when('/collections/clearance',{
                            templateUrl:'../html/clearance.html'
                        })
                        .when('/collections/recycled-aluminum-tables',{
                            templateUrl:'../html/shipments-recycled-aluminum-tables.html'
                        })
                         .when('/collections/chicago-flag-swag',{
                            templateUrl:'../html/shipments-chicago-flag-swag.html'
                        })
                         .when('/collections/wrightwood-factory',{
                            templateUrl:'../html/shipments-wrightwood-factory.html'
                        })
                        .when('/collections/family-living-room',{
                            templateUrl:'../html/family_living_room.html'
                        })
                        .when('/collections/dining-kitchen',{
                            templateUrl:'../html/dining_kitchen.html'
                        })
                        .when('/collections/bedroom',{
                            templateUrl:'../html/bedroom.html'
                        })
                        .when('/collections/entryway',{
                            templateUrl:'../html/entryway.html'
                        })
                        .when('/collections/home-office',{
                            templateUrl:'../html/homeoffice.html'
                        })
                        .when('/collections/lighting-pillows-more',{
                            templateUrl:'../html/lighting_pillows_more.html'
                        })
                        .when('/pages/about-us-story',{
                            templateUrl:'../html/about_us_our_story.html'
                        })
                         .when('/pages/about-us-eco-friendly',{
                            templateUrl:'../html/about_us_eco_friendly.html'
                        })
                        .when('/product/product-name',{
                            templateUrl:'../html/product_cart.html'
                        })

                        //contact
                        .when('/pages/contact',{
                            templateUrl:'../html/contact_us.html'
                        })
                        .otherwise({
                            templateUrl:'../html/404.html'
                        });
                    });


                   

