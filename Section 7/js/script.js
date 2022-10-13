// $(function () {
//   const inputEls = $("input:text, input:password, texteara");
//   inputEls.focus(function () {
//     $(this).css("box-shadow", "0 0 4px #666");
//   });

//   inputEls.blur(function () {
//     $(this).css("box-shadow", "none");
//   });

//   $("input:text").blur(function () {
//     if ($(this).val().length < 3) {
//       $(this).css("box-shadow", "0 0 4px rgba(255,0,0)");
//     } else {
//       $(this).css("box-shadow", "0 0 4px rgba(0,255,0)");
//     }
//   });
// });

// $(function () {
//   $("#checkbox").change(function () {
//     const isChecked = $(this).is(":checked"); // .prop("checked")
//     if (isChecked) {
//       $(this).add("label[for='checkbox']").css("box-shadow", "0 0 4px #181");
//     } else {
//       $(this).add("label[for='checkbox']").css("box-shadow", "0 0 4px #811");
//     }
//   });

//   $("#selection").change(function () {
//     const selectedOption = $(this).find(":selected").text();
//     alert(selectedOption);
//   });
// });

// $(function () {
//   $("#form").submit(function (e) {
//     const textarea = $("#message");
//     if (textarea.val().trim() == "") {
//       textarea.css("box-shadow", "0 0 5px #800");
//       e.preventDefault();
//     }
//   });
// });

$(function () {
  const form = $("#form");
  enableFastFeedback(form);

  form.submit(function (e) {
    const name = $("#name").val();
    const pass = $("#password").val();
    const msg = $("#message").val();
    const acc = $("#checkbox").is(":checked");

    validateName(name, e);
    validatePassword(pass, e);
    validateMessage(msg, e);
    validateAccepted(acc, e);
  });
});

const enableFastFeedback = (form) => {
  const nameInput = form.find("#name");
  const passwordInput = form.find("#password");
  const messageInput = form.find("#message");
  const checkboxInput = form.find("#checkbox");

  nameInput.blur(function (e) {
    const name = $(this).val();
    validateName(name, e);

    if (!isValidName(name)) {
      $(this).css({ "box-shadow": "0 0 5px #911", border: "1px solid #600" });
    } else {
      $(this).css({ "box-shadow": "0 0 5px #191", border: "1px solid #060" });
    }
  });

  passwordInput.blur(function (e) {
    const password = $(this).val();
    validatePassword(password, e);

    if (!isValidPassword(password)) {
      $(this).css({ "box-shadow": "0 0 5px #911", border: "1px solid #600" });
    } else {
      $(this).css({ "box-shadow": "0 0 5px #191", border: "1px solid #060" });
    }
  });

  messageInput.blur(function (e) {
    const message = $(this).val();
    validateMessage(message, e);

    if (!isValidMessage(message)) {
      $(this).css({ "box-shadow": "0 0 5px #911", border: "1px solid #600" });
    } else {
      $(this).css({ "box-shadow": "0 0 5px #191", border: "1px solid #060" });
    }
  });

  checkboxInput.change(function (e) {
    const isChecked = $(this).is(":checked");
    validateAccepted(checkbox, e);

    if (!isChecked) {
      $(this)
        .add("label[for='checkbox']")
        .css({ "box-shadow": "0 0 5px #911", border: "1px solid #600" });
    } else {
      $(this)
        .add("label[for='checkbox']")
        .css({ "box-shadow": "0 0 5px #191", border: "1px solid #060" });
    }
  });
};

function validateName(name, e) {
  if (!isValidName(name)) {
    $("#name-feedback").text("Invalid name");
    e.preventDefault();
  } else {
    $("#name-feedback").text("");
  }
}

const isValidName = (name) => name.length > 0;

function validatePassword(pass, e) {
  if (!isValidPassword(pass)) {
    $("#password-feedback").text("Password must be at least 4 characters");
    e.preventDefault();
  } else {
    $("#password-feedback").text("");
  }
}
const isValidPassword = (pass) => pass.length >= 4;

function validateMessage(msg, e) {
  if (!isValidMessage(msg)) {
    $("#message-feedback").text("Message must contain some characters");
    e.preventDefault();
  } else {
    $("#message-feedback").text("");
  }
}
const isValidMessage = (msg) => msg.trim().length > 0;

function validateAccepted(acc, e) {
  if (!acc) {
    $("#checkbox-feedback").text(
      "Please accept our Terms & Conditions to continue"
    );
    e.preventDefault();
  } else {
    $("#checkbox-feedback").text("");
  }
}
