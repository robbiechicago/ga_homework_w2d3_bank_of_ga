console.log('ready to go, RoHo');
var atm = {};   
atm.currentAccBalance = 0;
atm.savingsAccBalance = 0;

$(document).ready(function() {
  atm.setup();  
});

atm.setup = function() {
  atm.cdButton = $('#deposit1').on('click', atm.currentAccDeposit);
  atm.sdButton = $('#deposit2').on('click', atm.savingsAccDeposit);
  atm.cwButton = $('#withdraw1').on('click', atm.currentAccWithdraw);
  atm.swButton = $('#withdraw2').on('click', atm.savingsAccWithdraw);
}

atm.currentAccDeposit = function() {
  atm.currentAmount = parseInt($('#amount1').val());
  if (!isNaN(atm.currentAmount)) {
    atm.currentAccBalance = atm.currentAccBalance + atm.currentAmount;
    $('#balance1').text('$' + atm.currentAccBalance);
  }
  $('#amount1').val('');
}

atm.savingsAccDeposit = function() {
  console.log($(this).attr('id') + " - no action defined");
}

atm.currentAccWithdraw = function() {
  console.log($(this).attr('id') + " - no action defined");
}

atm.savingsAccWithdraw = function() {
  console.log($(this).attr('id') + " - no action defined");
}
