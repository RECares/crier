Rails.application.routes.draw do
  resources :messages
  resources :incidents
  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions: 'users/sessions'
  }
  devise_scope :user do
    authenticated :user do
      root 'incidents#index', as: :authenticated_user
    end
    unauthenticated do
      root 'users/sessions#new', as: :unauthenticated
    end
  end
end
