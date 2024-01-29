import React, { useMemo, useState } from 'react'
import Select from 'react-select'
import { filter, gridBig, viewList } from 'assets/scripts'
import { useSelector } from 'react-redux'

const Filter = ({
  prices,
  setTags,
  show,
  setShow,
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
  setSize,
  setColor,
  setCategory,
  sortBy,
  setSortBy,
  setGridBtn,
}) => {
  const { sizes, tags, colors, categories } = useSelector((state) => state.shop)
  const [showFilter, setShowFilter] = useState(false)
  const optionsSize = useMemo(() => {
    if (sizes.length > 0) {
      return sizes?.map((size) => ({
        value: size.sizeName,
        label: size.sizeName,
      }))
    }
  }, [sizes])

  const optionsColors = useMemo(() => {
    if (colors.length > 0) {
      return colors?.map((color) => ({
        value: color.colorHexCode,
        label: (
          <span
            style={{
              display: 'block',
              width: '50px',
              height: '30px',
              backgroundColor: `${color?.colorHexCode}`,
            }}
          ></span>
        ),
      }))
    }
  }, [colors])

  const optionsTag = useMemo(() => {
    return tags?.map((tag) => ({
      value: tag.tagName,
      label: tag.tagName,
    }))
  }, [tags])

  const optionsCategory = useMemo(() => {
    return categories?.map((category) => ({
      value: category.categoryName,
      label: category.categoryName,
    }))
  }, [categories])

  const handleSizes = (option) => {
    let options = [...option]

    setSize(options)
  }
  const handleTags = (option) => {
    let options = [...option]

    setTags(options)
  }
  const handleCategories = (option) => {
    let options = [...option]

    setCategory(options)
  }
  const handleColors = (option) => {
    let options = [...option]
    const colorValues = options?.map((color) => color.value)
    setColor(colorValues)
  }

  return (
    <div className='container-fluid filter '>
      <div className='row'>
        <div className='filter-info col-12 col-sm-12 col-md-6 col-lg-6'>
          <div>
            <button className='filter-btn'>
              <img
                className='icon'
                onClick={() => setShowFilter(!showFilter)}
                src={filter}
                alt='filter'
              />
              <span> Filter </span>
            </button>
            <button>
              <img
                className='icon'
                src={gridBig}
                alt='gridBig'
                onClick={() => setGridBtn(true)}
              />
            </button>
            <button>
              <img
                className='icon'
                src={viewList}
                alt='viewList'
                onClick={() => setGridBtn(false)}
              />
            </button>
          </div>
          <div className='break'></div>
          <div>{`Showing 1–16 of ${show} results`}</div>
        </div>
        <div className='filter-info-2 col-12 col-sm-12 col-md-6 col-lg-6'>
          <div className='show'>
            <span>Show</span>
            <select
              name='show'
              id='show'
              defaultValue={show}
              onChange={(e) => setShow(e.target.value)}
            >
              <option value='8'>8</option>
              <option value='12'>12</option>
              <option value='16'>16</option>
              <option value='20'>20</option>
              <option value='24'>24</option>
            </select>
          </div>
          <div className='sort-by'>
            <span> Sort by </span>
            <select
              value={sortBy}
              name='sortBy'
              id='sortBy'
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value='nameasc'>A-Z</option>
              <option value='namedesc'>Z-A</option>
              <option value='priceasc'>Low To High</option>
              <option value='pricedesc'>High To Low</option>
            </select>
          </div>
        </div>
        <div
          className={`col-12 col-sm-12 col-md-12 col-lg-12 filters ${
            showFilter ? ` d-flex align-items-center` : 'd-none'
          } justify-content-center`}
        >
          <div className='row d-flex align-item-center selects'>
            <div className='col-lg-2 col-md-3 col-sm-3 col-6 text-center'>
              <label>Sizes</label>
              <Select
                className='select'
                isMulti={true}
                options={optionsSize}
                closeMenuOnSelect={false}
                onChange={handleSizes}
              />
            </div>
            <div className='col-lg-2 col-md-3 col-sm-3 col-6 text-center'>
              <label>Colors</label>
              <Select
                className='select'
                isMulti={true}
                options={optionsColors}
                closeMenuOnSelect={false}
                onChange={handleColors}
              />
            </div>
            <div className='col-lg-2 col-md-3 col-sm-3 col-6 text-center'>
              <label>Tags</label>
              <Select
                className='select'
                isMulti={true}
                options={optionsTag}
                closeMenuOnSelect={false}
                onChange={handleTags}
              />
            </div>
            <div className='col-lg-2 col-md-3 col-sm-3 col-6 text-center'>
              <label>Categories</label>
              <Select
                className='select'
                isMulti={true}
                options={optionsCategory}
                closeMenuOnSelect={false}
                onChange={handleCategories}
              />
            </div>
            <div className='col-lg-2 col-md-3 col-sm-3 col-6 text-center'>
              <div className='min-price'>
                <label>Min Price </label>
                <input
                  type='number'
                  value={minPrice}
                  onChange={(e) => {
                    if (parseInt(e.target.value) > 0) {
                      setMinPrice(parseInt(e.target.value))
                    }
                  }}
                />
              </div>
            </div>
            <div className='col-lg-2 col-md-3 col-sm-3 col-6 text-center'>
              <div className='max-price'>
                <label>Max Price </label>
                <input
                  type='number'
                  value={maxPrice}
                  onChange={(e) => {
                    if (parseInt(e.target.value) < 5000) {
                      setMaxPrice(e.target.value)
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter
