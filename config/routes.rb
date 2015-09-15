Rails.application.routes.draw do

  resources :users
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json} do
   resources :defins
  end

  root 'static_pages#root'
end
