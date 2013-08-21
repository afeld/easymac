require 'digest'
require 'time'

now = Time.now.to_i
sig = "secure\n#{now}"
hash = Digest::MD5::hexdigest(sig)
puts "http://localhost:3000/?auth_hash=#{hash}&time=#{now}"
