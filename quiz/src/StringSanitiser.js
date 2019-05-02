import './App.css';

function StringSanitiser (string) {
 var str = string.toLowerCase();
 return str.charAt(0).toUpperCase() + str.slice(1);
 
}

export default StringSanitiser;