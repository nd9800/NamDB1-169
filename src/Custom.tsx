import React from "react";
import './Custom.css';
export default function Custom()
{
    let [list,changeArr] = React.useState<string[]>([]);
    let [txt,changeText] = React.useState<string>('');

    React.useEffect(()=>{
        console.log(list);
    },[list])
    const HandleButton = () =>{

        list.length<20 ? changeArr([...list,txt]):changeArr(list);

    }
    const removeTodo = (id : number) =>{
        const newList = [...list];
        newList.splice(id,1);
        changeArr(newList);
    }

    return(<div>
        <h1>This is a ToDo App</h1>
        <input type='text' id='ip' onChange={(e)=>{changeText(e.target.value)}} />
        <button onClick={HandleButton}>Add</button>
        {list.map((todo,id)=>(
            <div className ='list' key={id}>
                <p>Task{id+1}: </p>
                <h4>{todo}</h4>
                <button onClick={()=>removeTodo(id)}>Delete</button>
            </div>
        ))
        }
    </div>)
}