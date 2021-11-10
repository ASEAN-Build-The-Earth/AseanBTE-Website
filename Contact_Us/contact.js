function sendEmail() {
  var EmailInput = document.getElementById("email").value;
  var NameInput = document.getElementById("name").value;
  var button = document.getElementById("send"),
    count = 1;
  button.onclick = function () {
    count += 1;
  };
  Email.send({
    SecureToken: "",
    To: EmailInput,
    From: "",
    Subject: "Support Ticket" + "#" + count,
    Body: "Thank you for reaching out to ASEAN BTE. This is an automated message to notify you that we have received your ticket and one of our team members will get back to you to assist with this matter. \n Please send you queries by replying to this email",
  }).then(function (message) {
    alert(
      "A ticket has been created, please check your inbox, if you didn't find it check the spam folder"
    );
  });
}
