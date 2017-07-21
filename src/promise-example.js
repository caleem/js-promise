export default class {

	constructor(){

      	console.log('Test promise resolved state => ');	

		this.simplePlainPromise(true)
			.then((success) => {
      			console.log('RESOLVED => '+success);
    		}).catch((failure) => {
      			console.log('REJECTED => '+failure);
    		});

      	console.log('Test promise reject state => ');	

  		this.simplePlainPromise(false)
			.then((success) => {
      			console.log('RESOLVED => '+success);
    		}).catch((failure) => {
      			console.log('REJECTED => '+failure);
    		});  		 
	}

	/*
		function name: simplePlainPromise
		description: return the promise based on a flag value
		true: represents success
		false: represents failure
	*/
	simplePlainPromise(flag){
		return new Promise(function(success, failure){
	    	if(flag) {
	      		success('Promise resolved for => flag = '+flag);
	    	} else {
	      		failure('Promise failed for => flag = '+flag);   
	    	}
		});
	}
};