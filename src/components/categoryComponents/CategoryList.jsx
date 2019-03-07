import React, { Component } from "react";
import { fetchAllCategories, deleteCategory } from "../../actions/category";
import CategoryListItem from "./CategoryListItem";
import { connect } from "react-redux";

class CategoryList extends Component {
  componentDidMount() {
    //this.setState({ categories: fetchTestCategories() });
    this.props.categoriesFetchAll();
  }
  deleteCategoryButtonClicked = id => {
    this.props.deleteCategoryLocal(id);
    console.log("Deleted id: " + id);
  };

  render() {
    return (
      <div className="container">
        <h4>List of Categories</h4>
        <ol>
          {/*Example:  {this.props.foo.categoryList.map(item => (
            <CategoryListItem key={item.id} item={item} />
          ))}*/}
          {this.props.categories.categoryList.map(item => (
            <CategoryListItem
              key={item.id}
              item={item}
              deleteCategoryButtonClicked={this.deleteCategoryButtonClicked}
              id={item.id}
            />
          ))}
        </ol>
      </div>
    );
  }
}

//sends action to redux store
const mapDispatchToProps = dispatch => ({
  categoriesFetchAll: () => {
    dispatch(fetchAllCategories());
  },
  deleteCategoryLocal: id => {
    dispatch(deleteCategory(id));
  }
});

{
  /*
  const mapStateToProps = state => ({
  foo: state.categories
});*/
}
const mapStateToProps = state => ({
  categories: state.categories
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList);

//Last line action
//export default prepareToConnect(mapStateToProps)(CategoryList)
//export default doActualConnect(CategoryList) sometimes call declaration

//start straight with the delete or 7 questions to ask
