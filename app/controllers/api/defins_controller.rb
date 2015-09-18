module Api
  class DefinsController < ApiController

    def index
      @defins = Defin.all
      render :index
    end

    def show
      @defin = Defin.find(params[:id])
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
      @defin = Defin.find(params[:id])
      @defin.destroy
      render json: {}
    end

    private
    def defin_params
      params.require(:defin).permit(:word, :defin, :ex_sentence, :img_url)
    end
  end
end
