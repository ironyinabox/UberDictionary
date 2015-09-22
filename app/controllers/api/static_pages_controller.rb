module Api
  class StaticPagesController < ApiController
    def search
      @search_results = Defin.search_full_text(params[:query])
      render :search
    end
  end
end
