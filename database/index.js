const fs = require('fs')



class DB {


    constructor(){

    }



yaz(veri, değer){
    if (!değer) throw new TypeError(" Girmediniz")
    const dosya = JSON.parse(fs.readFileSync('database.json', 'utf8'))
    dosya [veri] = değer
    return fs.writeFileSync('database.json', JSON.stringify(dosya, null, 1))

}



bul(veri){
    const dosya = JSON.parse(fs.readFileSync('database.json', 'utf8'))
    if (!dosya[veri]) throw new TypeError('Yazdığınız Veri Bulunmadı')
    return dosya[veri]  

}

kontrol(veri){
    const dosya = JSON.parse(fs.readFileSync('database.json', 'utf8'))
    return dosya[veri] ? true : false


}



sil(veri) {

    const dosya = JSON.parse(fs.readFileSync('database.json', 'utf8'))
    if (!dosya[veri]) throw new TypeError('Yazdığınız Veri Bulunmadı')
    delete dosya[veri]
    return fs.writeFileSync('database.json', JSON.stringify(dosya, null, 2))

}


yedekle(dosyaAdı){
    if (!dosyaAdı) throw new TypeError("Dosya Adı Girmediniz")
    const dosya = JSON.parse(fs.readFileSync('database.json', 'utf8'))
    return fs.writeFileSync(`${dosyaAdı}.json`, JSON.stringify(dosya, null, 2))

}


  
  
  
  
  
  topla(veri, değer){
    if (!veri) throw new TypeError("Veri Girmediniz")
    if (typeof değer !== 'number') throw new TypeError("Lütfen Değer Olarak Bir Sayı Giriniz")
    if (!this.kontrol(veri)) throw TypeError("Veri Olarak Girdiğiniz Değer Veritabanında Bulunmamaktda")
    if (typeof this.bul(veri) !== 'number') throw new TypeError('Sayı Ekleyeceğiniz Bir Değer Sayı Olmalı')
    const dosya = JSON.parse(fs.readFileSync('database.json', 'utf8'))
    dosya[veri] += değer
    return fs.writeFileSync('database.json', JSON.stringify(dosya, null, 2))
  }
  
  
  
  
  çıkar(veri, değer) {
     if (!veri) throw new TypeError("Veri Girmediniz")
    if (typeof değer !== 'number') throw new TypeError("Lütfen Değer Olarak Bir Sayı Giriniz")
    if (!this.kontrol(veri)) throw TypeError("Veri Olarak Girdiğiniz Değer Veritabanında Bulunmamaktda")
    if (typeof this.bul(veri) !== 'number') throw new TypeError('Sayı Ekleyeceğiniz Bir Değer Sayı Olmalı')
    const dosya = JSON.parse(fs.readFileSync('database.json', 'utf8'))
    dosya[veri] -= değer
    return fs.writeFileSync('database.json', JSON.stringfy(dosya, null, 2))
  }
  
  

  
  sıfırla(veri) {
    
    const dosya = JSON.parse(fs.readFileSync('database.json', 'utf8'))
    return fs.writeFileSync('database.json', JSON.stringify({}, null, 2))
    
  }
  
  
  
}






module.exports = new DB()