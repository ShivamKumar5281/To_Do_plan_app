



import React, { Component } from 'react'
import "./write.css"



class Write extends Component {
   handleinput=this.handleinput.bind(this);
   addlist=this.addlist.bind(this);
   delete_list=this.delete_list.bind(this);


  state = {
      userinput: " " ,
      list: []

   }




   handleinput(e) {
      // a= e.target.value;
      console.log(e.target.value)
      this.setState(
         { userinput: e.target.value }
         );
           

   }
   addlist() {

      this.state.list.push(this.state.userinput);
      this.setState({ userinput: "" });

   }
   delete_list(id)
   {
     const oldItems= [...this.state.list];
     const items = oldItems.filter((element,index) =>{
      return index!==id
     })
     this.setState({list:items});
   }


   render() {
      return (

         <>

            <div className="write">
               <input type="text" value={this.state.userinput} name="input " placeholder="Write today's plan" className="input" onChange={this.handleinput} />

               <button onClick={this.addlist}> Add <span> + </span></button>


            </div>
            <div className="container">
               {
               /* <ul>
                  {
                     this.state.list.map(item => {
                        return (
                           <li  >{item} <button className="remove" onClick={this.delete_list}>Remove</button></li>
                        )
                     })
                  }
               </ul> */
               
               
               <ul>
               {
                  this.state.list.map((item,id) => {
                     return (
                        <li  key={id}>{item}  <button className="remove" onClick={()=>{this.delete_list(id)}}>Remove</button></li>
                     )
                  })
               }
            </ul>
               
               
               
               
               }

            </div>



         </>




      )
   }



}


export default Write;


// onclick = {()=> {props.senddata(props.id)}}