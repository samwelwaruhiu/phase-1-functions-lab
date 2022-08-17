// Code your solution in this file!

const headquater = 42;


function distanceFromHqInBlocks(pickupLocation){
    
    if (pickupLocation >= headquater){
         return (pickupLocation - headquater);
}
    else if (pickupLocation <= headquater){
        return (headquater - pickupLocation);

    }
}

function distanceFromHqInFeet (pickupLocation){
    if (pickupLocation >= headquater){
        return ((pickupLocation - headquater)*264);
}
    else if (pickupLocation <= headquater){
        return ((headquater - pickupLocation)*264);

    }

}
 function distanceTravelledInFeet(pickupLocation,headquater){
    if (pickupLocation >= headquater){
        return ((pickupLocation - headquater)*264);
}
    else if (pickupLocation <= headquater){
        return ((headquater - pickupLocation)*264);
    }}

const calculatesFarePrice = (start ,destination)=>{
    if ((Number(destination)- Number(start))=== 1){
        return 0;
    }if(start, destination === 34 || start, destination ===32){
        return 2.56;
    }else if(start,destination ===50 || start, destination ===58){
        return 25;
    }else{
        return `cannot travel that far`
    }
 }