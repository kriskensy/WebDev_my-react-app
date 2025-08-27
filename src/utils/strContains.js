export const strContains = (strOriginal, strToCompare) => {
    if(strOriginal.toLowerCase().includes(strToCompare.toLowerCase()))
      return true;
};