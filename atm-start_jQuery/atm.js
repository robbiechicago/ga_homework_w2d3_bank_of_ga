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
  atm.savingsAmount = parseInt($('#amount2').val());
  if (!isNaN(atm.savingsAmount)) {
    atm.savingsAccBalance = atm.savingsAccBalance + atm.savingsAmount;
    $('#balance2').text('$' + atm.savingsAccBalance);
  }
  $('#amount2').val('');
}

atm.currentAccWithdraw = function() {
  atm.currentAmount = parseInt($('#amount1').val());
  if (!isNaN(atm.currentAmount)) {
    if((atm.currentAccBalance + atm.savingsAccBalance) - atm.currentAmount >= 0) {
      atm.accountDiff = atm.currentAmount - atm.currentAccBalance;
      atm.accountDiff < 0 ? atm.accountDiff = 0 : null;
      atm.currentAccBalance = atm.currentAccBalance - (atm.currentAmount - atm.accountDiff);
      console.log('current withdraw amount: ' + atm.currentAmount);
      console.log('diff: ' + atm.accountDiff);
      console.log('amount taken from current: ' + (atm.currentAmount - atm.accountDiff));
      atm.savingsAccBalance = atm.savingsAccBalance - atm.accountDiff;
      $('#balance1').text('$' + atm.currentAccBalance);
      $('#balance2').text('$' + atm.savingsAccBalance);
    }
  }
  $('#amount1').val('');
}

atm.savingsAccWithdraw = function() {
  atm.savingsAmount = parseInt($('#amount2').val());
  if (!isNaN(atm.savingsAmount)) {
    if (atm.savingsAccBalance - atm.savingsAmount >= 0) {
      atm.savingsAccBalance = atm.savingsAccBalance - atm.savingsAmount;
      $('#balance2').text('$' + atm.savingsAccBalance);
    }
  }
  $('#amount2').val('');
}




















