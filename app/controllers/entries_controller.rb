class EntriesController < ApplicationController
  def index
    @entry = Entry.new
    @entries = Entry.all
  end

  def create
    @entry = Entry.new(entry_params)
    @entry.event = Event.current

    respond_to do |format|
      if @entry.save
        format.json { render json: {}, status: :created }
      else
        format.json { render json: @entry.errors, status: :unprocessable_entity }
      end
    end
  end

  private

    def entry_params
      params.require(:entry).permit(:name, :twitter_handle, :timing)
    end
end
