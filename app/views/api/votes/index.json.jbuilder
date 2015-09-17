json.array!(@votes) do |vote|
  json.extract! vote, :id, :upvote, :user_id, :defin_id
  json.url vote_url(vote, format: :json)
end
