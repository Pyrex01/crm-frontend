import { useState } from 'react';

const data = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']; // Sample data array

const NextPrevButtons = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  return (
    <div className="flex items-center justify-center mt-8">
      <button
        className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l focus:outline-none"
        onClick={goToPrev}
      >
        Prev
      </button>
      <div className="mx-4">{data[currentIndex]}</div>
      <button
        className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none"
        onClick={goToNext}
      >
        Next
      </button>
    </div>
  );
};

export default NextPrevButtons;
