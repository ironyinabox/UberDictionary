require 'test_helper'

class DefsControllerTest < ActionController::TestCase
  setup do
    @def = defs(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:defs)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create def" do
    assert_difference('Def.count') do
      post :create, def: { author_id: @def.author_id, def: @def.def, ex_sentence: @def.ex_sentence, img_url: @def.img_url, word: @def.word }
    end

    assert_redirected_to def_path(assigns(:def))
  end

  test "should show def" do
    get :show, id: @def
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @def
    assert_response :success
  end

  test "should update def" do
    patch :update, id: @def, def: { author_id: @def.author_id, def: @def.def, ex_sentence: @def.ex_sentence, img_url: @def.img_url, word: @def.word }
    assert_redirected_to def_path(assigns(:def))
  end

  test "should destroy def" do
    assert_difference('Def.count', -1) do
      delete :destroy, id: @def
    end

    assert_redirected_to defs_path
  end
end
