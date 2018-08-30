# Mame Challenge

[![CircleCI](https://circleci.com/gh/lewispb/mame-challenge.svg?style=svg)](https://circleci.com/gh/lewispb/mame-challenge)

This Ruby on Rails / React app collects competition entries for the Cookpad Mame Challenge, held at Brighton Ruby 2018 and EuRuKo 2018.

## Setup

### Install

- brew install redis
- rake db:setup
  - This should run migrate and seed

### Basic auth

This application has basic authentication. The default username is `admin` and the default password is `password`.
