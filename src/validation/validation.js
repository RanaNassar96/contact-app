export const validationForm = ( values , items= [] ) => {

    const errors={}

    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i

    Object.keys(values).map( value => {
        switch (value) {
            case 'name':
                if(!values.name){
                    errors.name = 'name is required';
                }
            case 'email':
                if(!values.email){
                    errors.email = 'email is required';
                }else if(!regex.test(values.email)){
                    errors.email = 'email is not valid a format';
                }else if( items.find( item => item.email == values.email ) ){
                    errors.email = 'email is already taken';
                }
            case 'phone':
                 if(!values.phone){
                    errors.phone = 'phone is required';
                }else if(values.phone.length < 9){
                    errors.phone = 'password contain at least 9 character';
                }  
        
            default:
                return errors;
        } 
    })

    return errors;
}


