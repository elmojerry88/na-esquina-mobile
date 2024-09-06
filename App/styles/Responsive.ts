import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';


export const rs = (size: number) => {
  return scale(size)
}

export const vs = (size: number)=> {
  return verticalScale(size)
}

export const ms = (size: number, factor?: number) => {
  return moderateScale(size, factor)
}

export const mvs = (size: number, factor?: number) => {
  return moderateVerticalScale(size, factor)
}