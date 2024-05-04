import React from 'react'

export default function Alert(props) {
  const Capitalize = (word)=> {
    if(word == 'danger') word="Error";
    const lower = `${word.toLowerCase()}`;
    return  `${lower.charAt(0).toUpperCase()}${lower.slice(1)}`;
  }
  let alertClassName = '';
  if (props.alert) {
    alertClassName = `alert-${props.alert.type === 'danger' ? 'red' : 'blue'}`;
  }
  return (
    <div>
        {props.alert && <div className = {` ${alertClassName} p-4 mb-4 text-sm text-blue-800 flex items-center justify-center bg-blue-50 dark:bg-gray-800 dark:text-blue-800 h-10`} role="alert">
          <span className="font-medium">{Capitalize(props.alert.type)}</span>  : {props.alert.msg}
        </div>}
    </div>
  )
}
