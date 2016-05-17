function writeFunction(message) {
    var pinkFluffy = "Pink fluffy says: <br>";
    $("#tchat-box")
            .html($("#tchat-box").html()+ pinkFluffy + "&emsp; &emsp; "+ message + "<br>")
            .width(590)
            .css({ overflow : 'auto'})
            .scrollTop(5000);
}


function sendFunction() {
    var formSend = document.getElementById("send-message").value;
    writeFunction(formSend);
}


function blockSubmit() {
    $('.submit-message').click(function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
    });
    return false;
}

  