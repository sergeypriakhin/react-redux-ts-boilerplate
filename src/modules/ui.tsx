interface UIState {
  collapsed: boolean;
}

const initialState: UIState = {
  collapsed: false,
};

type UIAction = { type: 'CHANGE_COLLAPSED' };

// ------------------
// action creators
// ------------------
export function changeCollapsed(): UIAction {
  return { type: 'CHANGE_COLLAPSED' };
}

// ------------------
// reducers
// ------------------
export function uiReducer(state = initialState, action: UIAction): UIState {
  switch (action.type) {
    case 'CHANGE_COLLAPSED': {
      return { ...state, collapsed: !state.collapsed };
    }
    default:
      return state;
  }
}
