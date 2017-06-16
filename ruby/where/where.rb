class Hash
  def include?(other_hash)
    self.merge(other_hash) == self
  end
end

class Array
  def a_to_h
    reduce Hash.new, :merge
  end

  def where(*args)
    args = args.a_to_h
    select do |hash| 
      hash.include?(args)
    end 
  end
end
