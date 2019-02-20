# == Schema Information
#
# Table name: todo_items
#
#  id         :bigint(8)        not null, primary key
#  title      :string
#  body       :string
#  done       :boolean
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class TodoItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
