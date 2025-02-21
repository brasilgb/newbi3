import React from 'react';

type Props = {};

const Loading = (props: Props) => {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 flex place-items-center justify-center z-50">
      <div className="w-14 h-14 rounded-full border-4 border-y-solar-green-primary animate-spin" />
    </div>
  );
};

export default Loading;