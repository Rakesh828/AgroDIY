var potsQ, seedsQ, fertQ, cocoQ, total;

//calculate bill details
function calculate() {
    //notifocation
    let text = "Scroll down to see billing details"
    let lastMessage = "Amount payable on Delivery (Only Cash Accepted)"

    //get quantities
    let p = document.querySelector("#pots");
    let s = document.querySelector("#seeds");
    let f = document.querySelector("#fert");
    let c = document.querySelector("#coco");


    potsQ = (+p.value);
    seedsQ = (+s.value);
    fertQ = (+f.value);
    cocoQ = (+c.value);

    //calculate costs
    let potsT = potsQ * 70;
    let seedsT = seedsQ * 10;
    let fertT = fertQ * 100;
    let cocoT = cocoQ * 20;

    total = potsT + seedsT + fertT + cocoT + 15 + 80;

    //place values
    let element1 = document.querySelector(".text")
    let element2 = document.querySelector(".fMess")

    let pQ = document.querySelector(".pqt");
    let sQ = document.querySelector(".sqt");
    let fQ = document.querySelector(".fqt");
    let cQ = document.querySelector(".cqt");
    let mQ = document.querySelector(".mqt");

    let pT = document.querySelector(".ptot");
    let sT = document.querySelector(".stot");
    let fT = document.querySelector(".ftot");
    let cT = document.querySelector(".ctot");
    let mT = document.querySelector(".mtot");
    let dT = document.querySelector(".dtot");

    let t = document.querySelector(".total");

    element1.innerHTML = text
    element2.innerHTML = lastMessage

    pQ.innerHTML = potsQ
    sQ.innerHTML = seedsQ
    fQ.innerHTML = fertQ
    cQ.innerHTML = cocoQ
    mQ.innerHTML = 1

    pT.innerHTML = "₹" + potsT
    sT.innerHTML = "₹" + seedsT
    fT.innerHTML = "₹" + fertT
    cT.innerHTML = "₹" + cocoT
    mT.innerHTML = "₹ 15/-"
    dT.innerHTML = "₹ 80/-"

    t.innerHTML = "₹" + total

}

//place order
function order() {
    let fname = document.querySelector("#fname").value
    let lname = document.querySelector("#lname").value
    let phone = document.querySelector("#phone").value
    let email = document.querySelector("#email").value
    let address = document.querySelector("#address").value


    console.log(fname)
    console.log(lname)
    console.log(phone)
    console.log(email)
    console.log(address)
    console.log(potsQ)


    var data = {
        First_name: fname,
        Last_name: lname,
        Phone: phone,
        Email: email,
        Address: address,
        Pots: potsQ,
        Seeds: seedsQ,
        Fertilizer: fertQ,
        Cocopeat: cocoQ,
        Total_Amount_To_Be_Paid: total

    }


    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
        apiKey: "AIzaSyBbpeJZugk-wb71KB5KjtO4fhz75Tskd_w",
        authDomain: "agro-14288.firebaseapp.com",
        projectId: "agro-14288",
        storageBucket: "agro-14288.appspot.com",
        messagingSenderId: "494637372559",
        appId: "1:494637372559:web:bc35f4092fe082522e8cfa",
        measurementId: "G-7SZDKCDM4V"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var ref = firebase.database().ref("Orders");
    var p = false;

    ref.push(data).then(() => {
        window.location.href = './confirmation.html';
    });






}