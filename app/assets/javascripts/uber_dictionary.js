window.UberDictionary = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {

    new UberDictionary.Routers.Defins({
      rootEl: '#content'
    });
    new UberDictionary.Routers.Users({
      rootEl: '#content'
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  UberDictionary.initialize();
});
