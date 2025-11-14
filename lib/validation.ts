// Email validation utilities

// List of free email providers to block
const freeEmailProviders = [
  'gmail.com',
  'yahoo.com',
  'hotmail.com',
  'outlook.com',
  'live.com',
  'aol.com',
  'icloud.com',
  'mail.com',
  'protonmail.com',
  'zoho.com',
  'yandex.com',
  'gmx.com',
  'mail.ru',
  'inbox.com',
  'fastmail.com',
  'hey.com',
];

// List of known disposable/temporary email services
const disposableEmailDomains = [
  'tempmail.com',
  '10minutemail.com',
  'guerrillamail.com',
  'mailinator.com',
  'throwaway.email',
  'getnada.com',
  'temp-mail.org',
  'fakeinbox.com',
  'trashmail.com',
  'maildrop.cc',
  'sharklasers.com',
  'guerrillamail.info',
  'grr.la',
  'spam4.me',
  'mintemail.com',
];

/**
 * Check if email is from a company or educational institution
 * Blocks free email providers but allows company domains and .edu
 */
export const isCompanyEmail = (email: string): boolean => {
  if (!email) return false;
  
  const domain = email.split('@')[1]?.toLowerCase().trim();
  
  if (!domain) return false;
  
  // Allow educational institutions
  if (domain.endsWith('.edu') || domain.endsWith('.ac.uk') || domain.endsWith('.edu.au')) {
    return true;
  }
  
  // Block free email providers
  if (freeEmailProviders.includes(domain)) {
    return false;
  }
  
  // Allow all other domains (company emails)
  return true;
};

/**
 * Check if email is from a disposable/temporary email service
 */
export const isDisposableEmail = (email: string): boolean => {
  if (!email) return false;
  
  const domain = email.split('@')[1]?.toLowerCase().trim();
  
  if (!domain) return false;
  
  return disposableEmailDomains.includes(domain);
};

/**
 * Validate email format
 */
export const isValidEmailFormat = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Check if password meets strength requirements
 * Must have: 8+ chars, uppercase, lowercase, number
 */
export const isStrongPassword = (password: string): { valid: boolean; message?: string } => {
  if (!password) {
    return { valid: false, message: 'Password is required' };
  }

  if (password.length < 8) {
    return { valid: false, message: 'Password must be at least 8 characters long' };
  }

  if (!/[A-Z]/.test(password)) {
    return { valid: false, message: 'Password must contain at least one uppercase letter' };
  }

  if (!/[a-z]/.test(password)) {
    return { valid: false, message: 'Password must contain at least one lowercase letter' };
  }

  if (!/[0-9]/.test(password)) {
    return { valid: false, message: 'Password must contain at least one number' };
  }

  return { valid: true };
};

/**
 * Validate name format
 */
export const isValidName = (name: string): { valid: boolean; message?: string } => {
  if (!name) {
    return { valid: false, message: 'Name is required' };
  }

  const trimmedName = name.trim();

  if (trimmedName.length < 2) {
    return { valid: false, message: 'Name must be at least 2 characters' };
  }

  if (trimmedName.length > 50) {
    return { valid: false, message: 'Name must be less than 50 characters' };
  }

  // Allow letters, spaces, hyphens, and apostrophes
  const nameRegex = /^[a-zA-Z\s\-']+$/;
  if (!nameRegex.test(trimmedName)) {
    return { valid: false, message: 'Name can only contain letters, spaces, hyphens, and apostrophes' };
  }

  return { valid: true };
};

/**
 * Comprehensive signup validation
 */
export const validateSignupForm = (formData: {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}): { valid: boolean; error?: string } => {
  // Trim all inputs
  const name = formData.name?.trim();
  const email = formData.email?.trim().toLowerCase();
  const password = formData.password;
  const confirmPassword = formData.confirmPassword;

  // 1. Check all fields are provided
  if (!name || !email || !password || !confirmPassword) {
    return { valid: false, error: 'All fields are required' };
  }

  // 2. Validate name
  const nameValidation = isValidName(name);
  if (!nameValidation.valid) {
    return { valid: false, error: nameValidation.message };
  }

  // 3. Validate email format
  if (!isValidEmailFormat(email)) {
    return { valid: false, error: 'Please enter a valid email address' };
  }

  // 4. Check for company email
  if (!isCompanyEmail(email)) {
    return { 
      valid: false, 
      error: 'Please use a company or educational email address. Personal email providers (Gmail, Yahoo, Outlook, etc.) are not allowed.' 
    };
  }

  // 5. Check for disposable email
  if (isDisposableEmail(email)) {
    return { valid: false, error: 'Temporary or disposable email addresses are not allowed' };
  }

  // 6. Validate password strength
  const passwordValidation = isStrongPassword(password);
  if (!passwordValidation.valid) {
    return { valid: false, error: passwordValidation.message };
  }

  // 7. Check passwords match
  if (password !== confirmPassword) {
    return { valid: false, error: 'Passwords do not match' };
  }

  return { valid: true };
};

