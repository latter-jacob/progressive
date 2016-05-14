Rails.application.routes.draw do
  root "homes#index"

  resources :home, only: [:index] do
  end
  get '/about', to: 'homes#about'

  get '/contactUs', to: 'homes#contactUs'

  get '/resources', to: 'homes#resources'

  get '/services', to: 'homes#services'

  get '/incentives', to: 'homes#incentives'

end
