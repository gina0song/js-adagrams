const LETTER_POOL = {
  A: 9,
  B: 2,
  C: 2,
  D: 4,
  E: 12,
  F: 2,
  G: 3,
  H: 2,
  I: 9,
  J: 1,
  K: 1,
  L: 4,
  M: 2,
  N: 6,
  O: 8,
  P: 2,
  Q: 1,
  R: 6,
  S: 4,
  T: 6,
  U: 4,
  V: 2,
  W: 2,
  X: 1,
  Y: 2,
  Z: 1,
};


export const drawLetters = () => {
  //build letter deck
  const letterDeck = [];
  for(const [letter,freq] of Object.entries(LETTER_POOL)){
    for(let i = 0;i < freq; i ++){
      letterDeck.push(letter);
    }
  }
  //draw 10 letters
  const letterBank = [];
  for(let i = 0; i < 10; i ++){
    const index = Math.floor(Math.random() * letterDeck.length);
    letterBank.push(letterDeck[index]);
    letterDeck.splice(index, 1);
  }

  return letterBank;
};


//  def uses_available_letters(word, letter_bank): 
// #     letter_bank_count = {} 
// #     for letter in letter_bank: 
// #         letter_bank_count[letter] = letter_bank_count.get(letter, 0) + 1 
        
// #     for letter in word.upper(): 
// #         if letter_bank_count.get(letter, 0) == 0: 
// #             return False 
// #         letter_bank_count[letter] -= 1 
        
// #     return True
export const usesAvailableLetters = (input, lettersInHand) => {
//   const letterBankCount = {};
//   for(const letter of lettersInHand){
//     letterBankCount[letter] = letterBankCount.get(letter, 0) + 1;  
//   }
//   for(const letter of input.toUpperCase()){
//     if(!letterBankCount[letter] || letterBankCount[letter] === 0){
//       return false;
//     }
// };

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
