class Api::MessageController < ApplicationController
  def index
    @text_channel = TextChannel.find(params[:id])
    @messages = @text_channel.messages
  end

  def create
    author_id = current_user.id
    @message = Message.new(author_id: author_id,
      body: params[:body], text_channel_id: params[:text_channel_id])
    if @message.save
      render :show
    else
      render json: @message.errors.full_messages, status: 422
    end

  end

  def message_params
    params.require(:message).permit(:body)
  end
end
