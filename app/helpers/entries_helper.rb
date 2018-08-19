module EntriesHelper
  def random_view?
    params[:random].present?
  end
end
