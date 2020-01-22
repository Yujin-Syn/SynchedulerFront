import React from 'react';
import MaterialTable from 'material-table';

export default function TaskSheet() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Task', field: 'task' },
      { title: 'Start Date', field: 'startdate', type: 'datetime' },
      { title: 'End Date', field: 'enddate', type: 'date' },
      {
        title: 'Category',
        field: 'category',
        lookup: { 0: 'Development', 1: 'Consulting', 2: 'Modeling'},
      },
    ],
    data: [
      { name: 'Inhwan', task: 'Server Development', startdate: '2020-01-22 14:00', enddate:'2020-01-22 15:00', category:0,},
      { name: 'Inhwan', task: 'Server Development', startdate: '2020-01-22', enddate:'2020-01-22', category:0,},
      { name: 'Inhwan', task: 'Server Development', startdate: '2020-01-22', enddate:'2020-01-22', category:0,},
      { name: 'Inhwan', task: 'Server Development', startdate: '2020-01-22', enddate:'2020-01-22', category:0,},
      { name: 'Inhwan', task: 'Server Development', startdate: '2020-01-22', enddate:'2020-01-22', category:0,},
    ],
  });

  return (
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}