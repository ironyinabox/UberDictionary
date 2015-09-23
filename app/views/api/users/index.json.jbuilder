json.array!(@users) do |user|
  json.extract! user, :id, :user_name, :user_email
end
