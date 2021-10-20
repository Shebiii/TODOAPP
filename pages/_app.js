import "../styles/globals.css"
import "bootstrap/dist/css/bootstrap.css"
import { Provider } from "react-redux"
import store from "../Store/index"
import { transitions, positions, Provider as AlertProvider } from "react-alert"
import AlertTemplate from "react-alert-template-basic"
function MyApp({ Component, pageProps }) {
  const options = {
    position: positions.BOTTOM_LEFT,
    timeout: 1000,
    offset: "30px",
    transition: transitions.SCALE,
  }
  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...options}>
        <Component {...pageProps} />
      </AlertProvider>
    </Provider>
  )
}

export default MyApp
