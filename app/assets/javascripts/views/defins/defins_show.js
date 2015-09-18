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
    this.vote.fetch();
    this.listenTo(this.model, 'sync destroy', this.render);
    this.listenTo(this.vote, 'sync destroy', this.render);
  },

  render: function () {
    var content = this.template({
      defin: this.model,
      vote: this.vote
    });
    // this.setButton();
    this.$el.html(content);
    return this;
  },

  // setButton: function () {
  //   debugger
  //   if (this.vote.get('upvote') === undefined) {
  //     return;
  //   } else if (this.vote.get('upvote')) {
  //     this.$el.find('.upvote').addClass('voted');
  //     this.$el.find('.downvote').removeClass('voted');
  //   } else {
  //     this.$el.find('.downvote').addClass('voted');
  //     this.$el.find('.upvote').removeClass('voted');
  //   }
  // },

  upvoteDefin: function (e) {
    e.preventDefault;
    this.makeVote(true);
  },

  downvoteDefin: function (e) {
    e.preventDefault;
    this.makeVote(false);
  },

  makeVote: function (value) {
    var that = this;
    this.vote.set({ upvote: value });
    this.vote.save({}, {
      success: function () {
        that.model.fetch();
      }
    });
  }
});
