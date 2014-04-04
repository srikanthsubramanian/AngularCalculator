/**
 * Created with JetBrains WebStorm.
 * User: srikanths
 * Date: 12/9/13
 * Time: 10:46 AM
 * To change this template use File | Settings | File Templates.
 */
"use strict";

var calculatorApp = angular.module('CalculatorApplication',[]);
calculatorApp.config(function ($routeProvider){
    $routeProvider.when("/calculator",{
        templateUrl:"views/calculator.html",
        controller:"CalculatorController"
    }) ;

    $routeProvider.otherwise({
        redirectTo:"/calculator"
    });
});