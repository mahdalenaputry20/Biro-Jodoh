document.getElementById("hal-2").style.display = "none";
document.getElementById("hal-3").style.display = "none";

let dataJomblo = [
  {
    name: 'Mahdalena Putri',
    age: 21,
    gender: 'wanita',
    hobi: ['nonton', 'rebahan', 'ngoding']
  },
  {
    name: 'Muhammad Farhat',
    age: 20,
    gender: 'pria',
    hobi: ['nonton', 'ngoding', 'olahraga']
  },
  {
    name: 'Meira Safira',
    age: 21,
    gender: 'wanita',
    hobi: ['makeup', 'nonton', 'rebahan']
  },
  {
    name: 'Naufal Hadi',
    age: 20,
    gender: 'pria',
    hobi: ['ngoding', 'olahraga', 'games']
  },
  {
    name: 'Khaled Hassan Muhammad',
    age: 17,
    gender: 'pria',
    hobi: ['nyanyi', 'ngoding', 'games']
  },
  {
    name: 'Rahayu Manalu',
    age: 21,
    gender: 'wanita',
    hobi: ['rebahan', 'makeup', 'games']
  },
  {
    name: 'Afrizal tabah',
    age: 23,
    gender: 'pria',
    hobi: ['nyanyi', 'nonton', 'games']
  }
]

// ------------------------------------------
// let home = window.location.href = 'home.html'
let hasil = {}

let userLogin = document.getElementById('login')

userLogin.onclick = function() {
  let nama = document.getElementById('inputnama').value
  let umur = document.getElementById('inputumur').value
  let jk = document.getElementsByName('jk')

    if (!nama) {
      alert('Masukan nama kakak!!')
    } else if (!umur) {
      alert('Masukin dulu umur kakak!')
    }

    var jkValue = false;
    for(var i=0; i<jk.length;i++){
        if(jk[i].checked == true){
            jkValue = true; 
            jk = jk[i].value   
        }
    }
    if(!jkValue){
        alert("Pilih Jenis Kelamin kakak!");
        return false;
    }

  let checkbox = document.getElementsByName('inputhobi')

  let hobi = []
  for(var i = 0; i < checkbox.length; i++){
      if(checkbox[i].checked){
          hobi.push(checkbox[i].value)
      }

  }

  hasil['nama'] = nama
  hasil['umur'] = umur
  hasil['jk'] = jk
  hasil['hobi'] = hobi

  document.getElementById("hal-1").style.display = "none";
  document.getElementById("hal-2").style.display = "block";
}

// ------------------------------------------------------

// for (let i = 0; i < dataJomblo.length; i++) {
//     let nama = dataJomblo[i].name
//     let umur = dataJomblo[i].age
//     let jk = dataJomblo[i].gender
//     let hobii = dataJomblo[i].hobi
  
//     for (let key in hasil) {
//       let name = hasil
   
//     }
//   //   for (let j = 0; j < hobii.length; j++) {
//   //     // if (conditio) {
//   //          console.log(hasil.hobi[i]);
//   //     // }
      
//   //   }
    
//   }



