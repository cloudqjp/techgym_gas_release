let sheet1 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("勤怠管理");
let lastRow = sheet1.getLastRow();
let date = new Date();
let day = date.getDay();
const WEEK = ['日', '月', '火', '水', '木', '金', '土'];
const DATECELL = 1
const DAYCELL = 2
const STARTCELL = 3
const ENDCELL = 4

function onOpen() {
  let ui = SpreadsheetApp.getUi()
  let menu = ui.createMenu("追加メニュー");
  menu.addItem("開始", "setStartTime");
  menu.addSeparator();
  menu.addItem("終了", "setEndTime");
  menu.addToUi();
}

function setStartTime() {
  let workDate = Utilities.formatDate(date, 'Asia/Tokyo', 'yyyy/MM/dd');
  let workStart = Utilities.formatDate(date, 'Asia/Tokyo', 'H:mm');
  let workDay = WEEK[day]
  sheet1.getRange(lastRow + 1, DATECELL).setValue(workDate);
  sheet1.getRange(lastRow + 1, DAYCELL).setValue(workDay);
  sheet1.getRange(lastRow + 1, STARTCELL).setValue(workStart);
}

function setEndTime() {
  let workEnd = Utilities.formatDate(date, 'Asia/Tokyo', 'H:mm');
  sheet1.getRange(lastRow, ENDCELL).setValue(workEnd);
}