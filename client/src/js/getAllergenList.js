export const getAllergenList = (state) => {
    return [...new Set(state.map((product => [...product.alergens])).flat())];
}