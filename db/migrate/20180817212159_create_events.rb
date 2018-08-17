class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :name
      t.boolean :is_current

      t.timestamps
    end
  end
end
