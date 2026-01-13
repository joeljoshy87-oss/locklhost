import React from 'react';

type SpinningTextProps = {
  text: string;
  children: React.ReactNode;
};

export const SpinningText: React.FC<SpinningTextProps> = ({ text, children }) => {
  const characters = text.split('');
  const angleStep = 360 / characters.length;

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="relative w-full h-full">
        <div className="absolute inset-0 animate-spin-slow">
          {characters.map((char, index) => (
            <span
              key={index}
              className="absolute left-1/2 top-1/2 text-black font-[390] font-inter text-[14px]"
              style={{
                transform: `translate(-50%, -50%) rotate(${
                  index * angleStep
                }deg) translateY(-62px)`,
                transformOrigin: 'center',
              }}
            >
              {char}
            </span>
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
