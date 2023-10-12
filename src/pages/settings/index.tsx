import React from 'react'
import { RootLayout, SettingsLayout, Title } from "shared";

const Settings = () => {
  return (
    <section className="settings space-y-5">
      <Title title="Settings" />
    </section>
  );
};
Settings.getLayout = (page) => {
  return (
    <RootLayout>
      <SettingsLayout>{page}</SettingsLayout>
    </RootLayout>
  );
};
export default Settings