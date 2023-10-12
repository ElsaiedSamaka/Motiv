const DashboardLayout = ({ children }) => {
  return (
    <section className="dashboard-layout h-[91vh] overflow-auto">
      <div className="h-full p-5">{children}</div>
    </section>
  );
};

export default DashboardLayout;
