import React, { Component } from "react";
import CategoryItem from "./CategoryItem.";

export default class CategoryListItem extends Component {
  render() {
    return (
      <div>
        <CategoryItem item={this.props.item} />
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => this.props.deleteCategoryButtonClicked(this.props.id)}
        >
          X
        </button>
        
      </div>
    );
  }
}
