import { SelectedValuesProvider } from "@/context/components";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <SelectedValuesProvider>
      <Component {...pageProps} />
    </SelectedValuesProvider>
  )
}
