import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useUser } from "./libs/feature-data-access-api/auth";
import { AuthenticatedApp } from "./libs/feature-shell/authenticated-app/AuthenticatedApp";
import { UnauthenticatedApp } from "./libs/feature-shell/unauthenticated-app/UnauthenticatedApp";

const FireBnbApps = () => {
  const { data } = useUser();

  if (!data) {
    return <UnauthenticatedApp />;
  }

  return <AuthenticatedApp />;
};

export const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <FireBnbApps />
    </QueryClientProvider>
  );
};
