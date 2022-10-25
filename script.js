const cars = [{
    name: "A-class",
    pic: "a-class.jpg",
    discreption: "The Mercedes-Benz A-Class is a subcompact car produced by the German automobile manufacturer Mercedes-Benz as the brand's entry-level vehicle. The first generation (internally coded W168) was introduced in 1997, the second generation (W169) in late 2004 and the third generation (W176) in 2012. The fourth generation model (W177), which was launched in 2018, marked the first time the A-Class was offered in the United States and Canada.[1] This fourth generation A-Class is also the first to be offered both as a hatchback (W177) and sedan (V177) Originally manufactured as a five-door hatchback in 1997, the second generation W169 introduced a three-door hatchback. Having grown by 68 cm (27 in) since the original model, the 2012 third generation A-class was longer than the first-generation B-class. The A-Class may be referred to colloquially as the 'Baby Benz', a term Mercedes has used for the 1982 Mercedes 190 (W201), their first compact executive car model."
},
{
    name: "B-class",
    pic: "b-class.jpg",
    discreption: "The Mercedes-Benz B-Class is a luxury car manufactured and marketed by Mercedes-Benz since 2005. Based on the A-Class with larger dimensions, the European New Car Assessment Programme (Euro NCAP) classifies it as a small MPV.[2] As of December 20, 2013, delivery of B-Class vehicles reached 1 million since its launch in 2005."
},
{
    name: "C-class",
    pic: "c-class.jpg",
    discreption: "The Mercedes-Benz C-Class is a series of compact executive cars produced by Mercedes-Benz Group AG. Introduced in 1993 as a replacement for the 190 (W201) range, the C-Class was the smallest model in the marque's line-up until the W168 A-Class arrived in 1997. The C-Class has been available with a \"4MATIC\" four-wheel drive option since 2002. The third generation (W204) was launched in 2007 while the current W206 generation was launched in 2021. Initially available in sedan and a station wagon configurations, a fastback coupé (SportCoupé) variant followed and was later renamed to Mercedes-Benz CLC-Class. It remained in production until 2011 when a new W204 C-Class coupé replaced it for the 2012 model year."    
},
{
    name: "S-class",
    pic: "s-class.jpg",
    discreption: "The Mercedes-Benz S-Class, formerly known as Sonderklasse (German for \"special class\", abbreviated as \"S-Klasse\"), is a series of full-sized luxury sedans, limousines and armored sedans produced by the German automaker Mercedes-Benz, a division of the German company Mercedes-Benz AG. The S-Class is the designation for top-of-the-line Mercedes-Benz models and was officially introduced in 1972 with the W116, and has remained in use ever since. The S-Class is the flagship vehicle for Mercedes-Benz. The S-Class has debuted many of the company's latest innovations, including drivetrain technologies, interior features, and safety systems (such as the first seatbelt pretensioners).[1] The S-Class has ranked as the world's best-selling luxury sedan.[2] In automotive terms, Sonderklasse refers to \"a specially outfitted car.\" Although used colloquially for decades,[citation needed] following its official application in 1972, six generations of officially named S-Klasse sedans have been produced. In 1981, the two-door, four-seat S-Class, designated as SEC, was introduced, sharing the petrol V8 engines with its four-door version, W126. After the introduction of a new nomenclature scheme, SEC was simply renamed as S-Class Coupé. For the 1996 model year, the coupé was separated from the S-Class line and named as new CL-Class (in line with other two-door models: CLK, SL, and SLK); however, the CL-Class was reintegrated into the S-Class model line (same with CLK becoming E-Class Coupé and Cabriolet). The first-ever S-Class convertible since 1972, internally named A217, was introduced and became a one-generation model only. After the end of W222 production in 2020, the successors to the C217 coupé and A217 convertible are not planned, citing the low demand for those models and stronger demand for SUV models."    
}
]
let nav =`<ul>`
    for(let i =0;i <cars.length; i++){
    nav += `<li><a href="#" id=car${i}>${cars[i].name}</a></li>`
    }
    nav +=`</ul>`
    
    document.getElementsByTagName("nav")[0].innerHTML = nav




let selected = "A-class"




for(let i =0;i <cars.length; i++){
    document.getElementById(`car${i}`).addEventListener("click", function(){
        selected = cars[i].name
        update()
    });
}



function update(){
    
    let selectedCar = cars.find(isSelected)

    document.getElementById("picture").innerHTML = `<img src="${selectedCar.pic}" alt="${selected}">`

    document.getElementById("discreption").innerHTML = `<p>${selectedCar.discreption}</p>`
    console.log(selectedCar);
}
function isSelected(car) {
    return car.name === selected;
  }




