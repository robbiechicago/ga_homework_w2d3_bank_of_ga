console.log('ready to go, RoHo');
var atm = {};   
atm.currentAccBalance = 3;
console.log(atm.currentAccBalance);
atm.savingsAccBalance = $('#balance2').html;


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
  console.log($(this).attr('id') + " - no action defined");
  atm.currentAmount = parseInt($('#amount1').val());
  console.log(atm.currentAmount);
  atm.currentAccBalance = atm.currentAccBalance + atm.currentAmount;
  $('#balance1').text(atm.currentAccBalance);
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
