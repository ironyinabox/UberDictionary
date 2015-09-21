class SessionsController < ApplicationController

  def create
    @user = User.find_by_creds(email_input, pass_input)
    login(@user) if @user
    render json: @user
  end

  def destroy
    logout
      render json: {}
  end

  private
  def email_input
    params[:user][:user_email]
  end

  def pass_input
    params[:user][:password]
  end
end
