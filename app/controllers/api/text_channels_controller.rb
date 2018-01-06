class Api::TextChannelsController < ApplicationController
  def index
    @server = Server.find(params[:server_id])
    @text_channels = @server.text_channels
    render :index
  end

  def show
    @text_channel = TextChannel.find(params[:id])
    render :show
  end

  def destroy
    @text_channel = TextChannel.find(params[:id])
    if @text_channel && @text_channel.owner_id === current_user.id
      @text_channel.destroy
      render :show
    else
      render json: ['Cannot destroy Text Channel'], status: 422
    end
  end

  def update
    @text_channel = TextChannel.find(params[:id])
    if @text_channel && @text_channel.owner_id === current_user.id && @text_channel.update(params[:name])
      render :show
    else
      render json: ["Could not update Text Channel"], status: 422
    end
  end

  def create
    @text_channel = TextChannel.new(name: params[:name] server_id: params[:server_id])
    if @text_channel.save
      render :show
    else
      render json: @text_channel.errors.full_messages, status: 422
    end
  end

end
