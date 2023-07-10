
const scriptProperties = PropertiesService.getScriptProperties()
const SPREADSHEET_FILE_ID = scriptProperties.getProperty('SPREADSHEET_FILE_ID')
const SPREADSHEET_SHEET_NAME = scriptProperties.getProperty('SPREADSHEET_SHEET_NAME')

function hello (): void {
  const file = DriveApp.getFileById(SPREADSHEET_FILE_ID)
  const sheet = SpreadsheetApp.open(file)
    .getSheetByName(SPREADSHEET_SHEET_NAME)
  if (sheet == null) {
    console.error('Sheet1 not found.')
    return
  }
  const range = sheet.getRange('A1')
  range.setValue('Hello World!')
}

function inspect (): void {
  console.log('SPREADSHEET_FILE_ID:', SPREADSHEET_FILE_ID)
  console.log('SPREADSHEET_SHEET_NAME:', SPREADSHEET_SHEET_NAME)
}

function changeWidthHeight (): void {
  const file = DriveApp.getFileById(SPREADSHEET_FILE_ID)
  const sheet = SpreadsheetApp.open(file)
    .getSheetByName(SPREADSHEET_SHEET_NAME)
  if (sheet == null) {
    console.error('Sheet1 not found.')
    return
  }
  sheet.setColumnWidth(1, 25)
  sheet.setRowHeight(1, 25)
}

function changeBackgroundColor (): void {
  const file = DriveApp.getFileById(SPREADSHEET_FILE_ID)
  const sheet = SpreadsheetApp.open(file)
    .getSheetByName(SPREADSHEET_SHEET_NAME)
  if (sheet == null) {
    console.error('Sheet1 not found.')
    return
  }
  const range = sheet.getRange('A1')
  range.setBackground('#FF0000')
}

export { hello, inspect, changeWidthHeight, changeBackgroundColor }
