Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#root'

  namespace :api, default: { format: :json } do
    resources :users, only:[:index, :create, :show]
    resource :session, only:[:create, :destroy]
    resources :servers, only: [:create, :index, :destroy, :update, :show]
    post 'servers/join', to: 'servers#join'
    delete 'servers', to: 'servers#leave'
    resources :text_channels, only: [:create, :index, :destroy, :update, :show]
    resources :messages, only: [:create, :index]
    resources :direct_messages, only: [:create, :index, :show]
    resources :friends, only: [:index, :create, :destroy, :show]
  end

  mount ActionCable.server => '/cable'
end
