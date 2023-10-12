import React from 'react'
import { RootLayout, SettingsLayout } from 'shared';

const Settings = () => {
  return (
    <div>Settings</div>
  )
}
Settings.getLayout = (page) => {
  return (
    <RootLayout>
      <SettingsLayout>{page}</SettingsLayout>
    </RootLayout>
  );
};
export default Settings