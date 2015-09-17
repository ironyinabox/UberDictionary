UberDictionary.Views.DefinsShow = Backbone.View.extend({

  template: JST['defins/show'],
  tagName: 'li',
  className: 'defin',

  // events: {
  //   'click .upvote': 'upvoteDefin',
  //   'click .downvote': 'downvoteDefin'
  // },

  initialize: function (options) {
    this.listenTo(this.model, 'sync destroy', this.render)
  },

  render: function () {
    var content = this.template({ defin: this.model });
    this.$el.html(content);
    return this;
  },
  upvoteDefin: function (e) {
    e.preventDefault;
    var id = $(e.currentTarget).data('id')
    var vote = new UberDictionary.Models.Vote({
      defin_id: id
    });
    vote.set({ upvote: true });
    vote.save();
  },

  downvoteDefin: function (e) {
    e.preventDefault;
    var id = $(e.currentTarget).data('id')
    var vote = new UberDictionary.Models.Vote({
      defin_id: id
    });
    vote.set({ upvote: false });
    vote.save();
  }
});
