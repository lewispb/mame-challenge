require "rails_helper"

RSpec.describe TweetTimeService do
  describe ".call" do
    it "posts a tweet" do
      tweet = "@lewispb Congratulations on your time of 1.234s! 🎉 #mamechallenge"
      expect_any_instance_of(Twitter::REST::Client).to receive(:update).with(tweet)

      described_class.call(twitter_handle: "lewispb", timing: "1.234s")
    end
  end
end
