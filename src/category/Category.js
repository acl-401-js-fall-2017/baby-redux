import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addCategory } from './actions';
class Category extends PureComponent {

  componentDidMount() {
    this.props.addCategory({ name: 'Food', budget: 200 });
    this.props.addCategory({ name: 'Data', budget: 150 });
    this.props.addCategory({ name: 'Rent', budget: 800 });
    this.props.addCategory({ name: 'Candles', budget: 3600 });
    this.props.addCategory({ name: 'Utility', budget: 150 });
  }

  render() {
    const { category } = this.props;
    console.log(category);
    return (
      <div>
        <table>
          <tbody>
            {category.map(c => <tr key={c._id}>
              <td>{c.name}</td>
              <td>{c.budget}</td>
            </tr>)}
          </tbody>
        </table>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    category: state
  };
}

export default connect(
  mapStateToProps,
  { addCategory }
)(Category);