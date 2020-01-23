class CreateMessages < ActiveRecord::Migration[6.0]
  def change
    create_table :messages do |table|
      table.text :content, null: false, default: ""
      table.references :user, index: true, foreign_key: { to_table: :users }
      table.references :incident, index: true, foreign_key: { to_table: :incidents }
      table.references :parent, foreign_key: { to_table: :messages }
      table.timestamps null: false
    end
  end
end
