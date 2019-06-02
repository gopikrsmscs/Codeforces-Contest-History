import React, { Component } from 'react';
import axios from 'axios';
import '/ReactJs/contest/src/App.css';
import TableList from 'TableList'
class Home extends Component {
  constructor(){
    super()
    this.state = {
      datas: []
    }
  }
  componentDidMount() {
    axios.get(`https://codeforces.com/api/contest.list?`)
   .then(res => {
     const {status,result} = res.data;
     this.setState({
       datas : result
     });
   });
 }
  render() {
    return (
      <div className="container">
      <h1 className="textalign">Codeforces Contest History</h1>
      <table className="table">
    <thead>
      <tr className="col-md-12">
        <th className="col-md-3">Contest Name</th>
        <th className="col-md-3">Phase</th>
        <th className ="col-md-3">Link</th>
        <th className="col-md-3">StartDate</th>
      </tr>
    </thead>
    <tbody>
     {this.state.datas.map(data => <TableList data= {data}/>)}
    </tbody>
  </table>
  </div>
    );
  }
}

export default Home;
