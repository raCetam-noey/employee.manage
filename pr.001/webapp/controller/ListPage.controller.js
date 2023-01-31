sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
    "use strict";

    return Controller.extend("pr.001.controller.ListPage", {

        onInit: function () {},

        navDetail: function (oEvent) {
            var oTable = oEvent.getSource();
            var oContext = oTable.getSelectedItem().getBindingContext();
            this.getOwnerComponent().getRouter().navTo("ObjectPage", {key: oContext.getPath().substr(1)});
        }

    });
});
