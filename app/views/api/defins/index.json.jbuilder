json.array!(@defins) do |defin|
  json.partial!('defin', defin: defin)
end
