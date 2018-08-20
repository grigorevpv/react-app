export default store => next => action => {
    console.log('try apply middleware');
    console.log('action = ', action);
    next(action);
    console.log('next = ', next);
}