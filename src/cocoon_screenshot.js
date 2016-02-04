document.addEventListener("deviceready", function() {

    if (!window.Cocoon && window.cordova && typeof require !== 'undefined') {
    	
        cordova.require('cocoon-plugin-common.Cocoon');
        
    }
    
    var Cocoon = window.Cocoon;
    
    Cocoon.define("Cocoon.Screenshot", function(extension) {
        /**
         * Takes a screenshot and opens a given share native window to share some specific text content in
         * any system specific social sharing options. For example, Twitter, Facebook, SMS, Mail, ...
         * @memberOf Cocoon.Screenshot
         * @function share
         * @property {string}  data.message       - The message that will be shared.
         * @example
         * Cocoon.Screenshot.share('Look at my Screenshot!');
         */
        extension.share = function(message, callback) {
        	
        	var screenshotURL = Cocoon.Utils.captureScreen("screenshot.jpg", Cocoon.App.StorageType.TEMPORARY_STORAGE, 0);
        	
        	var img = new Image();
        	
        	img.crossOrigin = 'Anonymous';
        	
        	img.onload = function(){
        		
        		var canvas = document.createElement('CANVAS');
        		var ctx = canvas.getContext('2d');
        		var dataURL;
        		
        		canvas.height = this.height;
        		canvas.width = this.width;
        		
        		ctx.drawImage(this, 0, 0);
        		
        		dataURL = canvas.toDataURL();
        		
        		Cocoon.Share.share({
        			
        	        message: message,
        	        image: dataURL
        	        
                }, function(activity, completed, error){
                	
                	//console.log("Share " + completed ? 'Ok.' : 'Failed.');
                	
                	callback();
                	
                });
        		
        		canvas = null; 
        		
        	}
        	
        	img.src = screenshotURL;
        	
        };

        return extension;
    });

});
