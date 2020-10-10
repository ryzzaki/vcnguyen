import ReactGA from 'react-ga';

export const initGA = () => {
  const trackingCode = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || '';
  ReactGA.initialize(trackingCode);
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

// @To-do: add event logging
export const logEvent = (category: string, action: string) => {
  ReactGA.event({ category, action });
};

// @To-do: add exception logging
export const logException = (description: string, fatal = false) => {
  ReactGA.exception({ description, fatal });
};
