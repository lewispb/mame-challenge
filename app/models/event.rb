class Event < ApplicationRecord
  def self.current
    find_by(is_current: true)
  end
end
