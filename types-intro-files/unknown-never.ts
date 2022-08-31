let userInput: unknown; // better to use than 'any'
let userName: string;

userInput = 5;
userInput = 'Eddie';
if (typeof userInput === 'string') {
  userName = userInput;
}

// Use 'never' when intent is to crash the script
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  // while (true) {}
}

generateError('An error occurred!', 500);
