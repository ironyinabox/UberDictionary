window.UberDictionary = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {

    var definsCollection = new UberDictionary.Collections.Defins();
    definsCollection.fetch();

    var usersCollection = new UberDictionary.Collections.Users();
    usersCollection.fetch();

    new UberDictionary.Routers.Defins({
      rootEl: '#content',
      collection: definsCollection,
      usersCollection: usersCollection
    });


    var header = new UberDictionary.Views.Header({
      collection: definsCollection
    });
    $('#header').html(header.render().$el);

    Backbone.history.start();


  }
};

$(document).ready(function(){
  UberDictionary.initialize();
});
