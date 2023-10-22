# Test cases of module

## TC1: Counting signs in file

**Scenario:** Verify that the `countSignsInFile` function correctly counts all signs in a file.

**Expected Outcome:** The function should return the total count of signs in the file.

**Test Steps:**

1. Provide a test file with known content.
2. Call the `countSignsInFile` function on the test file.
3. Verify that the function returns the expected count of signs.

**Input Data:**

- Test file: `test.txt` with content "This is a test file! Lets see how this counts."

**Expected Results:**

- The function should return `37`, as there are `37` signs in the provided test file.

**Assertions:**

- The returned count should be a non-negative integer.

**Results:**


## TC2: Counting vowels in file

**Scenario:** Verify that the `countVowelsInFile` function correctly counts all vowels in a file.

**Expected Outcome:** The function should return the total count of vowels in the file.

**Test Steps:**

1. Provide a test file with known content.
2. Call the `countVowelsInFile` function on the test file.
3. Verify that the function returns the expected count of vowels.

**Input Data:**

- Test file: `test.txt` with content "This is a test file! Lets see how this counts."

**Expected Results:**

- The function should return `13`, as there are `13` vowels in the provided test file.

**Assertions:**

- The returned count should be a non-negative integer.

## TC3: Counting consonants in file

**Scenario:** Verify that the `countConsonantsInFile` function correctly counts all consonants in a file.

**Expected Outcome:** The function should return the total count of consonants in the file.

**Test Steps:**

1. Provide a test file with known content.
2. Call the `countConsonantsInFile` function on the test file.
3. Verify that the function returns the expected count of consonants.

**Input Data:**

- Test file: `test.txt` with content "This is a test file! Lets see how this counts."

**Expected Results:**

- The function should return `22`, as there are `22` consonants in the provided test file.

**Assertions:**

- The returned count should be a non-negative integer.

## TC4: Display vowels in file

**Scenario:** Verify that the `showVowelsFromFile` function correctly displays all vowels from a file.

**Expected Outcome:** The function should return the vowels that are in the file.

**Test Steps:**

1. Provide a test file with known content.
2. Call the `showVowelsFromFile` function on the test file.
3. Verify that the function returns the expected vowels.

**Input Data:**

- Test file: `test.txt` with content "This is a test file! Lets see how this counts."

**Expected Results:**

- The function should return `iiaeieeeeoiou`, as the vowels `iiaeieeeeoiou` are provided in test file.

**Assertions:**

- The returned signs should not include any other signs.

## TC5: Display consonants in file

**Scenario:** Verify that the `showConsonantsFromFile` function correctly displays the consonants from the provided file.

**Expected Outcome:** The function should return the consonants that are in the file.

**Test Steps:**

1. Provide a test file with known content.
2. Call the `showConsonantsFromFile` function on the test file.
3. Verify that the function returns the expected consonants.

**Input Data:**

- Test file: `test.txt` with content "This is a test file! Lets see how this counts."

**Expected Results:**

- The function should return `thfnctnshldrtrnthcnsnntsthtrnthfl`, as the consonants `thfnctnshldrtrnthcnsnntsthtrnthfl` are provided in the test file.

**Assertions:**

- The returned signs should not include any other signs.

## TC6: Show top 5 of most used signs

**Scenario:** Verify that the `getTopSigns` function correctly counts, order and show the top five most used signs in a file.

**Expected Outcome:** The function should return the top five most used signs in a file.

**Test Steps:**

1. Provide a test file with known content.
2. Call the `getTopSigns` function on the test file.
3. Verify that the function returns the expected top five of most used signs.

**Input Data:**

- Test file: `test.txt` with content "This is a test file! Lets see how this counts."

**Expected Results:**

- The function should return the signs that follows: s(7), t(6), e(5), i(4), h(2). Those are the signs that are most used in the file.

**Assertions:**

- The returned signs should be the top five.

## TC7: Show top 5 of most used vowels

**Scenario:** Verify that the `getTopVowels` function correctly counts, order and show the top five most used vowels in a file.

**Expected Outcome:** The function should return the top five most used vowels in a file.

**Test Steps:**

1. Provide a test file with known content.
2. Call the `getTopVowels` function on the test file.
3. Verify that the function returns the expected top five of most used vowels.

**Input Data:**

- Test file: `test.txt` with content "This is a test file! Lets see how this counts."

**Expected Results:**

- The function should return the signs that follows: e(5), i(4), o(2), a(1), u(1). Those are the vowels that are most used in the file.

**Assertions:**

- The returned vowels should be the top five.

## TC8: Show top 5 of most used consonants

**Scenario:** Verify that the `getTopConsonants` function correctly counts, order and show the top five most used consonants in a file.

**Expected Outcome:** The function should return the top five most used consonants in a file.

**Test Steps:**

1. Provide a test file with known content.
2. Call the `getTopConsonants` function on the test file.
3. Verify that the function returns the expected top five of most used consonants.

**Input Data:**

- Test file: `test.txt` with content "This is a test file! Lets see how this counts."

**Expected Results:**

- The function should return the signs that follows: s(7), t(6), h(2), l(2), c(1). Those are the signs that are most used in the file.

**Assertions:**

- The returned consonants should be the top five.

## TC9: Display content from file

**Scenario:** Verify that the `showContentFromFile` function correctly displays the content from a file.

**Expected Outcome:** The function should return the input data (content) that is in the file.

**Test Steps:**

1. Provide a test file with known content.
2. Call the `showContentFromFile` function on the test file.
3. Verify that the function returns the expected vowels.

**Input Data:**

- Test file: `test.txt` with content "This is a test file! Lets see how this counts."

**Expected Results:**

- The function should return `This is a test file! Lets see how this counts.`, as the vowels `This is a test file! Lets see how this counts.` are provided in test file.

**Assertions:**

- All kind of signs should be returned.