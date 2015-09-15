class DefsController < ApplicationController
  before_action :set_def, only: [:show, :edit, :update, :destroy]
  before_action :ensure_logged_in, only: [:edit, :update, :destroy]

  # GET /defs
  # GET /defs.json
  def index
    @defs = Def.all
  end

  # GET /defs/1
  # GET /defs/1.json
  def show
  end

  # GET /defs/new
  def new
    @def = Def.new
  end

  # GET /defs/1/edit
  def edit
  end

  # POST /defs
  # POST /defs.json
  def create
    @def = Def.new(def_params)
    if @def.save
      render json: @def
    else
      redirect_to new_def_url
    end
  end

  # PATCH/PUT /defs/1
  # PATCH/PUT /defs/1.json
  def update
    if @def.update(def_params)
      render json: @def
    else
      redirect_to edit_def_url
    end
  end

  # DELETE /defs/1
  # DELETE /defs/1.json
  def destroy
    @def.destroy
    render text: "Target destroyed"
  end

  private
    def set_def
      @def = Def.find(params[:id])
    end

    def def_params
      params.require(:def).permit(:word, :def, :ex_sentence, :author_id, :img_url)
    end
end
