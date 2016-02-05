# cocoon-screenshot-share
Cocoon-Canvas+ Screenshot Share Extension

This extension provides a simple way to take a screenshot and natively share it to Twitter, Facebook, WhatsApp... including a message.
Does only work for Canvas+ at the moment. Credit goes to 
[Blue_Sialia](https://forums.cocoon.io/users/Blue_Sialia) and [HaNdTriX](http://stackoverflow.com/a/20285053)

## Instructions
Include **cocoon_screenshot.js** in your Canvas+ index.html

## Usage
To take and share a screenshot in the Canvas+ environment, use:
```
Cocoon.Screenshot.share('Look at my Screenshot!', function() { 

  //Callback on completion
  
} );
```
If you want to use it in the webView of Canvas+ use:
```
Cocoon.App.forward("Cocoon.Screenshot.share('Look at my screenshot!', function() { //Callback on completion } );");
```
