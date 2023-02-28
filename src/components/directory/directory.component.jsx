import React, { Component } from "react";

import MenuItem from "./../menu-item/menu-item.component";
import "./directory.styles.scss";

import { images } from "../../constants";

export default class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: images.hat,
          id: 1,
          linkUrl: "shop/hats",
        },
        {
          title: "jackets",
          imageUrl: images.jackets,
          id: 2,
          linkUrl: "shop/jackets",
        },
        {
          title: "sneakers",
          imageUrl: images.sneakers,
          id: 3,
          linkUrl: "shop/sneakers",
        },
        {
          title: "womens",
          imageUrl: images.womens,
          size: "large",
          id: 4,
          size: "large",
          linkUrl: "shop/womens",
        },
        {
          title: "mens",
          imageUrl: images.mens,
          size: "large",
          id: 5,
          size: "large",
          linkUrl: "shop/mens",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}
