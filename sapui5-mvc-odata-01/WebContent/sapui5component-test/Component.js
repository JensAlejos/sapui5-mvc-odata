sap.ui.define([
	'sap/ui/core/UIComponent'
], function(UIComponent) {
	"use strict";

	return UIComponent.extend("com.ittumi.compgastosapp.anticipos.Component", {
		metadata : {
			rootView : "com.ittumi.compgastosapp.anticipos.view.AnticiposList",
			dependencies : {
				libs : [
					"sap.ui.table",
					"sap.ui.unified",
					"sap.m"
				]
			},

			config : {
				sample : {
					stretch : true,
					files : [
						"view/AnticiposList.view.xml",
						"controller/AnticiposList.controller.js"
					]
				}
			}
		}
	});

});
