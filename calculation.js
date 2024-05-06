function Calculate(){
    var MedicineName = document.querySelector('input[name="MedicineName"]').value;
    console.log(MedicineName);
    document.getElementById("MedicineNameOut").innerHTML = MedicineName;

    var Morning = document.querySelector('input[name="Morning"]').value;
    var Afternoon = document.querySelector('input[name="Afternoon"]').value;
    var Night = document.querySelector('input[name="Night"]').value;
    var DailyTotalTablet = Number(Morning) + Number(Afternoon) + Number(Night);
    console.log(`${Morning} + ${Afternoon} + ${Night} = ${DailyTotalTablet}`);
    document.getElementById("DailyTotalTabletOut").innerHTML = DailyTotalTablet;

    var OwnedTablet = document.querySelector('input[name="OwnedTablet"]').value;
    console.log(OwnedTablet);
    document.getElementById("OwnedTabletOut").innerHTML = OwnedTablet;

    var ForBuy = document.querySelector('input[name="ForBuy"]').value;
    console.log(ForBuy);
    document.getElementById("ForBuyOut").innerHTML = ForBuy;

    var totalRequiredTablets = DailyTotalTablet * ForBuy;
    var haveToBuyTablets = totalRequiredTablets - OwnedTablet;
    console.log(haveToBuyTablets);
    document.getElementById("haveToBuyTabletsOut").innerHTML = haveToBuyTablets;
}