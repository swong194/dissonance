class TextChannel < ApplicationRecord
  validates :name, :server_id, presence: true
  validates :name, length: { in: 3..20 }, uniqueness: true
end
