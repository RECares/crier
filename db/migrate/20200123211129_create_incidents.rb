class CreateIncidents < ActiveRecord::Migration[6.0]
  def change
    create_table :incidents do |table|
      table.string :name, null: false, default: ""
      table.string :location, null: false, default: ""
      table.decimal :latitude, null: false, default: 0.0
      table.decimal :longitude, null: false, default: 0.0
      table.references :user, index: true, foreign_key: { to_table: :users }
      table.timestamps null: false
    end
  end
end
