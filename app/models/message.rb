class Message < ApplicationRecord
  belongs_to :user
  belongs_to :incident
  belongs_to :parent, class_name: "Message", foreign_key: :parent_id, optional: true

  has_many :children, class_name: "Message", foreign_key: :parent_id, dependent: :destroy
end
