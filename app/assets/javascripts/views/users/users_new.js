UberDictionary.Views.UsersNew = Backbone.View.extend({

  template: JST['users/new'],

  events: {
    'submit form': 'submit'
  },

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    return this;
  },

  submit: function (e) {
    e.preventDefault();
    var that = this;
    var data = $(e.currentTarget).serializeJSON();
    this.model.save(data, {
      success: function () {
        Backbone.history.navigate('', { trigger: true });
        window.location.reload();
      }
    });
  }

});
