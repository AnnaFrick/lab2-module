import { CharacterCounter, CharacterDisplayer, CharacterStatistics } from "../lib/index.js";

function testErrorHandlingForClass(className, testText) {
  console.log(`-------Testing ${className.name} class (Error Handling)-------`);
  
  const errorTests = {
    'countCharacters': (instance) => instance.countCharacters(),
    'countVowels': (instance) => instance.countVowels(),
    'countConsonants': (instance) => instance.countConsonants(),
    'countOtherCharacters': (instance) => instance.countOtherCharacters(),
    'countWords': (instance) => instance.countWords(),
  };

  try {
    const instance = new className(testText);
    for (const testName in errorTests) {
      console.log(`Testing ${testName} error`);
      testErrorHandling(
        `${testName} error`,
        () => errorTests[testName](instance),
        Error
      );
    }
  } catch (error) {
    console.error(`Failed to create an instance of ${className.name}: ${error}`);
  }

  console.log('');
}

const testErrorHandlingText = '';

testErrorHandlingForClass(CharacterCounter, testErrorHandlingText);
testErrorHandlingForClass(CharacterDisplayer, testErrorHandlingText);
testErrorHandlingForClass(CharacterStatistics, testErrorHandlingText);
