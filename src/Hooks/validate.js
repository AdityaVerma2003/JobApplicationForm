// src/hooks/validate.js
export const validate = (values) => {
  let errors = {};

  if (!values.fullName) {
    errors.fullName = 'Full Name is required';
  }

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = 'Phone Number is required';
  } else if (isNaN(values.phoneNumber)) {
    errors.phoneNumber = 'Phone Number must be a valid number';
  }

  if (['Developer', 'Designer'].includes(values.position) && !values.relevantExperience) {
    errors.relevantExperience = 'Relevant Experience is required';
  } else if (values.relevantExperience && values.relevantExperience <= 0) {
    errors.relevantExperience = 'Relevant Experience must be a number greater than 0';
  }

  if (values.position === 'Designer' && !values.portfolioURL) {
    errors.portfolioURL = 'Portfolio URL is required';
  } else if (values.portfolioURL && !/^(ftp|http|https):\/\/[^ "]+$/.test(values.portfolioURL)) {
    errors.portfolioURL = 'Portfolio URL is invalid';
  }

  if (values.position === 'Manager' && !values.managementExperience) {
    errors.managementExperience = 'Management Experience is required';
  }

  if (!Object.values(values.skills).some(skill => skill)) {
    errors.skills = 'At least one skill must be selected';
  }

  if (!values.preferredInterviewTime) {
    errors.preferredInterviewTime = 'Preferred Interview Time is required';
  } else if (isNaN(new Date(values.preferredInterviewTime).getTime())) {
    errors.preferredInterviewTime = 'Preferred Interview Time must be a valid date and time';
  }

  return errors;
};
