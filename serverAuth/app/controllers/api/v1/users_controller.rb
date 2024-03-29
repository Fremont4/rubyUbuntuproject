# frozen_string_literal: true

# api for registration
class Api::V1::UsersController < ApplicationController
  skip_before_action :require_login

  def create
    user = User.create(user_params)
        if user.valid?
          payload = { user_id: user.id }
          token = encode_token(payload)
          render json: { user: UserSerializer.new(user), jwt: token }, status: :created
        else
          render json: { errors: user.errors.full_messages }, status: :not_acceptable
        end
  end

    private

  def user_params
    params.require(:user).permit(:username, :password, :bio, :avatar)
  end
end
