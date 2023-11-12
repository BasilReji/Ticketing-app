export const getBaseURL = () => {
  if (typeof window !== "undefined") {
    return window.location.origin;
  } else {
    // When not in the browser environment (server-side), you can provide a default URL
    return process.env.BASE_URL; // Replace with your default URL
  }
};
