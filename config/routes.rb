Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  namespace :api do
    resources:todo_items, except:[:new, :edit], defaults: {format: :json}
  end

  root to: 'staticpages#root'
end
