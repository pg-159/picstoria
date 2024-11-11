function validateCreateUser(body) {
  const errors = [];

  if (!body.username) {
    errors.push("username is required.");
  }
  if (!body.email) {
    errors.push("email id is required.");
  }
  if (!isValidEmail(body.email)) {
    errors.push("email format is invalid.");
  }
  return errors;
}

function isValidEmail(email) {
  // Find the position of "@" and the last "."
  const atSymbolIndex = email.indexOf("@");
  const dotIndex = email.lastIndexOf(".");

  // Basic email format checks
  if (
    atSymbolIndex > 0 && // "@" should not be the first character
    dotIndex > atSymbolIndex + 1 && // "." should be after "@" with at least one character in between
    dotIndex < email.length - 1 && // "." should not be the last character
    email.indexOf("@", atSymbolIndex + 1) === -1 // Only one "@" in the email
  ) {
    return true;
  }

  return false;
}

function validateSearchImages(query) {
  const errors = [];
  if (!query.query) {
    errors.push("search term is required.");
  }
  return errors;
}

module.exports = { validateCreateUser, validateSearchImages };
