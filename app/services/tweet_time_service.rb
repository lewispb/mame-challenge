class TweetTimeService < ApplicationService
  def initialize(twitter_handle:, timing:)
    @twitter_handle = twitter_handle
    @timing = timing
  end

  def call
    twitter_client.update(tweet)
  end

  private

    attr_reader :twitter_handle, :timing

    def twitter_client
      @_twitter_client ||= Twitter::REST::Client.new do |config|
        config.consumer_key        = ENV.fetch("TWITTER_CONSUMER_KEY")
        config.consumer_secret     = ENV.fetch("TWITTER_CONSUMER_SECRET")
        config.access_token        = ENV.fetch("TWITTER_ACCESS_TOKEN")
        config.access_token_secret = ENV.fetch("TWITTER_ACCESS_SECRET")
      end
    end

    def tweet
      "@#{twitter_handle} Congratulations on your time of #{timing}! 🎉 #mamechallenge"
    end
end
