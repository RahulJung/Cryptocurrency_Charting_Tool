import React from 'react';
import axios from 'axios';
import {Line} from 'react-chartjs-2';

class App extends React.Component {
  constructor() {
    super();
    this.state ={
      dataKey: [],
      dataValue: []
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount(){
    this.getData();
  }

  getData(){
    axios.get(`/bpi`)
    .then((res) => {
      let key = Object.keys(res.data.bpi);
      let value = Object.values(res.data.bpi)
      this.setState({
        dataKey: key,
        dataValue: value,
      });
    })
    .catch((err) => {
      console.log('Error getitng data from the server', err);
    });
  }

  render() {
    const state = {
      labels: this.state.dataKey,
      datasets: [
        {
          label: 'Price',
          fill: true,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: this.state.dataValue
        }
      ]
    }
    return (
      <div>
        <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'Bitcoin Price Index of 2020 (USD$)',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        <div>Powered by CoinDesk</div>
      </div>
    );
  }



}

export default App;

