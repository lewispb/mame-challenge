class EntriesController < ApplicationController
  def index
    @entries = Entry.best_score_first
    @entries = Entry.random if params[:random]
  end

  def create
    @entry = Entry.new(entry_params)
    @entry.event = Event.current

    respond_to do |format|
      if @entry.save
        TweetTimeJob.perform_later(@entry)
        format.json { render json: {}, status: :created }
      else
        format.json { render json: @entry.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    Entry.find(params[:id]).destroy

    redirect_to entries_path
  end

  private

    def entry_params
      params.require(:entry).permit(:name, :twitter_handle, :timing)
    end
end
