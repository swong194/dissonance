class Api::MessagesController < ApplicationController
  def index
    @messages = Message.all
    render :index
  end

  def create
    author_id = current_user.id
    @message = Message.new(author_id: author_id,
      body: message_params[:body], text_channel_id: message_params[:text_channel_id])
    if @message.save
      render :show
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  private

  def message_params
    params.require(:message).permit(:body, :text_channel_id)
  end

end
