let set = prompt('Assalom aleykum xurmatli mijoz  ismingizni kiriting')
alert('Salom  ' + set.toUpperCase())
let work = prompt('Jinsizni kiriting \n Erkak / Ayol')
if (work === 'Ayol') {
 let v =   prompt(set + ' Siktirganmisiz ?')
    if (v === 'ha') {
        alert('Zorku\nMangayam berasmi ?')
    }else if (v === 'yoq') {
        alert('amizga eshshshe siksn ' + set)
    }
}
if(work === 'Erkak'){
   alert(set + ' Kot bolekansiza ?') 

}

do{
     work = prompt('Kotligizzi tan olasmi ? \nTan obqoyvur erke ')
}while(work !='ha'){
    alert('Ozinam blarkansanu chort !')
}
