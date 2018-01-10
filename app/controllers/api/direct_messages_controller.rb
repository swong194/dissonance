class Api::DirectMessagesController < ApplicationController
  def index
    @servers = current_user.servers.where(direct_message: true)
  end

  def create
    if current_user.id.to_s == params[:id]
      render json: ['cannot message yourself'], status: 422
    elsif current_user.servers.where(direct_message: true).any? { |server| server.users.ids.include?(params[:id].to_i) }
      @server = Server.where(direct_message: true).find { |server| server.users.ids.include?(params[:id].to_i) && server.users.ids.include?(current_user.id)}
      render 'api/direct_messages/show.json.jbuilder'
    else
      @server = Server.new(name: "direct_message #{current_user.username} #{params[:id]}", owner_id: current_user.id, direct_message: true)
      if @server.save
        @text_channel = TextChannel.create(name:'general' , server_id: @server.id)
        join_server(current_user.id, @server)
        join_server(params[:id], @server)
        render 'api/direct_messages/show.json.jbuilder'
      else
        render json: ['cannot direct message'], status: 422
      end
    end
  end

  def show
    @server = Server.find(params[:id])
    render :show
  end

  private

  def join_server(user_id, server)
    ServerMembership.create!(user_id: user_id, server_id: server.id)
  end

end
