import useTranslation from "core/hooks/useTranslation";
import Head from "next/head";
import { useRouter } from "next/router";
import { RootLayout, SettingsLayout, Title } from "shared";

const Settings = () => {
  const { locale } = useRouter();
  const { t } = useTranslation(locale);
  return (
    <>
      <Head>
        <title>{t("settings.title")}</title>
        <meta
          name="description"
          content="Next.js 12 + TailwindCSS + ReduxToolKit + RTK Qurey"
        />
      </Head>
      <section className="settings space-y-5">
        <Title title={t("settings.name")} />
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
