import { useEffect, useState } from 'react';

export const Digital = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return  ()=> {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <div className='h-screen flex justify-center items-center'>
        <span className='text-5xl items-center border-2 p-5 rounded-full shadow-xl'>{date.toLocaleTimeString()}</span>
      </div>
    </div>
  );
};
