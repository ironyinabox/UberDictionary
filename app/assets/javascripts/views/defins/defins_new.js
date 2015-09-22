UberDictionary.Views.DefinsNew = Backbone.View.extend({

  template: JST['defins/new'],

  events: {
    'submit form': 'submit',
    'click .exit-modal': 'exitModal'
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

  exitModal: function () {
    this.$el.remove();
  }

});
