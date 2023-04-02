import React from "react";
import { getFavouriteSubmissions } from "../services/localStorage";
import SubmissionCard from "./SubmissionCard";

const FavouritesTab = () => {
  const favouriteSubmissions = getFavouriteSubmissions();

  return (
    <>
      <h1>Favourite Submissions</h1>
      {favouriteSubmissions.length === 0 ? (
        <p>No favourite submissions found.</p>
      ) : (
        favouriteSubmissions.map((submission, index) => (
          <SubmissionCard key={index} submission={submission} />
        ))
      )}
    </>
  );
};

export default FavouritesTab;
