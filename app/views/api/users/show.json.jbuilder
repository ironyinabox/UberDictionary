json.extract! @user, :id, :user_name

json.defins do
  json.array!(@user.defins) do |defin|
    json.partial!('api/defins/defin', defin: defin)
  end
end
