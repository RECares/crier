class Incident < ApplicationRecord
  belongs_to :user

  has_many :messages, dependent: :destroy

  validates :name, presence: true, uniqueness: { case_sensitive: false }
  validates :location, presence: true
  validates :latitude, presence: true
  validates :longitude, presence: true

  def coordinates
  "#{self.latitude.to_s("F")}, #{self.longitude.to_s("F")}"
  end

  def threads
  self.messages.where(parent: nil)
  end
end
