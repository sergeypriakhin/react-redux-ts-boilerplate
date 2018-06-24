const initialState = {
  name: "TEST"
};

export default function(state = initialState, action: any) {
  switch (action.type) {
    case "TEST":
      return action.name;
  }
  return state;
}
