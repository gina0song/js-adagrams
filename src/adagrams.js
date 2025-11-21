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
  const lettersInHand = [];
  for(let i = 0; i < 10; i ++){
    const index = Math.floor(Math.random() * letterDeck.length);
    lettersInHand.push(letterDeck[index]);
    letterDeck.splice(index, 1);
  }

  return lettersInHand;
};



export const usesAvailableLetters = (input, lettersInHand) => {
  const lettersInHandCount = {};

  for (const letter of lettersInHand){
    lettersInHandCount[letter] = (lettersInHandCount[letter] ?? 0 ) + 1;
  };

  for (const letter of input.toUpperCase()){
    if((lettersInHandCount[letter] ?? 0 ) ===0){
      return false;
    }
    lettersInHandCount[letter] -= 1;
  }
  return true;
};


// def score_word(word):
//     LETTER_SCORES = { "A": 1, "E": 1, "I": 1, "O": 1, "U": 1, "L": 1, "N": 1, "R": 1, "S": 1, "T": 1, 
//                      "D": 2, "G": 2, "B": 3, 
//                      "C": 3, "M": 3, "P": 3, 
//                      "F": 4, "H": 4, "V": 4, "W": 4, "Y": 4, 
//                      "K": 5, 
//                      "J": 8, "X": 8, 
//                      "Q": 10, "Z": 10 
//     }
//     score = 0
//     if not word:
//         return score
//     else:
        
//         for letter in word.upper():
//             score += LETTER_SCORES[letter]

//     if len(word) >= 7:
//         score += 8
//     return  score
export const scoreWord = (word) => {
  const LETTER_SCORES = {
    'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1, 'L': 1, 'N': 1, 'R': 1, 'S': 1, 'T': 1,
    'D': 2, 'G': 2,
    'B': 3, 'C': 3, 'M': 3, 'P': 3,
    'F': 4, 'H': 4, 'V': 4, 'W': 4, 'Y': 4,
    'K': 5,
    'J': 8, 'X': 8,
    'Q': 10, 'Z': 10
  };

  let score = 0;
  if (!word){
    return score;
  }

  const upperWord = word.toUpperCase();

  for(const letter of upperWord){
    const letterScore = LETTER_SCORES[letter] ?? 0;
    score += letterScore;
  }

  if (upperWord.length >= 7) {
    score += 8;
  }

  return score;
};


export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
