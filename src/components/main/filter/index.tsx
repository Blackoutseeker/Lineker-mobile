import React, { FC, memo } from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableNativeFeedback } from 'react-native'
import {
  FilterContent,
  FilterButton,
  FilterText
} from './styles'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

interface propsTemplate {
  loading: boolean
}

const FilterHeader: FC<propsTemplate> = (props) => {

  const { loading } = props
  const navigation = useNavigation()

  const navigateToFilters = (): void => {
    if(!loading) {
      navigation.navigate('Filters')
    }
  }

  return (
    <FilterContent>
      <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('rgba(255, 255, 255, 0.3)', false)}
      onPress={navigateToFilters} >
        <FilterButton>
          <FilterText>Filters</FilterText>
          <FontAwesome5 name={'filter'} color={'#fff'} size={16} />
        </FilterButton>
      </TouchableNativeFeedback>
    </FilterContent>
  )
}

export default memo(FilterHeader)