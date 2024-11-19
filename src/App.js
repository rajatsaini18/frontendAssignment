import React, { useEffect } from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
// import Card from './components/Card/Card';
import DashBoard from './components/DashBoard/DashBoard';
import { useDispatch, useSelector } from 'react-redux'
import { retrieveAllData } from './Actions/DataAction';
import Loading from './components/Loading/Loading';
const App = () => {
  const dispatch = useDispatch();
  const { allTickets } = useSelector(state => state.DataReducer);
  useEffect(() => {
    dispatch(retrieveAllData());
  }, [dispatch])
  return allTickets ? (
    <div style={{ paddingTop: "10px" }} >
      <NavBar />
      <hr style={{ marginTop: "10px" }} />
      <DashBoard />
    </div>
  ) : <Loading />
}
export default App