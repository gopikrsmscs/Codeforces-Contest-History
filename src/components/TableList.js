import React,{Component} from 'react'
import Moment from 'react-moment';

class TableList extends Component{
  render(){
    return(
      <tr className="col-md-12">
      <td className="col-md-4">{this.props.data.name}</td>
      <td className="col-md-4">{this.props.data.phase}</td>
      <td><a href="https://codeforces.com/contests" class="btn btn-info" target="_blank" role="button">Link</a></td>
      <td className="col-md-4"><Moment unix>{this.props.data.startTimeSeconds}</Moment></td>
      </tr>
    )
  }

}
export default TableList
