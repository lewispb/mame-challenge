class TweetTimeJob < ApplicationJob
  queue_as :default

  def perform(entry)
    TweetTimeService.call(twitter_handle: entry.twitter_handle, timing: entry.timing_string)
  end
end
