UberDictionary.Views.SessionNew = Backbone.View.extend({

  template: JST['users/signIn'],

  events: {
    'submit .sign-in-form': 'signIn',
    'click .sign-out' : 'signOut',
    'submit .change-name-form': 'save'
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
  },

  save: function (e) {
    e.preventDefault();
    var that = this;
    var data = $(e.currentTarget).serializeJSON();
    var user = this.collection.get(data.user.id)
    user.set({ user_name: data.user.user_name })
    user.save({}, {
      success: function (user) {
        that.collection.add(user, { merge: true });
        user.fetch();
      }
    });
  }

});
