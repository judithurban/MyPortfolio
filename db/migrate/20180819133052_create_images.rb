class CreateImages < ActiveRecord::Migration[5.2]
  def change
    create_table :images do |t|
      t.string :title
      t.string :url
      t.integer :project_id
      t.string :css_class 

      t.timestamps
    end
    add_index :images, :project_id
  end
end
