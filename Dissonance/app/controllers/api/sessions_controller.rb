class Api::SessionsController < ApplicationController
  def create
    username = params[:user][:username]
    password = params[:user][:password]
    @user = User.find_by_credentials(username, password)
    if @user
      log_in(@user)
      render 'api/users/show'
    else
      render json: ['Invalid credentials'], status: 422
    end
  end

  def destroy
    @user = current_user
    current_user.reset_session_token!
    session[:session_token] = nil
    render 'api/users/show'
  end
end
