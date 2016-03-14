/**
 * Created by miguel.sosa on 3/14/2015.
 */
(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("productService", productService);

    function productService() {

        // calculate margin percent from given price and cost
        function calculateMarginPercent(price, cost) {
            var margin = 0;
            if (price && cost) {
                margin = 100 * ((price - cost) / price);
            }
            margin = Math.round(margin);
            return margin;
        }

        // calculate margin amount from a given price and cost
        function calculateMarginAmount(price, cost) {
            var margin = 0;
            if (price && cost) {
                margin = price - cost;
            }
            return margin;
        }

        // calculate price from a given cost and markup percent
        function calculatePriceFromPercent(cost, percent) {
            var price = cost;
            if (cost && price) {
                price = cost + (cost * percent / 100);
                price = (Math.round(price * 100)) / 100;
            }
            return price;
        }

        // calculate price from a given cost and markup amount
        function calculatePriceFromAmount(cost, amount) {
            var price = cost;
            if (cost && amount) {
                price = cost + amount;
                price = (Math.round(price * 100)) / 100;
            }
            return price;
        }

        // return results
        return {
            calculateMarginFromPercent: calculateMarginPercent,
            calculateMarginFromAmount: calculateMarginAmount,
            calculatePriceFromMarkupPercent: calculatePriceFromPercent,
            calculatePriceFromMarkupAmount: calculatePriceFromAmount
        };
    }

}());