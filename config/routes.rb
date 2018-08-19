Rails.application.routes.draw do
  get 'home/index'
  get 'projects', to: 'projects#index'
  get 'projects/:project_url', to: 'projects#index'

  root 'home#index'

  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
