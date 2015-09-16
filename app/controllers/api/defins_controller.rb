module Api
  class DefinsController < ApiController
    before_action :set_defin, only: [:show, :edit, :update, :destroy]
    # before_action :ensure_logged_in, only: [:new, :create]

    def index
      @defins = Defin.all
      render :index
    end

    def show
      render :show
    end

    def new
      @defin = Defin.new
    end

    def create
      @defin = current_user.defins.new(defin_params)
      if @defin.save
        render json: @defin
      else
        render json: @defin.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @defin.destroy
      render json: {}
    end

    private
    def set_defin
      @defin = Defin.find(params[:id])
    end

    def defin_params
      params.require(:defin).permit(:word, :defin, :ex_sentence, :img_url)
    end
  end
end
