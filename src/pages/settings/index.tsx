import Head from "next/head";
import { RootLayout, SettingsLayout, Title } from "shared";

const Settings = () => {
  return (
    <>
      <Head>
        <title>Innovadigits | Settings</title>
        <meta
          name="description"
          content="Next.js 12 + TailwindCSS + ReduxToolKit + RTK Qurey"
        />
      </Head>
      <section className="settings space-y-5">
        <Title title="Settings" />
      </section>
    </>
  );
};
Settings.getLayout = (page) => {
  return (
    <RootLayout>
      <SettingsLayout>{page}</SettingsLayout>
    </RootLayout>
  );
};
export default Settings;
