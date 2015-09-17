class SessionsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.find_by_creds(email_input, pass_input)
    if @user
      login(@user)
      redirect_to root_url
    else
      redirect_to new_session_url
    end
  end

  def destroy
    logout
    redirect_to root_url
  end

  private
  def email_input
    params[:user][:user_email]
  end

  def pass_input
    params[:user][:password]
  end
end
