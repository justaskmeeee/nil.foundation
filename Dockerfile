FROM jekyll/jekyll:3.8.5

COPY Gemfile Gemfile.lock nilfoundation-website.gemspec /

RUN bundle install --no-cache
