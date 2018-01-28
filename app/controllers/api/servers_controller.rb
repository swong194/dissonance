class Api::ServersController < ApplicationController
  before_action :ensure_login

  def index
    @servers = current_user.servers.where(direct_message: false)
    render :index
  end

  def create
    @server = Server.new(name: params[:name], owner_id: current_user.id)
    if @server.save
      @text_channel = TextChannel.create(name:'general', server_id: @server.id)
      join_created_server(current_user, @server)
      render :show
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def destroy
    @server = Server.find(params[:id])
    if @server.owner_id == current_user.id
      @server.destroy
      render :show
    else
      render json: ['You do not own this server'], status: 422
    end
  end

  def join
    @server = Server.find_by(name: params[:name])
    if !current_user.servers.include?(@server) && @server && @server.direct_message == false
      join_server(current_user, @server)
      render :show
    elsif !@server
      render json: ['Server not found'], status: 404
    else
      render json: ['You are already part of this server'], status: 404
    end
  end

  def update
    @server = Server.find(params[:id])
    if @server.owner_id == current_user.id && @server.update(name: params[:name])
      render :show
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def show
    @server = Server.find(params[:id])
    if @server
      render :show
    else
      render json: ['Could not find server'], status: 404
    end
  end

  def leave
    @server_membership = ServerMembership.find_by(user_id: current_user.id, server_id: params[:id])
    @server_membership.destroy
  end

  private
  def server_params
    params.require(:server).permit(:name)
  end

  def join_server(user, server)
    ServerMembership.create(user_id: user.id, server_id: server.id)
  end

  def join_created_server(user, server)
    if(user.id == server.owner.id)
      ServerMembership.create(user_id: user.id, server_id: server.id)
    end
  end
end
