export const initialState = {
    breadCrumbs: { data: [] },
    localization: {
        data: {
            locale: localStorage.getItem('locale'),
            content: {}
        },
        loading: false,
        error: null
    }
};

export function appReducer(state = initialState, action) {
    switch (action.type) {
        case 'SETUP_BREADCRUMBS':
            const newBreadcrumbs = action.payload ? action.payload : initialState.breadCrumbs.data;
            return {
                ...state,
                breadCrumbs: {
                    data: newBreadcrumbs
                }
            };
        case 'SETUP_LOCALE':
            const payload = action && action.payload;
            const [locale] = action.meta;

            if (locale) {
                window.localStorage.setItem('locale', locale);
            }

            return {
                ...state,
                localization: {
                    data: payload ? { ...payload, locale } : state.localization.data,
                    loading: action.loading,
                    error: action.error
                }
            };
        default:
            return state;
    }
}
