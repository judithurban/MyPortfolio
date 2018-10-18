Rails.application.routes.draw do
  get 'privacy/index'
  get 'home/index'
  get 'projects', to: 'projects#index'
  get 'projects/:project_url', to: 'projects#index'
  get 'privacy', to: 'privacy#index'

  post 'handle_contact_request', to: 'home#handle_contact_request'

  root 'home#index'

  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
