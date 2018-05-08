import { List, Map } from 'immutable';

 const init = {
   personen:[{naam:'jan'},{naam:'loe'},{naam:'fred'},{naam:'barry'},{naam:'kees'}],
  
 }
 const reducer = (state=init, action) => {
    return state;
  }
  
  export default reducer