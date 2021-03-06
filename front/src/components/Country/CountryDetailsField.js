import React from 'react'
import propTypes from 'prop-types'
import styles from './styles/CountryDetailsField.css'


export const createCountryDetailsField = (React) => {


  class CountryDetailsField extends React.Component {

    static propTypes = {
      value: propTypes.string,
      title: propTypes.string
    }

    render() {
      const { value, title } = this.props
      return (
        <div className={styles['country-details-field']}>
          <div
            className={styles['country-details-field__field']}
          >{`${title}:`}</div>
          <div
            className={styles['country-details-field__field--value']}>{value}</div>
        </div>
      )
    }

  }

  return CountryDetailsField

}


export default createCountryDetailsField(React)