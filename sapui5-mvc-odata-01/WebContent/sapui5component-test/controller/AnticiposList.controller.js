sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller, MessageToast) {
	"use strict";
 
	return Controller.extend("com.ittumi.compgastosapp.anticipos.controller.AnticiposList", {
		
		onInit : function () {
			var oModel = new sap.ui.model.odata.v2.ODataModel("proxy/http/services.odata.org/V3/Northwind/Northwind.svc/", false);
			sap.ui.getCore().setModel(oModel);
			this.getView().setModel(oModel);
		},
		
		onListItemPress : function(oEvent) {
			console.log('onListItemPress called()');
			var bindingContext = oEvent.getSource().getBindingContext();
			MessageToast.show("Details for product with id " + bindingContext.getProperty('ProductName'));
		}
		
	});

});
