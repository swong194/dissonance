class Api::ServersController < ApplicationController
  before_action :ensure_login
  
  def index
    @servers = current_user.servers
    render :index
  end

  def create
    debugger
    @server = Server.new(name: params[:server][:name], owner_id: current_user.id)
    if @server.save
      join_server(current_user, @server)
      render :show
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def destroy
    @server = Server.find(params[:id])
    if @server.destroy
      render :show
    else
      render json: ['Could not remove server'], status: 400
    end
  end

  def join
    @server = Server.find_by(name: params[:name])
    debugger
    if !(current_user.servers.include?(@server) || @server)
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
    if @server.update(server_params)
      render :show
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  private
  def server_params
    params.require(:server).permit(:name)
  end

  def join_server(user, server)
    ServerMembership.create(user_id: user.id, server_id: server.id)
  end
end
