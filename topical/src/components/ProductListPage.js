import React from 'react'
import List from '@material-ui/core/List'
// import ListItem from '@material-ui/core/ListItem'
// import ListItemText from '@material-ui/core/ListItemText'

const ProductList = ({ results }) => {
  // function loadMoreItems(event) {
  //   if (event.target.scrollTop === event.target.scrollHeight)
  // }
  return (
    <div>
      <List
      // {results.name}

        // onScroll={loadMoreItems}
        // style={{
        //   maxHeight: 300,
        //   overflowY: 'scroll'
        // }}
      >
        {/* {
          this.props.products.map(product => (
            <productName
              key={product.id}
              product={product}
            />
          ))
        } */}
      </List>
    </div>
  )
}

export default ProductList
