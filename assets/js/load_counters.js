try{
    fetch( "https://pack4back.com/petice/count")
    .then( (data) => data.json() )
    .then( (data) => {
       if ( data && data.gov ){
            document.getElementById("sign_gov").innerHTML +=  " ( "+ data.gov + " )";
       }
       if ( data && data.petice ){
            document.getElementById("sign_petice").innerHTML +=  " ( "+ data.petice + " )";
       }
    })
    .catch( (error) => {
        //console.error('Error:', error);
        //Counters are optional, so we can ignore the error
    })
}
catch(err){
    //console.error(err);
    //something went wrong, for example IE 11
}