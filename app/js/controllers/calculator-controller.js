/**
 * Created with JetBrains WebStorm.
 * User: srikanths
 * Date: 12/9/13
 * Time: 4:13 PM
 * To change this template use File | Settings | File Templates.
 */
"use strict";

calculatorApp.controller("CalculatorController",function($scope){
    $scope.numericKeys=[
        {label:'7',value:7},{label:'8',value:8},{label:'9',value:9},
        {label:'4',value:4},{label:'5',value:5},{label:'6',value:6},
        {label:'1',value:1},{label:'2',value:2},{label:'3',value:3},
        {label:'0',value:0}
    ];

    $scope.operatorKeys=[
        {label: "/", operation: function (valueA, valueB) {return valueA / valueB}},
        {label: "*", operation: function (valueA, valueB) {return valueA * valueB}},
        {label: "-", operation: function (valueA, valueB) {return valueA - valueB}},
        {label: "+", operation: function (valueA, valueB) {return valueA + valueB}}
    ];

    $scope.resultOperatorKey={
        label:'='
    };

    $scope.specialOperatorKeys=[

    ];

    $scope.valueA=0;
    $scope.valueB=0;
    $scope.operandCount=0;
    $scope.operationString='';
    $scope.outputValue=0;
    $scope.selectedOperation=null;
    $scope.clearOperand=true;

    $scope.operandClicked = function(operand){
        if($scope.clearOperand){
            $scope.outputValue=operand;
            $scope.operandCount+=1;
            $scope.clearOperand=false;
            $scope.operationString=$scope.operationString+''+$scope.outputValue;
        }else{
            $scope.outputValue=$scope.outputValue * 10 + operand;
            $scope.operationString+=operand;
        }
        $scope.valueB = $scope.outputValue;
    };

    $scope.operatorClicked = function(operation,label){
        if($scope.operandCount>=2){
            $scope.extraOperation=operation;
            $scope.outputValue = Math.floor(
                $scope.selectedOperation($scope.valueA, $scope.valueB));
            $scope.operandCount=1;
        }
        $scope.selectedOperation=operation;
        $scope.operationString=$scope.operationString+''+label;
        $scope.valueA = $scope.outputValue;
        $scope.clearOperand=true;
    };

    $scope.calculate = function(){
        if($scope.selectedOperation != null) {
            $scope.outputValue = Math.floor(
                $scope.selectedOperation($scope.valueA, $scope.valueB));
            $scope.clearOperand = true;
            $scope.valueA = $scope.outputValue;
        }
    };
});

