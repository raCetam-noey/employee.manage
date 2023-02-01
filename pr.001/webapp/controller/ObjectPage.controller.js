sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(
	Controller
) {
	"use strict";

	return Controller.extend("pr.001.controller.ObjectPage", {
		onInit: function() {

            this.getOwnerComponent().getRouter().getRoute("ObjectPage").attachPatternMatched(this._onObjectMatched, this);
        },

        _onObjectMatched: function(oEvent) {
            this._sKey = "/" + oEvent.getParameter("arguments").key;
            this.getView().bindElement({
                path: this._sKey
            });
        },
        onNavBack: function() {
            this.getOwnerComponent().getRouter().navTo("RouteMain", null);
        },

	});
});