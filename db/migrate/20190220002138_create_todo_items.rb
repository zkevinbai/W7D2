class CreateTodoItems < ActiveRecord::Migration[5.2]
  def change
    create_table :todo_items do |t|
      t.string :title, required: true
      t.string :body, required: true
      t.boolean :done, required: true
      t.timestamps
    end
  end
end
