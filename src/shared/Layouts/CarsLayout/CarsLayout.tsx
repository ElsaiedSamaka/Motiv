import React from 'react'

const CarsLayout = ({ children }) => {
  return (
    <section className="cars-layout">
      <div className="h-[93vh] overflow-scroll p-5">{children}</div>
    </section>
  );
};

export default CarsLayout