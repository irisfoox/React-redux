
import React from 'react';
import {Provider} from 'react-redux';
import store from './Store/Store';
import ProductDetails from './Components/ProductDetails';
/*import Warp from './Components/wrap';
// import SecondPageTP from './Components/SPToPrev'
import { createBrowserHistory } from 'history'
import store from './Redux/Stors/ContactStore';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export const history = createBrowserHistory()
const mapStateToProps = (state) => {
  return {
    managerComponent: state.managerComponent.managerComponent,
    quote: state.quote.quote,
  };
}

const mapDispatchToProps = (dispatch) => ({
  // loadPartOfData:()=> dispatch({ type:'GO_QUOTE'}),
  // changeCurrentComponent: (e) => dispatch(actions.setStepper(e)),
  // setActiveStep:(e)=> dispatch(actions.setActiveStep(e)),
  // setCompleted:(e)=> dispatch(actions.setCompleted(e)),

  // delInDimus:(a)=> dispatch({ type: 'DEL_DIMUS' }),

})

export default connect(mapStateToProps, mapDispatchToProps)(function App(props) {
  const managerComponent = props;
  var url = window.location;
  var userName = (url.pathname.split('/')[1]);

  return (
    <>
      {/* <Provider store={store}>     
 <Router history={history}>
                  <Switch>
                    <Switch>
                    {/* <Route exact path={"/view"+"/" + userName + "/" + managerComponent.quote._id } component={SPToview} /> 
                    <Route path={ "/"+userName+ "/quotePdf"} component={SPToview} />
                    <Route path={"/"} component={Warp} />

                    </Switch>
                    </Switch>
                    </Router>
    </Provider>
      <Provider store={store}>
        <Warp/>
      </Provider>
    </>
  );
}
)
*/
function App() {
  return (
    
      <Provider store={store}>
        <div className="App">
        <ProductDetails></ProductDetails>
        </div>
      </Provider>
     
  );
}

export default App;
