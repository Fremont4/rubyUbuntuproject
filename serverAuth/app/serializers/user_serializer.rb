# frozen_string_literal

# hello
class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :bio, :avatar
end
