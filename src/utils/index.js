function CustomException(message, name) {
  this.message = message;
  this.name = name;
}

function getStringFromObject({object, keyOrder, separator = ' '}) {

  if (typeof object !== 'object' || !Array.isArray(keyOrder) || typeof separator !== 'string') {
    throw new CustomException('Invalid arguments.', 'ArgumentException');
  }

  let formattedString = "";

  for (let index = 0; index < keyOrder.length; index++) {

    let _separator = separator;

    if (index === 0) {
      _separator = '';
    }

    formattedString += _separator + object[keyOrder[index]];

  }

  return formattedString;

}

export {
  getStringFromObject
}