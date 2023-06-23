const initState = {
    themeId: 1,
}
type stateType = {
    themeId: number
}

export const themeReducer = (state = initState, action: changeThemeIdType):stateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {
                ...state, themeId: action.id
            }
        default:
            return state
    }
}

type changeThemeIdType = {
    type: string
    id: number
}
export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID', id })// fix any
