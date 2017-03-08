var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [{
  name: "Telus",
  province: "BC",
  sales: [100, 200, 400]
}, {
  name: "Bombardier",
  province: "AB",
  sales: [80, 20, 10, 100, 90, 500]
}, {
  name: "Telus",
  province: "SK",
  sales: [500, 100]
}];

function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  var o = {};

  for (var companyData in companySalesData) {
    var companyName = companySalesData[companyData].name;
    var province = companySalesData[companyData].province;
    var sales = 0;
    sales += companySalesData[companyData].sales.reduce(function(a, b) {
      return a + b;
    }, 0);

    if (typeof o[companyName] === 'undefined'){
      o[companyName] = {};
      o[companyName] = {
          totalSales: sales,
          totalTaxes: sales * taxRates[province]
        };
    } else {
      o[companyName].totalSales += sales;
      o[companyName].totalTaxes += sales * taxRates[province];
    }






  }

  console.log(o);

}

var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/
