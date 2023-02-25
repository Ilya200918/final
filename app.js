function salary() {
    let padik = document.getElementById('padik').value
    let etash = document.getElementById('etash').value
    let kvartira = document.getElementById('kvartira').value
    document.getElementById('sum').innerText = (+padik * +etash * +kvartira)
    }
