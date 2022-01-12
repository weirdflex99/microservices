class AgeCalculator{
    constructor() {}
    getAge(data){
        if(data){
            //console.log('date'+ data);
            var today = new Date();
            var birthDate = new Date(data);
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
                if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
                {
                    age--;
                }
        return age;
        }else{
         return false;
        }
    }

}
module.exports = AgeCalculator;