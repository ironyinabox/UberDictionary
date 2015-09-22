Rails.application.routes.draw do


  resources :users, only: [:new, :create]
  resource :session, only: [:create, :destroy]


  namespace :api, defaults: { format: :json} do
    get "/search", to: "static_pages#search"
    resources :votes, only: [:create, :update, :index]
    resources :defins
    resources :users, only: [:show, :edit, :index, :create]
  end

  root 'static_pages#root'
end
