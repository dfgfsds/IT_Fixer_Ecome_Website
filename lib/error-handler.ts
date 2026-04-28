
export const handleApiError = (error: any): string => {
    // Support both thrown Axios errors and direct response objects
    const response = error.response || (error.data ? error : null);
    const status = response?.status;
    const data = response?.data;

    // Extract raw message from typical backend structures
    let rawError = data?.error || data?.message || data?.msg || (typeof data === 'string' ? data : null);

    // If no data-level error, check if the error itself is a message string
    if (!rawError && typeof error === 'string') rawError = error;

    // If it's an ErrorDetail object string
    if (typeof rawError === 'string' && rawError.includes('ErrorDetail')) {
        const match = rawError.match(/string='([^']+)'/);
        if (match) rawError = match[1];
    }

    // Default messages for status codes if no specific message is provided
    if (!rawError) {
        if (status === 401) rawError = "Unauthorized access. Please login again.";
        else if (status === 403) rawError = "You do not have permission to perform this action.";
        else if (status === 404) rawError = "The requested resource was not found.";
        else if (status >= 500) rawError = "Internal Server Error. Please try again later.";
        else rawError = "An unexpected error occurred. Please check your connection.";
    }

    const serverError = rawError.toString().trim().replace(/\.$/, "");

    const errorMap: Record<string, string> = {
        "User not found": "We cannot find an account with that email address. Please check your email address or create a new account.",
        "Incorrect Password": "The password you entered is incorrect. Please try again or use the 'Forgot Password' link.",
        "Mobile number not registered": "This mobile number is not associated with an account. Please verify the number or create a new account.",
        "Invalid OTP": "The verification code is incorrect. Please check the code sent to your email or phone and try again.",
        "OTP Expired": "This verification code has expired. Please request a new one.",
        "Mobile number already exists": "This mobile number is already registered. Please login or use a different number.",
        "Email already exists": "This email address is already registered. Please login or use a different email.",
        "This contact_number and email already exist": "An account with this email or mobile number already exists. Please try logging in instead.",
        "This contact_number already exists": "An account with this mobile number already exists. Please try logging in instead.",
        "This email already exists": "An account with this email already exists. Please try logging in instead.",
        "Enter a valid email address": "Please enter a valid email address.",
        "Enter a valid mobile number": "Please enter a valid 10-digit mobile number.",
        "Password is too short": "Your password must be at least 8 characters long for better security.",
    };

    // Case-insensitive lookup
    const normalizedKey = serverError.toLowerCase();
    const matchedKey = Object.keys(errorMap).find(key => key.toLowerCase() === normalizedKey);
    const finalMessage = matchedKey ? errorMap[matchedKey] : serverError;

    if (!status || status >= 500) {
        console.error("System Failure:", error);
    } else {
        console.warn("Validation Alert:", finalMessage);
    }

    return finalMessage;
};
