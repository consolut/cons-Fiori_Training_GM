sap.ui.define([], function () {
	"use strict";
	return {
		setValueState: function (fMeasurement) {
			if ( fMeasurement < 0 ) {
                return "Error";
            } else {
                return "None";
            }
		},

        setValueStateText: function (fMeasurement) {
            var oMessages = this.getOwnerComponent().getModel("i18n").getResourceBundle();
			if ( fMeasurement < 0 ) {
                return oMessages.getText("EnterPositiveNumber");
            } else {
                return "None";
            }
		}
	};
});