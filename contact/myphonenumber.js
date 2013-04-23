//constructor
var MyPhoneNumberPlugin = {
	getMyPhoneNumber: function(onSuccess, onError) {
		console.log("at getMyPhoneNumber");
		return cordova.exec(onSuccess, onError, "MyPhoneNumberPlugin", "getMyPhoneNumber", []);
		//return cordova.exec("MyPhoneNumberPlugin.getMyPhoneNumber", GetFunctionName(onSuccess), GetFunctionName(onError));
	}
}

/*PhoneGap.addConstructor(function() {
	if(!window.plugins) {
		window.plugins = {};
	}
	window.plugins.MyPhoneNumberPlugin = new MyPhoneNumberPlugin();
});*/
