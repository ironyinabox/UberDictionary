module Api
  class VotesController < ApiController
    before_action :set_vote, only: [:update]

    def index
      @votes = Vote.all
    end
    
    def create
      @vote = current_user.votes.new(vote_params)
      if @vote.save
        render :show
      else
        render json: @vote.errors, status: :unprocessable_entity
      end

    end

    def update
      @vote = Vote.find(params[:id])
      if @vote.update(vote_params)
        render :show
      else
        render json: @vote.errors, status: :unprocessable_entity
      end
    end

    private
      def vote_params
        params.require(:vote).permit(:upvote, :user_id, :defin_id)
      end
  end
end
