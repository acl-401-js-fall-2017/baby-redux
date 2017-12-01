import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addCategory, updateCategory, removeCategory } from './actions';
import CategoryForm from './CategoryForm';
import CategoryItem from './CategoryItem';

class Dashboard extends PureComponent {

  componentDidMount() {
    this.props.addCategory({ name: 'Abc', budget: 111 });
    this.props.addCategory({ name: 'Def', budget: 222 });
    this.props.addCategory({ name: 'Ghi', budget: 333 });
  }
  handleAdd = category => {
    this.props.addCategory(category);
  }
  
  handleUpdate = category => {
    this.props.updateCategory(category);
  }
  
  handleRemove = id => {
    this.props.removeCategory(id);
  }
  render() {
    const { category } = this.props;
    return(
      <div>
        <CategoryForm text="Add" onComplete={this.handleAdd}/>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {category.map((category) => (
              <CategoryItem category={category} onRemove={this.handleRemove} onUpdate={this.handleUpdate} key={category._id}/>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return{ 
    category: state
  };
}


export default connect(
  mapStateToProps,
  { addCategory, updateCategory, removeCategory }
)(Dashboard);