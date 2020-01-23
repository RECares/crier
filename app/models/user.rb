class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, and :omniauthable
  devise :database_authenticatable, :recoverable, :registerable, :rememberable,
    :trackable, :validatable

  has_many :incidents, dependent: :destroy
  has_many :messages, dependent: :destroy

  def name
    "#{self.first_name} #{self.last_name}"
  end
end
