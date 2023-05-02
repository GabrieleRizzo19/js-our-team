const main = document.getElementById("main-wrapper");

const our_team = [

    {name: "Wayne Barnett", role: "Founder & CEO", img: "./img/wayne-barnett-founder-ceo.jpg"},
    {name: "Angela Caroll", role: "Chief Editor", img: "./img/angela-caroll-chief-editor.jpg"},
    {name: "Walter Gordon", role: "Office Manager", img: "./img/walter-gordon-office-manager.jpg"},
    {name: "Angela Lopez", role: "Social Media Manager", img: "./img/angela-lopez-social-media-manager.jpg"},
    {name: "Scott Estrada", role: "Developer", img: "./img/scott-estrada-developer.jpg"},
    {name: "Barbara Ramos", role: "Graphic Designer", img: "./img/barbara-ramos-graphic-designer.jpg"}

]

console.log(our_team);



for(let i=0; i < our_team.length; i++){
    // for(let key in our_team[i]){
    //     document.querySelector("body").innerHTML += `Valore: ${our_team[i][key]} <br>`;
    // }
    // document.querySelector("body").innerHTML += "<br>";

    main.innerHTML += `<div class="card mb-3 col-4">
                            <img class="w-100 rounded-3" src="${our_team[i].img}" alt="">
                            <div class="card-body">
                                <h4>${our_team[i].name}</h4>
                                <p>${our_team[i].role}</p>
                            </div>
                        </div>          
                    `
}