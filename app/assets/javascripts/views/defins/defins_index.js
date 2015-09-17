UberDictionary.Views.DefinsIndex = Backbone.View.extend({

  template: JST['defins/index'],

  events: {
    'click .upvote': 'upvoteDefin',
    'click .downvote': 'downvoteDefin',
  },

  initialize: function (options) {
    this.listenTo(this.collection, 'sync destroy', this.render)
  },

  render: function () {
    var content = this.template({ defins: this.collection });
    this.$el.html(content);
    return this;
  },
  upvoteDefin: function (e) {
    e.preventDefault;
    var id = $(e.currentTarget).data('id')
    var vote = new UberDictionary.Models.Vote({
      upvote: true,
      defin_id: id
    });
    vote.save({
      error: function () {
        alert('you got probs')
      }
    })
  },

  downvoteDefin: function (e) {
    e.preventDefault;
    var id = $(e.currentTarget).data('id')
    var vote = new UberDictionary.Models.Vote({
      defin_id: id
    });
    vote.set({ upvote: false });
    vote.save({}, {
      error: function (vote, res) {
        console.log(res);
      }
    });
  }
});
