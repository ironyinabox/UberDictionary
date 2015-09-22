json.extract! @user, :id, :user_name, :password_digest,
  :user_email, :created_at, :updated_at

json.defins do
  json.array!(@user.defins) do |defin|
    json.partial!('api/defins/defin', defin: defin)
  end
end
