class Entry < ApplicationRecord
  belongs_to :event

  scope :best_score_first, -> { order(timing: :asc) }
  scope :random, -> { order("RANDOM()") }
end
