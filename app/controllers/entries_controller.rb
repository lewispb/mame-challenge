class EntriesController < ApplicationController
  def index
    @entry = Entry.new
    @entries = Entry.all
  end

  def create
    @entry = Entry.new(entry_params)

    respond_to do |format|
      if @entry.save
        format.html { redirect_to @entry, notice: "Entry was successfully created." }
        format.json { render :show, status: :created, location: @entry }
      else
        format.html { render :new }
        format.json { render json: @entry.errors, status: :unprocessable_entity }
      end
    end
  end

  private

    def entry_params
      params.require(:entry).permit(:twitter_handle, :name, :event_id, :timing)
    end
end
