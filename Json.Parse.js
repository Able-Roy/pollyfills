const jsonParse = (str) => {
  if (typeof str !== 'string') {
    throw new Error('Input is not a string');
  }

  let trimmedString = str.trim();

  if (
    (trimmedString.startsWith('[') && trimmedString.endsWith(']')) ||
    (trimmedString.startsWith('{') && trimmedString.endsWith('}'))
  ) {
    try {
      return (new Function(`return ${trimmedString}`))();
    } catch (e) {
      throw new SyntaxError('Invalid JSON string');
    }
  } else {
    throw new SyntaxError('Invalid JSON string');
  }
};

// Example usage:
const jsonString = '{"name": "ChatGPT", "age": 3, "types": [1, "2"]}';
try {
  const jsonObj = jsonParse(jsonString);
  console.log(jsonObj); // Should output: { name: 'ChatGPT', age: 3, types: [1, '2'] }
} catch (e) {
  console.error(e.message);
}
