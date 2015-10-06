UberDictionary.Views.DefinsNew = Backbone.View.extend({

  template: JST['defins/new'],

  className: 'new-word',

  events: {
    'click .exit-modal': 'exitModal',
    'submit form': 'submit'
  },

  render: function () {
    var content = this.template({ defin: this.model });
    this.$el.html(content);
    return this;
  },

  submit: function (e) {
    e.preventDefault();
    var that = this;
    var data = $(e.currentTarget).serializeJSON();
    this.$el.remove();
    this.model.save(data.defin, {
      success: function (defin) {
        that.collection.add(defin);
        defin.fetch();
        Backbone.history.navigate('', { trigger: true })
      },
      error: function (defin) {
        alert("Must be logged in and complete all fields")
      }
    });
  },

  exitModal: function (e) {
    e.preventDefault();
    this.$el.remove();
  }
});
