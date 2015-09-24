UberDictionary.Views.DefinsShow = Backbone.View.extend({

  template: JST['defins/show'],
  tagName: 'li',
  className: 'defin group',
  events: {
    'click .upvote': 'upvoteDefin',
    'click .downvote': 'downvoteDefin',
    'click .upload-img-button': 'uploadImgModal'
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
    this.$el.html(content);
    return this;
  },

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
      },
      error: function () {
        alert("Must be signed in to vote!");
      }
    });
  },

  uploadImgModal: function (e) {
    var view = new UberDictionary.Views.ImgUpload({
      model: this.model
    });
    $('body').append(view.render().$el);
  }
});
