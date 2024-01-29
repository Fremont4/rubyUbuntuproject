# frozen_string_literal: true

Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create, :index] # handle signup query users
      post '/login', to: 'auth#login' # handle login for existing users
      get '/auto_login', to: 'auth#auto_login' # handles login for revisting users
    end
  end
end
