// mathController.test.js
const { addNumbers } = require('./mathController'); // Adjust the path as needed

describe('addNumbers', () => {
  it('should add two numbers correctly', () => {
    const req = {
      params: {
        num1: '5',
        num2: '10',
      },
    };
    const res = {
      json: jest.fn(),
    };

    addNumbers(req, res);

    expect(res.json).toHaveBeenCalledWith({ result: 15 });
  });

  it('should handle invalid input gracefully', () => {
    const req = {
      params: {
        num1: 'invalid',
        num2: '10',
      },
    };
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };

    addNumbers(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'Invalid input. Please provide valid numbers.' });
  });
});
