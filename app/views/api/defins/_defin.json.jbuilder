json.extract!(
  defin,
  :id, :word, :defin, :ex_sentence, :img_url, :author_id, :created_at, :updated_at
)

json.author do
  json.extract! defin.author, :user_name, :id
end
