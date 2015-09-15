module Api
  class DefinsController < ApiController
    before_action :set_defin, only: [:show, :edit, :update, :destroy]
    before_action :ensure_logged_in, only: [:new, :create]

    def index
      @defins = Defin.all
      render json: @defins
    end

    def show
      render json: @defin
    end

    def new
      @defin = Defin.new
    end

    def create
      @defin = Defin.new(defin_params)
      if @defin.save
        render json: @defin
      else
        redirect_to new_defin_url
      end
    end

    def update
      if @defin.update(defin_params)
        render json: @defin
      else
        redirect_to edit_defin_url
      end
    end

    private
    def set_defin
      @defin = Defin.find(params[:id])
    end

    def defin_params
      params.require(:defin).permit(:word, :defin, :ex_sentence, :author_id, :img_url)
    end
  end
end
