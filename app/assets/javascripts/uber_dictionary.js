window.UberDictionary = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var header = new UberDictionary.Views.Header();
    $('#header').html(header.render().$el);

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
