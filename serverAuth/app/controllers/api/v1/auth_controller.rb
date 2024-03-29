# frozen_string_literal: true

# api for login
class Api::V1::AuthController < ApplicationController
  skip_before_login :require_login, only: [:login]
  def login
    user = User.find_by(username: login_params[:username])
     if user && user.authenticate(login_params[:password])
       payload = { user_id: user.id }
       token  = encode_token(payload)
       render json: { user: UserSerializer.new(user), jwt: token }, status: :accepted
     else
       render json: { failure: 'invalid username or password' }, status: :unauthorized
     end
  end

  def auto_login
    render json: { user: UserSerializer.new(current_user) }, status: :accepted
  end

  private

  def login_params
    params.require(:user).permit(:username, :password)
  end
end
