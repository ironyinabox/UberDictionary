module Api
  class VotesController < ApiController

    def index
      @votes = Vote.all
    end

    def create
      @vote = current_user.votes.find_or_initialize_by(defin_id: params[:vote][:defin_id])
      if @vote.update(vote_params)
        render :show
      else
        render json: @vote.errors, status: :unprocessable_entity
      end
    end

    private
      def vote_params
        params.require(:vote).permit(:upvote)
      end
  end
end
