require "rails_helper"

RSpec.describe TweetTimeService do
  describe ".call" do
    it "posts a tweet" do
      travel_to Date.parse("2018/08/26")
      tweet = "@lewispb Congratulations on your time of 1.234s! 🎉 #mamechallenge"
      expect_any_instance_of(Twitter::REST::Client).to receive(:update).with(tweet)

      described_class.call(twitter_handle: "lewispb", timing: "1.234s")
    end

    it "has a special hashtag coded for 24th August" do
      travel_to Date.parse("2018/08/24")
      tweet = "@lewispb Congratulations on your time of 1.234s! 🎉 #mamechallenge #euruko2018"
      expect_any_instance_of(Twitter::REST::Client).to receive(:update).with(tweet)

      described_class.call(twitter_handle: "lewispb", timing: "1.234s")
    end

    it "has a special hashtag coded for 25th August" do
      travel_to Date.parse("2018/08/25")
      tweet = "@lewispb Congratulations on your time of 1.234s! 🎉 #mamechallenge #euruko2018"
      expect_any_instance_of(Twitter::REST::Client).to receive(:update).with(tweet)

      described_class.call(twitter_handle: "lewispb", timing: "1.234s")
    end
  end
end
