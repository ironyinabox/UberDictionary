UberDictionary.Views.ImgUpload = Backbone.View.extend({

  template: JST['defins/imgUpload'],
  className: "new-img",

  events: {
    'click .exit-modal': 'exitModal',
    "submit form": "submitPhoto"
  },

  render: function () {
    var content = this.template({ defin: this.model });
    this.$el.html(content);
    return this;
  },

  submitPhoto: function (e) {
    e.preventDefault();
    var file = this.$("#input-image")[0].files[0];
    var formData = new FormData();
    formData.append('defin[image]', file);
    this.$el.remove();
    this.model.saveFormData(formData, {
      success: function () {
        Backbone.history.navigate("", {trigger: true});
      }
    });
  },

  exitModal: function () {
    this.$el.remove();
  }
});
