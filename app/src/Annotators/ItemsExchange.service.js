angular.module('Pundit2.Core')
    .service('ItemsExchange', function(BaseComponent, NameSpace) {

        // TODO: inherit from a Store or something()? Annotations, items, ...
        var itemsExchange = new BaseComponent("ItemsExchange");

        var // itemListByType = {},
            // typeUriMap = {},
            // uriTypeMap = {},
            itemList = [],
            itemListByURI = {};

        itemsExchange.getItems = function() {
            return itemList;
        };

        itemsExchange.addItems = function(item) {

            // An item to be good must have an array of types and at least a uri
            if (typeof(item.uri) === "undefined" || !angular.isArray(item.type)) {
                cc.err("Ouch, cannot add this item ... ", item);
                return;
            } else if (item.uri in itemListByURI) {
                cc.log("Item already present: "+ item.label);
                return;
            }

            itemListByURI[item.uri] = item;
            itemList.push(item);

            itemsExchange.log("Added item: " +item.label);
        };

        itemsExchange.log('Component up and running');
        return itemsExchange;
    });