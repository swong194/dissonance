class Api::FriendsController < ApplicationController

  def index
    @friends = current_user.friends.ids
    render :index
  end

  def create
    @user = User.find_by(username: params[:name])
    if !@user
      render json: ['This user does not exist'], status: 422
    elsif(current_user.id == @user.id)
      render json: ['Cannot add yourself'], status: 422
    elsif(current_user.friends.ids.any? {|friend_id| friend_id == @user.id })
      render json: ['Already a friend'], status: 422
    else
      @friend = Friend.new(user_one: current_user.id, user_two: @user.id)
      @friend2 = Friend.new(user_one: @user.id, user_two: current_user.id)
      if @friend.save && @friend2.save
        render :show
      else
        render json: ['Could not add friend'], status: 422
      end
    end
  end

  def show
    @friend = User.find(params[:id])
    if @friend
      render :show
    else
      render json: ['Cannot find friend'], status: 422
    end
  end

  def destroy
    @friend = Friend.find_by(user_one: current_user.id, user_two: params[:id])
    @friend2 = Friend.find_by(user_one: params[:id], user_two: current_user.id)

    if @friend && @friend2
      @friend.destroy
      @friend2.destroy
      render :show
    else
      render json: ['Cannot end friendship']
    end
  end

end
