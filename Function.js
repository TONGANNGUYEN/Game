function Node() {
    var x = Math.floor(Math.random() * 6) + 1;  
    var y = Math.floor(Math.random() * 6) + 1;
    var z = Math.floor(Math.random() * 6) + 1;

    switch (x) {
        case 1:
            document.getElementById("node1").src= "images/Bau.jpg" ;
            break;
        case 2:
            document.getElementById("node1").src= "images/Cua.jpg" ;
            break;
        case 3:
            document.getElementById("node1").src= "images/Tom.jpg" ;
            break;   
        case 4:
            document.getElementById("node1").src= "images/Ca.jpg" ;
            break;  
        case 5:
            document.getElementById("node1").src= "images/Ga.jpg" ;
            break;  
        case 6:
            document.getElementById("node1").src= "images/Nai.jpg" ;
            break;          
        default:
            break;
    }
    switch (y) {
        case 1:
            document.getElementById("node2").src= "images/Bau.jpg" ;
            break;
        case 2:
            document.getElementById("node2").src= "images/Cua.jpg" ;
            break;
        case 3:
            document.getElementById("node2").src= "images/Tom.jpg" ;
            break;   
        case 4:
            document.getElementById("node2").src= "images/Ca.jpg" ;
            break;  
        case 5:
            document.getElementById("node2").src= "images/Ga.jpg" ;
            break;  
        case 6:
            document.getElementById("node2").src= "images/Nai.jpg" ;
            break;          
        default:
            break;
    }
    switch (z) {
        case 1:
            document.getElementById("node3").src= "images/Bau.jpg" ;
            break;
        case 2:
            document.getElementById("node3").src= "images/Cua.jpg" ;
            break;
        case 3:
            document.getElementById("node3").src= "images/Tom.jpg" ;
            break;   
        case 4:
            document.getElementById("node3").src= "images/Ca.jpg" ;
            break;  
        case 5:
            document.getElementById("node3").src= "images/Ga.jpg" ;
            break;  
        case 6:
            document.getElementById("node3").src= "images/Nai.jpg" ;
            break;          
        default:
            break;
    }
}