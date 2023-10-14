import { useCarsContext } from "core/context/CarsContext";
import useTranslation from "core/hooks/useTranslation";
import { useGetCarsQuery } from "core/services/cars.service";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import {
  CarsLayout,
  Grid,
  LanguageSwitcher,
  PlaceholderCard,
  RootLayout,
  Title,
} from "shared";
import { Filteration } from "views";

const Cars = () => {
  const { locale } = useRouter();
  const { t } = useTranslation(locale);
  // State
  const { state: carsState, dispatch } = useCarsContext();
  // API call
  const {
    data = [],
    error,
    isError,
    isLoading,
    isFetching,
    isSuccess,
  } = useGetCarsQuery();

  // effect
  useEffect(() => {
    dispatch({ type: "FETCH_CARS" });

    return cleanupEffectHandler(
      dispatch,
      data,
      error,
      isError,
      isLoading,
      isFetching,
      isSuccess
    );
  }, [data, error, isError, isLoading, isFetching, isSuccess]);

  // cleanup effect
  function cleanupEffectHandler(
    dispatch,
    data,
    error,
    isError,
    isLoading,
    isFetching,
    isSuccess
  ) {
    // Dispatch an action to reset the state.
    dispatch({ type: "RESET_CARS" });

    // If the data is loading, dispatch an action to indicate that the data is no longer loading.
    if (isLoading) {
      dispatch({ type: "FETCH_CARS_LOAD" });
    }

    // If there is an error, dispatch an action to indicate that the error has been cleared.
    if (isError) {
      dispatch({ type: "FETCH_CARS_FAIL", payload: null });
    }

    // If the data is successfully fetched, dispatch an action to update the state with the new data.
    if (isSuccess) {
      dispatch({ type: "FETCH_CARS_SUCCESS", payload: data });
    }
  }

  return (
    <>
      <Head>
        <title>{t("cars.title")}</title>
        <meta
          name="description"
          content="Next.js 12 + TailwindCSS + ReduxToolKit + RTK Qurey"
        />
      </Head>
      <section className="cars space-y-5 ">
        <Title title={t("cars.name")} />
        <Filteration />
        {carsState.isSuccess && (
          <Grid data={carsState.data} dispatch={dispatch} />
        )}
        {carsState.isLoading && (
          <div>
            <ul className="grid grid-cols-4 xs:grid-cols-1 md:grid-cols-3 gap-5 mt-3 mb-4 ">
              <PlaceholderCard />
              <PlaceholderCard />
              <PlaceholderCard />
              <PlaceholderCard />
            </ul>
          </div>
        )}
        {carsState.isError && (
          <div className="text-4xl text-center p-5">Something went wrong</div>
        )}
      </section>
    </>
  );
};
Cars.getLayout = (page) => {
  return (
    <RootLayout>
      <CarsLayout>{page}</CarsLayout>
    </RootLayout>
  );
};

export default Cars;
