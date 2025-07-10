function doGet() {
  return HtmlService.createHtmlOutputFromFile('index2')
    .setTitle('PENGUMUMAN KELULUSAN')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function baca(brs){
  var SHEET_ID = "1zTjbn78--yWXKpRWkxTKqm1hyv3AU_jR";
  var SHEET_NAME = "DATA";
  
  bNis = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME).getRange("C" + brs).getValue();
  bNama = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME).getRange("D" + brs).getValue();
  bKelas = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME).getRange("E" + brs).getValue();
  bStatus = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME).getRange("F" + brs).getValue();
  
  status = bNis +"#"+ bNama +"#"+ bKelas +"#"+ bStatus
  return status;
}

function login(user, pass){
  var SHEET_ID = "1zTjbn78--yWXKpRWkxTKqm1hyv3AU_jR";
  var SHEET_NAME = "DATA";
  var sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
  var data = sheet.getDataRange().getValues();
  //var cari = "Siswa Mau Lulus 1000";
  //var pw1 = "p1000";
  var cari = [[user]];
  var pw1 = [[pass]];
  //SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME).getRange("A4").setValues(cari);
  //SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME).getRange("B4").setValues(pw1);

  for(var i = 0; i<data.length;i++){
    if(data[i][2] == cari){ //[2] because column D
      var row = i+1;
    }
  }
  //Logger.log(row);

  if(row === '' || row == null){
    var status = "NOUSER";
    //Logger.log(status);
    //SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME).getRange("D4").setValue(status);
    return status;
  }else{
    var pw0 = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME).getRange("J" + row).getValue();
    //Logger.log(pw0);
    if(pw0 == pw1){
      var status = "SUCCESS#" + row;
      //Logger.log(status);
      //SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME).getRange("D4").setValue(status);
      return status;
    }else{
      var status = "FAILED";
      //Logger.log(status);
      //SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME).getRange("D4").setValue(status);
      return status;
    }
  }
}