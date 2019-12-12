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

### Basic auth

This application has basic authentication. The default username is `admin` and the default password is `password`.
