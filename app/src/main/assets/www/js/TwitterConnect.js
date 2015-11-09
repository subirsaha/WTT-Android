//cordova.define("com.manifestwebdesign.twitterconnect.TwitterConnect", function(require, exports, module) {
//
//var exec = require('cordova/exec');
//
//var TwitterConnect = {
//	login: function (successCallback, errorCallback) {
//		exec(successCallback, errorCallback, 'TwitterConnect', 'login', []);
//	},
//	logout: function (successCallback, errorCallback) {
//		exec(successCallback, errorCallback, 'TwitterConnect', 'logout', []);
//	}
//};
//
//module.exports = TwitterConnect;
//});

//$( document ).ready(function() {
				//console.log( "ready!" );
				//alert("raedy");
				var exec = require('cordova/exec');

						var TwitterConnect = {
							login: function (successCallback, errorCallback) {
								exec(successCallback, errorCallback, 'TwitterConnect', 'login', []);
							},
							logout: function (successCallback, errorCallback) {
								exec(successCallback, errorCallback, 'TwitterConnect', 'logout', []);
							}
						};

						module.exports = TwitterConnect;
//			});