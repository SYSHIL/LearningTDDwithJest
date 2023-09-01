
function addNumbers(req, res) {

    const { num1, num2 } = req.params;
    if(isNaN(num1) || isNaN(num2)){
        res.status(400).json({error: 'Invalid input. Please provide valid numbers.'})
        return 
    }
    const result = parseFloat(num1) + parseFloat(num2);
    res.json({ result });
}
  
module.exports = { addNumbers };