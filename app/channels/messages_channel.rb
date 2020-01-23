class MessagesChannel < ApplicationCable::Channel
  def subscribed
  stream_for Incident.find(params[:id])
  end

  def speak(data)
    incident = Incident.find(params[:id])
    message = current_user.messages.build(content: data["content"], parent_id: data["parentId"], incident: incident)
    MessagesChannel.broadcast_to(incident, message: render(message), parent: message.parent_id) if message.save
  end

  private
    def render(message)
      ApplicationController.renderer.render(partial: "messages/message", locals: { message: message })
    end
end
