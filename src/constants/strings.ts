export const Strings = {
  home: {},

  listing: {
    categories: "Categories",
    colors: "Colors",
    size: "Size",
    price: "Price",
    eCommerce: "ECommerce",
    search: "Search",
  },

  apiErrors: {
    requestTimeout:
      "Request timed out. Please check your internet connection or try again later.",
    networkError: "Network error. Please check your internet connection.",
    requestCanceled: "Request canceled. Please try again or contact support.",
    unauthorizedAccess: "Unauthorized access. Please log in again.",
    forbiddenAccess:
      "Forbidden. You do not have permission to access this resource.",
    resourceNotFound: "Resource not found.",
    internalServerError:
      "Internal server error. Please try again later or contact support.",
    unexpectedError: "Unexpected error occurred. Please try again.",
    badRequest: "Bad request. Please check your request parameters.",
    appleSignInError: "Apple Sign in failed!",
    appleSignInCancel: "User canceled Apple Sign in.",
  },
  localStorageKeys: {
    user: "user",
  },
} as const;
