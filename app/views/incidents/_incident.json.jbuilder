json.extract! incident, :id, :name, :location, :latitude, :longitude, :user_id, :created_at, :updated_at
json.url incident_url(incident, format: :json)
