/**
 * Created by miguel.sosa on 3/14/2016.
 */
(function (){
    "use strict";

    angular
        .module("productManagement")
        .controller("ProductDetailCtrl", ["product", "productService", ProductDetailCtrl]);

    function ProductDetailCtrl(product, productService) {
        var vm = this;

        //vm.product = {
        //    "productId": 2,
        //    "productName": "GDN-0023",
        //    "releaseDate": "March 18, 2010",
        //    "description": "15 gallon capacity rolling garden cart.",
        //    "cost": 20.00,
        //    "price": 32.99,
        //    "category": "garden",
        //    "tags": ["barrow", "cart", "wheelbarrow"],
        //    "imageUrl": "https://openclipart.org/image/2400px/svg_to_png/58471/garden-cart.png"
        //};

        //vm.product = [
        //    {"productId": 1,
        //        "productName": "Leaf Rake",
        //        "productCode": "GDN-0011",
        //        "releaseDate": "March 19, 2009",
        //        "description": "Leaf rake with 48-inch handle.",
        //        "cost": 9.00,
        //        "price": 19.95,
        //        "category": "garden",
        //        "tags": [ "leaf", "tool"],
        //        "imageUrl": "http://www.amestruetemper.com/uploads/images/True%20Temper/products/1919200_L_02.jpg"},
        //    {"productId": 2,
        //        "productName": "Garden Cart",
        //        "productCode": "TBX-1242",
        //        "releaseDate": "May 21, 2016",
        //        "description": "Bucket with two wheels",
        //        "cost": 23.00,
        //        "price": 56.99,
        //        "category": "carriage",
        //        "tags": ["utility"],
        //        "imageUrl": "http://i.imgur.com/JfJhONA.jpg"},
        //    {"productId": 3,
        //        "productName": "Knee Pad",
        //        "productCode": "KNP-4141",
        //        "releaseDate": "April 5, 2015",
        //        "description": "A foam pad for kneeling",
        //        "cost": 5.00,
        //        "price": 11.99,
        //        "category": "accessories",
        //        "tags": ["utility", "safety", "ease of use"],
        //        "imageUrl": "https://openclipart.org/image/2400px/svg_to_png/191346/lady-worship-praise.png"},
        //    {"productId": 4,
        //        "productName": "Hand Shovel",
        //        "productCode": "HSV-5653",
        //        "releaseDate": "June 24, 2014",
        //        "description": "A small shovel for digging pot holes",
        //        "cost": 6.00,
        //        "price": 15.99,
        //        "category": "garden",
        //        "tags": ["tool", "hand tool", "composite"],
        //        "imageUrl": "https://openclipart.org/image/2400px/svg_to_png/169586/shovel.png"},
        //    {"productId": 5,
        //        "productName": "Hammer",
        //        "productCode": "TBX-0049",
        //        "releaseDate": "May 21, 2013",
        //        "description": "Curved claw steel hammer",
        //        "cost": 1.00,
        //        "price": 8.99,
        //        "category": "toolbox",
        //        "tags": ["tool", "hand tool", "composite"],
        //        "imageUrl": "http://i.imgur.com/Bq7dbSe.jpg"}
        //];

        vm.product = product;

        vm.title = "Product Detail: " + vm.product.productName;

        vm.marginPercent = productService.calculateMarginFromPercent(vm.product.price, vm.product.cost);

        if (vm.product.tags) {
            vm.product.tagList = vm.product.tags.toString();
        }
    }
}());