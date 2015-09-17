# up_count = 0
# down_count = 0
#
# @votes.each do |vote|
#   up_count += 1 if vote.upvote
#   down_count += 1 if !vote.upvote
# end
# count_hash = {up_count: up_count, down_count: down_count}
#
# json.count do
#   json.extract! count_hash, :up_count, :down_count
# end
