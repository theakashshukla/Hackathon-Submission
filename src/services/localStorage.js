// src/services/localstorage.js

const STORAGE_KEY = "submissions";

export const getSubmissions = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
};

export const saveSubmission = (submission) => {
  const submissions = getSubmissions();
  submissions.push(submission);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(submissions));
};

export const updateSubmission = (index, updatedSubmission) => {
  const submissions = getSubmissions();
  submissions[index] = updatedSubmission;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(submissions));
};

export const deleteSubmission = (index) => {
  const submissions = getSubmissions();
  submissions.splice(index, 1);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(submissions));
};
export const getFavouriteSubmissions = () => {
    const favouriteSubmissions = JSON.parse(localStorage.getItem("favourites")) || [];
    return favouriteSubmissions;
  }