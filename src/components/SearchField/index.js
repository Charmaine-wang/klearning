/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import Select from "react-select";

const content = {
  dans: { videos: ["dansvideo 1", "dansvideo 2"] },
  foto: { videos: ["fotovideo 1", "fotovideo 2"] },
  film: { videos: ["filmvideo 1", "filmvideo 2"] }
};

const options = [
  { label: "Dans", value: content.dans.videos },
  { label: "Foto", value: content.foto.videos },
  { label: "Film", value: content.foto.videos }
];

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: null,
      values: []
    };
  }

  onChange = (opt, { option }) => {
    const newOpts = opt;
    const string = this.state.searchField;

    this.setState({
      searchField: string,
      values: newOpts
    });
  };

  onInputChange = (string, { action }) => {
    if (action === "input-change") {
      this.setState({
        searchField: string
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Select
          isMulti
          filterOption={this.filterOption}
          onInputChange={this.onInputChange}
          onChange={this.onChange}
          options={options}
          value={this.state.values}
        />
        {this.state.values
          ? this.state.values.map(item =>
              item.value.map(video => {
                return <p>{video}</p>;
              })
            )
          : null}
      </div>
    );
  }
}
export default Search;
