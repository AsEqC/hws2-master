const initState = {
    themeId: 1,
}
type stateType = {
    themeId: number
}

type themeReducerActionType = ReturnType<typeof changeThemeId>
export const themeReducer = (state = initState, action: themeReducerActionType):stateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {
                ...state, themeId: action.id
            }
        default:
            return state
    }
}

export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID', id }) // fix any
