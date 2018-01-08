Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#root'
  namespace :api, default: { format: :json } do
    resources :users, only:[:create]
    resource :session, only:[:create, :destroy]
    resources :servers, only: [:create, :index, :destroy, :update, :show]
    post 'servers/join', to: 'servers#join'
    get 'servers/:id/users', to: 'servers#users'
    resources :text_channels, only: [:create, :index, :destroy, :update, :show]
    resources :messages, only: [:create, :index]
  end

  mount ActionCable.server => '/cable'
end
