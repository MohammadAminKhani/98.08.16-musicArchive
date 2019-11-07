import React, { Component } from 'react'
import PropTypes from 'prop-types';

export const Add = ({date,music,like,submit1}) =>{
  function submit(e) {e.preventDefault();
    submit1({
      date:ref1.value,
      music: ref2.value,
      like: ref3.checked
    })
    ref1.value = ""
    ref2.value = ""
    ref3.checked = false
  }
  let ref1,ref2,ref3
  return( <div>
<form onSubmit={submit}>
  <div >
  <label htmlFor="iddate">date</label>
  <input id="iddate" type="text" name="date" ref={ x => ref1 = x }
  defaultValue={date} required autoComplete='off'/>
  </div>
  <div >
    <label htmlFor="idmusic">music</label>
    <input id="idmusic" type="text" name="music" ref={ x => ref2 = x }
    defaultValue={music} required autoComplete='off' />
  </div>
  <div >
    <input id="idlike" type="checkbox" name="like"
    defaultChecked={like} ref={ x => ref3 = x } />
    <label htmlFor="idlike">I like this music!</label>
  </div>
  <input type='submit' value="OK"/>
</form></div>)}
Add.defaultProps={
  date: new Date().toLocaleDateString(),
  music: "misician - title",
  like: true
}
Add.propTypes={
  date: PropTypes.string.isRequired,
  music: PropTypes.string.isRequired,
  like: PropTypes.bool
}
