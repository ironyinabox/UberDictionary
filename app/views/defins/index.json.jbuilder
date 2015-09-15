json.array!(@defins) do |defin|
  json.extract! defin, :id, :word, :defin, :ex_sentence, :author_id, :img_url
end
