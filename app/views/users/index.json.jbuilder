json.array!(@users) do |user|
  json.extract! user, :id, :user_name, :password_digest, :user_email
  json.url user_url(user, format: :json)
end
