import styled from 'styled-components/native';
import { TouchableOpacity, RectButton } from 'react-native-gesture-handler';

import colors from '../../styles/colors';

import logo from '../../assets/logo.png';

export const Wrapper = styled.SafeAreaView`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  background: ${colors.dark};
  height: 64px;
  margin-bottom: 64px;
`;

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  background: ${colors.dark};
  height: 64px;
  padding: 20px;
`;

export const LogoContainer = styled(TouchableOpacity)``;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const BasketContainer = styled(RectButton)`
  margin-top: 5px;
  height: 24px;
  width: 24px;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ItemCount = styled.Text`
  position: absolute;
  text-align: center;
  top: -8px;
  right: -8px;
  width: 18px;
  height: 18px;
  min-width: 18px;
  min-height: 18px;
  background: ${colors.primary};
  color: #fff;
  font-size: 12px;
  padding: 1px;
  border-radius: 9px;
  overflow: hidden;
  z-index: 1;
`;
