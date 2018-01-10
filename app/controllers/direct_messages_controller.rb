class Api::DirectMessagesController < ApplicationController
  def index
    debugger
    @servers = current_user.servers.where(direct_message: true)
    debugger
  end

  def create
    if current_user.servers.where(direct_message: true).any? { |server| server.users.ids.include?(params[:id]) }
      @server = Server.where(direct_message: true).select { |server| server.users.ids.include?(params[:id])}
      render :show
    else
      @server = Server.new(name: "direct_message #{current_user.username} #{params[:id]}", owner_id: current_user.id, direct_message: true)
      if @server.save
        @text_channel = TextChannel.create(name:'general' , server_id: @server.id)
        join_created_server(current_user, @server)
        join_server(User.find(params[:id]), @server)
        render :show
      end
    end
  end

  def show
    @server = Server.find(params[:id])
    render :show
  end

end
