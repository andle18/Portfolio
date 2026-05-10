// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import type { Analytics } from "firebase/analytics";
import { getAnalytics, isSupported, logEvent } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

type AnalyticsParams = Record<string, string | number | boolean | undefined>;

let analyticsPromise: Promise<Analytics | null> | null = null;

const getAnalyticsInstance = () => {
  if (!analyticsPromise) {
    analyticsPromise = isSupported()
      .then((supported) => (supported ? getAnalytics(app) : null))
      .catch(() => null);
  }

  return analyticsPromise;
};

export const trackPageView = async (path: string) => {
  if (typeof window === "undefined") return;

  const analytics = await getAnalyticsInstance();
  if (!analytics) return;

  logEvent(analytics, "page_view", {
    page_location: window.location.href,
    page_path: path,
    page_title: document.title,
  });
};

export const trackEvent = async (
  eventName: string,
  params: AnalyticsParams = {},
) => {
  const analytics = await getAnalyticsInstance();
  if (!analytics) return;

  logEvent(analytics, eventName, params);
};
