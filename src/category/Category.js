import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addCategory, updateCategory } from './actions';
import CategoryForm from './CategoryForm';
import 'bulma/css/bulma.css';
class Category extends PureComponent {

  componentDidMount() {
    this.props.addCategory({ name: 'Food', budget: 200 });
    this.props.addCategory({ name: 'Data', budget: 150 });
    this.props.addCategory({ name: 'Rent', budget: 800 });
    this.props.addCategory({ name: 'Candles', budget: 3600 });
    this.props.addCategory({ name: 'Utility', budget: 150 });
  }

  handleUpdate = category => {
    this.props.updateCategory(category);
  }

  handleAdd = category => {
    this.props.addCategory(category);
  }

  render() {
    const { category } = this.props;
    return (
      <div className='content is-medium'>
        <table>
          <tbody>
            <tr><td><CategoryForm text="Add"
              onComplete={this.handleAdd}/></td></tr>
            {category.map(c => <tr key={c._id}>
              <td>{c.name}</td>
              <td>{c.budget}</td>
              <td><CategoryForm category={c} text="Update"
                onComplete={this.handleUpdate}/></td>
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
  { addCategory, updateCategory }
)(Category);