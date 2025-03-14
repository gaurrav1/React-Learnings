export function checkEmail(email) {
    const errors = [];

    if (email.length === 0) {
        errors.push('Email is required');
    }
    if (!email.endsWith("@gaurav.com")) {
        errors.push('Must end with @gaurav.com');
    }

    return errors;
}

export function checkPassword(password) {
    const errors = [];

    if (password.length < 10) {
        errors.push('Password must be 10 characters or longer');
    }
    if (!password.match(/[a-z]/)) {
        errors.push('Must include at least 1 lowercase letter');
    }
    if (!password.match(/[A-Z]/)) {
        errors.push('Must include at least 1 uppercase letter');
    }
    if (!password.match(/[0-9]/)) {
        errors.push('Must include at least 1 number');
    }

    return errors;
}