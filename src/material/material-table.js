import React from 'react';
import MaterialTable from 'material-table'

export const X2 = () => {

  const [state, setState] = React.useState({
    columns: [
      { title: 'Date', field: 'date' },
      { title: 'Music', field: 'music' },
      { title: 'Like', field: 'like', type: 'boolean' },
    ],
    data: [
      {date:'98.08.16',music:'Selena - heart wants',like: true  },
      {date:'98.08.17',music:'justin - first love',like: false },
      {date:'98.08.16',music:'Selena - heart wants',like: true  },
      {date:'98.08.17',music:'justin - first love',like: false },
      {date:'98.08.16',music:'Selena - heart wants',like: true  },
      {date:'98.08.17',music:'justin - first love',like: false },

    ],
  });

  return (
    <MaterialTable
    title='me'
      columns={state.columns}
      data={state.data}
    />
  ); }
