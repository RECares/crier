import consumer from './channels/consumer'

$(document).on("click", ".send-comment-button", (event) => {
    var commentForm = $(event.currentTarget).closest(".comment-form");
    var textarea = commentForm.find(".message-textarea");
    if (textarea.val()) {
        consumer.messages.speak(textarea.val());
        textarea.val("");
    }
});

$(document).on("click", ".reply-link", (event) => {
    var message = $(event.currentTarget).closest(".message");
    var replyForm = message.children(".reply-form");
    replyForm.toggle();
});

$(document).on("click", ".cancel-button", (event) => {
    var message = $(event.currentTarget).closest(".message");
    var replyForm = message.children(".reply-form");
    var textarea = replyForm.find(".reply-textarea");
    replyForm.hide();
    textarea.val("");
});

$(document).on("click", ".send-reply-button", (event) => {
    var message = $(event.currentTarget).closest(".message");
    var replyForm = message.children(".reply-form");
    var textarea = replyForm.find(".reply-textarea");
    if (textarea.val()) {
        consumer.messages.speak(textarea.val(), message.attr("id"));
        replyForm.hide();
        textarea.val("");
    }
});
