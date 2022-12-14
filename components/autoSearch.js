import React from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import Home from '../pages/index.js'

export function AutoSearch(props) {
  const items = [
    { 
      compare: 'central',
      id: 0,
      name: 'Camaro Central',
    },
    {
      compare: 'ground',
      id: 1,
      name: 'Ground Up Motors',
    },
    {
      compare: 'luttys',
      id: 2,
      name: "Lutty's Chevys",
    },
    {
      compare: 'partspl',
      id: 3,
      name: 'The Parts Place'
    },
    {
      compare: 'rpi',
      id: 4,
      name: 'RPI',
    },
    {
      compare: 'speedway',
      id: 5,
      name: 'Speedway Motors',
    },
    {
      compare: 'summit',
      id: 6,
      name: 'Summit Racing Equipment',
    },
    {
      compare: 'windy',
      id: 7,
      name: 'Windy City Muscle Cars',
    }
  ]

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
  }

  const handleOnHover = (result) => {
    // the item hovered
  }

  const handleOnSelect = (item) => {
    for (const key in props.dealersAndImages) {
      if (key === item.compare) {
        props.setDealers(props.dealersAndImages[key].categories)  
        props.setimage(props.dealersAndImages[key].image) 
        return
      }
    }
  }

//   const handleOnFocus = () => {

//   }

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
      </>
    )
  }

  return (
    <div className="AutoSearch">
      <header className="AutoSearch-header">
        <div style={{ width: 400, marginLeft: '5px' }}>
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            // onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
            showIcon={false}
            styling={{
              height: "34px",
              border: "2px solid black",
              borderRadius: "4px",
              backgroundColor: "white",
              hoverBackgroundColor: "lightGray",
              color: "black",
              fontSize: "16px",
              iconColor: "black",
              lineColor: "black",
              clearIconMargin: "3px 8px 0 0",
              zIndex: 2,
              width: '10%'
            }}
          />
        </div>
      </header>
    </div>
  )
}

export default AutoSearch
