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
    if (res.votes) {
      this.votes().set(res.votes)
      delete res.votes
    }

    return res;
  },

  votes: function () {
    this._votes = this._votes ||
      new UberDictionary.Collections.Votes([],{ defin: this });

    return this._votes
  },

  author: function () {
    this._author = this._author ||
      new UberDictionary.Models.User();

    return this._author;
  }
});
