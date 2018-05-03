export const addTrip = (textt) => {
    return {
      type: 'ADD_TRIP',
      payload: {
        id: uid(),
        isFinished: false,
        text: textt
      }
    };
}

export function finishTrip(id) {
    return {
      type: 'TOGGLE_FINISH_TRIP',
      payload: id
    }
  }

  export function gete() {
    return {
      type: 'e'
     }}

// hack for generating passable unique ids
// TODO: fix this!
const uid = () => Math.random().toString(34).slice(2);

