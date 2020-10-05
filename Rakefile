#
# Some simple building script, to make a single-file compressed build
#
# Copyright (C) 2020 By Masuk Mia-2020
#

require 'rake'
require 'fileutils'
require File.dirname(__FILE__)+'/lib/frontcompiler/init.rb'

BUILD_FILE = 'build/t-ninja.js'

desc "Builds the source code in a single javascript file"
task :build do

  source = File.open('src/init.js').read().match(/\[.+?\]/m).to_s.scan(/('|")(.*?)(\1)/).map do |match|
    File.open("src/#{match[1]}.js").read()
  end.join("\n\n")

  source << FrontCompiler.new.inline_css(File.open('src/style.css').read)

  FileUtils.rm_rf 'build'
  FileUtils.mkdir 'build'

  File.open(BUILD_FILE, 'w').write(
    File.open('src/header.js').read +
    FrontCompiler.new.compact_js(source).create_self_build
  )
end