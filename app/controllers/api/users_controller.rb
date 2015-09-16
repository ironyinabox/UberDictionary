module Api
  class UsersController < ApiController
    before_action :set_user, only: [:show, :edit, :update, :destroy]

    def index
      @users = User.all
      render json: @users
    end

    def show
    end

    def new
      @user = User.new
    end

    def edit
    end

    def create
      @user = User.new(user_params)
        if @user.save
          login(@user)
          redirect_to root_url
        else
          redirect_to new_user_url
        end
    end

    def update
      if @user.update(user_params)
        render :show
      else
        render :edit
      end
    end

    def destroy
      @user.destroy
      render :index
    end

    private
      def set_user
        @user = User.find(params[:id])
      end

      def user_params
        params.require(:user).permit(:user_name, :password, :user_email)
      end
  end
end
