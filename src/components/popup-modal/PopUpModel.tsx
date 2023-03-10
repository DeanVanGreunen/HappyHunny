import React, { useState, useEffect } from "react";

export type PopUpModelProp = {
  allocatedWidth: number;
};

// Handles and Display the Popup for mobile and desktop views
export default function PopUpModel(props: PopUpModelProp) {
  const [isMobile, setIsMobile] = useState(props.allocatedWidth <= 480); // easly check the size of the window from the parent page
  const [isShown, setIsShown] = useState(true);
  const [isThankYou, setIsThankYou] = useState(true);

  // Show Sign me Up button for mobile view only
  if (isMobile && !isShown) {
    return <></>;
  }

  // show inputs for mobile view
  if (isMobile && isShown) {
    return <></>;
  }

  // show inputs for desktop view
  if (!isMobile && !isThankYou) {
    return <></>;
  }

  // show thank you page for desktop view
  if (!isMobile && isThankYou) {
    return <></>;
  }

  return <></>;
}
