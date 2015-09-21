UberDictionary.Views.SessionNew = Backbone.View.extend({

  template: JST['users/signIn'],

  events: {
    'submit form': 'signIn',
    'click .sign-out' : 'signOut'
  },
  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render)
  },

  render: function () {
    var content = this.template({ users: this.collection });
    this.$el.html(content);
    return this;
  },

  signIn: function (e) {
    e.preventDefault();
    var that = this;
    var data = $(e.currentTarget).serializeJSON();
    $.ajax({
      url: "/session",
      type: "POST",
      data: data,
      dataType: "json",
      success: function(data){
        window.location.reload();
      }
    });
  },

  signOut: function (e) {
    e.preventDefault();
    $.ajax({
      url: "/session",
      type: "DELETE",
      success: function(){
        window.location.reload();
      }
    });
  }

});
