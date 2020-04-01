 # Prints: 'steal pound cake'

# reverse_words(message)

def reverse_string(array)
  start = 0
  last = array.length - 1

  while start <= last 
    temp = array[start]
    array[start], array[last] = array[last], array[start]
    last -= 1
    start += 1
  end

  return array
end


def reverse_words(array)
  reverse_array = reverse_string(array)
  last_space = 0

  reverse_array.each_with_index do |char, i|
    if i === reverse_array.length - 1
      # p reverse_array[last_space..i]
      reverse_array[last_space..i] = reverse_string(reverse_array[last_space..i])
    elsif char == " "
      # p reverse_array[last_space...i]
      reverse_array[last_space...i] = reverse_string(reverse_array[last_space...i])
      last_space = i + 1
    end
  end

  return reverse_array  
end


# p reverse_words(["e", "l", "p", "p", "a"])


# p reverse_word(["e", "l", "p", "p", "a"]).join("")
message = [ 'c', 'a', 'k', 'e', ' ',
          'p', 'o', 'u', 'n', 'd', ' ',
          's', 't', 'e', 'a', 'l' ]
p reverse_words(message)