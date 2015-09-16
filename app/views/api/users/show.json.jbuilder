json.extract! @user, :id, :user_name, :password_digest,
:user_email, :created_at, :updated_at

json.defins do
  json.array!(@user.defins) do |defin|
    json.extract! defin, :id, :word, :defin, :ex_sentence, :author_id, :img_url, :created_at, :updated_at
    json.author do
      json.extract! defin.author, :user_name, :id
    end
  end
end
