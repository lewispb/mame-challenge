class Entry < ApplicationRecord
  belongs_to :event

  scope :best_score_first, -> { order(timing: :asc) }
  scope :random, -> { order("RANDOM()") }

  before_save :clean_twitter_handle

  def timing_string
    "#{timing.to_f / 1000}s"
  end

  private

    def clean_twitter_handle
      self.twitter_handle = twitter_handle&.delete("^A-Za-z0-9_")
    end
end
