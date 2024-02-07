export const GAME_TITLE = process.env.REACT_APP_GAME_NAME

export const WIN_MESSAGES = ['Stämmer!', 'Klart!', 'Lämpligt!', 'Riktigt!', 'Schysst!', 'Rätt!', 'Korrekt!']
export const GAME_COPIED_MESSAGE = 'Resultatet är kopierat till klippbordet!'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Inte tillräckligt med bokstäver!'
export const WORD_NOT_FOUND_MESSAGE = 'Ordet hittades inte!'
export const HARD_MODE_ALERT_MESSAGE =
  'Svårt läge måste aktiveras före spelets början!'
export const HARD_MODE_DESCRIPTION =
  'Nästa gissning måste innehålla hittade bokstäver'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'Läge som kan underlätta vid färgblindhet'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `Ordet var ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Måste ha ${guess} i position ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Ordet måste innehålla ${letter}`
export const ENTER_TEXT = 'Skicka'
export const DELETE_TEXT = 'Radera'
export const STATISTICS_TITLE = 'Statistik'
export const GUESS_DISTRIBUTION_TEXT = 'Gissningar'
export const NEW_WORD_TEXT = 'Nytt ord om'
export const SHARE_TEXT = 'Dela'
export const SHARE_FAILURE_TEXT =
  'Det gick inte att dela resultatet. Denna funktion är bara tillgänglig i en säker miljö (HTTPS) som fungerar i de flesta webbläsaralternativ.'
export const MIGRATE_BUTTON_TEXT = 'Överför'
export const MIGRATE_DESCRIPTION_TEXT =
  'Klicka här för att överföra din statistik till en ny enhet.'
export const TOTAL_TRIES_TEXT = 'Totalt antal försök'
export const SUCCESS_RATE_TEXT = 'Lyckade gissningar'
export const CURRENT_STREAK_TEXT = 'Nuvarande vinster i rad'
export const BEST_STREAK_TEXT = 'Bäst antal vinster i rad'
export const DISCOURAGE_INAPP_BROWSER_TEXT =
  "Du använder en inbäddad webbläsare och kan erfara problem med att dela och spara ditt resultat. Enhetens standardwebbläsare rekommenderas."

export const DATEPICKER_TITLE = 'Välj ett tidigare datum'
export const DATEPICKER_CHOOSE_TEXT = 'Välj'
export const DATEPICKER_TODAY_TEXT = 'Idag'
export const ARCHIVE_GAMEDATE_TEXT = 'Speldatum'
