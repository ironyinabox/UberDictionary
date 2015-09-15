json.array!(@defs) do |def|
  json.extract! def, :id, :word, :def, :ex_sentence, :author_id, :img_url
  json.url def_url(def, format: :json)
end
