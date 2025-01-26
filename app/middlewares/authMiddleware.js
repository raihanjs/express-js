export default  (req, res, next) => {
    console.log('I am a Midlleware');
    next();
}