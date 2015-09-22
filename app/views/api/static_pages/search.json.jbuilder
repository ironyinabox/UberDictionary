json.array! @search_results do |result|
  json.partial! 'api/defins/defin', defin: result
end
