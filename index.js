var password = "admin123@@";
function passcheck() {
    if(document.getElementById('admin').value !=password) {
        alert('Wrong Password, Try Again.');
        return false;
    }
    if(document.getElementById('admin').value == password) {
        alert('Correct Password. Click OK to enter website.');
    }
}