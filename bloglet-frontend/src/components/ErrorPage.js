import React from 'react';

function renderErrorMessage(errorCode) {
  if (/ERROR_NOT_FOUND/.test(errorCode)) {
    return 'Sorry! The resource you requested does not exist.';
  }
  if (/ERROR_PERMISSION_DENIED/.test(errorCode)) {
    return 'Sorry! You do not have permission to perform this operation.';
  }
  return 'Sorry! An unexpected error occured while processing your request. Please try again later.';
}

export default function ErrorPage({ errorCode }) {
  return (
    <div className="ErrorPage">
      <p>{renderErrorMessage(errorCode)}</p>
    </div>
  );
}
