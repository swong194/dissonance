require 'test_helper'

class Api::MessageControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_message_create_url
    assert_response :success
  end

end
