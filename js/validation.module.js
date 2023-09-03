export class validation {
  constructor() {
    document.getElementById("nameInput").addEventListener("input", () => {
      this.nameValidation();
    });
    document.getElementById("emailInput").addEventListener("input", () => {
      this.emailValidation();
    });
    document.getElementById("phoneInput").addEventListener("input", () => {
      this.phoneValidation();
    });
    document.getElementById("ageInput").addEventListener("input", () => {
      this.ageValidation();
    });
    document.getElementById("passwordInput").addEventListener("input", () => {
      this.passwordValidation();
    });
    document.getElementById("repasswordInput").addEventListener("input", () => {
      this.repasswordValidation();
      this.enableSubmit();
    });
  }

  nameValidation() {
    let nameInput = /^[a-zA-Z ]+$/.test(
      document.getElementById("nameInput").value
    );

    if (nameInput) {
      document
        .getElementById("nameAlert")
        .classList.replace("d-block", "d-none");

      return true;
    } else {
      document
        .getElementById("nameAlert")
        .classList.replace("d-none", "d-block");

      return false;
    }
  }

  emailValidation() {
    let emailInput =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        document.getElementById("emailInput").value
      );

    if (emailInput) {
      document
        .getElementById("emailAlert")
        .classList.replace("d-block", "d-none");

      return true;
    } else {
      document
        .getElementById("emailAlert")
        .classList.replace("d-none", "d-block");
      return false;
    }
  }

  phoneValidation() {
    let phoneInput =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
        document.getElementById("phoneInput").value
      );

    if (phoneInput) {
      document
        .getElementById("phoneAlert")
        .classList.replace("d-block", "d-none");

      return true;
    } else {
      document
        .getElementById("phoneAlert")
        .classList.replace("d-none", "d-block");
      return false;
    }
  }

  ageValidation() {
    let ageInput = /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(
      document.getElementById("ageInput").value
    );

    if (ageInput) {
      document
        .getElementById("ageAlert")
        .classList.replace("d-block", "d-none");

      return true;
    } else {
      document
        .getElementById("ageAlert")
        .classList.replace("d-none", "d-block");
      return false;
    }
  }

  passwordValidation() {
    let passwordInput = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(
      document.getElementById("passwordInput").value
    );

    if (passwordInput) {
      document
        .getElementById("passwordAlert")
        .classList.replace("d-block", "d-none");

      return true;
    } else {
      document
        .getElementById("passwordAlert")
        .classList.replace("d-none", "d-block");
      return false;
    }
  }

  repasswordValidation() {
    let repasswordInput =
      document.getElementById("repasswordInput").value ==
      document.getElementById("passwordInput").value;
    if (repasswordInput) {
      document
        .getElementById("repasswordAlert")
        .classList.replace("d-block", "d-none");

      return true;
    } else {
      document
        .getElementById("repasswordAlert")
        .classList.replace("d-none", "d-block");

      return false;
    }
  }

  enableSubmit() {
    if (
      this.nameValidation() &&
      this.emailValidation() &&
      this.passwordValidation() &&
      this.ageValidation() &&
      this.repasswordValidation() &&
      this.phoneValidation()
    ) {
      document.getElementById("submitBtn").removeAttribute("disabled");
    } else {
      console.log("else");
      document.getElementById("submitBtn").setAttribute("disabled", true);
    }
  }
}
