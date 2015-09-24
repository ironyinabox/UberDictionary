UberDictionary.Models.Defin = Backbone.Model.extend({
  urlRoot: "/api/defins",
  toJSON: function () {
    return { defin: _.clone(this.attributes) };
  },

  parse: function (res) {
    if (res.author) {
      this.author().set(res.author);
      delete res.author;
    }
    if (res.votes) {
      this.votes().set(res.votes)
      delete res.votes
    }

    return res;
  },

  saveFormData: function (formData, options) {
    var model = this;

    $.ajax({
      url: _.result(model, "url"),
      type: "PUT",
      data: formData,
      processData: false,
      contentType: false,
      success: function (resp) {
        model.set(model.parse(resp));
        model.trigger('sync', model, resp, options);
        options.success && options.success(model, resp, options);
      },
      error: function(resp){
        options.error && options.error(model, resp, options);
      }
    })
  },

  votes: function () {
    this._votes = this._votes ||
      new UberDictionary.Collections.Votes([],{ defin: this });

    return this._votes;
  },

  author: function () {
    this._author = this._author ||
      new UberDictionary.Models.User();

    return this._author;
  }
});
