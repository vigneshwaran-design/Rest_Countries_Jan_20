let h1=document.createElement('h1')
h1.innerText='Weather Reports'
h1.setAttribute('id','title')
h1.classList.add("text-center")
document.body.appendChild(h1)


let main=document.createElement('div')
main.classList.add("container")
document.body.appendChild(main)


let row=document.createElement('div')
row.classList.add('row')
main.appendChild(row)

fetch("https://restcountries.com/v3.1/all")
.then((d)=>d.json())
.then((data)=>{
    console.log(data);
    for(let i=0;i<data.length;i++){
        let col=document.createElement('div')
        col.classList.add('col-sm-6','col-md-4','col-lg-4','col-xl-4','my-3')
        row.appendChild(col)
        //card
        let div_card=document.createElement('div')
        div_card.classList.add('card','h-100')
        col.appendChild(div_card)
        //card header
        let div_head=document.createElement('div')
        div_head.classList.add('card-header','text-center')
        let tit=document.createElement('h5')
        tit.classList.add('card-header','text-light')
        tit.innerHTML=`${data[i].name.common}`
        div_head.appendChild(tit)
        div_card.appendChild(div_head)
        // card img
        let img=document.createElement('img')
        img.classList.add('card-img-top','h-50','w-100')
        img.setAttribute('src',`${data[i].flags.svg}`)
        div_card.appendChild(img)

        // card body
        let div_body=document.createElement('div')
        div_body.classList.add('card-body')
        div_card.appendChild(div_body)
        //inside body text
        let d1=document.createElement('div')
        d1.classList.add('card-text')
        div_body.appendChild(d1)
        let div_1 = document.createElement('div')
        div_1.innerHTML=`Region:${data[i].region}`

        let d2=document.createElement('div')
        d2.classList.add('card-text')
        div_body.appendChild(d2)
        let div_2 = document.createElement('div')
        div_2.innerHTML=`Capital: ${data[i].capital}`

        let d3=document.createElement('div')
        d3.classList.add('card-text')
        div_body.appendChild(d3)
        let div_3 = document.createElement('div')
        div_3.innerHTML=`Country Code: ${data[i].fifa}`

        d1.appendChild(div_1)
        d2.appendChild(div_2)
        d3.appendChild(div_3)

        let btn=document.createElement('div')
        btn.classList.add('border','m-2','p-2','but')
        btn.setAttribute('id','div_btn')
        btn.setAttribute('onclick',`check('${data[i].capital}','val${i}')`)
        btn.innerHTML="Click for Weather"
        d3.appendChild(btn)

        let cel=document.createElement('div')
        cel.innerHTML=`<div id=val${i}></div>`
        d3.appendChild(cel)

    } 
})
.catch((er)=>{
    console.log("Error");
})




function check(city,id_val){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1d3ece4bccdf110e7bffdbe285964c0a`)
    .then((d)=> d.json())
    .then((data)=>{
    let w=(data.main.temp-273.15).toFixed(1)
    document.getElementById(id_val).innerHTML=`${w}` + `<sup>o</sup> C`+ `</br>` + `${data.weather[0].main}`
    

    })
}