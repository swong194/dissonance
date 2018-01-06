require 'test_helper'

class Api::TextChannelsControllerTest < ActionDispatch::IntegrationTest
  test "should get :index" do
    get api_text_channels_:index_url
    assert_response :success
  end

  test "should get :show" do
    get api_text_channels_:show_url
    assert_response :success
  end

  test "should get :destroy" do
    get api_text_channels_:destroy_url
    assert_response :success
  end

  test "should get :update" do
    get api_text_channels_:update_url
    assert_response :success
  end

  test "should get :create" do
    get api_text_channels_:create_url
    assert_response :success
  end

end
