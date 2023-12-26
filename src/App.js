import './App.css'
import Stockpage from './StockPage/Stockpage'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Stockpage />
    </Provider>
  )
}

export default App
