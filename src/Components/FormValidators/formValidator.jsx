export default function formValidator(event) {
  let {name, value} = event.target
  switch(name){
    case 'name':
    case 'color':
        if(value.length===0)
            return name+" Field is Mendatory"
        else if(value.length<3 || value>50)
            return name + " Length Must Be 3-50 Charactors"
        else 
        return ""
    
        case 'size':
    if(value.length===0)
        return name +" Field is Mendatory"
    else if(value < 3 || value>50)
        return name + " Length Must Be less then 50 Charactors"
    else 
        return ""

        
        case 'discount':
        if(value.length===0)
            return name +" Field is Mendatory"
        else if(value.length< 0 || value>100)
            return name + "Discount Must Be Between 0 to 100"
        else 
        return ""
        
        case 'basePrice':
        if(value.length===0)
            return name +" Field is Mendatory"
        else if(value < 1)
            return name + "Base Price Must Be Greater then 1"
        else 
        return ""
        
        case 'quantity':
        if(value.length===0)
            return name +" Field is Mendatory"
        else if(value < 0)
            return name + "Base Price Must Be Greater than or Equal to 0"
        else 
        return ""
    

    case 'message':
        if(value.length===0)
            return name+" Field is Mendatory"
        else if(value.length<50)
            return name + " Length Must Be Greater then 50 Charactors"
        else 
        return ""
    default:
        return ""
  }
}
