const filterCountries = (countries, range) => {
  const rangeAE = ['A', 'B', 'C', 'D', 'E'];
  const rangeFJ = ['F', 'G', 'H', 'I', 'J'];
  const rangeKO = ['K', 'L', 'M', 'N', 'O'];
  const rangePT = ['P', 'Q', 'R', 'S', 'T'];
  const rangeUZ = ['U', 'V', 'W', 'X', 'Y', 'Z'];
  const filteredCountries = [];

  countries.forEach((element) => {
    switch (range) {
      case 'A-E':
        if (rangeAE.includes(element.country.charAt(0))) {
          filteredCountries.push(element);
        }
        break;
      case 'F-J':
        if (rangeFJ.includes(element.country.charAt(0))) {
          filteredCountries.push(element);
        }
        break;
      case 'K-O':
        if (rangeKO.includes(element.country.charAt(0))) {
          filteredCountries.push(element);
        }
        break;
      case 'P-T':
        if (rangePT.includes(element.country.charAt(0))) {
          filteredCountries.push(element);
        }
        break;
      case 'U-Z':
        if (rangeUZ.includes(element.country.charAt(0))) {
          filteredCountries.push(element);
        }
        break;
      default:
        filteredCountries.push(element);
    }
  });

  return filteredCountries;
};

export default filterCountries;
