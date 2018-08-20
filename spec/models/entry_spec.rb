require "rails_helper"

RSpec.describe Entry do
  let(:entry) { build(:entry) }

  describe "callbacks" do
    describe "before_save" do
      it "strips invalid chars" do
        entry.twitter_handle = "@lewispb"
        entry.save

        expect(entry.twitter_handle).to eq("lewispb")
      end
    end
  end

  describe "#timing_string" do
    it "formats the timing" do
      expect(entry.timing_string).to eq("1.234s")
    end
  end
end
