import React from 'react'

const SettingsLayout = ({ children }) => {
  return (
    <section className="settings-layout h-[91vh] overflow-auto">
      <div className="h-full p-5">{children}</div>
    </section>
  );
};

export default SettingsLayout