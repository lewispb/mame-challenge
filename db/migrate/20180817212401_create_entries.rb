class CreateEntries < ActiveRecord::Migration[5.2]
  def change
    create_table :entries do |t|
      t.string :twitter_handle
      t.string :name
      t.references :event, foreign_key: true
      t.bigint :timing

      t.timestamps
    end
  end
end
