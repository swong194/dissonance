class Friend < ApplicationRecord
  validates :user_one, :user_two, presence: true
  validates :user_one, uniqueness: { scope: :user_two, message: 'Already friends' }

  belongs_to :first_user,
  class_name: 'User',
  foreign_key: :user_one,
  primary_key: :id

  belongs_to :second_user,
  class_name: 'User',
  foreign_key: :user_two,
  primary_key: :id
end
