/*global QUnit*/

sap.ui.define([
	"emp.manage/controller/ListPage.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ListPage Controller");

	QUnit.test("I should test the ListPage controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
