export const INCREMENT = 'INCREMENT_LIKES';

export function increment(index){
    return {
        type: INCREMENT,
        index
    }
}