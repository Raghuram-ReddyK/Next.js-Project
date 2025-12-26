import React from "react";

const Loading = () => {
  return <div>
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
    </div>
  </div>;
};

export default Loading;