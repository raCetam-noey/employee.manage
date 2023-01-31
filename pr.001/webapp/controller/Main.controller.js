sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("pr.001.controller.Main", {
            onInit: function () {
                

            },

            navToManageEmployees: function () {
                this.getOwnerComponent().getRouter().navTo("ListPage");
            },
        });
    });
