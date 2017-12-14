import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { loadCategories, addCategory, updateCategory, removeCategory } from './actions';
import CategoryForm from './CategoryForm';
import 'bulma/css/bulma.css';
import { ClipLoader } from 'react-spinners';

class Category extends PureComponent {

  componentDidMount() {
    this.props.loadCategories();
  }

  handleUpdate = category => {
    const { _id, name, budget } = category;
    this.props.updateCategory({ _id, name, budget });
  }

  handleAdd = category => {
    const { name, budget } = category;
    this.props.addCategory({ name, budget });
  }

  handleRemove = category => {
    this.props.removeCategory(category._id);
  }

  render() {
    const { category, loading, error } = this.props;

    const categories = (error) ? <h5 className="error">{error}</h5> : (
      <table>
        <tbody>
          <tr><td><CategoryForm text="Add"
            onComplete={this.handleAdd}/></td></tr>
          {category.map(c => <tr key={c._id}>
            <td>{c.name}</td>
            <td>{c.budget}</td>
            <td><CategoryForm category={c} text="Update"
              onComplete={this.handleUpdate}/></td>
            <td><button onClick={() => this.handleRemove(c)}>X</button></td>
          </tr>)}
        </tbody>
      </table>
    );

    return (
      <div className='content is-medium'>
        {loading && <ClipLoader color="#42f4b6"/> }
        {categories}
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    category: state.category,
    loading: state.loading,
    error: state.error
  };
}

export default connect(
  mapStateToProps,
  { loadCategories, addCategory, updateCategory, removeCategory }
)(Category);