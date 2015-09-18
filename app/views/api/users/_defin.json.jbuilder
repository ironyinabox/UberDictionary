json.extract!(
  defin,
  :id, :word, :defin, :ex_sentence, :img_url, :author_id, :created_at, :updated_at
)

json.author do
  json.extract! defin.author, :user_name, :id
end

json.votes do
  up_count, down_count = 0, 0
  defin.votes.each do |vote|
    up_count += 1 if vote.upvote
    down_count += 1 if !vote.upvote
  end
  count = {up_count: up_count, down_count: down_count}
  json.extract! count, :up_count, :down_count
end
