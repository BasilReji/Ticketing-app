export const getBaseURL = () => {
  console.error(window, "Window value");

  if (typeof window !== "undefined") {
    return window.location.origin;
  } else {
    // When not in the browser environment (server-side), you can provide a default URL
    return "http://localhost:3000"; // Replace with your default URL
  }
};
