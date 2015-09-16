UberDictionary.Views.UsersShow = Backbone.View.extend({

  template: JST['users/show'],
  events: {
    'click .delete-button': 'deleteWord'
  },
  initialize: function (options) {
    this.defins = this.model.defins();
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.defins, 'remove', this.render)
  },

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    return this;
  },

  deleteWord: function (e) {
    e.preventDefault();
    var definId = $(e.currentTarget).data('id');
    this.defins.get(definId).destroy({
      success: function (defin) {
        this.defins.remove(defin);
      }
    });
  }

});
