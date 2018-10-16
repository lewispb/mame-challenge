require "rails_helper"

RSpec.describe Entry do
  let(:entry) { build(:entry) }

  describe "callbacks" do
    describe "before_save" do
      it "strips invalid @ chars" do
        entry.twitter_handle = "@lewispb"
        entry.save

        expect(entry.twitter_handle).to eq("lewispb")
      end

      it "strips invalid - chars, but does not strip valid chars" do
        entry.twitter_handle = "@567ab-_097_GH"
        entry.save

        expect(entry.twitter_handle).to eq("567ab_097_GH")
      end
    end
  end

  describe "#timing_string" do
    it "formats the timing" do
      expect(entry.timing_string).to eq("1.234s")
    end
  end
end
