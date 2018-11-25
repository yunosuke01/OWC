// This is a JavaScript file
ons.bootstrap()
      .controller('AppController', function() {
        var self = this;
        
        self.init = function() {
          setTimeout(function() {
            app.navi.pushPage('page1.html');
          }, 2000);
        }
      });
    ons.ready(function() {
        console.log("Onsen UI is ready!");
    });
