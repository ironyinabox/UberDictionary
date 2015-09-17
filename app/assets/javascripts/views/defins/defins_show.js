UberDictionary.Views.DefinsShow = Backbone.View.extend({

  template: JST['defins/show'],
  tagName: 'li',
  className: 'defin',
  events: {
    'click .upvote': 'upvoteDefin',
    'click .downvote': 'downvoteDefin'
  },

  initialize: function (options) {
    this.vote = new UberDictionary.Models.Vote({
      defin_id: this.model.get('id')
    });
    this.listenTo(this.model, 'sync destroy', this.render);
    this.listenTo(this.vote, 'change', this.render)

  },

  render: function () {
    var content = this.template({ defin: this.model });
    this.$el.html(content);
    return this;
  },

  upvoteDefin: function (e) {
    e.preventDefault;
    this.vote.set({ upvote: true });
    this.vote.save();
  },

  downvoteDefin: function (e) {
    e.preventDefault;
    this.vote.set({ upvote: false });
    this.vote.save();
  }
});
