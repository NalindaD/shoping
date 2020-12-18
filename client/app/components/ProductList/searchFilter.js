import React, { useState } from 'react';
import { Input } from 'reactstrap';
import {Button} from '@material-ui/core'
import DroapDown from './DroapDown';
import Brands from './BrandsDroapDown'

const Example = (props) => {

    const [searchvalue, setsearchvalue] = useState({
      name:'',
      from:'',
      to:'',
      brand:''

    });


  const [relatedField, setrelatedField] = useState({
      name:true,
      price:false,
      item:false,

  });

 
console.log('searchvalue ',searchvalue);

 
  const getvalues=(value)=>{
    console.log('va ',value);

    setrelatedField({
      name:false,
      price:false,
      item:false,
      [value]:true
      

    });

}


console.log('relatedField ',relatedField);

 

 const priceReatedcomponent=()=>{

          return ( <>
          <Input type="text" placeholder='from'/>
          <Input type="text" placeholder='to'   />

          </>
          )

        }

        const naemReatedcomponent=()=>{

            return ( <>
            <Input type="text" placeholder={'Enter name'}   />
  
            </>)
  
          }

          const BrandReatedcomponent=()=>{
            return <Brands/>

        
        }
  
  const renderThiscomonet=()=>{
        if(relatedField.name){
          return naemReatedcomponent();

        }else if(relatedField.price){
            return priceReatedcomponent();

        }else if(relatedField.item){
          return BrandReatedcomponent();


        }

  

          }

  return (
      <div style={{
          display:'flex',
          marginBottom:'1.5rem',
          flexDirection:'row'
      }}>  
      <DroapDown
      setselecteditem={getvalues}
      />
      {renderThiscomonet()}
       
    
      <Button color="primary">search</Button>{' '}

      </div>
  
  );
}

export default Example;