class Api::FriendsController < ApplicationController

  def index
    @friends = current_user.friends.ids
    render :index
  end

  def create
    if(current_user.id == params[:id].to_i)
      render json: ['Cannot add yourself']
    elsif(current_user.friends.any? {|friend| friend.id == params[:id].to_i })
      render json: ['Already a friend']
    else
      @friend = Friend.new(user_one: current_user.id, user_two: params[:id])
      @friend2 = Friend.new(user_one: params[:id], user_two: params[:id])
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
