import { React, lazy, Suspense } from "react";

const MacFinder = lazy(() => import('./components/MacFinder/MacFinder'));
const Footer = lazy(() => import('./components/Footer/Footer'));

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Suspense fallback={<div>Chargement...</div>}>
          <MacFinder />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default App;
