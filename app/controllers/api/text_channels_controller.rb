class Api::TextChannelsController < ApplicationController
  def index
    @server = Server.find(params[:serverId])
    @text_channels = @server.text_channels
    render :index
  end

  def show
    @text_channel = TextChannel.find(params[:id])
    render :show
  end

  def destroy
    @text_channel = TextChannel.find(params[:id])
    if @text_channel && @text_channel.owner.id === current_user.id
      @text_channel.destroy
      render :show
    else
      render json: ['Cannot destroy Text Channel'], status: 422
    end
  end

  def update
    @text_channel = TextChannel.find(params[:id])
    if @text_channel && @text_channel.update(name: params[:name])
      render :show
    else
      render json: @text_channel.errors.full_messages, status: 422
    end
  end

  def create
    @text_channel = TextChannel.new(text_channel_params)
    if @text_channel.save
      render :show
    else
      render json: @text_channel.errors.full_messages, status: 422
    end
  end

  private

  def text_channel_params
    params.require(:text_channel).permit(:name, :server_id)
  end

end
