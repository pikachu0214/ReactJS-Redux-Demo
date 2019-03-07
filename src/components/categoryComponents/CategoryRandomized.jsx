import React, { Component } from "react";
import CategoryItem from "./CategoryItem.";
import { connect } from "react-redux";

class CategoryRandomized extends Component {
  render() {
    let category = { id: 0, name: null, budget: null };
    let categoryList = this.props.categories.categoryList;
    if (categoryList && categoryList.length > 0) {
      let randomizedId = Math.floor(Math.random() * categoryList.length);
      category = categoryList[randomizedId];
    } else {
      return null;
    }
    return (
      <div>
        <h4>Add here Category of the day</h4>
        <CategoryItem item={category} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories
});

export default connect(
  mapStateToProps,
  null
)(CategoryRandomized);
