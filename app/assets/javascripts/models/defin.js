UberDictionary.Models.Defin = Backbone.Model.extend({
  urlRoot: "/api/defins",
  toJSON: function () {
    return { defin: _.clone(this.attributes) }
  },

  parse: function (res) {
    if (res.author) {
      this.author().set(res.author);
      delete res.author;
    }

    return res;
  },

  author: function () {
    this._author = this._author ||
      new UberDictionary.Models.User();

    return this._author;
  }
});
