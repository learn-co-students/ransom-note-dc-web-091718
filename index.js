function buildHistogram(magazine) {
  var newHash = {}
  magazine.forEach(letter => {
    if (Object.keys(newHash).includes(letter)) {
      newHash[letter]++
    }
    else {
      newHash[letter] = 1
    }
  })
  return newHash
}

function canBuildNote(magazine, note) {
  let newNote = note.split("").filter(i => !(i === ' '))
  let magazineHisto = buildHistogram(magazine)
  let noteHisto = buildHistogram(newNote)
  for (const letter in noteHisto) {
    if (!magazineHisto[letter] || magazineHisto[letter] < noteHisto[letter]) {
      console.log(magazineHisto[letter], noteHisto[letter], note, magazine)
      return false
    }
  }
  return true
}
