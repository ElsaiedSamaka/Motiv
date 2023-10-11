import { DashboardLayout, RootLayout } from "shared";

const Cars = () => {
  return (
    <div>Cars</div>
  )
}
Cars.getLayout = (page) => {
  return (
    <RootLayout>
      <DashboardLayout>{page}</DashboardLayout>;
    </RootLayout>
  );
};

export default Cars