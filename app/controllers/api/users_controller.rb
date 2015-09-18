module Api
  class UsersController < ApiController

    def index
      @users = User.all
      render json: @users
    end

    def show
      @user = User.find(params[:id])
    end

    def new
      @user = User.new
    end

    def create
      @user = User.new(user_params)
        if @user.save
          login(@user)
          render json: @user
        else
          render json: @user.errors.full_messages, status: :unprocessable_entity
        end
    end

    private
    
      def user_params
        params.require(:user).permit(:user_name, :password, :user_email)
      end
  end
end
