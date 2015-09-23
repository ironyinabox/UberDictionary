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

  def omniauth
    @user = User.find_or_create_by_auth_hash(auth_hash)
    login(@user)
    redirect_to root_url
  end

  private

  def email_input
    params[:user][:user_email]
  end

  def pass_input
    params[:user][:password]
  end

  def auth_hash
    request.env['omniauth.auth']
  end
end
