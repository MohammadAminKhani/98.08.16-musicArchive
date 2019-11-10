import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Favorite from '@material-ui/icons/Favorite'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import { RootRef } from '@material-ui/core';

export const Add = ({date,music,like,submit1}) =>{
  function submit(e) {e.preventDefault();
    submit1({
      date:ref1.value,
      music: ref2.value,
      like: ref3.checked
    })
    console.log(ref3.checked);
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
  <FormControlLabel
  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />}
  name="like" defaultChecked={like} rootRef={ x => ref3 = x }  />}
  label="like the music?" />

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
