FROM ruby:2.4.4

ARG CONTAINER_USERID

# Configure our user
RUN usermod -u $CONTAINER_USERID www-data

# Install dependencies
RUN curl -sL https://deb.nodesource.com/setup_11.x | bash
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get install yarn nodejs

# We copy the Gemfiles into this intermediate build stage so it's checksum
# changes and all the subsequent stages (a.k.a. the bundle install call below)
# have to be rebuild. Otherwise, after the first build of this image,
# docker would use it's cache for this and the following stages.
ADD Gemfile /var/www/mame-challenge/Gemfile
ADD Gemfile.lock /var/www/mame-challenge/Gemfile.lock
ADD package.json /var/www/mame-challenge/package.json
ADD yarn.lock /var/www/mame-challenge/yarn.lock
RUN chown -R www-data /var/www/

# Now do the rest as the user with the same ID as the user who
# builds this container
USER www-data
WORKDIR /var/www/mame-challenge

# Install foreman
RUN gem install foreman
# Refresh our bundle
RUN export NOKOGIRI_USE_SYSTEM_LIBRARIES=1; bundle install --jobs=3 --retry=3 || bundle install --jobs=3 --retry=3
RUN yarn install

# Run our command
CMD ["foreman", "start", "-f", "Procfile.dev"]
