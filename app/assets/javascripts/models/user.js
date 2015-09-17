UberDictionary.Models.User = Backbone.Model.extend({
  urlRoot: "/api/users",

  parse: function (res) {
    if (res.defins) {
      this.defins().set(res.defins, { parse: true });
      delete res.defins;
    }

    return res
  },

  defins: function () {
    this._defins = this._defins ||
      new UberDictionary.Collections.Defins([], { user: this });

    return this._defins;
  }
});
