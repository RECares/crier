import consumer from "./consumer"

$(document).on("turbolinks:load", () => {
    var incident = Number($(".messages").attr("id"));
    if (!isNaN(incident)) {
        consumer.messages = consumer.subscriptions.create({ channel: "MessagesChannel", id: incident }, {
            received(data) {
                if ($("#no-messages-notice")) {
                    $("#no-messages-notice").hide();
                }
                if (data["parent"]) {
                    var replies = $(".message#" + data["parent"]).children(".replies").first();
                    replies.prepend(data["message"]);
                }
                else {
                    $(".messages").prepend(data["message"])
                }
            },
            speak(content, parentId = null) {
                this.perform("speak", { content: content, parentId: parentId })
            }
        });
    }
});
