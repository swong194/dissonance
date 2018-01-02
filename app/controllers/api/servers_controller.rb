class ServersController < ApplicationController
  before_action :ensure_login
  def index
    @servers = current_user.servers
    render :index
  end

  def create
    @server = Server.new(server_params[:server][:name], owner_id: current_user.id)
    if @server.save
      render :show
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def delete
    @server = Server.find(params[:id])
    if @server.destroy
      render :show
    else
      render json: ['Could not remove server'], status: 400
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
end
