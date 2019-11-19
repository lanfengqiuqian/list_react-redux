// 创建stores实例
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// 引入reducer
import reducers from './reducers'

const store = createStore(reducers, applyMiddleware(thunk));

export default store