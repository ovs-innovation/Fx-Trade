/**
 * Contact and Newsletter Service
 * Handles client-side validation, logging, and dispatching.
 * Ready for future API endpoint integration.
 */

export const submitContactInquiry = async (formData) => {
  // Validate input fields
  const errors = {};
  if (!formData.name || !formData.name.trim()) {
    errors.name = "Full name is required.";
  }
  if (!formData.email || !formData.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!formData.message || !formData.message.trim()) {
    errors.message = "Please enter your message.";
  } else if (formData.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters long.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      errors
    };
  }

  // Structured payload ready for API integration
  const payload = {
    name: formData.name.trim(),
    email: formData.email.trim(),
    phone: (formData.phone || "").trim(),
    service: (formData.service || "General Inquiry").trim(),
    message: formData.message.trim(),
    timestamp: new Date().toISOString()
  };

  console.info("[FXTrade Inquiry Dispatch]", payload);

  // Simulate network dispatch delay for authentic user feedback
  await new Promise((resolve) => setTimeout(resolve, 600));

  return {
    success: true,
    message:
      "Thank you for contacting FxTrade Consulting Pvt. Ltd. Your inquiry has been received and our team will get in touch shortly."
  };
};

export const submitNewsletterSubscription = async (email) => {
  if (!email || !email.trim()) {
    return {
      success: false,
      error: "Please provide an email address."
    };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return {
      success: false,
      error: "Please enter a valid email address."
    };
  }

  const payload = {
    email: email.trim(),
    timestamp: new Date().toISOString()
  };

  console.info("[FXTrade Newsletter Subscription]", payload);

  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    success: true,
    message: "Thank you for subscribing to FXTrade updates."
  };
};
