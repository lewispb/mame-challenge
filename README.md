# Mame Challenge

[![CircleCI](https://circleci.com/gh/lewispb/mame-challenge.svg?style=svg)](https://circleci.com/gh/lewispb/mame-challenge)

This Ruby on Rails / React app collects competition entries for the Cookpad Mame Challenge, held at Brighton Ruby 2018 and EuRuKo 2018.

## Setup

### Install

This project uses Postgres and Redis as dependencies, if you don't want to install it on your machine you can run `docker-compose up db cache`.
This command will start Redis and Postgres container and forwards the ports to localhost.

To install dependencies and setup the database locally, run:
- `cp .env.example .env`
- `bin/setup`

To start the rails server, Sidekiq worker and webpack dev server run:
- `bundle exec foreman start -f Procfile.dev`

#### Full Docker setup
You can also run the Rails server in a container. However, there are some parts which still need manual configuration

* Set your local user id in the ``docker-compose.override.yml`` file. This is needed because we mount the sources into the container
and the user in the container can have a different user id which would cause permission problems if you change the files while
running the container. In most linux system you can get the user id with ``echo $UID``, replace ``CONTAINER_USERID`` in ``docker-compose.override.yml``
with this number.

* When starting the first time the containers, it is necessary to build the frontend container with ``docker-compose build``

* To setup the database, start the containers with ``docker-compose up``, enter frontend container with ``docker-compose exec frontend /bin/bash``
and execute ``rails db:setup``.

* To start the rails application, run ``docker-compose up``

### Basic auth

This application has basic authentication. The default username is `admin` and the default password is `password`.
